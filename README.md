# FE-Task

Input the following commands in the terminal to run the code 

1. npm install -g expo-cli
2. npm start

Install Expo go in your Smartphone.

scan the QR code with your Smartphone from ExpoGo app.



Description:

1. Created the user interface for an accordion list and a search bar to display the data in a local Json file .
2. only one accordion Item can be opened at a time.
3. in expanded state , the item displays some Json object attributes and the item can be edited / deleted. (only age field in expanded state uses dob attribute to calculate age , rest attributes are displayed as is.. )
4. in edit mode , unless changes are made to description ( to be implemented for other atributes as well) save button is greyed out and cancel button restores any changes made (achieved via a state to track changes).
5. changes made in edit mode DO NOT CHANGE THE JSON FILE. an initial data state is utilized to implement this.
6. edit mode lets the user save changes only if the item's age attribute is greater than 18.
7. delete button on clicked alerts the user to confirm their choice to delete.
8. Search bar filters items in list according to the name attribute.




