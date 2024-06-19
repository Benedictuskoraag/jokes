 class hewan {


    constructor (nama) {
        this.nama = nama
    }
    set newColor (color) {
        this.warna = color
    }
    set newSkill (skill) {
        this.skill = skill
    }
 }

 const kucing = new hewan('jojo')
 kucing.newColor = "red"
 kucing.newSkill = "mengonggong "
 console.log (kucing)
