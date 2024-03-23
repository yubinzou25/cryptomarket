import { useMemo } from "react";
import { useGetCoinsQuery } from "../../../api/cryptoApi";

function CryptoTable() {

  const {data:coinRawData} = useGetCoinsQuery(30);
  const coinData = useMemo(() => {
    if(!coinRawData?.data?.coins){return [];}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return coinRawData.data.coins.map((item:any) => {
      const price = parseFloat(item['price']).toLocaleString('en-US', { 
        maximumFractionDigits: 5
      });
      const volume = parseFloat(item['24hVolume']).toLocaleString('en-US');
      const marketCap = parseFloat(item['marketCap']).toLocaleString('en-US');
      const change = parseFloat(item['change']);
      return {
        name: item['name'],
        symbol: item['symbol'],
        iconUrl: item['iconUrl'],
        change: change,
        price: price,
        volume: volume,
        marketCap: marketCap
      }
    })
  }, [coinRawData]);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3" >
                        Symbols
                    </th>
                    <th scope="col" className="px-6 py-3 cursor-pointer">
                        <div className="flex items-center">
                            Latest Price
                            <TableSortIcon/>
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3 cursor-pointer">
                        <div className="flex items-center">
                            24H Change
                            <TableSortIcon/>
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3 cursor-pointer">
                        <div className="flex items-center">
                            24H Volume
                            <TableSortIcon/>
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3 cursor-pointer">
                        <div className="flex items-center">
                            Market Cap
                            <TableSortIcon/>
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3 cursor-pointer">
                        <div className="flex items-center">
                            Last 24H Price
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
              {// eslint-disable-next-line @typescript-eslint/no-explicit-any
              coinData.map((item:any, index:any) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex flex-row space-x-1 content-center">
                      <img className={"w-5 h-5 relative overflow-hidden rounded-full"} src={item.iconUrl}/>
                      <span>{item.name}</span>
                      <span className="text-gray-400">/ {item.symbol}</span>
                    </div>
                  </th>
                  <td className="px-6 py-4 font-bold">
                    ${item.price}
                  </td>
                  <td className={`px-6 py-4 ${item.change > 0? 'text-green-500': 'text-red-500'}`}>
                    {item.change > 0 && '+'}{item.change}%
                  </td>
                  <td className="px-6 py-4">
                    ${item.volume}
                  </td>
                  <td className="px-6 py-4">
                    ${item.marketCap}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
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
