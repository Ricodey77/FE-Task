import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Button, TextInput, Alert, StyleSheet,  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './AccordionItem';


const AccordionItem = ({ item, onEdit, onDelete, expanded, toggleAccordion }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedItem, setEditedItem] = useState(item);
  const [isDirty, setIsDirty] = useState(false); // Track whether details have changed
  const [selectedGender, setSelectedGender] = useState('');

  const handleToggleAccordion = () => {
    toggleAccordion(item.id);
  };


  const handleEdit = () => {
    if (editMode) {
      if (calculateAge(editedItem.dob) > 18) {
        // Save the edited item
        onEdit(editedItem);
      } else {
        // Display an error message or perform any other necessary action
        Alert.alert(
          'Cannot Edit',
          'Age must be greater than 18 to edit the item.',
          [{ text: 'OK' }]
          );

        setEditedItem(item); // Revert changes
        setIsDirty(false); // Reset dirty flag
        setEditMode(false); // Exit edit mode
        console.log('Cannot edit item. Age must be greater than 18.');
      }
      setEditMode(false); // Exit edit mode
    } else {
      // Enter edit mode
      setEditMode(true);
    }
  };

  const handleCancel = () => {
    
    setEditedItem(item); // Revert changes
    setIsDirty(false); // Reset dirty flag
    setEditMode(false); // Exit edit mode
  };


  const handleDelete = () => {
    onDelete(item);
  };

  const handleChange = (field, value) => {
    setEditedItem((prevItem) => ({
      ...prevItem,
      [field]: value,
    }));

    setIsDirty(true); // Set dirty flag
  };

  // Function to calculate age based on date of birth
  const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

   const Age = calculateAge(editedItem.dob);




return (
  <TouchableOpacity onPress={handleToggleAccordion}>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: editedItem.picture }} style={styles.image} />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{editedItem.first} {editedItem.last}</Text>
          <Ionicons name={expanded ? 'chevron-up-outline' :'chevron-down-outline'} size={24} color="#888" style={styles.arrowIcon} />
          {/* <Image source={expanded ? require('./down.png') : require('./UP.png')} style={styles.arrowIcon} /> */}
        </View>
      </View>

      {expanded && (
        <View style={styles.expandedContent}>
          <View style={styles.rowContainer}>
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>Age</Text>
              <TextInput
                style={styles.ageInput}
                value={Age.toString()}
                // onChangeText={handleChangeAge}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Gender</Text>
            <DropDownPicker
                  items={[
                    { label: 'Male', value: 'Male' },
                    { label: 'Female', value: 'Female' },
                    { label: 'Other', value: 'Other' },
                  ]}
                  defaultValue={editedItem.gender}
                  placeholder=""
                  containerStyle={styles.dropdownContainer}
                  style={styles.dropdown}
                  itemStyle={styles.dropdownItem}
                  dropDownStyle={styles.dropdownList}
                  // onChangeItem={(item) => setSelectedGender(item.value)}
                />
            </View>  
            
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>Country</Text>
              <TextInput
                style={styles.fieldInput}
                value={editedItem.country}
                // onChangeText={handleChangeCountry}
              />
            </View>
            
            
          </View>
          <Text style={styles.fieldLabel}>Description</Text>
          {editMode ? (
              <>
                <TextInput
                  value={editedItem.description}
                  onChangeText={(value) => handleChange('description', value)}
                />
                <View style={{ flexDirection: 'row' }}>
                  <Button title="Save" onPress={handleEdit} disabled={!isDirty} />
                  <Button title="Cancel" onPress={handleCancel} />
                </View>
              </>
            ) : (
              <>
                <Text>{editedItem.description}</Text>
                <Button title="Edit" onPress={handleEdit} />
              </>
            )}
            {!editMode && <Button title="Delete" onPress={handleDelete} />}
        </View>

        
          
        
      )}
    </View>
  </TouchableOpacity>
);

};

export default AccordionItem;











//   return (
//     <TouchableOpacity onPress={handleToggleAccordion} >
//       <View>
//         <Image source={{ uri: editedItem.picture }} style={{ width: 100, height: 100 }} />
//         <Text>{editedItem.first} {editedItem.last}</Text>
//         {expanded && <Text>{calculateAge(editedItem.dob)} years</Text>}
//         {expanded && (
          // <View>
            // {editMode ? (
            //   <>
            //     <TextInput
            //       value={editedItem.description}
            //       onChangeText={(value) => handleChange('description', value)}
            //     />
            //     <View style={{ flexDirection: 'row' }}>
            //       <Button title="Save" onPress={handleEdit} disabled={!isDirty} />
            //       <Button title="Cancel" onPress={handleCancel} />
            //     </View>
            //   </>
            // ) : (
            //   <>
            //     <Text>{editedItem.description}</Text>
            //     <Button title="Edit" onPress={handleEdit} />
            //   </>
            // )}
            // {!editMode && <Button title="Delete" onPress={handleDelete} />}
          // </View>
      //   )}
      // </View>
//     </TouchableOpacity>
//   );