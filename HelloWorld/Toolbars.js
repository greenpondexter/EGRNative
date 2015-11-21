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
  ToolbarAndroid

} = React;




var Toolbars = React.createClass({

  toolbarActions : [
    {title: 'Home', show: 'always'},
    {title: 'Dashboards', show: 'always'},
    {title: 'Reports', show: 'always'}

  ],


  render: function() {

    return (
      <ToolbarAndroid style={styles.toolbars}
              logo={require('./logo_og1.png')}
              actions={this.toolbarActions}
      ></ToolbarAndroid>
    );
  }
});

var styles = StyleSheet.create({

  toolbars:{

    backgroundColor: '#c0392b',
    flex: 1
  }

});



module.exports = Toolbars;
