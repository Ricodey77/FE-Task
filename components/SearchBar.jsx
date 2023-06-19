import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ value, onChangeText, onSubmit }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F1F1F1', borderRadius: 8, width: 400 , paddingHorizontal: 12 , marginTop: 30}}>
      <Ionicons name="search" size={24} color="#888" style={{ marginRight: 8 }} />
      <TextInput
        style={{ flex: 1, fontSize: 16, color: '#333' }}
        placeholder="Search"
        placeholderTextColor="#888"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
      />
    </View>
  );
};

export default SearchBar;