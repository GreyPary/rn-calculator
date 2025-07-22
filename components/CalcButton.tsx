import React from "react";
import { Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  type: "default" | "gray" | "blue";
  onPress: () => void;
};

const CalcButton = ({ title, type, onPress }: Props) => {
  const isZero = title === "0";

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${isZero ? "flex-grow" : "w-[22%]"} ${
        type === "default"
          ? "bg-stone-100 dark:bg-stone-800"
          : type === "gray"
          ? "bg-stone-700 "
          : "bg-sky-600"
      } items-center justify-center rounded-2xl py-6`}
    >
      <Text
        className={`${
          type === "default" ? "text-black dark:text-white" : "text-white"
        } text-3xl font-JosefinSans-Bold`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CalcButton;
