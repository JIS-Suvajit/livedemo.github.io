import React,{useState} from "react";
const App=()=>{
 
    const state=useState();
    const[name,setname]= useState(" ");
    const[fullName,setFullName]=useState();

    const inputEvent=(event)=>{
    
    setname(event.target.value)

    }
    const onSubmit=()=>{

        setFullName(name);
    }
    return(
    
    <div className="cards">
    <h1>Hello {fullName}</h1>
    <input type="text" placeholder="Enter your name" onChange={inputEvent}/>
    <button onClick={onSubmit}>Click Me  </button>
   </div>
   
);

};
export default App;