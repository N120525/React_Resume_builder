import React from "react";
import { SaveWorkExperienceData  , ModifyWorkExperienceCount } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";

import { connect } from "react-redux";



const useStyles = makeStyles((theme) => ({
  deleteButton: {
   marginRight: "1%"
  },
  addButton: {

  },
  footer: {
    alignItems: "left",
    padding: "1%",
    textAlign: "center"
  },

  instance: {
    marginBottom: "1%",
    padding: "1%"
  }
 
  
}));



const WorkExperieneForm = (props) => {
  const classes = useStyles();


  const handleChange = (index) => (event) =>  {
   const {name , value} = event.target;
   const list = [...props.workExperienceFormData.data];
   console.log(index+1 , list.length)
   if(index+1 > list.length){
    while(index+1 != list.length){
      list.push({companyName: null , designation: null, workDuration: null  })
    }
   }
   list[index][name] =value;
   props.SaveWorkExperienceData(list)
  };


const DeletWorkExperience = () => {
  const list = [...props.workExperienceFormData.data];
  list.pop();
  props.SaveWorkExperienceData(list)
  props.ModifyWorkExperienceCount( props.workExperienceFormData.Count-1)
}

const AddWorkExperience = () => {
  const list = [...props.workExperienceFormData.data];
  list.push({companyName: null , designation: null, workDuration: null  });
  props.SaveWorkExperienceData(list)
  props.ModifyWorkExperienceCount( props.workExperienceFormData.Count+1)
}



  let Form = [];
  for (let i = 0; i <  props.workExperienceFormData.Count ; i++) {
    Form.push(
      <div className={classes.instance}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              name={`companyName`}
              defaultValue={props.workExperienceFormData.data && props.workExperienceFormData.data[i] ? props.workExperienceFormData.data[i].companyName : ""}
              label="Company Name"
              onChange={handleChange(i)}
              variant="outlined"
              formControlProps={{
                fullWidth: true
              }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              name={`designation`}
              defaultValue={props.workExperienceFormData.data && props.workExperienceFormData.data[i] ? props.workExperienceFormData.data[i].designation : ""}
              label="Designation"
              type="text"
              onChange={handleChange(i)}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              defaultValue={props.workExperienceFormData.data && props.workExperienceFormData.data[i] ? props.workExperienceFormData.data[i].workDuration : ""}
              name={`workDuration`}
              label="Work Duration"
              onChange={handleChange(i)}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Divider />
      </div>
    );
  }

  return (
    <>
      <form autoComplete="off" noValidate>
        <Card>
          <CardHeader subheader="Add your Work Experience Details" /> 
          {Form.map((instance) => instance)}
          <div className={classes.footer}>
           <Button disabled={props.workExperienceFormData.Count<2} className={classes.deleteButton} onClick={DeletWorkExperience} variant="outlined" color="primary" >
            Delete
          </Button>
          <Button  className={classes.addButton} onClick={AddWorkExperience} variant="contained" color="primary">
            ADD WORK EXPERIENCE
          </Button>
          </div>
        </Card>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  workExperienceFormData: state.WorkExperience
});

export default connect(mapStateToProps, {SaveWorkExperienceData , ModifyWorkExperienceCount })(WorkExperieneForm);
