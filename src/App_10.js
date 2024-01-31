import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [like, setLike] = useState([0, 0, 0]);
  const [first, setFirst] = useState([
    '파자마',
    '남자 코트 추천',
    '우동맛집  추천',
  ]); // ['남자코트추천', '']]
  const [when, setWhen] = useState('2월 17일 발행');
  const [openModal, setOpenModal] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);

  const moreLike = (i) => {
    let like_copy = [...like];
    like_copy[i] = like[i] + 1;
    setLike(like_copy);
  };

  const orderByTitle = () => {
    let order = [...first];
    order.sort((a, b) => {
      return a.localeCompare(b);
    });
    // order.sort();
    setFirst(order);
  };

  const modalOpen = (i) => {
    console.log('i', i);
    setTitleIndex(i);
    setOpenModal(true);
  };
  return (
    <div className="App">
      <div className="black-nav">
        <h3>REACT BLOG</h3>
      </div>

      {first.map((data, i) => {
        console.log('data', data);
        return (
          <div className="content" key={data}>
            <div className="right_wrap">
              <h4 onClick={() => modalOpen(i)}>{data}</h4>
              <div className="setting_position">
                <span onClick={() => moreLike(i)}>😍</span>
                {like[i]}
                <input
                  type="button"
                  value={'클릭하면 변신'}
                  onClick={() => {
                    let copy = [...first];
                    copy[0] = '여자 코트 추천';
                    setFirst(copy);
                  }}
                />
                <button onClick={() => orderByTitle()}>가나다정렬버튼</button>
              </div>
            </div>
            <h5>{when}</h5>
          </div>
        );
      })}
      {/* {openModal && <Modal color={'yellow'} data={first} setData={setFirst} index={titleIndex} />} */}
      {openModal && (
        <Modal
          color={'yellow'}
          data={first}
          setData={setFirst}
          index={titleIndex}
        />
      )}
    </div>
  );
}

// 무조건 대문자
function Modal({ data, color, setData, index }) {
  console.log('data', data);

  const titleChange = () => {
    console.log('first', data);
    let copy = [...data];
    copy[index] = '여자 코트 추천';
    setData(copy);
  };

  return (
    // 하나의 태그로시작해서 하나의태그로 끝나야함
    <div className="modal" style={{ background: color }}>
      <h4>{data[index]}</h4>
      <p>날짜</p>
      <div>상세내역</div>
      <button onClick={() => titleChange()}>글수정</button>
    </div>
  );
}
export default App;
