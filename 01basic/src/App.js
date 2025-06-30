import React from "react";

function App() {
    const message = "Hello, JSX works!";
    const arr1 = [1,2,3]
    const arr2 = [4,5,6]

    const result = [...arr1,...arr2]

   
    
    

    return(
    <>
    <h1>{message}</h1>
    <h2>{result}</h2>
    
    
  
    </>
    );
}

export default App;
