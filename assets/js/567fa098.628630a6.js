"use strict";(self.webpackChunkrohitdhill_me=self.webpackChunkrohitdhill_me||[]).push([[842],{4137:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=d(a),p=i,u=h["".concat(s,".").concat(p)]||h[p]||m[p]||l;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8203:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return c},toc:function(){return m},default:function(){return p}});var n=a(7462),i=a(3366),l=(a(7294),a(4137)),o=["components"],r={title:"Execution of compiled languages",id:"execution-compile",pagination_label:"Understand the process of compilation and how such programs get executed",sidebar_label:"Execution of compiled languages"},s=void 0,d={unversionedId:"programming/Program Execution/execution-compile",id:"programming/Program Execution/execution-compile",title:"Execution of compiled languages",description:"Understanding different stages of compilation and the technicalities involved",source:"@site/docs/programming/02. Program Execution/01. Execution of compiled languages.md",sourceDirName:"programming/02. Program Execution",slug:"/programming/Program Execution/execution-compile",permalink:"/docs/programming/Program Execution/execution-compile",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Execution of compiled languages",id:"execution-compile",pagination_label:"Understand the process of compilation and how such programs get executed",sidebar_label:"Execution of compiled languages"},sidebar:"tutorialSidebar",previous:{title:"Why study programming?",permalink:"/docs/programming/pl-basics"},next:{title:"Understand the process of how execution of intermediate/ interpreted programs takes place",permalink:"/docs/programming/Program Execution/interediate-interpreted-execution"}},c={},m=[{value:"Writing code",id:"writing-code",level:2},{value:"Pre-processing",id:"pre-processing",level:2},{value:"Compilation",id:"compilation",level:2},{value:"What are compilers?",id:"what-are-compilers",level:3},{value:"Overview of C compilation",id:"overview-of-c-compilation",level:3},{value:"Lexical Analysis (Tokenisation)",id:"lexical-analysis-tokenisation",level:3},{value:"Parsing (Syntax Analysis)",id:"parsing-syntax-analysis",level:3},{value:"Semantic Analysis",id:"semantic-analysis",level:3},{value:"Intermediate Code Generation",id:"intermediate-code-generation",level:3},{value:"Code Optimization",id:"code-optimization",level:3},{value:"Code Generation",id:"code-generation",level:3},{value:"Linking",id:"linking",level:2},{value:"Basics",id:"basics",level:3},{value:"What are symbols?",id:"what-are-symbols",level:3},{value:"The symbol table",id:"the-symbol-table",level:3},{value:"How an object file looks like (ELF perspective)",id:"how-an-object-file-looks-like-elf-perspective",level:3},{value:"Static Linking",id:"static-linking",level:3},{value:"Phase 1: Symbol Resolution",id:"phase-1-symbol-resolution",level:4},{value:"Phase 2: Symbol Relocation",id:"phase-2-symbol-relocation",level:4},{value:"Dynamic Linking",id:"dynamic-linking",level:3},{value:"Loading",id:"loading",level:2},{value:"Understanding ELF program headers",id:"understanding-elf-program-headers",level:3},{value:"How loading takes place?",id:"how-loading-takes-place",level:3},{value:"How a dynamically linked ELF gets loaded into the memory",id:"how-a-dynamically-linked-elf-gets-loaded-into-the-memory",level:3},{value:"Execution",id:"execution",level:2},{value:"Reference/ Credits/ Resources",id:"reference-credits-resources",level:2}],h={toc:m};function p(e){var t=e.components,r=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Understanding different stages of compilation and the technicalities involved")),(0,l.kt)("h1",{id:"different-steps-of-compilation"},"Different steps of compilation"),(0,l.kt)("p",null,"There is a lot of stuff, so we will try to go through them one by one, also we will look at the process from the view of the C programming language."),(0,l.kt)("h2",{id:"writing-code"},"Writing code"),(0,l.kt)("p",null,"For the code to compile, we need to write the code in the first place, this part is all about writing the code, which is an integral part of the ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Systems_development_life_cycle"},"SDLC"),"."),(0,l.kt)("h2",{id:"pre-processing"},"Pre-processing"),(0,l.kt)("p",null,"In this phase, the pre-processor does removal of comments, and other special statements such as preprocessor directives and deal with them accordingly. For example, if we are including the ",(0,l.kt)("inlineCode",{parentName:"p"},"stdio")," library in our code, ",(0,l.kt)("inlineCode",{parentName:"p"},"#include <stdio.h>"),", the preprocessor will put all the function prototypes into our main code, so that the compiler can figure out what kind of arguments can be passed to the function, whether it's defined locally, or can it be discovered in some other library"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ cpp <filename.c> | less\n#or \n$ clang -E <filename.C> | less\n")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Preprocessing",src:a(2272).Z,width:"1918",height:"1002"})),(0,l.kt)("h2",{id:"compilation"},"Compilation"),(0,l.kt)("h3",{id:"what-are-compilers"},"What are compilers?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Speaking in a generic sense, compilers are used to convert code written in one language to another. The notion that compilers translate HLLs to low-level languages is prevalent, but not necessary, as it can also be used to convert b/w two HLLs (see ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Source-to-source_compiler"},"Transpilation"),"), for example ",(0,l.kt)("a",{parentName:"li",href:"https://babeljs.io/"},"Babel"),"."),(0,l.kt)("li",{parentName:"ul"},"Apart from code translation, they are also used in code optimization and error handling")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Preprocessing",src:a(9505).Z,width:"1424",height:"446"})),(0,l.kt)("h3",{id:"overview-of-c-compilation"},"Overview of C compilation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The C compiler takes HLL source code and converts it into an intermediate form called object code."),(0,l.kt)("li",{parentName:"ul"},"The conversion from HLL to machine code is done all at once, which is why this type of compilation is known as ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Ahead-of-time_compilation"},"Ahead Of Time Compilation")," (AOT).\nT- The outcome of the compilation phase is multiple object files (",(0,l.kt)("inlineCode",{parentName:"li"},".o"),", ",(0,l.kt)("inlineCode",{parentName:"li"},".obj"),"), which are native to our ISA and microarchitecture, the only difference being they contain additional metadata such as relocation table, symbol table and what not, to augment the Linking step, in order to make the executable blocks identifiable and relocatable."),(0,l.kt)("li",{parentName:"ul"},"Has a lot of sub-phases: Lexical Analysis, Syntax Analysis, Semantic Analysis, Intermediate Code Generation, Code Optimization and Code Generation, and we will go through them one by one.")),(0,l.kt)("h3",{id:"lexical-analysis-tokenisation"},"Lexical Analysis (Tokenisation)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The lexical analyzer breaks down the source program into lexical units (or ",(0,l.kt)("em",{parentName:"li"},"lexemes"),"), which are things which hold some meaning such as identifiers, special words, operators, punctuation symbols etc."),(0,l.kt)("li",{parentName:"ul"},"Error checking is also done at this stage, if some characters are not allowed, the lexical analyzer reports them to us.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'String greeting = "Hello";\n/*\n    Five lexemes are there:\n    - String\n    - greeting \n    - = \n    - "hello"\n    - ;\n*/\n')),(0,l.kt)("h3",{id:"parsing-syntax-analysis"},"Parsing (Syntax Analysis)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The syntax analyzer takes in the sequence of tokens generated at the previous step, to create hierarchical structures called ",(0,l.kt)("strong",{parentName:"li"},"Parse Trees"),", which represent the logical structure of a program, and the original source code can also be obtained back from the Parse Tree by walking the tree down the right order."),(0,l.kt)("li",{parentName:"ul"},"Having a ",(0,l.kt)("em",{parentName:"li"},"tree")," like shape is important because it allows the compiler to conduct multiple-passes while generating the machine language without having to re-parse the original source code."),(0,l.kt)("li",{parentName:"ul"},"In this phase, some degree of error checking is also there")),(0,l.kt)("h3",{id:"semantic-analysis"},"Semantic Analysis"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In this phase, the parse tree is used to detect any logical errors such as assigning a wrong type to a variable, undeclared variable usage etc, and in general three things are done: Type checking, Flow control checking and Label checking."),(0,l.kt)("li",{parentName:"ul"},"The compiler makes a complete traversal of the parse tree (abstract syntax tree or AST) and produces an ",(0,l.kt)("em",{parentName:"li"},"Annotated AST")," which also describes the values of its attributes")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ clang -Xclang -ast-dump <filename.c>\n")),(0,l.kt)("h3",{id:"intermediate-code-generation"},"Intermediate Code Generation"),(0,l.kt)("p",null,"During this step, our code gets translated into a language somewhat b/w pure assembly and the source language (",(0,l.kt)("em",{parentName:"p"},"Intermediate Language"),")"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ clang -Xclang -disableO0-optnone -S -emit-llvm <code.c>\n")),(0,l.kt)("h3",{id:"code-optimization"},"Code Optimization"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The compiler uses a variety of techniques to enhance the efficiency of our code, which is done at the intermediate code level because machine code is hard to optimize because of the platform dependency"),(0,l.kt)("li",{parentName:"ul"},"Optimization generally leads to faster execution speeds and/ or smaller binary sizes "),(0,l.kt)("li",{parentName:"ul"},"There are three rules that must be absolutely followed at this stage:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The program must consume fewer resources than before "),(0,l.kt)("li",{parentName:"ul"},"The original meaning of the program must not change due to optimization "),(0,l.kt)("li",{parentName:"ul"},"It shouldn't be too time consuming")))),(0,l.kt)("p",null,"Check this ",(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/15548023/clang-optimization-levels"},"link")," to understand more about code optimization flags."),(0,l.kt)("h3",{id:"code-generation"},"Code Generation"),(0,l.kt)("p",null,"The optimised intermediate code is then converted fully into the machine code (",(0,l.kt)("inlineCode",{parentName:"p"},".o"),"/ ",(0,l.kt)("inlineCode",{parentName:"p"},".obj"),")"),(0,l.kt)("h2",{id:"linking"},"Linking"),(0,l.kt)("h3",{id:"basics"},"Basics"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"It's the process of combining various pieces of code and data into a single file that can be loaded into the memory and executed. All this magic is performed by ",(0,l.kt)("strong",{parentName:"li"},"Linker")),(0,l.kt)("li",{parentName:"ul"},"The linker takes in an object file, looks for unresolved symbols and find where they exist with the help of relocation information and either place them into our main code (static linking) or do something which would lead to them being resolved at runtime (dynamic linking)")),(0,l.kt)("h3",{id:"what-are-symbols"},"What are symbols?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Symbols are identifiers that are used to identify something when they\u2019re used outside of where they were declared "),(0,l.kt)("li",{parentName:"ul"},"They are stored in a symbol table which is built during the assembly phase. We can inspect them using nm/ readelf.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nasm",metastring:"showLineNumbers",showLineNumbers:!0},"global _start\n\nsection .text\n    _start:\n        xor RAX, RAX\n        mov ECX, someLabelName\n\nsection .data\n    someLabelName: dw 0x1234\n")),(0,l.kt)("p",null,"If we convert the above assembly into its corresponding ELF, and try to read the symbols using ",(0,l.kt)("inlineCode",{parentName:"p"},"nm"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ nasm code.asm -o objectfile.o -f elf64\n$ ld objectfile.o -o finalExecutable\n$ nm -a ./finalExecutable\n\n# These are all the things which are referenced outside of where they have been declared, so they count as symbols\n0000000000402002 D __bss_start\n0000000000402002 D _edata\n0000000000402008 D _end\n0000000000000000 a hi.asm\n0000000000402000 d someLabelName\n0000000000401000 T _start\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Lowercase is used to denote that the symbol is local, and uppercase is used to denote that it is an external symbol."),(0,l.kt)("li",{parentName:"ul"},"Symbol binding can either be local or global. Only the static symbols are local scoped, rest all are given Global and Global (extern). Local non-static variables are of no interest to the linker and are managed on the runtime stack."),(0,l.kt)("li",{parentName:"ul"},"Symbols can either be Strong (defined functions/ initialised variables), or weak (uninitialised variables). Multiple symbols with the same name are not allowed, and a strong symbol is always picked over the weak.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type of symbol"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"Absolute Symbol")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"In the BSS section")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"In the data section")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Debugging symbol used for debugging")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"T"),(0,l.kt)("td",{parentName:"tr",align:null},"In the text section")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"U"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined")))),(0,l.kt)("h3",{id:"the-symbol-table"},"The symbol table"),(0,l.kt)("p",null,"A symbol table is used to store information about the symbols"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct {\n    int   name;     /* offset into the string table that points to the null terminated string name of the symbol */\n    char    type,       /* Function or data (4 bits) */\n    binding: 4;     /* Local or global */\n    char    reserved;   /* Unused */\n    short   section;    /* Which section this symbol is associated to, viz. index in the section header table */\n    long    value;      /* The address */\n    long    size;       /* Object size in bytes */\n} Elf64_Symbol;\n")),(0,l.kt)("h3",{id:"how-an-object-file-looks-like-elf-perspective"},"How an object file looks like (ELF perspective)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"              \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n              \u2502 ELF header  \u2502 Basic information about the object file\n              \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n              \u2502 .text       \u2502 Contains the code that we write\n              \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n              \u2502 .rodata     \u2502 Read only data\n              \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n              \u2502 .data       \u2502 Contains globally initialized data\n              \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n              \u2502 .bss        \u2502 Contains globally uninitialized data, stuff present in the bss section doesn't need memory\n              \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n              \u2502 .symtab     \u2502 The symbol table\n              \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n              \u2502 .rel.text   \u2502 Relocation information (more on this later)\n              \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n              \u2502 .rel.data   \u2502 Relocation information (more on this later)\n              \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n              \u2502 .debug      \u2502 Debugging symbol table\n              \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n              \u2502 .line       \u2502 Mapping b/w original code and machine instructions\n              \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n              \u2502 .strtab     \u2502 String table\n              \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n              \u2502 Section     \u2502 Useful information for linking (not execution)\n              \u2502 header table\u2502\n              \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Apart from the things discussed above, there are a bunch of other miscellaneous but important things too, such as\n",(0,l.kt)("inlineCode",{parentName:"p"},".PLT")," (Procedural Linkage Table) and ",(0,l.kt)("inlineCode",{parentName:"p"},".GOT")," (Global Offset Table): They are used to resolve library calls and are useful in the case of dynamic linking"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"What is the ELF file format?")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"I've been throwing the term ELF for a while now, but never got about explaining it. ELF stands for Executable and Linkable Format. It contains the program data, the code, and some metadata which is used to determine how it can be linked and loaded in the memory"),(0,l.kt)("p",{parentName:"div"},"It\u2019s the successor of the COFF (Common Object File Format) of ","*","NIX like operating systems."))),(0,l.kt)("h3",{id:"static-linking"},"Static Linking"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The object files of the functions which are called using libraries, is created and linked together during the linking phase to create an executable, making the size of the executable large."),(0,l.kt)("li",{parentName:"ul"},"This approach is good for particular libraries if some of its functions are used a lot of times, but each time something gets changed in the library, the whole executable needs to be recreated.")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Preprocessing",src:a(1871).Z,width:"2398",height:"1378"})),(0,l.kt)("h4",{id:"phase-1-symbol-resolution"},"Phase 1: Symbol Resolution"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"During the assembly phase, a symbol table is generated, which lists out all the symbols in an object module. "),(0,l.kt)("li",{parentName:"ul"},"During this phase, symbol resolution takes place, by which a single definition to each symbol is found and associated with, which is done by going through unresolved symbols, and finding the places where they actually exist viz. mapping of symbol names to their definition"),(0,l.kt)("li",{parentName:"ul"},"If more than one symbol exists with the same name, then the concept of strong/ weak symbols is brought into the picture. "),(0,l.kt)("li",{parentName:"ul"},"The C linker goes through the whole codebase in a single pass, and takes note of unresolved symbol references as they occur, and as soon as the definitions are found, place them on the symbol table. "),(0,l.kt)("li",{parentName:"ul"},"The following information is maintained: set of relocatable object files that will be merged to form the executable (E), set of unresolved symbols (U), and set of symbols that have been defined in the previous input files (D)")),(0,l.kt)("h4",{id:"phase-2-symbol-relocation"},"Phase 2: Symbol Relocation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"At the end of the previous phase, all the symbols get resolved with their correct definitions, this phase is all about creating the final executable and fixing the references to these symbols."),(0,l.kt)("li",{parentName:"ul"},"A new executable is created which has the combined .text and .data section of all the libraries, along with that of its main program."),(0,l.kt)("li",{parentName:"ul"},"Now that we know the correct definitions for symbols, we can fix the references made to these symbols with their correct runtime addresses, that were left zeroed out as placeholders during the assembly phase because the assembler didn\u2019t know what their runtime address would be in the program address space"),(0,l.kt)("li",{parentName:"ul"},"The linker will look at the relocation tables (.rel.text and .rel.data) to see which symbols need relocation (the zeroed out ones). All resolved symbols\u2019s definitions will have specific addresses in the newly created executable, and these address will be put into those placeholders.")),(0,l.kt)("h3",{id:"dynamic-linking"},"Dynamic Linking"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct {\n    long offset; /* Offset of the reference which needs to be relocated */\n    long type;   /* How to modify the reference, there are 32 relocation types in the ELF format */\n    symbol;      /* Index in the symbol table, used to find the resolved address for the symbol */\n    long addend; /* Used by some implementations to change the value of modified reference */\n} Elf64_Rela;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Another approach is to not link the object files during linking phase, and instead use a dynamic linker to link the global variables at load time and link the library functions at invocation time, keeping the size of the binary small."),(0,l.kt)("li",{parentName:"ul"},"References to library object modules will be fixed during the invocation time, and these will be just pointers to where they\u2019re located in memory, they will not be put into our binary, allowing multiple processes sharing the same set of libraries and saving memory."),(0,l.kt)("li",{parentName:"ul"},"Static linking leads to wastage of a lot of memory because the same library code is loaded along with the main executable multiple times. And whenever there\u2019s some change made to any library, the executable needs to be recreated. By this technique, the executable need not be re-created every time some changes are made into the library code, and the library code can stay in L1 cache ensuring super fast access either as shared object .so (Linux) or .dll (Windows) ")),(0,l.kt)("h2",{id:"loading"},"Loading"),(0,l.kt)("h3",{id:"understanding-elf-program-headers"},"Understanding ELF program headers"),(0,l.kt)("p",null,"Segment/ program headers contain information about how can this program be loaded and executed into the memory, they\u2019re not needed on linktime (to remember: think about the segmentation memory model)"),(0,l.kt)("p",null,"There are two important keywords that we must absolutely understand:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INTERP"),": Defines the library that should be used to load this ELF into the memory"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LOAD"),": defines the part of the file that should be loaded into the memory")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ readelf -a ./a.out | less\n\nProgram Headers:\n  Type           Offset             VirtAddr           PhysAddr\n                 FileSiz            MemSiz              Flags  Align\n  PHDR           0x0000000000000040 0x0000000000000040 0x0000000000000040\n                 0x00000000000002d8 0x00000000000002d8  R      0x8\n  INTERP         0x0000000000000318 0x0000000000000318 0x0000000000000318\n                 0x000000000000001c 0x000000000000001c  R      0x1\n      [Requesting program interpreter: /lib64/ld-linux-x86-64.so.2]\n  LOAD           0x0000000000000000 0x0000000000000000 0x0000000000000000\n                 0x0000000000000618 0x0000000000000618  R      0x1000\n  LOAD           0x0000000000001000 0x0000000000001000 0x0000000000001000\n                 0x0000000000000161 0x0000000000000161  R E    0x1000\n  LOAD           0x0000000000002000 0x0000000000002000 0x0000000000002000\n                 0x00000000000000d4 0x00000000000000d4  R      0x1000\n  LOAD           0x0000000000002de8 0x0000000000003de8 0x0000000000003de8\n                 0x0000000000000248 0x0000000000000250  RW     0x1000\n")),(0,l.kt)("h3",{id:"how-loading-takes-place"},"How loading takes place?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To figure out what to load and how to load, the Linux kernel reads the beginning of the file (magic section in the ELF header)"),(0,l.kt)("li",{parentName:"ul"},"If the file starts with a shebang #!, it means there is a specific loader (interpreter and the likes) which can help execute this program. The kernel extracts the interpreter path and name from the line, and calls it, with the original file as its argument"),(0,l.kt)("li",{parentName:"ul"},"If the file format matches with something present in /proc/sys/fs/binfmt_misc, the kernel executes the interpreter/ loader specified for that format, with the original file as an argument")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ ls -1 /proc/sys/fs/binfmt_misc/\n\njar\nllvm-14-runtime.binfmt\npython3.10\nregister\nstatus\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If the ELF is dynamically linked, the kernel reads the interpreter/ loader defined in the ELF, loads the interpreter and the original file, and transfer control to the interpreter. If the ELF is statically linked, the kernel will just load it")),(0,l.kt)("h3",{id:"how-a-dynamically-linked-elf-gets-loaded-into-the-memory"},"How a dynamically linked ELF gets loaded into the memory"),(0,l.kt)("p",null,'The program and its interpreter are loaded by the kernel into the memory by the steps discussed above, and the interpreter further loads libraries into the logical address space of our current program. The interpreter path is specified and can be checked by using readelf -a  program | grep "interpreter" and can be overwritten by using ',(0,l.kt)("inlineCode",{parentName:"p"},"patchelf")),(0,l.kt)("p",null,"The interpreter locates the libraries, and they can be found at:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LD_PRELOAD")," environment variable, and anything in ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/ld.so.preload")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LD_LIBRARY_PATH")," environment variable"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DT_RUNPATH"),"/ ",(0,l.kt)("inlineCode",{parentName:"li"},"DT_RPATH")," specified in the binary"),(0,l.kt)("li",{parentName:"ul"},"system wide configuration ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/ld.so.conf")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/lib")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"/usr/lib"))),(0,l.kt)("p",null,"The interpreter loads the libraries"),(0,l.kt)("h2",{id:"execution"},"Execution"),(0,l.kt)("p",null,"If we look at the ELF header, there is something called the ",(0,l.kt)("strong",{parentName:"p"},"Entry Point Address")," which is used to specify where the execution flow will jump at the start, after the execution of the said ELF starts\nIf we look at the ",(0,l.kt)("inlineCode",{parentName:"p"},"objdump")," of the said binary, and look for the address mentioned in the ",(0,l.kt)("em",{parentName:"p"},"Entry Point Address")," field, we find:"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Preprocessing",src:a(3647).Z,width:"1920",height:"984"})),(0,l.kt)("p",null,"We notice there is a call to the ",(0,l.kt)("inlineCode",{parentName:"p"},"__libc_start_main()")," function (since the binary was compiled with ",(0,l.kt)("inlineCode",{parentName:"p"},"libc"),"), if it's not, the ",(0,l.kt)("inlineCode",{parentName:"p"},"_start")," directly contains the instructions to execute"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A normal ELF calls ",(0,l.kt)("inlineCode",{parentName:"li"},"__libc_start_main()")," in libc, and the library in turn will call the ELF\u2019s ",(0,l.kt)("inlineCode",{parentName:"li"},"main()")," function if our program is compiled and linked with ",(0,l.kt)("inlineCode",{parentName:"li"},"libc")),(0,l.kt)("li",{parentName:"ul"},"Our ELF reads the environment variables (",(0,l.kt)("inlineCode",{parentName:"li"},"void **envp"),")and the arguments provided to it (",(0,l.kt)("inlineCode",{parentName:"li"},"void **argv"),")")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"int main(int argc, void **argv, void **envp);\n")),(0,l.kt)("h2",{id:"reference-credits-resources"},"Reference/ Credits/ Resources"),(0,l.kt)("p",null,"Credit where credit is due :)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=A7I0497Up0c"},"Introduction to Compilers and Stages of Compilation - YouTube")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLhy9gU5W1fvUND_5mdpbNVHC1WCIaABbP"},"UIC CS361 by Chris Kanich")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://csapp.cs.cmu.edu/"},"Computer Systems: A Programmer's Perspective")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pwn.college/"},"pwn.college by Zardus (Yan Shoshitaishvili) and kanak (Connor Nelson)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mytechnotalent/Reverse-Engineering"},"Kevin Thomas's reverse engineering guide")),(0,l.kt)("li",{parentName:"ul"},"Executable and Linkable Format 101 by Ignacio Sanmillan (intezer Labs): ",(0,l.kt)("a",{parentName:"li",href:"https://www.intezer.com/blog/research/executable-linkable-format-101-part1-sections-segments/"},"Part 1 Sections and Segments"),", ",(0,l.kt)("a",{parentName:"li",href:"https://www.intezer.com/blog/malware-analysis/executable-linkable-format-101-part-2-symbols/"},"Part 2: Symbols"),", ",(0,l.kt)("a",{parentName:"li",href:"https://www.intezer.com/blog/malware-analysis/executable-and-linkable-format-101-part-3-relocations/"},"Part 3: Relocations"),", ","[Part 4]","(Part 4: Dynamic Linking)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://medium.com/ax1al/a-brief-introduction-to-executable-linkable-format-1ed9a3fdcc91"},"A brief introduction to Executable & Linkable Format by ElementalX2"))))}p.isMDXComponent=!0},9505:function(e,t,a){t.Z=a.p+"assets/images/compiler-basic-25a980630ceb6095f45f7f8e54c09bb6.png"},3647:function(e,t,a){t.Z=a.p+"assets/images/objdump-2d0f90889c6df81d701fc94f0a1d9b87.png"},2272:function(e,t,a){t.Z=a.p+"assets/images/preprocessing-24fa3c19dacdd38f7187f122d9171cb5.png"},1871:function(e,t,a){t.Z=a.p+"assets/images/static-linking-bfe48a849eb11b0e29647043e33abae4.png"}}]);