import { EDUCATION, MODIFY_COUNT, MODIFY_PROJECTS_COUNT, MODIFY_SKILLS_COUNT, MODIFY_WORKEXPERIENCE_COUNT, PROFILE, PROJECTS, RESTORE_EDUCATION, RESTORE_PROFILE, RESTORE_PROJECTS, RESTORE_SKILLS, RESTORE_WORKEXPERIENCE, SKILLS, WORKEXPERIENCE} from "../Constants/constant";

export const SaveEducationData = (data) => dispatch =>{

    dispatch({
     type: EDUCATION,
     payload : data
    })
}

export const ModifyEducationCount = (count) => dispatch =>{
    dispatch({
     type: MODIFY_COUNT,
     payload: count
    })
   }

   export const SaveWorkExperienceData = (data) => dispatch =>{

    dispatch({
     type: WORKEXPERIENCE,
     payload : data
    })
}

export const ModifyWorkExperienceCount = (count) => dispatch =>{
    dispatch({
     type: MODIFY_WORKEXPERIENCE_COUNT,
     payload: count
    })
   }

   export const ModifySkillsCount = (count) => dispatch =>{
    dispatch({
     type: MODIFY_SKILLS_COUNT,
     payload: count
    })
   }

   export const ModifyProjectsCount = (count) => dispatch =>{
    dispatch({
     type: MODIFY_PROJECTS_COUNT,
     payload: count
    })
   }
   export const SaveProfileData = (data) => dispatch =>{

    dispatch({
     type: PROFILE,
     payload : data
    })
}


export const SaveSkillsData = (data) => dispatch =>{
    dispatch({
     type: SKILLS,
     payload : data
    })
}

export const SaveProjectData = (data) => dispatch =>{
    dispatch({
     type: PROJECTS,
     payload : data
    })
}

// To Restore data from imported JSON file. 
export const RestoreEduction =(data) =>{
   return{ 
    type:  RESTORE_EDUCATION,
    payload : data
   }
}

export const RestoreProfile = (data)=>{
    return {
        type: RESTORE_PROFILE,
        payload : data
    }
}

export const RestoreProjects = (data)=>{
    return {
        type: RESTORE_PROJECTS,
        payload : data
    }
}

export const RestoreSkills = (data)=>{
    return {
        type: RESTORE_SKILLS,
        payload : data
    }
}

export const RestoreWorkExperience = (data)=>{
    return {
        type: RESTORE_WORKEXPERIENCE,
        payload : data
    }
}


