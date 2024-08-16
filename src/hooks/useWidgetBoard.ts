import { useSelector } from "react-redux";
import { DEFAULT_WIDGET_LIST, WIDGETS } from "../constant/constant";
import { getAllWidgets } from "../utils";
import { useMemo } from "react";


const useWidgetBoard = () => {
    const selectedWidget = useSelector((store: { dashboard: { selectedWidget: any } }) => store.dashboard.selectedWidget);
    const allWidgets = useMemo(() => getAllWidgets(selectedWidget), [selectedWidget]);
    return [allWidgets];
}

export default useWidgetBoard;