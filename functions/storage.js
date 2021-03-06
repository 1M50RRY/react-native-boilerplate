import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem('@' + key, value)
        //return value;
    } catch (e) {
        // saving error
    }
}

export const getData = async key => {
    try {
        const value = await AsyncStorage.getItem('@' + key)
        return value;
    } catch (e) {
        // error reading value
    }
}

