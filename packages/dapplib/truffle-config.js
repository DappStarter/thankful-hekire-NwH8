require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remember arrow hidden entire off gasp'; 
let testAccounts = [
"0xe1e93ae5b76e868cb55e2b96569fa410c4df1b4d5b7b3534a5e2f459d345e76d",
"0x50292ec91be7ecc059313afac0c00c76f677503a916eaced3b685b1af92b0969",
"0x64c3260ab554fb90fc451f37d0afedfaf1a6ca53c9afcfbd514f1eb587b2f229",
"0xce1f7e2728b7c1cb19262fe0a86764319be8cc2f29e812ae9583f07ab1e2e942",
"0xe192f77cadabf2013bcb6fe18dd2c463678caf2e4dda94a33a3eb9a34579aa86",
"0xb89210e5d499b6b1833c2fc3083030dbc65c6a2a3111f8e662d1d51bd839fc7e",
"0x18b7cbb41b27aafd3f98ded8f4b15fceab39b3e5a1e50e13f6e645c86b63c71d",
"0xfe619b64d59f62141cc49ff1158cd97deda7b9f2f9b4eec35c36aa2ceb3556b8",
"0xd7da14d885efad0a785797f5776a9f9e92539b4911c24efbdd1cf06411995258",
"0xc0d59544325bc9ef447a12bbd9cb74a81d42d00889148e032e6af5cb8e648540"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

