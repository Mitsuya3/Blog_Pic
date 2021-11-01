'use strict';

{
  /* 全ての dt要素(質問です)にクリックイベントを設定したい */
  const dts = document.querySelectorAll('dt');  // 複数の dt要素という意味で dts として、 querySelectorAll を使う

  dts.forEach(dt => {                           // それぞれの要素を dtとして次の処理をする
    dt.addEventListener('click', () => {        // この dtにイベントリスナーを追加する。dt(質問です)をクリックしたら
      dt.parentNode.classList.toggle('appear'); // その親要素である divに appearというクラスをつけ外しすることで
                                                // ddの内容の表示・非表示を切り替えたり、
                                                // 「質問です」の後ろにつけた + マークが変化するようにする

      /* アコーディオンですが、複数の項目を同時に開く事ができるが、ひとつを開いたら他は閉じたいという場合もある。
         クリックした要素の親要素に appearクラスを付けた後、一旦全 dt要素を調べ、クリックされた dt要素以外を閉じる。
      */                                          
      dts.forEach(el => {   /* 全ての dt要素は上で dtsで取得しているので、それらに対して forEachを使う */
                            /* el に入ってくるのは dt要素だが、こちらの dtと区別するために、変数名を elとしている*/
        if (dt !== el) {    /* 今クリックされている dt と、今調べている el が異なっていたら、
                            /* その要素の親要素から appear クラスを外す*/    
                            /* それぞれの要素を element の el として次の処理をする */
          el.parentNode.classList.remove('appear');
        }
      });
    });
  });
}