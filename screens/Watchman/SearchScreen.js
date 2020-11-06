import React , { useState, useEffect } from 'react';
import {View , Text, StyleSheet, ScrollView, Platform, FlatList, TouchableOpacity} from 'react-native';
import {SearchBar} from 'react-native-elements'
import Constants from 'expo-constants'
import {useSelector} from 'react-redux'


const SearchScreen = (props) => {
    const [ search , setSearch ] = useState('')
    const [searchData , setSearchData ] = useState([])
    const data = useSelector(state => state.watchman.Searches)

    
    const renderList = (item) => {
        return(
            <TouchableOpacity 
                activeOpacity={0.5} 
                onPress={ () => props.navigation.replace({
                    routeName:'ViewProfile',
                    params:{
                        id:item.item.id
                    } })}>

                <View style={styles.listView}>
                    <Text style={styles.listText}>{item.item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    useEffect( () => {
        setSearchData(data.filter( item => item.name.startsWith(search)))
        },[search])

    return ( 
        <View style={styles.MainView}>
            <SearchBar 
                value={search}
                placeholder='Search'
                platform={Platform.OS === 'android' ? 'android' : 'ios'}
                onChangeText={text => setSearch(text) }
                />
            {search === '' ? <View style={styles.noData}><Text>No Search</Text></View> : 
            
            <FlatList 
                data={searchData}
                renderItem={renderList}
                keyExtractor={item => item.id}
                numColumns={1}
            />}
        </View>
     );
}
const styles = StyleSheet.create({
    MainView:{
        marginTop:Constants.statusBarHeight
    },
    listView:{
        paddingTop:12,
        paddingHorizontal:15,
    },
    listText:{
        fontSize:16
    },
    noData:{
        paddingTop:20,
        alignItems:'center',
        height:'100%'
    }
    
})
 
export default SearchScreen;