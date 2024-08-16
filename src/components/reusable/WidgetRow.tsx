import WidgetCard from "./WidgetCard";

interface widgetRowProps {
    title?: string,
    cards?: any,
    onAddWidgetClicked?: () => void;
}
const WidgetRow = (props: widgetRowProps) => {
    const { title, cards, onAddWidgetClicked } = props || {};
    return (
        <div className="widget-row">
            <p>{title}</p>
            <div className="card-container">
                {cards.map((card: any) => (
                    <WidgetCard title={card.title} onAddWidgetClicked={onAddWidgetClicked} noData={!card.type} />
                ))}
            </div>
        </div>
    )
}

export default WidgetRow;