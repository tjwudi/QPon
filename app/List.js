'use strict';

var React = require('react-native'),
  url = require('url'),
  config = require('./config'),
  ListItem = require('./ListItem');

var {
  ListView,
  Text,
  ScrollView,
  ActivityIndicatorIOS,
  activityIndicator
} = React

var styles = React.StyleSheet.create({
  activityIndicator: {
    marginTop: 10
  }
});

var List = React.createClass({
  getInitialState: function() {
    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return {
      dataSource: dataSource.cloneWithRows([])
    }
  },
  fetchData: function() {
    console.log('haha');
    fetch(url.resolve(config.SERVER_BASE, 'coupons'))
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data)
        });
      });
  },
  componentDidMount: function() {
    this.fetchData();
  },
  render: function() {
    if (this.state.dataSource.getRowCount() > 0) {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <ListItem coupon={rowData}/>} 
        />
      );
    }
    else {
      return (
        <ScrollView>
          <ActivityIndicatorIOS
            animating={true}
            size="large"
            style={styles.activityIndicator}
          />
        </ScrollView>
      );
    }
  }
});

module.exports = List;