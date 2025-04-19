# 🛠️ ImmutablePoem Smart Contract

This repository contains the Solidity smart contract and Hardhat project for **ImmutablePoem** — a minimalist, fully functional decentralized poem publishing platform, designed as a self-contained **Proof of Concept (PoC)**.

It is the backend engine of the ImmutablePoem UI:  
> [View frontend repo here](https://github.com/ivanosito/immutablepoem-ui)

---

## 📜 Contract Overview

The `ImmutablePoem.sol` contract enables:

- 🖋️ Publishing poems immutably
- ⭐ Rating poems (1–5 stars)
- 📊 Tracking average ratings per poem
- 🔐 On-chain author verification via `msg.sender`

---

## 🧱 Stack

- **Solidity v0.8.20**
- **Hardhat**
- **Ethers.js (via frontend)**
- Local blockchain for testing

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/ivanosito/ImmutablePoem-bk.git
cd ImmutablePoem-bk
npm install
