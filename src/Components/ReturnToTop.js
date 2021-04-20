import React from 'react'

export default function ReturnToTop() {

    function handleTop() {
        window.scrollTo(0,0);
    }



    return (
        <div className = "return-top"><img src = 'BackToTop.png' alt ="Back to Top" height = "50px" width = "50px" onClick = {handleTop}></img></div>
    )
}
