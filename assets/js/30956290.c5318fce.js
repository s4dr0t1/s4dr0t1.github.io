"use strict";(self.webpackChunkrohitdhill_me=self.webpackChunkrohitdhill_me||[]).push([[770],{4137:function(e,t,i){i.d(t,{Zo:function(){return h},kt:function(){return p}});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(i),p=n,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return i?a.createElement(f,o(o({ref:t},h),{},{components:i})):a.createElement(f,o({ref:t},h))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=i[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},5469:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return h},toc:function(){return d},default:function(){return p}});var a=i(7462),n=i(3366),r=(i(7294),i(4137)),o=["components"],s={title:"Digital Certificates",id:"digital_certificates",pagination_label:"Learn more about digital certificates",sidebar_label:"Digital certificates"},l=void 0,c={unversionedId:"cryptography/Applications/digital_certificates",id:"cryptography/Applications/digital_certificates",title:"Digital Certificates",description:"Digital Signatures: What they are, how do they work and why are they important.",source:"@site/docs/cryptography/3. Applications/2. Digital Certificates.md",sourceDirName:"cryptography/3. Applications",slug:"/cryptography/Applications/digital_certificates",permalink:"/docs/cryptography/Applications/digital_certificates",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Digital Certificates",id:"digital_certificates",pagination_label:"Learn more about digital certificates",sidebar_label:"Digital certificates"},sidebar:"tutorialSidebar",previous:{title:"Learn more about digital signatures",permalink:"/docs/cryptography/Applications/digital_signature"},next:{title:"Learn more about SSL and TLS",permalink:"/docs/cryptography/Applications/ssl"}},h={},d=[{value:"What is what?",id:"what-is-what",level:2},{value:"Basics",id:"basics",level:3},{value:"X.509 Certificates",id:"x509-certificates",level:3},{value:"How?",id:"how",level:2},{value:"How Are Certificates Requested&amp; Initialized",id:"how-are-certificates-requested-initialized",level:3},{value:"How are Digital Signatures Leveraged?",id:"how-are-digital-signatures-leveraged",level:3},{value:"Verification Of Digital Signatures",id:"verification-of-digital-signatures",level:3},{value:"Certificate Distribution and Storage",id:"certificate-distribution-and-storage",level:3},{value:"Certificate Expiration",id:"certificate-expiration",level:3},{value:"Certificate Revocation",id:"certificate-revocation",level:3}],u={toc:d};function p(e){var t=e.components,s=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Digital Signatures: What they are, how do they work and why are they important.")),(0,r.kt)("h2",{id:"what-is-what"},"What is what?"),(0,r.kt)("h3",{id:"basics"},"Basics"),(0,r.kt)("p",null,"Digital Certificates acts like a credential, unique in nature, and is used to make sure the supposed public key of the person we're encrypting our data with, is of course associated with that person we want to send the data to viz. It attests the binding of an entity to a public key."),(0,r.kt)("p",null,"Making sure that we encrypt with the public key of the intended person is important from a security perspective, otherwise we may end up encrypting our data with a bogus key (unintentionally) and it can be leveraged by an adversary."),(0,r.kt)("p",null,"One of the most common formats of Digital Certificates we see is ",(0,r.kt)("inlineCode",{parentName:"p"},"X.509"),", but there are more out there, such as a PGP certificate."),(0,r.kt)("h3",{id:"x509-certificates"},"X.509 Certificates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Understanding the X.509 format for certificates"),(0,r.kt)("th",{parentName:"tr",align:null},"Supporting graphic"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"It contains a lot of information, such as",(0,r.kt)("li",null,"The version of the X.509 standard used"),(0,r.kt)("li",null,"The serial number of the certificate, which acts as a unique identifier"),(0,r.kt)("li",null,"Information about the entity, such as Name, Email, Organization etc"),(0,r.kt)("li",null,"Validity period stating when the certificate will expire"),(0,r.kt)("li",null,"The Digital Signature, generated by a trusted entity")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{loading:"lazy",alt:"Certificate format",src:i(9475).Z,width:"183",height:"274"}))))),(0,r.kt)("h2",{id:"how"},"How?"),(0,r.kt)("h3",{id:"how-are-certificates-requested-initialized"},"How Are Certificates Requested& Initialized"),(0,r.kt)("p",null,"In this case, Certificate Authority is the ",(0,r.kt)("strong",{parentName:"p"},"trusted entity")," we speak of, or someone designated by the CA. They do the work of issuing, verifying and validating Digital Certificates"),(0,r.kt)("p",null,"To obtain a X.509 certificate, we must request a certificate from a CA, by providing all the requisite information and digitally sign the package with our private key (to imply the ownership of private key). The CA does background checks and information verification to make sure whatever we have mentioned is correct. After all these checks and stuff, we finally get issued a Digital Certificate."),(0,r.kt)("p",null,"Since the CA can't verify and sign certificates for everyone, as there is a big overhead involved when verifying the information provided, there is a generally distributed architecture followed throughout. One or more CAs form a central ring, and issue certificates to entities, and they in turn, can validate and issue certificates inside their organization and the issued child's certificates would derive the trust from the root certificate."),(0,r.kt)("h3",{id:"how-are-digital-signatures-leveraged"},"How are Digital Signatures Leveraged?"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There are mainly three components of a Digital Certificate: The Public Key, The Digital Signature and information (name and stuff)"))),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"How are digital signatures leveraged",src:i(6634).Z,width:"3058",height:"714"})),(0,r.kt)("p",null,"Digital Certificates has a lot of components, one of which is a Digital Signature. It's generated by hashing the public key of the entity, and encrypting it with the private key by an a very trusted person we believe will do its best to verify the identity of the entity, so that we don't have to. "),(0,r.kt)("p",null,"During the verification phase, the concept of Mutual Trust is established: If X is a very trusted entity, and X trusts Y, I trust X very much, and consequently I'd also trust Y. In this scenario, since a Digital Certificate has been issued and signed by a CA, it means the CA has done its due diligence in verifying all the information and stuff, and we trust the CA. It implies that we indirectly trust that the Public Key is of that supposed entity."),(0,r.kt)("p",null,"It doesn't attest to all the information mentioned in the Digital Certificate as a whole, just the Public Key of the individual involved."),(0,r.kt)("h3",{id:"verification-of-digital-signatures"},"Verification Of Digital Signatures"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Verification of digital signatures",src:i(3595).Z,width:"4360",height:"1268"})),(0,r.kt)("p",null,"To verify if the Public Key mentioned in the Digital Certificate has been verified and vetted, by the Certificate Authority, we hash it and compare it with the hash we get by decrypting the Digital Signature with the help of CA's public key. If they come out to be same, it means we can trust that particular public key, if they don't come out to be same, it should immediately raise red flags (",(0,r.kt)("a",{parentName:"p",href:"https://simple.wikipedia.org/wiki/Man-in-the-middle_attack"},(0,r.kt)("em",{parentName:"a"},"Man-in-the-middle")," Attack"),")"),(0,r.kt)("h3",{id:"certificate-distribution-and-storage"},"Certificate Distribution and Storage"),(0,r.kt)("p",null,"There's always the option of doing all of it manually, but it doesn't scale at all and is very unfeasible for two parties who've never even met."),(0,r.kt)("p",null,"There are Certificate Servers which are used for the storage and distribution of Digital Certificates, and there is a more advanced form of the same, Public Key Infrastructure (PKI), which is a hierarchy of many systems working together to provide key management features (such as certificate initialization, storage, management, establishing trust etc), and not just storage and distribution."),(0,r.kt)("h3",{id:"certificate-expiration"},"Certificate Expiration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once a certificate expires (the validity is mentioned there in the Digital Certificate), a new certificate can be requested again from the ",(0,r.kt)("strong",{parentName:"li"},"Trusted Entity"),"."),(0,r.kt)("li",{parentName:"ul"},"The lives of these certificates is intentionally kept short, as a workaround for private key compromise. If the private key associated with the Public Key of the entity gets compromised, anyone with it can decrypt the data being sent to it."),(0,r.kt)("li",{parentName:"ul"},"If a certificate is expired, the people this certificate is being sent to, can understand the fact that this certificate is not valid anymore, and any data shouldn't be encrypted with this Public Key.")),(0,r.kt)("h3",{id:"certificate-revocation"},"Certificate Revocation"),(0,r.kt)("p",null,"There are times when a certificate needs to be revoked viz. It doesn't hold any value and the public key shouldn't be trusted because of several reasons such as: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Private Key Compromise"),": If we're encrypting some data with a public key, whose corresponding Private key is leaked out to the world viz. Not so private, anyone can decrypt the data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Root Private Key Compromise"),": It's the key used by the CA to sign certificates. This is a very serious security risk. If the private key of a CA gets compromised, they need to revoke all the certificates signed under that private key, otherwise an adversary can issue and sign their own bogus certificates. Check these links for more information:"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The Entity is not there anymore"),": Job change, fired etc"),(0,r.kt)("li",{parentName:"ul"},"Some information has been changed associated with the entity such as email, departments within the organization etc. ")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Check these links for more information related to key compromise")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://darknetdiaries.com/transcript/3/"},"Diginotar Hack 2011")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ehn-dcc-development/hcert-spec/issues/103"},"Private used to issue vaccine certificates leaked"))))),(0,r.kt)("p",null,"Anybody who has signed a certificate, can revoke his signature on the certificate.\nIf a Certificate has been revoked, there should be a well-established system in place to let the sender know about this revocation, and there are, actually, such as: Certificate Revocation Lists (CRL) and OCSP (Online Status Certificate Protocol)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Certification Revocation technique"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Supporting graphic"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Certification Revocation Lists (CRL)"),(0,r.kt)("td",{parentName:"tr",align:null},"In this case, a list of revoked certificates is maintained and curated by the Certificate Authority (CA). To check if the Certificate has been revoked or not, we must contact the CA, and download the CRL, look through the big list for the name of our sender to check whether the certificate has been revoked or not. This method is very resource intensive because the CA would have to deal with a lot of similar traffic, all seeking the CRL and it has some other limitations too: ",(0,r.kt)("li",null,"The CRL needs to be downloaded each time its updated"),(0,r.kt)("li",null,"There is no real-time notification service, and we need to do this process manually to keep a checked on the revoked certificates. And it might be sometimes, too late.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{loading:"lazy",alt:"Certificate revocation lists",src:i(3851).Z,width:"2000",height:"1544"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OCSP (Online Certificate Status Protocol)"),(0,r.kt)("td",{parentName:"tr",align:null},"It's designed to overcome the limitations of CRL. With OCSP, we can request the status of a Digital Certificate anytime by just using the serial number of the certificate.",(0,r.kt)("li",null,"We can verify the revocation status by querying the OCSP server with the said serial number of the certificate, instead of checking CRLs."),(0,r.kt)("li",null,"The OCSP responder in turn, responds back with the revocation status of the said certificate.")," ",(0,r.kt)("li",null,"Every time we want to set up a connection, the other person sends the digital certificate which has the public key. We can verify the revocation status, by querying the OCSP server by using the serial number, instead of downloading CRL. The OCSP responder checks the status and responds to the request")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{loading:"lazy",alt:"OCSP",src:i(7315).Z,width:"2000",height:"1427"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OCSP Stapling (Online Certificate Status Protocol with Stapling)"),(0,r.kt)("td",{parentName:"tr",align:null},"OSCP with stapling does it differently, instead of the client contacting the OCSP responders, the web servers which sent us the Digital Certificate does that part.",(0,r.kt)("li",null,"The web-server contacts the OCSP server instead of the client (reducing traffic for the OCSP server) and keeps a digitally signed response of the Revocation Status."),(0,r.kt)("li",null,"During the SSL handshake process, when the web server sends its Digital Certificate, it also sends the Digitally Signed response of the Revocation Status alongwith the certificate"),(0,r.kt)("li",null,"The client instead of contacting CRL servers, or querying the OCSP responder, would just check the Signed Response (by the OCSP server) and take decisions based on that.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{loading:"lazy",alt:"OCSP Stapling",src:i(1291).Z,width:"2000",height:"1232"}))))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Why is OCSP stapling needed?")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Even though the OCSP we just discussed does it better than CRLs, there are still some drawbacks: "),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"The responder will still have to deal with a huge amout of requests"),(0,r.kt)("li",{parentName:"ul"},"If the client is unable to access the OCSP server (some malware block access to them when a device gets infected), there could be many outcomes, all of which are undesirable"),(0,r.kt)("li",{parentName:"ul"},"Even though the revocation status is not verified, continue with using the Public Key Anyways, destroying the whole purpose of doing revocation checks in the first place"),(0,r.kt)("li",{parentName:"ul"},"Terminate the connection")),(0,r.kt)("p",{parentName:"div"},"Apart from all these issues, OCSP leaks metadata (such as the serial number of the certificate) when we're querying the OCSP responder. An adversary acting as the ",(0,r.kt)("em",{parentName:"p"},"man-in-the-middle")," can easily find which website we were trying to visit based on that certificate serial number even when we're using encrypted DNS (DoT/ DoH etc). This is a risk to personal freedom and can be leveraged by oppressive governments to augment their censorship techniques."),(0,r.kt)("p",{parentName:"div"},"In the case of OCSP stapling, there is no direct contact b/w the client and the OCSP server, and as a result the metadata doesn't leak."),(0,r.kt)("p",{parentName:"div"},"Check this detailed blog post for more information: ",(0,r.kt)("a",{parentName:"p",href:"https://blog.seanmcelroy.com/2019/01/05/ocsp-web-activity-is-not-private/"},"Link")))))}p.isMDXComponent=!0},9475:function(e,t,i){t.Z=i.p+"assets/images/certificate_format-03dbeb49813519adf636d4be8e08b7e1.png"},3851:function(e,t,i){t.Z=i.p+"assets/images/crl-d9de3b67e376746e857565f87343b582.png"},7315:function(e,t,i){t.Z=i.p+"assets/images/ocsp-26f8c860e23f4bd4b9303f62221f9fc8.png"},1291:function(e,t,i){t.Z=i.p+"assets/images/ocsp_stapling-72a1c70f7d9b9f7e05f53e45dd2dfecd.png"},6634:function(e,t,i){t.Z=i.p+"assets/images/signature_leverage-66f2d811b615dc72c249fd6ad0b704fe.png"},3595:function(e,t,i){t.Z=i.p+"assets/images/signatures_verification-bf9732a34dd9711868c23b26cc01a5f4.png"}}]);