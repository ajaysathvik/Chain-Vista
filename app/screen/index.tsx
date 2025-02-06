import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { getEmail } from "@/functions/getProfile";
import { useBalance } from "@/functions/getBalance";
import { useActiveWalletChain } from "thirdweb/react";
var transactions = [{}];

const HomeScreen = () => {
  const [Email, setEmail] = React.useState<string>("loading...");

  const balance = useBalance();
  React.useEffect(() => {
    getEmail().then((email) => {
      setEmail(email);
    });
  }, []);

  console.log(balance);

  return (
    <View style={styles.c1}>
      <Text style={styles.h1}>{Email}</Text>
      <View style={styles.c2}>
        <View style={styles.c3}>
          <Text style={styles.h2}>$ {balance}</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>&nbsp; Send Money</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}> + &nbsp; Top up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.c4}>
          <View style={styles.assetContainer}>
            <View style={styles.assetBox}>
              <Text>btc</Text>
            </View>
            <View style={styles.assetBox}>
              <Text>eth</Text>
            </View>
          </View>

          {/* <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.transactionItem}
            onPress={() =>
              navigation.navigate("TransactionDetails", { transaction: item })
            }
          >
            <View style={styles.transactionLeft}>
              <Text style={styles.transactionIcon}>{item.name.charAt(0)}</Text>
              <View>
                <Text style={styles.transactionName}>{item.name}</Text>
                <Text style={styles.transactionTime}>{item.time}</Text>
              </View>
            </View>
            <Text
              style={[
                styles.amount,
                item.type === "income" ? styles.income : styles.expense,
              ]}
            >
              {item.amount}
            </Text>
          </TouchableOpacity>
        )}
      /> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  c1: { flex: 1, paddingTop: 20, backgroundColor: "#fff", marginTop: 50 },
  c2: {
    flex: 1,
    backgroundColor: "#000",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  c3: {
    padding: 20,
  },
  c4: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: "100%",
  },
  h1: {
    fontSize: 28,
    paddingHorizontal: 20,
    color: "#000",
    paddingBottom: 20,
  },
  h2: { fontSize: 28, fontWeight: "bold", color: "#fff", fontFamily: "Inter" },
  buttonRow: { flexDirection: "row", marginTop: 10 },
  button: {
    backgroundColor: "#181B1A",
    padding: 10,
    borderRadius: 40,
    marginRight: 10,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  buttonSymbol: {},
  assetContainer: { flexDirection: "row", marginTop: 20 },
  assetBox: {
    flex: 1,
    height: 80,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    margin: 5,
  },
  sectionTitle: { marginTop: 20, fontSize: 18, fontWeight: "bold" },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  transactionLeft: { flexDirection: "row", alignItems: "center" },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
    textAlign: "center",
    lineHeight: 40,
    fontSize: 18,
    fontWeight: "bold",
  },
  transactionName: { fontSize: 16, fontWeight: "bold" },
  transactionTime: { fontSize: 12, color: "gray" },
  amount: { fontSize: 16, fontWeight: "bold" },
  income: { color: "green" },
  expense: { color: "red" },
});

export default HomeScreen;
