
const initialState={};

const messageReducer=(state =initialState, action)=>{

    switch(action.type){
        case "SET_MESSAGE":
            return{
                message:payload,
            }
        case "CLEAR_MESSAGE":
            return{
                message:""
            }
        default:
            return state;
    }
}
export default messageReducer;