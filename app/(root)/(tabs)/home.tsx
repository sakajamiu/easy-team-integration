
import { Clock } from "@easyteam/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useUser,useAuth  } from "@clerk/clerk-expo";
import { icons } from "@/constants";
import { router } from "expo-router";

export default function ClockScreen ( ) {
    const { signOut } = useAuth();
   const { user} = useUser()
   const handleSignOut = () => {
    signOut();
    router.replace("/(auth)/sign-in");
  };


    return(
        <>
        <SafeAreaView>
             <View className="flex flex-row items-center justify-between my-5">
              <Text className="text-xl font-JakartaExtraBold">
                Welcome {user?.firstName}👋
              </Text>
              <TouchableOpacity
                onPress={handleSignOut}
                className="justify-center items-center w-10 h-10 rounded-full bg-white"
              >
                <Image source={icons.out} className="w-4 h-4" />
              </TouchableOpacity>
            </View>
            
        </SafeAreaView>
        <Clock onEvent={event => console.log(event)}/>
        </>
    )
}