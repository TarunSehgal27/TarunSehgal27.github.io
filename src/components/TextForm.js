import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
       // console.log("UpperCase Button clicked" + text)
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase","Success")
    }
    const handleLoClick=()=>{
        // console.log("UpperCase Button clicked" + text)
         let newText=text.toLowerCase()
         setText(newText)
         props.showAlert("Converted to LowerCase","Success")
    }
    const handleclearClick=()=>{
        // console.log("UpperCase Button clicked" + text)
         let newText=''
         setText(newText)
         props.showAlert("Text cleared","Success")
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        //console.log(newtext);
        props.showAlert("Text copied","Success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","Success")
    }
    const handleOnChange=(event)=>{
        //console.log("OnChange")
        setText(event.target.value)
    }
    const[text,setText]=useState('');
    //setText("new text"); //Correct way to change state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleOnChange} 
        style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'black'}} id="mybox" rows="10"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>To UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>To LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        

        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        <div className="accordion-body" align="center">
                This utility has been created by Tarun Sehgal. I'm a 3rd year IT student. 
            </div>
        </>
    ) 
}
