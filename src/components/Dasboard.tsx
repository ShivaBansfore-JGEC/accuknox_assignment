import { useState } from "react"
import Header from "./layouts/header";
import WidgetsContainer from "./layouts/WidgetsContainer";
const Dashboard = () => {

    return (
        <div className="dashboard">
            <Header />
            <WidgetsContainer />
        </div>
    )
}

export default Dashboard;