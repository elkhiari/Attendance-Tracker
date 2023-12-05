import * as SecureStore from 'expo-secure-store';

const saveToken = async (token) => {
  try {
    await SecureStore.setItemAsync('token', token);
    console.log('Token saved securely.');
  } catch (error) {
    console.error('Error saving token:', error);
  }
};


const retrieveToken = async () => {
    try {
      const token = await SecureStore.getItemAsync('token');
      if (token) {
        console.log('Token retrieved successfully:', token);
        return token;
      } else {
        console.log('No token found.');
        return null;
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
      return null;
    }
};


const deleteToken = async () => {
    try {
        await SecureStore.deleteItemAsync('token');
        console.log('Token has been deleted successfully.');
    } catch (error) {
        console.error('Error deleting token:', error);
    }
};


export {saveToken,deleteToken,retrieveToken}