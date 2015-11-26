var React = require('react');
const Card = require('material-ui/lib/card/card');
const CardHeader = require('material-ui/lib/card/card-header');
const CardText = require('material-ui/lib/card/card-text');
const CardActions = require('material-ui/lib/card/card-actions');
const FlatButton = require('material-ui/lib/flat-button');
const Avatar = require('material-ui/lib/avatar');


//const CardExpandable = require('material-ui/lib/card/card-expandable');
//const CardMedia = require('material-ui/lib/card/card-media');
//const CardTitle = require('material-ui/lib/card/card-title');

module.exports = React.createClass({

  render: function(){
    return (
      <Card initiallyExpanded={false}>
        <CardHeader
          title={this.props.data.Name}
          subtitle={this.props.data.PopulatedBy}
          actAsExpander={true}
          showExpandableButton={true}
          avatar={<Avatar>A</Avatar>} />
          <CardText expandable={true}>
            <ul>
              <li><em>Host:</em> {this.props.data.DockerHost} </li>
              <li><em>CA Cert</em>: {this.props.data.TLSCaCert} </li>
              <li><em>Cert</em>: {this.props.data.TLSCert} </li>
              <li><em>Key</em>: {this.props.data.TLSKey} </li>
            </ul>
          </CardText>
          <CardActions expandable={false}>
            <FlatButton label="Set As Default"/>
            <FlatButton label="Delete"/>
          </CardActions>
      </Card>
    )
  }
});
