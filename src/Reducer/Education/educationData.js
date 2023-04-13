import {EDUCATION  , CLEAR_EDUCATION ,MODIFY_COUNT, RESTORE_EDUCATION } from "../../Constants/constant";
const initialState ={
    data: [{courseName: null , completionYear: null, college: null , percentage: null }],
    Count: 1
 }

 export default function (state = initialState , action){
    if(action){
        switch(action.type){
            case EDUCATION:
                return {
                    ...state,
                    data: action.payload,
                }
            case MODIFY_COUNT:
                return {
                    ...state,
                    Count : action.payload
                }

            case RESTORE_EDUCATION :{
                return {
                    ...state,
                    ...action.payload
                }
            } 
           

            case CLEAR_EDUCATION:
                return {
                    
                }
            default:
                return state
         }

    }
    
        

 }