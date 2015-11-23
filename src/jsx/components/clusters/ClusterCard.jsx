var React = require('react');
const Card = require('material-ui/lib/card/card');
const CardActions = require('material-ui/lib/card/card-actions');
const CardExpandable = require('material-ui/lib/card/card-expandable');
const CardHeader = require('material-ui/lib/card/card-header');
const CardMedia = require('material-ui/lib/card/card-media');
const CardText = require('material-ui/lib/card/card-text');
const CardTitle = require('material-ui/lib/card/card-title');
const FlatButton = require('material-ui/lib/flat-button');
const Avatar = require('material-ui/lib/avatar');



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
      <Card>
        <CardHeader
          title={this.props.data.Name}
          subtitle={this.props.data.DockerHost}
          avatar={<Avatar>A</Avatar>} />
          <CardText>
            <ul>
              <li><em>Populated By</em>: {this.props.data.PopulatedBy} </li>
              <li><em>CA Cert</em>: {shorten(this.props.data.TLSCaCert,25)} </li>
              <li><em>Cert</em>: {shorten(this.props.data.TLSCert,25)} </li>
              <li><em>Key</em>: {shorten(this.props.data.TLSKey,25)} </li>
            </ul>
          </CardText>
          <CardActions>
            <FlatButton label="Set As Default"/>
            <FlatButton label="Delete"/>
          </CardActions>
      </Card>
    )
  }
});
