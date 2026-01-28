import Header from "./components/Header"
import Footer from "./components/Footer"
import Github from "./components/Github"
import Note from "./components/Note"
import Resume from "./components/Resume"
import Spotify from "./components/Spotify"
import Cli from "./components/Cli"
import { useContext, useState } from "react"
import { WindowContextData } from "./Context/WindowContext"

import ContextMenu from "./components/ContextMenu"

function App() {

  const { window } = useContext(WindowContextData)
  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 100)
  }

  return (
    <>
      <main className="w-full h-screen relative overflow-hidden">
        <ContextMenu onRefresh={handleRefresh} />
        <img className="w-full h-full object-cover select-none" src="/MAC_OS_Wallpaper.jpg" alt="" />

        <div className={`w-full h-full absolute top-0 left-0 transition-opacity duration-100 ${refreshing ? 'opacity-0' : 'opacity-100'}`}>
          <Header />
          <Footer />
          {window.github && <Github />}
          {window.note && <Note />}
          {window.resume && <Resume />}
          {window.spotify && <Spotify />}
          {window.cli && <Cli />}
        </div>
      </main>
    </>
  )
}

export default App
