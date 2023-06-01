// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {
//   const [글제목, b] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );
//   const	[when, setWhen] = useState('2월 17일 발행');

//   const [like, setLike] = useState(0);

//   const moreLike = () => {
// 	  setLike(like+1);
//   }

//   return (
//     <div className='App'>
// 		<div className='black-nav'>
// 			<h3>REACT BLOG</h3>
// 		</div>

// 			<div className='content'>
// 				<h4>{글제목[0]} <span onClick={moreLike}>😍</span>{like} </h4>
// 				<h5>{when}</h5>

// 			</div>
// 			<div className='content'>
// 				<h4>{글제목[1]}</h4>
// 				<h5>{when}</h5> 
// 			</div>
// 			<div className='content'>
// 				<h4>{글제목[2]}</h4>
// 				<h5>{when}</h5> 
// 			</div>

// 	</div>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(){
const delicious= '강남 우동맛집';
// <h5>부분 원래는 이렇게 써야함.
// document.querySelector('h5').innerHTML=delicious;

const [first,setFirst] = useState('남자 코트 추천'); // ['남자코트추천', '']]
const [second,setSecond] = useState('우동맛집  추천');
const [third,setThird] = useState('파이썬 독학');
const [when,setWhen]=useState('2월 17일 발행');

// --->꿀팁:const [first,b] = useState(['남자 코트 추천','우동맛집  추천','파이썬 독학']); 으로 사용해도 됨.
// ->first[0]='남자코트추천', first[1]='우동맛집추천'...
// ------------------------------------------------
const [title,setTitle]=useState('남자 코트 추천');

const changeTitle =()=>{
	setFirst('여자 코트 추천');
}

	return(
	<div className='App'>
		<div className='black-nav'>
			<h3>REACT BLOG</h3>
		</div>

			<div className='content'>
				{/* // <h4 style={{color:'red'}}>남자 코트 추천</h4>
				// <h4 style={{color:'red'}}>{delicious}</h4>
				// <h5>2월 17일 발행</h5>  */}
				<h4>{first} <input type='button' value={'클릭하면 변신'} onClick={changeTitle} /></h4>
				<h5>{when}</h5> 
			</div>
			<div className='content'>
				<h4>{second}</h4>
				<h5>{when}</h5> 
			</div>
			<div className='content'>
				<h4>{third}</h4>
				<h5>{when}</h5> 
			</div>

	</div>
	)
}
export default App;

