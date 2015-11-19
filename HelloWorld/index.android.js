/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


var React = require('react-native');
var Home = require('./Home');
var Reports = require('./Reports')

var {
  Navigator,
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  PlatForm,
  TouchableHighlight,
  TouchableNativeFeedback,

} = React;

var InputField = React.createClass({


  handleChange: function(text){
     this.props.onUserInput(this.props.box, text)
  },

  render: function(){
    return <TextInput
                style={styles.buttons}
                onChangeText={(text) => this.handleChange(text)}
                value={this.props.text}
            />
  }
});


var App = React.createClass({

  getInitialState: function(){
    return {Login: "UserName",
            Pass: "Password",
          }
  },

  generateTextBox: function(text, specificStyle){
    return <Text style={specificStyle}>
              {text}
            </Text>
  },

  handleUserInput: function(whichProp, val) {

    this.state[whichProp] = val;
    this.setState(this.state);

    },

  render: function() {


    return (
      <View style={styles.container}>

          <View style={styles.rightPane}>
                <InputField
                  onUserInput={this.handleUserInput}
                  text={this.state.Login}
                  box='Login'
                />
                <InputField
                  onUserInput={this.handleUserInput}
                  text={this.state.Pass}
                  box = 'Pass'
                />
              <View style={styles.submitButtonContainer}>
                <View style={styles.buffer}></View>
                <TouchableHighlight
                    style = {styles.button}
                    onPress={() => {
                        this.props.navigator.push({
                            name: 'Home Page'
                        });
                    }}>
                    <Text>
                      {"Submit"}
                    </Text>
                </TouchableHighlight>
                <View style={styles.buffer}></View>
              </View>

          </View>
      </View>
    );
  }

});

var RouteMapper = function(route, navigator){

  if(route.name === "Login Page"){
    return (<App navigator={navigator}/>)
  }
  else if(route.name === "Home Page"){
    return (<Home navigator={navigator}/>)
  }
  else if (route.name === "Reports"){
    return (
      <Reports navigator={navigator}/>
    )
  }
  else if (route.name === "Dashboards"){
    return (
      <Dashboards navigator={navigator}/>
    )
  }
};




var HelloWorld = React.createClass({

    render: function(){
      return (
          <Navigator
            initialRoute = {{name: 'Login Page'}}
            configureScene={() =>
               Navigator.SceneConfigs.FloatFromRight
            }
            renderScene = {RouteMapper}

          />)
        }
      }
    );



var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1
  },

  leftPane: {
    flex: 2
  },
  submitButtonContainer: {
    flexDirection: 'row',
  },
  buffer: {
    flex:3
  },
  button: {
    flex:2,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#ce0000',
    width:60,
    marginBottom: 7,
    height: 40,
    borderRadius: 2
  },
  rightPane: {
    flex: 3
  },
  welcome: {
    // fontSize: 20,
    // textAlign: 'center',
    // margin: 10,
  },
  instructions: {
    // textAlign: 'center',
    // color: '#333333',
    // marginBottom: 5,
  },

});


AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
//module.exports = HelloWorld;
module.exports = HelloWorld;
