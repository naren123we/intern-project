import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const Rootlayout = () => {

 

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('myBtn').style.display = "block";
    } else {
      document.getElementById('myBtn').style.display = "none";
    }
  }

  window.onscroll = function() {scrollFunction()};
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
    <header>
        <Navbar/>
    </header>
    <main>
        <Outlet/>
        <button   id="myBtn" title="Go to top" onClick={topFunction}>Top</button>
    </main>
    <Footer />
    </div>
  )
}

export default Rootlayout