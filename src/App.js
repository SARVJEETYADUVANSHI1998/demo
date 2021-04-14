import Name from './containers/name/Name'
  function App() {
    
      
  // const primeNumber=(num)=>{
    
//     var i,j,isprime=0;
//     for(i=2; i<=num;i++){
//         isprime=1;
//         for(j=2;j<=i/2;j++){
//             if(i%j===0){
//                 isprime=0;
//                 break;
//             }
//         }
//         if(isprime===1){
             
//               document.write(i+"");
//               document.write("<br>");
//         }
//     }
//     // document.write("<br>");
// }
//  primeNumber(100) ;

// const patternfunction =(input)=>{
//         var i,j;
//         for(i=1; i<=6; i++){
             
//              for(j=1; j<=i; j++){
//                    document.write("*");
//              }
//                document.write("<br>");
//         }
// }
//    patternfunction("*")
  return (
    <div className="App">
          <Name/>
           {/* <center>
           <input type="number" Name="number" id="t1"></input>
            <button onClick="prime" className="">prime number function</button> 
            <br/>
             
            <button onclick="pattern" className="2px solid  green">pattern function</button>
            </center> */}
    </div>
  );
}

export default App;
