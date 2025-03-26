document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen form dan tombol daftar
    const form = document.getElementById('form-join');
    const pesan = document.getElementById('pesan');

    // Ketika form disubmit
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Cegah pengiriman form secara otomatis

        // Cek apakah semua input diisi
        const nama = document.getElementById('nama').value;
        const kelas = document.getElementById('kelas').value;
        const whatsapp = document.getElementById('whatsapp').value;

        if (!nama || !kelas || !whatsapp) {
            // Jika ada input yang kosong
            pesan.textContent = 'Semua kolom wajib diisi!';
        } else {
            // Jika semua input valid
            pesan.textContent = '';
            // Proses pengiriman form atau aksi lain
            alert("Form berhasil dikirim!");

            // Mengosongkan input form setelah pengiriman
            document.getElementById('nama').value = '';
            document.getElementById('kelas').value = '';
            document.getElementById('whatsapp').value = '';
        }
    });
});
