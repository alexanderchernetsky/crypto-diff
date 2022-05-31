export const data = [
    {
        key: '1',
        name: 'NEAR',
        launched: '22.04.2020',
        marketCap: {cap: 3.499, place: 23},
        price: 5,
        maxSupply: '10^9',
        gasFee: 'variable. The cost of common actions: from 4.1⨉10⁻⁵ to 5⨉10⁻⁵ NEAR ~ 0,00025$',
        tps: 100000,
        transactionFinality: 'almost immediate - 1sec',
        consensus: 'PoS (Doomslug)',
        founders: 'NEAR Protocol was founded by Erik Trautman, an entrepreneur with experience on Wall Street and founder of Viking Education. His co-founders were Illia Polosukhin, who has more than ten years of industry experience, ' +
            'including three years at Google, and Alexander Skidanov, a computer scientist that worked at Microsoft and went on to join memSQL, where he became the director of engineering. NEAR Protocol has an extensive team of experienced ' +
            'developers that includes several International Collegiate Programming Contest (ICPC) gold medalists and winners. ',
        developerActivity: {total_repos: 138, repos: [{name: 'nearcore', stars: 1700, forks: 302, issues: 410, prs: 49, contributors: 88}]},
        mainIdea: 'Base Layer blockchain, Layer-1 blockchain. dApp platform that focuses on dev and user friendliness.' +
            ' Uses human-readable account names, unlike cryptographic wallet addresses. Central to NEAR Protocol’s design is the concept of sharding. Nightshade allows NEAR Protocol to maintain a single chain of data, while distributing the computing required to maintain this data into “chunks.”' +
            ' These chunks are handled by nodes, who process the data and add the information to the main chain. NEAR Protocol includes an application called the Rainbow Bridge that allows participants to easily transfer Ethereum tokens back and forth between Ethereum and NEAR. ' +
            'Aurora is a Layer 2 scaling solution built on NEAR Protocol intended for developers to launch their Ethereum decentralized applications on NEAR’s network. ',
    },
    {
        key: '2',
        name: 'Avalanche (AVAX)',
        launched: '21.09.2020',
        marketCap: {cap: 6.866, place: 14},
        price: 25,
        maxSupply: '720⨉10^6',
        gasFee: 'Transaction processing costs vary depending on the type of transaction and Avalanche\'s network congestion. All fees are burned—removed from circulation—to enable AVAX become scarcer over time. ' +
            'Avalanche users vote to decide the Avalanche transaction fee, making AVAX fees subject to change. Different types of transactions require payment of a different transaction fee. E.g. the cost of import/export - 0,001 AVAX; send-0,001 AVAX ~ 0,00025$',
        tps: 4500,
        transactionFinality: '< 2 sec',
        consensus: 'Avalanche consensus (PoS)',
        founders: 'Emin Gün Sirer is a Turkish-American computer scientist. He was an associate professor of computer science at Cornell University, and is currently the co-director of IC3.' +
            ' He is known for his contributions to peer-to-peer systems, operating systems and computer networking. ' +
            'Sirer is also founder of Avalanche protocol, a project related to building computing platform using Avalanche Consensus. Assisted by doctoral students Maofan "Ted" Yin and Kevin Sekniqi from Cornell University.',
        developerActivity: {total_repos: 54, repos: [{name: 'avalanchego', stars: 1600, forks: 361, issues: 47, prs: 14, contributors: 66}]},
        mainIdea: 'Avalanche is a smart contracts platform. Avalanche is a blockchain platform that aims to address the blockchain trilemma of scalability, ' +
            'security and decentralization thanks to its unique Proof of Stake (PoS) mechanism. Like Ethereum,' +
            ' Avalanche supports smart contracts to run decentralized applications (dApps) on its network.  Since Avalanche’s smart contracts are written in the Solidity language also used by Ethereum, it aims to create greater blockchain interoperably by ' +
            'integrating a number of decentralized finance (DeFi) ecosystems. Avalanche is built using three different blockchains in order to address the limitations of the blockchain trilemma. Digital assets can be moved across each of these chains to accomplish different functions within the ecosystem.' +
            'The Exchange Chain (X-Chain) is the default blockchain on which assets are created and exchanged. This includes Avalanche’s native token, AVAX. The Contract Chain (C-Chain) allows for the creation and execution of smart contracts. Because it is based on the Ethereum Virtual Machine, Avalanche’s smart contracts can take advantage of cross-chain interoperability.' +
            'The Platform Chain (P-Chain) coordinates validators and enables the creation and management of subnets.',
    },
    {
        key: '3',
        name: 'Ripple (XRP)',
        launched: '2012',
        marketCap: {cap: 18.597, place: 6},
        price: 0.38,
        maxSupply: '100⨉10^9',
        gasFee: 'The current minimum transaction cost required by the network for a standard transaction is 0.00001 XRP (~0,0000038$). It sometimes increases due to higher than usual load.',
        tps: 1500,
        transactionFinality: '< 5 sec',
        consensus: 'The Ripple Protocol Consensus Algorithm',
        founders: 'Three engineers—David Schwartz, Jed McCaleb, and Arthur Britto. Shortly thereafter, they were joined by Chris Larsen. Prior to joining Ripple, David Schwartz was Chief Technical Officer for WebMaster Incorporated, a Santa Clara software developer. He developed encrypted cloud storage and enterprise messaging systems for organizations like CNN and the National Security Agency (NSA).',
        developerActivity: {total_repos: 73, repos: [{name: 'rippled', stars: 4200, forks: 1400, issues: 323, prs: 35, contributors: 96}]},
        mainIdea: 'XRP would allow users to send money at a very low cost, attracting the retail customers and banks alike. A key proposition is its minuscle transaction cost while offering transaction finality of under 5 sec.' +
            ' So Ripple proposes a cheaper and more efficient alternative to the SWIFT system to process international transactions.',
    },
    {
        key: '4',
        name: 'Cardano (ADA)',
        launched: '27.09.2017',
        marketCap: {cap: 15.817, place: 8},
        price: 0.47,
        maxSupply: '45⨉10^9',
        gasFee: '~0,22$',
        tps: 250,
        transactionFinality: 'up to 10 min',
        consensus: 'PoS',
        founders: 'Charles Hoskinson is an American entrepreneur who is a founder of the Cardano blockchain platform and was a co-founder of the Ethereum blockchain platform',
        developerActivity: {total_repos: 1, repos: [{name: 'CIPs', stars: 316, forks: 137, issues: 15, prs: 31, contributors: 49}]},
        mainIdea: 'The open-source project also aims to “redistribute power from unaccountable structures to the margins to individuals” — helping to create a society that is more secure, transparent and fair.' +
            'Their research is focused on building a scalable, secure and efficient decentralized network by taking a systematic approach to blockchain research and development.' +
            'On Sept. 12, 2021, the Cardano ‘Alonzo’ hard fork officially launched, bringing smart contract functionality to the blockchain. The project has taken pride in ensuring that all of the technology developed goes through a process of peer-reviewed research, meaning that bold ideas can be challenged before they are validated. According to the Cardano team, ' +
            'this academic rigor helps the blockchain to be durable and stable — increasing the chance that potential pitfalls can be anticipated in advance.',
    },
    {
        key: '5',
        name: 'Solana (SOL)',
        launched: '2020',
        marketCap: {cap: 15.114, place: 9},
        price: 44.53,
        maxSupply: '-',
        gasFee: '$0.00025 per transaction',
        tps: 'up to 50,000 TPS',
        transactionFinality: '2,5 sec',
        consensus: 'PoH & PoS',
        founders: 'Anatoly Yakovenko is the most important person behind Solana. His professional career started at Qualcomm, where he quickly moved up the ranks and became senior staff engineer manager in 2015. Later on, his professional path shifted, and Yakovenko entered a new position as a software engineer at Dropbox.\n' +
            'In 2017, Yakovenko started working on a project which would later materialize as Solana. He teamed up with his Qualcomm colleague Greg Fitzgerald, and they founded a project called Solana Labs. Attracting several more former Qualcomm colleagues in the process, the Solana protocol and SOL token were released to the public in 2020.',
        developerActivity: {total_repos: 100, repos: [{name: 'solana-program-library', stars: 1800, forks: 1100, issues: 80, prs: 86, contributors: 109}]},
        mainIdea: 'Solana is a decentralized blockchain built to enable scalable, user-friendly apps for the world.One of the essential innovations Solana brings to the table is the proof-of-history (PoH) consensus developed by Anatoly Yakovenko. One of Solana’s main promises to customers is that they will not be surprised by increased fees and taxes.' +
            ' The protocol is designed in such a way as to have low transaction costs while still guaranteeing scalability and fast processing. Solana is a decentralized blockchain that enables user-friendly, scalable apps for users around the world.' +
            ' The network is the fastest-growing ecosystem in the crypto scape, supporting over 400 projects across NFTs, DeFi, Web3, and others.',
    },
    {
        key: '6',
        name: 'Binance Coin (BNB)',
        launched: '2017',
        marketCap: {cap: 49.808, place: 5},
        price: 306,
        maxSupply: '200⨉10^6 - max, but every quater they will use 20% of their profits to buy back BNB and destroy them, until they buy 50% (100⨉10^6 ) back.',
        gasFee: '',
        tps: 'Binance Chain - no info, Binance Smart Chain - 160',
        transactionFinality: '',
        consensus: 'Binance chain - DPoS, Binance Smart Chain - PoSA',
        founders: 'Changpeng Zhao is the founder and CEO of Binance. In 2001, Zhao joined Bloomberg as head of tradebook futures development. He spent four years with the company and later joined Fusion Systems as a partner.\n' +
            '\n' +
            'Since 2013, Changpeng Zhao has been actively involved with blockchain technology and cryptocurrencies. He became head of development at Blockchain, and in 2015 he founded BijieTech. In 2017, Zhao officially launched Binance, and he has been the CEO of the company ever since.\n' +
            '\n' +
            'He Yi is a co-founder and chief marketing officer at Binance. She started her career as a TV anchor and presenter on China Travel TV in 2012. Later, in 2014, Yi co-founded OKCoin, which was the largest fiat-to-crypto exchange in China at the time. In 2017, she joined forces with Changpeng Zhao, and together they created the largest crypto exchange globally — Binance.',
        developerActivity: {total_repos: 87, repos: [{name: 'bsc', stars: 1500, forks: 701, issues: 55, prs: 27, contributors: 147}]},
        mainIdea: 'BNB- is the native coin of the Binance chain. Binance Smart Chain and Binance Chain are different blockchains. Launched as the exchange’s first chain, the latter network features high scalability but lacks native smart contract support. For that reason, it’s primarily utilized to operate the Binance DEX along with some other applications.\n' +
            '\n' +
            'On the other hand, BSC supports smart contracts while leveraging the Proof-of-Staked-Authority (PoSA) consensus mechanism as well as Binance Chain’s high throughput to achieve the same level of scalability and speed (the two chains run in parallel with each other).\n' +
            '\n' +
            'One main advantage of Binance Smart Chain is that the blockchain network is compatible with the Ethereum Virtual Machine (EVM), which allows developers to deploy ETH smart contracts and dApps with minimal configuration on BSC.\n' +
            '\n' +
            'However, BSC sacrifices a level of decentralization to achieve high scalability and throughput due to the limited number of validators required to reach a consensus. Binance is the biggest cryptocurrency exchange globally based on daily trading volume. Binance aims to bring cryptocurrency exchanges to the forefront of financial activity globally.' +
            ' Aside from being the largest cryptocurrency exchange globally, Binance has launched a whole ecosystem of functionalities for its users.' +
            ' The Binance network includes the Binance Chain, Binance Smart Chain, Binance Academy, Trust Wallet and Research projects.' +
            ' One of the biggest competitive advantages Binance has is its drive for development. While the company started only as a crypto exchange back in 2017, today, Binance has spread its services among numerous different spheres.' +
            ' According to the company website, its mission is to become the infrastructure services provider for the entire blockchain ecosystem. Initially built on the Ethereum blockchain as an ERC-20 token, BNB is now the native coin of Binance Chain as a BEP-2 token.' +
            ' It\'s used to pay trading and transaction fees on the Binance exchange platform, and can also serve as both a store of value and medium of exchange. BEP2 is a Binance Coin (BNB) token standard for the Binance cryptocurrency exchange platform. BEP20 is a Binance Coin (BNB) token standard for interacting with DApps on the Binance Smart Chain (BSC). ' +
            'The difference between BEP2 and BEP20 lies in the usage of these two formats within the Binance ecosystem.' +
            ' With dual chain architecture, both chains are complementary – Binance Smart Chain caters to decentralized applications without congesting the original chain, which is optimized for ultra-fast trading. \n'
    },
    {
        key: '7',
        name: 'Polkadot (DOT)',
        launched: '2020',
        marketCap: {cap: 9.790, place: 11},
        price: 9.91,
        maxSupply: '-',
        gasFee: 'Polkadot uses a weight-based fee model as opposed to a gas-metering model. ' +
            'The final fee for a transaction is calculated using the following parameters: base fee, weight fee, length fee, tip',
        tps: 1000,
        transactionFinality: '12-60sec',
        consensus: 'Nominated PoS',
        founders: 'Polkadot is the flagship protocol of Web3 Foundation, a Swiss Foundation with a mission to facilitate an open-source, fully functional and user-friendly decentralized web.\n' +
            '\n' +
            'Polkadot’s founders are Dr. Gavin Wood, Robert Habermeier and Peter Czaban.\n' +
            '\n' +
            'Wood, Web3 Foundation’s president, is the most well-known of the trio thanks to his industry influence as Ethereum co-founder, Parity Technologies founder and the creator of the smart contract coding language Solidity. Wood is also credited with coining the term Web3.\n' +
            '\n' +
            'Habermeier is a Thiel Fellow and accomplished blockchain and cryptography researcher and developer. Czaban is the former Technology Director at Web3 Foundation, with a wealth of experience across highly specialized fintech industries.',
        developerActivity: {total_repos: 367, repos: [{name: 'polkadot', stars: 5800, forks: 1300, issues: 456, prs: 100, contributors: 190}]},
        mainIdea: 'Polkadot is an open-source sharded multichain protocol that connects and secures a network of specialized blockchains, facilitating cross-chain transfer of any data or asset types, not just tokens, thereby allowing blockchains to be interoperable with each other.' +
            ' Polkadot was designed to provide a foundation for a decentralized internet of blockchains, also known as Web3. Polkadot is known as a layer-0 metaprotocol because it underlies and describes a format for a network of layer 1 blockchains known as parachains (parallel chains).' +
            ' As a metaprotocol, Polkadot is also capable of autonomously and forklessly updating its own codebase via on-chain governance according to the will of its token holder community.' +
            'Polkadot provides a foundation to support a decentralized web, controlled by its users, and to simplify the creation of new applications, institutions and services.\n' +
            '\n' +
            'The Polkadot protocol can connect public and private chains, permissionless networks, oracles and future technologies, allowing these independent blockchains to trustlessly share information and transactions through the Polkadot Relay Chain (explained further down).' +
            'Polkadot has four core components: Relay Chain: Polkadot’s “heart,” helping to create consensus, interoperability and shared security across the network of different chains;\n' +
            'Parachains: independent chains that can have their own tokens and be optimized for specific use cases;\n' +
            'Parathreads: similar to parachains but with flexible connectivity based on an economical pay-as-you-go model;\n' +
            'Bridges: allow parachains and parathreads to connect and communicate with external blockchains like Ethereum.'
    },
    {
        key: '8',
        name: 'Tron (TRX)',
        launched: '2017',
        marketCap: {cap: 7.675, place: 13},
        price: 0.081,
        maxSupply: '-',
        gasFee: 'NO',
        tps: 2000,
        transactionFinality: '~1 min',
        consensus: 'DPoS',
        founders: 'TRON was founded by Justin Sun, who now serves as CEO. Educated at Peking University and the University of Pennsylvania, he was recognized by Forbes Asia in its 30 Under 30 series for entrepreneurs.\n' +
            '\n' +
            'Born in 1990, he was also associated with Ripple in the past — serving as its chief representative in the Greater China area.',
        developerActivity: {total_repos: 59, repos: [{name: '', stars: 3100, forks: 1100, issues: 8, prs: 14, contributors: 177}]},
        mainIdea: 'TRON (TRX) is a decentralized blockchain-based operating system developed by the Tron Foundation and launched in 2017. Originally TRX tokens were ERC-20-based tokens deployed on Ethereum, but a year later they were moved to their own network.\n' +
            '\n' +
            'Initially, the project was created with the aim of providing full ownership rights to makers of digital content. The main goal is to help content creators (who receive only a small part of the income) and encourage them with more rewards for their work. How: invite content consumers to reward content makers directly (without intermediaries like YouTube, Facebook or Apple).\n' +
            '\n' +
            'The TRON software supports smart contracts, various kinds of blockchain systems, and decentralized applications aka dApps. The cryptocurrency platform uses a transaction model similar to Bitcoin (BTC), namely UTXO. Transactions take place in a public ledger, where users can track the history of operations.\n' +
            '\n' +
            'Therefore, the platform was built to create a decentralized Internet and serves as a tool for developers to create dApps, acting as an alternative to Ethereum. Anyone can create dApps on the TRON network, offer content, and in return receive digital assets as compensation for their efforts. The ability to create content and share it openly without hesitation regarding transaction fees is an undeniable advantage of TRON.' +
            'TRON has positioned itself as an environment where content creators can connect with their audiences directly. By eliminating centralized platforms — whether they are streaming services, app stores or music sites — it is hoped that creators won’t end up losing as much commission to middlemen. In turn, this could also make content less expensive for consumers.' +
            ' Given how the entertainment sector is increasingly becoming digitized, TRON could have a headstart in applying blockchain technology to this industry.'
    },
    {
        key: '9',
        name: 'Polygon (MATIC)',
        launched: '2017',
        marketCap: {cap: 4.764, place: 18},
        price: 0.59,
        maxSupply: '10⨉10^9',
        gasFee: 'usually moves from $0.0005 to $0.2 ',
        tps: 65000,
        transactionFinality: '< 2 sec',
        consensus: 'PoS',
        founders: 'Polygon (formerly Matic Network) was launched in October 2017. Polygon was co-founded by Jaynti Kanani, Sandeep Nailwal and Anurag Arjun, two experienced blockchain developers and a business consultant.\n' +
            '\n' +
            'Before moving to its network in 2019, the Polygon team was a huge contributor in the Ethereum ecosystem. The team worked on implementing the Plasma MVP, the WalletConnect protocol and the widely-used Dagger event notification engine on Ethereum.\n' +
            '\n' +
            'The team included co-founder of Polygon, Jaynti Kanani. Jaynti, a full-stack developer and blockchain engineer currently serves as the CEO of Polygon.\n' +
            '\n' +
            'Jaynti played an integral role in implementing Web3, Plasma and the WalletConnect protocol on Ethereum. Prior to his blockchain involvement, Jaynti worked as a data scientist with Housing.com.\n' +
            '\n' +
            'Co-founder and chief operations officer of Polygon, Sandeep Nailwal is a blockchain programmer and entrepreneur. Before jointly starting Polygon (formerly Matic), Sandeep had served as the CEO of Scopeweaver, and the chief technical officer of Welspun Group.\n' +
            '\n' +
            'Anurag Arjun is the only non-programming co-founder of Polygon. As a product manager, he has had stints with IRIS Business, SNL Financial, Dexter Consultancy and Cognizant Technologies.',
        developerActivity: {total_repos: 106, repos: [{name: 'contracts', stars: 509, forks: 222, issues: 21, prs: 18, contributors: 16}]},
        mainIdea: 'Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains).' +
            ' This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc. with the advantages of Ethereum’s security, vibrant ecosystem and openness.' +
            'Polygon (formerly Matic Network) is a Layer 2 scaling solution backed by Binance and Coinbase. The project seeks to stimulate mass adoption of cryptocurrencies by resolving the problems of scalability on many blockchains.' +
            'MATIC, the native tokens of Polygon, is an ERC-20 token running on the Ethereum blockchain. The tokens are used for payment services on Polygon and as a settlement currency between users who operate within the Polygon ecosystem.' +
            ' The transaction fees on Polygon sidechains are also paid in MATIC tokens. Polygon is self-described as a Layer 2 scaling solution, which means that the project doesn’t seek to upgrade its current basic blockchain layer any time soon. The project focuses on reducing the complexity of scalability and instant blockchain transactions.\n' +
            '\n' +
            'Polygon uses a customized version of the Plasma framework which is built on proof-of-stake checkpoints that run through the Ethereum main-chain. This unique technology allows each sidechain on Polygon to achieve up to 65,536 transactions per block.\n' +
            '\n' +
            'Commercially, the sidechains of Polygon are structurally designed to support a variety of decentralized finance (DeFi) protocols available in the Ethereum ecosystem.\n' +
            '\n' +
            'While Polygon currently supports only Ethereum basechain, the network intends to extend support for additional basechains, based on community suggestions and consensus. This would make Polygon an interoperable decentralized Layer 2 blockchain platform'
    },
    {
        key: '10',
        name: 'Cronos (CRO)',
        launched: 'Crypto.com chain - 2018, Cronos chain - 2021',
        marketCap: {cap: 4.405, place: 20},
        price: 0.174,
        maxSupply: '30.263⨉10^9',
        gasFee: '~0.019$',
        tps: '',
        transactionFinality: '',
        consensus: 'PoA',
        founders: 'Cronos was launched by the Crypto.com company as part of its vision of “putting cryptocurrency in every wallet.” Crypto.com itself was founded in June 2016 as “Monaco Technologies GmbH” by Kris Marszalek, Rafael Melo, Gary Or and Bobby Bao.\n' +
            '\n' +
            'Kris Marszalek, an alum of the Polish Adam Mickiewicz University, has founded and headed three companies prior to starting Crypto.com: consumer electronics design and manufacturing business Starline Polska, location-based service mobile app and platform YIYI and the e-commerce firm BEECRAZY.\n' +
            '\n' +
            'Rafael Melo earned his bachelor’s degree in engineering from the PUC-Rio. Over his more than 15-year-long career in finance, Melo has worked with major companies in Asia and helped secure over 50 million AUD in funding for the Ensogo social commerce website.\n' +
            '\n' +
            'Gary Or is a software engineer with over nine years of fullstack engineering experience. Prior to co-founding Crypto.com, Or worked as platform architect at Ensogo and co-founded the mobile app development firm Foris. He received his bachelor’s degree in engineering, computer science from the University of Hong Kong.\n' +
            '\n' +
            'Before helping launch Crypto.com, Bobby Bao worked in the M&A department of the China Renaissance investment bank. Bao has studied at the University of Melbourne, NYU Stern School of Business and the College of William & Mary.',
        developerActivity: {total_repos: 32, repos: [{name: 'chain-main', stars: 383, forks: 294, issues: 16, prs: 2, contributors: 16}]},
        mainIdea: 'Cronos (CRO) is the native cryptocurrency token of Cronos Chain — a decentralized, open-source blockchain developed by the Crypto.com payment, trading and financial services company.\n' +
            '\n' +
            'Cronos Chain is one of the products in Crypto.com’s lineup of solutions designed to accelerate the global adoption of cryptocurrencies as a means of increasing personal control over money, safeguarding user data and protecting users’ identities. The CRO blockchain serves primarily as a vehicle that powers the Crypto.com Pay mobile payments app.' +
            'CRO blockchain is mainly focused on providing utility to the users of Crypto.com’s payment, trading and financial services solutions.\n' +
            '\n' +
            'CRO owners can stake their coins on the Crypto.com Chain to act as a validator and earn fees for processing transactions on the network. Additionally, CRO coins can be used to settle transaction fees on the Cronos Chain.\n' +
            '\n' +
            'Within the framework of the Crypto.com Pay payments app, users can get cashback of up to 20% by paying merchants in CRO and up to 10% by purchasing gift cards and making peer-to-peer transfers to other users.\n' +
            '\n' +
            'When it comes to trading use cases, the Crypto.com App allows users to earn token rewards for select listings by staking CRO.\n' +
            '\n' +
            'Additionally, users can earn annual interest of up to 10-12% on their Crypto.com Coins by staking them on either the Crypto.com Exchange app or Crypto.com’s metal Visa Card.\n' +
            '\n' +
            'Overall, CRO acts as an instrument that powers Crypto.com’s drive to increase the adoption of cryptocurrencies on a global scale. As such, the company is continuously working on finding and developing new use cases that will allow users to leverage the cryptocurrency to enhance the control they have over their money, data and identities.' +
            'Cronos Chain, an Ethereum-compatible blockchain, was recently launched to run in parallel to Crypto.org blockchain. This is comparable to Binance Chain and Binance Smart Chain (EVM-compatible). Cronos Chain’s mainnet beta went live on Nov. 8, 2021, and is built on the Cosmos SDK, utilizing a proof-of-authority (PoA) consensus mechanism.' +
            ' Ethereum Virtual Machine (EVM) compatibility means that the thousands of DApps built on Ethereum can be ported on to the Cronos Chain. Furthermore, it also supports the Inter Blockchain Communications (IBC) protocol, which allows it to bridge to the Cosmos ecosystem of DApps.'
    },
    {
        key: '11',
        name: 'Decentraland (MANA)',
        launched: '2020',
        marketCap: {cap: 1.764, place: 36},
        price: 0.95,
        maxSupply: '-',
        gasFee: '=Ethereum',
        tps: '=Ethereum',
        transactionFinality: '=Ethereum',
        consensus: '=Ethereum',
        founders: 'Decentraland was co-founded by Ariel Meilich and Esteban Ordano — both of whom have stepped down from major positions at the project, but still work alongside Decentraland as advisors.\n' +
            '\n' +
            'Ariel Meilich previously held the role of project lead at Decentraland between 2017 and 2020, and is a serial entrepreneur that has founded several other startups, including an online translation agency and a CRM platform. He also worked as an analyst at Charles River Ventures, a prominent Silicon Valley venture fund.\n' +
            '\n' +
            'On the other hand, Esteban Ordano is Decentraland\'s former tech lead and has a long and varied history in the cryptocurrency space working as a software engineer at BitPay, Inc., an advisor to Matic Network and briefly operated his own smart contract development firm known as Smart Contract Solutions.\n' +
            '\n' +
            'Esteban is also credited with co-founding Zeppelin Solutions, an established blockchain technology infrastructure company.\n' +
            '\n' +
            'Although Ariel and Estaban are no longer leading the project, the development of Decentraland is still ongoing, with efforts being directed by the recently established Decentraland Foundation.',
        developerActivity: {total_repos: 262, repos: [{name: 'marketplace', stars: 828, forks: 475, issues: 76, prs: 10, contributors: 17}]},
        mainIdea: '\n' +
            'Decentraland is a user-owned, Ethereum-based virtual world where you can play, explore, and interact with games and activities. Decentraland (MANA) defines itself as a virtual reality platform powered by the Ethereum blockchain that allows users to create, experience, and monetize content and applications.\n' +
            '\n' +
            'In this virtual world, users purchase plots of land that they can later navigate, build upon and monetize.\n' +
            '\n' +
            'Decentraland was launched following a $24 million initial coin offering (ICO) that was conducted in 2017. The virtual world launched its closed beta in 2019 and opened to the public in February 2020. Since then, users have created a wide range of experiences on their parcels of LAND, including interactive games, sprawling 3D scenes and a variety of other interactive experiences.\n' +
            '\n' +
            'Decentraland uses two tokens: MANA and LAND. MANA is an ERC-20 token that must be burned to acquire non-fungible ERC-721 LAND tokens. MANA tokens can also be used to pay for a range of avatars, wearables, names, and more on the Decentraland marketplace.' +
            'Decentraland is built for content creators, businesses and individuals that are looking for a new artistic medium, business opportunity, or source of entertainment.\n' +
            '\n' +
            'In total, the Decentraland gameworld — termed the “Metaverse” — is divided into 90,601 individual parcels of LAND, each of which is represented by an ERC-721 non-fungible token. Each LAND is exactly 16m x 16m (256 square meters) and can be found at a particular coordinate in the Metaverse.\n' +
            '\n' +
            'Though LAND holders are free to develop their plot into whatever they choose, much of the Metaverse is broadly divided into several districts, each of which has a different size and theme. These districts were generated through individual crowdsales for MANA tokens, and parcels of LAND in these districts cannot be traded.\n' +
            '\n' +
            'As of January 2021, the cyberpunk-themed Aetheria is the largest district — comprising a total of 8,008 LAND.\n' +
            '\n' +
            'Decentraland is also one of the growing number of projects to use a decentralized autonomous organization (DAO) structure for governance decisions. As a result, MANA toker holders are in control of how the Decentraland world behaves, by proposing and voting on policy updates, the specifics of upcoming LAND auctions and the types of content that are allowed with the Metaverse.\n' +
            '\n' +
            'Besides being a creative outlet, many Decentraland users currently monetize their LAND through leasing, advertising and paid experiences. Likewise, other users generate an income by creating and selling items on the Decentraland marketplace for MANA tokens.'
    },
    {
        key: '12',
        name: 'Litecoin (LTC)',
        launched: '2011',
        marketCap: {cap: 4.473, place: 19},
        price: 63.55,
        maxSupply: '84⨉10^6',
        gasFee: 'variable ~0,05$',
        tps: 56,
        transactionFinality: '',
        consensus: 'PoW',
        founders: 'Litecoin was founded by Charlie Lee, an early cryptocurrency adopter. Charlie Lee, also known as “Chocobo,” is an early Bitcoin miner and computer scientist, who was a former software engineer for Google. In addition, Charlie Lee held the role of director of engineering at Coinbase between 2015 and 2017 before moving on to other ventures.\n' +
            '\n' +
            'Today, Charlie Lee is an outspoken advocate of cryptocurrencies and is the managing director of the Litecoin Foundation—a non-profit organization that works alongside the Litecoin Core Development team to help advance Litecoin.',
        developerActivity: {total_repos: 27, repos: [{name: 'litecoin', stars: 4100, forks: 32500, issues: 57, prs: 13, contributors: 8}]},
        mainIdea: 'Forked from Bitcoin repo. Behind Bitcoin, Litecoin is the second most popular pure cryptocurrency. This success can be largely attributed to its simplicity and clear utility benefits.\n' +
            '\n' +
            'As of January 2021, Litecoin is one of the most widely accepted cryptocurrencies, and more than 2,000 merchants and stores now accept LTC across the globe.'
    },
    {
        key: '13',
        name: 'Toncoin (TON)',
        launched: '2018',
        marketCap: {cap: 1.721, place: 207},
        price: 1.41,
        maxSupply: '5⨉10^9',
        gasFee: '',
        tps: 'millions of transactions/sec',
        transactionFinality: 'under 1sec',
        consensus: 'PoS',
        founders: 'Toncoin, also referred to as the Open Network, was first conceived by Telegram founders Pavel and Nikolai Durov in 2018. The Russian-born brothers, keen to develop a layer 1 chain to support their growing Telegram messenger user base, invested considerable energy to come up with an early iteration of TON. After raising $1.7bn during a private sale in 2018, the Durovs published a series of documents outlining details and features of their crypto project. \n' +
            '\n' +
            'In 2019 the SEC sued Telegram, accusing it of promoting an unregistered securities offering. By 2020, the case had been settled but the founders called it quits on the project. \n' +
            '\n' +
            'It was only in 2020 that a team of developers picked up the project again and resumed development. TON Foundation, the leader of the project, is structured as a not-for-profit.\n' +
            '\n' +
            'In December 2021, Pavel Durov, who is now based in Dubai, acknowledged and backed the new spinoff, writing in a Telegram post: “When Telegram said goodbye to TON last year, I expressed the hope that future generations of developers would one day carry on with our vision of a mass-market blockchain platform.\n' +
            '\n' +
            '“So I was inspired to see the champions of Telegram\'s coding contests continue developing the open TON project, which they rebranded to Toncoin.\n' +
            '\n' +
            '“I\'m proud that the technology we created is alive and evolving. When it comes to scalability and speed, TON is still years ahead of everything else in the blockchain realm. It would have been a shame to see this project not benefitting humanity.\n' +
            '\n' +
            '“Unlike the original TON, Toncoin is independent from Telegram. But I wish its team the same success.” The TON Foundation was founded by two developers, Anatoliy Makosov and Kirill Emelyanenko, both winners in the TON Blockchain Contests in 2019 after Telegram stepped away. ',
        developerActivity: {total_repos: 28, repos: [{name: 'ton', stars: 1500, forks: 405, issues: 50, prs: 13, contributors: 11}]},
        mainIdea: 'The next gen network to unite all blockchains and the existing Internet. Apart from processing millions of transactions per second, TON blockchain-based ecosystem has all the chances to give rise to a genuine Web3.0 Internet with decentralized storage, anonymous network, DNS, instant payments and various decentralized services. TON is a fully decentralized Layer-1 blockchain. TON is a blockchain of blockchains with a masterchain to rule them all. ' +
            'TON architecture is designed to merge alle existing blockchains into a single decentralized network.'
    }
];
