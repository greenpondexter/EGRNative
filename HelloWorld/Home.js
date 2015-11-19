/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


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
  TouchableNativeFeedback,

} = React;

var Reports = require('./Reports');

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




var Button = React.createClass({

  buttonClicked: function() {
    console.log('button clicked');
  },

  render: function(){
    return <TouchableHighlight
                onPress={() => {
                    this.props.navigator.push({
                        name: 'Reports'

                    });
                }}
                style={styles.button}>
                <Text style={styles.welcome}>
                  {this.props.text}
                </Text>
            </TouchableHighlight>;
  }

});

var Home= React.createClass({



  generateTextBox: function(text, specificStyle){
    return <Text style={specificStyle}>
              {text}
            </Text>
  },


  render: function() {


    return (
      <View style={styles.container}>
          <View style={styles.leftPane}>
              <LeftPane navigator = {this.props.navigator}
                descs= {["Home", "Reports", "Dashboards"]}
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
    width: 100,
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


// AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
// //module.exports = HelloWorld;
 module.exports = Home;
