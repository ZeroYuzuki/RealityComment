function msgdsp() {
          alert("ピンク色のリンク押してもらえるとコメ欄専用ページに飛べるよ");
      }

      function botan() {
                alert("天気ってググっとけ");
            }

            function photo() {
                      alert("右にあるやん？ちゃんとみぃや？");
                  }

      const answer = window.prompt('貴方はバナナですか？');
      if(answer === 'はい') {
          window.alert('...');
      } else if(answer === 'いいえ') {
          window.alert('せやな');
      } else if(answer === 'バナナ') {
          window.alert('🍌🍌🍌🍌🍌🍌🍌🍌🍌');
      } else {
          window.alert('はいかいいえかバナナでお答えください。リロードすると再表示するよ！');
      }

      function countdown(due) {
          const now = new Date();

          const rest = due.getTime() - now.getTime();
          const sec = Math.floor(rest / 1000) % 60;
          const min = Math.floor(rest / 1000 / 60) % 60;
          const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
          const days = Math.floor(rest / 1000 / 60 / 60 / 24);
          const count = [days, hours, min, sec];

          return count;
      }

      const goal = new Date(2025, 4, 3);

      function recalc() {
          const counter = countdown(goal);
          document.getElementById('day').textContent = counter[0];
          document.getElementById('hour').textContent = counter[1];
          document.getElementById('min').textContent = String(counter[2]).padStart(2, '0');
          document.getElementById('sec').textContent = String(counter[3]).padStart(2, '0');
          refresh();
      }

      function refresh() {
          setTimeout(recalc, 1000);
      }
      recalc();

      
