## Creating a Recovery Canister

A **recovery canister** is an independent canister responsible for verifying a user's identity or credentials during the recovery process. Examples of recovery methods include email verification, Google account verification, or Aadhaar verification.

You can create custom recovery canisters that accept arbitrary inputs, validate them, and return a `true` or `false` result.

### Example Recovery Canister

Here’s an example of a recovery canister that verifies a user's Aadhaar credentials using a zero-knowledge (ZK) proof:

```rust
#[ic_cdk::update]
async fn verify(args: String, storage_index: u64) -> Result<bool, String> {
    // Parse the input arguments into AadhaarArgs struct
    
    // Return the result of the verification (true/false)
    Ok(true)
}
```

This is an example of a simple recovery canister which returns true all the time . Now inside this you can call arbitrary code . For example , the code below verifies a zk proof 



```rust
#[ic_cdk::update]
async fn verify(args: String, storage_index: u64) -> Result<bool, String> {
    // Parse the input arguments into AadhaarArgs struct
    let aadhaar_args: AadhaarArgs = serde_json::from_str(&args).unwrap();
    
    // Perform Aadhaar verification using a ZK proof
    let result = zk::AadhaarVerifier::verify(&aadhaar_args.json_proof, &aadhaar_args.public_input_json);
    
    // Return the result of the verification (true/false)
    Ok(result)
}
```
[Full Source code for zk verifier recovery canister](https://github.com/hush-protocol/core-webapp/tree/main/src/backend/recovery/aadhaar_digital_zk_verifier)

If you need the to pass the username from storage canister , you can pass it in the args. While the storage index represents where the secrets will be stored in the storage canister


### How to read and write data
Recovery canisters are meant to be stateless . But if the developer wants to store values ( like user emails or signature), you can call the storage canister in the recovery canister to store values. To do this you can use the following function in storage canister.

```
#[query]
async fn read_recovery_storage_canister_bytes() -> Option<Vec<u8>> {}
```
When you call the function ```read_recovery_storage_canister_bytes``` in recovery canister , it returns the storage bytes related to the recovery canister. If there is not storage it will return empty bytes


```
#[update]
async fn write_recovery_storage_canister_bytes(bytes: Vec<u8>) -> Result<(), String>{}
```

### Example of reading and writing data in recovery canister

You can check out this recovery canister, which needs to store users email on secret registration and reads it when user wants to verify. 

[DKIM Email Verifier](https://github.com/hush-protocol/core-webapp/tree/main/src/backend/recovery/dkim_email_verifier)