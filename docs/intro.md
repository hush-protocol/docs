---
sidebar_position: 1
---

# Tutorial Intro

Let's understand how Hush protocol works 


## Hush Protocol: Storage and Recovery Canisters Documentation

This documentation provides a detailed overview of the Hush protocol's **storage canister** and **recovery canister** implementation in Rust. It explains how to create, manage, and verify user passphrase storage and how recovery canisters can be used to unlock access to the encrypted data stored in the storage canister.

### Overview

The Hush protocol is designed to securely store encrypted passwords (or passphrases) using a decentralized approach. It separates the responsibilities into two primary components:

1. **Storage Canister**: Responsible for storing encrypted passwords, managing access control, and releasing the encryption or decryption keys upon successful verification by recovery canisters.
   
2. **Recovery Canister**: Provides mechanisms to verify the identity or recovery process using different methods (e.g., email, Google, Aadhaar) and responds with `true` or `false` based on verification success. Only when all linked recovery canisters return `true` will the storage canister release the encryption keys.

## How Storage Canisters Work

A **storage canister** holds encrypted user data (passwords, passphrases) and controls access to that data based on the verification results of recovery canisters. The main function of the storage canister is to securely store passwords and verify recovery processes.

### Storage Canister Key Components

1. **State Management**: The storage canister keeps a record of user passwords and associated recovery canisters. It ensures that only registered recovery canisters can request verification and release the keys.
   
2. **Recovery Canisters**: Each storage canister can have multiple recovery canisters associated with it. These are used to verify the user's recovery process (e.g., email recovery, Google verification, Aadhaar verification).

3. **Encryption**: The storage canister is responsible for managing the encryption and decryption keys. These keys are only released when the recovery process has been verified.

### Rust Code Explanation for Storage Canister

The key function in the storage canister for verifying the secret and checking with the recovery canisters is `verify_secret`. Here's how it works:

```rust
#[update]
async fn verify_secret(
    secret_storage_id: u64,
    encryption_public_key: Vec<u8>,
    recovery_verify_inputs: Vec<String>
) -> Result<String, String> {
    
    /// Call all recovery canisters and see if returns true of false and depending on that return key

    Ok(key)
}
```

Developers can't create their own "storage canister" what they can make their own is recovery canister.

### Key Takeaways for verify function in storage canister:

1. **Input Verification**: The function first ensures that the number of recovery canisters matches the number of provided inputs.

2. **Recovery Canister Check**: For each recovery canister, the function checks if it is registered with the storage canister. If not, it returns an error.

3. **Recovery Verification**: It calls the `verify` function of each recovery canister asynchronously. If any canister returns `false`, the recovery process fails.

4. **Decryption Key Release**: If all recovery canisters return `true`, the storage canister fetches and returns the encryption key needed to decrypt the user's stored data.

---
