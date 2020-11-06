import React from 'react';
import {View , Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList} from 'react-native';

const QuickProfile  = (props) => {
    return (
            <TouchableOpacity activeOpacity={0.9} onPress={props.ProfileAction.bind(this, props.id)}>
                <View style={styles.profileView}>
                    <Image style={styles.profile} source={props.ImageSource} />
                    <Text>{props.Label}</Text>
                </View> 
            </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    profileView:{
        width:120,
        height:120,
        alignItems:'center',
    },
    profile:{
        borderRadius:40,
        width:120,
        height:120
    }
})
export default QuickProfile ;