import { useState } from "react";

// function Square({ value, onSquareClick }) {
//   /*propsをJSのよくある形に直すと
//     function Square(props){
//       const{value, onSquareClick} = props;
//     }
//   */
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {/* className="square"はCSSのクラス名なので、CSSで見た目を変更することができる */}
//       {value}
//     </button>
//   );
//   // returnでJSXを返している
//   // returnでJSXを返す関数をReactではコンポーネントと呼ぶ
// }

//演習 Squareを白灰交互にする
//Squareに見た目を変更する値を渡して、親コンポーネントで白と灰色を分ける
function Square({ value, onSquareClick, isGray }) {
  //isGrayがtrueの時にCSSの「gray_squareクラス」を付与して背景色を灰色にする
  let className = "square";
  //通常時のClassNameを「square」のみにする。className={className}と記述してclassNameを動的化する
  if (isGray === true) {
    className = "square gray_square";
  }
  //if文でisGrayがtrueだったら、className={className}の中身を「square gray_square」にする
  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
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

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
          isGray={true}
        />
        {/* isGray={true}とすると背景が灰色になる */}
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
          isGray={false}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
          isGray={true}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
          isGray={false}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
          isGray={true}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
          isGray={false}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
          isGray={true}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
          isGray={false}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
          isGray={true}
        />
      </div>
    </>
  );
}

// この関数が実際にindex.jsにエクスポートしている
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  /*のnullが入った配列(初期値)。マスの数を表している
  Squareをクリックしていない状態は全ての配列がnullになっている
  Squareをクリックすると該当するマスが"X"または"O"になる
  さらに、ゲームの内容を記録するために二次元配列になっているため、マスをクリックすると配列が増えていく
  [
    初期の状態
    [null, null, null, null, null, null, null, null, null],

    １手目の状態
    ["X", null, null, null, null, null, null, null, null],

    2手目の状態
    ["X", null, null, null, null, null, null, null, "O"],
    ...以下追加されていく
  ]
  */
  const [currentMove, setCurrentMove] = useState(0);
  /*
    何手目かを表示する。初期値は0手
  */
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  //squareがクリックされた数をカウントするstateを作る(演習)
  const [clickCount, setClickCount] = useState(0);

  console.log(history);
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    //二次元配列をセットしている
    setCurrentMove(nextHistory.length - 1);
    //画面上で前の手を確認するために-1が記述されている
    setClickCount(clickCount + 1);
    //Squareがクリックされたら
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

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
      <div>clickCount={clickCount}</div>
      {/* ↑Squareがクリックされるとクリックされた数をカウントする */}
    </div>
  );
}

//演習：画面に四角を表示する
// export default function Game() {
//   return (
//     //ここに画面に表示したいものを記述する
//     <>
//       {/* 四角のコンポーネントはSquare関数で定義されているので、Squareコンポーネントを呼び出す。
//       Squareコンポーネントには引数が二つあり、Board関数内でSquareコンポーネントに記述されている
//       value={""}の中身(squares)はこの関数内には無いためvalue={""}の中身は空かもしくは何かデータ型を入れる。
//       もう一つの引数(onSquareClick)はSquareの中身がクリックされたときに行われる処理を定義する関数*/}
//       <Square value={"a"} onSquareClick={() => console.log("click")} />
//       <Square value={"b"} onSquareClick={() => console.log("click")} />
//       <Square value={"c"} onSquareClick={() => console.log("click")} />
//       {/*props＝GameコンポーネントからSquareコンポーネントにvalueの中身を渡す */}
//     </>
//   );
// }

function calculateWinner(squares) {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
