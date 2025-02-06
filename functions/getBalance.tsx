import { client } from "@/constants/thirdweb";
import { useActiveAccount, useWalletBalance } from "thirdweb/react"; // Fixed typo here
import { sepolia } from "thirdweb/chains";
import { useActiveWalletChain } from "thirdweb/react";
import { useMemo } from "react";

export function useBalance() {
  const activeChain = useActiveWalletChain(); // Getting active chain
  const account = useActiveAccount(); // Getting active account
  const { data: balance } = useWalletBalance({
    client,
    chain: sepolia, // Using Sepolia network
    address: account?.address,
  });

  const adjustedBalance = useMemo(() => {
    if (!balance?.displayValue) return "0.0";
    if (balance?.displayValue == "0") return "0";
    return (parseFloat(balance.displayValue) / 10).toFixed(6);
  }, [balance?.displayValue]);

  return adjustedBalance;
}
