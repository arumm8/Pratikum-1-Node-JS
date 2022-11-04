//harus dipanggil dulu
const express = require("express") // memanggil library express js 
const bodyParser = require("body-parser") // memanggil library body- parser
const cors = require("cors") // memanggil library cors const app = express()
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON 
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body 
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform 
app.use(cors())

// endpoint "/test" dengan method GET 
app.get("/test", (req,res) => {
// req merupakan variabel yang berisi data request
// res merupakan variabel yang berisi data response dari end-point

// membuat objek yang berisi data yang akan dijadikan response 
let response = {
    message: "Ini end-point pertama ku",
    method: req.method, 
    code: res.statusCode
}

// memberikan response dengan format JSON yang berisi objek di atas 
res.json(response)
})

// app.get("/test/user",(req,res)=>{

// })

// app.get("/test/admin",(req,res)=>{
    
// })

// app.put("/test/user",(req,res)=>{
    
// })

// app.delete("/test/user",(req,res)=>{
    
// })
// menjalankan server pada port 8000 


// endpoint "/profil/nama/umur" dengan method GET 
app.get("/profil/:name/:age", (req,res) => {
    
// :name dan :age  diberikan titik dua didepan menunjukkan "name" dan "age"
// bersifat dinamis yang dapat diganti nilai nya saat melakukan request

// menampung data yang dikirimkan
let name = req.params.name // mengambil nilai pada parameter name 
let age = req.params.age // mengambil nilai pada parameter age

// membuat objek yang berisi data yang akan dijadikan response
// response berisi data nama dan umur sesuai dengan nilai parameter 
let response = {
nama: name, umur: age
}

// memberikan response dengan format JSON yang berisi objek di atas 
res.json(response)

})

// end-point "/bujur_sangkar" dengan method POST 
app.post("/bujur_sangkar", (req,res) => {
// menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik

let panjang = Number(req.body.panjang) // mengambil nilai panjang da ri body
let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body

let luas = panjang * lebar
let keliling = 2 * (panjang + lebar)

// membuat objek yang berisi data yang akan dijadikan response 
let response = {
panjang: panjang, lebar: lebar, luas: luas, keliling: keliling
}

// memberikan response dengan format JSON yang berisi objek di atas 
res.json(response)
})

app.post("/segitiga", (req,res) => {
    
    let alas = Number(req.body.alas) 
    let tinggi = Number(req.body.tinggi)
    let sisi = Number(req.body.sisi) 
    
    let luas = alas * tinggi / 2
    let keliling =  sisi + (sisi + sisi)
    
    let response = {
    alas: alas, 
    tinggi: tinggi,
    sisi: sisi ,    
    luas: luas, 
    keliling: keliling
    }
    
    res.json(response)
    })

app.post("/layang", (req,res) => {
    
    let d1 = Number(req.body.d1) 
    let d2 = Number(req.body.d2) 
    let sisi1 = Number(req.body.sisi1)
    let sisi2 = Number(req.body.sisi2) 
    
    let luas = d1 * d2 / 2
    let keliling =  2 * (sisi1 + sisi2)
    
    let response = {
    d1: d1, 
    d2: d2,
    sisi1: sisi1,
    sisi2: sisi2,        
    luas: luas, 
    keliling: keliling
    }
    
    res.json(response)
    })

app.post("/lingkaran", (req,res) => {

    let jari = Number(req.body.jari) 
    
    let luas = 3.14 * (jari * jari)
    let keliling =  3.14 * (2 * jari)
    
    let response = {
    jari: jari,    
    luas: luas, 
    keliling: keliling
    }
    
    res.json(response)
    })

app.post("/trapesium", (req,res) => {
        
    let a = Number(req.body.a) 
    let b = Number(req.body.b) 
    let tinggi = Number(req.body.tinggi)
    let miring = Number(req.body.miring) 
        
    let luas = (tinggi * (a + b))/2
    let keliling =  a + b + tinggi + miring
        
    let response = {
    a: a, 
    b: b,    
    tinggi: tinggi,    
    miring: miring,    
    luas: luas, 
    keliling: keliling
    }
        
    res.json(response)
    })

