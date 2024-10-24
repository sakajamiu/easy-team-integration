import { Settings } from "@easyteam/ui";

import { fetchAPI } from "@/lib/fetch";


const SettingScreen =() =>{
   
   const updateGlobalTracking =async(isGlobalTrackingEnabled: boolean) => {
  
    await fetchAPI(`/(api)/settings/1`,{
      method: 'PUT',
      body:JSON.stringify({
        isglobaltrackingenabled: isGlobalTrackingEnabled
      })
    })
  
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