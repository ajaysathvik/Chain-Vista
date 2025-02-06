import { client } from "@/constants/thirdweb";
import { getProfiles } from "thirdweb/wallets";

export async function getEmail(): Promise<string> {
  const profiles = await getProfiles({ client });

  if (!profiles.length || !profiles[0]?.details?.email) {
    return "No email found"; // Ensuring a string is always returned
  }

  const email = profiles[0].details.email;
  return email.split("@")[0];
}
