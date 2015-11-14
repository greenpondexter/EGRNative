/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
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

    var Buttons = this.props.descs.map(function(title){

            return (
              <Button
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
    return <TouchableHighlight onPress={this.buttonClicked} style={styles.button}>
                <Text style={styles.welcome}>
                  {this.props.text}
                </Text>
            </TouchableHighlight>;
  }

})

var HelloWorld = React.createClass({

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
              <LeftPane
                descs= {["Home", "Reports", "Dashboards"]}
              />
          </View>

          <View style={styles.rightPane}>
                <InputField
                  onUserInput={this.handleUserInput}
                  text={this.state.Login}
                  box = 'Login'
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
