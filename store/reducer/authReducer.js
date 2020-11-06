import { UPDATE_EMAIL } from '../action/authAction'

const initialState = {
    User:{
        email:'shamu@gmail.com',
        password:''
    }
}

const authReducer = (state = initialState , action) => {
    switch(action.type){
        case UPDATE_EMAIL:
            return { ...state , User:{ email:action.email } }

        default:
            return state
    }
}

export default authReducer;