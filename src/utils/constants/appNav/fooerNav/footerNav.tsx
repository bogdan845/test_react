interface IFooterBaseNav {
    label: string
}

interface IFooterNav extends IFooterBaseNav {
    menu: {
        label: string;
        route: string
    }[]
}

export const FOOTER_NAV: IFooterNav[] = [
    {
        label: "Content",
        menu: [
            {
                label: "Lorem ipsum",
                route: "/"
            },
            {
                label: "Dolor sit",
                route: "/"
            }
        ]
    },
    {
        label: "Information",
        menu: [
            {
                label: "Lorem ipsum",
                route: "/"
            },
            {
                label: "Adispising",
                route: "/"
            }
        ]
    },
    {
        label: "Legal",
        menu: [
            {
                label: "Elit",
                route: "/"
            },
            {
                label: "Do eiusmod",
                route: "/"
            },
            {
                label: "Tempor",
                route: "/"
            }
        ]
    },
    {
        label: "Help",
        menu: [
            {
                label: "Lorem ipsum",
                route: "/"
            },
            {
                label: "Adispicing",
                route: "/"
            }
        ]
    }
]

