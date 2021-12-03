document.getElementById("text-button").onclick = function() {
  document.getElementById("text").innerHTML = "クリックされた！";
};

// カウントダウンする秒数
 var sec = 180;

 // 開始日時を設定
 var dt = new Date();
 console.log("Start: ", dt);
 // 終了時刻を開始日時+カウントダウンする秒数に設定
 var endDt = new Date(dt.getTime() + sec * 1000);
 console.log("End : ", endDt);

 // 1秒おきにカウントダウン
 var cnt = sec;
 var id = setInterval(function(){
   cnt--;
   console.log(cnt);
   // 現在日時と終了日時を比較
   dt = new Date();
   if(dt.getTime() >= endDt.getTime()){
     clearInterval(id);
     window.alert("3分経ったよ！");
   }
 }, 1000);

function msgdsp() {
          alert("ピンク色のリンク押してもらえるとコメ欄専用ページに飛べるよ");
      }

      function botan() {
                alert("天気ってググっとけ");
            }

            function photo() {
                      alert("右にあるやん？ちゃんとみぃや？");
                  }
