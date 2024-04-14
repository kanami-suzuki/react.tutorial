import { useState } from "react";

function Square({ value, onSquareClick, isRed }) {
  return (
    <button
      className={isRed ? "square isred" : "square"}
      onClick={onSquareClick}
    >
      {/* 
      trueだったら"square isred"クラスを付与し、
      falseだったら"square"クラスを付与する
       */}
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay, onClickNextGame }) {
  function handleClick(i) {
    const { winner } = calculateWinner(squares);
    //スプレッド構文を使用して、変数を作らずに直接中身を展開している
    if (winner || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const { winner, lines } = calculateWinner(squares);
  //calculateWinner()の計算をwinnerに代入している
  //なので、winnerの有無で「Next Game」ボタンの表示切り替えをすることができる
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      {winner && <button onClick={onClickNextGame}>Next Game</button>}
      {/* 
        勝敗がついた時だけボタンを表示したい
        短絡評価を活用してwinnerの中身がnullの時はfalseの判定になるので、
        ボタンを表示させず、winnerの中身がある時はtrueの判定になり、
        ボタンが表示される

        ボタンがクリックされたら親コンポーネントのGameでリセットしたいため、
        イベントハンドラーでpropsで受け取れるようにする
      */}
      <div className="status">{status}</div>
      {/* Next player: の部分 */}
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
          isRed={lines.includes(0)}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
          isRed={lines.includes(1)}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
          isRed={lines.includes(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
          isRed={lines.includes(3)}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
          isRed={lines.includes(4)}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
          isRed={lines.includes(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
          isRed={lines.includes(6)}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
          isRed={lines.includes(7)}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
          isRed={lines.includes(8)}
        />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isHistoryVisible, setIsHistoryVisivle] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  //ボタンがクリックされたらヒストリーを隠す処理
  function onClickHideOrShow() {
    // ボタンが表示または非表示になっている状態を作りたいのでstateを定義する
    if (isHistoryVisible === true) {
      setIsHistoryVisivle(false);
    } else {
      setIsHistoryVisivle(true);
    }
    /*
    以下のようにも書ける
    setIsHistoryVisivle(!setIsHistoryVisivle);
    現在のsetIsHistoryVisivleの反対になるという意味の記述で、if文を書かなくてもOKなので現場ではよく使用される記述方法らしい
    */
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          onClickNextGame={resetGame}
        />
      </div>
      <div className="game-info">
        {/* 履歴を隠すボタンを作成する */}
        <ol>
          <button onClick={onClickHideOrShow}>
            {isHistoryVisible ? "ヒストリーを隠す" : "ヒストリーを表示する"}
            {/* 三項演算子でtrueだったら"ヒストリーを隠す"falseだったら"ヒストリーを表示する"という意味 */}
          </button>
        </ol>
        {isHistoryVisible && <ol>{moves}</ol>}
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  //勝敗はcalculateWinnerで計算している
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  //どのマスが揃ったかというパターンをあらかじめ全部取得している
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a], //"◯", "×", "null"
        lines: lines[i], //勝った配列
      };
      /*
     勝敗がついたら勝った方(◯か×)を返す。勝敗がついていない時はnullを返す
     勝敗がついた時に勝ったラインの色を変えるため、returnをオブジェクトにする
      */
    }
  }
  /*for文は上記のパターンと実際のマスの状況を見比べて、
  いずれかのパターンに当てはまっているかどうかをチェックしている
  もし、いずれかのパターンに当てはまったのであれば、勝った方を値として返す
  パターンに当てはまるまではnullを返す*/

  //勝敗が決まっていない時
  return {
    winner: null,
    lines: [], //勝敗が決まっていないので、空の配列を返す
  };
}
