'use strict';

var React = require('react-native');

var {
  ScrollView,
  Text
} = React;

var styles = React.StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    fontWeight: '500',
    marginTop: 10,
    fontSize: 16
  },
  subTitle: {

  },
  content: {
    marginTop: 20
  }
});

var Detail = React.createClass({
  render: function() {
    var companyTitle = <Text style={styles.subTitle}></Text>;

    if (this.props.coupon.company && this.props.coupon.company.title) {
      companyTitle = (
        <Text style={styles.subTitle}>{this.props.coupon.company.title}</Text>
      );
    }

    return (
      <ScrollView bounces={false} style={styles.container}>
        <Text style={styles.title}>{this.props.coupon.title}</Text>
        {companyTitle}
        <Text style={styles.content}>{this.props.coupon.description}</Text>
      </ScrollView>
    );
  }
});

module.exports = Detail;