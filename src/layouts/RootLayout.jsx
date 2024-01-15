import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
    return(
        <>
            <Navbar/>
            <div className="w-[1280px] mx-auto">
                <Outlet/>
            </div>
            
            {/* <Footer/> */}
        </>
    )
}

export default RootLayout;