import React from 'react';
import {View , Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Color from '../assets/colors'

const Card= (props) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.CardAction}>
            <View style={{...styles.card , ...props.style}}>
               <Image source={props.ImageSource} style={styles.image}/>
               <Text style={styles.primaryText}>{props.primaryText}</Text>
               <Text style={styles.secondaryText}>{props.secondaryText}</Text>
            </View>
        </TouchableOpacity> 
     );
}
const styles = StyleSheet.create({
    card:{
        width:160,
        height:220,
        backgroundColor:Color.altWhite,
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
        color:Color.primaryColor,
        fontSize:18,
        padding:5
    },
    secondaryText:{
        color:Color.secondaryColor,
        fontSize:16,
        padding:5
    },
    image:{
        width:'100%',
        height:120,
        borderRadius:10,
        marginBottom:15
    }

})
 
export default Card;