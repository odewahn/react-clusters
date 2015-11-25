var React = require('react');
const TextField = require('material-ui/lib/text-field');
const RaisedButton = require('material-ui/lib/raised-button');
const FontIcon = require('material-ui/lib/font-icon');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <TextField hintText="Name"/>
        <br/>
        <TextField hintText="Docker Host"/>
        <br/>
        <TextField hintText="CA Cert"/>
        <br/>
        <TextField hintText="Cert File"/>
        <br/>
        <TextField hintText="Cert Key"/>
        <br/>
        <RaisedButton
          secondary={false}
          label="New Credential">
          <FontIcon className="material-icons">ic_add_circle</FontIcon>

        </RaisedButton>
      </div>
    )
  }

});
