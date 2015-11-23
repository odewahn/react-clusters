var React = require('react')

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
  render: function(){
    var clusterList = this.props.clusters.ClusterList.map(function(c){

      //shortens a given string and adds elipses
      function shorten(s, n) {
        var out = s;
        if ((s.length - 3) > n) {
          out = s.slice(0,n-3)+"..."
        }
        return out;
      }

      return (
        <tr>
          <td><input type="radio" name="default" value="{c.Name}"></input></td>
          <td>{c.DockerHost}</td>
          <td>{c.Name}</td>
          <td>{c.PopulatedBy}</td>
          <td>{shorten(c.TLSCaCert,25)}</td>
          <td>{shorten(c.TLSCert,25)}</td>
          <td>{shorten(c.TLSKey,25)}</td>
        </tr>
      )
    });
    return (
      <div>
        <h3>These are your clusters</h3>
        <table>
          <thead>
          <tr>
            <th>Default</th>
            <th>Docker Host</th>
            <th>Name</th>
            <th>Populated By</th>
            <th>CA Cert Path</th>
            <th>Cert Path</th>
            <th>Cert Key Path</th>
          </tr>
        </thead>
        <tbody>
          {clusterList}
        </tbody>
        </table>
      </div>
    )
  }
});
