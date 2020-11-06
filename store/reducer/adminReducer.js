import { ADD_SOCIETY , UPDATE_SOCIETY, ADD_SECRETARY, DELETE_SOCIETY } from "../action/adminAction"

const initialState = {
    Society:[ 
        {

            id:'e6b1gi2' , 
            name:'Shiv Square' , 
            address:'basant puri',
            location:'Indore' , 
            pincode:'452001',
            Secretary: [ 
                {
                    id:0,
                    name:'mustafa',
                    email:'abc@gmail.com',
                    phone:'8719919988'
                } 
            ]
        },
        {
            id:'e6bere2' , 
            name:'Masakeen' , 
            address:'basant puri',
            location:'Indore' , 
            pincode:'452001',
        } 
    ],
}

const societyReducer = (state = initialState , action) => {
    switch(action.type){
        case ADD_SOCIETY:
            return { ...state, Society: state.Society.concat(action.Society)  };

        case ADD_SECRETARY:
                const newSociety = [...state.Society]
                const selectedSociety = state.Society.find(item => item.id === action.SocId)
                const addSecretary = { ...selectedSociety , 'Secretary': action.Sec}
                newSociety[action.SocId] = addSecretary
                return { ...state , Society: newSociety }

        case UPDATE_SOCIETY:
                const updSociety = [ ...state.Society ]
                updSociety[action.updId] = action.updSoc
                return { ...state , Society: updSociety}

        case DELETE_SOCIETY:
                const delSociety = [ ...state.Society]
                delSociety.splice( action.delId , 1)
                
                return { ...state , Society: delSociety}

        default:
            return state
    }
}

export default societyReducer;