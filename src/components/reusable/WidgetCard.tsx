import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import Chart from "./charts/Chart";
interface widgetCardProps {
    type?: 'string',
    noData?: boolean,
    componentProps?: any,
    title?: string,
    onAddWidgetClicked?: () => void,
    onRemoveWidget?: () => void;
}

const WidgetCard = (props: widgetCardProps) => {
    const { onRemoveWidget, noData, componentProps, title, onAddWidgetClicked } = props || {};
    const renderFallBack = () => {
        return (
            <Button onClick={onAddWidgetClicked} classes={'widget-button'} size="medium" variant="outlined" endIcon={<AddIcon />}>
                Add Widget
            </Button>
        )
    }

    const renderCardDetails = () => {
        return (<>
            <div className="card-header">
                <p>{title}</p>
                <CloseIcon onClick={onRemoveWidget} className="cursor-pointer" />
            </div>
            {componentProps && <Chart options={componentProps} />}
        </>)
    }
    return <div className={`card ${noData ? 'card-fallback' : ''}`}>
        {noData && renderFallBack()}
        {!noData && renderCardDetails()}
    </div>
}

export default WidgetCard;