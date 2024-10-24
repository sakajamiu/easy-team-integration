import {  useLocalSearchParams, useNavigation} from "expo-router";
import { useRef, useLayoutEffect , useEffect} from "react";
import { ShiftForm, ShiftFormRef } from "@easyteam/ui";
import { Alert, Platform } from "react-native";
import { HeaderBackButton} from '@react-navigation/elements'
import { SafeAreaView } from "react-native-safe-area-context";
import dayjs from "dayjs";

 const ShiftFormScreen =() =>{
    const params = useLocalSearchParams()
    const { employeeId, date  } = params;
    const navigation = useNavigation()
    const ref = useRef<ShiftFormRef>(null);
    useLayoutEffect (() => {
    // Modify the screen title and add a cancel button to the header
    const screenTitle = date? dayjs(date as string).format('ddd,MMM DD'): "Add Shift";
    const headerLeft = Platform.select({
    // eslint-disable-next-line react/no-unstable-nested-components
    ios: () => <HeaderBackButton tintColor="#ff3479" onPress={() => navigation.goBack()} />,
    default: undefined,
    });
    navigation.setOptions({
    title: screenTitle,
    headerLeft,
    });
    
}, [navigation, date, params]);
useEffect (() => {
    const preventGoingBack = (e: any) => {
        if (!ref.current?. unsavedChanges) {
        }
        // If we don't have unsaved changes, then we don't need to do anything return;
        // Prevent default behavior of leaving the screen
        e.preventDefault();
        Alert.alert("Unsaved Changes", "Are you sure you want to discard the changes?", [
            { text: "Cancel", style: "cancel", onPress: () => {} },
            {
                     // Prompt the user before leaving the screen
        
        text: "Yes",
        style: "destructive",
        // If the user confirmed, then we dispatch the action we blocked earlier
        // This will continue the action that had triggered the removal of the screen 
        onPress: () => navigation.dispatch(e.data.action),
            },
            ]);
        };
       
   
        const unsubscribe= navigation.addListener("beforeRemove", preventGoingBack);
        return unsubscribe;
        
}, [navigation, ref])

return (
    <SafeAreaView className="bg-[#333]">
    <ShiftForm
ref={ref}
employeeId={employeeId as string} shiftDate={date as string}
onSaveSuccess={() => navigation.goBack()} onCancelPress={() => navigation.goBack()} onEvent={event => console.log(event)}
/>
</SafeAreaView>);
 }
export default ShiftFormScreen
