require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remain puppy grace crew food genius'; 
let testAccounts = [
"0xc8cc3cbea103e1dc19a16a5919f77c26ba627dad5d5d7df9ea4527761edafa1b",
"0xdbefd148ca5243c589c004168b2fbdbbd9b3d6aa9d664d92c3770aadebdcfb34",
"0x20b25c43fefcce9a2d9c8a2b8873b2c19166fb7d72e4dc649668aa3cb1217002",
"0x4812cd3233917f4514dd0231f7992969011068d67234dedcfaa732d7bf5fc670",
"0x187d44784d7b189d436097bcee1f44f7788b44daf7b80996b03c4c03bfbaba64",
"0x1b4093dac669347b1551fc1d11db7313c0bc432e56a08497b54216e18379928e",
"0xaf718fbe769894e7f8f8e97573721331fd4d944e305a14ced1b27e6570516d7e",
"0x564d826553ba07dae5b8398598324519d7bf95b62911280e10a9d896f469238d",
"0x2b888e10ce0317fb71418fcb751f5bc0f893fc15d07932250d462a812ade57ae",
"0xeb54e99b3348e0a8943b2990f21f7dc4cb21e5b9ea6cc5c758d1f89f23c65fde"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


