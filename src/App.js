import React,{Component  } from  'react';
import {View,Text } from  'react-native';
import {Provider} from  'react-redux';
import {createStore} from  'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

export default class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
          apiKey: "AIzaSyBOtt3jlELN_OG61n_tZd6qAFxYU5R-9W8",
            authDomain: "rnapp-auth-class1.firebaseapp.com",
            databaseURL: "https://rnapp-auth-class1.firebaseio.com",
            projectId: "rnapp-auth-class1",
            storageBucket: "rnapp-auth-class1.appspot.com",
            messagingSenderId: "456490350678"
        });
    }
    render(){
    return(
        <Provider store={createStore(reducers)}>
        <View>
    <LoginForm/>
        </View>
        </Provider>

    );
}
}