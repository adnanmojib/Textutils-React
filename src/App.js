import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";






function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(7 9 44)';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Textutis - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Textutis - Light Mode';
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About mode={mode}/>}/> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;