app.post("/kubus", (req,res) => {
    
    let sisi = Number(req.body.sisi) 
    
    let luasp = 6 * (sisi * sisi)
    let volume =  sisi * sisi * sisi
    
    let response = {
    sisi: sisi ,    
    luasp: luasp, 
    volume: volume
    }
    
    res.json(response)
    })

app.post("/balok", (req,res) => {
    
    let panjang = Number(req.body.panjang) 
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)

    let luasp = (2 * panjang * lebar) + (2 * panjang * tinggi) + (2 * lebar * tinggi)
    let volume =  panjang * lebar * tinggi
        
    let response = {
    panjang: panjang, 
    lebar: lebar,
    tinggi: tinggi,   
    luasp: luasp, 
    volume: volume
    }
        
    res.json(response)
    })

app.post("/tabung", (req,res) => {

    let r = Number(req.body.r) 
    let tinggi = Number(req.body.tinggi)
    
    let luasp = (2 * 3.14 * r * r) + (2 * 3.14 * r)
    let volume =   3.14 * r * r * tinggi
            
    let response = {
    r: r, 
    tinggi: tinggi,   
    luasp: luasp, 
    volume: volume
    }
            
    res.json(response)
    })

app.post("/kerucut", (req,res) => {
    
    let r = Number(req.body.r) 
    let tinggi = Number(req.body.tinggi)
    let miring = Number(req.body.miring)
    
    let luasp = (3.14 * r * r) + (3.14 * r * miring)
    let volume =   ((3.14 * r * r) * tinggi) /3
            
    let response = {
    r: r, 
    tinggi: tinggi, 
    miring: miring,  
    luasp: luasp, 
    volume: volume
    }
            
    res.json(response)
    })

// endpoint "/profil/nama/umur" dengan method GET 
app.get("/convert/celcius/:suhu", (req,res) => {
    
    // :name dan :age  diberikan titik dua didepan menunjukkan "name" dan "age"
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request
    
    // menampung data yang dikirimkan
    let celcius = req.params.celcius// mengambil nilai pada parameter name 
    let suhu = req.params.suhu // mengambil nilai pada parameter age
    let reamur = suhu*4/5
    let farenheit = ((9 * suhu)/5)+32
    let kelvin =  273 + (suhu*1)
    
    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter 
    let response = {
    celcius: suhu,
    reamur: reamur,
    farenheit: farenheit,
    kelvin: kelvin
    }
    
    // memberikan response dengan format JSON yang berisi objek di atas 
    res.json(response)
    
    })

app.get("/convert/reamur/:suhu", (req,res) => {
    
    let reamur = req.params.reamur
    let suhu = req.params.suhu 
    let celcius = (5 * suhu)/4
    let farenheit = ((9 * suhu)/4)+32
    let kelvin =  ((5 * suhu)/4) +273 + (suhu*1)
         
    let response = {
    reamur: suhu,
    celcius: celcius,
    farenheit: farenheit,
    kelvin: kelvin
    }
        
    res.json(response)
        
    })

app.get("/convert/farenheit/:suhu", (req,res) => {
  
    let farenheit = req.params.farenheit
    let suhu = req.params.suhu
    let celcius = ((suhu - 32)*5)/9
    let reamur = ((suhu - 32)*4)/9
    let kelvin =  (((suhu - 32)*5)/9)+ 273 + (suhu*1)

    let response = {
    farenheit: suhu,
    celcius: celcius,
    reamur: reamur,
    kelvin: kelvin
    }
    
    res.json(response)
    
    })

