import React from 'react'

export default function Feed({title, url}) {

    return (
        <div className = "feed-item">
            <div className = "title"> {title} </div>
            <img className = "image" src = {url}></img>
        </div>
    );
}
