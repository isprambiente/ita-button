// * spid-idps.js *
// This script populate the SPID button with a remote json or the `idps` var content
//
// ## spidIdpsDefault ##
// This object contain the defaults value to make a new SpidIdps instance. 
// ### keys list ###
// * `addition`: static html for each menu
// * `href`: function to generate the entry menu url, this function has two params
// * * `data`: AGID json entry
// * * `params`: cyrrent url params
// * idps: fallback value if agid json is not available
const spidIdpsDefault = {
  addition: '<a href="https://www.spid.gov.it">Maggiori informazioni</a><a href="https://www.spid.gov.it/richiedi-spid">Non hai SPID?</a><a href="https://www.spid.gov.it/serve-aiuto">Serve aiuto?</a>',
  href: function (data,params) {`${params.get("return")}?entityID=${data["entity_id"]}&return=${params.get("return")}`},
  url: "https://registry.spid.gov.it/entities-idp?&output=json&custom=info_display_base",
  idps: [{"organization_name": "ArubaPEC S.p.A.", "entity_id": "https://loginspid.aruba.it", "logo_uri": "img/spid-idp-arubaid.svg"},{"organization_name": "InfoCert S.p.A.", "entity_id": "https://identity.infocert.it", "logo_uri": "img/spid-idp-infocertid.svg"},{"organization_name": "IN.TE.S.A. S.p.A.", "entity_id": "https://spid.intesa.it", "logo_uri": "img/spid-idp-intesaid.svg"},{"organization_name": "Lepida S.p.A.", "entity_id": "https://id.lepida.it/idp/shibboleth", "logo_uri": "img/spid-idp-lepidaid.svg"},{"organization_name": "Namirial", "entity_id": "https://idp.namirialtsp.com/idp", "logo_uri": "img/spid-idp-namirialid.svg"},{"organization_name": "Poste Italiane SpA", "entity_id": "https://posteid.poste.it", "logo_uri": "img/spid-idp-posteid.svg"},{"organization_name": "Sielte S.p.A.", "entity_id": "https://identity.sieltecloud.it", "logo_uri": "img/spid-idp-sielteid.svg"},{"organization_name": "Register.it S.p.A.", "entity_id": "https://spid.register.it", "logo_uri": "img/spid-idp-spiditalia.svg"},{"organization_name": "TI Trust Technologies srl", "entity_id": "https://login.id.tim.it/affwebservices/public/saml2sso", "logo_uri": "img/spid-idp-timid.svg"},{"organization_name": "TeamSystem s.p.a.", "entity_id": "https://spid.teamsystem.com/idp", "logo_uri": "img/spid-idp-teamsystemid.svg"}]
}

// ## SpidIdps ##
// This class search and populate all button with class '.ita .ita-menu[data-spid-remote]'
// the class accept all spidIdpsDefault values as options
class SpidIdps {
  constructor(options) {
    Object.assign(this, spidIdpsDefault,  options);
    this.params = new URLSearchParams(window.location.search);
    this.elements = document.querySelectorAll('.ita .ita-menu[data-spid-remote]')
    if (this.elements.length > 0 ) { this.start() } 
  }

  // Try to get idps list and staty populate()
  async start() {
    try {
      const response = await fetch(this.url);
      if (response.ok) { this.spid_populate(await response.json()) }
    } catch (error) {
      console.log(error)
      this.spid_populate(this.idps)
    }
  }

  // For each spid elements add menu data
  spid_populate(data) {
    const dataset = data.sort(() => Math.random() - 0.5)
    for (var u = 0; u < this.elements.length; u++) {
      this.elements[u].innerHTML = this.addition
      for (var i = 0; i < data.length; i++) {
	this.add_idp_entry(data[i], this.elements[u]);
      }
    }
  }

  // add entry for menu
  add_idp_entry(data, element) {
    let a = document.createElement('a');
    a.setAttribute('href', this.href(data, this.params));
    a.innerHTML = `<img src="${data["logo_uri"]}" alt="${data["organization_name"]}">`
    element.prepend(a)
  }
}

//function spid_idps(options = {}) { new SpidIdps(options)}
//export (spid_idps);
