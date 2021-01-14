// google.charts.load('current', {packages: ['corechart', 'bar']});
// google.charts.setOnLoadCallback(drawStacked);

// function drawStacked() {
//     var data = google.visualization.arrayToDataTable([
//       ['Programming Language', 'Level', { role: 'style' }],
//       ['C', 4.5, 'silver'],
//       ['C++', 4.5, 'silver'],
//       ['Python', 3.5, 'silver'],
//       ['Matlab', 4, 'silver'],
//       ['System Verilog', 4, 'silver'],
//       ['HTML/CSS/JS',2,'silver']
//     ]);

//     var options = {
//       title: '',
//       chartArea: {width: '30%'},
//       bar: {groupWidth: "60%"},
//       legend: { position: "none" },
//       hAxis: {
//         title: '',
//         minValue: 0,
//         maxValue: 5,
//         gridlines: {
//         color: 'transparent'
//         },
//       },
//       vAxis: {
//         title: '',
//         gridlines: {
        
//            color:'transparent'
//         },
//       }
//     };
//     var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
//     chart.draw(data, options);
//   }

$('#bologna-list a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})
