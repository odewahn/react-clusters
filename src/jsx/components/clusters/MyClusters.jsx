var React = require('react');
var ClusterForm = require('./ClusterForm.jsx');
var Clusters = require('./Clusters.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div id="myClusters">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <h3>Create a New Cluster Credential</h3>
              <ClusterForm />
            </div>
            <div className="col-sm-8">
              <h3>Current Cluster Credentials</h3>
              <Clusters />
            </div>
          </div>
        </div>
      </div>
    )
  }
});
