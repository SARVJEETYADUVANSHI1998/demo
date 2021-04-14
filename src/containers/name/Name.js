import React,{useState} from 'react'

const Name = () => {
    const [input,setInput]=useState(0);
    // const [pattern,setPattern]=useState(false);
    //    const [prime,setPrime]=useState(true);    
      const[func,setFunc]=useState(0);
    // const [stars,setStars]=useState([]);
    const [arrayPrime,setArrayPrime]=useState([]);
    const [arraypattern,setArrayPattern]=useState([]);
 //  const primeNumber=(num)=>{
 //         console.log (input);
 //         var i,j,isprime=0;
 //         for(i=2; i<=num;i++){
 //             isprime=1;
 //             for(j=2;j<=i/2;j++){
 //                 if(i%j==0){
 //                     isprime=0;
 //                     break;
 //                 }
 //             }
 //             if(isprime==1){
                 
 //                   document.write(i+"");
 //             }
 //         }
 //         document.write("<br>");
 //     }
 //     const patternfunction =(input)=>{
 //           var i,j;
 //         for(i=1; i<=input; i++){
             
 //              for(j=1; j<=i; j++){
 //                    document.write("*");
 //              }
 //                document.write("<br>")
        
 //     }  
 // } 

    //    (input>0)?console.log('greater then or equal to zero'):console.log('less then zero')
             const primeNumber = () =>{
                console.log(input);
                 setFunc(1);

             let arr = [];
  
               for(var i=2; i<=input;i++){
                   var flag = false ;
                   for(var j=2; j<i; j++){
                        if(i%j === 0){
                        flag = true;
                          break;
                       }
                   
                    }
                        if(i > 1 && !flag){
                          arr.push(i);
                       }
                       console.log(arr);
                }
                   setArrayPrime(arr);
            } 
             
             
                const patternfunction = () =>{
                    console.log(input);
                      setFunc(2);
                          var ar = [];
           
                           
                        for(var i=1; i<=input; i++)
                       { 
                          var x = '';
                            for(var j=1; j<=i; j++){
                              
                                   x= x+"*";
                                }
                                 ar.push(x);
                        }
                             setArrayPattern(ar); 
                          console.log(ar);
                    
                              
                
                }

            


       const inputfunction = (el) =>{
           setInput(el.target.value);
           
          
         
        }
      
        
  
        
    return (
        <div>
            <center>
            <input value={input} onChange={(e)=>{inputfunction(e)}} type="number" Name="numb"  id="mb" placeholder="enter the number"></input>
            &emsp;
            <button onClick={()=>primeNumber()}  className="demo1">prime number function</button>
            &emsp;
            <button onClick={()=>{patternfunction()}} className="demo2">pattern show </button>
            </center>
            
            {
             func!== 0?
             (
              func===2?arraypattern.map((item)=>(
                  <p>{item}</p>
            )):
            null
             ):null     
            }
            
            {
                func!==0?
                (
              (func===1)?arrayPrime.map((item)=>(
                    <p>{item}</p>
              )):null
                ):null 
            }
            
        </div>
    )
}

export default Name;
