import './ImageGenerator.css';
import { api_key, img_url } from './constant.js';
import default_image from '../Assets/default_image.svg';
import { useRef, useState } from 'react';

const ImageGenerator = () => {
  const [image_url, setImage_url] = useState("/");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const imageGenerator = async () => {
    if (!inputRef.current.value) return;

    setLoading(true);
    try {
      const response = await fetch(img_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${api_key}`,
        },
        body: JSON.stringify({
          prompt: inputRef.current.value,
          n: 1,
          size: "512x512",
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data?.data?.[0]?.url) {
        setImage_url(data.data[0].url);
      } else {
        alert("Image generation failed!");
      }
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-image-generator">
      <div className="header">
        Ai image <span>generator</span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img src={image_url === "/" ? default_image : image_url} alt="Generated" />
        </div>
        {loading && <p>Loading...</p>}
      </div>
      <div className="ImageGenerator">
        <input ref={inputRef} type="text" placeholder="Input generate the image" />
        <button className="btn" onClick={imageGenerator}>Generate</button>
      </div>
    </div>
  );
};

export default ImageGenerator;