'use strict';


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
  TouchableNativeFeedback,
  ToolbarAndroid

} = React;




var Dashboards = React.createClass({


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

  toolbars:{
    backgroundColor: '#c0392b',
    flex: 1
  }

});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1
  },

  main: {
    flex: 10
  },

  toolbar:{
    flex: 1,
    backgroundColor: '#c0392b',

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


module.exports = Dashboards;
