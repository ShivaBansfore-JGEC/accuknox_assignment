import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Checkbox } from '@mui/material';
import { useState } from 'react';
import useAddWidgets from '../hooks/useAddWidgets';
import { ADD_WIDGET_TABS } from '../constant/constant';

const AddWidget = () => {
    const [selectedTab, setSelectedTab] = useState<string>("cspm");
    const [widgets, selectedWidget, onWidgetSelected] = useAddWidgets(selectedTab);


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
        <>
            <p className='side-bar-title'>Personalize your dashboard by adding the following widget</p>
            {renderTabs()}
            <div className='widget-selector-container'>
                {widgets.map((ele: any) => (
                    <div className='is-flex check-box-wrapper'>
                        <Checkbox onChange={() => onWidgetSelected(ele.id)} color="success" checked={selectedWidget?.includes(ele.id)} />
                        <p>{ele.label}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default AddWidget;