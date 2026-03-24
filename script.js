// Task Details Data
const taskDetails = {
    1: {
        title: "Pemadaman Kebakaran",
        icon: "🔥",
        content: `
            <h4>Kegiatan yang Dilakukan:</h4>
            <ul>
                <li>Merespon panggilan darurat kebakaran dengan cepat</li>
                <li>Menggunakan peralatan pemadam seperti selang air, foam, dan alat pemadam lainnya</li>
                <li>Menentukan strategi pemadaman berdasarkan jenis dan skala kebakaran</li>
                <li>Memastikan api benar-benar padam dan tidak menyala kembali</li>
                <li>Melakukan pendinginan area yang terbakar</li>
            </ul>
            <h4>Peralatan yang Digunakan:</h4>
            <ul>
                <li>Selang air (fire hose)</li>
                <li>Alat Pemadam Api Ringan (APAR)</li>
                <li>Mobil pemadam kebakaran</li>
                <li>Tangga hidrolik</li>
                <li>Baju tahan api dan helm pelindung</li>
            </ul>
        `
    },
    2: {
        title: "Penyelamatan Jiwa (Rescue)",
        icon: "🆘",
        content: `
            <h4>Kegiatan yang Dilakukan:</h4>
            <ul>
                <li>Mencari dan mengevakuasi korban dari bangunan yang terbakar</li>
                <li>Memberikan pertolongan pertama pada korban</li>
                <li>Menyelamatkan orang yang terjebak di ketinggian</li>
                <li>Evakuasi massal saat terjadi kebakaran di gedung bertingkat</li>
                <li>Menyelamatkan hewan peliharaan jika memungkinkan</li>
            </ul>
            <h4>Prioritas Penyelamatan:</h4>
            <ul>
                <li><strong>1. Manusia</strong> (prioritas utama)</li>
                <li><strong>2. Hewan</strong></li>
                <li><strong>3. Harta benda</strong> (jika aman dilakukan)</li>
            </ul>
        `
    },
    3: {
        title: "Pencegahan Kebakaran (Prevention)",
        icon: "🛡️",
        content: `
            <h4>Kegiatan yang Dilakukan:</h4>
            <ul>
                <li>Inspeksi keselamatan kebakaran di gedung dan fasilitas umum</li>
                <li>Memeriksa kelengkapan dan fungsi alat pemadam kebakaran</li>
                <li>Memberikan rekomendasi perbaikan sistem keselamatan</li>
                <li>Memastikan jalur evakuasi tidak terhalang</li>
                <li>Memeriksa instalasi listrik dan gas yang berpotensi bahaya</li>
            </ul>
            <h4>Area yang Diinspeksi:</h4>
            <ul>
                <li>Gedung perkantoran</li>
                <li>Pabrik dan industri</li>
                <li>Rumah sakit dan sekolah</li>
                <li>Pusat perbelanjaan</li>
                <li>Tempat ibadah</li>
                <li>Pemukiman padat penduduk</li>
            </ul>
        `
    },
    4: {
        title: "Edukasi dan Penyuluhan Masyarakat",
        icon: "📚",
        content: `
            <h4>Kegiatan yang Dilakukan:</h4>
            <ul>
                <li>Sosialisasi cara menggunakan APAR</li>
                <li>Pelatihan evakuasi kebakaran (fire drill)</li>
                <li>Penyuluhan tentang bahaya kebakaran di sekolah dan kantor</li>
                <li>Kampanye keselamatan kebakaran</li>
                <li>Demonstrasi pemadaman kebakaran</li>
                <li>Edukasi tentang penyebab umum kebakaran</li>
            </ul>
            <h4>Materi Edukasi:</h4>
            <ul>
                <li>Cara mencegah kebakaran di rumah</li>
                <li>Penggunaan alat pemadam yang benar</li>
                <li>Prosedur evakuasi darurat</li>
                <li>Nomor telepon darurat (113 atau 112)</li>
                <li>Pertolongan pertama pada korban kebakaran</li>
            </ul>
        `
    },
    5: {
        title: "Penanganan Bencana dan Situasi Darurat",
        icon: "⚠️",
        content: `
            <h4>Situasi yang Ditangani:</h4>
            <ul>
                <li>Kecelakaan lalu lintas (ekstraksi korban dari kendaraan)</li>
                <li>Banjir (evakuasi warga)</li>
                <li>Gempa bumi (pencarian korban di reruntuhan)</li>
                <li>Kebocoran gas berbahaya</li>
                <li>Pohon tumbang</li>
                <li>Hewan berbahaya yang masuk pemukiman</li>
                <li>Orang yang terjebak di lift atau tempat sempit</li>
            </ul>
            <h4>Koordinasi:</h4>
            <ul>
                <li>Bekerja sama dengan polisi</li>
                <li>Koordinasi dengan tim medis/ambulans</li>
                <li>Kolaborasi dengan SAR (Search and Rescue)</li>
                <li>Komunikasi dengan pemadam kebakaran dari wilayah lain</li>
            </ul>
        `
    },
    6: {
        title: "Pemeliharaan Peralatan dan Kendaraan",
        icon: "🔧",
        content: `
            <h4>Kegiatan yang Dilakukan:</h4>
            <ul>
                <li>Pemeriksaan rutin mobil pemadam kebakaran</li>
                <li>Perawatan selang, pompa air, dan peralatan pemadam</li>
                <li>Pengisian ulang tabung APAR</li>
                <li>Pengecekan alat komunikasi (radio, HT)</li>
                <li>Perawatan alat pelindung diri (APD)</li>
                <li>Simulasi dan latihan rutin</li>
            </ul>
            <h4>Jadwal Pemeliharaan:</h4>
            <ul>
                <li><strong>Harian:</strong> Cek kendaraan dan peralatan dasar</li>
                <li><strong>Mingguan:</strong> Tes pompa air dan sistem hidrolik</li>
                <li><strong>Bulanan:</strong> Inspeksi menyeluruh semua peralatan</li>
                <li><strong>Tahunan:</strong> Servis besar dan kalibrasi alat</li>
            </ul>
        `
    },
    7: {
        title: "Kesiapsiagaan 24/7",
        icon: "⏰",
        content: `
            <h4>Sistem Kerja:</h4>
            <ul>
                <li>Shift kerja bergantian (pagi, siang, malam)</li>
                <li>Standby di pos pemadam kebakaran</li>
                <li>Waktu respon maksimal 5-15 menit setelah panggilan</li>
                <li>Selalu dalam kondisi fit dan siap bertugas</li>
            </ul>
            <h4>Aktivitas Saat Standby:</h4>
            <ul>
                <li>Latihan fisik dan kebugaran</li>
                <li>Simulasi pemadaman kebakaran</li>
                <li>Belajar teknik penyelamatan baru</li>
                <li>Briefing dan diskusi kasus</li>
                <li>Pemeliharaan peralatan</li>
            </ul>
        `
    },
    8: {
        title: "Investigasi Penyebab Kebakaran",
        icon: "🔍",
        content: `
            <h4>Kegiatan yang Dilakukan:</h4>
            <ul>
                <li>Pemeriksaan lokasi kebakaran setelah api padam</li>
                <li>Mengidentifikasi titik awal kebakaran</li>
                <li>Mengumpulkan bukti dan saksi</li>
                <li>Membuat laporan investigasi</li>
                <li>Memberikan rekomendasi pencegahan</li>
            </ul>
            <h4>Penyebab Umum Kebakaran:</h4>
            <ul>
                <li>Korsleting listrik</li>
                <li>Kompor gas yang lupa dimatikan</li>
                <li>Rokok yang tidak dipadamkan dengan benar</li>
                <li>Lilin yang ditinggalkan menyala</li>
                <li>Bahan kimia yang mudah terbakar</li>
                <li>Sambaran petir</li>
            </ul>
        `
    }
};

