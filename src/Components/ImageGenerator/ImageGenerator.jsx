import './ImageGenerator.css'
import default_image from '../Assets/default_image.svg'

  const ImageGenerator=()=> {
  return (
    <div className='ai-image-generator'>
      <div className="header">Ai image <span>generator</span> </div>
      <div className="img-loading">
        <div className="image">
          <img src={default_image} alt="" />
        </div>
       <p>Loading...</p>
      </div>
      <div className="ImageGenerator">
       <input type="text" placeholder='Input generate the image' />
       <button className='btn'>Generate</button>
      </div>
     
    </div>
  )
}

export default ImageGenerator