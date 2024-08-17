import CachedIcon from '@mui/icons-material/Cached';
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

    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <div className="top-bar">
            <h4>{PAGE_STRING.pageTitle}</h4>
            <div className='is-flex gap-12'>
                <Button onClick={onAddWidgetClicked} sx={{ textTransform: 'none' }} classes={'widget-button'} variant="outlined" size="medium" endIcon={<AddIcon />}>
                    Add Widget
                </Button>
                <Button onClick={refreshPage} className='refresh-button' variant="outlined" endIcon={<CachedIcon />} />
            </div>
        </div>
    )
}

export default TopBar;