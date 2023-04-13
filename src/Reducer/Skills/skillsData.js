import { SKILLS , CLEAR_SKILLS, MODIFY_SKILLS_COUNT, RESTORE_SKILLS} from "../../Constants/constant";
const initialState ={
    data: [],
    Count: 1
 }

 export default function (state = initialState , action){
    if(action){
        switch(action.type){
            case SKILLS:
                return {
                    ...state,
                    data: action.payload,

                }
            case MODIFY_SKILLS_COUNT:
                return {
                    ...state,
                    Count : action.payload
                }

                case RESTORE_SKILLS:
                    return {
                        ...state,
                       ...action.payload
                    }

            case CLEAR_SKILLS:
                return {
                    data: []
                }
            default:
                return state
         }

    }
 }