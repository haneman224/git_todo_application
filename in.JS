

    const button = document.getElementById('touroku');
        //変数の定義　get~byはHTML内で指定されたIDを持ってくる。
 button.addEventListener('click', () => {
        //イベント発生時のプログラムを実行（クリック）
    const input = document.getElementById('yarukoto');
        //const inputは変数を名付けるのと同時に、get~byidなのでHTML内で呼び出しを行ってる。
        //ここ一連の設定でクリックしたときに関数を連動し、動作させる。
    const li = document.createElement('li');
        //変数　liにおいて、タグをJavaScript内で作成して、新しい変数liにcreateelmentはHTMLタグ名を指定して新しい要素を作る。
    li.innerText = input.value;
        //テキストを入力するとli内に表記されるようになる。

    const doneButton = document.createElement('button');
        //変数　buttonにおいて、buttonを新しく作ることができる。
    doneButton.innerText = '完了';
    li.appendChild(doneButton);
        //li（リストのそれぞれの項目）に完了ボタンを追加するために、appendChildを使う。
        //これでliの末尾（項目の最後）にボタンをつけれる。

doneButton.addEventListener('click', () =>{
        //変数doneButtonに対してクリックイベントが発生したときに設定した打消し線が表示されるように指示します。
        //この設定で完了ボタンから一番近いli要素を見つけてきて、Cssのスタイルがつきます。

    const li = doneButton.closest('li');
    li.classList.add('yokosen');

         //完了したタスクの削除をするボタンを追加する。オリジナル作業順２ ボタンクリック後削除。
         const cancellation_button = document.createElement('button');
         cancellation_button.innerText='削除';
         li.appendChild(cancellation_button);
         cancellation_button.addEventListener('click',() =>{
            li.remove('')
         });
 });

 //未完了ボタンの追加とその処理（CSSの打ち消し。）オリジナル！作業順１

 const incomplete_button =document.createElement('button');
 incomplete_button.innerText ='未完了';
 li.appendChild(incomplete_button);

 incomplete_button.addEventListener('click',()=> {
    li.classList.remove('yokosen');
 })


 const ol = document.querySelector('ol');
ol.appendChild(li);
//この部分はolの末尾にliを追加していくようにする指示です。
});

