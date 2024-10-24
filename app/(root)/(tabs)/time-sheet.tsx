import { Timesheet,TimesheetRef,AddButton} from "@easyteam/ui";
import { useRouter, useNavigation, useLocalSearchParams } from "expo-router";
import { useLayoutEffect, useCallback, useState, useRef } from "react";
import { Button } from "react-native";

export default function TimesheetScreen() {
     const ref = useRef<TimesheetRef>(null);
    // In case we want to set the employeeId from the route params
    // If undefined, it'll show the shifts for the signed in user
    const params = useLocalSearchParams()
    const navigation = useNavigation()
    const router = useRouter()
    const {
    employeeId,
    startDate: pStartDate ,
    endDate: pEndDate,
    } = params  ?? {};
    const [startDate, setStartDate] = useState<string | undefined|any>(pStartDate);
     const [endDate, setEndDate] = useState<string | undefined|any>(pEndDate);
    const handleBack = useCallback(() => {
    if (ref.current) {
    router.push({pathname:'/(root)/(tabs)/employee', params: { startDate,
    endDate,
    }}); }
    }, [router, startDate, endDate, ref]);
    useLayoutEffect(() => {
    // Allow the user to add a new shift if they have write permissions
    if (ref.current?.adminWritePermissions) {
    // Add a button to the header to add a new shift
    navigation.setOptions({
    // eslint-disable-next-line react/no-unstable-nested-components 
    headerRight: () => (
    (
    <AddButton
    onPress={() =>
    
    
    router.push({ pathname:"/shift-form", params:{
        employeeId: ref.current!.selectedEmployeeId,
    }})}/>))})}
    
    // Reload the data when the screen is focused
const unsubscribe = navigation.addListener("focus", () => { ref.current?.reloadData();
});
return unsubscribe;
}, [navigation, router]);
return (
<>
<Button onPress={handleBack} title="Back" />
<Timesheet
ref={ref}
onDateRangeChange={(newStartDate: string, newEndDate: string) => {
    setStartDate(newStartDate);
setEndDate(newEndDate);
}}

startDate={startDate}
endDate={endDate}
employeeId={employeeId as string}
onEditPress={(date: string, selectedEmployeeId: string) =>
    router.push({ pathname:"/shift-form", params:{
        date,
    employeeId: selectedEmployeeId,
    
    }})
    
    }
    onEvent={event => console.log(event)}

/>

</>
);
}
