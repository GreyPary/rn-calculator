import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "../global.css";

export default function RootLayout() {
  // Setting fonts
  const [loaded, error] = useFonts({
    "JosefinSans-Regular": require("@/assets/fonts/JosefinSans-Regular.ttf"),
    "JosefinSans-Bold": require("@/assets/fonts/JosefinSans-Bold.ttf"),
  });

  // Loading fonts
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="history" options={{ headerShown: false }} />
    </Stack>
  );
}
