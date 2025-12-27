---
layout: page
title: Módszertan
permalink: /modszertan
---
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-45281172-4');
</script>
<h1 class="page-title">{{ page.title | escape }}</h1>
    
<div class="section">
    <div class="row">
          <div class="col s12">
		  <h5>A 2026-os országgyűlési választáshoz használt becslés módszertana</h5> 

<br/>
<p><strong>Utolsó frissítés: 2025. december 26.</strong>
<br/>
<p><strong>Bemeneti adatok</strong></p>

<p>A választókerületi modell öt részből épül fel:</p>
<p>1. Az EP választások egyéni választókerületre (OEVK) vetített eredményei.</p>
<p>2. A pártok országos támogatottsága az összes pártválasztó vonatkozó adatok alapján (ezt Tóka Gábor, <a href="https://www.facebook.com/valasztasi.kalauz">Vox Populi választási kalauz</a> oldala rendszeresen publikálja).</p>
<p>3. A 13 újrainduló ellenzéki jelölt várható szavazataránya az átrajzolt OEVK-kban maradt szavazószámok alapján.</p>
<p>4. A Fidesz szavazatarányának várható regionális mozgására adott szorzó (0.98 - 1.02 között).</p>
<p>5. A Fidesz "erős jelöltjeinek" adott szorzó (1.01 - 1.05 között).</p>
<br/>

<p><strong>Részletes leírás</strong></p>
<p><strong>1. Az EP választás eredményei OEVK szinten</strong></p>
<p>2024 végén az új kerületi beosztás miatt az EP választás eredményei már az új OEVK beosztás szerint értelmezendők. Külön köszönet Szabó Olivérnek, hogy elkészítette és megosztotta velem az új kerületi beosztást.
<p>Az átrajzolás érdemben Budapestet és Pest megyét érinti, de Fejér és Csongrád-Csanád megye is átrajzolásra került. Az EP választáson a Fideszre adott szavazatok egy az egyben számolódnak, míg a Tiszához a Tisza és az egyéb pártok (kivéve Mi Hazánk) szavazatai számolódnak.</p>
<br/>
<p><strong>2. A pártok országos támogatottsága</strong></p>
<p>Mivel a biztos pártválasztókra vonatkozó adatok egy feltételezett mozgósítási aránnyal számolnak, ezért bizonytalanok a jövőre vonatkozóan. Ez okból a teljes népesség adatai alapján készül a modell, ami a várható belföldi szavazatszámokból kalkulál országos támogatottságot.</p>
<p>A modell jelenleg 72%-os országos részvétellel kalkulál, választókerülettől függetlenül. Ezen felül 250 ezer listás szavazatot kap a Fidesz, 50 ezret a Tisza, és 10 ezret a Mi Hazánk a határon túli levélszavazatokból (ez csak a listás szavazatok számítását befolyásolja a D'Hondt-mátrixban).</p>
<p>Az országos szavazatszámokra vonatkozó adatok 1-2 hetente frissítve lesznek, és ekkor kerül újra publikálásra egy becslés.</p>
<br/>
<p><strong>3. Újrainduló ellenzéki képviselők (Budapest és Szeged 1-es körzetben)</strong></p>
<p>Az újrainduló, korábban egyéni választókerületben győztes ellenzéki jelöltek várhatóan jelentős mennyiségű szavazatot fognak kapni egyéni körzetükben. Mivel ezek a körzetek átrajzolásra kerültek, ezért a modell azzal számol, hogy helyi népszerűségüktől és ismertségüktől függően ezek a jelöltek a korábbi szavazóik - akik az új választókerületi beosztásban nem kerültek másik OEVK-ba - 30-50%-ának támogatására számíthatnak.</p>
<p>Így ezek az ellenzéki jelöltek az összes leadható szavazat 10-30%-át kaphatják meg. Az általuk szerzett egyéni szavazat levonásra kerül a Tisza várható töredékszavazataiból (ez ismét a listás mandátumok kiosztását befolyásolja).</p>
<p><strong>Fontos:</strong> Jelenleg ez a része a modellnek bizonytalan, mivel nincs nyilvánosan ismert választókerületi kutatás a budapesti OEVK-kból. Ha lesz ilyen kutatás, az a modell validációjára lesz felhasználva, és a fent említett százalékos arányok módosulhatnak.</p>
<br/>
<p><strong>4. Regionális erősödés-gyengülés a Fidesz esetében</strong></p>
<p>A korábbi választások tanulsága alapján a Fidesz regionális támogatottsága folyamatosan változik, ezért a 2024-es EP választás és a 2022-es országgyűlési választás közti relatív változás bekerült, mint kiegészítő szorzó a Fidesz várható szavazatarányába.</p>
<p>A szorzók a következők (a fel nem sorolt megyék esetében a szorzó 1.00):</p>
<ul>
<li><strong>0.98-as szorzó:</strong> Budapest, Pest, Győr-Moson-Sopron, és Hajdú-Bihar megye</li>
<li><strong>0.99-es szorzó:</strong> Komárom-Esztergom és Bács-Kiskun megye</li>
<li><strong>1.01-es szorzó:</strong> Nógrád és Szabolcs-Szatmár-Bereg megye</li>
<li><strong>1.02-es szorzó:</strong> Baranya, Somogy, és Borsod-Abaúj Zemplén megye </li>
</ul>
<br/>
<p><strong>5. A Fidesz "erős jelöltjeinek" szorzója</strong></p>
<p>A Fidesz a korábbi választásokon átlagosan 1%-kal kapott több egyéni szavazatot a listás szavazatoknál (ez nagyjából 25-28 ezer szavazatot jelent). Ennek az eloszlása azonban egyenlőtlen volt. A modell ezen része azt becsli meg, hogy a korábban a Fidesz listát felülteljesítő egyéni képviselő hány százalékkal fog több szavazatot kapni a Fidesz listájánál.</p>
<p>A szorzók 1.01 és 1.05 között mozognak és összesen 30 újrainduló fideszes képviselőt érintenek.</p>
<br/>
<p><strong>Egyéb megjegyzések</strong></p>
<p>A modell a későbbiekben még módosulhat, különösen akkor, ha több információ derül ki az egyéni jelöltekről, illetve a kisebb pártok (DK, Mi Hazánk, és MKKP) átszavazási hajlandóságáról - vagyis hogy egyéni szavazatukat milyen arányban adják a Tisza és a Fidesz jelöltjeire.</p>