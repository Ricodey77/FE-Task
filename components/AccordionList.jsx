import React, { useState } from 'react';
import { View, FlatList, TextInput, Alert, StyleSheet  } from 'react-native';
import AccordionItem from './AccordionItem';
import initialData from '../celebrities.json';
import SearchBar from './SearchBar';


const AccordionList = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [jsonData, setJsonData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState('');
  


  const toggleAccordion = (itemId) => {
    setExpandedId(itemId === expandedId ? null : itemId);
  };

  const handleEdit = (editedItem) => {
    // Update the item in the data source
    const updatedData = jsonData.map((item) => {
      if (item.id === editedItem.id) {
        return editedItem;
      }
      return item;
    });
    // Update the data source
    setJsonData(updatedData)
    // Clear the expanded item
    setExpandedId(null);
  };

  const handleDelete = (itemToDelete) => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            // Remove the item from the data source
            const updatedData = jsonData.filter((item) => item.id !== itemToDelete.id);
            // Update the data source
            setJsonData(updatedData);
            // Clear the expanded item
            setExpandedId(null);
          },
        },
      ]
    );
  };

  const renderAccordionItem = ({ item }) => (
    <AccordionItem
      item={item}
      expanded={expandedId === item.id}
      toggleAccordion={toggleAccordion}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );

  const handleSearch = (text) => {
    setSearchQuery(text);
    // Filter the data based on search query
    const filteredData = initialData.filter((item) =>

      `${item.first} ${item.last}`.toLowerCase().includes(text.toLowerCase())
    );
    setJsonData(filteredData);
    // Clear the expanded item
    setExpandedId(null);
  };

  return (
    <View >
       <SearchBar
        // style = {listStyles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <FlatList 
        data={jsonData}
        renderItem={renderAccordionItem}
        keyExtractor={(item) => item.id.toString()}
        extraData={expandedId} // Ensure re-render when expandedId changes
      />
    
      
    </View>
  );
};

export default AccordionList;

