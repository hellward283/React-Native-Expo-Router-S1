import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>
      <Stack.Screen name="index" options={{
          headerTitle: "Home"
        }}/>
      <Stack.Screen name="login" options={{
          headerTitle: "Log-in",
        }}/>
      <Stack.Screen name="signup" options={{
          headerTitle: "Sign-up"
        }}/>
  </Stack>
  );
}

