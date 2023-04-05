function SpidIDP(opt) { 
  var default_values = {
  addition: '<a href="https://www.spid.gov.it">Maggiori informazioni</a><a href="https://www.spid.gov.it/richiedi-spid">Non hai SPID?</a><a href="https://www.spid.gov.it/serve-aiuto">Serve aiuto?</a>',
  href: function (data,params) {`${params.get("return")}?entityID=${data["entity_id"]}&return=${params.get("return")}`},
  url: "https://registry.spid.gov.it/entities-idp?&output=json&custom=info_display_base",
  idps: [{"organization_name": "AArubaPEC S.p.A.", "entity_id": "https://loginspid.aruba.it", "logo_uri": "img/spid-idp-arubaid.svg"},{"organization_name": "InfoCert S.p.A.", "entity_id": "https://identity.infocert.it", "logo_uri": "img/spid-idp-infocertid.svg"},{"organization_name": "IN.TE.S.A. S.p.A.", "entity_id": "https://spid.intesa.it", "logo_uri": "img/spid-idp-intesaid.svg"},{"organization_name": "Lepida S.p.A.", "entity_id": "https://id.lepida.it/idp/shibboleth", "logo_uri": "img/spid-idp-lepidaid.svg"},{"organization_name": "Namirial", "entity_id": "https://idp.namirialtsp.com/idp", "logo_uri": "img/spid-idp-namirialid.svg"},{"organization_name": "Poste Italiane SpA", "entity_id": "https://posteid.poste.it", "logo_uri": "img/spid-idp-posteid.svg"},{"organization_name": "Sielte S.p.A.", "entity_id": "https://identity.sieltecloud.it", "logo_uri": "img/spid-idp-sielteid.svg"},{"organization_name": "Register.it S.p.A.", "entity_id": "https://spid.register.it", "logo_uri": "img/spid-idp-spiditalia.svg"},{"organization_name": "TI Trust Technologies srl", "entity_id": "https://login.id.tim.it/affwebservices/public/saml2sso", "logo_uri": "img/spid-idp-timid.svg"},{"organization_name": "TeamSystem s.p.a.", "entity_id": "https://spid.teamsystem.com/idp", "logo_uri": "img/spid-idp-teamsystemid.svg"}]
};
  Object.assign(this, default_values,  opt);
  
  var add_idp_entry = function (data, element, params) {
    let a = document.createElement('a');
    a.setAttribute('href', this.href(data, params));
    a.innerHTML = `<img src="${data["logo_uri"]}" alt="${data["organization_name"]}">`
    element.prepend(a)
  }

  var populate = function (data) {
    let elements = document.querySelectorAll('.ita .ita-menu[data-spid-remote]');
    let params = new URLSearchParams(window.location.search);
    data = data.sort(() => Math.random() - 0.5)
     
    for (var u = 0; u < elements.length; u++) {
      elements[u].innerHTML = addition
      for (var i = 0; i < data.length; i++) {
	add_idp_entry(data[i], elements[u], params);
      }
    }
  }
 
  return {
    default_values: default_values,
    addition: addition,
    href: href,
    url: url,
    idps: idps,
    start: async function () {
      try {
	const response = await fetch(url);
	if (response.ok) { populate(await response.json()) }
      } catch (error) {
	console.log(error)
	populate(idps)
      }
    }
  }
}

module.exports = { SpidIDP }
