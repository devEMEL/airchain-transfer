// node packages/hardhat/transfer/transfer.ts
const { ethers } = require("ethers");

const main = async () => {

    const ADDRESS = "address-you-are-sending-to";
    const PRIVATE_KEY = "metamask-private-key";

    const providerRPC = {
        emelNode: {
            name: "EmelNode",
            rpc: "http://IP:8545", 
            chainId: 1234,
        },
    };
    // 3. Create ethers provider
    const provider = new ethers.JsonRpcProvider(providerRPC.emelNode.rpc, {
        chainId: providerRPC.emelNode.chainId,
        name: providerRPC.emelNode.name,
    });
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);


    // 1. Create tx object
    const tx = {
        to: ADDRESS,
        value: ethers.parseEther("0.0001"),
    };

    // 2. Sign and send tx - wait for receipt
    const createReceipt = await wallet.sendTransaction(tx);
    await createReceipt.wait();
    console.log("Transfer successful at: ", createReceipt.hash);


}

main()
    .then()
    .catch()