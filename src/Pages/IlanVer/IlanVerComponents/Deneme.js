import React, { useState } from 'react';
import axios from "axios"
import {message} from "antd"
function Deneme() {
  const [images, setImages] = useState([]);
  const posturl = "http://localhost:3001/ilanver/ilanphoto";
  const handleImageUpload = (e) => {
    const files = e.target.files;
    const imagesArray = [...images]; // Eski seçimleri korumak için mevcut diziyi kopyalıyoruz

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.readAsDataURL(files[i]);
      reader.onload = () => {
        imagesArray.push(reader.result);
        if (imagesArray.length === files.length) {
          setImages(imagesArray);
        }
      };
    }
    console.log("imagesArray:",imagesArray)
    console.log("images:",images)
    console.log("files:",files)
    const data = new FormData();
    for (let index = 0; index < files.length; index++) {
      
      data.append("image-files", files[index]);
      console.log(files[index])
    }
    
    axios
      .post(posturl, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        message.success(response.data.message);
      })
      .catch((error) => {
        message.error(error);
      });
  };

  const handleCancelImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleImageUpload} />
      
      {images.length > 0 && (
        <div>
          <h2>Uploaded Images:</h2>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index}`} style={{ maxWidth: '200px' }} />
              <button onClick={() => handleCancelImage(index)}>Cancel</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Deneme;