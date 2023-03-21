import './ExperienceBox.css';

function ExperienceBox(props) {
  return (
    <div className="ExperienceBox">
      <span className='name'>{props.name}</span>
      <div className="role">{props.role}</div>
      <div className='startend'>{props.startend}</div>
      <div className='describe'>{props.describe}</div>
    </div>
  );
}

export default ExperienceBox;