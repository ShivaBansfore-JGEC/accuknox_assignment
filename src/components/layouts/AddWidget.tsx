import ClearIcon from '@mui/icons-material/Clear';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Checkbox, Button } from '@mui/material';
import { ADD_WIDGET_TABS } from '../../constant/constant';
import { useState } from 'react';
import useAddWidgets from '../../hooks/useAddWidgets';
interface widgetProps {
    onClose: () => void;
}
const AddWidget = (props: widgetProps) => {
    const { onClose } = props || {};
    const [selectedTab, setSelectedTab] = useState<string>("cspm");
    const [Widgets] = useAddWidgets(selectedTab);

    const renderTabs = () => {
        return (
            <Tabs value={selectedTab} onChange={(_, value) => setSelectedTab(value)} aria-label="basic tabs example">
                {
                    ADD_WIDGET_TABS.map(tabDetail => (
                        <Tab sx={{ textTransform: 'none' }} label={tabDetail.label} value={tabDetail.value} />
                    ))
                }
            </Tabs>
        )
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
                <p className='side-bar-title'>Personalize your dashboard by adding the following widget</p>
                {renderTabs()}
                {Widgets.map((ele: any) => (
                    <div className='is-flex'>
                        <Checkbox color="success" defaultChecked />
                        <p>{ele.label}</p>
                    </div>
                ))}
            </div>
            <div className='add-widget-footer'>
                <Button sx={{ textTransform: 'none' }} onClick={onClose} classes={'widget-button'} size="small" variant="outlined">
                    Cancel
                </Button>
                <Button sx={{ textTransform: 'none' }} variant="contained" size="small">Confirm</Button>
            </div>
        </div>
    )
}

export default AddWidget;