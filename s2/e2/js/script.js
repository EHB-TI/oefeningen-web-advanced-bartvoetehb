let color = {
    nR : 0,
    nG : 0,
    nB : 0,

    showColor : function() {
        console.log(`rgb(${this.nR}, ${this.nG}, ${this.nB})`);
    },

    validateCode : function(code) {
        return code >= 0 && code <= 256;
    },

    setColor : function(r, g, b)  {
        if( r == undefined || g == undefined || b == undefined) {
            return "Alle waarden moeten aanwezig zijn";
        }

        if(this.validateCode(r)
        && this.validateCode(g)
        && this.validateCode(b)) {
            this.nB = b;
            this.nR = r;
            this.nG = g;
            return "Success";
        } else {
            return "Geen enkele waarde mag groter zijn als 255 of kleiner dan 0";
        }
    }
}

console.log(color.setColor(12,34,56));
color.showColor();
console.log(color.setColor(255,124,56));
color.showColor();
console.log(color.setColor(255,0,100));
color.showColor();
console.log(color.setColor(0,0,0));
console.log(color.setColor(255,0));