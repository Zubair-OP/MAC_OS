import Header from "./components/Header"
import Footer from "./components/Footer"
import Github from "./components/Github"
import Note from "./components/Note"
import Resume from "./components/Resume"
import Spotify from "./components/Spotify"
import Cli from "./components/Cli"

function App() {


  return (
    <>
    <main className="w-full h-screen relative overflow-hidden">
      <img className="w-full h-full object-cover" src="/MAC_OS_Wallpaper.jpg" alt="" />
      <Header />
      <Footer />
      <Github />
      <Note />
      <Resume />
      <Spotify />
      <Cli />
    </main>
    </>
  )
}

export default App
