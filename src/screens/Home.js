import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {getItemsBanner} from '../redux/actions/items';
import {connect} from 'react-redux';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Button from '../components/Button';

const {width} = Dimensions.get('window');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      indexSelected: 0,
      loading: true,
    };
  }

  data = () => {
    this.props.getItemsBanner().then(() => {
      this.setState({data: this.props.items.data});
      this.setState({loading: false});
    });
  };

  componentDidMount() {
    this.data();
  }

  render() {
    console.log(this.state.loading);
    return (
      <View style={styles.parent}>
        <View style={styles.parentWrap}>
          <Text style={styles.title}>List Banner </Text>
          <Button
            onPress={() => this.props.navigation.navigate('category')}
            btnText={'Category'}
          />
          <Button
            onPress={() => this.props.navigation.navigate('product')}
            btnText={'Product'}
          />
        </View>
        {this.state.data.length === 0 || this.state.loading === true ? (
          <View style={styles.loadingWrap}>
            <ActivityIndicator size="large" color="#EC7063" />
          </View>
        ) : (
          <>
            <Carousel
              layout="default"
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
              dotStyle={styles.ww}
              inactiveDotColor="gray"
              dotColor={'#E74C3C'}
              activeDotIndex={this.state.indexSelected}
              dotsLength={this.state.data.length}
              animatedDuration={1}
              inactiveDotScale={1}
            />
          </>
        )}
        {/* <Carousel
          layout="default"
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
          dotStyle={styles.ww}
          inactiveDotColor="gray"
          dotColor={'#E74C3C'}
          activeDotIndex={this.state.indexSelected}
          dotsLength={this.state.data.length}
          animatedDuration={1}
          inactiveDotScale={1}
        /> */}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = {getItemsBanner};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  parentWrap: {
    marginTop: 30,
    marginHorizontal: 30,
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
  ww: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  loadingWrap: {
    marginTop: 50,
  },
});
