import React, {Component} from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {getItemsBanner, getCategory} from '../redux/actions/items';
import {connect} from 'react-redux';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Button from '../components/Button';
import ItemsCategory from '../components/ItemsCategory';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';

const {width} = Dimensions.get('window');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: [],
      indexSelected: 0,
      loading: true,
    };
  }

  dataBanner = () => {
    this.props.getItemsBanner().then(() => {
      this.setState({data: this.props.items.data});
      this.setState({loading: false});
    });
  };

  dataCategory = () => {
    this.props.getCategory().then(() => {
      this.setState({category: this.props.items.category});
      this.setState({loading: false});
    });
  };

  componentDidMount() {
    this.dataBanner();
    this.dataCategory();
  }

  render() {
    console.log(this.state.loading);
    return (
      <View style={styles.parent}>
        <View style={styles.parentWrap}>
          <View style={styles.iconRow}>
            <Text style={styles.title}>Home </Text>
            <View style={styles.iconRowChild}>
              <TouchableOpacity style={styles.iconWrap}>
                <Icon name="bell" color="#fff" size={20} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconWrap}>
                <Icon2 name="md-chatbox" color="#fff" size={20} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.catWrap}>
            <FlatList
              data={this.state.category}
              horizontal
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <ItemsCategory
                  image={{uri: item.icon}}
                  name={item.category_name}
                />
              )}
              onEndReachedThreshold={0.1}
            />
          </View>
        </View>
        {this.state.data.length === 0 || this.state.loading === true ? (
          <View style={styles.loadingWrap}>
            <ActivityIndicator size="large" color="#EC7063" />
          </View>
        ) : (
          <>
            <Carousel
              autoplay={true}
              loop={true}
              layout="default"
              layoutCardOffset={9}
              data={this.state.data}
              sliderWidth={width}
              itemWidth={width}
              renderItem={({item, index}) => (
                <Image
                  key={index}
                  style={styles.img}
                  resizeMode="contain"
                  source={{uri: item.url_mobile}}
                />
              )}
              onSnapToItem={i => this.setState({indexSelected: i})}
            />
            <Pagination
              dotStyle={styles.dot}
              inactiveDotColor="gray"
              dotColor={'#E74C3C'}
              activeDotIndex={this.state.indexSelected}
              dotsLength={this.state.data.length}
              animatedDuration={1}
              inactiveDotScale={1}
            />
          </>
        )}
        <View style={styles.btnWrap}>
          <Button
            onPress={() => this.props.navigation.navigate('product')}
            btnText={'See Product'}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = {getItemsBanner, getCategory};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  parentWrap: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  title: {
    paddingBottom: 20,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  imgCategory: {
    width: 50,
    height: 50,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  loadingWrap: {
    marginTop: 50,
  },
  itemList: {
    justifyContent: 'space-between',
  },
  catWrap: {
    marginTop: 10,
  },
  btnWrap: {
    marginHorizontal: 30,
    marginBottom: 60,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconRowChild: {
    flexDirection: 'row',
  },
  iconWrap: {
    backgroundColor: '#E74C3C',
    marginHorizontal: 10,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
  },
});
