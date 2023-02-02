
// * spid-idps.js *
// This script populate the SPID button with a remote json or the `idps` var content
var queryURL = "https://registry.spid.gov.it/entities-idp?&output=json&custom=info_display_base";
var idps = [{"organization_name": "ArubaPEC S.p.A.", "entity_id": "https://loginspid.aruba.it", "logo_uri": "img/spid-idp-arubaid.svg"},{"organization_name": "InfoCert S.p.A.", "entity_id": "https://identity.infocert.it", "logo_uri": "img/spid-idp-infocertid.svg"},{"organization_name": "IN.TE.S.A. S.p.A.", "entity_id": "https://spid.intesa.it", "logo_uri": "img/spid-idp-intesaid.svg"},{"organization_name": "Lepida S.p.A.", "entity_id": "https://id.lepida.it/idp/shibboleth", "logo_uri": "img/spid-idp-lepidaid.svg"},{"organization_name": "Namirial", "entity_id": "https://idp.namirialtsp.com/idp", "logo_uri": "img/spid-idp-namirialid.svg"},{"organization_name": "Poste Italiane SpA", "entity_id": "https://posteid.poste.it", "logo_uri": "img/spid-idp-posteid.svg"},{"organization_name": "Sielte S.p.A.", "entity_id": "https://identity.sieltecloud.it", "logo_uri": "img/spid-idp-sielteid.svg"},{"organization_name": "Register.it S.p.A.", "entity_id": "https://spid.register.it", "logo_uri": "img/spid-idp-spiditalia.svg"},{"organization_name": "TI Trust Technologies srl", "entity_id": "https://login.id.tim.it/affwebservices/public/saml2sso", "logo_uri": "img/spid-idp-timid.svg"},{"organization_name": "TeamSystem s.p.a.", "entity_id": "https://spid.teamsystem.com/idp", "logo_uri": "img/spid-idp-teamsystemid.svg"}]
var STATIC_MENU='<a href="https://www.spid.gov.it">Maggiori informazioni</a><a href="https://www.spid.gov.it/richiedi-spid">Non hai SPID?</a><a href="https://www.spid.gov.it/serve-aiuto">Serve aiuto?</a>'

// spid_populate function, if '.spid-button[data-spid-remote] ul' exist, try to get the remote json file and pupulate all spid buttons
function spid_populate() {
  let spid_elements = document.querySelectorAll('.ita .ita-menu[data-spid-remote]')
  if (spid_elements.length > 0 ) {
    fetch(queryURL)
     .then(function (response) {
       return response.json();
      })
     .then(function (idps) {
       idps = idps.sort(() => Math.random() - 0.5)
       for (var u = 0; u < spid_elements.length; u++) {
	 for (var i = 0; i < idps.length; i++) { spid_addIdpEntry(idps[i], spid_elements[u]); }
       }
     })
     .catch(function (error) {
      console.log('Error during fetch: ' + error.message);
	idps.sort(() => Math.random() - 0.5)
	for (var u = 0; u < spid_elements.length; u++) {
	  for (var i = 0; i < idps.length; i++) { spid_addIdpEntry(idps[i], spid_elements[u]); }
	}
     });
  }
}

// ** Values **
const urlParams = new URLSearchParams(window.location.search);
const servicePath = urlParams.get("return");
const entityID = urlParams.get('entityID');

// function spid_addIdpEntry make a "li" element with the ipd link and prepend this in a element
//
// options:
// - data - is an object with "entityName", "entityID" and "logo" values
// - element - is the element where is added the new "li" element
function spid_addIdpEntry(data, element) {
  let a = document.createElement('a');
  a.setAttribute('href', '${servicePath}?entityID=${data["entity_id"]}&return=${servicePath}');
  a.innerHTML = `<img src="${data['logo_uri']}" alt="${data['organization_name']}">`
  element.prepend(a)
}

// when page is ready populate all spid buttons
document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    spid_populate()
  }
}
