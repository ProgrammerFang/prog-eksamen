let PersonInfo = [];
let kundetal = 1; // Gør kundetal global, så det tæller op mellem instanser

class OpretNyKunde {
    constructor(navn, fødselsdag,email) {
        this.navn = navn;
        this.kunde_ID = '';
        this.email = email;
        this.fødselsdag = new Date(fødselsdag); // Brug nullish coalescing operator for at undgå fejl

    const fødselsår = this.fødselsdag.getFullYear();
    const nuværendeÅr = new Date().getFullYear();
    const alder = nuværendeÅr - fødselsår

        // Tjek om kunden er under 18 år
        if (alder < 18) {
            throw new Error(`Kunden ${this.navn} er under 18 år og kan ikke oprettes.`);
        } 
        if (PersonInfo.some(konto => konto.email === this.email)) {
            throw new Error(`En konto med samme email findes allerede`)
        }
        
    }

    generateKUNDE_ID() {
        const initialID = 'KUNDEID';
        this.kunde_ID = initialID + kundetal++; // Sammenkæd strings korrekt
        return this.kunde_ID;
    }

    Kunde_info() {
        return PersonInfo.push({navn: this.navn, fødselsdag: this.fødselsdag,kunde_ID: this.kunde_ID,email: this.email})
    }

    // Prøv at oprette kunder
    static OpretKontoside(navn,fødselsdag,email){
        const ny_kunde = new OpretNyKunde(navn,fødselsdag,email);
        ny_kunde.generateKUNDE_ID();
        return ny_kunde.Kunde_info();
    }

}



function getNyOprettetKunde_info() {
    return PersonInfo;
}




