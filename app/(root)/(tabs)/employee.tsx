
import { EmployeesTimesheet, EmployeeListRef,  } from "@easyteam/ui";
import { useMemo, useRef, useLayoutEffect } from "react";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";

export default function EmployeesScreen() {
     const ref = useRef<EmployeeListRef>(null);
     const params = useLocalSearchParams()
     const navigation = useNavigation()
     const router = useRouter()
const startDate = useMemo (() => {
   return params ? params?.startDate: undefined; },
 [params]);
const endDate = useMemo (()=>{
   return params ? params.endDate: undefined; }, 
[params]);
useLayoutEffect(() => {
// Reload the report data when the screen is focused
 const unsubscribe = navigation.addListener('focus', () => {
ref.current?.reloadData();
});
return unsubscribe;
}, [navigation]);

return (
    <EmployeesTimesheet
    ref={ref}
        onEmployeeReportPress={ ({ employeeId, startDate, endDate }:{employeeId:string,startDate:any,endDate:any}) =>
        router.push({pathname:'/time-sheet',params:{employeeId, startDate, endDate}}) }
        onEvent={event =>  console.log(event)}
        startDate={startDate as string|undefined}
        endDate={endDate as string|undefined}
        />
    )
    }
