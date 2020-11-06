export const ADD_SOCIETY = 'ADD_SOCIETY'
export const ADD_SECRETARY = 'ADD_SECRETARY'
export const UPDATE_SOCIETY = 'UPDATE_SOCIETY'
export const DELETE_SOCIETY = 'DELETE_SOCIETY'


export const addSociety = (Society) =>{
    return { type: ADD_SOCIETY, Society}
}

export const addSecretary = (Sec , SocId) => {
    return { type: ADD_SECRETARY , Sec , SocId}
}

export const updateSociety = (updSoc , updId) =>{
    return { type: UPDATE_SOCIETY, updSoc , updId}
}

export const deleteSociety = (delId) =>{
    return { type: DELETE_SOCIETY, delId}
}