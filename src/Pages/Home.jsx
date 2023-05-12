import HomeBanner from "../components/Home/HomeBanner"
import HomeCards from "../components/Home/HomeCards"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

import './../styles/home.scss'


const Home = () => {
  return (
    <>
    <Navbar/>
    <HomeBanner />
    <HomeCards />
    <Footer />
    
    </>
  )
}
export default Home