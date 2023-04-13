import React from "react";
import { SaveEducationData  , ModifyEducationCount } from "../../actions";
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



const EducationForm = (props) => {
  const classes = useStyles();


  const handleChange = (index) => (event) =>  {
   const {name , value} = event.target;
   const list = [...props?.educationFormData?.data];
   console.log(index+1 , list.length)
   if(index+1 > list.length){
    while(index+1 != list.length){
      list.push({courseName: null , completionYear: null, college: null , percentage: null })
    }
   }
   list[index][name] =value;
   props.SaveEducationData(list)
  };


const Deleteducation = () => {
  const list = [...props?.educationFormData?.data];
  list.pop();
  props.SaveEducationData(list)
  props.ModifyEducationCount( props?.educationFormData?.Count-1)
}

const AddEducation = () => {
  const list = [...props?.educationFormData?.data];
  list.push({courseName: null , completionYear: null, college: null , percentage: null });
  props?.SaveEducationData(list)
  props?.ModifyEducationCount( props?.educationFormData?.Count+1)
}



  let Form = [];
  for (let i = 0; i <  props?.educationFormData?.Count ; i++) {
    Form.push(
      <div className={classes.instance}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              name={`courseName`}
              defaultValue={props?.educationFormData?.data && props?.educationFormData?.data[i] ? props?.educationFormData?.data[i].courseName : ""}
              label="Course Name"
              onChange={handleChange(i)}
              variant="outlined"
              formControlProps={{
                fullWidth: true
              }}
              data-testid = "course-name"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              name={`completionYear`}
              defaultValue={props?.educationFormData?.data && props?.educationFormData?.data[i] ? props?.educationFormData?.data[i].completionYear : ""}
              label="Completion Year"
              type="number"
              onChange={handleChange(i)}
              variant="outlined"
              data-testid = "completion-year"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              defaultValue={props?.educationFormData?.data && props?.educationFormData?.data[i] ? props?.educationFormData?.data[i].college : ""}
              name={`college`}
              label="College/School"
              onChange={handleChange(i)}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              defaultValue={props?.educationFormData?.data && props?.educationFormData?.data[i] ? props?.educationFormData?.data[i].percentage : ""}
              name={`percentage`}
              label="Percentage"
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
          <CardHeader subheader="Add your Education Details" /> 
          {Form.map((instance) => instance)}
          <div className={classes.footer}>
           <Button disabled={props?.educationFormData?.Count<2} className={classes.deleteButton} onClick={Deleteducation} variant="outlined" color="primary" >
            Delete
          </Button>
          <Button  className={classes.addButton} onClick={AddEducation} variant="contained" color="primary">
            ADD EDUCATION
          </Button>
          </div>
        </Card>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  educationFormData: state.Education
});

export default connect(mapStateToProps, {SaveEducationData , ModifyEducationCount })(EducationForm);
