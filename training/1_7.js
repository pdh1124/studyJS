//switch/case 문
//switch/case 문은 특정 값이 무엇이냐에 따라 다른 작업을 하고 싶을 때 사용합니다.
const device = 'iphone';

switch (device) {
  case 'iphone':
    console.log('아이폰!');
    break;     //여기서 비교를 끝낸다는 뜻
  case 'ipad':
    console.log('아이패드!');
    break;
  case 'galaxy note':
    console.log('갤럭시 노트!');
    break;
  default: // 모든 비교 값중 맞는 게 없다.
    console.log('모르겠네요..');
}