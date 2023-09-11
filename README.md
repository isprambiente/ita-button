# [ita-button](https://github.com/isprambiente/ita-button) V2
![SPID CIE eIDAS IDEM](static/ita-buttons.png)

Il progetto nasce dall'esigenza di poter utilizzare i bottoni per le autenticazioni SPID / CIE / eIDAS / IDEM ed eduGAIN con siti "non bootstrap 4' senza reinventare la ruota.

Il progetto non è AGID e non sostituisce il bottone ufficiale [spid-sp-access-button](https://github.com/italia/spid-sp-access-button), il progetto si prefige soltanto di provare ad ottenere un risultato simile con un codice più semplice e generico.

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

## Con la versione V2
* Il bottone diventa flex per mantenere meglio proporzioni e rapporti con lo scalare dello schermo.
* Nuova classe 'ita-extended' per occupare tutta la larghezza dello schermo
* Nuova classe 'ita-shadowed' per aggiungere l'ombra al bottone e toglierla al passaggio del mouse (effetto pulsante)
* Nuove configurazioni sass
* Nuova classe 'ita-content' per rinchiudere il testo e mantenerlo al centro anche variando la larghezza del bottone.


## Pagine di esempio
* [src/index.html](src/index.html) tutte le varianti di bottoni senza alcun framework css
* [src/index-bootstrap.html](src/index-bootstrap.html) Pagina di esempio con Bootstrap 5
* [src/index-bulma.html](src/index-bulma.html) Pagina di esempio con Bulma
* [src/index-tailwind.html](src/index-tailwind.html) Pagina di esempio con tailwind


## Utilizzare ITA Button
Il progetto [ita-button](https://github.com/isprambiente/ita-button) si divide in due componenti:
* un css disponibile in formato sass e minified.
* un css per il caricamento del font [Titillium Web](https://it.wikipedia.org/wiki/Titillium). *opzionale*
* un modulo javascript per il caricamento remoto degli idps spid disponibile in formato minified e come modulo. *opzionale*
* [copia delle immagini](src/img) degli ipd spid e dei loghi SPID, CIE, eIDAS e IDEM per la composizione dei bottoni

Di seguito sono riportate le istruzioni per alcune tipologie di di installazione.

### Caricamento statico dei file minified
Nella directory [dist](dist) sono archiviati i file minified dei css, del js e del font;
Nella directory [dist/img](dist/img) sono archiviate le immaggini svg minified dei loghi
Nella directory [src/img](src/img) sono disponibili i sorgenti originali dei loghi utili alla composizione dei bottoni.

all'interno dell'header della pagina web è necessario collegare il css printipale ed eventualmente il font Titillium Web e il js per il caricamento degli idp SPID.

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="stylesheet" href="../dist/ita.min.css" />
    <link rel="stylesheet" href="../dist/ita-font.min.css" />
    <script src="../dist/ita.min.js"></script>
  </head>
  ...
```

### installazione via npm o yarn, caricamento dei css via sass ed import del js opzionale
[ita-button](https://github.com/isprambiente/ita-button) è disponibile anche come [modulo NPM](https://www.npmjs.com/package/ita-button/).
Per installarlo tramite yard eseguire il comando `yarn add ita-button`, per installarlo tramite npm `npm install ita-button`.

E' possibile includere includere gli stili in sass con il seguente codice:

```sass
// stile principale
@import 'ita-button/ita' 
// Font titilium aggiuntivo
@import 'ita-button/src/css/ita-font'
```

E' possibile includere ed eseguire il modulo js per il caricamento remoto degli idp con il seguente codice:
```js
import { Ita } from 'ita-button/ita'
var ita = new Ita
```

Maggiori dettagli sono disponibili nel documento di [ita.mjs](ita-mjs.md)

## Struttura dei bottoni
Ogni bottone è composto da una classe contenitore principale `ita` con all'interno un elemento `ita-button` che contiene l'immagine ed il testo del bottone.
Il contenitore principale può opzionalmente avere al suo interno un elemento `ita-menu` con il contenuto del menù dropdown.

### Bottone semplice (privo di dropdown)
```html
<div class='ita'>
  <a class="ita-button" href="#">
    <img src="img/cie.svg" alt="CIE Logo">
    <span class="ita-content">Entra con CIE</span>
  </a>
</div>
```
### Bottone con dropdown
```html
    <div class='ita ita-dropdown'>
      <button class="ita-button">
        <img src="img/spid.svg" alt="SPID logo">
	    <span class="ita-content">Entra con SPID</span>
      </button>
      <div class='ita-menu' role='menu'>
        <a href="#"><img src="img/spid-idp-timid.svg" alt="TIM Trust Technologies srl"></a>
      </div>
    </div>
```
L'elemento `ita-menu` è nascosto (`display: hidden`) se il bottone o la classe stessa non sono in focus o il contenitore non è in hover. E' possibile forzare la visibilità aggiungendo la classe `ita-active` alla classe contenitore.
```html
<div class='ita ita-dropdown ita-active'>...</div>
```

### Classi opzionali
* **ita-fixed** fissa la larghezza dei bottoni a 13em (lunghezza del bottone IT Wallet)
* **ita-extended** estende il bottone alla dimensione del contenitore
* **ita-shadowed** Aggiunge l'ombra al bottone
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
* [IT Wallet](./it_wallet.md)

### Informazioni per il caricamento remoto degli idp 
Il repository contiene [ita.mjs](src/js/ita.mjs) una versione modificata del file [spid-idps.js](https://github.com/italia/spid-sp-access-button/blob/master/src/production/js/spid-idps.js) di [spid-sp-button](https://github.com/italia/spid-sp-access-button). Lo script è stato adattato alla struttura di questa versione dei bottoni, è stato rinchiuso in un modulo importabile ed è stato reso completamente configurabile.
* [ita.mjs sorgente](src/js/ita.mjs)
* [ita.mjs istruzioni e configurazione](./ita-mjs.md)

## CSS e font ##
Tutte le definizione dei bottoni sono inserite nel file [ita.min.css](dist/ita.min.css) generato dal file [ita.sass](src/css/ita.sass). E' possibile caricare il css nel proprio sito aggiungendo il seguente tag all'interno dell'header della  pagina:
```html
<head>
  ...
  <link rel="stylesheet" href="css/ita.css" />
</head>
```

Il  font Titilium Web è il font tipografico istituzionale per l'italia, in [ita-button](https://github.com/isprambiente/ita-button) è considerata una dipendenza esterna non obbligatori (non è richiamato dal css) in quanto non sussiste obbligo d'uso.
I bottoni in sequenza utilizzano i seguenti font family in sequenza: "Titillium Web", "HelveticaNeue", "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", "sans-serif". E' comunque possibile personalizzare i font dei bottoni modificando la variabile $fonts in [ita.sass](src/css/ita.sass).

Nella directory css è disponibile il file aggiuntivo [ita-font.css](src/css/ita-font.css) che permette di caricare il font [Titilium Web regular](src/css/titillium-web-v4-latin-regular.woff2) disponibile sempre nella directory [src/css](src/css). Per caricare il font aggiungere il seguente codince nell'head della pagina

```html
<head>
  ...
  <link rel="stylesheet" href="css/font.css" />
</head>
```

## Personalizzazione SASS ##
Tramite il file [ita.sass](src/css/ita.sass) è possibile creare nuove varianti di colore dei bottoni popolando la variabile  $colors.

Per esempio popolando la cariabile con i seguenti valori si creeranno le classi `ita-orange` e `ita-black` con i colori memorizzati
```sass
$colors: (orange: #d77e29, black: #000)
```
Altre variabili configurabili sono:
* **$fonts**: font da utilizzare nel bottone - default: Titillium Web
* **$gray**: Grigio utilizzato per i bordi del dropdown - default: `#dedede`
* **$ita-bg**: Background del bottone (se non indicate varianti) - default: `#06c`
* **$light**: background link on hover per il dropdown - default: `#f0f0f0`
* **$margin**: Margine utilizzato con le classi specifiche (ma, mb, mt) - default: 0.5rem
* **$radius**: radius bordi dei bottoni - default: 0.375rem
* **$shadow**: Ombra utilizzata per il bottone (se attiva la classe `ita-shadowed`) e per il dropdown
* **$white**: colore utilizzato per il testo del bottone e come sfondo del dropdown 

## Crediti
* il sistema di importazione degli IDPS è ripreso dal progetto [Satosa-Saml2SPID](https://github.com/italia/Satosa-Saml2Spid/) ed è aggiornato con il nuovo sistema definito da [spid-sp-button](https://github.com/italia/spid-sp-access-button) in [spid-idps.js](https://github.com/italia/spid-sp-access-button/blob/master/src/production/js/spid-idps.js)
