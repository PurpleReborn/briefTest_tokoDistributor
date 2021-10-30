import React, {Component} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import {getItemsPagination} from '../redux/actions/items';
import {connect} from 'react-redux';

import Button from '../components/Button';
import ItemsProduct from '../components/ItemsProduct';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      items: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.data();
  }

  data = async () => {
    await this.setState({page: 1});
    const page = this.state.page;
    this.props.getItemsPagination(page).then(() => {
      this.setState({items: this.props.items.dataPagination, loading: false});
    });
  };

  infinite = () => {
    const page = this.state.page;
    this.props
      .getItemsPagination(page)
      .then(() => {
        this.setState({
          items: this.state.items.concat(this.props.items.dataPagination),
          loading: false,
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  handleLoadMore = () => {
    if (this.state.page < this.props.items.pageInfo.total_page) {
      this.setState(
        {
          loading: true,
          page: this.state.page + 1,
        },
        () => {
          this.infinite();
          console.log('load more');
        },
      );
    }
  };

  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.parentWrap}>
          <Text style={styles.title}>List Product</Text>
          <Button
            onPress={() => this.props.navigation.navigate('home')}
            btnText={'Back'}
          />
        </View>
        <View style={styles.itemWrap}>
          {this.state.items.length === 0 ? (
            <View style={styles.loadingWrap}>
              <ActivityIndicator size="large" color="#EC7063" />
            </View>
          ) : (
            <View>
              <FlatList
                columnWrapperStyle={styles.itemList}
                // contentContainerStyle={styles.itemList}
                showsVerticalScrollIndicator={true}
                data={this.state.items}
                vertical
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <ItemsProduct
                    productName={item.product_name}
                    normalPrice={item.normal_price}
                    // agentPrice={item.agent_price}
                    // memberPrice={item.member_price}
                    image={{uri: item.image_uri}}
                    location={item.location}
                  />
                  // <View>
                  //   <Text>{item.product_name}</Text>
                  // </View>
                )}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={0.1}
                numColumns={2}
              />
              {this.state.loading ? (
                <ActivityIndicator color="#EC7063" size="large" />
              ) : null}
            </View>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = {getItemsPagination};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  parentWrap: {
    marginTop: 10,
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    paddingBottom: 10,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemWrap: {
    height: Dimensions.get('window').width / 0.6,
    backgroundColor: '#FADBD8',
    marginTop: 10,
  },
  itemList: {
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 10,
  },
});
