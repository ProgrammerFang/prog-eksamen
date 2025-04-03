let bruger1 = {
    gemt_brugernavn: 'alexander fang1',
    gemt_adgangskode: 'fang21'
}



class loginSystem{
    constructor(gemt_brugernavn,gemt_adgangskode) {
        this.gemt_brugernavn = gemt_brugernavn;
        this.gemt_adgangskode = gemt_adgangskode;
    }

    login() {
        let lowerBrugernavn = this.gemt_brugernavn.toLowerCase();
        let brugernavn_obj = bruger1.gemt_brugernavn.toLowerCase() 
        if(lowerBrugernavn === brugernavn_obj && bruger1.gemt_adgangskode === this.gemt_adgangskode) {
            return true;
        } else {
            alert('prøv igen')
            return false;
        }
    }
}

const bruger2 = new loginSystem('alexander fang1','fang21')
console.log(bruger2.login())

const allebruger = [];

class registring{
    constructor(navn,efternavn,adresse,fødselsdato,REGbrugernavn,REGadgangskode) {
        this.navn = navn;
        this.efternavn = efternavn;
        this.adresse = adresse;
        this.fødselsdato = fødselsdato;
        this.REGbrugernavn = REGbrugernavn;
        this.REGadgangskode = REGadgangskode;
    }

    allerede_registret() {
       let fundet_bruger = allebruger.find(function(element) { 
        element.gemt_brugernavn === REGbrugernavn});
        if(fundet_bruger != undefined) {
            alert('bruger eksisterer allerede')
        } else {
            
        }
       
       if fundet_bruger 
    }
    regist() {

    }
}