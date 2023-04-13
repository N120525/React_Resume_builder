import { CLEAR_WORKEXPERIENCE, MODIFY_WORKEXPERIENCE_COUNT, RESTORE_WORKEXPERIENCE, WORKEXPERIENCE } from "../../Constants/constant";
const initialState ={
    data: [{companyName: null , designation: null, workDuration: null  }],
    Count: 1
 }

 export default function (state = initialState , action){
    if(action){
        switch(action.type){
            case WORKEXPERIENCE:
                return {
                    ...state,
                    data: action.payload,
                }
            case MODIFY_WORKEXPERIENCE_COUNT:
                return {
                    ...state,
                    Count : action.payload
                }

                case RESTORE_WORKEXPERIENCE:
                    return {
                        ...state,
                       ...action.payload
                    }    
           

            case CLEAR_WORKEXPERIENCE:
                return {
                    
                }
            default:
                return state
         }

    }
    
        

 }