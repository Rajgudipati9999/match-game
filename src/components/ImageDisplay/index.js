import './index.css'

const ImageDisplay = ({image}) => {
  // console.log(image)
  return (
    <div className="image-display">
      <img src={image.imageUrl} alt='match' className='image'/>
    </div>
  )
}

export default ImageDisplay
