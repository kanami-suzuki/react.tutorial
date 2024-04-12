## 講座内でReactに関して学んだもの

### Reactとは
- facebook社が開発したJavaScriptライブラリ。Webサイト上のUI構築をすることができる  
    - UI：ユーザーインターフェース。ユーザーとサービスなどを繋ぐもので、ユーザーの目に触れるものは全てUIといえる
- 仮想DOMを構築できるため、ページ表示の高速化ができる。仮想DOMはJavaScriptで管理することができる
    - DOM：HTML/CSS/JavaScriptによって構築されたDOMツリーのことを指す。ブラウザ上でWebページを描画するために構築される。少しでも情報に変化があった場合は、改めて情報を受け取り直してからDOMを再構築し、再描画しているため情報量が多いと表示が遅くなる
    - 仮想DOM：変更の情報を受け取った時にすぐにブラウザへ描画せず、まずバーチャルなDOMを構築することを指す。そしてすでに描画されている実際のDOMと新しく作成した仮想DOMで変更を比較し、情報が変化している部分だけを反映させることができるため変更を最小限に抑えることができる

### コンポーネント指向
- コンポーネント：UIの一部をパーツ化して切り出すことができる機能。JSXを返す関数をReactではコンポーネントと呼ぶ。JavaScriptの関数に近い。
- 大体がreturnで返すもののことを言う。入力されたものを受け取り、画面上に表示する内容をReact要素で返す
- 関数名＋コンポーネントで呼ぶ(Square関数のコンポーネント＝Squareコンポーネント等)
- Reactのアプリケーションはコンポーネントを組み合わせることでできている
- UIをなるべく小さなコンポーネントに分けることで開発がしやすくなる
    - 再利用しやすい
    - コードが読みやすい
    - メンテナンスしやすい
        - Xで例えると、つぶやく部分とプロフィール部分のアイコンを共通のコンポーネントにすることで一つの改修で全てのアイコンに反映することができる
        - コンポーネントを小さくすることで、そのコンポーネントがどういう命令かというのが把握しやすくなる
- コンポーネントは入れ子にすることもできる
    - Xで例えると、アイコン部分のコンポーネント、名前の部分のコンポーネントをまとめたプロフィールのヘッダー部分のコンポーネントにすることもできる
        - Header
            - Name
            - Icon

### JSXとは
- JavaScriptの拡張言語。facebook社が開発した
- JavaScriptベースで書かれている言語
- JavaScriptとHTMLを掛け合わせて使えるようにした言語
- テンプレート言語ではなくあくまで拡張言語。JSXの中でHTMLっぽい記述をしながらJavaScriptが使える
~~~
//JSXを使用しない場合(Vanilla JS)
React.createElement(
    'button',
    {className: 'btn-blue'},
    'Click me!'
)

//JSXを使用して記述した場合
<button className={'btn-blue'}>
    Click me!
</button>

/*JSXを使用しない場合にReactの構文を使用するときは、必ず頭にReact.createElementとつけなければならない。
JSXを使用すると、HTMLのようにJSを記述することができる
*/
~~~

### クラスコンポーネントと関数コンポーネント
- クラスコンポーネント：JavaScriptのクラスを使って定義される。使用方法はJSの関数に似ていて、従来ではクラスコンポーネントの方が多く使用されていた。複雑なコンポーネントに適しているが、コードが長くなる欠点がある　
~~~
import React, { Component } from "react";

class ClassComponent extends Component {
 render() {
   return <h1>Hello, React</h1>;
 }
}
~~~
- 関数コンポーネント：JSの関数のように定義するコンポーネント。JSXを返すJS関数で、短いコードで再利用化が容易なため、最近では関数コンポーネントの方がメジャーとなってきている
~~~
import React from 'react';

const FunctionalComponent = () => {
  return <h1>Hello React</h1>;
};
~~~

### Reactフック
- React16.8で追加された機能。stateなどのReactの機能をクラスを書かずに使用できるようになった。

### props
- props(性質)という意味
- 親コンポーネントから子コンポーネント値を渡すための仕組み
    1. 子コンポーネントでどういうpropsを受け取るか決める(引数)
    2. 親の方で中身を渡す
