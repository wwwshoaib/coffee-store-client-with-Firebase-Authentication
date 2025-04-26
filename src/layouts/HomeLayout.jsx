
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";  


const HomeLayout = () => {
    return (
        <div>
            {/* Header */}
            <Header></Header>
            {/* dynamic section */}
            <Outlet></Outlet>
            {/* Footer */}
            <Footer></Footer>
            
        </div>
    );
};

export default HomeLayout;