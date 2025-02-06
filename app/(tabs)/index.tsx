import { Image, StyleSheet, View, useColorScheme } from "react-native";
import { Button } from "react-native";
import { ParallaxScrollView } from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  useActiveAccount,
  useConnect,
  useDisconnect,
  useActiveWallet,
  ConnectButton,
  lightTheme,
  ConnectEmbed,
} from "thirdweb/react";
import { useRouter } from "expo-router";
import {
  getUserEmail,
  hasStoredPasskey,
  inAppWallet,
} from "thirdweb/wallets/in-app";
import { chain, client } from "@/constants/thirdweb";
import { shortenAddress } from "thirdweb/utils";
import { ThemedButton } from "@/components/ThemedButton";
import { useEffect, useState } from "react";
import { createWallet } from "thirdweb/wallets";
import { baseSepolia, ethereum } from "thirdweb/chains";
import { createAuth } from "thirdweb/auth";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Pressable, Text } from "react-native";
import { Dimensions } from "react-native";
const vw = Dimensions.get("window").width / 100;
const vh = Dimensions.get("window").height / 100;

const wallets = [
  inAppWallet({
    auth: {
      options: ["google", "facebook", "email", "phone"],
    },
    smartAccount: {
      chain: baseSepolia,
      sponsorGas: true,
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet", {
    appMetadata: {
      name: "Thirdweb RN Demo",
    },
    mobileConfig: {
      callbackURL: "https://thirdweb.com",
    },
    walletConfig: {
      options: "smartWalletOnly",
    },
  }),
  createWallet("me.rainbow"),
  createWallet("com.trustwallet.app"),
  createWallet("io.zerion.wallet"),
];

const thirdwebAuth = createAuth({
  domain: "localhost:3000",
  client,
});

let isLoggedIn = false;

export default function Login() {
  const account = useActiveAccount();
  const theme = useColorScheme();
  const router = useRouter();

  const handleNavigateToScreen = () => {
    // Navigate to the screen folder's index
    router.push("/screen");
  };
  return (
    <ThemedView>
      <View style={{ height: 20 * vh }} />
      <ConnectButton
        client={client}
        theme={theme || "dark"}
        wallets={wallets}
        chain={baseSepolia}
      />
      <View style={{ height: 20 * vh }} />
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <Pressable onPress={handleNavigateToScreen} style={styles.button}>
          <Text style={styles.buttonText}>Go to Screen</Text>
        </Pressable>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  rowContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 24,
    justifyContent: "space-evenly",
  },
  tableContainer: {
    width: "100%",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  leftColumn: {
    flex: 1,
    textAlign: "left",
  },
  rightColumn: {
    flex: 1,
    textAlign: "right",
  },
});
