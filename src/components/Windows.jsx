import React from 'react'
import { Rnd } from 'react-rnd'
import { useContext } from 'react'
import { WindowContextData } from "../Context/WindowContext"


const Windows = ({ children, name }) => {

    const { setWindow } = useContext(WindowContextData)

    return (
        <Rnd
            default={{
                width: window.innerWidth < 640 ? window.innerWidth * 0.9 : 490,
                height: window.innerWidth < 640 ? window.innerHeight * 0.6 : 350,
                x: window.innerWidth < 640 ? window.innerWidth * 0.05 : 300,
                y: window.innerWidth < 640 ? 60 : 100
            }}
        >
            <div className='windows bg-[#060606] rounded-md w-full h-full text-white flex flex-col overflow-hidden shadow-2xl border border-white/10'>
                <div className="nav w-full flex items-center gap-2 p-2 bg-[#060606] z-10 shrink-0 cursor-move">
                    <div className="dots flex gap-1.5 p-1 no-drag" onMouseDown={(e) => e.stopPropagation()}>
                        <div onClick={() => setWindow((state) => ({ ...state, [name]: false }))} className="dot red bg-red-500 rounded-full h-3 w-3 cursor-pointer hover:bg-red-600 transition-colors"></div>
                        <div className="dot yellow bg-yellow-500 rounded-full h-3 w-3 cursor-pointer hover:bg-yellow-600 transition-colors"></div>
                        <div className="dot green bg-green-500 rounded-full h-3 w-3 cursor-pointer hover:bg-green-600 transition-colors"></div>
                    </div>
                    <div className="title text-white flex-grow text-center pr-12 pointer-events-none select-none"
                    ><p className='text-xs font-medium opacity-80'>ZubairAli - OP</p>
                    </div>
                </div>
                <div className="main-content flex-grow overflow-hidden relative h-[100%]">
                    {children}
                </div>

            </div>
        </Rnd>
    )
}

export default Windows