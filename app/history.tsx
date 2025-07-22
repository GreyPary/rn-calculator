import { Ionicons } from "@expo/vector-icons";
import { Link, useLocalSearchParams } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const History = () => {
  const { colorScheme } = useColorScheme();

  const { history } = useLocalSearchParams();

  return (
    <SafeAreaView
      className={`${colorScheme === "dark" ? "bg-stone-900" : "bg-white"}`}
    >
      {/* Container */}
      <View className="w-full h-full">
        {/* Header section */}
        <View className="flex-row w-full h-16 items-center bg-white dark:bg-stone-900 gap-4 px-6">
          <Link href="/" asChild>
            <TouchableOpacity>
              <Ionicons
                name="arrow-back"
                size={24}
                color={`${colorScheme === "dark" ? "white" : "black"}`}
              />
            </TouchableOpacity>
          </Link>
          <Text className="text-2xl font-JosefinSans-Regular text-black dark:text-white">
            History
          </Text>
        </View>

        {/* History scrollview */}
        <ScrollView>
          <View className="flex-1 w-full h-full items-end px-6">
            <Text className="text-4xl text-right text-stone-400">
              {history}
            </Text>
            <View className="w-full border-b-hairline border-b-stone-400 mt-6 px-6"></View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default History;
