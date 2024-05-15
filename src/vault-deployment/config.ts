import { SmartVaultSpecificationStruct } from '../../abi/SmartVaultFactoryHpf';

type Config = {
    clientIndex: number; // index of client in 'clients' eg. 0 for MAGPIE
    ownerIndex: number;  // index in safeOwners, eg. 0 for the first owner
};

export const config: Config = {
    clientIndex: 3,
    ownerIndex: 0
} as const;

type Client = {
    name: string;
    env: string;
    safeAddress: string;
    safeOwners: string[];
    vaultSpecs: SmartVaultSpecificationStruct[];
};

export const clients: Client[] = [
    {
        name: "MAGPIE",
        env: "mainnet-prod",
        safeAddress: "",
        safeOwners: [],
        vaultSpecs: [
            {
                smartVaultName: 'MAGPIE - USDC',
                svtSymbol: 'DRIP-FLY-USDC',
                baseURI: 'assets.dripfi.io/drip-fly-usdc/{id}.json',
                assetGroupId: 2,
                strategies: [
                    '0xa51C0a9F2d688c8943F029feC00a3c9193aAdf81', // Morpho Aave USDC
                    '0xb4a7fb51D06760B5F622643B7276c003418732bD', // gearbox-v3-usdc
                ],
                strategyAllocation: 0,
                riskTolerance: 10,
                riskProvider: '0xC216aD6280f4fa92A5159EF383a1206D432481c8', // Spool Labs
                allocationProvider: '0xcebF2117a483EFf141c25bf8d365B9B81Af9112F', // ExponentialAllocationProvider
                actions: [],
                actionRequestTypes: [],
                guards: [],
                guardRequestTypes: [],
                managementFeePct: 0,
                depositFeePct: 0,
                performanceFeePct: 9000, // 90%
                allowRedeemFor: true,
            },
            {
                smartVaultName: 'MAGPIE - ETH',
                svtSymbol: 'DRIP-FLY-WETH',
                baseURI: 'assets.dripfi.io/drip-fly-weth/{id}.json',
                assetGroupId: 1,
                strategies: [
                    '0xD92B65d2321076FBAc23FCfC9A9Fd5Ed2E98B758', // gearbox-v3-weth
                ],
                strategyAllocation: 10000,
                riskTolerance: 0,
                riskProvider: '0x0000000000000000000000000000000000000000',
                allocationProvider: '0x0000000000000000000000000000000000000000',
                actions: [],
                actionRequestTypes: [],
                guards: [],
                guardRequestTypes: [],
                managementFeePct: 0,
                depositFeePct: 0,
                performanceFeePct: 9000, // 90%
                allowRedeemFor: true,
            },
        ]
    },
    {
        name: "NUKLAI",
        env: "mainnet-prod",
        safeAddress: "",
        safeOwners: [],
        vaultSpecs: [
            {
                smartVaultName: 'NUKLAI - USDC',
                svtSymbol: 'DRIP-NAI-USDC',
                baseURI: 'assets.dripfi.io/drip-nai-usdc/{id}.json',
                assetGroupId: 2,
                strategies: [
                    '0xa51C0a9F2d688c8943F029feC00a3c9193aAdf81', // Morpho Aave USDC
                    '0xb4a7fb51D06760B5F622643B7276c003418732bD', // gearbox-v3-usdc
                ],
                strategyAllocation: 0,
                riskTolerance: 10,
                riskProvider: '0xC216aD6280f4fa92A5159EF383a1206D432481c8', // Spool Labs
                allocationProvider: '0xcebF2117a483EFf141c25bf8d365B9B81Af9112F', // ExponentialAllocationProvider
                actions: [],
                actionRequestTypes: [],
                guards: [],
                guardRequestTypes: [],
                managementFeePct: 0,
                depositFeePct: 0,
                performanceFeePct: 9000, // 90%
                allowRedeemFor: true,
            },
            {
                smartVaultName: 'NUKLAI - ETH',
                svtSymbol: 'DRIP-NAI-WETH',
                baseURI: 'assets.dripfi.io/drip-nai-weth/{id}.json',
                assetGroupId: 1,
                strategies: [
                    '0xD92B65d2321076FBAc23FCfC9A9Fd5Ed2E98B758', // gearbox-v3-weth
                ],
                strategyAllocation: 10000,
                riskTolerance: 0,
                riskProvider: '0x0000000000000000000000000000000000000000',
                allocationProvider: '0x0000000000000000000000000000000000000000',
                actions: [],
                actionRequestTypes: [],
                guards: [],
                guardRequestTypes: [],
                managementFeePct: 0,
                depositFeePct: 0,
                performanceFeePct: 9000, // 90%
                allowRedeemFor: true,
            },
        ]
    },
    {
        name: "KASU",
        env: "mainnet-prod",
        safeAddress: "",
        safeOwners: [],
        vaultSpecs: [
            {
                smartVaultName: 'KASU - USDC',
                svtSymbol: 'DRIP-KSU-USDC',
                baseURI: 'assets.dripfi.io/drip-ksu-usdc/{id}.json',
                assetGroupId: 2,
                strategies: [
                    '0xc61E829DF3fbD6Cf5B2f5881F190C69eE48d20DF', // yearn-v2-usdc
                    '0xb4a7fb51D06760B5F622643B7276c003418732bD', // gearbox-v3-usdc
                ],
                strategyAllocation: 0,
                riskTolerance: 10,
                riskProvider: '0xC216aD6280f4fa92A5159EF383a1206D432481c8', // Spool Labs
                allocationProvider: '0xcebF2117a483EFf141c25bf8d365B9B81Af9112F', // ExponentialAllocationProvider
                actions: [],
                actionRequestTypes: [],
                guards: [],
                guardRequestTypes: [],
                managementFeePct: 0,
                depositFeePct: 0,
                performanceFeePct: 9000, // 90%
                allowRedeemFor: true,
            },
            {
                smartVaultName: 'KASU - ETH',
                svtSymbol: 'DRIP-KSU-ETH',
                baseURI: 'assets.dripfi.io/drip-ksu-weth/{id}.json',
                assetGroupId: 1,
                strategies: [
                    '0xD92B65d2321076FBAc23FCfC9A9Fd5Ed2E98B758', // gearbox-v3-weth
                ],
                strategyAllocation: 10000,
                riskTolerance: 0,
                riskProvider: '0x0000000000000000000000000000000000000000',
                allocationProvider: '0x0000000000000000000000000000000000000000',
                actions: [],
                actionRequestTypes: [],
                guards: [],
                guardRequestTypes: [],
                managementFeePct: 0,
                depositFeePct: 0,
                performanceFeePct: 9000, // 90%
                allowRedeemFor: true,
            },
        ]
    },
    {
        name: "AUKI",
        env: "mainnet-prod",
        safeAddress: "0x48f9ECeA7548CD7f0cCF0f925A99CB84251FC9e8",
        safeOwners: [
            "0x133359C8E503Ff6823C33443CE87530C99Ac038A",
            "0x225F31863b892dd747D06c1F46DcebFa73907870",
            "0xF40A5daC47f43A40ae005911A2392Ca5d3782b2e",
            "0xE24f1549373AcED8A3c0a18b63D8d073d446AD26",
            "0x14c9EbaE801D47847D022F138d98Bf58b1ba7cdb",
            "0x42aD2E416f10c51971f792060f56C2aB2e5671e9"
        ],
        vaultSpecs: [
            {
                smartVaultName: 'AUKI - USDC',
                svtSymbol: 'DRIP-AUKI-USDC',
                baseURI: 'assets.dripfi.io/drip-auki-usdc/{id}.json',
                assetGroupId: 2,
                strategies: [
                    '0xb4a7fb51D06760B5F622643B7276c003418732bD', // gearbox-v3-usdc
                    '0xa51C0a9F2d688c8943F029feC00a3c9193aAdf81', // morpho-aave-v2-usdc
                    '0xc61E829DF3fbD6Cf5B2f5881F190C69eE48d20DF', // yearn-v2-usdc
                ],
                strategyAllocation: 0,
                riskTolerance: 10,
                riskProvider: '0xC216aD6280f4fa92A5159EF383a1206D432481c8', // Spool Labs
                allocationProvider: '0xcebF2117a483EFf141c25bf8d365B9B81Af9112F', // ExponentialAllocationProvider
                actions: [],
                actionRequestTypes: [],
                guards: [],
                guardRequestTypes: [],
                managementFeePct: 0,
                depositFeePct: 0,
                performanceFeePct: 9000, // 90%
                allowRedeemFor: true,
            },
            {
                smartVaultName: 'AUKI - ETH',
                svtSymbol: 'DRIP-AUKI-ETH',
                baseURI: 'assets.dripfi.io/drip-auki-eth/{id}.json',
                assetGroupId: 1,
                strategies: [
                    '0xD92B65d2321076FBAc23FCfC9A9Fd5Ed2E98B758', // gearbox-v3-weth
                    '0x39E5c2a796082eB553c1b0656e09E49583D12CB8', // oeth-holding
                ],
                strategyAllocation: 0,
                riskTolerance: 10,
                riskProvider: '0xC216aD6280f4fa92A5159EF383a1206D432481c8', // Spool Labs
                allocationProvider: '0xcebF2117a483EFf141c25bf8d365B9B81Af9112F', // ExponentialAllocationProvider
                actions: [],
                actionRequestTypes: [],
                guards: [],
                guardRequestTypes: [],
                managementFeePct: 0,
                depositFeePct: 0,
                performanceFeePct: 9000, // 90%
                allowRedeemFor: true,
            },
            {
                smartVaultName: 'AUKI - DAI',
                svtSymbol: 'DRIP-AUKI-DAI',
                baseURI: 'assets.dripfi.io/drip-auki-dai/{id}.json',
                assetGroupId: 4,
                strategies: [
                    '0xfE6D982a773F4251dA4Ba04fc8fE7F2717413599', // morpho-aave-v2-dai
                    '0x013022c7ca735eF6ba55cd3eaccB4Ebb3be484e9', // compound-v2-dai
                ],
                strategyAllocation: 0,
                riskTolerance: 10,
                riskProvider: '0xC216aD6280f4fa92A5159EF383a1206D432481c8', // Spool Labs
                allocationProvider: '0xcebF2117a483EFf141c25bf8d365B9B81Af9112F', // ExponentialAllocationProvider
                actions: [],
                actionRequestTypes: [],
                guards: [],
                guardRequestTypes: [],
                managementFeePct: 0,
                depositFeePct: 0,
                performanceFeePct: 9000, // 90%
                allowRedeemFor: true,
            },
        ]
    }
];
