google.load('visualization', '1', {packages: ['corechart', 'bar']});
var graph = 2;

function drawBasic()
{

    if(graph == 1)
    {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Total Violent Crimes'],
            ['1995', 115592],
            ['1998', 79999],
            ['2001', 67002],
            ['2004', 66268],
            ['2007', 73247]
        ]);

        var options = {
            title: 'Violent Crimes by Juveniles',
            chartArea: {width: '50%'},
            hAxis: {
                title: 'Total Violent Crimes',
                minValue: 0
            },
            vAxis: {
                title: 'Year'
            }
        };

        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

        chart.draw(data, options);
        graph++;
    }
    else if(graph == 2)
    {
        var data = google.visualization.arrayToDataTable
        ([
            ['Year', 'Total Money Earned in Billions'],
            ['2012', 78.88],
            ['2013', 93.28],
            ['2014', 102.53],
            ['2015', 115.06]
        ]);

        var options =
        {
            title: 'Video Game Sales',
            chartArea: {width: '50%'},
            hAxis:
            {
                title: 'Total Money Earned in Billions',
                minValue: 0
            },
            vAxis:
            {
                title: 'Year'
            }
        };

        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

        chart.draw(data, options);
        graph--;
    }
}


google.setOnLoadCallback(drawChart);
function drawChart()
{

    var data = google.visualization.arrayToDataTable([
        ['Choice', 'Percentage'],
        ['Strongly Disagree', 1],
        ['Strongly Agree', 7],
        ['Agree',  36],
        ['Neutral', 21],
        ['Disagree', 2]
    ]);

    var options = {
        title: 'Working with Apps is Useful to Teaching'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}