import { TextInputProps, TouchableOpacityProps } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SelectDropdownProps } from "react-native-select-dropdown";
import { EmployeeData } from "@easyteam/ui";

declare interface InputFieldProps extends TextInputProps {
    label: string;
    icon?: any;
    secureTextEntry?: boolean;
    labelStyle?: string;
    containerStyle?: string;
    inputStyle?: string;
    iconStyle?: string;
    className?: string;
}
declare interface SelectInputFieldProps  extends Pick<SelectDropdownProps, 'onSelect'>{
    label: string;
    labelStyle?: string;
    containerStyle?: string;
    inputStyle?: string;
    className?: string;
    data:Array<{title, id}>
}
declare interface ButtonProps extends TouchableOpacityProps {
    title: string;
    bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
    textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
    IconLeft?: React.ComponentType<any>;
    IconRight?: React.ComponentType<any>;
    className?: string;
  }
  declare interface Employee{
    id: string,
    name: string,
    payrollId: string,
    locationId: string,
    
    

  }
  