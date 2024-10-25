import { ImageSourcePropType } from 'react-native';
import { View, Image } from 'react-native';

const TabIcon = ({ source, focused }: { source: ImageSourcePropType; focused: boolean }) => (
  <View
    className={`flex flex-row justify-center items-center rounded-full ${focused ? 'bg-general-300' : ''}`}
  >
    <View
      className={`rounded-full w-12 h-12 items-center justify-center ${focused ? 'bg-general-400' : ''}`}
    >
      <Image source={source} tintColor=" " resizeMode="contain" className="w-7 h-7" />
    </View>
  </View>
);

export default TabIcon;
