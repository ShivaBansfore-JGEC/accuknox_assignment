export const PAGE_STRING = {
    pageTitle: 'CNAPP Dashboard'
}

export const WIDGET_CATEGORY = {
    CSPM: 'cspm',
    CWPP: 'cwpp',
    REGISTRY_SCAN: 'registry_scan',

}

export const WIDGET_IDS = {
    CLOUD_ACCOUNTS: 'cloud_accounts',
    CLOUD_ACCOUNT_RISK_ASSESMENT: 'cloud_account_risk_assesment',
    SPECIFIC_ALERTS: "specific_alerts",
    WORKLOAD_ALERTS: "workload_alerts",
    IMAGE_RISK_ASSESSMENT: "image_risk_assesment",
    IMAGE_SECURITY_ISSUE: "image_security_issue"

}

export const ADD_WIDGET_TABS = [
    {
        label: 'CSPM',
        value: WIDGET_CATEGORY.CSPM
    },
    {
        label: 'CWPP',
        value: WIDGET_CATEGORY.CWPP
    },
    {
        label: 'Registry Scan',
        value: WIDGET_CATEGORY.REGISTRY_SCAN
    }
]


export const WIDGETS_FOR_ADDING = [
    {
        type: WIDGET_CATEGORY.CSPM,
        childWidget: [
            {
                id: WIDGET_IDS.CLOUD_ACCOUNTS,
                label: "Cloud Accounts"
            },
            {
                id: WIDGET_IDS.CLOUD_ACCOUNT_RISK_ASSESMENT,
                label: "Cloud Account Risk Assessment"
            },
        ]
    },
    {
        type: WIDGET_CATEGORY.CWPP,
        childWidget: [
            {
                id: WIDGET_IDS.SPECIFIC_ALERTS,
                label: "Top 5 Namespace Specific Alerts"
            },
            {
                id: WIDGET_IDS.WORKLOAD_ALERTS,
                label: "Warkload Alerts"
            },
        ]
    },
    {
        type: WIDGET_CATEGORY.REGISTRY_SCAN,
        childWidget: [
            {
                id: WIDGET_IDS.IMAGE_RISK_ASSESSMENT,
                label: "Image Risk Assessment"
            },
            {
                id: WIDGET_IDS.IMAGE_SECURITY_ISSUE,
                label: "Image Security Issue"
            },
        ]
    },

]

/*

[
    {
        [type]: [1,2,3],

    }

]

Default list: [
    {
        type: '',
        childs: [1,2,3]
    },
    {
        type: '',
        childs: [1,2,3]
    },
    {
        type: '',
        childs: [1,2,3]
    },
]


export const WIDGETS = [

{

}

]

*/

export const DEFAULT_WIDGET_LIST = [
    {
        title: 'CSPM Executive Dashboard',
        type: WIDGET_CATEGORY.CSPM,
        childWidgetIds: [WIDGET_IDS.CLOUD_ACCOUNTS, WIDGET_IDS.CLOUD_ACCOUNT_RISK_ASSESMENT]
    },
    {
        title: 'CWPP Dashboard',
        type: WIDGET_CATEGORY.CWPP,
        childWidgetIds: [WIDGET_IDS.SPECIFIC_ALERTS, WIDGET_IDS.WORKLOAD_ALERTS]
    },
    {
        title: 'Registry Scan',
        type: WIDGET_CATEGORY.REGISTRY_SCAN,
        childWidgetIds: [WIDGET_IDS.IMAGE_RISK_ASSESSMENT, WIDGET_IDS.IMAGE_SECURITY_ISSUE]
    }
]

export const WIDGETS = [
    {
        type: WIDGET_CATEGORY.CSPM,
        title: 'Cloud accounts',
        id: WIDGET_IDS.CLOUD_ACCOUNTS,
        data: {}
    },
    {
        type: WIDGET_CATEGORY.CSPM,
        title: 'Cloud Account Risk Assessment',
        id: WIDGET_IDS.CLOUD_ACCOUNT_RISK_ASSESMENT,
        data: {}
    },
    {
        type: WIDGET_CATEGORY.CWPP,
        title: 'Specific Alerts',
        id: WIDGET_IDS.SPECIFIC_ALERTS,
        data: {}
    },
    {
        type: WIDGET_CATEGORY.CWPP,
        title: 'Workload Alerts',
        id: WIDGET_IDS.WORKLOAD_ALERTS,
        data: {}
    },
    {
        type: WIDGET_CATEGORY.REGISTRY_SCAN,
        title: 'Image Risk Assessment',
        id: WIDGET_IDS.IMAGE_RISK_ASSESSMENT,
        data: {}
    },
    {
        type: WIDGET_CATEGORY.CSPM,
        title: 'Image Security Issue',
        id: WIDGET_IDS.IMAGE_SECURITY_ISSUE,
        data: {}
    },

]