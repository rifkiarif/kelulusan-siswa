
    // Data kelulusan siswa
    const graduationData = {
    "3116581110": {
        name: "Ahmad Nafisah Maulana",
        status: "LULUS"
    },
    "0116488028": {
        name: "Ahmad Raditya Amarta",
        status: "LULUS"
    },
    "0109376820": {
        name: "Aris Bahtiar Izzatul Millah",
        status: "LULUS"
    },
    "0096118522": {
        name: "Hasbi Assidiqi",
        status: "LULUS"
    },
    "3108217321": {
        name: "Januar Diva Aulian",
        status: "LULUS"
    },
    "0108065534": {
        name: "Mareta Dwi Putri Anggraini",
        status: "LULUS"
    },
    "0105719491": {
        name: "Moh Bobi Bari Sul K",
        status: "LULUS"
    },
    "0097538821": {
        name: "Muhamad Abdur Rofiki",
        status: "LULUS"
    },
    "0092657183": {
        name: "Muhammad Nuril Asror Ismail",
        status: "LULUS"
    },
    "0109437480": {
        name: "Nabilla Zalfa Salsabilla",
        status: "LULUS"
    },
    "0102298532": {
        name: "Nur Ardian Kevin Firmansyah",
        status: "LULUS"
    },
    "3104222984": {
        name: "Putra",
        status: "LULUS"
    },
    "0106859873": {
        name: "Rava Frediansyah",
        status: "LULUS"
    },
    "0103085748": {
        name: "Saoqir Rohman",
        status: "LULUS"
    },
    "3092233927": {
        name: "Septiani Alifia",
        status: "LULUS"
    },
    "3091366434": {
        name: "Sitti Aisyah",
        status: "LULUS"
    },
    "0093504108": {
        name: "Zehrotul Jannah",
        status: "LULUS"
    },
    "0101663535": {
        name: "Abil Maulana Firmansyah",
        status: "LULUS"
    },
    "3105174671": {
        name: "Ahmad Fauzan Maulana",
        status: "LULUS"
    },
    "3089840294": {
        name: "Halifah",
        status: "LULUS"
    },
    "0102467827": {
        name: "Jelci Olifia",
        status: "LULUS"
    },
    "3102412350": {
        name: "Melinda",
        status: "LULUS"
    },
    "0101448153": {
        name: "Moch. Guntur Maulana",
        status: "LULUS"
    },
    "0093876864": {
        name: "Muhammad Aril",
        status: "LULUS"
    },
    "0106738497": {
        name: "Muhammad Fahmi Aditiya",
        status: "LULUS"
    },
    "0104651490": {
        name: "Muhammad Nuril Afton",
        status: "LULUS"
    },
    "3097154627": {
        name: "Nabila Khoirun Nisa",
        status: "LULUS"
    },
    "3101154414": {
        name: "Nor Laeli Safania",
        status: "LULUS"
    },
    "0107637826": {
        name: "Nova Dwi Afliyani",
        status: "LULUS"
    },
    "3109076870": {
        name: "Nursanti Hafifah",
        status: "LULUS"
    },
    "0105964799": {
        name: "Oktafia Norfadila",
        status: "LULUS"
    },
    "3103062417": {
        name: "Syavira Riski Fagilah",
        status: "LULUS"
    }
    };
    
    // Set waktu target untuk countdown (2 Juni 2025 jam 00:00:00)
    const targetDate = new Date('Jun 02, 2025 10:00:00').getTime();
    
    // Fungsi untuk menampilkan notifikasi
    function showNotification() {
        const notification = document.getElementById('notification');
        notification.classList.add('show');
        
        // Sembunyikan notifikasi setelah 3 detik
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
    
    // Fungsi untuk mengupdate countdown
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        // Jika countdown selesai
        if (distance <= 0) {
            document.getElementById('countdown').textContent = "00:00:00";
            document.getElementById('checkButton').disabled = false;
            document.getElementById('submitButton').disabled = false;
            return;
        }
        
        // Hitung hari, jam, menit, detik
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Tampilkan countdown (format: HH:MM:SS atau DD:HH:MM:SS)
        if (days > 0) {
            document.getElementById('countdown').textContent = 
                `${days} Hari ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            document.getElementById('countdown').textContent = 
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        
        // Perbarui setiap detik
        setTimeout(updateCountdown, 1000);
    }
    
    // Fungsi untuk menampilkan halaman tertentu
    function showPage(pageNumber) {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        // Jika mencoba mengakses halaman 2 sebelum countdown selesai
        if (pageNumber === 2 && distance > 0) {
            showNotification();
            return;
        }
        
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page' + pageNumber).style.display = 'block';
        
        // Reset form dan hasil ketika kembali ke halaman 2
        if (pageNumber === 2) {
            document.getElementById('nisn').value = '';
            document.getElementById('graduationResult').style.display = 'none';
            document.getElementById('errorResult').style.display = 'none';
            document.getElementById('checkForm').style.display = 'block';
        }
    }
    
    // Fungsi untuk memeriksa kelulusan
    function checkGraduation() {
        const nisn = document.getElementById('nisn').value.trim();
        const graduationResult = document.getElementById('graduationResult');
        const errorResult = document.getElementById('errorResult');
        const checkForm = document.getElementById('checkForm');
        const studentPhoto = document.getElementById('studentPhoto');
        
        // Sembunyikan semua hasil terlebih dahulu
        graduationResult.style.display = 'none';
        errorResult.style.display = 'none';
        
        // Periksa apakah NISN ada di database
        if (graduationData[nisn]) {
            // Tampilkan hasil kelulusan
            document.getElementById('resultName').textContent = graduationData[nisn].name;
            
            // Set foto siswa (asumsi foto disimpan dengan format NISN.jpg di folder photos/)
            studentPhoto.src = 'photos/' + nisn + '.jpg';
            studentPhoto.onerror = function() {
                // Jika foto tidak ditemukan, gunakan foto default
                this.src = 'photos/default.jpg';
                this.alt = 'Foto tidak tersedia';
            };
            
            checkForm.style.display = 'none';
            graduationResult.style.display = 'block';
        } else {
            // Tampilkan hasil error
            checkForm.style.display = 'none';
            errorResult.style.display = 'block';
        }
        
        // Scroll ke hasil
        graduationResult.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Inisialisasi saat halaman dimuat
    window.onload = function() {
        // Nonaktifkan tombol cek kelulusan
        document.getElementById('checkButton').disabled = true;
        document.getElementById('submitButton').disabled = true;
        
        // Mulai countdown
        updateCountdown();
        
        // Update judul countdown untuk menunjukkan tanggal target
        document.querySelector('.countdown-title').textContent = 
            'Pengumuman akan dibuka pada 02 Juni 2025 jam 10:00:00. Waktu tersisa:';
    };