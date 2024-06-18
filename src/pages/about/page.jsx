// --- COMPONENTS --- 
import DashboardAbout from "./comp/dashboard";
import HistoryAbout from "./comp/history";
import TeamAbout from "./comp/team";

// --- STYLE --- 
import './style/desktop.scss';
import './style/phone.scss';
import './style/pad.scss';

const ABOUT = () => {
    return (
        <div>
            <DashboardAbout/>
            <TeamAbout/>
            <HistoryAbout/>
        </div>
    )
}

export default ABOUT;