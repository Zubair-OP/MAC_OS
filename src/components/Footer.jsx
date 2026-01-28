import { useContext } from 'react'
import { WindowContextData } from "../Context/WindowContext"

const Footer = () => {

  const { window: windowState, setWindow } = useContext(WindowContextData)


  return (
    <div className='footer absolute bottom-2 left-1/2 transform -translate-x-1/2 w-fit'>
      <div className="flex justify-center items-center gap-5 p-3">
        <img onClick={() => setWindow((state) => ({ ...state, github: true }))} className='icon icon transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] github' src="/github.svg" alt="GitHub" />
        <img onClick={() => setWindow((state) => ({ ...state, note: true }))} className='icon icon transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] note' src="note.svg" alt="Notes" />
        <img onClick={() => window.open('Muhammad_Zubair_CV.pdf', '_blank')} className='icon icon transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] pdf' src="pdf.svg" alt="PDF" />
        <img onClick={() => window.open('https://calendar.google.com', '_blank')} className='icon icon transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] calender' src="calender.svg" alt="Calendar" />
        <img onClick={() => setWindow((state) => ({ ...state, spotify: true }))} className='icon icon transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] spotify' src="spotify.svg" alt="Spotify" />
        <img className='icon icon transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] mail' src="mail.svg" alt="Mail" />
        <img onClick={() => {
          window.open('https://www.linkedin.com/in/muhammad-zubair-24793b34a', '_blank')
        }} className='icon icon transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] link' src="link.svg" alt="Link" />
        <img onClick={() => setWindow((state) => ({ ...state, cli: true }))} className='icon icon transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] cli' src="cli.svg" alt="Terminal" />
      </div>
    </div>
  )
}

export default Footer