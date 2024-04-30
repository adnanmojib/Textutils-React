import React, {useState} from "react"


export default function TextForm(props) {



    const handleUpClick = () => {
        // console.log("Uppercase was click" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = () => {
        // console.log("Uppercase was click" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = () => {
        // console.log("Uppercase was click" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared!", "success");
    }


    const handleCopy = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!", "success");
    }


    const handleOnChange = (event) => {  
        // console.log("On Change");
        setText(event.target.value) 
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }




  const [text, setText] = useState("");

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'rgb(28 38 94)':'white', color: props.mode === 'dark'?'white':'black'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10">
          </textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Your text summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Character</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes take to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text: "Nothing to preview"}</p>
    </div>
    </>
  );
}
