import {
  Image,
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

interface FormFieldProps extends TextInputProps {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyles: string;
}

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={`gap-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View
        className={`border-2 w-full h-16 px-4 bg-black-100 rounded-2xl items-center flex-row ${
          isFocused ? "border-secondary" : "border-black-200"
        }`}
      >
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
