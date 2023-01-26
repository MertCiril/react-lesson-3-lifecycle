import { useState, useEffect } from "react";

function Counter() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("Mert");
  
    //Herhangi bir state güncellendiği zaman çalışır. Yani isim de sayı da değiştiği zaman çalışır
    /*useEffect(()=>{
      console.log("State güncellendi!");
    })*/
  
    useEffect(()=>{
      console.log("Component mount edildi!");
      const interval =setInterval(()=>{
        setCount(count+1);
      },1000)


      return ()=>{
        console.log("Component unmount edildi!");
        clearInterval(interval);
      }
    });
  
    //sadece count state güncellendiğinde çalışır
    useEffect(()=>{
      console.log("number state edildi");
    }, [count]);
  
  return (
    <div>
    <h1>{count}</h1>
    <br/>
    <button onClick={()=> {setCount(count+1)}}>Click</button>
    <hr/>
    <h1>{name}</h1>
    <br/>
    <button onClick={()=> {setName("Mehmet")}}>Click</button>
   </div>
  )
}

export default Counter
