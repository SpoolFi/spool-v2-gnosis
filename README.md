# Gnosis Safe (Multisig) Generic operations for Spool V2

## Installation

`npm install`

## Vault Deployment Module: Instructions

- modify `config` in `src/vault-deployment/config.ts` with index of your client, and index of the signer that will be initiating the transactions. If your client doesn't exist (or is missing `safeAddress`/`safeSigners` data), update/extend the config.

- execute the batch generation: `ts-node src/vault-deployment/main.ts`

- Copy the output JSON, go to the Transaction Builder UI for your Gnosis Safe

- Upload the batch and simulate

- Upon successful simulation, initiate the transaction.


