import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
interface widgetCardProps {
    type?: 'string',
    noData?: boolean,
    componentProps?: any,
    title?: string,
    onAddWidgetClicked?: () => void;
}

const WidgetCard = (props: widgetCardProps) => {
    const { type, noData, componentProps, title, onAddWidgetClicked } = props || {};
    const renderFallBack = () => {
        return (
            <Button onClick={onAddWidgetClicked} classes={'widget-button'} size="medium" variant="outlined" endIcon={<AddIcon />}>
                Add Widget
            </Button>
        )
    }
    const renderCardDetails = () => {
        return (<>
            <p>{title}</p>
        </>)
    }
    return <div className={`card ${noData ? 'card-fallback' : ''}`}>
        {noData && renderFallBack()}
        {!noData && renderCardDetails()}
    </div>
}

export default WidgetCard;