import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const delicious = '강남 우동맛집';
  // <h5>부분 원래는 이렇게 써야함.
  // document.querySelector('h5').innerHTML=delicious;
  const [like, setLike] = useState(0);

  const moreLike = () => {
    setLike(like + 1);
  };
  const [first, setFirst] = useState([
    '파자마',
    '남자 코트 추천',
    '우동맛집  추천',
  ]); // ['남자코트추천', '']]
  const [when, setWhen] = useState('2월 17일 발행');

  const changeTitle = () => {
    setFirst('여자 코트 추천');
  };

  const orderByTitle = () => {
    let order = [...first];
    order.sort((a, b) => {
      return a.localeCompare(b);
    });
    // order.sort();
    setFirst(order);
  };
  return (
    <div className="App">
      <div className="black-nav">
        <h3>REACT BLOG</h3>
      </div>

      <div className="content">
        {/* // <h4 style={{color:'red'}}>남자 코트 추천</h4>
				// <h4 style={{color:'red'}}>{delicious}</h4>
				// <h5>2월 17일 발행</h5>  */}
        <h4>
          {first[0]} <span onClick={moreLike}>😍</span>
          {like}
        </h4>
        <input
          type="button"
          value={'클릭하면 변신'}
          onClick={() => {
            // 1. setFirst(['여자 코트 추천','우동맛집  추천','파이썬 독학'])
            // 2. first[0]='여자 코트 추천';
            // 추천 3.
            let copy = [...first];
            copy[0] = '여자 코트 추천';
            setFirst(copy);
          }}
        />
        <button onClick={() => orderByTitle()}>가나다정렬버튼</button>
        <h5>{when}</h5>
      </div>
      <div className="content">
        <h4>{first[1]}</h4>
        <h5>{when}</h5>
      </div>
      <div className="content">
        <h4>{first[2]}</h4>
        <h5>{when}</h5>
      </div>

      {/* 모달부분 사전작업  */}
      {/* <div className='modal'>
				<h4>제목</h4>
				<p>날짜</p>
				<div>상세내역</div>
			</div> */}
      <Modal></Modal>
    </div>
  );
}

// 무조건 대문자
function Modal() {
  return (
    // 하나의 태그로시작해서 하나의태그로 끝나야함
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <div>상세내역</div>
    </div>
  );
}
export default App;
