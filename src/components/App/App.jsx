import React, { useEffect, useState } from "react";
import axios from "axios";

import GalleryList from "./GalleryList.jsx/GalleryList";
import GalleryItem from "./GalleryItem.jsx/GalleryItem";

function App() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [galleryLikes, setGalleryLikes] = useState(0);

  useEffect(() => {
    getGallery();
  }, []);

  const getGallery = () => {
    axios({
      method: "GET",
      url: "/api/gallery",
    })
    .then((response) => {
      setGalleryItems(response.data);
      console.log(response.data)
    })
    .catch((err) => {
      console.log("error getting gallery", err)
    })
  }

  const handleLike = (id) => {
    axios({
      method: "PUT",
      url: `/api/gallery/like/${id}`
    })
      .then((response) => {
          getGallery();
      })
      .catch((err) => {
        console.log('error liking item', err);
      })
    }
  


    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <GalleryList galleryItems={galleryItems} getGallery={getGallery}/>
        {galleryItems.map((item) => (
          <GalleryItem
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          handleLike={handleLike}
          url={item.url}
          />
        ))}

      </div>
    );
}

export default App;
