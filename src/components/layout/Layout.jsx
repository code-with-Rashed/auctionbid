import Navbar from "../navbar/navbar";
import Footer from "../footer/Footer";
import Banner from "../sections/Banner";
import Main from "../sections/Main";

function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
