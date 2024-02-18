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
    })
    .catch((err) => {
      console.log("error getting gallery", err)
    })
  }

  const updateGalleryItem = (id, likes) => {
    const updatedGalleryItems = galleryItems.map(item => {
      if (item.id === id) {
        return { ...item, likes };
      }
      return item;
    });
    setGalleryItems(updatedGalleryItems);
  };


    return (
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
        </header>

        <GalleryList galleryItems={galleryItems} updateGalleryItem={updateGalleryItem}/>

      </div>
    );
}

export default App;
