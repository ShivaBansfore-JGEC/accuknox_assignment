
import { useDispatch } from "react-redux";
import { DEFAULT_WIDGET_LIST } from "../../constant/constant";
import useWidgetBoard from "../../hooks/useWidgetBoard";
import WidgetRow from "../reusable/WidgetRow";
import { updateSideDrawer } from "../../redux-store/slice/DashboardSlice";
const WidgetBoard = () => {
    const dispatch = useDispatch();
    const [allWidgets] = useWidgetBoard();

    const onAddWidgetClicked = () => {
        dispatch(updateSideDrawer());
    }

    return (
        <div>
            {allWidgets.map((widget: any) => (
                <WidgetRow onAddWidgetClicked={onAddWidgetClicked} title={widget.title} cards={widget.cards} />
            ))}
        </div>
    )
}

export default WidgetBoard;