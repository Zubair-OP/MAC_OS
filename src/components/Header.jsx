import React, { useState, useEffect } from 'react'

const Header = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      
      const dayName = days[now.getDay()]
      const monthName = months[now.getMonth()]
      const dateNum = now.getDate()
      
      let hours = now.getHours()
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const ampm = hours >= 12 ? 'PM' : 'AM'
      hours = hours % 12 || 12
      
      // Constructing string: "Sat Jan 17 1:43 PM"
      const timeString = `${dayName} ${monthName} ${dateNum} ${hours}:${minutes} ${ampm}`
      setTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='w-full bg-[#1c1c1c] absolute top-0 left-0 p-1 font-system-ui flex justify-between items-center z-50 text-white'>
      <div className="left flex gap-4 text-white pl-2">
        <img src="/apple.svg" alt="Apple" className="w-4 h-4" />
        <p className='text-xs font-bold'>M Zubair</p>
        <p onClick={() => window.open('https://github.com/Zubair-OP', '_blank')} className='text-xs cursor-pointer hover:text-[lightseagreen] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]'>Github</p>
        <p onClick={() => window.open('https://linkedin.com/in/muhammad-zubair-24793b34a', '_blank')} className='text-xs cursor-pointer hover:text-[lightseagreen] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]'>Linkedin</p>
        <p onClick={() => window.open('Muhammad_Zubair_CV.pdf', '_blank')} className='text-xs cursor-pointer hover:text-[lightseagreen] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]'>Resume</p>
        <p className='text-xs cursor-pointer hover:text-[lightseagreen] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]'>Terminal</p>
      </div>
      <div className="rite flex gap-4 items-center pr-2">
        <img src="/wifi.svg" alt="Wifi" className="w-4 h-4" />
        <p className='text-xs font-medium'>{time}</p>
      </div>
    </div>
  )
}

export default Header
