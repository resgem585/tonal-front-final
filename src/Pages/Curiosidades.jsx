import CuriosidadesCards from "../components/Curiosidades/CuriosidadesCards";
import Footer from "../components/General/Footer";
import Navbar from "../components/General/Navbar"
import TitleCuriosidades from "../layouts/TitleCuriosidades/TitleCuriosidades";

const Curiosidades = () => {
  return (
    <>
    <Navbar/>
    <TitleCuriosidades/>
    <CuriosidadesCards />
    <Footer />
    </>
  )
}
export default Curiosidades