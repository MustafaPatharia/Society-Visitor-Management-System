import React,{useCallback} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {ScrollView,View,Dimensions} from 'react-native';
import NotificationMsg from '../../components/NotificationMsg';
import {notificationHandler, addVisitor} from '../../store/action/residentAction'

const NotificationScreen = () => {
    const data = useSelector(state => state.resident.Notifications)

    const dispatch = useDispatch()

    const ButtonHandler = useCallback((nofId, status) => {
            const visitor = data.filter( item => item.id === nofId )
            dispatch(notificationHandler(nofId,status))
            if ( status === 'Allow'){
                dispatch(addVisitor(visitor))
            }
        
    })

    return ( 
        <ScrollView >
            <View style={{flex:1,flexDirection:'column', justifyContent:'flex-end', height:Dimensions.get('screen').height-120}}>
                {
                    data.map( (item,index) => {
                        return(
                            <NotificationMsg 
                                key={index}
                                id={item.id}
                                visitorName={item.name.length > 16 ? item.name.slice(0,13)+'...' : item.name}   
                                msg={item.msg} 
                                userProfile={item.profile}
                                status={item.status}
                                ButtonAction={(id,type) => ButtonHandler(id,type)}/>)
                    })
                }
                
            </View>
        </ScrollView>
     );
}
 
export default NotificationScreen;