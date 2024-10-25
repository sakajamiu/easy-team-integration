import { Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { SelectInputFieldProps } from '@/types/type';

const SelectInputField = ({
  data,
  onSelect,
  label,
  labelStyle,
  className,
  containerStyle,
  inputStyle,
  ...props
}: SelectInputFieldProps) => {
  return (
    <SelectDropdown
      data={data ?? []}
      onSelect={onSelect}
      {...props}
      renderButton={(selectedItem, isOpen) => {
        return (
          <View>
            <View className="my-3 w-full">
              <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>{label}</Text>
            </View>
            <View>
              <Text
                className={`flex flex-row justify-start  p-4 items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500  ${containerStyle}`}
              >
                {' '}
                {(selectedItem && selectedItem.title) || 'Select your option'}
              </Text>
            </View>
          </View>
        );
      }}
      renderItem={(item, index, isSelected) => {
        return (
          <View
            style={{
              ...(isSelected && { backgroundColor: '#D2D9DF' }),
            }}
          >
            <Text
              className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
            >
              {item.title}
            </Text>
          </View>
        );
      }}
    />
  );
};

export default SelectInputField;
