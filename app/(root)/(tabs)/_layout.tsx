/* eslint-disable react-hooks/exhaustive-deps */
import { Tabs, useRouter } from 'expo-router';
import { ActivityIndicator, Alert } from 'react-native';
import { EasyTeamProvider } from '@easyteam/ui';
import { icons } from '@/constants';
import { useAuth } from '@clerk/clerk-expo';
import { useEffect, useState } from 'react';
import { useFetch } from '@/lib/fetch';
import { Employee } from '@/types/type';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabIcon from '@/components/TabIcon';
import { User } from '@/lib/user';
import { ScreenOptions } from '@/constants/tabScreenOptions';

export default function Layout() {
  const { getToken } = useAuth();

  const [token, setToken] = useState<any>('');
  const router = useRouter();
  const { locationId, isAdmin } = User();

  const fetchToken = async () => {
    try {
      await getToken({ template: 'easy-team' }).then((res) => setToken(res));
    } catch (err: any) {
      Alert.alert('Error', err.errors[0].longMessage);
      router.push('/(auth)/sign-in');
    }
  };
  const { data: employee } = useFetch<Employee[] | any>(`/(api)/employee/${locationId}`);
  const { data: isglobaltrackingenabled } = useFetch<any>('/(api)/setting');

  useEffect(() => {
    fetchToken();
  }, []);

  if (token && employee) {
    return (
      <EasyTeamProvider
        token={token}
        employees={employee}
        basePath={`${process.env.EXPO_PUBLIC_EASY_TEAM_URL!}`}
        isGlobalTimeTrackingEnabled={isglobaltrackingenabled}
      >
        <Tabs
          sceneContainerStyle={{ backgroundColor: '#333' }}
          initialRouteName="index"
          screenOptions={ScreenOptions}
        >
          <Tabs.Screen
            name="home"
            options={{
              title: 'Home',
              headerShown: false,
              tabBarIcon: ({ focused }) => <TabIcon source={icons.home} focused={focused} />,
            }}
          />

          <Tabs.Screen
            name="employee"
            options={{
              title: 'EmployeeList',
              headerShown: false,
              href: isAdmin ? '/(root)/(tabs)/employee' : null,
              tabBarIcon: ({ focused }) => <TabIcon source={icons.employee} focused={focused} />,
            }}
          />
          <Tabs.Screen
            name="time-sheet"
            options={{
              title: 'TimeSheet',
              headerShown: true,
              tabBarIcon: ({ focused }) => <TabIcon source={icons.list} focused={focused} />,
            }}
          />
          <Tabs.Screen
            name="shift-form"
            options={{
              title: 'ShiftForm',
              headerShown: true,
              headerTitleAlign: 'center',

              tabBarIcon: ({ focused }) => <TabIcon source={icons.form} focused={focused} />,
            }}
          />

          <Tabs.Screen
            name="setting"
            options={{
              title: 'Setting',
              headerShown: false,
              href: isAdmin ? '/(root)/(tabs)/setting' : null,
              tabBarIcon: ({ focused }) => <TabIcon source={icons.setting} focused={focused} />,
            }}
          />
        </Tabs>
      </EasyTeamProvider>
    );
  }
  return (
    <SafeAreaView className="flex justify-center items-center">
      <ActivityIndicator size="small" color="#000" />
    </SafeAreaView>
  );
}
