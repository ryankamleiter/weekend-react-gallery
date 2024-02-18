import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function GalleryItem(props) {
    const [showImage, setShowImage] = useState(true);
    const [galleryLikes, setGalleryLikes] = useState(props.likes);

    const likeItem = () => {
        axios.put(`/api/gallery/like/${props.id}`)
            .then(response => {
                console.log('in put GalleryItem', response)
                setGalleryLikes(prevLikes => prevLikes + 1);
                props.updateGalleryItem(props.id, response.data.likes);
            })
            .catch(err => {
                console.log('error in put', err)
            })
    }

    const toggleImg = () => {
       setShowImage(!showImage)
    }

    return (
        <div className='gallery' data-testid="galleryItem">
            <h2>{props.title}</h2>
            <span className='gallery_img_frame'>
                {showImage ? <img className='gallery_img' src={props.img_url}></img> : <p>{props.description}</p>}
               
              
            </span>
            <p>Likes: {galleryLikes}</p>
                <button onClick={() => likeItem()} data-testid="like">Like</button>
                <button onClick={toggleImg} data-testid="toggle">Toggle</button>
            <p>{props.description}</p>
        </div>

    )
}

export default GalleryItem