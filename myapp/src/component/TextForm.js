import React,{useState} from 'react'

function TextForm(props) {
  return (
    <>
    <h1>{props.heading}</h1>
  <div className="form-floating">
    
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label htmlFor="floatingTextarea">Comments</label>

  <button className="btn btn-primary">Convert to Uppercase</button>
  
</div>
</>
  )
}


export default TextForm
