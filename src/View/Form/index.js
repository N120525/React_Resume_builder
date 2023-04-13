import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ProfileForm from "./profileForm";
import EducationForm from "./education";
import WorkExperience from "./workExperience";
import Skills from "./skills";
import Project from "./projects"
import Resume from "../ResumePreview/index"
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return [
    "Profile",
    "Education",
    "Skill",
    "Work Experience",
    "Project",

  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ProfileForm />;
    case 1:
      return <EducationForm />;
    case 2:
      return <Skills />;
    case 3:
      return <WorkExperience />;
    case 4:
      return <Project />;
    case 5:
    default:
      return "Unknown step";
  }
}

const ResumeForm = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  let history = useHistory();


  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    if(activeStep === 0){
      history.push("/")
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const ValidateProfileDetails = () => {
    if (!props.profileData) {
      return false
    }
    if (!props.profileData.data.fname || !props.profileData.data.lname || !props.profileData.data.phone || !props.profileData.data.address || !props.profileData.data.url) {
      alert("Please fill all the data")
      return false
    }

    if (props.profileData.data.fname.length < 1 || props.profileData.data.lname.length < 1 || props.profileData.data.address.length < 1 || props.profileData.data.url.length < 1) {
      alert("Pleasej fill all the data. ")
      return false
    }

    if (props.profileData.data.phone.length != 10 && props.profileData.data.phone.length != 12) {
      alert("Enter a valid phone number.")
      return false
    }
    return true
  }


  const validateEducationDetails = () => {
    if (!props.educationFormData) return false;
    const data = props.educationFormData.data;
    for (let i = 0; i < data.length; i++) {
      const instance = data[i]
      if (!instance.courseName || !instance.completionYear || !instance.college || !instance.percentage) {
        alert("Please fill all the data")
        return false
      }

      if (instance.courseName.length < 1 || instance.completionYear.length != 4 || instance.college.length < 1 || instance.percentage.length < 1) {
        alert("Incomplete or invalid data")
        return false
      }

    }

    return true
  }

  const validateProjectDetails = () => {
    if (!props.projectFormData) return false;
    const data = props.projectFormData.data;
    for (let i = 0; i < data.length; i++) {
      const instance = data[i]
      if (!instance.projectName) {
        alert("Please enter the name of project")
        return false
      }

      if (instance.projectName.length < 1) {
        alert("Please enter the name of project")
        return false
      }
    }
    return true
  }


  const validateSkills = () => {

    console.log(props.SkillsFormData.data.length)
    if (props.SkillsFormData.data.length < 1) {
      alert("Please enter your skill")
      return false
    };
    for (let i = 0; i < props.SkillsFormData.data.length; i++) {
      console.log(props.SkillsFormData.data[i])
      if (!props.SkillsFormData.data[i] || (props.SkillsFormData.data[i] && props.SkillsFormData.data[i].length < 1)) {
        alert("Please fill all skills")
        return false
      }
    }
    return true
  }


  const validateSocialLinks = () => {
    if (props.SocialFormData.data.length < 1) {
      alert("Please enter your social url")
      return false;
    }
    for (let i = 0; i < props.SocialFormData.data.length; i++) {
      if (!props.SocialFormData.data[i] || (props.SocialFormData.data[i] && props.SocialFormData.data[i].length < 1)) {
        alert("Please fill all urls")
        return false
      }
    }
    return true
  }


  const handleComplete = () => {
    let flag = true;
    // const action = getSteps()[activeStep]

    // if (action == "Profile Section") {
    //   flag = ValidateProfileDetails();
    // } else if (action == "Education Section") {
    //   flag = validateEducationDetails();
    // } else if (action == "Mini Project") {
    //   flag = validateProjectDetails()
    // } else if (action == "Skills Sector") {
    //   flag =  validateSkills()
    // } else if (action == "Social") {
    //   flag = validateSocialLinks()
    // }

    if (flag) {
      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
      handleNext();
    }

  };

  const handleFinish =()=>{
    history.push("/preview")
  }

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton
              color="secondary"
              onClick={handleStep(index)}
              completed={completed[index]}
            >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {/* {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - your resume is ready!!
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
            <Button onClick={handleEdit}>Edit</Button>
            <Resume />
          </div>
        ) : ( */}
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div className="save_contine_section">
              <Button
                // disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              {/* <Button
                variant="contained"
                color="secondary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button> */}
           {completedSteps() === totalSteps() - 1 ? 
           <Button variant="contained" color="secondary" onClick={handleFinish}> Finish </Button> :    
           <Button
                variant="contained"
                color="secondary"
                onClick={handleComplete}
              >
               Save and Continue
              </Button>}
            </div>
          </div>
        {/* )} */}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({

  educationFormData: state.Education,
  profileData: state.Profile,
  projectFormData: state.Project,
  SkillsFormData: state.Skills,
  SocialFormData: state.Social

});

export default connect(mapStateToProps, {})(ResumeForm);
