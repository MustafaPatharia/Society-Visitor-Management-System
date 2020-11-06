import React from 'react';
import {View , Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import colors from '../assets/colors'
import {Button} from 'react-native-elements'

const CallCard = (props) => {

    return (
                <View style={{...styles.callCard , ...props.style}}>
                <Image source={props.ImageSource} style={styles.image}/>
                <Text style={styles.primaryText}>{props.primaryText}</Text>
                <Button containerStyle={styles.btnView} buttonStyle={styles.btn} title='Call' onPress={() => { props.CallAction() } }/>
                </View>
        );
}

const styles = StyleSheet.create({
    callCard:{
        width:160,
        height:250,
        backgroundColor:colors.altWhite,
        borderRadius:10,
        padding:15,
        alignItems:'center',
        justifyContent:'center',
        marginTop:15,
        marginBottom:5,
        marginRight:5,
        marginLeft:15,
    },
    primaryText:{
        color:colors.primaryColor,
        fontSize:18,
        padding:5,
        marginBottom:10

    },
    image:{
        width:'100%',
        height:120,
        borderRadius:60,
        marginBottom:15
    },
    btnView:{
        width:'100%'
    },
    btn:{
        width:'100%',
        height:50,
        borderRadius:10,
        backgroundColor:colors.green
    },
})
export default CallCard;