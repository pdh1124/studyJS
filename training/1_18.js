//반복문

//while문

//i의 초기값을 작성하는 부분이 반복문의 바깥에서 작성되어짐.
let i = 0;

//while문은 조건을 바로 넣는다.
while(i < 10 /*주의점은 조건은 언젠가는 false가 되어야 한다.안그러면 영원히 반복함 */) {
    console.log(i);
    // i의 변화를 주는것을 내부에서 한다.
    i++;
}

//while문은 조건이 까다로운 경우
//어떤값이 true가 됬을때 등등 사용
let isFun = false;
while (isFun === false) {
    console.log(j);
    j++;
    if (j === 30) {
        isfun = true;
    }
}