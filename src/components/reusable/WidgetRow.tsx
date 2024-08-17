import WidgetCard from "./WidgetCard";

interface widgetRowProps {
    title?: string,
    cards?: any,
    onAddWidgetClicked: () => void,
    onRemoveWidget: (type: string, id: string) => void;
}
const WidgetRow = (props: widgetRowProps) => {
    const { title, cards, onAddWidgetClicked, onRemoveWidget } = props || {};
    if (!cards?.length) return null;
    return (
        <div className="widget-row">
            <p className="font-500">{title}</p>
            <div className="card-container">
                {cards.map((card: any) => (
                    <WidgetCard key={card.id} title={card.title}
                        componentProps={card.data}
                        onAddWidgetClicked={onAddWidgetClicked}
                        noData={!card.type}
                        onRemoveWidget={() => onRemoveWidget(card?.type, card?.id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default WidgetRow;