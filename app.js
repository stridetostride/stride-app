// เริ่มต้นแผนที่
let map = null;

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    initNavigation();
});

function initMap() {
    map = L.map('map', { zoomControl: false }).setView([13.688, 100.526], 15);
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    
    setTimeout(() => {
        map.invalidateSize();
    }, 100);
}

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const screens = document.querySelectorAll('.screen');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetScreen = item.dataset.screen;
            
            // เปลี่ยนสถานะเมนู
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // เปลี่ยนหน้าจอ
            screens.forEach(screen => screen.classList.remove('active'));
            document.getElementById(targetScreen).classList.add('active');
            
            // ถ้ากลับมาหน้าแผนที่ รีเฟรชแผนที่
            if (targetScreen === 'screen-map' && map) {
                setTimeout(() => map.invalidateSize(), 50);
            }
        });
    });
}

function startJourney() {
    alert('🚀 เริ่มบันทึกการเดินทาง! (ต่อไปจะเชื่อมกับ GPS)');
}

function toggleMenu() {
    alert('เมนูอื่นๆ จะมาเร็วๆ นี้ครับ!');
}
