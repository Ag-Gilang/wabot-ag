let handler = async m => m.reply(`
*RULES BAGI PENGGUNA AG BOT*
    
➤ Tolong Gunakan Delay Jangan Spam Saat Menggunakan Bot, Mentang Mentang Gratis Diborong semua.
➤ Call/VC Bot Auto Block.
➤ Jangan Call/VC Bot Kalau Tidak aktif.
➤ Bot tidak aktif 24 jam, jadi tergantung kalau ownernya lagi ada waktu botnya juga on.

━━━━━━━[ *PENTING!* ]━━━━━━━━
*➤ Bot tidak menyimpan gambar, video,  audio, dan dokumen yang anda kirim*
*➤ Bot tidak akan pernah meminta anda untuk memberikan informasi pribadi*
*➤ Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot*
*➤ Jika kamu menelpon bot Dan di block, Owner Tidak Bertanggung Jawab*
━━━━━━━━━━━━━━━━━━━━━━━━

*Konsekuensi Bila Melanggar Rules*:
Bot Akan Memblokir Kamu Atau Keluar Dari Grup Yang Kamu Kelola!. 
`.trim()) // ini rules Agbot

handler.help = ['rules']
handler.tags = ['main']
handler.command = /^(rules)$/i

handler.limit = false

module.exports = handler


