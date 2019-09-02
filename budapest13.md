---
layout: page
title: Budapest XIII. kerület
permalink: /budapest13
---

<h1 class="page-title">{{ page.title | escape }}</h1>

<div class="section">
    <div class="row">
          <div class="col s12">
		  <h5>Budapest XIII. kerület</h5>
<br/>
<h5><strong><a id="webURL" href="http://www.valasztas.hu/dyn/onk14/szavossz/hu/M01/T013/tjk.html">2014-es polgármester-választás eredménye</a></strong></h5>
<br/>

<div id="chart_div_onkor_2014" style="width: 100%"></div>



<br/>
			<table class="striped">
              <thead>
                <tr>
                    <th>Jelöltek (első két helyezett)</th>
                    <th>Szavazatarány (százalék)</th>
					<th>Szavazatok száma</th>
                </tr>
              </thead>
              <tbody>
             <tr>
                   <td>Dr. Bagdy Gábor József - Fidesz-KDNP <img src="images/fideszkdnp_logo.png" style="width:55px;height:30px;"></td>
				   <td id="fidesz_mayor">22.6%</td>
				   <td id="fidesz_mayor2">9,098</td>
			</tr>
			<tr>
			<td>Dr. Tóth József Sándor - MSZP <img src="images/mszp2_logo.png" style="width:30px;height:30px;"></td> 
			<td id="ellenzek_mayor">69.9%</td>
			<td id="ellenzek_mayor2">28,140</td>
			</tr>
              </tbody>
            </table>
<br/>

<br/>

<h5><strong>2014-es önkormányzati választáson nyert egyéni képviselőhelyek száma</strong></h5><br/><br/>

<table class="striped">
              <thead>
                <tr>
                    <th>Pártok</th>
                    <th>Egyéni képviselőhelyek</th>
<th>Kompenzációs helyek</th>
                </tr>
              </thead>
              <tbody>
             <tr>
                  <td>Fidesz-KDNP <img src="images/fideszkdnp_logo.png" style="width:55px;height:30px;"></td>
				   <td id="fidesz_mp">0</td><td id="fidesz_mp_lista">3</td>
			</tr>
			<tr><td>Jobbik <img src="images/jobbik_logo.png" style="width:23px;height:30px;"></td>
				<td id="jobbik_mp">0</td><td id="jobbik_mp_lista">1</td>
			</tr>
			<tr>
                  <td>MSZP <img src="images/mszp2_logo.png" style="width:30px;height:30px;"></td>
				   <td id="mszp_mp">15 *</td><td id="mszp_mp_lista">0</td>
			</tr>
			<tr>
                  <td>LMP <img src="images/lmp_logo.png" style="width:52px;height:30px;"></td>
				   <td id="lmp_mp">0</td><td id="lmp_mp_lista">1</td>
			</tr>
			<tr>
                  <td>DK <img src="images/dk_logo.png" style="width:34px;height:30px;"></td>
				   <td id="dk_mp">0</td><td id="dk_mp_lista">0</td>
			</tr>
			<tr>
                  <td>Együtt-PM <img src="images/egyutt_pm_logo.png" style="width:42px;height:30px;"></td>
				   <td id="egyutt_mp">0</td><td id="egyutt_mp_lista">1</td>
			</tr>
			 <tr>
                  <td>Egyéb szervezet</td>
				   <td id="egyeb_mp">0</td><td id="egyeb_mp_lista">0</td>
			</tr>
             <tr>
                  <td>Független</td>
				   <td id="fuggetlen_mp">0</td><td id="fuggetlen_mp_lista">0</td>
			</tr>
   
              </tbody>
            </table>

<p><span id="megjegyzes">* MSZP-LPE közös jelölt</span><br/></p>



<br/><h5><strong>2018-as országos listás eredmények</strong></h5><br/><br/>


