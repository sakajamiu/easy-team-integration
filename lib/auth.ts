import * as Linking from "expo-linking";
import * as SecureStore from 'expo-secure-store'
import { fetchAPI } from "@/lib/fetch";

export interface TokenCache {
    getToken: (key: string) => Promise<string | undefined | null>
    saveToken: (key: string, token: string) => Promise<void>
    clearToken?: (key: string) => void
  }

  export const tokenCache = {
    async getToken(key: string) {
      try {
        const item = await SecureStore.getItemAsync(key)
      
        return item
      } catch (error) {
        
        await SecureStore.deleteItemAsync(key)
        return null
      }
    },
    async saveToken(key: string, value: string) {
      try {
        return SecureStore.setItemAsync(key, value)
      } catch (err) {
        return
      }
    },
  }
  
  
