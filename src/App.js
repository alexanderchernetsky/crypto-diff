import {Table, Tooltip} from 'antd';

import {data} from "./data";
import numberWithCommas from "./helpers/numberWithCommas";

import './App.css';
import 'antd/dist/antd.css';


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        className: 'name-column',
        render: text => <div>{text}</div>,
    },
    {
        title: 'Launched',
        dataIndex: 'launched',
        key: 'launched',
        className: 'launched-column',
        render: text => <div>{text}</div>,
    },
    {
        title: 'Market cap, ⨉10^9 $',
        dataIndex: 'marketCap',
        key: 'marketCap',
        className: 'market-cap-column',
        render: data => <div>{data.cap} (#{data.place})</div>,
    },
    {
        title: 'Price, $',
        dataIndex: 'price',
        key: 'price',
        className: 'price-column',
        render: price => <div>{price}</div>,
    },
    {
        title: 'Max Supply',
        dataIndex: 'maxSupply',
        key: 'maxSupply',
        className: 'max-supply-column',
        ellipsis: {
            showTitle: false,
        },
        render: tokenLimit => (
            <Tooltip placement="right" title={tokenLimit}>
                {numberWithCommas(tokenLimit)}
            </Tooltip>
        )
    },
    {
        title: 'Gas Fee',
        dataIndex: 'gasFee',
        key: 'gasFee',
        className: "gas-fee-column",
        ellipsis: {
            showTitle: false,
        },
        render: text => (
            <Tooltip title={text} placement="bottomLeft">
                {text}
            </Tooltip>
        ),
    },
    {
        title: 'TPS',
        dataIndex: 'tps',
        key: 'tps',
        className: 'tps-column',
        render: tps => <div>{numberWithCommas(tps)}</div>,
    },
    {
        title: 'Transaction Finality',
        dataIndex: 'transactionFinality',
        key: 'transactionFinality',
        className: 'finality-column',
        render: text => <div>{text}</div>,
    },
    {
        title: 'Consensus Mechanism',
        dataIndex: 'consensus',
        key: 'consensus',
        className: 'consensus-column',
        render: text => <div>{text}</div>,
    },
    {
        title: 'Founders',
        dataIndex: 'founders',
        key: 'founders',
        ellipsis: {
            showTitle: false,
        },
        render: text => (
            <Tooltip title={text} placement="bottomLeft">
                {text}
            </Tooltip>
        ),
    },
    {
        title: 'Developers Activity',
        dataIndex: 'developerActivity',
        key: 'developerActivity',
        className: "dev-activity-column",
        render: ({total_repos, repos}) => (
            <div>
                <span>{`Total: ${total_repos}.`}</span>
                <div>
                    Repositories: {repos.map(item => `name - ${item.name}, stars - ${item.stars}, forks - ${item.forks}, issues - ${item.issues}, prs - ${item.prs}, contributors - ${item.contributors}`)}
                </div>
            </div>
            )
    },
    {
        title: 'Main Idea',
        dataIndex: 'mainIdea',
        key: 'mainIdea',
        ellipsis: {
            showTitle: false,
        },
        render: address => (
            <Tooltip placement="left" title={address}>
                {address}
            </Tooltip>
        ),
    },
];


function App() {
  return (
    <div className="main-content">
      <h1 className="heading">
           Cryptocurrencies comparison. Last updated - 29.05.2022
      </h1>
        <main >
            <Table columns={columns} dataSource={data} />
        </main>
    </div>
  );
}

export default App;
