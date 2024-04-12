### JSの記述ルール
1. 大文字と小文字は区別される
~~~
let Name;
let name; //Nameとは別物
~~~
- JSでは全て大文字と小文字は区別されるので注意
2. 半角で書く
~~~
let name; //OK
ｌｅｔ　ｎａｍｅ；　//全角なのでエラーになる
~~~
- ただし、シングルクォーテーション `'` や<br>
  ダブルクォーテーション`"`<br>
  で囲まれた中身は全角でもOK
~~~
name = '佐藤';
name = "田中";
~~~
3. 行末にセミコロンをつける
- 行末にセミコロン`;`をつける<br>
  省略可能だが、意図しないエラーを防ぐためにも書いた方がいい
~~~
let name;
~~~
4. コメント
- コード内に補足の文章を書ける
~~~
//スラッシュ2個でコメント
let name; //行末にも書ける
/*
複数行の
コメントも書ける
*/
~~~

### 変数
- 値を格納する箱のようなもの
~~~
let country; //箱にcountryという名前をつける
country = "日本"; //countryという箱に「日本」という値を入れる
country = "アメリカ"; //箱の中身を入れ替えることも可能
~~~
- letとconst
  - let：値を変更できる(再代入できる)
  - const：値を変更できない(再代入できない)
~~~
const myCountry = "フランス";
myCountry = "ドイツ"; //エラーが起きる
~~~

### データ型
- 変数に代入する値には色々は種類があり、データ型という
- 代表的なものでは文字列(String)、数値(Number)、真偽値(Boolean)などがある
1. 文字列：String
- 名前や国名などの文字を表す。シングルクォーター(')やダブルクォーター(")を使用する
~~~
let name = "田中";
let country = "Japan";
~~~
2. 数値:Number
- 数値を表す。シングルクォーターなどは無しでそのまま記述する
~~~
let age = 23;
~~~
3. 真偽値:Boolean
- プログラミングではよく使用する。true(真)かfalse(偽)で表す。代入した値が結果に対して真偽どちらかを表す
~~~
let isStudent = false;
~~~
4. nullとundefined
- 空っぽを表す
- null：明示的に空っぽを示すために使う。プログラマー自身が空っぽなことを明示するために使用する
- undefined：何も代入されていないことを表す。変数に値を入れていないときは自動的に値がundefinedになる

### オブジェクト
- データをひとまとめにする機能(データ型)
- 違う性質の複数の値をまとめて格納するための箱
- 商品管理システムを作りたいと考えた時に下記のような情報が必要になったと仮定する
  - 商品名 → 文字列(name)
  - 価格 → 数値(price)
  - 期間限定商品か →　真偽値(isLimited)
  上記の項目をひとまとめにしたい → そこでオブジェクトを使用する
~~~
//オブジェクトの基本的な書き方
const beer = {
  name: "常夏ビール",
  price: 300,
  isLimited; true,
};
const cookie = {
  name: "素朴なクッキー",
  price: 200,
  isLimited; false,
};
~~~

### 配列
- 同じ性質の複数の値をまとめて格納するための箱
- `[]`で囲んで書く
~~~
const array = [1, 2, 3];
~~~
- 配列には色々と入れられる
~~~
const fruits = ["りんご", "みかん", "メロン"];
const　score = [79, 80, 100];
~~~
- オブジェクトに配列を入れることもできる
~~~
const products = [
  {
    name: "常夏ビール",
    price: 300,
    isLimited; true,
  },
  {
    name: "素朴なクッキー",
    price: 200,
    isLimited; false,
  },
];
~~~
- 配列に配列を入れることもできる。二次元配列ともいう
~~~
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
];
~~~

### 条件分岐(if,else)
- ある条件によって処理を分けたい時に使用する  
| イートインを利用するか |                | 
| ---------------------- | -------------- | 
| はい                   | いいえ         | 
| 消費税10%を適用        | 消費税8%を適用 | 

~~~
//ハンバーガーを購入した時にかかってくる消費税の税率
const product = {
  name: "ハンバーガー",
  isEatIn: true,
  price: 500
};

let price = product.price;
//結果を入れる変数として、productオブジェクトのprice(500円)を初期値で代入する
if(product.isEatIn === true){
  //イートインでの食事であれば消費税10%を適用する
  price = price * 1.10;
  //元のprice(500円)にprice×消費税率(10%)をかけたものを再代入する
}else{
  //テイクアウトであれば消費税8%を適用する
  price = price * 1.08;
  //元のprice(500円)にprice×消費税率(8%)をかけたものを再代入する
}
console.log("結果", price);
~~~

### for 繰り返し制御
- 同じような処理を何度も繰り返したい時に使用する
- 配列に対して使用することが多い
~~~
//商品を複数購入したときにかかる税金を一つずつではなく一回の命令で繰り返し計算する
const products = [
  {
    name: "ハンバーガー",
    isEatIn: true,
    price: 500
  },
  {
    name: "寿司",
    isEatIn: true,
    price: 1000
  },
  {
    name: "マヨネーズ",
    isEatIn: false,
    price: 300
  }
];

for (const product of products){
  //for(const 変数名 of 配列名)　配列名で指定した配列から取り出したものが変数名に代入される

  let price = product.price;
  if(product.isEatIn === true){
    price = price * 1.10;
  } else{
    price = price * 1.08;
  }
  console.log("結果", price);
}
~~~

### 関数
- 処理をまとめることができる
  - 汎用的な同じ処理を何度も書かなくて良い。色々なところで再利用できる
  - 名前をつけて関数でまとめることでコード自体が読みやすくなる
~~~
//商品を複数購入したときにかかる税金を一つずつではなく一回の命令で繰り返し計算する
const products = [
  {
    name: "ハンバーガー",
    isEatIn: true,
    price: 500
  },
  {
    name: "寿司",
    isEatIn: true,
    price: 1000
  },
  {
    name: "マヨネーズ",
    isEatIn: false,
    price: 300
  },
];

//消費税の計算を関数にまとめる
function calculateTax(product){
  //function 関数名(引数)

  let price = product.price;
  if(product.isEatIn === true){
    price = price * 1.10;
  } else{
    price = price * 1.08;
  }
  //処理

  return price;
  //return 返り値;
}

for(const product of products){
  const price = calculateTax(product);

  console.log("結果", price);
}
~~~

### イミュータブル
- プログラム中に登場する変数や配列、オブジェクトなどが作成後に状態を変更できないことをいう。逆に後から変更可能なものをミュータブルという
- 元のデータを更新せず、別の場所に参照先を切り替えることが内部的に行われている