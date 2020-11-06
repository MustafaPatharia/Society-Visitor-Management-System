import React from 'react';
import {View , Text, StyleSheet, Image} from 'react-native';
import color from '../../assets/colors'
import {useSelector} from 'react-redux'
import {Button} from 'react-native-elements'

const UserProfileScreen = (props) => {
    const data = useSelector( state => state.resident.Users)
    const users = useSelector(state => state.auth.User)
    const userEmail = users.email
    const user = data.filter( item => { return item.email === userEmail } )
    console.log(user)
    return (
        <View style={{padding:15}}>
            <View style={styles.topView} >
                <Image style={styles.image} source={{uri: user[0].profile }}/>
                <View style={styles.textBox}>
                    <Button titleStyle={styles.btnText} buttonStyle={styles.heading} title={user[0].name} 
                    onPress={() => { props.navigation.navigate({routeName:'ViewProfile' , 
                    params:{
                        data:user,
                        type:'familyMember'
                    }}) }} />
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
        backgroundColor:'white',
    },
    btnText:{
        color:color.primaryColor,
        fontSize:20
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
        backgroundColor:color.clouds,
    }
})

UserProfileScreen.navigationOptions = {
    headerTitle:'Profile'
}
export default UserProfileScreen;