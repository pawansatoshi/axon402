#!/bin/bash

OUTPUT="AXON402_FULL_AUDIT.txt"

{
echo "================ AXON402 FULL AUDIT ================"
echo ""

echo "========== PROJECT ROOT =========="
pwd

echo ""
echo "========== SEND USDC COMPONENT =========="
sed -n '1,260p' app/components/tx/send-usdc.jsx

echo ""
echo "========== TOKEN BALANCE HOOK =========="
sed -n '1,220p' hooks/use-token-balance.js

echo ""
echo "========== USDC CONTRACT =========="
sed -n '1,220p' lib/contracts/usdc.js

echo ""
echo "========== WALLET PROVIDER =========="
sed -n '1,260p' providers/wallet-provider.tsx

echo ""
echo "========== APP PAGE =========="
sed -n '1,220p' app/page.jsx

echo ""
echo "========== APP LAYOUT =========="
sed -n '1,220p' app/layout.tsx

echo ""
echo "========== USE TOKEN BALANCE REFERENCES =========="
grep -R "useTokenBalance" -n . 2>/dev/null

echo ""
echo "========== BALANCEOF REFERENCES =========="
grep -R "balanceOf" -n . 2>/dev/null

echo ""
echo "========== PARSEUNITS REFERENCES =========="
grep -R "parseUnits" -n . 2>/dev/null

echo ""
echo "========== USDC ADDRESS REFERENCES =========="
grep -R "USDC_ADDRESS" -n . 2>/dev/null

echo ""
echo "========== 0x3600 REFERENCES =========="
grep -R "0x3600" -n . 2>/dev/null

echo ""
echo "========== PACKAGE JSON =========="
cat package.json

echo ""
echo "========== HOOKS =========="
ls hooks

echo ""
echo "========== CONTRACTS =========="
ls lib/contracts

echo ""
echo "========== APP COMPONENTS =========="
find app/components -type f

echo ""
echo "========== NEXT CONFIG =========="
cat next.config.mjs

echo ""
echo "========== ENV LOCAL =========="
cat .env.local

echo ""
echo "================ AUDIT COMPLETE ================"

} > "$OUTPUT"

echo ""
echo "AUDIT FILE GENERATED:"
echo "$OUTPUT"

