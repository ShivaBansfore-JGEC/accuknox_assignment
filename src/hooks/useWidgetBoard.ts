import { useSelector } from "react-redux";
import { DEFAULT_WIDGET_LIST, WIDGETS } from "../constant/constant";
import { getAllWidgets, getSearchedWidgets } from "../utils";
import { useMemo } from "react";


const useWidgetBoard = () => {
    const selectedWidget = useSelector((store: { dashboard: { selectedWidget: any } }) => store.dashboard.selectedWidget);
    const searchedText = useSelector((store: { dashboard: { search: string } }) => store.dashboard.search);

    const allWidgets = useMemo(() => getAllWidgets(selectedWidget), [selectedWidget]);
    console.log({ allWidgets, searchedText })
    const searchedWidgets = getSearchedWidgets(searchedText, allWidgets);

    return [searchedWidgets];
}

export default useWidgetBoard;