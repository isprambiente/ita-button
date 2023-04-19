# ita.js
Il progetto [ITA-Button](README.md) contiene una versione modificata del file [spid-idps.js](https://github.com/italia/spid-sp-access-button/blob/master/src/production/js/spid-idps.js) presente nel progetto [spid-sp-button](https://github.com/italia/spid-sp-access-button).

La nuova versione è stata pensata per essere completamente configurabile ed importata sia staticamente che come modulo. Entrambe le soluzioni permettono di istanziare e configurare la classe Ita che si occuperrà di popolare i bottoni SPID come da circolare AGID.

## Importazione statica
```html
<html lang="it">
  <head>
    ... 
    <script src="ita.min.js"></script>
    ...
  </head>
  ...
```

## Importazione ed inizializzazione della classe Ita
```js
import Ita from 'ita-button'
var ita = new Ita
```

## Parametri di inizializzazione della classe Ita
I parametri di configurazione della funzione sono:
* `addition`: STRING -
html statico da aggiungere ad ogni menu, contieni i link statici alle pagine informative di spid.
* `href`: FUNCTION - Funzione per generare il link per l'IDP. La funzione verrà chiamata per ogni entry con i seguenti parametri:
* * `data`: JSON - entry del JSON agid
* * `params`: Params instance, parametri presenti nella pagina corrente
* url: Indirizzo del json AGID con i dati aggiornati
* idps: JSON - valori da utilizzare nel caso il json AGID non fosse raggiungibile

Esempio: in questo caso configureremo un indirizzo differente per scaricare il json degli idp
```js
import Ita from 'ita-button'
var ita = new Ita({url: 'https://test.it/idps.json'})
```

## Parametri di default
In assenza di nuovi valori vengono utilizzate le seguenti impostazioni:
```js
{
  addition: '<a href="https://www.spid.gov.it">Maggiori informazioni</a><a href="https://www.spid.gov.it/richiedi-spid">Non hai SPID?</a><a href="https://www.spid.gov.it/serve-aiuto">Serve aiuto?</a>',
  href: function (data,params) {return `${params.get("return")}?entityID=${data["entity_id"]}&return=${params.get("return")}`},
  url: "https://registry.spid.gov.it/entities-idp?&output=json&custom=info_display_base",
  idps: [{"organization_name": "AArubaPEC S.p.A.", "entity_id": "https://loginspid.aruba.it", "logo_uri": "img/spid-idp-arubaid.svg"},{"organization_name": "InfoCert S.p.A.", "entity_id": "https://identity.infocert.it", "logo_uri": "img/spid-idp-infocertid.svg"},{"organization_name": "IN.TE.S.A. S.p.A.", "entity_id": "https://spid.intesa.it", "logo_uri": "img/spid-idp-intesaid.svg"},{"organization_name": "Lepida S.p.A.", "entity_id": "https://id.lepida.it/idp/shibboleth", "logo_uri": "img/spid-idp-lepidaid.svg"},{"organization_name": "Namirial", "entity_id": "https://idp.namirialtsp.com/idp", "logo_uri": "img/spid-idp-namirialid.svg"},{"organization_name": "Poste Italiane SpA", "entity_id": "https://posteid.poste.it", "logo_uri": "img/spid-idp-posteid.svg"},{"organization_name": "Sielte S.p.A.", "entity_id": "https://identity.sieltecloud.it", "logo_uri": "img/spid-idp-sielteid.svg"},{"organization_name": "Register.it S.p.A.", "entity_id": "https://spid.register.it", "logo_uri": "img/spid-idp-spiditalia.svg"},{"organization_name": "TI Trust Technologies srl", "entity_id": "https://login.id.tim.it/affwebservices/public/saml2sso", "logo_uri": "img/spid-idp-timid.svg"},{"organization_name": "TeamSystem s.p.a.", "entity_id": "https://spid.teamsystem.com/idp", "logo_uri": "img/spid-idp-teamsystemid.svg"}]
}
```

## Metodi
* **default_values** - Hash, i valori di default della funzione
* **addition** - String, contenuto statico aggiunto al dropdown
* **href** - Function, generatore degli url per gli IDP
* **idps** - Hash, valori per popolare l'elenco degli idp
* **start** - Null, prova ad aggiornare l'elenco degli idp e popola i bottoni `.ita .ita-menu[data-spid-remote]`
