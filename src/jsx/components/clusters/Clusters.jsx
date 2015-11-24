var React = require('react')
var ClusterCard = require('./ClusterCard')

module.exports = React.createClass({

  getDefaultProps: function(){
    return {
      clusters: {
        "DefaultCluster": "Carina Analysis cluster",
        "ClusterList": [
          {
            "DockerHost": "tcp:\/\/104.130.0.60:2376",
            "Name": "Carina Analysis cluster",
            "PopulatedBy": "carina",
            "TLSCaCert": "",
            "TLSCert": "",
            "TLSKey": ""
          },
          {
            "DockerHost": "tcp:\/\/172.99.79.166:2376",
            "Name": "Carina Personal cluster",
            "PopulatedBy": "carina",
            "TLSCaCert": "\/Users\/odewahn\/.carina\/clusters\/aodewahn\/test2\/ca-key.pem",
            "TLSCert": "\/Users\/odewahn\/.carina\/clusters\/aodewahn\/test2\/cert.pem",
            "TLSKey": "\/Users\/odewahn\/.carina\/clusters\/aodewahn\/test2\/key.pem"
          },
          {
            "DockerHost": "127.0.0.1:2376",
            "Name": "boot2docker on localhost",
            "PopulatedBy": "launchbot",
            "TLSCaCert": "",
            "TLSCert": "",
            "TLSKey": ""
          }
        ]
      }
    }
  },
  render: function() {
    var clusterList = this.props.clusters.ClusterList.map(function(c){
      return (
        <ClusterCard data={c}></ClusterCard>
      )
    });

    return (
      <div id="clusterList">
        <h3>Here are some clusters!</h3>
        {clusterList}
      </div>
    )
  }

});
