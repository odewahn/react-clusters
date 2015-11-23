var React = require('react')

module.exports = React.createClass({

  render: function(){

    //shortens a given string and adds elipses
    function shorten(s, n) {
      var out = s;
      if ((s.length - 3) > n) {
        out = s.slice(0,n-3)+"..."
      }
      return out;
    }

    return (
      <div class="clusterCard" id="{this.props.DockerHost}">
        <table>
          <tr>
            <th>Host:</th>
            <td>{this.props.data.DockerHost}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{this.props.data.Name}</td>
          </tr>
          <tr>
            <th>Populated By</th>
            <td>{this.props.data.PopulatedBy}</td>
          </tr>
          <tr>
            <th>CA Cert</th>
            <td>{shorten(this.props.data.TLSCaCert,25)}</td>
          </tr>
          <tr>
            <th>Cert</th>
            <td>{shorten(this.props.data.TLSCert,25)}</td>
          </tr>
          <tr>
            <th>Key</th>
            <td>{shorten(this.props.data.TLSKey,25)}</td>
          </tr>
        </table>
        <hr/>
      </div>
    )
  }
});
