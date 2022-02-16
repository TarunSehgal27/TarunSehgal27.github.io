//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About'
import Alert from './components/Alert';
import React, { useState } from 'react';
{/*import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";*/}

//let name="Tarun"
function App() {
  const [mode, setMode]= useState('light');
  const [alert,setAlert]= useState(null)

  const showAlert=(message, type)=>{
        setAlert({
          msg : message,
          type : type
        })
        setTimeout(()=>{
          setAlert(null);
        },2000)
  }
  const toggleMode=()=>{
    if(mode ==='light'){
    setMode('dark')
    document.body.style.backgroundColor = "#042743";
    showAlert("Dark mode has been enabled", "Success");
    //document.title="TextUtils Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","Success");
     // document.title="TextUtils Light Mode"
    }
  }
  return (
    <>
    {/*<Router>*/}
   <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   {/*<Switch>*/}
          {/*<Route exact path="/about">
            <About mode={mode} />
          </Route>*/}
          {/*<Route exact path="/">*/}
          <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter,Character counter,Remove extra spaces" mode={mode}/>
          {/*</Route>*/}
        {/*</Switch>*/}
   </div>
   {/*</Router>*/}
    </>
  );
}

export default App;
