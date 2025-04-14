const hre = require("hardhat");

async function main() {
  const Lock = await hre.ethers.getContractFactory("ImmutablePoem");
  const lock = await Lock.deploy(); // 24h unlock

  await lock.waitForDeployment();

  console.log(`ImmutablePoem deployed to: ${await lock.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
