//continue와 break

for (let i = 0; i < 10; i++) {
    if (i === 2) {
        continue; //continue는 특정 조건이 만족됬을때 다음루트를 하여라. 2가 스킵
    } 
    console.log(i);

    if (i === 7) {
        break; // break는 끝내라. 7이상은 다 스킵
    }
}