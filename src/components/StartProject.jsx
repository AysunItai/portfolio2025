
import { Link } from 'react-router-dom';
function StartProject({ title, content, btnIcon, btnText, mentorPage}) {
  const btnStyle={
    width: mentorPage ? "12rem" : "",
    paddingRight: mentorPage ? "1rem" : "",
}
  return (
    <div className="startProject">
      <h1>{title}</h1>
      <p>{content}</p>
       <div className="startProjectBtn" >
          < Link to={mentorPage ? '/contact' :'/project-planner'}style={btnStyle}>
            <span><img src={btnIcon} alt="ok" /></span>
            <span className={mentorPage? 'sp-btn' : ''}>{btnText}</span>
          </Link>
        </div>
       
      
    </div>
  );
}
export default StartProject;