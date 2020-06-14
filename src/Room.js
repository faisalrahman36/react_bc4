import React, {useState} from 'react';


function Room() {
/*
  function increaseage() {
setAge(++age);

  }*/

  //using arrow funciton

  const increaseage= ()=> {
    console.log("increasing age after button click");
    setAge(++age);

  }
  function updateLit(){
console.log("Button clicked");
//isLit=!isLit;  //it won't work as it doesn't change state
setLit(!isLit);
//setAge(++age);
  }
    // [isLit,setLit]=useState(true);
    
    //const state =useState(true);  //without destructuring old method
    // to change use let instead const
    let [isLit,setLit]= useState(true); //with destructuring new method
    //console.log("state is (faisal) : "+state);
    let [age,setAge] = useState(23);
    return (

    

   <div>
   This is room component: Lit = {isLit ? 'lit':'dark'}.
   <br/>
   Another way to check: Lit = {JSON.stringify(isLit)}
   <br/>
   <button onClick={updateLit}>Toggle Light</button>
   <br/>
   Age= {age}
   <button onClick={increaseage}>Increase age!</button>
  
   <button onClick={()=>{setAge(++age)}}>Also Increase age!</button>
  
   </div>


  ); 
}

export default Room;
