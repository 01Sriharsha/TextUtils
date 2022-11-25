import React , {useState} from 'react';


export default function TextForm(props) {
    
    const [text , setText] = useState("Enter the text here");

    
    const handleUpClick = ()=>{
        console.log("Button is clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
    }

    const handleLowClick = ()=>{
        console.log("Button is clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext)
    }

    const handleOnChange = (event)=>{
        console.log("On change function");
        setText(event.target.value);
    }

    const clearText = ()=>{
        setText("Enter the text here")
    }


    return (
        <>
        <div className={`mb-3 ${props.mode === 'dark' ? 'text-light':'text-dark'}`}>
            <h1>{props.heading}</h1>
            <textarea className="form-control"  value={text} onChange={handleOnChange} id="textarea" rows="8" 
            style={{
                backgroundColor : props.mode==="light"?"white":"#343a40",
                color : props.mode==="light"?"#343a40":"white"
            }}></textarea>
            <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary my-3 " onClick={clearText}>Clear Text</button>
        </div>
        <div className={`container my-3 ${props.mode === 'dark' ? 'text-light':'text-dark'}`}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>You can read this in {(0.008) * text.split(" ").length} minutes</p>
            <h3 className='preview'>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    );
}