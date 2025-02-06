// app/(tabs)/_layout.tsx
import { Stack } from "expo-router";

export default function TabsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f4f4f4" },
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
