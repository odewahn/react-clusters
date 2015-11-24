(function() {

  var React = require('react')
  var Clusters = require('./components/clusters/Clusters')

  //Needed for React Developer Tools
  window.React = React;

  var injectTapEventPlugin = require("react-tap-event-plugin");

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  React.render(<Clusters />, document.getElementById('app'));

})();
