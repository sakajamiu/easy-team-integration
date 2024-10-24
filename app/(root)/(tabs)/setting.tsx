import { Settings } from "@easyteam/ui";
import { ActivityIndicator } from "react-native";
import { fetchAPI } from "@/lib/fetch";
import { useState } from "react";

const SettingScreen =() =>{
   const [loading, setLoading] = useState(false)
   const updateGlobalTracking =async(isGlobalTrackingEnabled: boolean) => {
    setLoading(true)
    const response = await fetchAPI(`/(api)/settings/1`,{
      method: 'PUT',
      body:JSON.stringify({
        isglobaltrackingenabled: isGlobalTrackingEnabled
      })
    })
    console.log(response)
    setLoading(false)
  }
  return(
    
   
    <Settings
    
    onSave={({ employees,isGlobalTrackingEnabled }) => {
     updateGlobalTracking(isGlobalTrackingEnabled)
    }}
    
    />
  
    
   
  
  )
}
export default SettingScreen