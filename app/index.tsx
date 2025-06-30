import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/login">
          <Text>Already have an account? Log in</Text>
      </Link>
      <Link href="/signup">
          <Text>Don't have an account? Sign up</Text>
      </Link>
    </View>
  );
}
