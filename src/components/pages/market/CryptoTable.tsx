import { useMemo, useState } from "react";
import { useGetCoinsQuery } from "../../../api/cryptoApi";
import { Sparklines, SparklinesCurve } from 'react-sparklines';
type tableData = {
  rank:number,
  name:string,
  symbol:string,
  iconUrl:string,
  change:number,
  price:number,
  volume:number,
  marketCap:number,
  sparklines:number[]
}
function CryptoTable() {
  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState(false); // Ascending: true, Descending: false
  const [tablePage, setTablePage] = useState(0);
  const {data:coinRawData} = useGetCoinsQuery({limit:30, offset:tablePage * 30});
  useMemo(() => {
    if(!coinRawData?.data?.coins){return;}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const coinData = coinRawData.data.coins.map((item:any) => {
      const price = parseFloat(item.price);
      const volume = parseFloat(item['24hVolume']);
      const marketCap = parseFloat(item.marketCap);
      const change = parseFloat(item.change);
      const sparklines = item.sparkline.map((ele:string) => parseFloat(ele)).filter((ele:number) => !Number.isNaN(ele));
      return {
        rank:item.rank,
        name: item.name,
        symbol: item.symbol,
        iconUrl: item.iconUrl,
        change: change,
        price: price,
        volume: volume,
        marketCap: marketCap,
        sparklines: sparklines
      }
    });
    // By default the table is sorted by marketCap
    setSortedData(coinData);
    setSortOrder(false);
  }, [coinRawData]);

  const handleSort = (key:string) => {
    const preSortedData = [...sortedData];
    if (sortOrder) {
      preSortedData.sort((a, b) => (a[key] > b[key] ? 1 : -1));
      setSortOrder(false);
    } else {
      preSortedData.sort((a, b) => (a[key] < b[key] ? 1 : -1));
      setSortOrder(true);
    }
    setSortedData(preSortedData);
  };

  const handleSwitchPage = (page:number) => {
    setTablePage(page);
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col"className="px-6 py-3 cursor-pointer">
                      <div className="flex items-center" onClick={() => handleSort('rank')}>
                          #
                          <TableSortIcon/>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Symbols
                    </th>
                    <th scope="col" className="px-6 py-3 cursor-pointer">
                        <div className="flex items-center" onClick={() => handleSort('price')}>
                            Latest Price
                            <TableSortIcon/>
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3 cursor-pointer">
                        <div className="flex items-center" onClick={() => handleSort('change')}>
                            24H Change
                            <TableSortIcon/>
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3 cursor-pointer">
                        <div className="flex items-center" onClick={() => handleSort('volume')}>
                            24H Volume
                            <TableSortIcon/>
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3 cursor-pointer">
                        <div className="flex items-center" onClick={() => handleSort('marketCap')}>
                            Market Cap
                            <TableSortIcon/>
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3 cursor-pointer">
                        <div className="flex items-center">
                            24H Trend
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
              {
              sortedData.map((item:tableData, index:number) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-bold">
                    {item.rank}
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex flex-row space-x-1 content-center">
                      <img className={"w-5 h-5 relative overflow-hidden rounded-full"} src={item.iconUrl}/>
                      <span>{item.name}</span>
                      <span className="text-gray-400">/ {item.symbol}</span>
                    </div>
                  </th>
                  <td className="px-6 py-4 font-bold">
                    ${item.price.toLocaleString('en-US', { 
                      maximumFractionDigits: 5
                    })}
                  </td>
                  <td className={`px-6 py-4 ${item.change > 0? 'text-green-500': 'text-red-500'}`}>
                    {item.change > 0 && '+'}{item.change.toLocaleString('en-US')}%
                  </td>
                  <td className="px-6 py-4">
                    ${item.volume.toLocaleString('en-US')}
                  </td>
                  <td className="px-6 py-4">
                    ${item.marketCap.toLocaleString('en-US')}
                  </td>
                  <td className="">
                    <Sparklines data={item.sparklines}>
                      <SparklinesCurve color={item.change > 0? 'green': 'red'}/>
                    </Sparklines>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="flex flex-row space-x-2 justify-end m-3">
        {
          [0, 1, 2, 3, 4, 5].map((page:number) => (
            <button key={page} className={`font-medium rounded-lg px-4 py-2 whitespace-nowrap border border-gray-400 \
            ${page === tablePage && 'text-primary-default border-primary-default'}
            hover:text-primary-default hover:border-primary-default`}
            onClick={() => handleSwitchPage(page)}>
              {page + 1}
            </button>
          ))
        }
        </div>
    </div>
  );
}

export default CryptoTable


function TableSortIcon() {
  return (
    <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
    </svg>
  )
}
