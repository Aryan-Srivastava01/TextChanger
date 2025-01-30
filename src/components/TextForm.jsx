import React, {useState} from "react";



const TextForm = (props) => {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleSpeakClick = ()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const  handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{backgroundColor: props.mode === 'dark'?'dark':'dark'}} onClick={props.toggleMode}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode === 'dark'?'dark':'white', color: props.mode === 'white'?'dark':'dark' }} onClick={props.toggleMode}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>      
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleSpeakClick}>Speak</button>
      </div>
      <div className="container my-3" style={{backgroundColor: props.mode === 'dark'?'#042743':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
