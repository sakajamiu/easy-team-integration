/* eslint-disable react-hooks/exhaustive-deps */
import CustomButton from '@/components/ComponentButton';
import { Timesheet, TimesheetRef, AddButton } from '@easyteam/ui';
import { useRouter, useNavigation, useLocalSearchParams } from 'expo-router';
import { useLayoutEffect, useCallback, useState, useRef } from 'react';
import { User } from '@/lib/user';

const TimesheetScreen =() => {
  const ref = useRef<TimesheetRef>(null);
  const { isAdmin } = User();

  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const router = useRouter();
  const { employeeId, startDate: pStartDate, endDate: pEndDate } = params ?? {};

  const [startDate, setStartDate] = useState<string | undefined | any>(pStartDate);
  const [endDate, setEndDate] = useState<string | undefined | any>(pEndDate);
  const handleBack = useCallback(() => {
    if (ref.current) {
      router.push({ pathname: '/(root)/(tabs)/employee', params: { startDate, endDate } });
    }
  }, [router, startDate, endDate, ref, navigation]);
  useLayoutEffect(() => {
    if (isAdmin) {
      navigation.setOptions({
        // eslint-disable-next-line react/no-unstable-nested-components

        headerRight: () => (
          <AddButton 
            onPress={() =>
              router.push({
                pathname: '/shift-form',
                params: {
                  employeeId: ref.current!.selectedEmployeeId,
                },
              })
            }
          />
        ),
      });
    }

    const unsubscribe = navigation.addListener('focus', () => {
      ref.current?.reloadData();
    });
    return unsubscribe;
  }, [navigation, router]);

  const handleEdit = (date: string, selectedEmployeeId: string) =>
    router.push({
      pathname: '/shift-form',
      params: {
        date,
        employeeId: selectedEmployeeId,
      },
    });
  return (
    <>
      <CustomButton
        onPress={handleBack}
        title="Back"
        className={`rounded-md bg-blue-500 ${isAdmin ? '' : 'hidden'}`}
      />
      <Timesheet
        ref={ref}
        onDateRangeChange={(newStartDate: string, newEndDate: string) => {
          setStartDate(newStartDate);
          setEndDate(newEndDate);
        }}
        startDate={startDate}
        endDate={endDate}
        employeeId={employeeId as string}
        onEditPress={handleEdit}
      />
    </>
  );
}
export default TimesheetScreen