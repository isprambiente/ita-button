# IT Wallet
![CIE](static/cie.png)
```html
<div class='ita'>
  <a class="ita-button" href="#">
    <img src="img/it_wallet.svg" alt="IT Wallet Logo">
    <span class='ita-content'>Entra con IT Wallet</span>
  </a>
</div>
```

Bottone semplice privo di dropdown. L'immagine disponibile in [src/img/it_wallet.svg](src/img/it_wallet.svg) è stata presa dal repositori [eudi-wallet-it](https://github.com/italia/eudi-wallet-it-python).

Essendo un link semplice si consiglia di utilizzare il tag `A` per la classe `ita-button`. Per manenere un adeguato standard di accessibilità è importante aggiungere la chiave `alt` all'icona.

Per mantenere il risultato omogeneo allo standard SPID, si consiglia di utilizzare `Entra con CIE` come testo del link.