// DOM Elements
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');
const detailButtons = document.querySelectorAll('.detail-btn');
const emergencyBtn = document.getElementById('emergency-btn');
const navLinks = document.querySelectorAll('.nav-link');

// Show Modal with Task Details
detailButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        const taskId = this.getAttribute('data-detail');
        const task = taskDetails[taskId];
        
        modalBody.innerHTML = `
            <div style="text-align: center; font-size: 60px; margin-bottom: 20px;">
                ${task.icon}
            </div>
            <h3>${task.title}</h3>
            ${task.content}
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Close Modal
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Emergency Button
emergencyBtn.addEventListener('click', function() {
    const confirmation = confirm('Apakah Anda ingin menghubungi nomor darurat 113?\n\nPastikan ini adalah situasi darurat yang sebenarnya.');
    
    if (confirmation) {
        alert('Dalam situasi nyata, Anda akan dihubungkan ke:\n\n📞 Nomor Darurat: 113 atau 112\n\n⚠️ Ini adalah demo website. Untuk keadaan darurat sebenarnya, segera hubungi nomor tersebut!');
    }
});

// Smooth Scroll for Navigation
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Get target section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Animated Counter for Statistics
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for Statistics Animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                if (stat.textContent === '0') {
                    animateCounter(stat);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Intersection Observer for Fade-in Animation
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Apply fade-in to sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(section);
});

// Task Card Click (alternative to button)
document.querySelectorAll('.task-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Only trigger if not clicking the button
        if (!e.target.classList.contains('detail-btn')) {
            const button = this.querySelector('.detail-btn');
            if (button) {
                button.click();
            }
        }
    });
});

// Active Navigation on Scroll
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('.section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add hover effect sound (optional - commented out)
// Uncomment if you want to add sound effects
/*
const hoverSound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGGS57OihUBELTKXh8bllHAU2jdXvzn0pBSh+zPDajzsKElyx6OyrWBUIQ5zd8sFuJAUuhM/z24k2CBhku+zooVARC0yl4fG5ZRwFNo3V7859KQUofsz');
*/

// Console welcome message
console.log('%c🚒 Website Pemadam Kebakaran', 'color: #d32f2f; font-size: 24px; font-weight: bold;');
console.log('%cTerima kasih telah mengunjungi website kami!', 'color: #666; font-size: 14px;');
console.log('%cNomor Darurat: 113 atau 112', 'color: #ff5722; font-size: 16px; font-weight: bold;');

// Prevent right-click on images (optional security)
// Uncomment if needed
/*
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
*/

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation for modal
document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'block') {
        if (e.key === 'ArrowRight') {
            // Navigate to next task (if implemented)
        } else if (e.key === 'ArrowLeft') {
            // Navigate to previous task (if implemented)
        }
    }
});

// Print functionality
function printPage() {
    window.print();
}

// Share functionality (if Web Share API is supported)
function shareWebsite() {
    if (navigator.share) {
        navigator.share({
            title: 'Tugas Pokok Pemadam Kebakaran',
            text: 'Pelajari tugas pokok pemadam kebakaran',
            url: window.location.href
        }).then(() => {
            console.log('Berhasil dibagikan');
        }).catch((error) => {
            console.log('Error sharing:', error);
        });
    } else {
        alert('Browser Anda tidak mendukung fitur berbagi');
    }
}

// Add scroll-to-top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: #d32f2f;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    display: none;
    z-index: 999;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#b71c1c';
    this.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '#d32f2f';
    this.style.transform = 'scale(1)';
});
