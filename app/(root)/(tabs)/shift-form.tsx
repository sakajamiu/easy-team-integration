import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useRef, useLayoutEffect, useEffect } from 'react';
import { ShiftForm, ShiftFormRef } from '@easyteam/ui';
import { Alert, Platform } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import dayjs from 'dayjs';

const ShiftFormScreen = () => {
  const params = useLocalSearchParams();
  const { employeeId, date } = params;
  const navigation = useNavigation();
  const ref = useRef<ShiftFormRef>(null);
  useLayoutEffect(() => {
    const screenTitle = date ? dayjs(date as string).format('ddd,MMM DD') : 'Add Shift';
    const headerLeft = Platform.select({
      ios: () => <HeaderBackButton tintColor="#ff3479" onPress={() => navigation.goBack()} />,
      default: undefined,
    });
    navigation.setOptions({
      title: screenTitle,
      headerLeft,
    });
  }, [navigation, date, params]);
  useEffect(() => {
    const preventGoingBack = (e: any) => {
      if (!ref.current?.unsavedChanges) {
        return;
      }

      e.preventDefault();
      Alert.alert('Unsaved Changes', 'Are you sure you want to discard the changes?', [
        { text: 'Cancel', style: 'cancel', onPress: () => {} },
        {
          text: 'Yes',
          style: 'destructive',

          onPress: () => navigation.dispatch(e.data.action),
        },
      ]);
    };

    const unsubscribe = navigation.addListener('beforeRemove', preventGoingBack);
    return unsubscribe;
  }, [navigation, ref]);

  return (
    <SafeAreaView className="bg-[#333]">
      <ShiftForm
        ref={ref}
        employeeId={employeeId as string}
        shiftDate={date as string}
        onSaveSuccess={navigation.goBack}
        onCancelPress={navigation.goBack}
      />
    </SafeAreaView>
  );
};
export default ShiftFormScreen;
