{% assign compositionChartDataPartner = MetaData.PortfolioCompositionChart[0].Partner %}
{% assign compositionChartDataAsset = MetaData.PortfolioCompositionChart[0].Asset %}
{% assign compositionChartDataFund = MetaData.PortfolioCompositionChart[0].Fund %}
{% assign compositionChartDataRegion = MetaData.PortfolioCompositionChart[0].Region %}
{% assign compositionChartDataSector = MetaData.PortfolioCompositionChart[0].Sector %}

var partnerChartDataSets = {
    labels: [
        {% for datum in compositionChartDataPartner.Labels %}
                '{{datum}}'
        {% unless forloop.last %},{% endunless %}
        {% endfor %}
    ],
    datasets: [{
        label: 'Partners',
        data: [
            {% for datum in compositionChartDataPartner.Data %}
                '{{datum}}'
            {% unless forloop.last %},{% endunless %}
            {% endfor %}
        ],
        backgroundColor: [
        {% for datum in compositionChartDataPartner.Colors %}
            '{{datum}}'
        {% unless forloop.last %},{% endunless %}
        {% endfor %}
        ],
        hoverOffset: 4
    }]
};

var assetChartDataSets = {
    labels: [
        {% for datum in compositionChartDataAsset.Labels %}
                '{{datum}}'
        {% unless forloop.last %},{% endunless %}
        {% endfor %}
    ],
    datasets: [{
        label: 'Partners',
        data: [
            {% for datum in compositionChartDataAsset.Data %}
                '{{datum}}'
            {% unless forloop.last %},{% endunless %}
            {% endfor %}
        ],
        backgroundColor: [
        {% for datum in compositionChartDataAsset.Colors %}
            '{{datum}}'
        {% unless forloop.last %},{% endunless %}
        {% endfor %}
        ],
        hoverOffset: 4
    }]
};

var sectorChartDataSets = {
    labels: [
        {% for datum in compositionChartDataSector.Labels %}
                '{{datum}}'
        {% unless forloop.last %},{% endunless %}
        {% endfor %}
    ],
    datasets: [{
        label: 'Partners',
        data: [
            {% for datum in compositionChartDataSector.Data %}
                '{{datum}}'
            {% unless forloop.last %},{% endunless %}
            {% endfor %}
        ],
        backgroundColor: [
        {% for datum in compositionChartDataSector.Colors %}
            '{{datum}}'
        {% unless forloop.last %},{% endunless %}
        {% endfor %}
        ],
        hoverOffset: 4
    }]
};

var regionChartDataSets = {
    labels: [
        {% for datum in compositionChartDataRegion.Labels %}
                '{{datum}}'
        {% unless forloop.last %},{% endunless %}
        {% endfor %}
    ],
    datasets: [{
        label: 'Partners',
        data: [
            {% for datum in compositionChartDataRegion.Data %}
                '{{datum}}'
            {% unless forloop.last %},{% endunless %}
            {% endfor %}
        ],
        backgroundColor: [
        {% for datum in compositionChartDataRegion.Colors %}
            '{{datum}}'
        {% unless forloop.last %},{% endunless %}
        {% endfor %}
        ],
        hoverOffset: 4
    }]
};

var fundChartDataSets = {
    labels: [
        {% for datum in compositionChartDataFund.Labels %}
                '{{datum}}'
        {% unless forloop.last %},{% endunless %}
        {% endfor %}
    ],
    datasets: [{
        label: 'Partners',
        data: [
            {% for datum in compositionChartDataFund.Data %}
                '{{datum}}'
            {% unless forloop.last %},{% endunless %}
            {% endfor %}
        ],
        backgroundColor: [
        {% for datum in compositionChartDataFund.Colors %}
            '{{datum}}'
        {% unless forloop.last %},{% endunless %}
        {% endfor %}
        ],
        hoverOffset: 4
    }]
};

console.log(partnerChartDataSets);
console.log(assetChartDataSets);
console.log(sectorChartDataSets);
console.log(regionChartDataSets);
console.log(fundChartDataSets);

const legendOpts = {
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      fontFamily: '"FrutigerCE", sans-serif',
      usePointStyle: true,
      boxWidth: 50
    }      
   }
};
const partnerPieChartConfig = {
  type: 'doughnut',
  data: {
      labels: partnerChartDataSets.labels,
        datasets: partnerChartDataSets.datasets
  },
  options: legendOpts
};

const assetPieChartConfig = {
  type: 'doughnut',
  data: {
      labels: assetChartDataSets.labels,
        datasets: assetChartDataSets.datasets
  },
  options: legendOpts
};

const fundPieChartConfig = {
  type: 'doughnut',
  data: {
    labels: fundChartDataSets.labels,
      datasets: fundChartDataSets.datasets
    },
  options: legendOpts
};

const regionPieChartConfig = {
  type: 'doughnut',
  data: {
    labels: regionChartDataSets.labels,
      datasets: regionChartDataSets.datasets
    },
  options: legendOpts
};

const sectorPieChartConfig = {
  type: 'doughnut',
  data: {
    labels: sectorChartDataSets.labels,
      datasets: sectorChartDataSets.datasets
},
  options: legendOpts
};

const partnerPieChartCanvas = document.querySelector('#partnerPieChart');
const assetPieChartCanvas = document.querySelector('#assetPieChart');
const fundPieChartCanvas = document.querySelector('#fundPieChart');
const regionPieChartCanvas = document.querySelector('#regionPieChart');
const sectorPieChartCanvas = document.querySelector('#sectorPieChart');

