/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

//var Reports = require('./Reports');
var React = require('react-native');
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
  TouchableNativeFeedback
} = React;


var LeftPane = React.createClass({

  render: function(){

    var ref = this;

    var Buttons = this.props.descs.map(function(title){

            return (
              <Button
                navigator = {ref.props.navigator}
                text = {title}
              />)
     });

     return (
         <View>
          {Buttons}
         </View>
     )
    }

})


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
})


var Button = React.createClass({

  buttonClicked: function() {
    console.log('button clicked');
  },

  render: function(){
    return <TouchableHighlight
                onPress={() => {
                    this.props.navigator.push({
                        message: "Swiping to Reports",
                        component: Reports

                    });
                }}
                style={styles.button}>
                <Text style={styles.welcome}>
                  {this.props.text}
                </Text>
            </TouchableHighlight>;
  }

});

var ReportsButton = React.createClass({

  buttonClicked: function() {
    console.log('button clicked');
  },

  render: function(){
    return <TouchableHighlight
                onPress={() => {
                    this.props.navigator.push({
                        message: "Swiping Back To Reports",
                        component: App 

                    });
                }}
                style={styles.button}>
                <Text style={styles.welcome}>
                  {"Back to Home"}
                </Text>
            </TouchableHighlight>;
  }

});

var Reports = React.createClass({
//
  render: function() {

    return (
      <View style={styles.container}>
          <View style={styles.leftPane}>
            <Text>
                Hello Worlds
            </Text>
            <ReportsButton navigator={this.props.navigator}>

            </ReportsButton>


          </View>
      </View>
    );
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
          <View style={styles.leftPane}>
              <LeftPane navigator = {this.props.navigator}
                descs= {["Home", "Reports", "Dashboards"]}
              />
          </View>

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

          </View>
      </View>
    );
  }
});


var HelloWorld = React.createClass({

    // renderScene: function(route, nav){
    //   switch(route.id) {
    //     case 'Reports':
    //       return <Reports navigator={nav}>;
    //     default:
    //       return (
    //         <HelloWorld
    //           message={route.message}
    //           navigator={nav}
    //           />
    //       )
    //   }
    // },

    render: function(){
      return (
          <Navigator
            initialRoute = {{message: 'Home Page', component: App}}
            configureScene={() => {
                return Navigator.SceneConfigs.FloatFromRight;
              }}
            renderScene = {(route, navigator) => {
                console.log(route, navigator)

                if (route.component){
                  return React.createElement(route.component, {navigator})
                }
              }
            }

          />
        // <Navigator
        //   initialRoute = {{message: 'Home Page'}}
        //   renderScene={this.renderScene}
        //   configureScene={(route) => {
        //     if(route.sceneConfig) {
        //       return route.sceneConfig
        //     }
        //     else{
        //       return (Navigator.SceneConfigs.FloatFromBottom);
        //     }
        //     }
        //   }
        // />

      )
    }

});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1
  },

  leftPane: {
    flex: 2
  },

  button: {
    textAlign: 'center',
    backgroundColor: '#990000',
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
module.exports = HelloWorld;
