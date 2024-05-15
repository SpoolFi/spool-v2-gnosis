import path from 'path';

export function readEnvData(envName: string): {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    contracts: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constants: any;
} {
    const dataFolderPath = path.join(__dirname, '..', 'data');
    const contractsFilePath = path.join(
        dataFolderPath,
        `${envName}.contracts.json`,
    );
    const constantsFilePath = path.join(
        dataFolderPath,
        `${envName}.constants.json`,
    );

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const contracts = require(contractsFilePath);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const constants = require(constantsFilePath);

    return {
        contracts,
        constants,
    };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getAssetGroupRegistryAddress(contracts: any) {
    return getStringByPath(contracts, ['AssetGroupRegistry', 'proxy']);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getDepositManagerAddress(contracts: any) {
    return getStringByPath(contracts, ['DepositManager', 'proxy']);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getRiskManagerAddress(contracts: any) {
    return getStringByPath(contracts, ['RiskManager', 'proxy']);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getSmartVaultFactoryHpfAddress(contracts: any) {
    return getStringByPath(contracts, ['SmartVaultFactoryHpf']);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getSmartVaultManagerAddress(contracts: any) {
    return getStringByPath(contracts, ['SmartVaultManager', 'proxy']);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getSpoolAccessControlAddress(contracts: any) {
    return getStringByPath(contracts, ['SpoolAccessControl', 'proxy']);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getSpoolLensAddress(contracts: any) {
    return getStringByPath(contracts, ['SpoolLens', 'proxy']);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getStrategyRegistryAddress(contracts: any) {
    return getStringByPath(contracts, ['StrategyRegistry', 'proxy']);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getUsdPriceFeedManagerAddress(contracts: any): string {
    return getStringByPath(contracts, ['UsdPriceFeedManager', 'proxy']);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getGhostStrategyAddress(contracts: any): string {
    return getStringByPath(contracts, ['GhostStrategy', 'proxy']);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getSwapperAddress(contracts: any): string {
    return getStringByPath(contracts, ['Swapper', 'proxy']);
}

export function getStringByPath(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    contractsOrConstants: any,
    path: string[],
): string {
    let obj = contractsOrConstants;
    for (const key of path) {
        if (obj[key] === undefined) {
            throw new Error(
                `Value for ${path.join('.')} not found in contracts file.`,
            );
        }
        obj = obj[key];
    }

    if (typeof obj !== 'string') {
        throw new Error(`Value for ${path.join('.')} is not a string.`);
    }

    return obj;
}
