import { PAGE_STRING } from "../../constant/constant";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from "react-redux";
import { updateSideDrawer } from "../../redux-store/slice/DashboardSlice";

const TopBar = () => {
    const dispatch = useDispatch();
    const onAddWidgetClicked = () => {
        dispatch(updateSideDrawer());
    }

    return (
        <div className="top-bar">
            <h5>{PAGE_STRING.pageTitle}</h5>
            <Button onClick={onAddWidgetClicked} classes={'widget-button'} size="medium" variant="outlined" endIcon={<AddIcon />}>
                Add Widget
            </Button>
        </div>
    )
}

export default TopBar;