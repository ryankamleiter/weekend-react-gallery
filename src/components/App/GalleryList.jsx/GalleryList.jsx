import React from 'react';
// import axios from 'axios';
// import './GalleryList.css'

function GalleryList(props) {
    console.log('props: ', props.galleryItems);
    
    return (
     
            <div className='galleryItems'>
                {props.galleryItems.map((item) => (
                    <span key={item.id} id={item.id} className='gallery_img_frame'>
                        <h3>{item.title}</h3>
                         <img src={item.url} className='gallery_img'/>
                        <p>{item.description}</p>
                    </span>
                ))}
            </div>
          
         
    )
}

export default GalleryList