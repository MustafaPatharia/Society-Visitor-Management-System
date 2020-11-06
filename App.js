import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import RootNavigator from './navigations/RootNavigator'
import { createStore , combineReducers } from 'redux';
import adminReducer from './store/reducer/adminReducer.js'
import { Provider } from 'react-redux'
import residentReducer from './store/reducer/residentReducer';
import watchmanReducer from './store/reducer/watchmanReducer';
import authReducer from './store/reducer/authReducer';


const rootReducer = combineReducers({
  admin:adminReducer,
  resident:residentReducer,
  watchman:watchmanReducer,
  auth:authReducer
})

const store = createStore(rootReducer)

const fetchFonts = () =>{
  return Font.loadAsync({
    'openSans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'openSans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  });
};
export default function App() {
  const [fontLoaded , setFontLoaded] = useState(false);

  if(!fontLoaded){
    return(
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}/>
    )
  }
  return ( <Provider store={store}>
            <RootNavigator />
        </Provider>
  )
}

