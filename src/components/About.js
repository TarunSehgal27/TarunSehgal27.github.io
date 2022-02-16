import React from 'react'

export default function About(props) {
   /* const [myStyle,setMyStyle]=useState({
       color: 'black',
       backgroundColor: 'white',
     })*/
     let myStyle={
         color: props.mode==='dark'?'white':'#042743',
         backgroundColor: props.mode==='dark'?'rgb(36 74 104':'white',
         borderColor: props.mode==='dark'?'white':'#042743'
     }

    return (
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} width="100vw">
            <h1 className="my-2">About Us</h1>
             <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>About Us</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This utility has been created by Tarun Sehgal. I'm a 3rd year IT student working on different domains. 
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <strong> Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils is a free chracter counter tool that provides instant character count & word count statistics for a given text.
                    TextUtils reports the number of words and characters.Thus it is suitable for writing text with word/ character limit.
                
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This wrord counter software works in  any broewser such as Chrome, Firefox, Edge, Safari, Opera. It ssuits to count characters in facebook, 
                    blog, books, site, document, pdf etc.
            </div>
            </div>
        </div>
        </div>
        <div className="form-check form-switch my-3">
       {/*<input onClick={toggleStyle} className="form-check-input" type="checkbox" role="switch" border="black" id="flexSwitch"/>
        <label className="form-check-label" htmlFor="flexSwitch">{btnText}</label>*/}
        </div>
        </div>
        
    )
}
