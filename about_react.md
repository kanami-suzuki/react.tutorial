## 講座内でReactに関して学んだもの

### Reactとは
- facebook社が開発したJavaScriptライブラリ。Webサイト上のUI構築をすることができる  
    - UI：ユーザーインターフェース。ユーザーとサービスなどを繋ぐもので、ユーザーの目に触れるものは全てUIといえる
- 仮想DOMを構築できるため、ページ表示の高速化ができる。仮想DOMはJavaScriptで管理することができる
    - DOM：HTML/CSS/JavaScriptによって構築されたDOMツリーのことを指す。ブラウザ上でWebページを描画するために構築される。少しでも情報に変化があった場合は、改めて情報を受け取り直してからDOMを再構築し、再描画しているため情報量が多いと表示が遅くなる
    - 仮想DOM：変更の情報を受け取った時にすぐにブラウザへ描画せず、まずバーチャルなDOMを構築することを指す。そしてすでに描画されている実際のDOMと新しく作成した仮想DOMで変更を比較し、情報が変化している部分だけを反映させることができるため変更を最小限に抑えることができる

### コンポーネント指向
- JSXを返す関数をReactではコンポーネントと呼ぶ
- 大体がreturnで返すもののことを言う
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

### props
- 親コンポーネントから子コンポーネント値を渡すときに使う
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