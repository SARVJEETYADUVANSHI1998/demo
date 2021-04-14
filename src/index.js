import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// const primefunction= (num) =>{
//   var num=document.getElementById(num).value ;
//   var i,j,isprime=0 ,store=0;
//     for(i=2; i<=100; i++){
//      isprime = 1;
//      for(j=2; j=i/2; j++){
//        if(i%j==0){
//          isprime = 0;
//           break;
//        }
//      }
//       if(isprime==1){
//         store=store+i;
//         document.write(i+'');
//       }
     
//     }
//     document.write("<br>" +store);
     
// }   


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (f
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