- App.jsで例えると、
    - Gameコンポーネント → Boardコンポーネント
    - Boardコンポーネント → Squareコンポーネント
    - Gameコンポーネント → Squareコンポーネント

App.jsのSquare関数で例えると以下のようになる
~~~
function Square({ value, onSquareClick }) {
  return (　//子コンポーネント
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
export default function Game() { 
  return (　//親コンポーネント
    <>
      <Square value={"c"} onSquareClick={() => console.log("click")} />
      {/*props＝GameコンポーネントからSquareコンポーネントにvalueの中身を渡す */}
    </>
  );
}
~~~
- 上記の`Square()`の引数に`{ value, onSquareClick }`というpropsオブジェクトを入れている
- 下記のように別な書き方をすることもできる
~~~
//オブジェクトを展開して代入する
function Square(props){
    const {value, onSquareClick} = props
    return (　
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

//コンポーネントの中でpropsオブジェクトの中身を定義する
function Square(props){
    return (　
    <button className="square" onClick={props.onSquareClick}>
      {props.value}
    </button>
  );
}
~~~
- propsの注意点として以下のようなものがある
    - propsの値は変更できない
    - 親から子へのみ値を渡すことができる(逆はできない)
~~~
function Square(props){
    props.value = "書き換えたい" //最初から定義することはできない
    return (　
    <button className="square" onClick={props.onSquareClick}>
      {props.value}
    </button>
  );
}  
~~~
#### propsでイベントハンドラを渡す
- イベントハンドラ：イベントが発生したときに呼び出される処理のこと。JavaScriptにおける「イベントの中継役」
    - イベント：event。「出来事」「行事」「事件」。マウスをクリックしたり、キーボードをタッチしたりといったPC側が何かをするきっかけになる動作のこと。イベントをキャッチするという。プログラムがイベントをキャッチしたときに行う処理を「イベントハンドラ」と呼ぶ
    - ハンドラ：handler。「扱う人」「トレーナー」という意味
    - JavaScriptにおけるイベントハンドラとは、上記のイベントハンドラとは少し意味が異なり、「**Aというイベントが発生したらBの処理に引き渡すための中継役**」となる
        - 例えば、「onClick」というイベントハンドラは「クリックというイベントが発生したら特定の処理をする」という意味がある。イベント(onClick)と処理を中継している。
- propsでイベントハンドラを渡す時は
    - 子ハンドラ：イベントが発生したことを伝える(上のonClickの役割)
    - 親ハンドラ：イベントが発生したときの処理を行う
- 設計する時は、子の役割をシンプルにすることでメンテナンスがしやすくなる。親コンポーネントは複雑化するが、子コンポーネントがシンプルだと何のイベントをするのかが分かりやすくなったり、メンテナンス性が上がるというメリットがある
~~~
function Square(props){
    return (　
    <button className="square" onClick={props.onSquareClick}>
    {/*ボタンがクリックされたことを親コンポーネントに伝える */}
      {props.value}
    </button>
  );
}  
export default function Game() { 
  return (
    <>
      <Square value={"c"} onSquareClick={() => console.log("click")} />
      {/*クリックされた時の処理を親コンポーネントで指定する*/}
    </>
  );
}
~~~

### State
- state(状態)という意味。propsが値を変更できないのに対して、stateはユーザーの操作(ボタンを押す、フォームに入力するなど)によって値を変更することができる
- 主に画面上に表示する項目、入力値などに使用される
- ReactはStateの値が変わると画面が更新される  
  
- Stateの基本的な使い方
    - useState：関数コンポーネントでStateを保持、更新するための機能。初回のレンダリングで、初期値となる値をuseStateに引数として渡すとその値が一つ目の要素のStateになる。二つ目以降の要素はState値を更新するための関数となり、基本的にこの関数を使ってState値を更新する
~~~
//初期値
const [count, setCount] = useState(0);
//useStateでstateを宣言する。上記ではcountという名前のstateを作成している
//setCountはstateを更新する関数
//useState(count)の初期値は0でsetCount関数で更新していく

//更新
setCount(1);

//表示(JSX)
<div>{count}</div>;
~~~