let handler = async m => m.reply(`
*「 LIST HARGA SEWA BOT 」*

❒ Sewa = _5k/grup (1 minggu)_
❒ Sewa = _10k/grup (2 minggu)_
❒ Sewa = _15k/grup (1 bulan)_
❒ Free = _24 jam Bot Masuk Ke Group Kalian Setelah Itu Bot Akan Keluar_

◪ *PEMBAYARAN BISA MELALUI*

❒ _PULSA_
❒ _GOPAY_
❒ _OVO_
❒ _DANA_

◪ *KEUNTUNGAN SEWA BOT*

❒ *Fitur Premium Terbuka*
❒ *Limit UNLIMITED*
❒ *Bisa Menyuruh Bot Buka/Tutup Group*
❒ *Kick Orang*
❒ *Add Orang*
❒ *Anti Link On*
❒ *Fitur Game Banyak Sepuas Nya Main*
❒ *Bisa Memasukkan Bot Ke dalam Grup*

◪ *Jika Minat Hubungi owner*
◪ *Syarat gratis invite bot,Follow ig Owner*
_https://www.instagram.com/_aryagilang/_

Ingin Jadi Bot Seperti ini?
ketik #jadibot
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewabot', 'buypremium']
handler.tags = ['main']
handler.command = /^(sewabot|buypremium)$/i

handler.limit = false

module.exports = handler
