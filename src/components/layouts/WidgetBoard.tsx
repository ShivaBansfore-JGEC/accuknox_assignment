
import { useDispatch, useSelector } from "react-redux";
import useWidgetBoard from "../../hooks/useWidgetBoard";
import WidgetRow from "../reusable/WidgetRow";
import { updateSideDrawer, updateSelectedWidget } from "../../redux-store/slice/DashboardSlice";
const WidgetBoard = () => {
    const dispatch = useDispatch();
    const selectedWidget = useSelector((store: { dashboard: { selectedWidget: any } }) => store.dashboard.selectedWidget);
    const [allWidgets] = useWidgetBoard();

    const onAddWidgetClicked = () => {
        dispatch(updateSideDrawer());
    }

    const onRemoveWidget = (type: string, id: string) => {
        const updatedSelectedWidget = { ...selectedWidget };
        const selectedIds = updatedSelectedWidget[type] || []
        if (selectedIds && selectedIds?.length) {
            updatedSelectedWidget[type] = selectedIds.filter((widgetId: string) => widgetId !== id);
        }
        dispatch(updateSelectedWidget(updatedSelectedWidget))
    }

    return (
        <div className="widget-board">
            {allWidgets.map((widget: any) => (
                <WidgetRow key={widget.title}
                    onAddWidgetClicked={onAddWidgetClicked}
                    onRemoveWidget={onRemoveWidget}
                    title={widget.title}
                    cards={widget.cards}
                />
            ))}
        </div>
    )
}

export default WidgetBoard;