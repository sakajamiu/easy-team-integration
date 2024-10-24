import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View, ActivityIndicator } from "react-native";
import { EasyTeamProvider } from '@easyteam/ui';
import { icons } from "@/constants";
import { useAuth , useUser} from "@clerk/clerk-expo"
import { useEffect, useState } from "react";
import { useFetch} from "@/lib/fetch";
import { Employee } from "@/types/type";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";


const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View
    className={`flex flex-row justify-center items-center rounded-full ${focused ? "bg-general-300" : ""}`}
  >
    <View
      className={`rounded-full w-12 h-12 items-center justify-center ${focused ? "bg-general-400" : ""}`}
    >
      <Image
        source={source}
        tintColor=" "
        resizeMode="contain"
        className="w-7 h-7"
      />
    </View>
  </View>
);

export default function Layout() {
    const navigation = useNavigation()
    const { getToken} = useAuth()
    const {user} = useUser()
    const [token, setToken] = useState<any>('')
   
    const fetchToken = async() =>{
        await getToken({template: 'easy-team'}).then((res) => setToken(res ))
    }
   const {data:employee} =useFetch<Employee[]|any>(`/(api)/employee/${user?.unsafeMetadata?.locationid}`)
useEffect(() => {
    fetchToken()
},[])

if(token && employee){
  return (
    <EasyTeamProvider
    token={token}
    employees={employee} 
   
     basePath={`${process.env.EXPO_PUBLIC_EASY_TEAM_URL!}`}
    isGlobalTimeTrackingEnabled={true}>
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          paddingBottom: 0, // ios only
          overflow: "hidden",
          marginHorizontal: 20,
          marginBottom: 5,
          marginTop:20,
          height: 78,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          //position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />
      { // @ts-ignore
      user?.unsafeMetadata?.accessrole?.name ==="Admin" &&(<Tabs.Screen
        name="employee"
        options={{
          title: "EmployeeList",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.employee} focused={focused} />
          ),
        }}
      />)}
      <Tabs.Screen
        name="time-sheet"
        
        options={{
          title: "TimeSheet",
          headerShown: false,

          
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.list} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="shift-form"
        options={{
          title: "ShiftForm",
          headerShown: true,
          headerTitleAlign:'center',
          
          
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.form} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.setting} focused={focused} />
          ),
        }}
      />
    </Tabs>
    </EasyTeamProvider>
  );
}
return <SafeAreaView className="flex justify-center items-center" >
    <ActivityIndicator size="small" color="#000" />
  </SafeAreaView>
}