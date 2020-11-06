import React from 'react';
import {View , Text, StyleSheet, Image} from 'react-native';
import color from '../../assets/colors'
import {useSelector} from 'react-redux'
import {Button} from 'react-native-elements'

const UserProfileScreen = (props) => {
    const data = useSelector( state => state.watchman.Watchmans)
    const watchman = useSelector(state => state.auth.User)
    const userEmail= watchman.email
    const user = data.filter( item => { return item.email === userEmail } )
    
    return (
        <View style={{padding:15}}>
            <View style={styles.topView} >
                <Image style={styles.image} source={{uri: user[0].profile }}/>
                <View style={styles.textBox}>
                    <Text style={styles.heading}>{user[0].name}</Text>
                    <Text style={styles.title}>Resident</Text>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.btnView}>
                <Button titleStyle={styles.btnText} buttonStyle={styles.btn} title='Privacy' btnColor={color.clouds} iosBtnText={color.primaryColor}/>
                <Button titleStyle={styles.btnText} buttonStyle={styles.btn} title='Terms and Condition' btnColor={color.clouds} iosBtnText={color.primaryColor}/>
                <Button titleStyle={styles.btnText} buttonStyle={styles.btn} title='About GateKeeper' btnColor={color.clouds} iosBtnText={color.primaryColor}/>
                <Button titleStyle={styles.btnText} buttonStyle={styles.btn} title='Logout' btnColor={color.clouds} iosBtnText={color.primaryColor} onPress={ () => { props.navigation.navigate({routeName:'Login'}) }}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    topView:{
        flexDirection:'row',

    },
    image:{
        height:150,
        width:150
    },
    textBox:{
        paddingVertical:15
    },
    heading:{
        fontSize:20,
        color:color.primaryColor,
    },
    title:{
        fontSize:16,
        color:color.lightGrey,
        paddingLeft:8
    },
    line:{
        width:'100%',
        height:2,
        paddingVertical:5
    },
    btnView:{
        backgroundColor:color.clouds,
        borderRadius:10,
    },
    btn:{
        marginVertical:10,
        color:color.primaryColor,
        backgroundColor:color.clouds
    },
    btnText:{
        color:color.primaryColor
    }
})

UserProfileScreen.navigationOptions = {
    headerTitle:'Profile'
}
export default UserProfileScreen;