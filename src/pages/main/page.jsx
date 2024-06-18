// --- COMPONENTS --- 
import DashboardMain from "./comp/dashboard";
import LinksMain from "./comp/links";
import ReviewsMain from "./comp/reviews";
import UsMain from "./comp/us";

// --- STYLE --- 
import './style/desktop.scss';
import './style/phone.scss';
import './style/pad.scss';

const MAIN = () => {

    return (
        <div>
            <DashboardMain/>
            <UsMain/>
            <ReviewsMain/>
            <LinksMain/>
        </div>
    );

}

export default MAIN;