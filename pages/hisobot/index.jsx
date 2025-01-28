import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";
export default function Report() {
    return (
        <>
            <Head>
                <title>Hisobot bo'limi | Clinika</title>
                <link rel="icon" href="/logo.svg"></link>
            </Head>
            <div className="bg-[#FFFFFF] px-[80px] py-[30px] flex flex-col gap-y-[30px]">
                <Navbar />
                <div className="border border-[#CFCFCF] rounded-[10px] p-10 flex flex-col gap-y-10 justify-between min-h-screen">
                    <div className="flex flex-col gap-y-10">
                        <div className="flex flex-col gap-y-[30px]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center border border-[#CFCFCF] rounded-[8px]">
                                    <div className="flex items-center gap-x-[10px] px-5 py-3 border-r-[0.5px] borderl-[#CFCFCF]">
                                        <button><img src="/calendar.svg" alt="" /></button>
                                        <span className="font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#BFBFBF]">
                                            <input type="date" className="outline-none" /> dan
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-x-[10px] px-5 py-3 border-l-[0.5px] borderl-[#CFCFCF]">
                                        <button><img src="/calendar.svg" alt="" /></button>
                                        <span className="font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#BFBFBF]">
                                            <input type="date" className="outline-none appearance-none" /> gacha
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-[30px]">
                                    <button className="bg-[#71AB65] flex items-center gap-x-[10px] px-5 py-3 rounded-[8px] font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#FFFFFF]">
                                        <img src="/doctor.svg" alt="" />
                                        <span>Shovkat</span>
                                        <img src="/down.svg" alt="" />
                                    </button>
                                    <button className="bg-[#E9E9E91A] flex items-center gap-x-[10px] px-5 py-3 rounded-[8px] border border-[#CFCFCF] font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#CFCFCF]">
                                        <img src="/steth.svg" alt="" />
                                        <span>Servis</span>
                                        <img src="/arrow-down.svg" alt="" />
                                    </button>
                                </div>
                            </div>
                            <hr className="bg-[#CFCFCF] w-full h-[1px] rounded-[2px]" />
                        </div>
                        <table className="flex flex-col gap-y-5">
                            <thead>
                                <tr className="flex items-center justify-between">
                                    <th className="text-center px-[10px]">
                                        <h5 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Doktor ismi</h5>
                                    </th>
                                    <th>
                                        <h5 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Xizmat turi</h5>
                                    </th>
                                    <th>
                                        <h5 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Narxi</h5>
                                    </th>
                                    <th>
                                        <h5 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Xizmat donasi</h5>
                                    </th>
                                    <th>
                                        <h5 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Summasi</h5>
                                    </th>
                                    <th>
                                        <h5 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Sana</h5>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="flex items-center justify-between">
                                    <td>Rizaev Shovkat</td>
                                    <td>Uzi Opka</td>
                                    <td>200.000 Sum</td>
                                    <td>10</td>
                                    <td>2.000.000 Sum</td>
                                    <td>16.12.2024</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-[10px]">
                            <button className="px-[9px] py-[3px] rounded-[4px] border border-[#CFCFCF] font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#808080]">1</button>
                            <button className="px-[9px] py-[3px] rounded-[4px] font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#808080]">2</button>
                            <button className="px-[9px] py-[3px] rounded-[4px] font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#808080]">3</button>
                            <button className="px-[9px] py-[3px] rounded-[4px] font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#808080]">4</button>
                            <button className="px-[9px] py-[3px] rounded-[4px] font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#808080]">5</button>
                            <button className="px-[9px] py-[3px] rounded-[4px] font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#808080]">...</button>
                            <button className="px-[9px] py-[3px] rounded-[4px] font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#808080]">10</button>
                            <button className="px-[9px] py-[3px] rounded-[4px] font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#808080]"><img src="/other.svg" alt="" /></button>
                        </div>
                        <div className="bg-[#E9E9E91A] px-5 py-3 rounded-[8px] border border-[#CFCFCF] font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#CFCFCF]">Umumiy summa 2.000.000 Sum</div>
                    </div>
                </div>
            </div>
        </>
    )
}