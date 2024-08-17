import { useMemo, useEffect } from "react";
import { cloneDeep } from "lodash";
import { WIDGETS_FOR_ADDING } from "../constant/constant";
import { useDispatch, useSelector } from "react-redux";
import { updateTempSelectedWidget } from "../redux-store/slice/DashboardSlice";


const useAddWidgets = (selectedTab: string) => {
    const dispatch = useDispatch();
    const tempSelectedWidget = useSelector((store: { dashboard: { tempSelectedWidget: any } }) => store.dashboard.tempSelectedWidget);
    const finalSelectedWidget = useSelector((store: { dashboard: { selectedWidget: any } }) => store.dashboard.selectedWidget);
    console.log({ finalSelectedWidget })

    const widgets = useMemo(() => {
        return WIDGETS_FOR_ADDING.find((widget: any) => widget.type === selectedTab)?.childWidget || [];
    }, [selectedTab]);

    const selectedWidget = useMemo(() => tempSelectedWidget?.[selectedTab] || [], [selectedTab, tempSelectedWidget])

    const onWidgetSelected = (id: string) => {
        const newTempSelectedWidget = { ...tempSelectedWidget };
        if (newTempSelectedWidget[selectedTab]) {
            let selectedWidgets = [...newTempSelectedWidget[selectedTab]] || [];
            if (Array.isArray(selectedWidgets) && !selectedWidgets?.includes(id))
                selectedWidgets.push(id)
            else
                selectedWidgets = selectedWidgets?.filter((widgetId: string) => widgetId !== id)
            newTempSelectedWidget[selectedTab] = selectedWidgets;
        } else {
            newTempSelectedWidget[selectedTab] = [id]
        }
        dispatch(updateTempSelectedWidget(newTempSelectedWidget));
    }

    const setInitialState = () => {
        dispatch(updateTempSelectedWidget(cloneDeep(finalSelectedWidget)));
    }

    useEffect(() => {
        if (finalSelectedWidget && Object.keys(finalSelectedWidget)) setInitialState();
    }, [finalSelectedWidget])



    return [widgets, selectedWidget, onWidgetSelected]

}

export default useAddWidgets;
