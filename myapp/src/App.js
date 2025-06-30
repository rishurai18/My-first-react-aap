// import logo from './logo.svg';
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";



// const name = "Sumant Rai"
function App() {
  return (
    <>
       <Navbar title = "TextUtil" aboutText = "About us" />
       <div className="container my-3" >
         <TextForm heading= "This is a simple text form"/>
       </div>
      
    </>
  );
}

export default App;