const partnerPieChart = new Chart(partnerPieChartCanvas, partnerPieChartConfig);
const assetPieChart = new Chart(assetPieChartCanvas, assetPieChartConfig);
const fundPieChart = new Chart(fundPieChartCanvas, fundPieChartConfig);
const regionPieChart = new Chart(regionPieChartCanvas, regionPieChartConfig);
const sectorPieChart = new Chart(sectorPieChartCanvas, sectorPieChartConfig);

{% assign portfolioPerformanceChartDataBalance = MetaData.PortfolioPerformanceChart[0].Data %}
{% assign portfolioPerformanceChartDataBuySell = MetaData.PortfolioPerformanceChart[1].Data %}

var investmentLineChartDataBalance = [
    {% for datum in portfolioPerformanceChartDataBalance %}
        {
            x: '{{datum.X}}',
            y: '{{datum.Y}}'
        }
    {% unless forloop.last %},{% endunless %}
    {% endfor %}  
];
var investmentLineChartDataBuySell = [
    {% for datum in portfolioPerformanceChartDataBuySell %}
        {
            x: '{{datum.X}}',
            y: '{{datum.Y}}'
        }
    {% unless forloop.last %},{% endunless %}
    {% endfor %}  
];

var lineChartRangeMap = {
    '3m': 3,
    '1y': 4,
    '3y': 6,
    '5y': 10,
    'all': 25 
};
var lineChartRangeMapKey = '{{MetaData.Overview[0].Date}}';
var lineChartRange = lineChartRangeMap[lineChartRangeMapKey];
const finalDateTickRange = moment(investmentLineChartDataBalance[0].x).toISOString();

const investmentLineChartConfig = {
  type: 'line',
          data: {
            labels: ['Zostatok', 'Vklady - Výbery'],
            datasets: [
              {
                  data: investmentLineChartDataBalance,
                  "label": "Zostatok",
                  "fill": true,
                  "lineTension": 0,
                  "borderWidth": 2.5,
                  "pointBorderWidth": 0.1,
                  "pointRadius": 1,
                  "pointHoverRadius": 8,
                  "pointHoverBorderColor": "#FFFFFF",
                  "pointHoverBorderWidth": 4,
                  "hidden": false,
                  
                     "borderColor": "#15847B",
                        "backgroundColor": "rgba(21, 132, 123, 0.1)",
                        "borderWidth": 2,
                        "pointBackgroundColor": "#15847B"
                  
              },
              {
                  "data": investmentLineChartDataBuySell,
                  "label": "Vklady - Výbery",
                  "fill": true,
                  "lineTension": 0,
                  "borderWidth": 2.5,
                  "pointBorderWidth": 0.1,
                  "pointRadius": 1,
                  "pointHoverRadius": 8,
                  "pointHoverBorderColor": "#FFFFFF",
                  "pointHoverBorderWidth": 4,
                  "hidden": true,
                  "steppedLine": true,
                  "borderColor": "#b4b4b4",
                  "backgroundColor": "rgba(180, 180, 180, 0.1)",
                  "borderWidth": 2,
                  "pointBackgroundColor": "#b4b4b4"
              }
          ]
          },
          options: 
            {
              "responsive": true,
              "maintainAspectRatio": false,
              "layout": {
                  "padding": {
                      "left": 0,
                      "right": 0,
                      "top": 0,
                      "bottom": 0
                  }
              },
              "legend": {
                  "display": true,
                  "position": "bottom",
                  "align": "center",
                  "labels": {
                      "usePointStyle": true,
                      "fontFamily": '"FrutigerCE", sans-serif'
                  }
              },
              "scales": {
                  "xAxes": [
                      {
                          "type": "time",
                          "time": {
                              "unit": "day",
                              "displayFormats": {
                                  "day": "MM.YYYY",
                                  "month": "MMM YYYY"
                              }
                          },
                          "display": true,
                          "gridLines": {
                              "display": true,
                              "color": "#f0f0f0"
                          },
                          "ticks": {
                              "fontFamily": '"FrutigerCE", sans-serif',
                              "fontSize": 12,
                              "fontColor": "#B4B4B4",
                              "source": "auto",
                              "autoSkip": false,
                              callback: (value, index, values) => {
                                let length = values.length;
                                let tickCount = lineChartRange;
                                let gap = Math.round(length / (tickCount - 1));
                                if (
                                  index % gap == 0 ||
                                  index == 0 ||
                                  (index == values.length - 1 && tickCount < 20)
                                ) {
                                  return value;
                                }
                              },
                              min: finalDateTickRange,
                              maxTicksLimit: 100000
                          }
                      }
                  ],
                  "yAxes": [
                      {
                          "display": true,
                          "gridLines": {
                              "display": true,
                              "color": "#f0f0f0"
                          },
                          "ticks": {
                              "fontFamily": '"FrutigerCE", sans-serif',
                              "fontSize": 12,
                              "fontColor": "#B4B4B4"
                          }
                      }
                  ]
              },
              "elements": {
                  "point": {
                      "radius": 0,
                      "hoverRadius": 4,
                      "hoverBorderWidth": 2,
                      "hitRadius": 8
                  },
                  "line": {
                      "tension": 0,
                      "fill": "bottom",
                      "borderWidth": 2
                  }
              }
          },
};

const investmentLineChartCanvas = document.querySelector('#investmentLineChart');
const investmentLineChart = new Chart(investmentLineChartCanvas, investmentLineChartConfig);
const dateTimeSpan = document.querySelector('#setDateTime');
const dateNow = moment(new Date(Date.now())).format('d.m.yyyy');
dateTimeSpan.innerHTML = dateNow;