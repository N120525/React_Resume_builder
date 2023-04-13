import {PROJECTS  , CLEAR_PROJECTS , MODIFY_PROJECTS_COUNT, RESTORE_PROJECTS } from "../../Constants/constant";
const initialState ={
    data: [{projectName: null , techStack : null , description: null,projectDuration: null,teamSize: null} ],
    Count: 1
 }

 export default function (state = initialState , action){
    if(action){
        switch(action.type){
            case PROJECTS:
                return {
                    ...state,
                    data: action.payload,
                }
            case MODIFY_PROJECTS_COUNT:
                return {
                    ...state,
                    Count : action.payload
                }

                case RESTORE_PROJECTS:
                    return {
                        ...state,
                       ...action.payload
                    }
           

            case CLEAR_PROJECTS:
                return {
                    
                }
            default:
                return state
         }

    }
    
        

 }