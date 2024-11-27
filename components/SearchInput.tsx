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

interface SearchInputProps extends TextInputProps {
  title: string;
  value: string;
  handleChangeText: (text: string) => void;
  otherStyles: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      className={`border-2 w-full h-16 px-4 bg-black-100 rounded-2xl items-center flex-row gap-x-4 ${
        isFocused ? "border-secondary" : "border-black-200"
      }`}
    >
      <TextInput
        className="text-base text-white flex-1 font-pregular mt-0.5"
        value={value}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />
      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
