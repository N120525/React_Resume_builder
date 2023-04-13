import React from 'react';
import { useDispatch } from "react-redux";
import {RestoreEduction,RestoreProfile,RestoreProjects,RestoreSkills,RestoreWorkExperience} from '../../actions/index'
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createMemoryHistory } from 'history';
import './dashboard.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textDecoration: 'underline',
    color: 'gray',
  }
}));

const Dashboard = ()=>{
    const [cvData,setCvData] = React.useState({})
  const dispatch = useDispatch() 
  let history = useHistory();
  const classes = useStyles();
  const onApplyRestoreData =()=>{
    if(cvData && Object.keys(cvData).length){
      Object.keys(cvData).forEach(item =>{
          if(item === 'Education'){
            dispatch(RestoreEduction(cvData[item]))
          }else if(item === 'Profile'){
            dispatch(RestoreProfile(cvData[item]))
          }else if(item === 'Skills'){
            dispatch(RestoreSkills(cvData[item]))
          }else if(item === 'Project'){
            dispatch(RestoreProjects(cvData[item]))
          }else if(item === 'WorkExperience'){
            dispatch(RestoreWorkExperience(cvData[item]))
          }
      })
      history.push("/preview")
    }
  } 
  const onContinue =()=>{
      history.push("/user-info")
      localStorage.clear() 
      window.location.reload()
  }

 const getJsonFile =(eve)=>{
   let file = eve.target.files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
     setCvData(JSON.parse(e.target.result));
    };
    reader.readAsText(file);
 }

    return(
       <div className='dashboard_container'>
        <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Resume Builder
          </Typography>
        </Toolbar>
      </AppBar>
       <div className='sub_heads_section'> 
        <p className='sub_heads'>Welcomes to secure resume builder appliction, Your data is safe here.</p>
        <p className='sub_heads'> This is a pure client side application without any data-base connection.</p>
       </div >
        <div>
        <div className="import_section">
            <p className="import_head">Import exsting JSON CV file</p>
          <input data-testid = "file-json" onChange={getJsonFile} type="file" accept=".json" />
          <button data-testid ="continue-btn" className={Object.keys(cvData).length > 0 ? "apply_btn" : ''} disabled={Object.keys(cvData).length === 0} onClick ={onApplyRestoreData}>Continue</button>
          </div>
          OR
          <div>
          <button data-testid = "manual-entry" className={Object.keys(cvData).length === 0 ? "apply_btn continue_btn" : 'continue_btn'} disabled={Object.keys(cvData).length > 0} onClick ={onContinue}>Continue with manual entry</button>
          </div>
        </div>
       </div>
    )
}


export default Dashboard