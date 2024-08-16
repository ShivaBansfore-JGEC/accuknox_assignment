import Drawer from '@mui/material/Drawer';
import React from 'react';
interface sideDrawerProps {
    toggle: () => void;
    open: boolean,
    children: React.ReactNode
}
const SideDrawer = (props: sideDrawerProps) => {
    const { open, toggle } = props || {}
    return (
        <div>
            <Drawer
                anchor={'right'}
                open={open}
                onClose={toggle}
                classes={{
                    paper: "side-drawer",
                }}
            >
                {props.children}
            </Drawer>
        </div>
    )
}

export default SideDrawer;