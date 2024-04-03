## 講座内でReactに関して学んだもの

### Reactとは
- facebook社が開発したJavaScriptライブラリ。Webサイト上のUI構築をすることができる  
    - UI：ユーザーインターフェース。ユーザーとサービスなどを繋ぐもので、ユーザーの目に触れるものは全てUIといえる
- 仮想DOMを構築できるため、ページ表示の高速化ができる。仮想DOMはJavaScriptで管理することができる
    - DOM：HTML/CSS/JavaScriptによって構築されたDOMツリーのことを指す。ブラウザ上でWebページを描画するために構築される。少しでも情報に変化があった場合は、改めて情報を受け取り直してからDOMを再構築し、再描画しているため情報量が多いと表示が遅くなる
    - 仮想DOM：変更の情報を受け取った時にすぐにブラウザへ描画せず、まずバーチャルなDOMを構築することを指す。そしてすでに描画されている実際のDOMと新しく作成した仮想DOMで変更を比較し、情報が変化している部分だけを反映させることができるため変更を最小限に抑えることができる

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