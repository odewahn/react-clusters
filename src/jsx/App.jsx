(function() {

  var React = require('react')
  var MyClusters = require('./components/clusters/MyClusters.jsx')

  //Needed for React Developer Tools
  window.React = React;

  var injectTapEventPlugin = require("react-tap-event-plugin");

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  React.render(<MyClusters />, document.getElementById('app'));

})();
