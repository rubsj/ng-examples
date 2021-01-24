export interface NavItem {
    displayName: string;
    disabled?: boolean;
    iconName?: string;
    route?: string;
    children?: NavItem[];
} 

export const navItems: NavItem[] = [
    {
        displayName: 'About',
        iconName: 'description',
        route: 'about'
    },
    {
        displayName: 'Mat Apps',
        iconName: 'apps',
        children: [
            {
                displayName: 'Fitness Tracker',
                iconName: 'fitness_center',
                route: 'fitness-tracker'
            }
        ]
    },{
        displayName: 'CDK Concept Samples',
        iconName: 'all_inclusive',
        children: [{
            displayName: 'Overlay Samples',
            iconName:'eject',
            children:[
               {
                displayName : 'Color picker',
                iconName: 'palette',
                route: 'color-picker'
               },
               {
                displayName : 'Mixed Overlay Samples',
                iconName: 'miscellaneous_services',
                route: 'mixed-overlay'
               },
            ]
        }]
    },
    {
        displayName: 'Mat Concept Samples',
        iconName: 'science',
        children: [
            {
                displayName: 'Menu Samples',
                iconName: 'menu_book',
                children: [{
                    displayName: 'Menu Sample 1',
                    iconName:'science',
                    disabled: true,
                },
                {
                    displayName: 'Menu Sample 2',
                    iconName:'science',
                    disabled: true,
                }]

            }, {
                displayName: 'dragDrop Sample',
                iconName: 'drag_indicator',
                disabled: true
            }

        ]
    }
  
];

