# Gnosis Safe (Multisig) Generic operations for Spool V2

## Installation

`npm install`

## Vault Deployment Module: Instructions

- Create client file:
    - `cd src/vault-deployment`
    - `cp client.ts.template client.ts`

- modify `client.ts` with your client and vault specification

- execute the batch generation: `ts-node src/vault-deployment/main.ts`

- Copy the output JSON, go to the Transaction Builder UI for your Gnosis Safe

- Upload the batch and simulate

- Upon successful simulation, initiate the transaction.


