import React from 'react';
// import axios from 'axios';
import './GalleryList.css'
import GalleryItem from '../GalleryItem.jsx/GalleryItem';

function GalleryList({ galleryItems, updateGalleryItem }) {
    return (
      <div className='galleryItems' data-testid="galleryList">
        {galleryItems.map((item) => (
          <GalleryItem key={item.id}
            id={item.id}
            title={item.title}
            img_url={item.url}
            description={item.description}
            likes={item.likes}
            updateGalleryItem={updateGalleryItem}
          />
        ))}
      </div>
    );
  }

export default GalleryList