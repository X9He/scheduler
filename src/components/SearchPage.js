import React, { Component } from 'react';
import {SearchBar} from 'react-native-elements'
import { Text, View, TextInput, Image} from 'react-native';

class SearchPage extends Component{

    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };
    
      render() {
        const { search } = this.state;

        return (
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
          />
        );
      }
}

const styles = {
    mainStyle:{
        margin: 15
    }
}

export default SearchPage;