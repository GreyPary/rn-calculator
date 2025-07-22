import CalcButton from "@/components/CalcButton";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useColorScheme } from "nativewind";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { colorScheme } = useColorScheme();

  // Setting states
  const [firstValue, setFirstValue] = useState("");
  const [operator, setOperator] = useState("");
  const [displayValue, setDisplayValue] = useState("0");
  const [history, setHistory] = useState<string[]>([]);

  // Handling functions
  const handleDisplay = (num: string) => {
    if (displayValue.length > 14) return;

    displayValue === "0"
      ? setDisplayValue(num)
      : setDisplayValue(displayValue + num);
  };

  const handleDecimalPt = () => {
    if (displayValue.length > 14) return;

    const isDecimal = displayValue.includes(".");
    if (!isDecimal) {
      setDisplayValue(displayValue + ".");
    }
  };

  const handleOperator = (optor: string) => {
    if (displayValue === "0") return;

    setFirstValue(displayValue);
    setOperator(optor);
    setDisplayValue("0");
  };

  const handlePercent = () => {
    if (displayValue === "0") return;

    setDisplayValue((parseFloat(displayValue) / 100).toString());
  };

  const handleDelete = () => {
    if (displayValue === "0") return;

    const updated = displayValue.slice(0, -1);
    setDisplayValue(displayValue.length === 1 ? "0" : updated);
  };

  const handleClearAll = () => {
    setFirstValue("");
    setOperator("");
    setDisplayValue("0");
  };

  // Switch operate
  const operate = (num1: number, num2: number, optor: string) => {
    switch (optor) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "x":
        return num1 * num2;
      case "÷":
        return num1 / num2;
      default:
        return num2;
    }
  };

  const handleCalculation = () => {
    if (displayValue === "0") return;

    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    const result = operate(num1, num2, operator);
    setDisplayValue(parseFloat(result.toFixed(8)).toString());

    setOperator("");
    setFirstValue("");

    setHistory([
      ...history,
      `\n ${firstValue} ${operator} ${displayValue} = ${result}`,
    ]);
  };

  return (
    <SafeAreaView
      className={`${colorScheme === "dark" ? "bg-stone-900" : "bg-white"}`}
    >
      {/* Container */}
      <View className="w-full h-full">
        {/* Header section */}
        <View className="flex-row w-full h-16 items-center justify-between bg-white dark:bg-stone-900 px-6">
          <Text className="text-2xl font-JosefinSans-Regular text-black dark:text-white">
            Calculator
          </Text>
          <Link
            href={{
              pathname: "/history",
              params: { history: history },
            }}
            asChild
          >
            <TouchableOpacity>
              <Ionicons name="time-outline" size={32} color="slategray" />
            </TouchableOpacity>
          </Link>
        </View>
        <View className="flex-1 w-full h-full">
          {/* Display section */}
          <View className="w-full h-1/3 items-end justify-end bg-stone-200 dark:bg-stone-700 gap-2 p-6">
            <Text className="text-2xl font-JosefinSans-Regular text-stone-700 dark:text-stone-200">
              {firstValue} {operator}
            </Text>
            <Text className="text-6xl font-JosefinSans-Bold text-black dark:text-white">
              {displayValue}
            </Text>
          </View>
          {/* Button layout */}
          <View className="flex-1 flex-row flex-wrap w-full h-2/3 justify-between bg-white dark:bg-stone-900 gap-[4%] p-6">
            <CalcButton
              title="AC"
              type="gray"
              onPress={() => handleClearAll()}
            />
            <CalcButton title="⌫" type="gray" onPress={() => handleDelete()} />
            <CalcButton title="%" type="blue" onPress={() => handlePercent()} />
            <CalcButton
              title="÷"
              type="blue"
              onPress={() => handleOperator("÷")}
            />
            <CalcButton
              title="7"
              type="default"
              onPress={() => handleDisplay("7")}
            />
            <CalcButton
              title="8"
              type="default"
              onPress={() => handleDisplay("8")}
            />
            <CalcButton
              title="9"
              type="default"
              onPress={() => handleDisplay("9")}
            />
            <CalcButton
              title="x"
              type="blue"
              onPress={() => handleOperator("x")}
            />
            <CalcButton
              title="4"
              type="default"
              onPress={() => handleDisplay("4")}
            />
            <CalcButton
              title="5"
              type="default"
              onPress={() => handleDisplay("5")}
            />
            <CalcButton
              title="6"
              type="default"
              onPress={() => handleDisplay("6")}
            />
            <CalcButton
              title="-"
              type="blue"
              onPress={() => handleOperator("-")}
            />
            <CalcButton
              title="1"
              type="default"
              onPress={() => handleDisplay("1")}
            />
            <CalcButton
              title="2"
              type="default"
              onPress={() => handleDisplay("2")}
            />
            <CalcButton
              title="3"
              type="default"
              onPress={() => handleDisplay("3")}
            />
            <CalcButton
              title="+"
              type="blue"
              onPress={() => handleOperator("+")}
            />
            <CalcButton
              title="0"
              type="default"
              onPress={() => handleDisplay("0")}
            />
            <CalcButton
              title="."
              type="default"
              onPress={() => handleDecimalPt()}
            />
            <CalcButton
              title="="
              type="blue"
              onPress={() => handleCalculation()}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
