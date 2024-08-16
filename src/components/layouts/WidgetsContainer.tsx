import { useDispatch, useSelector } from "react-redux";
import SideDrawer from "../reusable/SideDrawer";
import TopBar from "./TopBar";
import AddWidget from "./AddWidget";
import { updateSideDrawer } from "../../redux-store/slice/DashboardSlice";

const WidgetsContainer = () => {
    const dispatch = useDispatch();
    const sideDrawerStatus = useSelector((store: { dashboard: { openSideDrawer: boolean } }) => store.dashboard.openSideDrawer)
    const toggleSideBar = () => {
        dispatch(updateSideDrawer())
    }

    return (
        <div className="widgets-container">
            <TopBar />
            <SideDrawer open={sideDrawerStatus} toggle={toggleSideBar}>
                <AddWidget onClose={toggleSideBar} />
            </SideDrawer>
        </div>
    )
}

export default WidgetsContainer;