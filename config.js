import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285786539008', 'fahrul', true]
] 
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285786539008'
global.packname = 'Sticker Y'
global.author = '© fahrul'
global.namebot = '​Vynaa - MD'
global.wm = '© fahrul.me'
global.stickpack = 'By'
global.stickauth = '© fahrul'
// Link Sosmed
global.sig = 'https://instagram.com/fahrul_mt'
global.sgh = 'https://github.com/Rakrohaku9534'
global.sgc = '-'
// Donasi
global.psaweria = '-'
global.ptrakterr = '-'
global.povo = '-'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'OTDhji3Xqr'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "xCOpP5f36W",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})