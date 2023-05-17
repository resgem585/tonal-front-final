import TitleTemaz from "../../layouts/TitleTemaz/TitleTemaz";
import TemazCard from "../../components/Temazcal/TemazCards";
import Footer from "../../components/General/Footer";
import TemazIntro from "../../components/Temazcal/TemazIntro"
import Navbar from "../../components/General/Navbar"

const Temaz = () => {
  return (
    <>
    <Navbar/>
    <TitleTemaz />
    
    <TemazIntro />
    <div className="h-screen w-screen bg-blue-500">
    <TemazCard  />
    </div>
    <TemazCard  />
    <Footer />
    </>
  )
}
export default Temaz