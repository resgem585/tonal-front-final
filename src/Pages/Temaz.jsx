import TitleTemaz from "../layouts/TitleTemaz/TitleTemaz";
import TemazCard from "../components/Temazcal/TemazCards";
import Footer from "../components/Footer";
import TemazIntro from "../components/Temazcal/TemazIntro"
import Navbar from "../components/Navbar"

const Temaz = () => {
  return (
    <>
    <Navbar/>
    <TitleTemaz />
    <TemazIntro />
    <TemazCard />
    <Footer />
    </>
  )
}
export default Temaz