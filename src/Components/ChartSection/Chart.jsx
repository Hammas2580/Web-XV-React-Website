import React from 'react';
import ChartImages1 from "../../assets/Images/chartImages1.png";
import ChartImages2 from "../../assets/Images/chartImages2.png";
import ChartImages3 from "../../assets/Images/chartImages3.png";
import ChartImages4 from "../../assets/Images/chartImages4.png";
import ChartImages5 from "../../assets/Images/chartImages5.png";
import Bitcoin from "../../assets/Images/Bitcoin.png";
import Ethereum from "../../assets/Images/Ethereum.png";
import Tether from "../../assets/Images/Tether.png";
import Solana from "../../assets/Images/Solana.png";
import XRP from "../../assets/Images/XRP.png";

const Chart = () => {
    const chat = [
        {
            coinImage: Bitcoin,
            coinName: "Bitcoin",
            coinRate: "BTC / USD",
            coinPrice: "$42,122.00",
            coinPrice1: "-2.93%",
            coinChart: ChartImages1
        },
        {
            coinImage: Ethereum,
            coinName: "Ethereum",
            coinRate: "ETH / USD",
            coinPrice: "$2,214.77",
            coinPrice1: "-2.22%",
            coinChart: ChartImages2
        },
        {
            coinImage: Tether,
            coinName: "Tether",
            coinRate: "USDT / USD",
            coinPrice: "$0.9999",
            coinPrice1: "+0.04%",
            coinChart: ChartImages3
        },
        {
            coinImage: Solana,
            coinName: "Solana",
            coinRate: "SOL / USD",
            coinPrice: "$107.41",
            coinPrice1: "-11.20%",
            coinChart: ChartImages4
        },
        {
            coinImage: XRP,
            coinName: "XRP",
            coinRate: "XRP / USD",
            coinPrice: "$0.6183",
            coinPrice1: "-3.09%",
            coinChart: ChartImages5
        }
    ];

    return (
        <div className="bg-[#0B0E12] w-full py-16 px-4 md:px-16 lg:px-24">
            {/* Heading */}
            <div className="text-center space-y-2">
                <p className="text-[#335DD2] text-sm md:text-base uppercase font-medium">
                    cryptocurrencies
                </p>
                <p className="text-white text-2xl md:text-4xl font-bold uppercase">
                    Top crypto chart
                </p>
            </div>

            {/* Table (Mobile Scrollable) */}
            <div className="mt-10 w-full  overflow-x-auto">
                <table className="min-w-[600px] w-full bg-[#0E151B] rounded-xl overflow-hidden text-white">
                    <thead className="bg-[#0E151B] border-b border-[#18222F] text-sm text-[#A1A1A1]">
                        <tr>
                            <th className="text-left py-4 px-6">NAME</th>
                            <th className="text-center py-4 px-6">PRICE</th>
                            <th className="">GRAPH</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chat.map((item, index) => (
                            <tr
                                key={index}
                                className="border-b border-[#18222F] hover:bg-[#1a1f2c] transition"
                            >
                                {/* Name */}
                                <td className="flex items-center gap-3 py-4 px-6">
                                    <img src={item.coinImage} alt="Coin" className="w-6 h-6 object-contain" />
                                    <div>
                                        <div className="font-semibold text-white text-sm">{item.coinName}</div>
                                        <div className="text-xs text-[#A1A1A1]">{item.coinRate}</div>
                                    </div>
                                </td>

                                {/* Price */}
                                <td className="text-center py-4 px-6 text-sm">
                                    <span>{item.coinPrice}</span>
                                    <span className={`ml-2 ${item.coinPrice1.includes('-') ? 'text-red-500' : 'text-[#335DD2]'}`}>
                                        {item.coinPrice1}
                                    </span>
                                </td>

                                {/* Graph */}
                                <td className="text-right py-4 px-6 ">
                                    <img src={item.coinChart} alt="Chart" className="w-[200px] h-6 object-contain mx-auto md:ml-auto" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Chart;
