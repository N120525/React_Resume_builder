import React from "react";
import { SaveProfileData } from "../../actions"; 
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardHeader,
  Grid,
  TextField,
} from "@material-ui/core";
import { connect } from "react-redux";



const useStyles = makeStyles((theme) => ({
root: {
  padding: "10px"
}
}));



const ProfileForm = (props) => {
  const classes = useStyles();
  const {profileData} = props


  const handleChange = (event) => {
    const {name , value} = event.target;
    const prevdata = profileData?.data

    if( name == "url" ){
      if(event.target.files.length > 0){
        prevdata[name] = URL.createObjectURL(event.target.files[0])
        prevdata["FileName"] =  event.target.files[0].name;
      
      }
    }else{
     prevdata[name] = value;
    }
    props.SaveProfileData(prevdata)

  };

  const RemoveImage = () => {
    const prevdata = profileData?.data;
    prevdata["url"] = null
    prevdata["FileName"] =  null

    props.SaveProfileData(prevdata)
  }


  return (
    <>
      <form autoComplete="off" noValidate>
        <Card className={classes.root}>
          <CardHeader subheader="Add your profile details" />
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="fname"
                defaultValue={profileData?.data?  profileData?.data?.fname : ""}
                label="First Name"
                onChange={handleChange}
                variant="outlined"
                data-testid = "first-name"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="lname"
                defaultValue={profileData?.data?  profileData?.data?.lname : ""}
                label="Last Name"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                type="number"
                defaultValue={profileData?.data?  profileData?.data?.phone : null}
                name="phone"
                label="Phone Number"
                onChange={handleChange}
                variant="outlined"
                data-testid = "phone-number"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                type="text"
                defaultValue={profileData?.data?  profileData?.data?.email : null}
                name="email"
                label="Email"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                type="text"
                defaultValue={profileData?.data?  profileData?.data?.designation : null}
                name="designation"
                label="Designation"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                type="text"
                defaultValue={profileData?.data?  profileData?.data?.locatioin : null}
                name="location"
                label="Locatioin"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                type="text"
                defaultValue={profileData?.data?  profileData?.data?.linkedinProfileLink : null}
                name="linkedinProfileLink"
                label="Linkedin Profile Link"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
            {profileData?.data?.url && profileData?.data?.url.length > 0 ? 
             <Button
             color="secondary"
             variant="outlined"
             onClick={RemoveImage}>
               Remove {profileData?.data?.FileName}
             </Button>
            
          :
          <div style={{textAlign: "left"}}>
            Profile Image
          <TextField
            fullWidth
            type="file"
            name="url"
            onChange={handleChange}
            variant="outlined"
          />
          </div>
         
         
          }           
            </Grid>
          </Grid>
        </Card>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  profileData : state.Profile
});

export default connect(mapStateToProps, {SaveProfileData})(ProfileForm);
