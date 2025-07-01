import React,{useState} from 'react'


export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("Uppercase was Clicked" + text);
    let newText  = text.toUpperCase();
    setText(newText)
    
  }
   const handleLoClick = ()=>{
    // console.log("Uppercase was Clicked" + text);
    let newText  = text.toLowerCase();
    setText(newText)
    
  }
  const handleOnChange = (event) =>{
    console.log("On change");
    setText(event.target.value)
    
  }




  const [text,setText] =useState("Enter text here");
  
  return (
   
    <>
    
    <h1>{props.heading}</h1>
  <div className="form-floating">
    
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={text} onChange={handleOnChange}></textarea>
  <label htmlFor="floatingTextarea">Comments</label>

  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
  
</div>
 <div className="container my-10">
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} words and {text.length}characters</p>
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{Text}</p>
 </div>
</>
  )
}


// export default TextForm
