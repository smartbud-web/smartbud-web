// 1. Tailwind UI 客製化品牌色調與字體配置
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#FDFBF7',  // 高雅溫潤奶油白背景
                    100: '#F6EFE0', // 沙灘大地色調
                    200: '#E9DEC3', // 溫和有機黏土線條
                    500: '#5F6F52', // 嫩芽粉綠
                    600: '#435334', // 松木深綠
                    700: '#254336', // 森林苔蘚墨綠
                    800: '#D2A350', // 璀璨晨曦金黃
                    900: '#9CA777', // 樂芽初萌青綠
                    dark: '#1C211A' // 內斂質感炭黑
                }
            },
            fontFamily: {
                sans: ['Nunito', 'Noto Sans TC', 'sans-serif'],
                serif: ['Playfair Display', 'serif']
            }
        }
    }
};

// 2. 頁面路由切換邏輯 (SPA)
function switchPage(pageId) {
    const pages = ['home', 'brands', 'shop', 'milestones', 'about', 'b2b'];
    pages.forEach(p => {
        const el = document.getElementById(`page-${p}`);
        if(el) {
            if(p === pageId) {
                el.classList.remove('hidden', 'opacity-0');
                el.classList.add('block', 'opacity-100');
            } else {
                el.classList.remove('block', 'opacity-100');
                el.classList.add('hidden', 'opacity-0');
            }
        }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 3. 行動版選單切換開關
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        menu.classList.add('hidden');
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
}

// 4. 購物車側邊抽屜開關邏輯
function toggleCartDrawer() {
    console.log("Toggle Cart Drawer Triggered");
    // 您原先的隨選購物車或抽屜動畫狀態變更程式碼放置此處
}

// 5. 語系切換邏輯 (EN / ZH-HK)
let currentLang = 'zh';
function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    document.getElementById('lang-indicator').innerText = currentLang.toUpperCase();
    document.getElementById('lang-indicator-mobile').innerText = currentLang.toUpperCase();
    // 執行對應的 DOM 語系文字更換...
}
