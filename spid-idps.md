# spid-idps.js
Il progetto [ITA-Button](README.md) contiene una versione modificata del file [spid-idps.js](https://github.com/italia/spid-sp-access-button/blob/master/src/production/js/spid-idps.js) presente nel progetto [spid-sp-button](https://github.com/italia/spid-sp-access-button).

Per caricare il js è sufficente aggiungere nell'intestazione della pagina il seguente codice:
```
<head>
  ...
  <script src="js/spid-idps.js"></script>
</head>
```
Per avviare il popolamento dei bottoni spid è necessario istanziare la classe `SpidIdps` 
```
<script>
  var spid_idps = new SpidIdps
</script>
```

All'avvio dell'istanza verranno popolati gli elementi `.ita .ita-menu[data-spid-remote]` presenti nella pagina. Sarà possibile rieseguire nuovamente la ricerca ed il popolamento degli elementi con il metodo `start()`
```
  spid_idps.start()
```
## Configurazione della classe
I parametri di configurazione della classe sono:
* `addition`: STRING -
html statico da aggiungere ad ogni menu, contieni i link statici alle pagine informative di spid.
* `href`: FUNCTION - Funzione per generare il link per l'IDP. La funzione verrà chiamata per ogni entry con i seguenti parametri:
* * `data`: JSON - entry del JSON agid
* * `params`: Params instance, parametri presenti nella pagina corrente
* idps: JSON - valori da utilizzare nel caso il json AGID non fosse raggiungibile

## Parametri di default
In assenza di nuovi valori vengono utilizzate le seguenti impostazioni:
```
{
  addition: '<a href="https://www.spid.gov.it">Maggiori informazioni</a><a href="https://www.spid.gov.it/richiedi-spid">Non hai SPID?</a><a href="https://www.spid.gov.it/serve-aiuto">Serve aiuto?</a>',
  href: function (data,params) {`${params.get("return")}?entityID=${data["entity_id"]}&return=${params.get("return")}`},
  url: "https://registry.spid.gov.it/entities-idp?&output=json&custom=info_display_base",
  idps: [{"organization_name": "ArubaPEC S.p.A.", "entity_id": "https://loginspid.aruba.it", "logo_uri": "img/spid-idp-arubaid.svg"},{"organization_name": "InfoCert S.p.A.", "entity_id": "https://identity.infocert.it", "logo_uri": "img/spid-idp-infocertid.svg"},{"organization_name": "IN.TE.S.A. S.p.A.", "entity_id": "https://spid.intesa.it", "logo_uri": "img/spid-idp-intesaid.svg"},{"organization_name": "Lepida S.p.A.", "entity_id": "https://id.lepida.it/idp/shibboleth", "logo_uri": "img/spid-idp-lepidaid.svg"},{"organization_name": "Namirial", "entity_id": "https://idp.namirialtsp.com/idp", "logo_uri": "img/spid-idp-namirialid.svg"},{"organization_name": "Poste Italiane SpA", "entity_id": "https://posteid.poste.it", "logo_uri": "img/spid-idp-posteid.svg"},{"organization_name": "Sielte S.p.A.", "entity_id": "https://identity.sieltecloud.it", "logo_uri": "img/spid-idp-sielteid.svg"},{"organization_name": "Register.it S.p.A.", "entity_id": "https://spid.register.it", "logo_uri": "img/spid-idp-spiditalia.svg"},{"organization_name": "TI Trust Technologies srl", "entity_id": "https://login.id.tim.it/affwebservices/public/saml2sso", "logo_uri": "img/spid-idp-timid.svg"},{"organization_name": "TeamSystem s.p.a.", "entity_id": "https://spid.teamsystem.com/idp", "logo_uri": "img/spid-idp-teamsystemid.svg"}]
}
```
E' possibile aggiornare i valori di default modificando la costante `spidIdpsDefault` all'inizio del file javascript.
