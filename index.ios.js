//Strict mode adds improved error handling, and basically just making JS better
'use strict'; 

//loading react-native module and assign to React variable. Like import in normal iOS 
var React = require('react-native'); 

//define single style to be applied later. Like CSS
var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 40,
    margin: 100
  }
});

//React.Component the basic building blocks of React UI
class FirstReactionApp extends React.Component {

  render() {
    return React.createElement(React.Text, {style: styles.text}, "The First Reaction");
  }
}

//AppRegistry defines entry point to application, define root component
React.AppRegistry.registerComponent('FirstReaction', function() {
  return FirstReactionApp 
});

