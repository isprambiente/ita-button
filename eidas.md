# eIDAS
![EIDAS](static/eidas.png)
```html
<div class='ita'>
  <a class="ita-button" href="#">
    <img src="img/ficep.svg" alt="FICEP Logo">
    <span class='ita-content'>Entra con eIDAS</span>
  </a>
</div>
```

Bottone semplice privo di dropdown. L'immagine disponibile in [src/img/ficep.svg](src/img/ficep.svg) è stata presa dal repositori [eidas-italian-node](https://github.com/AgID/eidas-italian-node).
L'immagine non è stata alterata in quanto già era disponibile con rapporto 1:1.

Essendo un link semplice si consiglia di utilizzare il tag `A` per la classe `ita-button`. Per manenere un adeguato standard di accessibilità è importante aggiungere la chiave `alt` all'icona.

Per mantenere il risultato omogeneo allo standard SPID e coerente allo standard presentato da AGID nel suo [repository](https://github.com/AgID/eidas-italian-node), si consiglia di utilizzare `Login with eIDAS` o la versione italiana `Entra con eIDAS` come testo del link.
