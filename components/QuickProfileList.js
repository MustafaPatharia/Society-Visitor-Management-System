import React from 'react';
import {View , Text, StyleSheet, ScrollView} from 'react-native';
import Color from '../assets/colors'
import QuickProfile from './QuickProfile';

const QuickProfileList = (props) => { 
    
    return (
        <View style={styles.ListView}>
            <Text style={styles.title}>{props.title}</Text>
        <ScrollView horizontal={true}>
            { props.data.map( (item,index) => { 
                return(
                <QuickProfile 
                key={index}
                id={item.id}
                Label={item.name.substr(0,item.name.indexOf(' ')) === '' ? item.name : item.name.substr(0,item.name.indexOf(' ')) }
                ImageSource={props.profile === '' ? { uri: item.profile } : { uri : props.profile } }
                ProfileAction={(id) => {props.ViewAction(id)}}
                /> )
                }
                )
            }
            <View>
                { props.toggleAdd === 'Show' ? < QuickProfile 
                                                    Label={props.AddProfileLabel}
                                                    ImageSource={require('../assets/images/add-profile.png')} 
                                                    ProfileAction={(id) => {props.AddProfileAction() }} />
                                            : <View></View>   
                }        
            </View>
        </ScrollView>
     </View>
        
    );
    }
const styles = StyleSheet.create({
    ListView:{
        flex:1,
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        paddingHorizontal:15,
        paddingVertical:5
    }
})
export default QuickProfileList;