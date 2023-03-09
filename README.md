# ita-button
![SPID CIE eIDAS IDEM](static/ita-buttons.png)

Il progetto nasce dall'esigenza di poter utilizzare i bottoni per le autenticazioni SPID / CIE / eIDAS / IDEM ed eduGAIN con siti "non bootstrap 4' senza reinventare la ruota.

Il progetto non è AGID e non sostituisce il suo bottone ufficiale SPID, il progetto si prefige soltanto di provare ad ottenere un risultato simile con un codice più semplice e generico.

## Obiettivi
* creare un set di bottoni indipendente da ogni framework css
* creare uno standard unico compatibile con i vari bottoni (SPID / CIE / ecc.)
* non richiedere js per il funzionamento del bottone
* supportare l'inserimento statico delle voci di dropdown (idps SPID)
* supportare l'inserimento dinamico delle voci di dropdown via js (idps SPID circ. 41)
* creare un css il più  piccolo possibile
* mantenere un elevato livello di coerenza indipendentemente dal framesowrk css utilizzato

## Filosofia nella creazione del progetto
* Utilizzare soltanto dimensioni relative (em o rem) per rendere i bottoni coerenti con il resto del sito;
* Facilitare l'utilizzo limitando al minimo il numero dei tag necessari alla struttura;
* Non richiamare asset dal css per non limitare i programmatori nella posizione degli asset;
* Eliminare il rischio di conflitti tra classi CSS definendo gli stili a partire da un contenitore principale `ita` ed aggiungendo il prefisso `ita-` a tutte le classi del progetto;
* Gestire tutte le classi opzionali di configurazione nel contenitore printipale;
* Non vincolare le classi ad elementi specifici (es: a, button, span);
* Sviluppare con usabilità ed accessibilità in testa.

## Pagine di esempio
* [src/index.html](src/index.html) tutte le varianti di bottoni senza alcun framework css
* [src/index-bootstrap.html](src/index-bootstrap.html) Pagina di esempio con Bootstrap 5
* [src/index-bulma.html](src/index-bulma.html) Pagina di esempio con Bulma
* [src/index-tailwind.html](src/index-tailwind.html) Pagina di esempio con tailwind

## Struttura dei bottoni
Ogni bottone è composto da una classe contenitore principale `ita` con all'interno un elemento `ita-button` che contiene l'immagine ed il testo del bottone.
Il contenitore principale può opzionalmente avere al suo interno un elemento `ita-menu` con il contenuto del menù dropdown.

### Bottone semplice (privo di dropdown)
```html
<div class='ita'>
  <a class="ita-button" href="#">
    <img src="img/cie.svg" alt="CIE Logo">
    Entra con CIE
  </a>
</div>
```
### Bottone con dropdown
```html
    <div class='ita ita-dropdown'>
      <button class="ita-button">
	<img src="img/spid.svg" alt="SPID logo">
	Entra con SPID
      </button>
      <div class='ita-menu' role='menu'>
        <a href="#"><img src="img/spid-idp-timid.svg" alt="TIM Trust Technologies srl"></a>
      </div>
    </div>
```
L'elemento `ita-menu` è nascosto (`display: hidden`) se il bottone o la classe stessa non sono in focus o il contenitore non è in hover. E` possibile forzare la visibilità aggiungendo la classe `ita-active` alla classe contenitore.
```html
<div class='ita ita-dropdown ita-active'>...</div>
```

### Classi opzionali
* **ita-fixed** fissa la larghezza dei bottoni a 10.4em (lunghezza del bottone spid)
* **ita-hover** rende il dropdown visibile al passaggio del mouse
* **ita-l** Bottone ridimensionato con i font impostati a 1.5rem
* **ita-xl** Bottone ridimensionato con i font impostati a 2rem
* **ita-xxl** Bottone ridimensionato con i font impostati a 2.5rem
* **ita-xxxl** Bottone ridimensionato con i font impostati a 3rem
* **ita-m05** Aggiunge un margine di 0.5rem al bottone
* **ita-mb05** Aggiunge margin-botton di 0.5rem al bottone
* **ita-mt05** Aggiunge margin-top di 0.5rem al bottone

### Informazioni specifiche per i vari bottoni
* [CIE](./cie.md)
* [eIDAS](./eidas.md)
* [IDEM](./idem.md)
* [SPID](./spid.md)

### Informazioni per il caricamento remoto degli idp 
Il repository contiene una versione modificata del file [spid-idps.js](https://github.com/italia/spid-sp-access-button/blob/master/src/production/js/spid-idps.js) di [spid-sp-button](https://github.com/italia/spid-sp-access-button). Lo script è stato adattato alla struttura di questa versione dei bottoni ed è stato tentato di renderlo leggermente più configurabile.
* [spid-idps.js sorgente](src/js/spid-idps.js)
* [spid-idps.js istruzioni e configurazione](./spid-idps.md)

## Crediti
* il sistema di importazione degli IDPS è ripreso dal progetto [Satosa-Saml2SPID](https://github.com/italia/Satosa-Saml2Spid/) ed è aggiornato con il nuovo sistema definito da [spid-sp-button](https://github.com/italia/spid-sp-access-button) in [spid-idps.js](https://github.com/italia/spid-sp-access-button/blob/master/src/production/js/spid-idps.js)
