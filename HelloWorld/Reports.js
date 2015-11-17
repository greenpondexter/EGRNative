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
  TouchableNativeFeedback
} = React;


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

var Reports = React.createClass({

  render: function() {

    return (
      <View style={styles.container}>
          <View style={styles.leftPane}>
              <Button
                text= "Reports Page"
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

  button: {
    textAlign: 'center',
    backgroundColor: '#000099',
    marginBottom: 7,
    height: 40,
    borderRadius: 2
  }
});

// AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
module.exports = Reports; 
