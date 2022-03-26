const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "NeiTheAdventurerTurtleLMTD";
const description = "To rescue Turtleland, this turtle is the only one with the foresight required. To show your support for our hero's efforts to preserve our environment, culture, and anything else you are able to discern with your own keen senses, consider purchasing, minting, or otherwise disseminating his narrative. Let's learn from each other. I have faith in his abilities. Aditional 9500 itens to be minted in our website.";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 500,
    layersOrder: [
      { name: "Sky" },
      { name: "Foreground" },
      { name: "Pure Backgrouns" },
      { name: "Ground" },
      { name: "Right Trees" },
      { name: "Left Trees" },
      { name: "Shadow" },
      { name: "Right Front Leg" },
      { name: "Left Front Leg" },
      { name: "Left Back Leg" },
      { name: "Right Back Leg" },
      { name: "Complete Hull" },
      { name: "T1" },
      { name: "T2" },
      { name: "T3" },
      { name: "T4" },
      { name: "T5" },
      { name: "T6" },
      { name: "T7" },
      { name: "T8" },
      { name: "Tail" },
      { name: "Lower Back" },
      { name: "Head" },
      { name: "Nails" },
      { name: "Eyes" },
      { name: "Eyes Emotion" },
      { name: "Mouth" },
      { name: "Hats" },
      { name: "Garden" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://www.origincreationagr.xyz", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info
// ** REQUIRED **
const AUTH = "fa987ff4-96ea-4036-824d-9d785957cfc0";
const LIMIT = 2; // Your API key rate limit
const CONTRACT_NAME = 'NeiTheAdventurerTurtleLMTTD';
const CONTRACT_SYMBOL = 'NTA';
const CONTRACT_TYPE = 'erc721';
const MINT_TO_ADDRESS = '0x9F221d9Ca06cB8e8F1B88689ecfe462579fFA2D8';
const CHAIN = 'Polygon';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x9F221d9Ca06cB8e8F1B88689ecfe462579fFA2D8"; // Address that will receive the royalty
// ** OPTIONAL **
let CONTRACT_ADDRESS = "0x86165E08444BeAe6e2052e452F2f82493a936e4F"; // If you want to manually include it
// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = false; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = "Unknown"; // Replace with what you want the generic titles to say.
const GENERIC_DESCRIPTION = "Unknown"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = [
  "https://ipfs.io/ipfs/QmUf9tDbkqnfHkQaMdFWSGAeXwVXWA61pFED7ypx4hcsfh",
]; // Replace with your generic image(s). If multiple, separate with a comma.
const REVEAL_PROMPT = true; // Set to false if you want to disable the prompt to confirm each reveal.
const INTERVAL = 900000; // Milliseconds. This is the interval for it to check for sales and reveal the NFT. 900000 = 15 minutes.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.origincreationagr.xyz",
  creators: [
    {
      address: "0x9F221d9Ca06cB8e8F1B88689ecfe462579fFA2D8",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  MINT_TO_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  INTERVAL,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  CONTRACT_TYPE,
  REVEAL_PROMPT,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
};
