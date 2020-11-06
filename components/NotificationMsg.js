import React from 'react';
import {View , Text, StyleSheet, Image} from 'react-native';
import colors from '../assets/colors'
import {Button} from 'react-native-elements'
const NotificationMsg = (props) => {
    
    MainView = () => {
        return{
                flexDirection:'row',
                height: props.status === '' ? 130 : 85 ,
                width:'50%',
                
        }
    }
    return (
        <View style={MainView()}>
            <Image style={styles.image} source={{uri : props.userProfile}}/>
            <View style={styles.msgBox}>
                <Text style={styles.heading}>{props.visitorName}</Text>
                <Text style={styles.msg}>{props.msg}</Text>
                {
                    props.status === '' ? 
                    <View style={styles.btnView}>
                        <Button containerStyle={styles.btnContainer} buttonStyle={styles.btnAllow} title='Allow' onPress={ props.ButtonAction.bind(this,props.id,'Allow')}/>
                        <Button containerStyle={styles.btnContainer} buttonStyle={styles.btnDecline} title='Decline' onPress= { props.ButtonAction.bind(this,props.id,'Decline')}/>
                    </View> : null
                }
            </View>
        </View>
    );
}
const styles = StyleSheet.create({

    image:{
        height:80,
        width:80
        },
    msgBox:{
        width:'100%',
        marginBottom:15,
        backgroundColor:colors.clouds,
    },
    heading:{
        fontSize:18,
        color:colors.Orange,
        paddingHorizontal:10,
        paddingVertical:5
    },
    msg:{
        paddingHorizontal:10,
        paddingBottom:15,
        fontSize:14,
    },
    btnView:{
        flexDirection:'row',
    },
    btnAllow:{
        backgroundColor:colors.primaryColor,
        borderRadius:0,
        width:'100%',
        height:50,
        borderTopLeftRadius:10,        
    },
    btnDecline:{
        backgroundColor:colors.red,
        borderRadius:0,
        height:50,
        width:'100%',
        borderTopRightRadius:10
    },
    btnContainer:{
        flex:1,
    }

    
})
export default NotificationMsg;