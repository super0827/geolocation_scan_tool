import calculateDistance from "../utils/getDistance.js";
import User from "../models/user.js";
import Web3 from "web3";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.GEO_SEPOLIA_RPC);

const web3 = new Web3(process.env.GEO_SEPOLIA_RPC);
const account = web3.eth.accounts.wallet.add(process.env.GEO_PRIVATE_KEY);

const address = "0x407585c982D93cce34b60FC93A13d8A758A588be";

const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const rewardTokenContract = new web3.eth.Contract(abi, address);

export default async function userController(req, res, next) {
  let peopleLocations = [];

  try {
    const newLocation = req.body.location;
    const userWallet = req.body.address;

    console.log("------------------------>", newLocation, userWallet);
    if (!newLocation || !newLocation.lat || !newLocation.lng) {
      return res.status(400).json({ error: "Invalid location data" });
    }

    await User.find({
      userId: userWallet,
    })
      .exec()
      .then(async (data) => {
        console.log("UserAddr", data);
        if (data.length === 0) {
          try {
            const newUser = new User({
              userId: req.body.address,
              location: req.body.location,
              accuracy: req.body.accuracy,
              profile: req.body.profile,
            });

            await newUser.save();
          } catch (error) {
            console.error(error);
          }
        } else {
          await User.updateOne(
            { userId: userWallet },
            {
              $set: {
                location: req.body.location,
                accuracy: req.body.accuracy,
                profile: req.body.profile,
              },
            }
          ).exec();
        }
      });

    await User.find({})
      .exec()
      .then((data) => {
        peopleLocations = data;
        console.log("peopleLocations", peopleLocations);
      });

    let count = 0;
    const peopleInDistance = [];
    // peopleInDistance.push(newLocation);
    for (const item of peopleLocations) {
      const distance = calculateDistance(
        parseFloat(newLocation.lat),
        parseFloat(newLocation.lng),
        parseFloat(item.location.lat),
        parseFloat(item.location.lng)
      );
      console.log("distance", distance);
      if (distance <= 402) {
        peopleInDistance.push({
          lat: item.location.lat,
          lng: item.location.lng,
          profile: item.profile,
        });
        count++;
      }
    }

    await rewardToken(count, req.body.address);

    return res.json(peopleInDistance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
  next();
}

async function rewardToken(count, to) {
  //address to send the token
  //   const to = "0x46E2506600Ff111bdbDB2E3C98c6B091121602A3";

  //value to transfer (1 with 18 decimals)
  console.log(count, to);
  let value = 0;
  if (count < 5) {
    value = web3.utils.toWei("5", "ether");
  } else if (count < 10) {
    value = web3.utils.toWei("25", "ether");
  } else if (count < 20) {
    value = web3.utils.toWei("50", "ether");
  } else if (count < 50) {
    value = web3.utils.toWei("100", "ether");
  } else {
    value = web3.utils.toWei("200", "ether");
  }

  if (to === null || to === undefined) {
    console.log("wallet error");
    return;
  } else {
    const txReceipt = await rewardTokenContract.methods
      .transfer(to, value)
      .send({ from: account[0].address });

    console.log("Tx hash:", txReceipt.transactionHash);
  }

  //send the transaction => return the Tx receipt
  // ↳ Tx hash: 0x14273c2b5781cc8f1687906c68bfc93482c603026d01b4fd37a04adb6217ad43
}
