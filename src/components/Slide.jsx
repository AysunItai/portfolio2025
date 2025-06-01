
function Slide({ text, author, title, image }) {
  return (
    <div className="testimonial-card">
     <img src={image} alt="testimonial" />
      <p>{text}</p>
      <div>
        <h3>{author}</h3>
        <p>{title}</p>
      </div>
      
    </div>
  )
}
export default Slide;