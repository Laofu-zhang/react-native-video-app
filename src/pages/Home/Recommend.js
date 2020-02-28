import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import ListItem from '../../components/ListItem';

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {},
      moviesList: [],
    };
  }
  componentDidMount() {
    this.fetchMovies();
  }
  async fetchMovies() {
    let response = await axios('https://douban.uieee.com/v2/movie/in_theaters');
    console.log(response.data);
    this.setState({
      movies: response.data,
      moviesList: response.data.subjects,
    });
  }
  render() {
    const {movies, moviesList} = this.state;
    return (
      <View>
        <Text>{movies.title}</Text>
        {console.log(moviesList)}
        <FlatList
          data={moviesList}
          renderItem={item => {
            let moviesInfo = item.item;
            let actors = moviesInfo.casts;
            return (
              <ListItem
                title={moviesInfo.title}
                alt={moviesInfo.alt}
                cover={moviesInfo.images.small}
                director={moviesInfo.directors[0].name}
                actor={actors.map(actor => {
                  return actor.name;
                })}
              />
            );
          }}
          keyExtractor={item => item.id}
        />
        {/* {moviesList.map(item =>Í {
          return <ListItem key={item.id} info={item} />;
        })} */}
      </View>
    );
  }
}

export default Recommend;
