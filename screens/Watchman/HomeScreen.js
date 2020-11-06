import React , { useEffect } from 'react';
import {View , Text, StyleSheet, ScrollView, FlatList, Platform,Alert} from 'react-native';
import QuickProfileList from '../../components/QuickProfileList';
import colors from '../../assets/colors'
import { useSelector } from 'react-redux'
import {HeaderButtons , Item} from 'react-navigation-header-buttons'
import { MaterialHeaderButton } from '../../components/HeaderButton'

const HomeScreen = (props) => {

    const user = useSelector(state => state.auth.User)
    const userEmail= user.email
    const data = useSelector(state => state.watchman.Watchmans)
    const watchman = data.filter( item => item.email === userEmail )

    searchNavigateHandler = () => {
        props.navigation.navigate({
            routeName: 'Search' ,
        })
    }

    userNavigateHandler = () => {
        props.navigation.navigate({
            routeName: 'UserProfile' ,
        })
    }

    useEffect(() =>{
        props.navigation.setParams({userNavigate : userNavigateHandler })
        props.navigation.setParams({searchNavigate : searchNavigateHandler })
    },[])
    

    // const ViewHandler = ( id ) => {
    //         props.navigation.navigate( { 
    //             routeName:'ViewProfile' , 
    //             params:{ 
    //                 id:id ,
    //             }
    //         } )    

    // const AddProfileHandler = (type) => {
    //     if ( type === 'visitor' ) {
    //         props.navigation.navigate({routeName:'AddVisitor'})
    //     }
    //     else{
    //         Alert.alert('INVALID SELECT' , 'Option selected is not valid')
    //     }

    // }

    return (
        <View style={styles.MainView}>
            <View style={styles.recent}>
                <QuickProfileList 
                    title='Recent'  
                    data={watchman[0].Recent}
                    ViewAction={(id) => ViewHandler(id)}
                    toggleAdd='Hide'
                    profile='https://i.ibb.co/8Y4tL9k/man.png'/>
            </View>
            <View style={styles.line}></View>
        </View>          
    );
}

const styles = StyleSheet.create({
    MainView:{
        flex:1,
    },
    recent:{
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
    const  searchNavigate = navigationData.navigation.getParam('searchNavigate')

    return{
        headerTitle:'Watchman',

        headerLeft: <HeaderButtons HeaderButtonComponent={ MaterialHeaderButton}>
            <Item 
                title='Profile' 
                iconName='person-outline' 
                onPress={ userNavigate } />
        </HeaderButtons>,

        headerRight: <HeaderButtons HeaderButtonComponent={ MaterialHeaderButton}>
            <Item 
                title='search' 
                iconName='search' 
                onPress={ searchNavigate } />
        </HeaderButtons>
    };  
}

export default HomeScreen;