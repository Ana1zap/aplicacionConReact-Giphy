import React from 'react';
import  Gif from './Gif';

export default function Content({gifs}) {
    return (
        <div className="container">
            <div className="row text-center">
                {
                    gifs.map((gif,index) => <Gif key={index} image={gif.image} title={gif.title} />)
                }
            </div>
        </div>
    )
}




 
