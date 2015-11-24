var React = require('react')
var Clusters = require('./components/clusters/Clusters')

var injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();


React.render(
  <Clusters />,
  document.getElementById('app'));
