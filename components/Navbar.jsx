import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
export default function Navbar() {
    const router = useRouter()
    const [activeLink, setActiveLink] = useState("")
    useEffect(() => {
        setActiveLink(router.pathname)
    }, [router.pathname])
    return (
        <nav className="px-10 py-5 rounded-[10px] flex items-center justify-between border border-[#CFCFCF]">
            <div className="flex items-center gap-x-[120px]">
                <Link className="flex items-center gap-x-5" href={"/qabulxona"}>
                    <img src="/logo.svg" alt="" />
                    <h3 className="font-spaceGrotesk font-bold text-[28px] leading-[35.73px] text-[#000000]">
                        Clinika
                    </h3>
                </Link>
                <div className="flex items-center gap-x-10">
                    <Link
                        className={`flex items-center gap-x-[10px] to-[#FFFFFF] from-[#FBFBFB] px-5 py-[15px] rounded-[14px] border-transparent border-b-[6px] ${activeLink === "/qabulxona"
                            ? "bg-gradient-to-t border-b-[#71AB65]"
                            : ""
                            }`}
                        href={"/qabulxona"}
                    >
                        <img src={activeLink == "/qabulxona"?"/green-rec.svg":"/rec.svg"} alt="" />
                        <h4 className="font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#000000]">
                            Qabulxona
                        </h4>
                    </Link>
                    <Link
                        className={`flex items-center gap-x-[10px] to-[#FFFFFF] from-[#FBFBFB] px-5 py-[15px] rounded-[14px] border-transparent border-b-[6px] ${activeLink === "/hisobot"
                            ? "bg-gradient-to-t border-b-[#71AB65]"
                            : ""
                            }`}
                        href={"/hisobot"}
                    >
                        <img src={activeLink == "/hisobot"?"/green-report.svg":"/report.svg"} alt="" />
                        <h4 className="font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#000000]">
                            Hisobot
                        </h4>
                    </Link>
                    <Link
                        className={`flex items-center gap-x-[10px] to-[#FFFFFF] from-[#FBFBFB] px-5 py-[15px] rounded-[14px] border-transparent border-b-[6px] ${activeLink === "/tanitish"
                            ? "bg-gradient-to-t border-b-[#71AB65]"
                            : ""
                            }`}
                        href={"/tanitish"}
                    >
                        <img src={activeLink == "/tanitish"?"/green-intro.svg":"/intro.svg"} alt="" />
                        <h4 className="font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#000000]">
                            Tanitish
                        </h4>
                    </Link>
                </div>
            </div>
            <form
                className="border-[1px] border-[#CFCFCF] px-5 py-[10px] rounded-[8px] flex items-center gap-x-[10px]"
                action=""
            >
                <button>
                    <img src="/table-search.svg" alt="" />
                </button>
                <input
                    className="outline-none font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#000000]"
                    type="text"
                    placeholder="Qidiruv"
                />
            </form>
        </nav>
    )
}