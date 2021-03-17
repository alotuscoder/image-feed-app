import React from 'react'

export default function Feed({title, url}) {
    return (
        <fieldset className = "feed-items">
            <legend> Image feed </legend>
            <div className = "title"> {title} </div>
            <img src = {url}></img>
        </fieldset>
        
    );
}
