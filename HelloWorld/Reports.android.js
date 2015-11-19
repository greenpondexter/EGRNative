/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
//var App = require('./App')
var React = require('react-native');
//var App = require('./HelloWorld');
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



var ReportsButton = React.createClass({

  buttonClicked: function() {
    console.log('button clicked');
  },

  render: function(){
    return <TouchableHighlight
                onPress={() => {
                    this.props.navigator.push({name:"Home"});
                }}
                style={styles.button}>
                <Text style={styles.button}>
                  {"Back to Home"}
                </Text>
            </TouchableHighlight>;
  }

});

var Reports = React.createClass({

  render: function() {

    return (
      <View style={styles.container}>
          <View style={styles.leftPane}>
            <Text>
            </Text>
            <ReportsButton navigator={this.props.navigator}>

            </ReportsButton>


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
