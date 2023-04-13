import React from "react";
import { SaveProjectData  , ModifyProjectsCount } from "../../actions";
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
    padding: "1%",
    textAlign: "center"
  },

  instance: {
    marginBottom: "1%",
    padding: "1%"
  }
 
  
}));



const ProjectForm = (props) => {
  const classes = useStyles();

  const handleChange = (index) => (event) =>  {
   const {name , value} = event.target;
   const list = [...props.projectFormData.data];
   console.log(index+1 , list.length)
   if(index+1 > list.length){
    while(index+1 != list.length){
        list.push({projectName: null , techStack : null , description: null,projectDuration: null,teamSize: null})
      }
   }
   list[index][name] =value;
   props.SaveProjectData(list)

  };


const Deleteducation = () => {
  const list = [...props.projectFormData.data];
  list.pop()
  props.SaveProjectData(list)
  props.ModifyProjectsCount( props.projectFormData.Count-1)
}

const AddEducation = () => {
    const list = [...props.projectFormData.data];
    list.push({projectName: null , techStack : null , description: null,projectDuration: null,teamSize: null});
    props.SaveProjectData(list)
    props.ModifyProjectsCount( props.projectFormData.Count+1)
}



  let Form = [];
  for (let i = 0; i <  props.projectFormData?.Count ; i++) {
    Form.push(
      <div className={classes.instance}>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              name={`projectName`}
              defaultValue={props.projectFormData.data && props.projectFormData.data[i] ? props.projectFormData.data[i].projectName : ""}
              label="Project Name"
              onChange={handleChange(i)}
              variant="outlined"
              formControlProps={{
                fullWidth: true
              }}
              data-testid = "project-name"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              name={`techStack`}
              defaultValue={props.projectFormData.data && props.projectFormData.data[i] ? props.projectFormData.data[i].techStack : ""}
              label="Tech Stack"
              onChange={handleChange(i)}
              variant="outlined"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              name={`teamSize`}
              defaultValue={props.projectFormData.data && props.projectFormData.data[i] ? props.projectFormData.data[i].teamSize : ""}
              label="Team Size"
              onChange={handleChange(i)}
              variant="outlined"
              type="number"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              defaultValue={props.projectFormData.data && props.projectFormData.data[i] ? props.projectFormData.data[i].projectDuration : ""}
              name={`projectDuration`}
              label="Project Duration"
              onChange={handleChange(i)}
             
              variant="outlined"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              defaultValue={props.projectFormData.data && props.projectFormData.data[i] ? props.projectFormData.data[i].description : ""}
              name={`description`}
              label="Description"
              onChange={handleChange(i)}
              variant="outlined"
              style={{height : '38px !important' }}
              multiline={2}
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
          <CardHeader subheader="Add your Projects" />
          <form>
          {Form.map((instance) => instance)}
          </form>
          <div className={classes.footer}>
           <Button disabled={ props.projectFormData?.Count<2} className={classes.deleteButton} onClick={Deleteducation} variant="outlined" color="primary" >
            Delete
          </Button>
          <Button  className={classes.addButton} onClick={AddEducation} variant="contained" color="primary">
            ADD Project
          </Button>
          </div>
        </Card>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  projectFormData: state.Project
});

export default connect(mapStateToProps, {SaveProjectData , ModifyProjectsCount })(ProjectForm);
