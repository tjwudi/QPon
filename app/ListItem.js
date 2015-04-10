'use strict';

var React = require('react-native'),
  Detail = require('./Detail');

var {
  Text,
  View,
  Image,
  TouchableHighlight
} = React;

var styles = React.StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  leftCol: {
  },
  rightCol: {
    flex: 1
  },
  couponImage: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  couponTitle: {
    fontWeight: '500'
  },
  couponCompanyTitle: {
    fontSize: 12,
    marginTop: 2
  }
});

var ListItem = React.createClass({
  _navigateToDetail: function() {
    this.props.navigator.push({
      component: Detail,
      title: '优惠券详情',
      passProps: {
        coupon: this.props.coupon
      }
    });
  },

  render: function() {
    var companyTitle = <Text style={styles.couponCompanyTitle}></Text>;

    if (this.props.coupon.company && this.props.coupon.company.title) {
      companyTitle = (
        <Text style={styles.couponCompanyTitle}>{this.props.coupon.company.title}</Text>
      );
    }

    return (
      <TouchableHighlight underlayColor="#ccc" onPress={this._navigateToDetail}>
        <View style={styles.container}>
          <View style={styles.leftCol}>
            <Image style={styles.couponImage} source={require('image!placeholder')}/>
          </View>
          <View style={styles.rightCol}>
            <Text style={styles.couponTitle}>{this.props.coupon.title}</Text>
            {companyTitle}
          </View> 
        </View>
      </TouchableHighlight>
    );
  }
});

module.exports = ListItem;