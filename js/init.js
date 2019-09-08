var cdata = [['Pártok', 'Szavazatarány (%)', {role: "style" },{ role: 'annotation' }]];
var cdata2 = [['Pártok', 'Szavazatarány (%)', {role: "style" },{ role: 'annotation' }]];
var cdata3 = [['Pártok', 'Szavazatarány (%)', {role: "style" },{ role: 'annotation' }]];
var compare = function (a, b) {
    if ( typeof a[1] === "string" ) {
        return -1;
    }
    if ( typeof b[1] === "string" ) {
        return 1;
    }
    if ( a[1] < b[1] ) {
        return 1;
    }
    if ( a[1] > b[1] ) {
        return -1;
    }
    return 0;
}

initChart = function() {
    $.ajax({
        type: "GET",
        url: "2014_2018_2019_charts.csv",
        dataType: "text",
        success: function(data) {
            var allTextLines = data.split(/\r\n|\n/);
            var headers = allTextLines[0].split(',');
            var lines = [];
            for (var i=1; i<allTextLines.length; i++) {
                var data = allTextLines[i].split(',');
                if (data.length == headers.length) {
                    var tarr = [];
                    for (var j=0; j<headers.length; j++) {
                        tarr.push(data[j]);
                    }
                    lines.push(tarr);
                }
            }
            for ( var i = 0; i < lines.length; i++ ) {
                if ( lines[i][0] == window.location.href.substring(window.location.href.lastIndexOf('/') + 1) ) {
                    for ( var j = 0; j < 3; j++ )
                    cdata.push([lines[i][20+(j*3)],Math.round(parseFloat(lines[i][22+(j*3)])*1000)/1000,lines[i][21+(j*3)],parseFloat(lines[i][22+(j*3)]*100).toFixed(1)+"%"]);
                    cdata.push(["Többi jelölt összesen",(Math.round(parseFloat(lines[i][29])*1000)/1000),lines[i][30],parseFloat(lines[i][29]*100).toFixed(1)+"%"])
                    var ogycolors=["orange","lightGreen","red"   ,"darkBlue","grey",  "purple","black","lightGrey","pink"];
                    var ogyparts =["Fidesz","LMP"  ,"MSZP-P","DK",       "Jobbik","Momentum","Együtt","MKKP","Egyéb"];
                    var epcolors=["grey", "orange", "purple", "darkGreen", "red", "lightGreen", "darkBlue", "darkRed", "lightGrey"];
                    var epparts =["Jobbik", "Fidesz", "Momentum", "Mi Hazánk", "MSZP-P", "LMP", "DK", "Munkáspárt", "MKKP"]
                    for ( var j = 0; j < 9; j++ ) {
                        cdata2.push([ogyparts[j],Math.round(parseFloat(lines[i][2+(j)])*1000)/1000,ogycolors[j],parseFloat(lines[i][2+(j)]*100).toFixed(1)+"%"]);
                    }
                    for ( var j = 0; j < 9; j++ ) {
                        cdata3.push([epparts[j],Math.round(parseFloat(lines[i][11+(j)])*1000)/1000,epcolors[j],parseFloat(lines[i][11+(j)]*100).toFixed(1)+"%"]);
                    }
                    break;
                }
            }
		        cdata.sort( compare );
		        cdata = google.visualization.arrayToDataTable(cdata);
		        cdata2.sort( compare );
		        cdata2 = google.visualization.arrayToDataTable(cdata2);
	 	        cdata3.sort( compare );
		        cdata3 = google.visualization.arrayToDataTable(cdata3);
		        drawChart( );
	      }
    });
}

drawChart = function ( ) {  
    var options = {
        title: '',
        chartArea: { width: '80%' },
		    height: 500,
		    annotations: {
            textStyle: {
                fontSize: "1em",
                color: '#000',
                auraColor: 'none'
            }
		    },
        hAxis: {
            title: '',
            minValue: 0,
            textStyle: {
                bold: false,
                fontSize: 12,
                color: '#4d4d4d'
            },
            titleTextStyle: {
                bold: false,
                fontSize: 12,
                color: '#4d4d4d'
            }
        },
        vAxis: {
            format: 'percent',
				    minValue: 0,
				    gridlines: { count: 5 }
        },
		    legend: { position: "none" },
		    tooltip: { trigger: "none" }
    };
    if ( $( '#chart_div_onkor_2014' ).length ) {
        var chart = new google.visualization.ColumnChart( document.getElementById( 'chart_div_onkor_2014' ) );
        chart.draw( cdata, options );
    }
    var options_2 = {
        title: '',
        chartArea: { width: '80%' },
		    height: 500,
		    annotations: {
            textStyle: {
                fontSize: "1em",
                color: '#000',
                auraColor: 'none'
            }
		    },
        hAxis: {
            title: '',
            minValue: 0,
            textStyle: {
                bold: false,
                fontSize: 12,
                color: '#4d4d4d'
            },
            titleTextStyle: {
                bold: false,
                fontSize: 12,
                color: '#4d4d4d'
            }
        },
        vAxis: {
            format: 'percent',
		        minValue: 0,
			      gridlines: { count: 5 }
        },
		    legend: { position: "none" },
		    tooltip: { trigger: "none" }
    };
    if ( $('#chart_div_ogy_2018').length ) {
        var chart_2 = new google.visualization.ColumnChart(document.getElementById('chart_div_ogy_2018'));
     	  chart_2.draw(cdata2, options_2);
    }
    var options_3 = {
        title: '',
        chartArea: {width: '80%'},
		    height: 500,
		    annotations: {
            textStyle: {
                fontSize: "1em",
                color: '#000',
                auraColor: 'none'
            }
		    },
        hAxis: {
            title: '',
            minValue: 0,
            textStyle: {
                bold: false,
                fontSize: 12,
                color: '#4d4d4d'
            },
            titleTextStyle: {
                bold: false,
                fontSize: 12,
                color: '#4d4d4d'
            }
        },
        vAxis: {
            format: 'percent',
				    minValue: 0,
				    gridlines: { count: 5 }
        },
		    legend: { position: "none" },
		    tooltip: { trigger: "none" }
    };
    if ( $('#chart_div_ogy_2018').length ) {
        var chart_3 = new google.visualization.ColumnChart(document.getElementById('chart_div_ep_2019'));
        chart_3.draw(cdata3, options_3); 
    }
}


(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.carousel').carousel();

  }); // end of document ready
})(jQuery); // end of jQuery name space
