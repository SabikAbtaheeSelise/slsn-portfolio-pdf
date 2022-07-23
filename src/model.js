var MetaData = {
    Date: '12/01/2022',
    User: {
        Name: 'name',
        PhoneNumber: '123',
        Email: 'email@email.com'
    },
    Advisor: {
        Name: 'name',
        PhoneNumber: '123',
        Email: 'email@email.com',
        Designation: 'admin'
    },
    PortfolioPerformanceChart: {
        Data: [
            {
                x: '2019-10-01T00:00:00',
                y: 312312
            }
        ]
    },
    PortfolioCompositionChart: {
        Partner: {
            Colors: ['#5656', '#ffffff'],
            Labels: ['Label 1', 'Label2'],
            Data: [90, 10]
        },
        Asset: {
            Colors: ['#5656', '#ffffff'],
            Labels: ['Label 1', 'Label2'],
            Data: [90, 10]
        },
        Sector: {
            Colors: ['#5656', '#ffffff'],
            Labels: ['Label 1', 'Label2'],
            Data: [90, 10]
        },
        Region: {
            Colors: ['#5656', '#ffffff'],
            Labels: ['Label 1', 'Label2'],
            Data: [90, 10]
        },
        Fund: {
            Colors: ['#5656', '#ffffff'],
            Labels: ['Label 1', 'Label2'],
            Data: [90, 10]
        }
    },
    Profit: 2,
    Balance: 2,
    TotalBuy: 2,
    TotalSell: 0,
    LinkedInvestments: [
        {
            Goal: {
                Title: 'Rsae',
                GoalValue: 80,
                GoalAchieved: 80,
                GoalAchievedColor: '#ffff',
                Year: 2022,
                AccumulatedValue: 23,
                GoalsCategory: 'Homes',
                GoalIconUrl: 'url'
            },
            TotalBuy: 12,
            TotalSell: 31,
            Balance: 23,
            Title: 'title',
            ContractNo: 32132132,
            PartnerImageUrl: 'url',
            ItemId: '38239128312',
            Funds: [
                {
                    FundName: 'Name',
                    IsIn: 'DE000A0F5G98',
                    FundShare: 22,
                    FundBalance: 20
                }
            ]
        }
    ],
    UnLinkedInvestments: [
        {
            TotalBuy: 12,
            TotalSell: 31,
            Balance: 23,
            Title: 'title',
            PartnerImageUrl: 'url',
            ItemId: '0382103821313f4t45',
            Funds: [
                {
                    FundName: 'Name',
                    IsIn: 'DE000A0F5G98',
                    FundShare: 22,
                    FundBalance: 20
                }
            ]
        }
    ]
}

console.log(JSON.stringify(MetaData, null, 2));