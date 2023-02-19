const initialState = 0;
const changeTheNumber = (state=initialState,action)=>{
    switch(action.type){
        case "ADD_NUMBER": {
            return state + 1;
        }
        case "DER_NUMBER":{
            return state -1;
        }
        default: return state
    }
}
export default changeTheNumber;