app.get("/convert/kelvin/:suhu", (req,res) => {
    
    let kelvin = req.params.kelvin
    let suhu = req.params.suhu
    let celcius = suhu - (273 * 1)
    let reamur = (4/5 * (suhu - (273 * 1)))
    let farenheit =  (((suhu - 32)*5)/9)+ (273 * 1)
    
    let response = {
    kelvin: suhu,
    celcius: celcius,
    reamur: reamur,
    farenheit: farenheit
    }
    
    res.json(response)
    
    })

//decimal, biner, octal, hexadecimal

// end-point "/decimal" dengan method POST
app.post("/decimal", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    
    let angka = Number(req.body.angka) // mengambil nilai panjang da ri body
    
    let biner=angka.toString(2)
    let oktal=angka.toString(8)
    let heksadesimal=angka.toString(16)
    
    // membuat objek yang berisi data yang akan dijadikan response 
    let response = {
    bildesimal : angka,
    bilbiner : biner,
    biloktal: oktal,
    bilheksadesimal : heksadesimal

    }
    
    // memberikan response dengan format JSON yang berisi objek di atas 
    res.json(response)
    })

app.post("/biner", (req,res) => {
    
    let angka = Number(req.body.angka) 
    
    let desimal=parseInt(angka,2)
    let oktal=parseInt(angka,2).toString(8)
    let heksadesimal=parseInt(angka,2).toString(16)
    
    let response = {
    bilbiner : angka,
    bildesimal : desimal,
    biloktal: oktal,
    bilheksadesimal : heksadesimal

    }
    
    res.json(response)
    })

app.post("/oktal", (req,res) => {
    
    let angka = Number(req.body.angka) 
        
    let desimal=parseInt(angka,8)
    let biner=parseInt(angka,8).toString(2)
    let heksadesimal=parseInt(angka,8).toString(16)
        
    let response = {
    biloktal : angka,
    bildesimal : desimal,
    bilbiner: biner,
    bilheksadesimal : heksadesimal
    
    }
        
    res.json(response)
    })

app.post("/heksadesimal", (req,res) => {
  
    let angka = Number(req.body.angka) 
        
    let desimal=parseInt(angka,16)
    let biner=parseInt(angka,16).toString(2)
    let oktal=parseInt(angka,16).toString(8)
        
    let response = {
    bilheksadesimal : angka,
    bildesimal : desimal,
    bilbiner: biner,
    biloktal : oktal
    
    }
        
    res.json(response)
    })

app.post("/bmi", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    
    let berat = Number(req.body.berat) // mengambil nilai panjang da ri body
    let tinggi = Number(req.body.tinggi) // mengambil nilai panjang da ri body
    let bmi = berat / (tinggi * tinggi)
    let status = ''
    
    // membuat objek yang berisi data yang akan dijadikan response 
    if(bmi < 18.5) {
        status = "kekurangan berat badan"
    }
    else if(bmi >= 18.5 && bmi < 25) {
        status = 'Normal'
    }
    else if(bmi >= 25 && bmi < 30) {
        status = 'berat badan berlebih'
    }
    else if(bmi >= 30) {
        status = "kegemukan (Obesitas)"
    }

    let response = {
    berat: berat,   
    tinggi: tinggi,
    bmi: bmi,
    status: status
    }

    console.log(response.berat)
    
    // memberikan response dengan format JSON yang berisi objek di atas 
    res.json(response)
    })

    app.listen(8000, () => {
        console.log("Server run on port 8000");
    })
    
    // end-point "/decimal" dengan method POST
app.post("/ganjilGenap", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    
    let inputAngka = Number(req.body.inputAngka) // mengambil nilai panjang da ri body
    let hitung = inputAngka % 2

    let hasil = ''

    if(hitung == 0) {
        hasil = "Bilangan genap"
    }
    else if(hitung == 1) {
        hasil = 'Bilangan ganjil'
    }
    // membuat objek yang berisi data yang akan dijadikan response 
    let response = {
    inputAngka: inputAngka, 
    hasil: hasil,    
    }
    
    // memberikan response dengan format JSON yang berisi objek di atas 
    res.json(response)
    })
