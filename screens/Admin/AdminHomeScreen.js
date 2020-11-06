import React  from 'react';
import { useSelector } from 'react-redux'
import {View , StyleSheet, Platform} from 'react-native';
import Card from '../../components/Card'
import FloatingButton from '../../components/FloatingButton';
import colors from '../../assets/colors';
import { FlatList} from 'react-native-gesture-handler';

const AdminHomeScreen = (props) => {

    const DATA = useSelector(state => state.admin.Society)

    
    const renderList = (item) => {
        return(
            <Card ImageSource={require('../../assets/images/societyDefault.png')} primaryText={item.item.name} secondaryText={item.item.location} CardAction={() => {
                props.navigation.navigate({routeName: 'ViewSociety' , params: {
                    societyId:item.item.id,
                    societyName:item.item.name
                }})
                }}/>
        )
    }

    return ( 
        <View style={styles.container}>

            <FlatList 
                data={DATA}
                renderItem={renderList}
                keyExtractor={item => item.id}
                numColumns={2}
            />
            
            <View style={styles.FloatingButton}>
                <FloatingButton IconName='ios-add' FloatAction={() => {
                    props.navigation.navigate({routeName: 'AddSociety'})
                }}/>
            </View>
            
        </View>
     );
}

AdminHomeScreen.navigationOptions = {
    headerTitle:'Admin',
    headerStyle:{
        backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    FloatingButton:{
        position:'absolute',
        bottom:15,
        right:15,
    },
})
 
export default AdminHomeScreen;