import { ethers } from "ethers";

const RPC_URL = "https://rpc.testnet.arc.network";
const provider = new ethers.JsonRpcProvider(RPC_URL);

const wallet = new ethers.Wallet(
  process.env.PRIVATE_KEY!,
  provider
);

const USDC_ADDRESS =
  "0x3600000000000000000000000000000000000000";

const ABI = [
  "function transfer(address to, uint256 amount) returns (bool)"
];

const usdc = new ethers.Contract(
  USDC_ADDRESS,
  ABI,
  wallet
);

export async function sendCharge(
  to: string,
  amount: string
) {

  const tx = await usdc.transfer(
    to,
    ethers.parseUnits(amount, 6)
  );

  await tx.wait();

  return {
    hash: tx.hash,
    explorer:
      `https://explorer.testnet.arc.network/tx/${tx.hash}`,
    amount,
    date: new Date().toISOString()
  };

}