<div id="chart_div_ogy_2018" style="width: 100%"></div>


			<table class="striped">
              <thead>
                <tr>
                    <th>Pártok</th>
                    <th>Szavazatarány (százalék)</th>
                </tr>
              </thead>
              <tbody>
             <tr>
                  <td>Fidesz <img src="images/fideszkdnp_logo.png" style="width:55px;height:30px;"></td>
				   <td id="fidesz_2018">31.1%</td>
			</tr>
			<tr><td>Jobbik <img src="images/jobbik_logo.png" style="width:23px;height:30px;"></td> 
			<td id="jobbik_2018">11.1%</td>
			</tr>
			<tr>
                  <td>MSZP-Párbeszéd <img src="images/mszpparbeszed_logo.png" style="width:60px;height:30px;"></td>
				   <td id="mszp_2018">23.8%</td>
			</tr>
			<tr>
                  <td>LMP <img src="images/lmp_logo.png" style="width:52px;height:30px;"></td>
				   <td id="lmp_2018">11.8%</td>
			</tr>
			<tr>
                  <td>DK <img src="images/dk_logo.png" style="width:34px;height:30px;"></td>
				   <td id="dk_2018">9.4%</td>
			</tr>
			<tr>
                  <td>Momentum <img src="images/momentum_logo.png" style="width:44px;height:30px;"></td>
				   <td id="momentum_2018">6.9%</td>
			</tr>
			<tr>
                  <td>Együtt <img src="images/egyutt_logo2.png" style="width:71px;height:30px;"></td>
				   <td id="egyutt_2018">1.9%</td>
			</tr>
             <tr>
                  <td>MKKP <img src="images/mkkp_logo.png" style="width:49px;height:30px;"></td>
				   <td id="mkkp_2018">3.0%</td>
			</tr>
   
              </tbody>
            </table>
          </div>
    </div>
</div>

<script>
drawChart = function ()
	{  
		var data = google.visualization.arrayToDataTable([
        ['Pártok', 'Szavazatarány (%)', {role: "style" },{ role: 'annotation' }],
        ['MSZP', 0.6986, "red", "69.86%"],
        ['Fidesz', 0.2259, "orange", "22.59%"],
        ['Jobbik', 0.0435, "grey", "4.35%"],
        ['Egyéb', 0.032, "pink", "3.2%"]
      ]);

      var options = {
        title: '2014-es önkormányzati eredmények - Budapest XIII. kerület',
        chartArea: {width: '80%'},
		annotations: {
          textStyle: {
            fontSize: 18,
            color: '#000',
            auraColor: 'none'
          }
		    },
        hAxis: {
          title: '',
          minValue: 0,
		  direction: -1,
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
        vAxis: {format: 'percent',
				minValue: 0,
				maxValue: 1,
				gridlines: { count: 5 }},
		legend: { position: "none" },
		tooltip: { trigger: "none" }
      };
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div_onkor_2014'));
      chart.draw(data, options);
	  
	var data_2 = google.visualization.arrayToDataTable([
        ['Pártok', 'Szavazatarány (%)', {role: "style" },{ role: 'annotation' }],
        ['Fidesz', 0.311, "orange", "31.1%"],
        ['Jobbik', 0.111, "grey", "11.1%"],
        ['MSZP-P', 0.238, "red", "23.8%"],
        ['DK', 0.094, "dark blue", "9.4%"],
		['LMP', 0.118, "green", "11.8%"],
        ['Momentum', 0.069, "purple", "6.9%"],
        ['Együtt', 0.019, "black", "1.9%"],
        ['MKKP', 0.030, "light grey", "3.0%"]
      ]);

      var options_2 = {
        title: '2014-es önkormányzati eredmények - Budapest XIII. kerület',
        chartArea: {width: '80%'},
		annotations: {
          textStyle: {
            fontSize: 18,
            color: '#000',
            auraColor: 'none'
          }
		    },
        hAxis: {
          title: '',
          minValue: 0,
		  direction: -1,
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
        vAxis: {format: 'percent',
				minValue: 0,
				maxValue: 1,
				gridlines: { count: 5 }},
		legend: { position: "none" },
		tooltip: { trigger: "none" }
      };
      var chart_2 = new google.visualization.ColumnChart(document.getElementById('chart_div_ogy_2018'));
      chart_2.draw(data_2, options_2); }
</script>