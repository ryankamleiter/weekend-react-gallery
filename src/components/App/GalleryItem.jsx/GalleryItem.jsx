import React from 'react';
import axios from 'axios';


function GalleryItem(props) {
    const likeItem = (event) => {
        axios.put(`/api/gallery/like/${props.id}`)
            .then(response => {
                console.log('in put GalleryItem', response)
            })
            .catch(err => {
                console.log('error in put', err)
            })
    }

    return (
        <div>
            <h2>{props.title}</h2>
            <span>
                <button onClick={likeItem}>Like</button>
            </span>
        </div>

    )
}

export default GalleryItem