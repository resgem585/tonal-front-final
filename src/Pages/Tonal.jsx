import Footer from "../components/General/Footer"
import Navbar from "../components/General/Navbar"
import TonalCards from "../components/Tonal/TonalCards"
import TonalIntro from "../components/Tonal/TonalIntro"
import TitleTonal from "../layouts/TitleTonal"
const Tonal = () => {
  return (
    <>
    <Navbar/>
    <TitleTonal />
    <TonalIntro/>
    <TonalCards />
    <Footer/>
    </>
  )
}
export default Tonal