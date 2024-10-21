import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { EasyTeamProvider } from '@easyteam/ui';
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!
SplashScreen.preventAutoHideAsync();


export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  if (!publishableKey) {
    throw new Error(
      'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
    )
  }
const employees = [{
  id: 'employeetest1',
  name:'john doe',
  payrollId:"employer1",

},
{
  name:'jenet doe',
  id:'employeetest2',
  payrollId:"employer1",
},
{
  name:'jene doet',
  id:'internalemployee1',
  payrollId:"employer1",
}]

const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZUlkIjoiaW50ZXJuYWxlbXBsb3llZTEiLCJsb2NhdGlvbklkIjoibG9jYXRpb24xIiwib3JnYW5pemF0aW9uSWQiOiJ0ZXN0ZW1wbG95ZWUxIiwicGFydG5lcklkIjoiZDQwZTJmOTItMjUyMy00ODMzLWE5Y2MtYTk1Y2VmNTc2ODc2IiwicGF5cm9sbElkIjoiZW1wbG95ZXIxIiwiYWNjZXNzUm9sZSI6eyJuYW1lIjoibWFuYWdlciIsInBlcm1pc3Npb25zIjpbIkxPQ0FUSU9OX1JFQUQiLCJTSElGVF9SRUFEIiwiU0hJRlRfV1JJVEUiLCJTSElGVF9BREQiXX0sInJvbGUiOnsibmFtZSI6Im1hbmFnZXIifX0.iPx4S6G3x2Jmf9X-J0wsdI2qZulgUWeAtoVjtBoXCeyB8SxdnLpLYhDsrZNs8eZ8Ad0Gm-PK6k1VdU-7lC2P3fHOsF6OxEpjyezR6P2b1lgaTgmjFfnCoz6_7mDF_Q5Nwg6hwvo_0vxb4LsAV_mB7eE13QX0rATY04tv2_cuQ2F37hq3zocXh9bceMG4hGCcK2w5-SspKc06I3A4XX0A5kNsqQ9ezJE6TWonhIquWKbpsD61pNOZD4Slbd2_OW5ms7iL4-RPkQX5WMkUUZ6v_KH57uQNKKZArMILfMH6pB7NzFSQgj9B1r-bs35v3ioAN_l9BWEp3UtHfy-u5EHgZtwrpPl8b8NjLtTQfBTX_gOeoY97cqaVdsb8bu-cnctiB4NMP4jj6qSwKJ1rnRTSzqcQfD8rMykYzBfacXflUKMgo5daU_7grRfs2CkK8jnmDjVZvy9TVVLiEc5Wd0jLgmFFK86Mleiokj3vfaPuKJjFkekhAQSKCBoWyr9W5_UsPOnoC-HZxOBzLHMTKckIVELzyWv3DF_05t5TTfhY3Qd2TlMdcojGMyGp-om7fC2xGmVtnOli0LhD3TyO9UAGCkaUD6Hl7YB2Lgqbcr_ogPFS9eUubAY_m3LJWBhPaXJtsCa_LOrsbdn73dTBcaqQytN-Pr7lxNhufeTD2Ra0jO4"

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ClerkLoaded>
    <EasyTeamProvider
    token={token}
     employees={employees} 
     basePath={'https://easyteam-dev-cbbeaxcbbkabh2g8.z03.azurefd.net/embed'}
    isGlobalTimeTrackingEnabled={true}>
    
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(root)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
    
    </EasyTeamProvider>
    </ClerkLoaded>
    </ClerkProvider>
  );
}
