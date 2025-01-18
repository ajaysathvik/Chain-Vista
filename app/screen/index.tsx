import { ThemedText } from "@/components/ThemedText";
import {
  useActiveAccount,
  useActiveWallet,
  useWalletBalance,
  AccountBalance,
} from "thirdweb/react";
import { getUserEmail } from "thirdweb/wallets/in-app";
import { chain, client } from "@/constants/thirdweb";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import {
  AccountProvider,
  AccountAddress,
} from "thirdweb/react";
import { shortenAddress } from "thirdweb/utils";


const vw = Dimensions.get("window").width / 100;
const vh = Dimensions.get("window").height / 100;

export default function HomeScreen() {
  const account = useActiveAccount();
  const wallet = useActiveWallet();
  const [email, setEmail] = useState<string | null>(null);
  const address = account?.address || ""; // Ensure address is a string


  return (
    <SafeAreaView style={{ paddingTop: 30, flex: 1, backgroundColor: "gray" }}>
      <ThemedText style={{ fontSize: 20, color: "black" }}>
        {email ?? "No email found"}
      </ThemedText>

      {/* <ThemedView
        style={{
          flex: 1,
          backgroundColor: "black",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 20,
        }}
      >
        <ThemedView
          style={{
            flex: 1,
            backgroundColor: "#e8e8e8",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 20,
          }}
        >
          <ThemedText style={{ fontSize: 20, color: "black" }}>
            Your Wallet
          </ThemedText>
          <AccountProvider address={address} client={client}>
            <AccountBalance chain={chain} loadingComponent={<ThemedText>Loading...</ThemedText>} />
          </AccountProvider>

        </ThemedView>
      </ThemedView> */}
    </SafeAreaView>
  );
}
