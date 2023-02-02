# IDEM
![CIE](static/cie.png)
```html
<div class='ita'>
  <a class="ita-button" href="#">
    <img src="img/idem.svg" alt="IDEM Logo">
    Entra con IDEM
  </a>
</div>
```

Bottone semplice privo di dropdown. L'immagine disponibile in [src/img/idem.svg](src/img/idem.svg) è stata presa dal sito [IDEM GARR-AAI](idem.garr.it/).
Per renderla proporzionale alle altre immagini la dimensione dell'SVG è stata modificata per avere un rapporto 1:1 mantenendo il disegno al centro dell'immagine.

Essendo un link semplice si consiglia di utilizzare il tag `A` per la classe `ita-button`. Per manenere un adeguato standard di accessibilità è importante aggiungere la chiave `alt` all'icona.

Per mantenere il risultato omogeneo allo standard SPID, si consiglia di utilizzare `Entra con IDEM` come testo del link.
