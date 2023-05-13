import TitleJuego from "../layouts/TitleJuego/TitleJuego";
import JuegoCard from "../components/Juegos/JuegoCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import JuegoIntro from "../components/Juegos/JuegoIntro"

const Juegos = () => {
  return (
    <>
    <Navbar/>
    <TitleJuego />
    <JuegoIntro />
    <JuegoCard />
    <Footer />
    </>
  )
}
export default Juegos