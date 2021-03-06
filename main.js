const candidate = Array(45).fill().map((v, i) => i + 1); // 매번 랜덤으로 하나씩(숫자 야구게임 방식) 총 7개를 뽑는게 아니라 45개를 랜덤으로 섞은 뒤 앞에서(혹은 뒤에서) 7개 꺼내는 방식. 즉, 전부 다 랜덤으로 섞냐, 뽑는 값 일부만 랜덤으로 섞냐에 따라서 알고리즘이 달라짐
    const shuffle = [];
    while (candidate.length > 0) {
      const random = Math.floor(Math.random() * candidate.length); // 무작위 인덱스 뽑기
      const spliceArray = candidate.splice(random, 1); // 뽑은 값은 배열에 들어있음. splice의 return 값이 배열이 되기 때문에 가능
      const value = spliceArray[0]; // spliceArray 배열에 들어 있는 값을 꺼내어(45개부터 하니씩 splice돼서 44, 43, 42 ... 1의 순서로 감)
      shuffle.push(value); // shuffle 배열에 넣기
    }
    console.log(shuffle)

    const winBalls = shuffle.splice(0, 6).sort((a, b) => a - b); // 공을 작은 순서부터 차례대로 정렬하기 위해 sort 사용
    const bonus = shuffle[6];
    console.log(winBalls, bonus);

    function colorize(number, $tag) {
      if (number < 10) {
        $tag.style.backgroundColor = '#8CABD9';
      } else if (number < 20) {
        $tag.style.backgroundColor = '#F6A7B8';
      } else if (number < 30) {
        $tag.style.backgroundColor = '#F1EC7A';
      } else if (number < 40) {
        $tag.style.backgroundColor = '#1D4D9F';
        $tag.style.color = 'white';
      } else {
        $tag.style.backgroundColor = '#F08838';
      }
    }

    const $result = document.querySelector('#result');
    const $bonus = document.querySelector('#bonus');

    const showBall = (number, $target) => {
      const $ball = document.createElement('div');
      $ball.className = 'ball';
      colorize(number, $ball); // 매개변수로 넣어질 숫자 number(winBalls[i]임)와 태그인 $ball을 넣고 함수 호출. 물론 여기에 함수 그대로 적어도 되지만 따로 분리해 주는 것이 colorize 함수 이름을 통해 추측도 되고 보기에 좋음
      $ball.textContent = number;
      $target.appendChild($ball);
    }

    for (let i = 0; i < winBalls.length; i++) {
      setTimeout(() => {
        showBall(winBalls[i], $result);
      }, (i + 1) * 1000);
    }

    setTimeout(() => {
      showBall(bonus, $bonus);
    }, 7000);




    
  
