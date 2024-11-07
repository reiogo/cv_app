import '../styles/Resume.css';
function Resume({fullName, email, phoneNum}) {
  return (
    <div>
      <div id = "resume-box">
        <div id = "general-info">
            <h1>{fullName}</h1>
            <p>{email} ❖ {phoneNum}</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
