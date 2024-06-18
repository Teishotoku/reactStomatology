// --- COMPONENTS --- 
import DashboardPay from "./comp/dashboard";
import WaysPay from "./comp/ways";
import DiagramaPay from "./comp/diagrama";

// --- STYLE --- 
import './style/desktop.scss';
import './style/phone.scss';
import './style/pad.scss';

const PAY = () => {

    return (
        <div>
            <DashboardPay/>
            <WaysPay/>
            <DiagramaPay/>
        </div>
    );

}

export default PAY;
