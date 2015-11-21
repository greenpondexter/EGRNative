/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


var React = require('react-native');
var ScrollableTabView = require('react-native-scrollable-tab-view');

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

var Reports = require('./Reports');

// var LeftPane = React.createClass({
//
//   render: function(){
//
//     var ref = this;
//
//     var Buttons = this.props.descs.map(function(title){
//
//             return (
//               <Button
//                 navigator = {ref.props.navigator}
//                 text = {title}
//               />)
//      });
//
//      return (
//          <View>
//           {Buttons}
//          </View>
//      )
//     }
//
// })



//
// var Button = React.createClass({
//
//   buttonClicked: function() {
//     console.log('button clicked');
//   },
//
//   render: function(){
//     return <TouchableHighlight
//                 onPress={() => {
//                     this.props.navigator.push({
//                         name: 'Reports'
//
//                     });
//                 }}
//                 style={styles.button}>
//                 <Text style={styles.welcome}>
//                   {this.props.text}
//                 </Text>
//             </TouchableHighlight>;
//   }
//
// });

var Home= React.createClass({


  toolbarActions : [
    {title: 'Home', show: 'always'},
    {title: 'Dashboards', show: 'always'},
    {title: 'Reports', show: 'always'}

  ],


  generateTextBox: function(text, specificStyle){
    return <Text style={specificStyle}>
              {text}
            </Text>
  },


  render: function() {


    return (

        <View style={styles.container}>
            <ToolbarAndroid style = {styles.toolbar}
              logo={require('./logo_og1.png')}

              actions={this.toolbarActions}
              ></ToolbarAndroid>
            <View style={styles.leftPane}>
                
            </View>
        </View>


    );
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

  leftPane: {
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


// AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
// //module.exports = HelloWorld;
 module.exports = Home;
