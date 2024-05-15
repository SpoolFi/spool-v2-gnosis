import {ethers} from 'ethers';
import SmartVaultFactoryHpf from '../../abi/SmartVaultFactoryHpf.json';
import {
    getSmartVaultFactoryHpfAddress,
    readEnvData,
} from '../../utils/read-env-data';

import { config, clients } from "./config";

async function main() {
    // setup
    const client = clients[config.clientIndex];
    const { contracts } = readEnvData(client.env);

    // batch creation
    const factoryAddress = getSmartVaultFactoryHpfAddress(contracts);
	const factoryInterface = new ethers.utils.Interface(SmartVaultFactoryHpf.abi);

    const txBatch = {
        version: '1.0',
        chainId: '1',
        createdAt: Math.floor(new Date().getTime()),
        meta: {
            name: `${client.name} TX Batch`,
            description: `Deployment of smart vaults for ${client.name}`,
            txBuilderVersion: '1.16.3',
            createdFromSafeAddress: client.safeAddress,
            createdFromOwnerAddress: client.safeOwners[config.ownerIndex],
        },
        transactions: client.vaultSpecs.map((spec) => ({
            to: factoryAddress,
            value: '0',
            data: factoryInterface.encodeFunctionData('deploySmartVault', [
                spec,
            ]),
            contractMethod: null,
            contractInputsValues: null,
        })),
    };

    console.log(JSON.stringify(txBatch, null, 4));
}

if (require.main === module) {
    (async () => {
        await main();

        process.exit(0);
    })();
}
