export const ADD_VISITOR = 'ADD_VISITOR'
export const UPDATE_VISITOR = 'UPDATE_VISITOR'
export const DELETE_VISITOR = 'DELETE_VISITOR'
export const NOTIFICATION_HANDLER = 'NOTIFICATION_HANDLER'
export const VISITOR_REQUEST = 'VISITOR_REQUEST'


export const visitorRequest = (Visitor) =>{
    return { type: VISITOR_REQUEST, Visitor}
}

export const addVisitor = (Visitor) =>{
    return { type: ADD_VISITOR, Visitor}
}

export const updateVisitor = (Visitor, Id ) =>{
    return { type: UPDATE_VISITOR, Visitor , Id }
}

export const deleteVisitor = (Id) =>{
    return { type: DELETE_VISITOR, Id}
}

export const notificationHandler = (Id,status) =>{
    return { type: NOTIFICATION_HANDLER, Id, status}
}

