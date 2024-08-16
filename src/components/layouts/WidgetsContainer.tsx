import { useDispatch, useSelector } from "react-redux";
import SideDrawer from "../reusable/SideDrawer";
import TopBar from "./TopBar";
import AddWidgetContainer from "./AddWidgetContainer";
import { updateSideDrawer, updateTempSelectedWidget } from "../../redux-store/slice/DashboardSlice";
import WidgetBoard from "./WidgetBoard";

const WidgetsContainer = () => {
    const dispatch = useDispatch();
    const sideDrawerStatus = useSelector((store: { dashboard: { openSideDrawer: boolean } }) => store.dashboard.openSideDrawer)
    const toggleSideBar = () => {
        dispatch(updateSideDrawer());
        dispatch(updateTempSelectedWidget({}));
    }

    return (
        <div className="widgets-container">
            <TopBar />
            <WidgetBoard />
            <SideDrawer open={sideDrawerStatus} toggle={toggleSideBar}>
                <AddWidgetContainer onClose={toggleSideBar} />
            </SideDrawer>
        </div>
    )
}

export default WidgetsContainer;