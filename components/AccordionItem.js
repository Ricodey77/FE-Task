import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
    expandedContent: {
      paddingVertical: 10,
      paddingHorizontal: 16,
      backgroundColor: '#f9f9f9',
    },
  
    container: {
      flexDirection: 'column',
      width : 400 ,
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
  
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
  
    imageContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 16,
      overflow: 'hidden',
    },
  
    image: {
      width: '100%',
      height: '100%',
    },
  
    nameContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    nameText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    arrowIcon: {
     
      marginLeft: 16,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    label: {
      fontSize: 12,
      marginBottom: 4,
    },
    textInput: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      paddingHorizontal: 10,
    },
  
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    },
  
    fieldContainer: {
      flex: 1,
      marginRight: 10,
    },
  
    fieldLabel: {
      fontSize: 12,
      marginBottom: 4,
    },
  
    fieldInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      
    },
  
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
  
    inputLabel: {
      fontSize: 12,
      fontWeight: 'bold',
      marginRight: 8,
    },
  
    ageInput: {
      width: 60, // Set the desired width for the age input
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      paddingHorizontal: 8,
    },
  
    countryInput: {
      flex: 1, // Use flex: 1 to allow the country input to take up the remaining width
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      paddingHorizontal: 8,
    },
  
    
    dropdownContainer: {
      height: 40,
      marginBottom: 10,
    },
    dropdown: {
      backgroundColor: '#fafafa',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingLeft: 10,
    },
    dropdownItem: {
      justifyContent: 'flex-start',
    },
    dropdownList: {
      marginTop: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      maxHeight: 150,
    },
    
  
  });

  export default styles;