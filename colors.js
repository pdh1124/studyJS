//이 color.js에 연동되어 있는 html을 수정하고 싶으면 이 파일만 수정하면 된다.

//Body라는 변수에 객체를 담음
var Body = {
    setColor:function(color){
        document.querySelector('body').style.color = color
    },
    setBackgorundColor:function(color) {
    document.querySelector('body').style.backgroundColor = color
    }
}
// 모든 텍스트의 컬러를 수정하는 함수
// function BodySetColor(color) {
//     document.querySelector('body').style.color = color
//}
// 바디에 백그라운드 컬러를 수정하는 함수
// function BodySetBackgorundColor(color) {
//     document.querySelector('body').style.backgroundColor = color
// }
//Body.을 이용해 객체를 간소화 함

//Links도 객체로 만듦
var Links = {
    setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
        console.log(alist[i]);
        alist[i].style.color = color;
        i = i + 1;
    }
}
}
// 링크의 컬러를 수정하는 함수
// function LinksSetColor(color) {
//     var alist = document.querySelectorAll('a');
//     var i = 0;
//     while (i < alist.length) {
//         console.log(alist[i]);
//         alist[i].style.color = color;
//         i = i + 1;
//     }
// }

function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === 'night') {
        Body.setBackgorundColor('black');
        Body.setColor('white')
        self.value = 'day'

        Links.setColor('red');
    } else {
        Body.setBackgorundColor('white')
        Body.setColor('black')
        self.value = 'night'

        Links.setColor('blue');
    }
}

