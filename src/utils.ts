import { DEFAULT_WIDGET_LIST, WIDGETS } from "./constant/constant";
import { cloneDeep } from "lodash";


const getCards = (type: string, childs: any, selectedWidget: any) => {
    let cardsData: any = WIDGETS.filter((widget: any) => widget.type === type && selectedWidget[type]?.includes(widget.id)) || [];
    const remainingFallbackItemsCount = childs?.length - cardsData?.length;
    if (remainingFallbackItemsCount) {
        for (let i = 0; i < remainingFallbackItemsCount; i++) {
            cardsData.push({});
        }
    }
    return cardsData;
}

export const getAllWidgets = (selectedWidgets: object) => {
    let allWidgets: any = [];
    DEFAULT_WIDGET_LIST.forEach(defaultWidget => {
        const cards = getCards(defaultWidget.type, defaultWidget.childWidgetIds, selectedWidgets)
        let widgetItem: { title: string, cards: any } = {
            title: defaultWidget.title,
            cards: cards
        };
        allWidgets.push(widgetItem);
    })

    return allWidgets;
}

export const getSearchedWidgets = (searchText: string, allWidgets: any) => {
    if (!allWidgets?.length) return [];
    if (!searchText?.length) return allWidgets;
    else {
        let items: any = [];
        allWidgets.forEach((widget: any) => {
            if (widget?.cards?.length) {
                const filteredCards = widget?.cards?.filter((card: any) =>
                    card.title?.toLowerCase()?.includes(searchText?.toLowerCase())
                );
                if (filteredCards?.length) {
                    const widgetCopy = cloneDeep(widget)
                    widgetCopy.cards = filteredCards;
                    items.push(widgetCopy);
                }
            }
        })
        return items;
    }
}