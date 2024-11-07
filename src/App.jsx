import { useState } from 'react';
import './styles/App.css';
// import GeneralInfo from './components/GeneralInfo.jsx';
// import EducationalExp from './components/EducationalExp.jsx';
// import WorkExp from './components/WorkExp.jsx';
import Resume from './components/Resume.jsx';
import AddGeneralInfo from './components/GeneralInfo.jsx';
import './styles/index.css';

function App() {
    const defaultGeneralInfo = {
        fullName: "Name",
        email: "user@domain.com",
        phoneNum: "XXX-XXX-XXX"
    };

    const [generalInfo, setGeneralInfo] = useState(defaultGeneralInfo);
    const [resumeInfo, setResumeInfo] = useState(generalInfo);

    const onChange = function textUpdateForSubmit (e) {
        e.preventDefault();
        const key = e.target.id;
        setGeneralInfo({...generalInfo, [key]:e.target.value});
    }


    const submit = function onSubmit(e) {
        e.preventDefault();
        setResumeInfo(generalInfo);
    }
    const edit = function onEdit(e) {
        e.preventDefault()
        setGeneralInfo(resumeInfo);
    }
    
    

  return (
    <div id = "page">
      <div id = "form">
        <AddGeneralInfo 
            onChange={onChange}
            submit={submit}
            edit={edit}
            value = {generalInfo}
      />
      <p>
      {generalInfo.fullName}<br />
      {resumeInfo.fullName}
        
      </p>
      </div>
      <div>
        <Resume
            fullName = {resumeInfo.fullName}
            email={resumeInfo.email}
            phoneNum={resumeInfo.phoneNum}
        />
      </div>
    </div>
  )
}

export default App

