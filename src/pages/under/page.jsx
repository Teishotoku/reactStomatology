// --- COMPONENTS --- 
import Header from "./comp/header";
import Footer from "./comp/footer";
import Sign from "./comp/sign";

// --- STYLE --- 
import './style/desktop.scss';
import './style/phone.scss';
import './style/pad.scss';

const UNDER = () => {
    return(
        <main>
            <Header/>
            <Footer/>
            <Sign/>
        </main>
    )
};

export default UNDER;