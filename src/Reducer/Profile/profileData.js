import { CLEAR_PROFILE , PROFILE, RESTORE_PROFILE} from "../../Constants/constant";
const initialState ={
    data: {}
 }

 export default function (state = initialState , action){
    if(action){
        switch(action.type){
            case PROFILE:
                return {
                    ...state,
                    data: action.payload,
                }

                case RESTORE_PROFILE:
                    return {
                        ...state,
                       ...action.payload,
                    }

            case CLEAR_PROFILE:
                return {
                    data: {}
                }
            default:
                return state
         }

    }
 }