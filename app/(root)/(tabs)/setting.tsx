import { Settings } from '@easyteam/ui';
import { Alert } from 'react-native';
import { fetchAPI } from '@/lib/fetch';

const SettingScreen = () => {
  const updateGlobalTracking = async (isGlobalTrackingEnabled: boolean) => {
    try {
      await fetchAPI(`/(api)/settings/1`, {
        method: 'PUT',
        body: JSON.stringify({
          isglobaltrackingenabled: isGlobalTrackingEnabled,
        }),
      });
    } catch (err: any) {
      Alert.alert('Error:', err);
    }
  };
  return (
    <Settings
      onSave={({ employees, isGlobalTrackingEnabled }) => {
        updateGlobalTracking(isGlobalTrackingEnabled);
      }}
    />
  );
};
export default SettingScreen;
