"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[976],{619:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=s(4848),t=s(8453);const o={sidebar_position:1},i="Tutorial Intro",a={id:"intro",title:"Tutorial Intro",description:"Let's understand how Hush protocol works",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial - Recovery Canister",permalink:"/docs/docs/category/tutorial---recovery-canister"}},c={},d=[{value:"Hush Protocol: Storage and Recovery Canisters Documentation",id:"hush-protocol-storage-and-recovery-canisters-documentation",level:2},{value:"Overview",id:"overview",level:3},{value:"How Storage Canisters Work",id:"how-storage-canisters-work",level:2},{value:"Storage Canister Key Components",id:"storage-canister-key-components",level:3},{value:"Rust Code Explanation for Storage Canister",id:"rust-code-explanation-for-storage-canister",level:3},{value:"Key Takeaways for verify function in storage canister:",id:"key-takeaways-for-verify-function-in-storage-canister",level:3}];function l(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"tutorial-intro",children:"Tutorial Intro"})}),"\n",(0,n.jsx)(r.p,{children:"Let's understand how Hush protocol works"}),"\n",(0,n.jsx)(r.h2,{id:"hush-protocol-storage-and-recovery-canisters-documentation",children:"Hush Protocol: Storage and Recovery Canisters Documentation"}),"\n",(0,n.jsxs)(r.p,{children:["This documentation provides a detailed overview of the Hush protocol's ",(0,n.jsx)(r.strong,{children:"storage canister"})," and ",(0,n.jsx)(r.strong,{children:"recovery canister"})," implementation in Rust. It explains how to create, manage, and verify user passphrase storage and how recovery canisters can be used to unlock access to the encrypted data stored in the storage canister."]}),"\n",(0,n.jsx)(r.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(r.p,{children:"The Hush protocol is designed to securely store encrypted passwords (or passphrases) using a decentralized approach. It separates the responsibilities into two primary components:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Storage Canister"}),": Responsible for storing encrypted passwords, managing access control, and releasing the encryption or decryption keys upon successful verification by recovery canisters."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Recovery Canister"}),": Provides mechanisms to verify the identity or recovery process using different methods (e.g., email, Google, Aadhaar) and responds with ",(0,n.jsx)(r.code,{children:"true"})," or ",(0,n.jsx)(r.code,{children:"false"})," based on verification success. Only when all linked recovery canisters return ",(0,n.jsx)(r.code,{children:"true"})," will the storage canister release the encryption keys."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"how-storage-canisters-work",children:"How Storage Canisters Work"}),"\n",(0,n.jsxs)(r.p,{children:["A ",(0,n.jsx)(r.strong,{children:"storage canister"})," holds encrypted user data (passwords, passphrases) and controls access to that data based on the verification results of recovery canisters. The main function of the storage canister is to securely store passwords and verify recovery processes."]}),"\n",(0,n.jsx)(r.h3,{id:"storage-canister-key-components",children:"Storage Canister Key Components"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"State Management"}),": The storage canister keeps a record of user passwords and associated recovery canisters. It ensures that only registered recovery canisters can request verification and release the keys."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Recovery Canisters"}),": Each storage canister can have multiple recovery canisters associated with it. These are used to verify the user's recovery process (e.g., email recovery, Google verification, Aadhaar verification)."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Encryption"}),": The storage canister is responsible for managing the encryption and decryption keys. These keys are only released when the recovery process has been verified."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"rust-code-explanation-for-storage-canister",children:"Rust Code Explanation for Storage Canister"}),"\n",(0,n.jsxs)(r.p,{children:["The key function in the storage canister for verifying the secret and checking with the recovery canisters is ",(0,n.jsx)(r.code,{children:"verify_secret"}),". Here's how it works:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-rust",children:"#[update]\nasync fn verify_secret(\n    secret_storage_id: u64,\n    encryption_public_key: Vec<u8>,\n    recovery_verify_inputs: Vec<String>\n) -> Result<String, String> {\n    \n    /// Call all recovery canisters and see if returns true of false and depending on that return key\n\n    Ok(key)\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:'Developers can\'t create their own "storage canister" what they can make their own is recovery canister.'}),"\n",(0,n.jsx)(r.h3,{id:"key-takeaways-for-verify-function-in-storage-canister",children:"Key Takeaways for verify function in storage canister:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Input Verification"}),": The function first ensures that the number of recovery canisters matches the number of provided inputs."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Recovery Canister Check"}),": For each recovery canister, the function checks if it is registered with the storage canister. If not, it returns an error."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Recovery Verification"}),": It calls the ",(0,n.jsx)(r.code,{children:"verify"})," function of each recovery canister asynchronously. If any canister returns ",(0,n.jsx)(r.code,{children:"false"}),", the recovery process fails."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Decryption Key Release"}),": If all recovery canisters return ",(0,n.jsx)(r.code,{children:"true"}),", the storage canister fetches and returns the encryption key needed to decrypt the user's stored data."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.hr,{})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>a});var n=s(6540);const t={},o=n.createContext(t);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);