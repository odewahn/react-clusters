var React = require('react')

module.exports = React.createClass({
  getDefaultProps: function(){
    return {
      clusters: ['Carina Personal', 'Carina analysis', 'Enterprise swarm', 'localhost'],
    }
  },
  render: function(){
    var clusterList = this.props.clusters.map(function(c){
      return <li> {c} </li>
    });
    return (
      <div id='fred' style={{border: '1px solid red'}} >
        <h3>These are your clusters</h3>
        <ul>
          {clusterList}
        </ul>
      </div>
    )
  }
});
