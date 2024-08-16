export const PAGE_STRING = {
    pageTitle: 'CNAPP Dashboard'
}

export const WIDGET_CATEGORY = {
    CSPM: 'cspm',
    CWPP: 'cwpp',
    REGISTRY_SCAN: 'registry_scan',

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
                id: "cloud_accounts",
                label: "Cloud Accounts"
            },
            {
                id: "cloud_account_risk_assesment",
                label: "Cloud Account Risk Assessment"
            },
        ]
    },
    {
        type: WIDGET_CATEGORY.CWPP,
        childWidget: [
            {
                id: "specific_alerts",
                label: "Specific Alerts"
            },
            {
                id: "workload_alerts",
                label: "Warkload Alerts"
            },
        ]
    },
    {
        type: WIDGET_CATEGORY.REGISTRY_SCAN,
        childWidget: [
            {
                id: "image_risk_assesment",
                label: "Image Risk Assessment"
            },
            {
                id: "image_security_issue",
                label: "Image Security Issue"
            },
        ]
    },

]