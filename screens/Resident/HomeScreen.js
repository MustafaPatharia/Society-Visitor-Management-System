import React , { useEffect } from 'react';
import {View , Text, StyleSheet, ScrollView, FlatList, Platform,Alert} from 'react-native';
import QuickProfileList from '../../components/QuickProfileList';
import colors from '../../assets/colors'
import { useSelector } from 'react-redux'
import {HeaderButtons , Item} from 'react-navigation-header-buttons'
import { MaterialHeaderButton } from '../../components/HeaderButton'

const HomeScreen = (props) => {

    const familyMember = useSelector(state => state.resident.Users)
    const visitors = useSelector(state => state.resident.Visitors)
    const workers = useSelector(state => state.resident.Workers)
    
    userNavigateHandler = () => {
        props.navigation.navigate({
            routeName: 'UserProfile' , 
            params:{
                email:'qutbuddin@mail.com'
        }})
    }

    useEffect(() =>{
        props.navigation.setParams({userNavigate : userNavigateHandler })
    },[])
    

    const ViewHandler = ( type , id ) => {
        if ( type === 'family'){
            props.navigation.navigate( { 
                routeName:'ViewProfile' , 
                params:{ 
                    data: familyMember.filter((item) => { return item.id === id } ),
                    type:'familyMember'
                } 
            } )    
        }
        else if ( type === 'visitors'){
            props.navigation.navigate({ 
                routeName:'ViewProfile',
                params:{ 
                    data: visitors.filter((item) => {return item.id === id } ),
                    type:'visitor'
                }
            })
        }
        else if ( type === 'workers') {
            props.navigation.navigate({ 
                routeName:'ViewProfile', 
                params:{ 
                data: workers.filter((item) => {return item.id === id } ),
                type:'worker'
                }
            })
        }
        else{
            Alert.alert('INVALID SELECT' , 'Option selected is not valid')
        }
    }

    const AddProfileHandler = (type) => {
        if ( type === 'visitor' ) {
            props.navigation.navigate({routeName:'AddVisitor'})
        }
        else if ( type === 'worker') {
            console.log('Add Worker')
        }
        else{
            Alert.alert('INVALID SELECT' , 'Option selected is not valid')
        }

    }

    return (
        <ScrollView>
        <View style={styles.MainView}>
            <View style={styles.family}>
                <QuickProfileList 
                    title='Family'  
                    data={familyMember} 
                    ViewAction={(id) => ViewHandler('family' , id)}
                    toggleAdd='Hide'
                    profile=''/>
            </View>
            <View style={styles.line}></View>
            <View style={styles.visitors}>
                <QuickProfileList 
                title='Visitors' 
                data={visitors} ViewAction={(id) => ViewHandler('visitors' , id)}
                toggleAdd='Show'
                AddProfileAction={() => AddProfileHandler('visitor')}
                AddProfileLabel='Add Vistor'
                profile=''/>
            </View>
            <View style={styles.line}></View>
            <View style={styles.workers}>
                <QuickProfileList 
                title='Workers' 
                data={workers} 
                ViewAction={(id) => ViewHandler('workers' , id)}
                toggleAdd='Show'
                AddProfileAction={() => AddProfileHandler('worker')}
                AddProfileLabel='Add Worker'
                profile=''/>
            </View>
        </View>  
    </ScrollView>         
    );
    }
const styles = StyleSheet.create({
    MainView:{
        flex:1,
    },
    family:{
        height:180
    },
    visitors:{
        height:180
    },
    workers:{
        height:180
    },
    line:{
        width:'100%',
        height:2,
        backgroundColor:colors.altWhite
    }
}) 

HomeScreen.navigationOptions = (navigationData) => {
    const  userNavigate = navigationData.navigation.getParam('userNavigate')

    return{
        headerTitle:'Resident',
        headerLeft: <HeaderButtons HeaderButtonComponent={ MaterialHeaderButton}>
            <Item 
                title='Profile' 
                iconName='person-outline' 
                onPress={ userNavigate } />
        </HeaderButtons>
    };  
}

export default HomeScreen;