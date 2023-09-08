# CIE
![CIE](static/cie.png)
```html
<div class='ita'>
  <a class="ita-button" href="#">
    <img src="img/cie.svg" alt="CIE Logo">
    <span class='ita-content'>Entra con CIE</span>
  </a>
</div>
```

Bottone semplice privo di dropdown. L'immagine disponibile in [src/img/cie.svg](src/img/cie.svg) è stata presa dal repositori [cie-graphics](https://github.com/italia/cie-graphics).
Per renderla proporzionale alle altre immagini la dimensione dell'SVG è stata modificata per avere un rapporto 1:1 mantenendo il disegno al centro dell'immagine.

Essendo un link semplice si consiglia di utilizzare il tag `A` per la classe `ita-button`. Per manenere un adeguato standard di accessibilità è importante aggiungere la chiave `alt` all'icona.

Per mantenere il risultato omogeneo allo standard SPID, si consiglia di utilizzare `Entra con CIE` come testo del link.
