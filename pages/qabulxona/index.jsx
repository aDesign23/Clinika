import Navbar from "@/components/Navbar"
import Head from "next/head"
import { useRef, useState } from "react"
export default function Table() {
    const [tableHidden, setTableHidden] = useState(false)
    const [detail, setDetail] = useState(false)
    const dateInputRef = useRef(null);
    const handleClick = () => {
        if (dateInputRef.current) {
            dateInputRef.current.click()
        }
    }
    return (
        <>
            <Head>
                <title>Qabulxona bo'limi | Clinika</title>
                <link rel="icon" href="/logo.svg"></link>
            </Head>
            <div className="bg-[#FFFFFF] px-[80px] py-[30px] flex flex-col gap-y-[30px] relative">
                <Navbar/>
                <div className={tableHidden ? "border border-[#CFCFCF] rounded-[10px] p-10 hidden flex-col gap-y-10 justify-between min-h-screen" : "border border-[#CFCFCF] rounded-[10px] p-10 flex flex-col gap-y-10 justify-between min-h-screen"}>
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
                                        <button onClick={handleClick}><img src="/calendar.svg" alt="" /></button>
                                        <span className="font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#BFBFBF]">
                                            <input ref={dateInputRef} type="date" className="outline-none appearance-none" /> gacha
                                        </span>
                                    </div>
                                </div>
                                <button onClick={() => setTableHidden(!tableHidden)} className="bg-[#71AB65] p-[12.5px] rounded-[8px]">
                                    <img src="/add.svg" alt="" />
                                </button>
                            </div>
                            <hr className="bg-[#CFCFCF] w-full h-[1px] rounded-[2px]" />
                        </div>
                        <table className="flex flex-col gap-y-5">
                            <thead>
                                <tr className="flex items-center justify-between">
                                    <th className="text-center px-[10px]">
                                        <h5 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">#</h5>
                                    </th>
                                    <th>
                                        <h5 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">ID</h5>
                                    </th>
                                    <th>
                                        <h5 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">F.I.O</h5>
                                    </th>
                                    <th>
                                        <h5 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Xizmat turi</h5>
                                    </th>
                                    <th>
                                        <h5 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Doktor ismi</h5>
                                    </th>
                                    <th>
                                        <h5 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Summasi</h5>
                                    </th>
                                    <th>
                                        <h5 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">O’chird raqami</h5>
                                    </th>
                                    <th>
                                        <h5 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Xona raqami</h5>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="flex items-center justify-between">
                                    <td>
                                        <span className="py-[6px] px-[12.5px] bg-[#71AB651A] rounded-full border border-[#71AB65] font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#71AB65]">1</span>
                                    </td>
                                    <td>salom</td>
                                    <td>salom</td>
                                    <td>salom</td>
                                    <td>salom</td>
                                    <td>salom</td>
                                    <td>salom</td>
                                    <td>salom</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
                </div>
                <div className={tableHidden ? "relative border border-[#CFCFCF] rounded-[10px] p-10 flex flex-col gap-y-10 min-h-screen" : "border border-[#CFCFCF] rounded-[10px] p-10 hidden flex-col gap-y-10 min-h-screen"}>
                    <div className="flex flex-col gap-y-[30px]">
                        <div className="flex items-center gap-x-5">
                            <button onClick={() => setTableHidden(!tableHidden)} className="bg-transparent p-3 border border-[#CFCFCF] rounded-[4px] "><img src="/arrow-left.svg" alt="" /></button>
                            <h4 className="font-spaceGrotesk font-medium text-[24px] leading-[30.62px] tracking-[2%] text-[#000000]">Qabulxonaga qo’shish</h4>
                        </div>
                        <hr className="bg-[#CFCFCF] w-full h-[1px] rounded-[2px]" />
                    </div>
                    <div className="grid grid-cols-3 gap-[30px]">
                        <div className="flex flex-col gap-y-[10px]">
                            <label className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Ism</label>
                            <div className="flex items-center gap-x-[10px] px-5 py-3 border border-[#E9E9E9] rounded-[8px]">
                                <button><img src="/profile.svg" alt="" /></button>
                                <input className="outline-none font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#000000]" type="text" placeholder="Ravshan" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-[10px]">
                            <label className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Nosirov</label>
                            <div className="flex items-center gap-x-[10px] px-5 py-3 border border-[#E9E9E9] rounded-[8px]">
                                <button><img src="/profile.svg" alt="" /></button>
                                <input className="outline-none font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#000000]" type="text" placeholder="Nosirov" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-[10px]">
                            <label className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Xizmat turlari</label>
                            <div className="flex gap-x-[10px] justify-between">
                                <div className="w-full flex items-center gap-x-[10px] px-5 py-3 border border-[#E9E9E9] rounded-[8px]">
                                    <button><img src="/steth.svg" alt="" /></button>
                                    <input className="outline-none font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#000000]" type="text" placeholder="Uzi: Opka" />
                                </div>
                                <button className="relative p-3 rounded-[8px] border border-[#E9E9E9]">
                                    <img src="/arrow-down.svg" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-[10px]">
                            <label className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Summa</label>
                            <div className="flex items-center gap-x-[10px] px-5 py-3 border border-[#E9E9E9] rounded-[8px]">
                                <button><img src="/coin.svg" alt="" /></button>
                                <input className="outline-none font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#000000]" type="text" placeholder="200.000 Sum" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-[10px]">
                            <label className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Shifokor</label>
                            <div className="flex items-center gap-x-[10px] px-5 py-3 border border-[#E9E9E9] rounded-[8px]">
                                <button><img src="/plus-doctor.svg" alt="" /></button>
                                <input className="outline-none font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#000000]" type="text" placeholder="Shavkat" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-[10px]">
                            <label className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Ochird raqami</label>
                            <div className="flex items-center gap-x-[10px] px-5 py-3 border border-[#E9E9E9] rounded-[8px]">
                                <button><img src="/num.svg" alt="" /></button>
                                <input className="outline-none font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#000000]" type="text" placeholder="41-raqam" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-5">
                        <button onClick={() => setDetail(!detail)} className="bg-[#71AB651A] flex items-center gap-x-[10px] px-[30px] py-[14px] rounded-[8px] border border-[#71AB65]">
                            <span className="font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#71AB65]">Tafsilot</span>
                            <img src="/arrow-left-green.svg" alt="" />
                        </button>
                        <button className="bg-[#C24B511A] flex items-center gap-x-[10px] px-[30px] py-[14px] rounded-[8px] border border-[#C24B51]">
                            <span className="font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#C24B51]">Bekor qilish</span>
                            <img src="/x-mark-red.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className={detail ? "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] flex flex-col rounded-[10px] border border-[#CFCFCF]" : "hidden"}>
                    <div className="flex items-center justify-between p-5 border-b border-b-[#CFCFCF]">
                        <div className="flex items-center gap-x-[15px]">
                            <div className="bg-[#71AB651A] p-3 rounded-full border border-[#71AB65]">
                                <img src="/med.svg" alt="" />
                            </div>
                            <h3 className="font-spaceGrotesk font-medium text-[20px] leading-[25.52px] text-[#71AB65]">Qabul tafsiloti</h3>
                        </div>
                        <button onClick={() => setDetail(!detail)} className="bg-[#FBFBFB] p-2 rounded-[8px] border border-[#E9E9E9]"><img src="/x-mark.svg" alt="" /></button>
                    </div>
                    <div className="flex flex-col gap-y-[30px] py-[30px] px-5">
                        <div className="flex items-start gap-x-5">
                            <div className="bg-[#FDFDFD] p-2 rounded-full border border-[#CFCFCF]">
                                <img src="/file.svg" alt="" />
                            </div>
                            <div className="flex flex-col gap-y-[30px]">
                                <div className="grid grid-cols-2 gap-x-[80px] gap-y-[30px] p-5 rounded-[10px] border border-[#CFCFCF]">
                                    <div className="flex items-center gap-x-[15px]">
                                        <div className="bg-[#FDFDFD] p-2 rounded-[8px] border border-[#E9E9E9]">
                                            <img src="/steth.svg" alt="" />
                                        </div>
                                        <div className="flex flex-col gap-y-[5px]">
                                            <h4 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Xizmat turi</h4>
                                            <span className="font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#B3B3B3]">Uzi Opka</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-[15px]">
                                        <div className="bg-[#FDFDFD] p-2 rounded-[8px] border border-[#E9E9E9]">
                                            <img src="/steth.svg" alt="" />
                                        </div>
                                        <div className="flex flex-col gap-y-[5px]">
                                            <h4 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Xizmat turi</h4>
                                            <span className="font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#B3B3B3]">Uzi Opka</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-[15px]">
                                        <div className="bg-[#FDFDFD] p-2 rounded-[8px] border border-[#E9E9E9]">
                                            <img src="/steth.svg" alt="" />
                                        </div>
                                        <div className="flex flex-col gap-y-[5px]">
                                            <h4 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Xizmat turi</h4>
                                            <span className="font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#B3B3B3]">Uzi Opka</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-[15px]">
                                        <div className="bg-[#FDFDFD] p-2 rounded-[8px] border border-[#E9E9E9]">
                                            <img src="/steth.svg" alt="" />
                                        </div>
                                        <div className="flex flex-col gap-y-[5px]">
                                            <h4 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Xizmat turi</h4>
                                            <span className="font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#B3B3B3]">Uzi Opka</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-[15px]">
                                        <div className="bg-[#FDFDFD] p-2 rounded-[8px] border border-[#E9E9E9]">
                                            <img src="/steth.svg" alt="" />
                                        </div>
                                        <div className="flex flex-col gap-y-[5px]">
                                            <h4 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Xizmat turi</h4>
                                            <span className="font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#B3B3B3]">Uzi Opka</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-5">
                                    <button className="bg-[#71AB651A] flex items-center gap-x-[10px] px-[30px] py-[14px] rounded-[8px] border border-[#71AB65] font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#71AB65]">
                                        <span>Saqlash</span>
                                        <img src="/check.svg" alt="" />
                                    </button>
                                    <button className="bg-[#2382C31A] flex items-center gap-x-[10px] px-[30px] py-[14px] rounded-[8px] border border-[#2382C3] font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#2382C3]">
                                        <span>Pechat</span>
                                        <img src="/printer.svg" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}