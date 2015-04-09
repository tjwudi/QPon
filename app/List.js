'use strict';

var React = require('react-native');

var {
  ListView,
  Text
} = React


var List = React.createClass({
  getInitialState: function() {
    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return {
      dataSource: dataSource.cloneWithRows(['row1', 'row2', 'row3', 'row4', 'row5', 'row6'])
    }
  },
  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>} 
      />
    );
  }
});

module.exports = List;