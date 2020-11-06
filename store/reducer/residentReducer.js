import { ADD_VISITOR , UPDATE_VISITOR, DELETE_VISITOR, NOTIFICATION_HANDLER, VISITOR_REQUEST} from '../action/residentAction'
const initialState = {
    Users:[
        {
            id:'ioiad',
            name:'Troy Pattee',
            mobile:'7895645123',
            profile:'https://i.ibb.co/8Y4tL9k/man.png',
            flat:'703',
            email:'TroyPattee@gmail.com',
        },
        {
            id:'oizda',
            name:'Tanika Walder',
            mobile:'7895645123',
            profile:'https://i.ibb.co/cJQFHVn/girl1.png',
            flat:'703',
            email:'Tanika Walder@mail.com',
        },
        {
            id:'k1hkjat',
            name:'Brian Pattee',
            mobile:'7895645123',
            profile:'https://i.ibb.co/3d9yJXn/boy1.png',
            flat:'703',
            email:'Brian Pattee@mail.com',
        },
        {
            id:'76938ca',
            name:'Marlin Pattee',
            mobile:'7895645123',
            profile:'https://i.ibb.co/m8DKd9k/boy2.png',
            flat:'703',
            email:'Marlin Pattee@mail.com',
        },
    ],

    Visitors:[
        {
            id:'cfuff0p',
            name:'John Keller',
            mobile:'7895645123',
            profile:'https://i.ibb.co/8Y4tL9k/man.png',
            res_address:'703',
            duration:'12 month',
            msg:'Visit Permitted',
            status:'allow',
            aadhaar_no:'',
        },
        {
            id:'92jcse2',
            name:'Akshay Kapoor',
            mobile:'7895645123',
            profile:'https://i.ibb.co/8Y4tL9k/man.png',
            res_address:'703',
            duration:'6 month',
            msg:'Visit Permitted',
            status:'allow',
            aadhar_no:'',
        },
    ],
    Workers:[
        {
            id:'f62g7m2',
            name:'Kanta Bai',
            mobile:'7895645123',
            profile:'https://i.ibb.co/X57zf4T/maid.png',
            flat:['703', '605', '502'],
            
        },
        
    ],
    Notifications:[
        {
            id:'h57ju8d',
            name:'Hussain Sardaria',
            msg:'Visit Permitted',
            res_address:'703',
            mobile:'7895645123',
            status:'allow',
            profile:'https://i.ibb.co/8Y4tL9k/man.png',
            duration:'24 hours',
            time:'12:39',
            date:'12-5-19'
        },
        {
            id:'h575uud',
            name:'Mohammed Patharia',
            msg:'has request to visit',
            status:'',
            profile:'https://i.ibb.co/8Y4tL9k/man.png',
            duration:'24 hours',
            res_address:'703',
            mobile:'7895645123',
            time:'17:39',
            date:'12-5-19'
        },
        {
            id:'h57dfad',
            name:'Ali Patharia',
            msg:'has request to visit',
            status:'',
            profile:'https://i.ibb.co/8Y4tL9k/man.png',
            time:'17:39',
            duration:'24 hours',
            date:'12-5-19',
            res_address:'703',
            mobile:'7895645123',
        }
    ],
    Notices:[
        {
            id:'h57fgrd',
            name:'Dr. Rajesh Kumar',
            profile:'https://i.ibb.co/8Y4tL9k/man.png',
            msg:'All the resident are requested to pay thier maintenance fee by the end of the month. thank you',
            time:'17:39',
            date:'12-5-19'
        }
    ]
}

const residentReducer = (state = initialState , action) => {
    switch(action.type){
        case ADD_VISITOR:
            return { ...state, Visitors: state.Visitors.concat(action.Visitor)  };

        case UPDATE_VISITOR:
            const updVisitors = [ ...state.Visitors ]
            const selectedVisitor = updVisitors.find( item => { return item.id === action.Id})
            const VisitorIndex = updVisitors.indexOf(selectedVisitor)
            updVisitors[VisitorIndex] = action.Visitor
            return { ...state , Visitors: updVisitors}

        case DELETE_VISITOR:
            const delVisitors = [ ...state.Visitors]
            const selectedDelVisitor = delVisitors.find( item => { return item.id === action.Id})
            const VisitorDelIndex = delVisitors.indexOf(selectedDelVisitor)
            delVisitors.splice( VisitorDelIndex , 1)
            return { ...state , Visitors: delVisitors}

        case NOTIFICATION_HANDLER:
            const updNotifications = [ ...state.Notifications]
            const selectedNoti = updNotifications.find( item => { return item.id === action.Id})
            const notiIndex = updNotifications.indexOf(selectedNoti)

            if( action.status === 'Allow'){
                selectedNoti.msg='Visit Permitted'
                selectedNoti.status='allow'
            }
            else if ( action.status === 'Decline'){
                selectedNoti.msg='Visit Not Permitted'
                selectedNoti.status='decline'
            }

            updNotifications[notiIndex]=selectedNoti
            return { ...state , Notifications:updNotifications}

        case VISITOR_REQUEST:
            return { ...state, Notifications: state.Notifications.concat(action.Visitor)  };
            
        default:
            return state
    }
}

export default residentReducer;