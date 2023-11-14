import { config } from "dotenv";
import "@nomicfoundation/hardhat-toolbox";

config();

const GOERLI_API_KEY = "3hFqVjWUTS9dFpUyz-HteKPKD_ixUJnw";
const MUMBAI_API_KEY = "ocC1aK6hgE9bJFkaoeoDaQqWnAIZjixO";
const SEPOL_API_KEY = "Jt62jFDCQg9BOxFDkEthMgfaTw-0w3Wk";
const MAINNET_API_KEY = "uhA_z0k72AG-CU81hfuwozXD_LIyzKQm";

export default {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: "none",
      },
    },
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${GOERLI_API_KEY}`,
      accounts: [`0x` + process.env.PRIVATE_KEY],
      chainId: 5,
    },
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${MUMBAI_API_KEY}`,
      accounts: [`0x` + process.env.PRIVATE_KEY],
      chainId: 137,
    },
    mumbai: {
      url: `https://polygon-mumbai-bor.publicnode.com`,
      accounts: [`0x` + process.env.PRIVATE_KEY],
      chainId: 80001,
    },
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${MAINNET_API_KEY}`,
      accounts: [`0x` + process.env.PRIVATE_KEY],
      chainId: 1,
    },
    sepol: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${SEPOL_API_KEY}`,
      accounts: [`0x` + process.env.PRIVATE_KEY],
      chainId: 11155111,
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: "YN36YV2RKVBJMINJM7RRWVD3XTHSW2MYDB",
    },
  },
};