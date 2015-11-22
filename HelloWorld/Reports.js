/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
//var App = require('./App')
var React = require('react-native');
var Toolbars = require('./Toolbars')
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


var Reports = React.createClass({

  render: function() {

    return (
      <View style={styles.container}>
        <Toolbars style={styles.toolbar}></Toolbars>
          <View style={styles.main}>

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

  button: {
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#ce0000',
    marginBottom: 7,
    height: 40,
    borderRadius: 2
  }
});


module.exports = Reports;
