"use strict";(self.webpackChunkrohitdhill_me=self.webpackChunkrohitdhill_me||[]).push([[681],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,u=m["".concat(l,".").concat(h)]||m[h]||y[h]||a;return n?i.createElement(u,s(s({ref:t},p),{},{components:n})):i.createElement(u,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4076:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return y},default:function(){return h}});var i=n(7462),r=n(3366),a=(n(7294),n(4137)),s=["components"],o={id:"asymmetric",title:"Asymmetric Cryptosystems",pagination_label:"Learn more about asymmetric cryptography",sidebar_label:"Asymmetric Cryptosystems"},l=void 0,c={unversionedId:"cryptography/Cryptosystems/asymmetric",id:"cryptography/Cryptosystems/asymmetric",title:"Asymmetric Cryptosystems",description:"A basic post about Asymmetric Cryptography, and how it's implemented.",source:"@site/docs/cryptography/2. Cryptosystems/2. Asymmetric Cryptosystems.md",sourceDirName:"cryptography/2. Cryptosystems",slug:"/cryptography/Cryptosystems/asymmetric",permalink:"/docs/cryptography/Cryptosystems/asymmetric",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"asymmetric",title:"Asymmetric Cryptosystems",pagination_label:"Learn more about asymmetric cryptography",sidebar_label:"Asymmetric Cryptosystems"},sidebar:"tutorialSidebar",previous:{title:"Learn more about symmetric key cryptography",permalink:"/docs/cryptography/Cryptosystems/symmetric"},next:{title:"Learn more about cryptographic hashing",permalink:"/docs/cryptography/Cryptosystems/hashing"}},p={},y=[{value:"Basics",id:"basics",level:2},{value:"Understanding Asymmetric Cryptography",id:"understanding-asymmetric-cryptography",level:3},{value:"The Keys",id:"the-keys",level:3},{value:"How is it implemented?",id:"how-is-it-implemented",level:2},{value:"As a secure channel for transmission",id:"as-a-secure-channel-for-transmission",level:3},{value:"Open Message Format",id:"open-message-format",level:3}],m={toc:y};function h(e){var t=e.components,o=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A basic post about Asymmetric Cryptography, and how it's implemented.")),(0,a.kt)("h2",{id:"basics"},"Basics"),(0,a.kt)("h3",{id:"understanding-asymmetric-cryptography"},"Understanding Asymmetric Cryptography"),(0,a.kt)("p",null,"Unlike Symmetric Cryptography, two keys are used, public and a private, one for encryption and its counterpart for decryption purposes. Both the steps cant be done with the same key. If the plaintext is encrypted with Key A, the decryption will only take place by Key B."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Asymmetric Cryptosystems",src:n(9286).Z,width:"2000",height:"307"})),(0,a.kt)("p",null,"The usage of two keys is why it's also known as Two-Key Crypto or Public Key Encryption. Both the keys are mathematically related, yet one can't be derived from its other counterpart."),(0,a.kt)("p",null,"Asymmetric Cryptography is extremely slow and mathematically intensive, which is why, instead of using them for transmission of data across the network, we use them for key-exchange instead."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),": RSA (Riverest Shamir Aldeman), ECC (Elliptic Curve Cryptography), Diffie Helman, El Gamal etc."),(0,a.kt)("h3",{id:"the-keys"},"The Keys"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Public Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Private Keys"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Can be shared publicly for the world to use"),(0,a.kt)("td",{parentName:"tr",align:null},"Must be kept private at all times")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"how-is-it-implemented"},"How is it implemented?"),(0,a.kt)("h3",{id:"as-a-secure-channel-for-transmission"},"As a secure channel for transmission"),(0,a.kt)("p",null,"Alice, the business owner of a high-tech company doing active research in cutting edge tech, is currently on a holiday. Due to some business urgency, she has requested the IT department a sensitive file. Bob handles the security things at that organisation, how will Bob send Alice the sensitive file without anything being able to look at its contents when it's in transit?"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Using asymmetric key cryptography as a secure medium for transmission",src:n(6011).Z,width:"4853",height:"885"})),(0,a.kt)("p",null,"Following steps take place:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The data is encrypted using Alice's public key X, which is public knowledge."),(0,a.kt)("li",{parentName:"ul"},"The encrypted file is received by Alice, over the Internet"),(0,a.kt)("li",{parentName:"ul"},"Alice has her private key, which is in fact, known only to her. Knowledge of this private key implies it's Alice, and only the person with that key should be able to decrypt the encrypted file."),(0,a.kt)("li",{parentName:"ul"},"Alice decrypts the encrypted file which was just received with the help of her private key.")),(0,a.kt)("p",null,"Since the file is encrypted using Alice's public key, and can't be decrypted by anything else other than Alice's private key, confidentiality is ensured.\nIf Alice is able to decrypt the file, it also implies it's Alice. On the other hand, since the public key of Alice is common knowledge to all, authentication of the party sending the encrypted file isn't there, since anyone can encrypt a file with Alice's public key and send it over to her. This problem is dealt with the help of Digital Signatures."),(0,a.kt)("h3",{id:"open-message-format"},"Open Message Format"),(0,a.kt)("p",null,"Unlike the other method discussed above, what if we encrypt a file using my private key and sent it to anyone. Anyone who's received that file, will be able to decrypt it in a heartbeat, since my public key is, well public knowledge. We can say that no confidentiality is ensured, but at the same time, one can say if a file is getting decrypted with the help of my public key, it must have been encrypted with my private key in the first place, which is known only to me. One say state that it was me who encrypted the file, ensuring the concept of Non-Repudiation."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Open message format",src:n(5356).Z,width:"4856",height:"885"})),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In the above image, the file is decrypted using Bob's public key, it's a mistake. I'll redesign the graphic sometime in the future."))),(0,a.kt)("p",null,"Following steps take place:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The file is encrypted using Bob's private key by Bob, because he's the only one who knows it"),(0,a.kt)("li",{parentName:"ul"},"The file is sent over the Internet, to the recipient"),(0,a.kt)("li",{parentName:"ul"},"The recipient after receiving it, decrypt the file using Bob's public key. If decryption is successful, it's implied that it was sent by Bob (non-repudiation)")))}h.isMDXComponent=!0},9286:function(e,t,n){t.Z=n.p+"assets/images/asymmetric-ccaed762d7aef205c9f8c4771ea78fd9.png"},6011:function(e,t,n){t.Z=n.p+"assets/images/asymmetric_confidentiality-3bf4fe9e5e7913ac9cd938762b65abcd.png"},5356:function(e,t,n){t.Z=n.p+"assets/images/openmessage-64da97db46fb100ff08da899e245eee7.png"}}]);