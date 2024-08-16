import { useMemo } from "react";
import { WIDGETS_FOR_ADDING } from "../constant/constant";


const useAddWidgets = (selectedTab: string) => {

    //update selected widgets to store for temperary
    //return childrenWidgets to render in UI

    const Widgets = useMemo(() => {
        return WIDGETS_FOR_ADDING.find((widget: any) => widget.type === selectedTab)?.childWidget || [];
    }, [selectedTab])

    return [Widgets]

}

export default useAddWidgets;