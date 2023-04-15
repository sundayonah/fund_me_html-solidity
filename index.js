import { ethers } from "./ethers-5.1.esm.min"
import { abi, contractAddress } from "./constants"

const connectButton = document.getElementById("connectButton")
const withdrawButton = document.getElementById("withdrawButton")
const fundButton = document.getElementById("fundButton")
const balanceButton = document.getElementById("balanceButton")
connectButton.onclick = Connect
fundButton.onclick = Fund
// withdrawButton.onclick = withdraw
// balanceButton.onclick = getBalance

async function Connect() {
    if (typeof window.ethereum !== "undefined") {
        try {
            await ethereum.request({ method: "eth_requestAccounts" })
        } catch (error) {
            console.log(error)
        }
        connectButton.innerHTML = "Connected"
        const accounts = await ethereum.request({ method: "eth_accounts" })
        console.log(accounts)
    } else {
        connectButton.innerHTML = "Please install MetaMask"
    }
}

async function Fund() {
    const ethAmount = "222"
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.WebSocketProvider(window.ethereum)
        const signer = provider.getSigner()
        contract = new ethers.Contract(contractAddress, abi, signer)
        const transactionRequest = await contract.FundMe(ethAmount)
        console.log(transactionRequest, "transaction")
    }
}
