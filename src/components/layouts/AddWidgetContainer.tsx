import ClearIcon from '@mui/icons-material/Clear';
import { cloneDeep } from 'lodash';
import { Button } from '@mui/material';
import AddWidget from '../AddWidget';
import { useDispatch, useSelector } from 'react-redux';
import { updateTempSelectedWidget, updateSelectedWidget } from "../../redux-store/slice/DashboardSlice";
interface widgetProps {
    onClose: () => void;
}
const AddWidgetContainer = (props: widgetProps) => {
    const { onClose } = props || {};
    const dispatch = useDispatch();
    const tempSelectedWidget = useSelector((store: { dashboard: { tempSelectedWidget: any } }) => store.dashboard.tempSelectedWidget);


    const onConfirmAddWidgets = () => {
        dispatch(updateSelectedWidget(cloneDeep(tempSelectedWidget)));
        dispatch(updateTempSelectedWidget({}));
        onClose();
    }

    return (
        <div className='add-widget-section'>
            <div className='sidebar-widget-header'>
                <p>Add widget</p>
                <div className='cursor-pointer'>
                    <ClearIcon onClick={onClose} />
                </div>
            </div>
            <div className='sidebar-widget-body'>
                <AddWidget />
            </div>
            <div className='add-widget-footer'>
                <Button sx={{ textTransform: 'none' }} onClick={onClose} classes={'widget-button'} size="small" variant="outlined">
                    Cancel
                </Button>
                <Button onClick={onConfirmAddWidgets} sx={{ textTransform: 'none' }} variant="contained" size="small">Confirm</Button>
            </div>
        </div>
    )
}

export default AddWidgetContainer;