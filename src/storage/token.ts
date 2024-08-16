import * as SecureStore from 'expo-secure-store'

async function getToken(keyToken: string) {
    try {
        return SecureStore.getItem(keyToken)
    } catch (error) {
        throw error
    }
}

async function saveToken(keyToken: string, value: string) {
    try {
        return SecureStore.setItemAsync(keyToken, value)
    } catch (error) {
        throw error
    }
}

export const Token = { getToken, saveToken }