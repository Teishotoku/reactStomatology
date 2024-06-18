// --- COMPONENTS --- 
import DashboardContact from "./comp/dashboard";
import PlaceContact from "./comp/place";
import SignContact from "./comp/sign";

// --- STYLE --- 
import './style/desktop.scss';
import './style/phone.scss';
import './style/pad.scss';

const CONTACT = () => {
    return(
        <div>
            <DashboardContact/>
            <PlaceContact/>
            <SignContact/>
        </div>
    )
}

export default CONTACT;