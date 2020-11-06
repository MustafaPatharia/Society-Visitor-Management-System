import React from 'react';
import {View , Text, StyleSheet, Image} from 'react-native';
import colors from '../assets/colors'

const NoticeMsg = (props) => {
    
    MainView = () => {
        return{
                flexDirection:'row',
                width:'50%',
                
        }
    }
    return (
        <View style={MainView()}>
            <Image style={styles.image} source={{uri: props.userProfile}}/>
            <View style={styles.msgBox}>
                <Text style={styles.heading}>{props.Name}</Text>
                <Text style={styles.msg}>{props.msg}</Text>
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
        marginVertical:10,
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
    
})
export default NoticeMsg;