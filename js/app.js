let currentLang = 'zh';

const defaultCompanyLogoSVG = `
    <svg class="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="38" r="14" fill="#D2A350" fill-opacity="0.25"/>
        <circle cx="50" cy="38" r="9" fill="#D2A350" fill-opacity="0.85"/>
        <line x1="50" y1="18" x2="50" y2="23" stroke="#D2A350" stroke-width="2" stroke-linecap="round"/>
        <path d="M50 78C50 63 64 56 64 56C64 56 52 58 50 66C48 58 36 56 36 56C36 56 50 63 50 78Z" fill="#5F6F52"/>
        <path d="M50 82V65" stroke="#5F6F52" stroke-width="3" stroke-linecap="round"/>
        <path d="M28 82H72" stroke="#254336" stroke-width="2" stroke-linecap="round"/>
    </svg>
`;
const defaultCompanyLogoLargeSVG = `
    <svg class="w-48 h-48 drop-shadow-xl" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="38" r="15" fill="#D2A350" fill-opacity="0.25"/>
        <circle cx="50" cy="38" r="10" fill="#D2A350" fill-opacity="0.85"/>
        <line x1="50" y1="17" x2="50" y2="22" stroke="#D2A350" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M50 78C50 63 65 55 65 55C65 55 52 57 50 66C48 57 35 55 35 55C35 55 50 63 50 78Z" fill="#5F6F52"/>
        <path d="M50 82V65" stroke="#5F6F52" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M22 82H78" stroke="#254336" stroke-width="2" stroke-linecap="round"/>
    </svg>
`;

const dictionary = {
    zh: {
        "lbl-nav-shop": "線上選品店",
        "lbl-learn-more": "了解品牌資料",
        "lbl-read-milestone": "閱讀里程碑對應",
        "lbl-go-shop": "前往選品店購買",
        
        // Cart Strings
        "cart-title": "您的購物車",
        "cart-empty": "您的購物車是空的。",
        "cart-total-label": "總計 (HKD)",
        "btn-cart-checkout": "前往安全結帳區",
        "btn-add-cart": "加入購物車",
        "btn-buy-now": "直接購買",
        "msg-added-cart": "已加入購物車！",
        "msg-no-stripe": "未設置直接購買連結，已為您加入購物車。",
        "msg-checkout": "導向結帳頁面中...",

        "lbl-b2b-sole": "品牌總代 B2B",
        "lbl-b2b-retail": "品牌經銷合作",

        // Checkout Page Strings
        "checkout-back-btn": "返回選品店繼續購物",
        "chk-title-contact": "聯絡人與配送資訊",
        "chk-lbl-email": "電子郵件 Email *",
        "chk-lbl-phone": "聯絡電話 Phone *",
        "chk-lbl-fn": "名字 First Name *",
        "chk-lbl-ln": "姓氏 Last Name *",
        "chk-lbl-address": "詳細配送地址 Shipping Address *",
        "chk-title-payment": "安全付款資訊",
        "chk-payment-note": "此為展示系統。在正式環境中，此處將無縫嵌入 Stripe 安全結帳模組以保護您的信用卡資訊。",
        "chk-title-summary": "<span>訂單摘要</span> <i class=\"fa-solid fa-receipt text-brand-500\"></i>",
        "chk-lbl-subtotal": "商品小計 Subtotal",
        "chk-lbl-shipping": "運費 Shipping",
        "chk-lbl-free": "免運費 Free",
        "chk-lbl-total": "總計 Total",
        "chk-btn-pay": "確認付款並送出訂單",
        "chk-secure-note": "受到 256-bit SSL 銀行級加密保護",
        "chk-success-title": "訂單成立！感謝您的購買。",
        "chk-success-desc": "我們已收到您的訂單（模擬展示）。訂單確認信已發送至您的電子郵件信箱。您的包裹將在 2-3 個工作天內為您送達。",
        "chk-success-order-num": "訂單編號 Order Number",
        "chk-btn-home": "返回首頁 Back to Home"
    },
    en: {
        "lbl-nav-shop": "Shop",
        "lbl-learn-more": "Discover Brand",
        "lbl-read-milestone": "View Milestones",
        "lbl-go-shop": "Go to Shop",

        // Cart Strings
        "cart-title": "Your Cart",
        "cart-empty": "Your cart is currently empty.",
        "cart-total-label": "Total (HKD)",
        "btn-cart-checkout": "Proceed to Checkout",
        "btn-add-cart": "Add to Cart",
        "btn-buy-now": "Buy Directly",
        "msg-added-cart": "Added to cart!",
        "msg-no-stripe": "Direct link missing, added to cart instead.",
        "msg-checkout": "Redirecting to checkout page...",

        "lbl-b2b-sole": "Sole Distribution",
        "lbl-b2b-retail": "Retail Dealership",

        // Checkout Page Strings
        "checkout-back-btn": "Back to Shop",
        "chk-title-contact": "Contact & Shipping Info",
        "chk-lbl-email": "Email Address *",
        "chk-lbl-phone": "Phone Number *",
        "chk-lbl-fn": "First Name *",
        "chk-lbl-ln": "Last Name *",
        "chk-lbl-address": "Full Shipping Address *",
        "chk-title-payment": "Secure Payment Info",
        "chk-payment-note": "This is a demo. In production, a secure Stripe checkout module will be embedded here seamlessly.",
        "chk-title-summary": "<span>Order Summary</span> <i class=\"fa-solid fa-receipt text-brand-500\"></i>",
        "chk-lbl-subtotal": "Subtotal",
        "chk-lbl-shipping": "Shipping",
        "chk-lbl-free": "Free",
        "chk-lbl-total": "Total",
        "chk-btn-pay": "Confirm & Place Order",
        "chk-secure-note": "Secured by 256-bit SSL Bank-grade Encryption",
        "chk-success-title": "Order Confirmed! Thank You.",
        "chk-success-desc": "We have received your order (Demo). A confirmation email has been sent to you. Your package will arrive in 2-3 business days.",
        "chk-success-order-num": "Order Number",
        "chk-btn-home": "Back to Home Page"
    }
};

// Advanced Data Structures
const defaultShopProducts = [
    { id: 'prod_1', brand: 'tidytot', title_zh: "TidyTot Ultimate Baby Weaning Bundle", title_en: "TidyTot Ultimate Baby Weaning Bundle", price: 398, desc_zh: "經典防髒托盤與防水圍兜完美合組。", desc_en: "Classic mess-free protective tray bundle.", checkout: "https://buy.stripe.com/test_eVqdRa2wTalR14y3Sha7C00", image: "" },
    { id: 'prod_2', brand: 'doddl', title_zh: "Doddl 專利兒童三點式人體工學餐具", title_en: "Doddl Patented Ergonomic Cutlery Set", price: 238, desc_zh: "短手柄防滑防嗆結構，加速精細手腕發育。", desc_en: "Shorter contours automatically direct fingers.", checkout: "", image: "" },
    { id: 'prod_3', brand: 'qbi', title_zh: "QBI 兒童益智磁軌玩具入門組", title_en: "QBI STEM Magnet Track Starter Set", price: 480, desc_zh: "六面皆可拼吸磁立方，探索三維幾何。", desc_en: "Interlocking six-faced magnetic track blocks.", checkout: "", image: "" },
    { id: 'prod_4', brand: 'goki', title_zh: "Goki 經典大自然原生彩虹疊疊樂", title_en: "Goki Classic Timber Stacking Rainbow", price: 188, desc_zh: "選用歐盟 FSC 永續林實木製造，安全無毒。", desc_en: "Eco-friendly FSC German forestry coated woods.", checkout: "", image: "" }
];

const defaultAboutContent = {
    founder_zh: "「看著 Smart Bud 的標誌——那一輪溫慢的太陽與破土而出的嫩芽，這正是我們創立品牌的初衷：用愛與科學，用心培育每一顆正在探索世界的幼芽。」\n\n育兒是一場寶寶與父母共同成長的奇妙旅程。在節奏緊湊的香港，現代媽媽常常在『給孩子最好』與『如何平衡生活』之間感到焦慮。\n\nSmart Bud (樂芽) 的誕生，不是為了盲目追隨潮流，而是為了創造有意義的連結。幫助孩子在 0-5 歲的黃金期自然探索、建立自信。",
    founder_en: "\"The Smart Bud emblem—a warm sun nurturing a resilient young sprout—perfectly captures our core mission: to nurture every child with scientific care, thoughtful guidance, and unconditional love.\"\n\nParenting is a beautiful, shared milestone of growth. In a fast-paced city like Hong Kong, modern parents constantly navigate the tension between providing the absolute best and maintaining life balance.\n\nSmart Bud was founded to create Meaningful Connections, helping children explore naturally and build autonomy during their golden years.",
    p1_zh: "專注於 0-5 歲關鍵發育期，嚴選有助於精細動作、認知邏輯與情感自主的選品，支持孩子全面發育。",
    p2_zh: "所有選品必須通過最高規格國際安全認證（EN71/ASTM）。堅持挑選高品質耐用且安全的環境友善材質。",
    p3_zh: "兼具國際設計美學與極高的實用機能，完美融入香港都市家庭的精緻空間。",
    p4_zh: "不只銷售，更透過 IG 知識與 WhatsApp 媽咪社群，提供即時、專業的在地化引導與陪伴。"
};

const defaultB2BContent = {
    intro_zh: "在 Smart Bud，我們深知拓展全新市場的挑戰。對於一個重視精湛工藝、頂級安全與環境永續價值的跨國品牌而言，您需要的絕不只是一個單純將貨品上架的批發商，而是一個深諳品牌營銷、珍視品牌資產且具備全渠道價格管控實力的戰略合作夥伴。\n\n我們已成功拿下英國 Doddl 的香港獨家總代理（Sole Distribution），並建立多個頂尖品牌的官方授權結構。我們對渠道的嚴格維護、對整體行銷的投入，是我們商業操盤能力的最佳證明。",
    s1_title: "第 1-3 個月：本地化定位與全渠道價格管控",
    s2_title: "第 4-6 個月：跨店社群網絡引爆與高轉化 KOL 營銷",
    s3_title: "第 7-12 個月：線下精品陳列與極致視覺衝擊",
    retail_intro_zh: "您是深耕中高端母嬰客群、重視環境永續與發育心理學的精品店主或網店代表嗎？Smart Bud 誠邀香港各區精品店加入我們的「品牌零售經銷網絡」，提供靈活起批量、全渠道行銷素材，並嚴格落實地區控價，共同傳遞高水準的科學育兒生活。"
};

// ================= DYNAMIC BRANDS DATABASE =================
const defaultBrandsDb = [
    { 
        id: 'doddl', name: 'Doddl', badge: '香港總代理', age: '適用：12 個月以上', title: 'Doddl｜英國人體工學餐具', 
        desc: '源自英國的餐具美學革命。專利三點式人體工學持握孔道，使幼兒無需代償即可解鎖自主進食。', features: '鍛鍊手部精細動作\n直覺式使用', tabId: '1-3y',
        logo: './assets/doddlLogo.webp' // <-- ADDED PATH
    },
    { 
        id: 'tidytot', name: 'Tidy Tot', badge: '官方零售商', age: '適用：6 個月以上', title: 'Tidy Tot｜英國防髒托盤圍兜', 
        desc: '引領感官探索，解放媽媽勞動。給予寶寶自由捏拿、嘗試、試錯的探索邊界。', features: '防水易清洗\n收納方便', tabId: '0-1y',
        logo: './assets/tidyTotLogo.avif' // <-- ADDED PATH
    },
    { 
        id: 'qbi', name: 'QBI', badge: '官方零售商', age: '適用：2 歲以上', title: 'QBI｜益智磁吸軌道玩具', 
        desc: '亞太新一代 STEAM 啟蒙先鋒。QBI 將強力磁吸與精細軌道邏輯完美融合。', features: 'STEAM 邏輯啟蒙\n安全磁吸設計', tabId: '3-5y',
        logo: './assets/qbiLogo.webp' // <-- ADDED PATH
    },
    { 
        id: 'goki', name: 'Goki', badge: '官方零售商', age: '適用：0 歲以上', title: 'Goki｜德國經典木玩', 
        desc: '源自德國近半世紀的傳統木質底蘊。每一塊木質均取自歐洲合法森林（FSC認證）。', features: 'FSC 環保實木\n無毒安全水性漆', tabId: '3-5y',
        logo: './assets/gokiLogo.png' // <-- ADDED PATH
    }
];
// ================= SHOP DATABASE =================
const defaultShopDb = [
    { id: 'prod_1', brand: 'Doddl', title_zh: 'Doddl 學習餐具', title_en: 'Doddl Cutlery', price: 198, checkout: '', desc_zh: '專利三點式人體工學', desc_en: 'Ergonomic design', image: './assets/doddlProductLogo.webp' },
    { id: 'prod_2', brand: 'Tidy Tot', title_zh: '防髒托盤圍兜套裝', title_en: 'Bib & Tray Bundle', price: 350, checkout: '', desc_zh: '全面防水防髒', desc_en: 'Waterproof', image: './assets/TidyTotBibAndTrayBundle.webp' },
    { id: 'prod_3', brand: 'QBI', title_zh: '益智磁吸軌道玩具', title_en: 'Magnetic Track Toy', price: 450, checkout: '', desc_zh: 'STEAM 邏輯啟蒙', desc_en: 'STEAM learning', image: './assets/qbiProduct.webp' },
    { id: 'prod_4', brand: 'Goki', title_zh: '德國經典木玩', title_en: 'Classic Wooden Toy', price: 220, checkout: '', desc_zh: 'FSC 環保實木', desc_en: 'FSC Wood', image: './assets/gokiProduct.jpg' }
];

let brandsDb = JSON.parse(localStorage.getItem('sb_brands_db')) || defaultBrandsDb;

let shopDb = JSON.parse(localStorage.getItem('sb_shop_db')) || defaultShopDb;
let aboutDb = JSON.parse(localStorage.getItem('sb_about_db')) || defaultAboutContent;
let b2bDb = JSON.parse(localStorage.getItem('sb_b2b_db')) || defaultB2BContent;
let cartDb = JSON.parse(localStorage.getItem('sb_cart_db')) || [];
let generalDb = JSON.parse(localStorage.getItem('sb_general_db')) || {};
let contactDb = JSON.parse(localStorage.getItem('sb_contact_db')) || {};
let leadsDb = JSON.parse(localStorage.getItem('sb_leads_db')) || [];


// Temporary storage for product images Base64 during creation
let currentUploadedProductPhotoBase64 = '';

// ================= UTILS & PAGE ROUTING =================
function safeSetText(id, text) { const el = document.getElementById(id); if (el) el.innerText = text || ''; }
function safeSetHTML(id, html) { const el = document.getElementById(id); if (el) el.innerHTML = html || ''; }
function safeSetVal(id, val) { const el = document.getElementById(id); if (el) el.value = val || ''; }

function switchPage(pageId) {
    const pages = ['home', 'brands', 'shop', 'milestones', 'about', 'b2b', 'checkout', 'admin'];
    pages.forEach(p => {
        const el = document.getElementById(`page-${p}`);
        const btnNav = document.getElementById(`btn-nav-${p}`);
        const btnMob = document.getElementById(`btn-mob-${p}`);
        
        if (p === pageId) {
            if (el) { el.classList.remove('hidden'); setTimeout(() => { el.classList.remove('opacity-0'); el.classList.add('opacity-100', 'block'); }, 50); }
            if (btnNav) { btnNav.classList.add('text-brand-800', 'border-brand-800'); btnNav.classList.remove('text-brand-700', 'border-transparent'); }
            if (btnMob) { btnMob.classList.add('bg-brand-900/30', 'text-brand-700', 'font-bold'); }
            
            // Trigger checkout render if opening checkout page
            if (p === 'checkout') renderCheckoutPage();

            // NEW: Explicitly trigger the General Tab load when entering the Admin console
            if (p === 'admin') switchAdminTab('general');

        } else {
            if (el) { el.classList.remove('opacity-100', 'block'); el.classList.add('opacity-0', 'hidden'); }
            if (btnNav) { btnNav.classList.remove('text-brand-800', 'border-brand-800'); btnNav.classList.add('text-brand-700', 'border-transparent'); }
            if (btnMob) { btnMob.classList.remove('bg-brand-900/30', 'text-brand-700', 'font-bold'); }
        }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Localization
function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localizeApp();
    showToast(currentLang === 'zh' ? "語言已切換為：繁體中文" : "Language switched to English");
}

function localizeApp() {
    const trans = dictionary[currentLang];
    for (const [key, value] of Object.entries(trans)) { safeSetHTML(key, value); }
    syncFrontContent();
    renderShopProducts();
    renderCartUI();
    safeSetText('lang-indicator', currentLang === 'zh' ? 'EN' : '繁中');
    safeSetText('lang-indicator-mobile', currentLang === 'zh' ? 'EN' : '繁中');
}

// Sync Editable Contents
function syncFrontContent() {
    const isZH = currentLang === 'zh';
    
    // 1. General Hero & Navigation Content
    if (generalDb.brandTitle) {
        safeSetText('nav-brand-title', generalDb.brandTitle);
        safeSetText('footer-brand-title', generalDb.brandTitle);
    }
    if (generalDb.brandSubtitleZH && isZH) safeSetText('nav-brand-subtitle', generalDb.brandSubtitleZH);
    
    if (isZH) {
        if (generalDb.heroHeadlineZH) safeSetText('hero-headline', generalDb.heroHeadlineZH);
        if (generalDb.heroSubheadlineZH) safeSetText('hero-subheadline', generalDb.heroSubheadlineZH);
    } else {
        if (generalDb.heroHeadlineEN) safeSetText('hero-headline', generalDb.heroHeadlineEN);
        if (generalDb.heroSubheadlineEN) safeSetText('hero-subheadline', generalDb.heroSubheadlineEN);
    }

    // 2. Contact Info & Footer Links
    if (contactDb.email) document.getElementById('footer-email-icon').href = `mailto:${contactDb.email}`;
    if (contactDb.waLink) document.getElementById('footer-whatsapp-icon').href = contactDb.waLink;
    if (contactDb.ig) document.getElementById('footer-instagram-icon').href = contactDb.ig;
    if (contactDb.copyright) safeSetText('footer-copyright', contactDb.copyright);

    // 3. About Section (Your original code)
    safeSetText('founder-journey-content', isZH ? aboutDb.founder_zh : aboutDb.founder_en);
    safeSetText('promise-p1-desc-front', isZH ? aboutDb.p1_zh : "Focusing on the critical 0-5 development window, we select products that naturally stimulate fine motor skills.");
    safeSetText('promise-p2-desc-front', isZH ? aboutDb.p2_zh : "Every item clears the highest international safety benchmarks (EN71/ASTM).");
    safeSetText('promise-p3-desc-front', isZH ? aboutDb.p3_zh : "We curate baby essentials that harmoniously blend sleek global aesthetics with high functionality.");
    safeSetText('promise-p4-desc-front', isZH ? aboutDb.p4_zh : "Beyond retail, we provide local mothers with real-time community support.");
    
    // 4. B2B Section (Your original code)
    safeSetText('b2b-intro-text', isZH ? b2bDb.intro_zh : "We are your strategic partner deeply versed in localized brand equity preservation and strict omni-channel price control.");
    safeSetText('b2b-retail-intro-text', isZH ? b2bDb.retail_intro_zh : "We invite premium boutiques and pediatric setups across HK to join our retail dealership network.");
    safeSetText('timeline-s1-title', b2bDb.s1_title);
    safeSetText('timeline-s2-title', b2bDb.s2_title);
    safeSetText('timeline-s3-title', b2bDb.s3_title);

    // 5. Logo Management (Your original code)
    // 5. Logo Management (Using Assets Folder)
    const companyLogoPath = './assets/SmartBudLogo.jpeg';
    
    const slots = document.querySelectorAll('.company-logo-slot');
    const lSlots = document.querySelectorAll('.company-logo-large-slot');
    
    slots.forEach(s => s.innerHTML = `<img src="${companyLogoPath}" class="w-full h-full object-cover">`);
    lSlots.forEach(s => s.innerHTML = `<img src="${companyLogoPath}" class="w-full h-full object-cover rounded-[40px] shadow-lg">`);
    // 6. Brand Logos Sync
    ['doddl', 'tidytot', 'qbi', 'goki'].forEach(brand => {
        const savedBrandLogo = localStorage.getItem(`sb_brand_logo_${brand}`);
        const brandSlots = document.querySelectorAll(`.brand-logo-slot-${brand}`);
        brandSlots.forEach(s => {
            s.innerHTML = savedBrandLogo 
                ? `<img src="${savedBrandLogo}" class="h-full w-auto object-contain drop-shadow-sm">` 
                : `<span class="text-lg font-black text-brand-800 uppercase tracking-widest opacity-40">${brand}</span>`;
        });
    });
}

// Interactive UI
function toggleFlipCard(card) { card.style.transform = card.style.transform === "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)"; }
function toggleMobileMenu() {
    const mobMenu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    if (mobMenu.classList.contains('hidden')) { mobMenu.classList.remove('hidden'); icon.className="fa-solid fa-xmark text-2xl"; } 
    else { mobMenu.classList.add('hidden'); icon.className="fa-solid fa-bars text-2xl"; }
}
function setActiveTimelineStep(step) {
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`btn-step-${i}`).className = i === step ? "py-3 text-xs sm:text-sm font-bold rounded-xl transition-all duration-300 bg-brand-700 text-white shadow" : "py-3 text-xs sm:text-sm font-bold rounded-xl transition-all duration-300 text-gray-500 hover:text-brand-700";
        const panel = document.getElementById(`step-panel-${i}`);
        if (i === step) { panel.classList.remove('hidden'); setTimeout(() => panel.classList.replace('opacity-0', 'opacity-100'), 50); } 
        else { panel.classList.replace('opacity-100', 'opacity-0'); panel.classList.add('hidden'); }
    }
}
function switchMilestoneTab(tabId) {
    ['0-1y', '1-3y', '3-5y'].forEach(t => {
        const btn = document.getElementById(`tab-${t}`), panel = document.getElementById(`panel-${t}`);
        if (t === tabId) { btn.className = "py-4 px-4 rounded-3xl text-xs font-extrabold bg-brand-700 text-white shadow-md transition-all"; panel.classList.remove('hidden'); setTimeout(() => panel.classList.replace('opacity-0', 'opacity-100'), 50); } 
        else { btn.className = "py-4 px-4 rounded-3xl text-xs font-extrabold bg-white text-brand-700 hover:bg-brand-100 transition-all border border-brand-200/50"; panel.classList.add('opacity-0', 'hidden'); }
    });
}
function toggleB2BSegment(seg) {
    document.getElementById('btn-segment-sole').className = seg === 'sole' ? "flex-1 py-3.5 rounded-full text-xs font-black bg-brand-700 text-white shadow-md" : "flex-1 py-3.5 rounded-full text-xs font-black text-brand-700 hover:bg-brand-50";
    document.getElementById('btn-segment-retail').className = seg === 'retail' ? "flex-1 py-3.5 rounded-full text-xs font-black bg-brand-700 text-white shadow-md" : "flex-1 py-3.5 rounded-full text-xs font-black text-brand-700 hover:bg-brand-50";
    document.getElementById('segment-sole-distribution').classList[seg === 'sole' ? 'replace' : 'replace'](seg === 'sole' ? 'hidden' : 'block', seg === 'sole' ? 'block' : 'hidden');
    document.getElementById('segment-retail-dealership').classList[seg === 'retail' ? 'replace' : 'replace'](seg === 'retail' ? 'hidden' : 'block', seg === 'retail' ? 'block' : 'hidden');
}
function showToast(msg) {
    const t = document.getElementById('toast');
    document.getElementById('toast-message').innerText = msg;
    t.classList.replace('translate-y-12', 'translate-y-0'); t.classList.replace('opacity-0', 'opacity-100');
    setTimeout(() => { t.classList.replace('translate-y-0', 'translate-y-12'); t.classList.replace('opacity-100', 'opacity-0'); }, 4000);
}

// ================= SHOP & CART LOGIC =================
function renderShopProducts() {
    const isZH = currentLang === 'zh';
    const grid = document.getElementById('shop-products-grid');
    const adminBody = document.getElementById('admin-product-table-body');
    
    if (grid) {
        grid.innerHTML = shopDb.map(p => {
            const img = p.image ? `<img src="${p.image}" class="w-full h-full object-cover rounded-2xl">` : `<div class="flex flex-col items-center justify-center h-full w-full bg-brand-100/60 p-4"><i class="fa-solid fa-gift text-brand-500 text-3xl mb-2"></i><span class="text-[10px] font-black tracking-widest text-brand-800 uppercase">${p.brand || 'Premium'}</span></div>`;
            
            // Clean validation to check if a valid checkout link exists
            const hasSecureLink = p.checkout && p.checkout.trim() !== '' && p.checkout !== '#';
            
            // Dynamically assign attributes: prevents execution of fallback click handler if link exists
            const buyNowAttribute = hasSecureLink 
                ? `href="${p.checkout.trim()}" target="_blank"` 
                : `href="#" onclick="directBuyFallback('${p.id}'); return false;"`;
            
            return `
                <div class="bg-white rounded-[32px] border border-brand-200/40 p-5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div class="aspect-square bg-brand-50 rounded-2xl mb-4 overflow-hidden relative flex items-center justify-center border border-brand-200/10">
                            <span class="absolute top-2 left-2 bg-brand-800 text-white text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-wide">${isZH ? "精選好物" : "Best Buy"}</span>
                            ${img}
                        </div>
                        <h3 class="text-base font-black text-brand-700 mb-1">${isZH ? p.title_zh : p.title_en}</h3>
                        <p class="text-xs text-gray-500 font-medium mb-4">${isZH ? p.desc_zh : p.desc_en}</p>
                    </div>
                    <div>
                        <div class="flex items-center justify-between mb-4 pt-2 border-t border-brand-100">
                            <span class="text-[10px] text-gray-400 font-extrabold uppercase">Price</span>
                            <span class="text-lg font-black text-brand-800">HKD ${p.price}</span>
                        </div>
                        <div class="flex flex-col gap-2">
                            <button onclick="addToCart('${p.id}')" class="w-full py-2.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-black text-center hover:bg-brand-100 transition-all flex items-center justify-center gap-2">
                                <i class="fa-solid fa-cart-plus"></i> ${dictionary[currentLang]['btn-add-cart']}
                            </button>
                            <a ${buyNowAttribute} class="w-full py-2.5 rounded-full bg-brand-700 text-white text-xs font-black text-center hover:bg-brand-500 shadow-md transition-all flex items-center justify-center gap-2">
                                ${dictionary[currentLang]['btn-buy-now']} <i class="fa-solid fa-bolt"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    if (adminBody) {
        adminBody.innerHTML = shopDb.map(p => `
            <tr class="border-b border-brand-200/40 hover:bg-brand-50/50">
                <td class="py-2">${p.image ? `<img src="${p.image}" class="w-8 h-8 object-cover rounded-md">` : `<div class="w-8 h-8 bg-brand-200 rounded-md flex items-center justify-center text-[10px] font-black">${p.brand ? p.brand[0].toUpperCase() : 'P'}</div>`}</td>
                <td class="py-2 font-bold text-brand-700 truncate max-w-[150px]">${p.title_zh}</td>
                <td class="py-2 capitalize text-brand-800">${p.brand || 'Other'}</td>
                <td class="py-2 font-black">HKD ${p.price}</td>
                <td class="py-2 text-right space-x-1">
                    <button onclick="editProduct('${p.id}')" class="px-2 py-1 bg-brand-700 text-white rounded text-[10px] font-bold">編輯</button>
                    <button onclick="deleteProduct('${p.id}')" class="px-2 py-1 bg-red-50 text-red-600 rounded text-[10px] font-bold">刪除</button>
                </td>
            </tr>
        `).join('');
    }
}

function toggleCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer.classList.contains('cart-drawer-closed')) {
        drawer.classList.replace('cart-drawer-closed', 'cart-drawer-open');
        overlay.classList.replace('cart-overlay-closed', 'cart-overlay-open');
        renderCartUI();
    } else {
        drawer.classList.replace('cart-drawer-open', 'cart-drawer-closed');
        overlay.classList.replace('cart-overlay-open', 'cart-overlay-closed');
    }
}

function addToCart(prodId) {
    const existing = cartDb.find(item => item.id === prodId);
    if (existing) {
        existing.qty += 1;
    } else {
        cartDb.push({ id: prodId, qty: 1 });
    }
    saveCart();
    showToast(dictionary[currentLang]['msg-added-cart']);
}

function directBuyFallback(prodId) {
    addToCart(prodId);
    showToast(dictionary[currentLang]['msg-no-stripe']);
    setTimeout(toggleCartDrawer, 600);
}

function updateCartQty(prodId, delta) {
    const item = cartDb.find(i => i.id === prodId);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) cartDb = cartDb.filter(i => i.id !== prodId);
        saveCart();
        renderCartUI();
        
        // Re-render checkout page if currently open
        if(!document.getElementById('page-checkout').classList.contains('hidden')){
            renderCheckoutPage();
        }
    }
}

function saveCart() {
    localStorage.setItem('sb_cart_db', JSON.stringify(cartDb));
    const count = cartDb.reduce((sum, item) => sum + item.qty, 0);
    const bDesktop = document.getElementById('cart-badge-desktop');
    const bMobile = document.getElementById('cart-badge-mobile');
    if(bDesktop) bDesktop.innerText = count;
    if(bMobile) bMobile.innerText = count;
}

function renderCartUI() {
    saveCart(); 
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total-amount');
    const isZH = currentLang === 'zh';
    
    safeSetText('cart-title', dictionary[currentLang]['cart-title']);
    safeSetText('cart-total-label', dictionary[currentLang]['cart-total-label']);
    safeSetText('btn-cart-checkout', dictionary[currentLang]['btn-cart-checkout']);
    
    if (cartDb.length === 0) {
        if(container) container.innerHTML = `<div class="text-center py-12 text-gray-400 font-bold"><i class="fa-solid fa-basket-shopping text-3xl mb-3 block text-brand-200"></i>${dictionary[currentLang]['cart-empty']}</div>`;
        if(totalEl) totalEl.innerText = "$0";
        return;
    }

    let total = 0;
    if(container) {
        container.innerHTML = cartDb.map(cartItem => {
            const product = shopDb.find(p => p.id === cartItem.id);
            if (!product) return '';
            
            const subtotal = product.price * cartItem.qty;
            total += subtotal;
            const title = isZH ? product.title_zh : product.title_en;
            const img = product.image ? `<img src="${product.image}" class="w-16 h-16 object-cover rounded-xl shrink-0">` : `<div class="w-16 h-16 bg-brand-100 rounded-xl flex items-center justify-center shrink-0"><i class="fa-solid fa-gift text-brand-500"></i></div>`;
            
            return `
                <div class="flex items-center gap-4 bg-white p-3 rounded-2xl border border-brand-200/50 shadow-sm">
                    ${img}
                    <div class="flex-1">
                        <h4 class="text-xs font-bold text-brand-700 line-clamp-2 leading-tight">${title}</h4>
                        <div class="text-brand-800 font-black text-sm mt-1">HKD ${product.price}</div>
                        <div class="flex items-center gap-3 mt-2">
                            <button onclick="updateCartQty('${cartItem.id}', -1)" class="w-6 h-6 rounded-full bg-brand-50 text-brand-700 flex items-center justify-center hover:bg-brand-200 font-bold shadow-sm">-</button>
                            <span class="text-xs font-black w-4 text-center">${cartItem.qty}</span>
                            <button onclick="updateCartQty('${cartItem.id}', 1)" class="w-6 h-6 rounded-full bg-brand-50 text-brand-700 flex items-center justify-center hover:bg-brand-200 font-bold shadow-sm">+</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
    if(totalEl) totalEl.innerText = `HKD $${total.toLocaleString()}`;
}

function processCheckout() {
    if (cartDb.length === 0) {
        showToast(dictionary[currentLang]['cart-empty']);
        return;
    }
    showToast(dictionary[currentLang]['msg-checkout']);
    toggleCartDrawer();
    setTimeout(() => { switchPage('checkout'); }, 500);
}

// ================= CHECKOUT PAGE LOGIC =================
function renderCheckoutPage() {
    document.getElementById('checkout-main-view').classList.remove('hidden');
    document.getElementById('checkout-success-view').classList.add('hidden');
    document.getElementById('checkout-success-view').classList.remove('flex');
    
    const isZH = currentLang === 'zh';
    const listContainer = document.getElementById('checkout-items-list');
    const subtotalEl = document.getElementById('checkout-subtotal-val');
    const totalEl = document.getElementById('checkout-total-val');

    if (cartDb.length === 0) {
        listContainer.innerHTML = `<p class="text-xs text-gray-400 font-bold italic py-4">${isZH ? '您的購物車沒有任何商品。' : 'Your cart is empty.'}</p>`;
        subtotalEl.innerText = "HKD $0";
        totalEl.innerText = "HKD $0";
        document.getElementById('btn-submit-order').disabled = true;
        document.getElementById('btn-submit-order').classList.add('opacity-50', 'cursor-not-allowed');
        return;
    }

    document.getElementById('btn-submit-order').disabled = false;
    document.getElementById('btn-submit-order').classList.remove('opacity-50', 'cursor-not-allowed');

    let totalAmount = 0;

    listContainer.innerHTML = cartDb.map(cartItem => {
        const p = shopDb.find(item => item.id === cartItem.id);
        if (!p) return '';

        const title = isZH ? p.title_zh : p.title_en;
        const sub = p.price * cartItem.qty;
        totalAmount += sub;

        const img = p.image ? `<img src="${p.image}" class="w-12 h-12 object-cover rounded-lg border border-brand-200/50">` : `<div class="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center border border-brand-200/50"><i class="fa-solid fa-gift text-brand-500 text-xs"></i></div>`;

        return `
            <div class="flex items-center gap-3">
                <div class="relative shrink-0">
                    ${img}
                    <span class="absolute -top-1.5 -right-1.5 w-5 h-5 bg-brand-700 text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow">${cartItem.qty}</span>
                </div>
                <div class="flex-1">
                    <h4 class="text-xs font-bold text-gray-700 line-clamp-1">${title}</h4>
                    <span class="text-[10px] text-gray-400 font-medium">${p.brand.toUpperCase()}</span>
                </div>
                <div class="text-sm font-black text-brand-800">
                    $${sub.toLocaleString()}
                </div>
            </div>
        `;
    }).join('');

    subtotalEl.innerText = `HKD $${totalAmount.toLocaleString()}`;
    totalEl.innerText = `HKD $${totalAmount.toLocaleString()}`;
}

function submitCheckoutOrder() {
    // 1. Grab all the input values
    const fn = document.getElementById('chk-input-fn').value;
    const ln = document.getElementById('chk-input-ln').value;
    const em = document.getElementById('chk-input-email').value;
    const ph = document.getElementById('chk-input-phone').value;
    const ad = document.getElementById('chk-input-address').value;

    // 2. Validate that everything is filled out
    if (!fn || !ln || !em || !ph || !ad) {
        showToast(currentLang === 'zh' ? "請填寫所有標有星號 (*) 的聯絡與配送資訊！" : "Please fill in all required (*) shipping fields!");
        return;
    }

    // 3. Change button to a loading state
    const btn = document.getElementById('btn-submit-order');
    const ogText = btn.innerHTML;
    btn.innerHTML = `<i class="fa-solid fa-spinner animate-spin"></i> Processing...`;
    btn.disabled = true;

    // 4. Prepare the exact cart data and calculate the total
    const fullCartData = cartDb.map(cartItem => {
        const product = shopDb.find(p => p.id === cartItem.id);
        return {
            id: product.id,
            title_zh: product.title_zh,
            brand: product.brand,
            price: product.price,
            qty: cartItem.qty
        };
    });

    const totalAmount = fullCartData.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const generatedOrderId = `#SB-${Math.floor(1000 + Math.random() * 9000)}`;

    // 5. CALL YOUR NEW CHECKOUT API
    fetch('/api/checkout', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            orderId: generatedOrderId,
            customer: { firstName: fn, lastName: ln, email: em, phone: ph, address: ad },
            cart: fullCartData,
            totalAmount: totalAmount
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            // 6. Success! Update UI, show success screen, and clear the cart
            document.getElementById('dynamic-order-id').innerText = generatedOrderId;
            document.getElementById('checkout-main-view').classList.add('hidden');
            document.getElementById('checkout-success-view').classList.remove('hidden');
            document.getElementById('checkout-success-view').classList.add('flex');
            
            cartDb = [];
            saveCart();
            renderCartUI();
        } else {
            showToast("伺服器發生錯誤，請稍後再試。 (Server Error)");
        }
    })
    .catch(error => {
        console.error("Checkout failed:", error);
        showToast("網路連線錯誤，無法送出訂單。 (Network Error)");
    })
    .finally(() => {
        // Reset the button state whether it succeeded or failed
        btn.innerHTML = ogText;
        btn.disabled = false;
    });
}

// ================= ADMIN LOGIC =================
function switchAdminTab(subTabId) {
    ['general', 'about', 'b2b', 'images', 'brands', 'shop', 'milestones', 'contact', 'leads'].forEach(t => {
        const btn = document.getElementById(`admin-tab-${t}`), panel = document.getElementById(`admin-panel-${t}`);
        if (t === subTabId) {
            if (btn) btn.className = "w-full text-left px-4 py-3 rounded-xl text-sm font-bold bg-brand-700 text-white flex items-center gap-2 transition-all";
            if (panel) panel.classList.remove('hidden');
            
            if (t === 'about') loadAboutContent();
            if (t === 'b2b') loadB2BContent();
            if (t === 'general') loadGeneralContent();
            if (t === 'about') loadAboutContent();
            if (t === 'b2b') loadB2BContent();
            if (t === 'contact') loadContactContent();
            if (t === 'images') updateBrandImagePreview();
            if (t === 'brands') loadAdminBrandData();
            if (t === 'milestones') loadAdminMilestoneData();
            if (t === 'leads') renderAdminLeads();
        } else {
            if (btn) btn.className = "w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-brand-50 flex items-center gap-2 transition-all";
            if (panel) panel.classList.add('hidden');
        }
    });
}

// B2B Admin
function loadB2BContent() {
    safeSetVal('edit-b2b-intro-zh', b2bDb.intro_zh);
    safeSetVal('edit-b2b-retail-zh', b2bDb.retail_intro_zh);
    safeSetVal('edit-b2b-s1-title', b2bDb.s1_title);
    safeSetVal('edit-b2b-s2-title', b2bDb.s2_title);
    safeSetVal('edit-b2b-s3-title', b2bDb.s3_title);
}
function saveB2BContent() {
    b2bDb.intro_zh = document.getElementById('edit-b2b-intro-zh').value;
    b2bDb.retail_intro_zh = document.getElementById('edit-b2b-retail-zh').value;
    b2bDb.s1_title = document.getElementById('edit-b2b-s1-title').value;
    b2bDb.s2_title = document.getElementById('edit-b2b-s2-title').value;
    b2bDb.s3_title = document.getElementById('edit-b2b-s3-title').value;
    localStorage.setItem('sb_b2b_db', JSON.stringify(b2bDb));
    syncFrontContent();
    showToast("商務 B2B 內容已更新！");
}

// About Admin
function loadAboutContent() {
    safeSetVal('edit-about-founder-zh', aboutDb.founder_zh);
    safeSetVal('edit-about-founder-en', aboutDb.founder_en);
    safeSetVal('edit-promise-1-zh', aboutDb.p1_zh);
    safeSetVal('edit-promise-2-zh', aboutDb.p2_zh);
    safeSetVal('edit-promise-3-zh', aboutDb.p3_zh);
    safeSetVal('edit-promise-4-zh', aboutDb.p4_zh);
}
function saveAboutContent() {
    aboutDb.founder_zh = document.getElementById('edit-about-founder-zh').value;
    aboutDb.founder_en = document.getElementById('edit-about-founder-en').value;
    aboutDb.p1_zh = document.getElementById('edit-promise-1-zh').value;
    aboutDb.p2_zh = document.getElementById('edit-promise-2-zh').value;
    aboutDb.p3_zh = document.getElementById('edit-promise-3-zh').value;
    aboutDb.p4_zh = document.getElementById('edit-promise-4-zh').value;
    localStorage.setItem('sb_about_db', JSON.stringify(aboutDb));
    syncFrontContent();
    showToast("關於我們與四大承諾已更新！");
}

// Shop Product Editor
function openAddProductForm() {
    document.getElementById('admin-shop-form-panel').classList.remove('hidden');
    document.getElementById('admin-shop-form-title').innerText = "新增商品 Add New Product";
    ['admin-product-id','admin-product-title-zh','admin-product-title-en','admin-product-price','admin-product-checkout','admin-product-desc-zh','admin-product-desc-en','product-photo-upload'].forEach(id => safeSetVal(id, ''));
    document.getElementById('admin-product-brand').value = 'other';
    currentUploadedProductPhotoBase64 = '';
    document.getElementById('admin-product-img-preview').innerHTML = `<i class="fa-solid fa-image text-gray-300"></i>`;
}
function editProduct(id) {
    const p = shopDb.find(item => item.id === id);
    if(!p) return;
    document.getElementById('admin-shop-form-panel').classList.remove('hidden');
    document.getElementById('admin-shop-form-title').innerText = "編輯商品 Edit Product";
    safeSetVal('admin-product-id', p.id);
    safeSetVal('admin-product-title-zh', p.title_zh);
    safeSetVal('admin-product-title-en', p.title_en);
    safeSetVal('admin-product-price', p.price);
    safeSetVal('admin-product-checkout', p.checkout);
    safeSetVal('admin-product-desc-zh', p.desc_zh);
    safeSetVal('admin-product-desc-en', p.desc_en);
    document.getElementById('admin-product-brand').value = p.brand || 'other';
    currentUploadedProductPhotoBase64 = p.image || '';
    document.getElementById('admin-product-img-preview').innerHTML = currentUploadedProductPhotoBase64 ? `<img src="${currentUploadedProductPhotoBase64}" class="w-full h-full object-cover">` : `<i class="fa-solid fa-image text-gray-300"></i>`;
}
function closeProductForm() { document.getElementById('admin-shop-form-panel').classList.add('hidden'); }
function handleProductPhotoUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const r = new FileReader();
        r.onload = function(e) { currentUploadedProductPhotoBase64 = e.target.result; document.getElementById('admin-product-img-preview').innerHTML = `<img src="${currentUploadedProductPhotoBase64}" class="w-full h-full object-cover">`; showToast("圖片載入成功！"); };
        r.readAsDataURL(file);
    }
}
function saveAdminProductData() {
    const pId = document.getElementById('admin-product-id').value;
    const p = {
        id: pId || 'prod_' + Date.now(),
        brand: document.getElementById('admin-product-brand').value,
        title_zh: document.getElementById('admin-product-title-zh').value.trim(),
        title_en: document.getElementById('admin-product-title-en').value.trim(),
        price: Number(document.getElementById('admin-product-price').value),
        checkout: document.getElementById('admin-product-checkout').value.trim(),
        desc_zh: document.getElementById('admin-product-desc-zh').value.trim(),
        desc_en: document.getElementById('admin-product-desc-en').value.trim(),
        image: currentUploadedProductPhotoBase64
    };
    if(!p.title_zh) return showToast("請填寫商品名稱！");
    
    if (pId) { const idx = shopDb.findIndex(i => i.id === pId); if(idx !== -1) shopDb[idx] = p; } 
    else { shopDb.push(p); }
    
    localStorage.setItem('sb_shop_db', JSON.stringify(shopDb));
    renderShopProducts(); closeProductForm(); showToast("商品已儲存並同步至店鋪。");
}
function deleteProduct(id) {
    if(confirm("確定永久刪除此商品？")) {
        shopDb = shopDb.filter(i => i.id !== id);
        localStorage.setItem('sb_shop_db', JSON.stringify(shopDb));
        renderShopProducts(); showToast("商品已刪除！");
    }
}

// AI COMPANION
function toggleAIChat() {
    const win = document.getElementById('ai-chat-window');
    if (win.classList.contains('hidden')) {
        win.classList.remove('hidden'); setTimeout(() => { win.classList.remove('translate-y-10', 'opacity-0'); win.classList.add('translate-y-0', 'opacity-100'); }, 50);
    } else {
        win.classList.remove('translate-y-0', 'opacity-100'); win.classList.add('translate-y-10', 'opacity-0'); setTimeout(() => win.classList.add('hidden'), 300);
    }
}
function clickFastPrompt(txt) { const i = document.getElementById('chat-user-input'); if (i) { i.value = txt; sendChatMessage(); } }
function handleChatEnter(e) { if(e.key === 'Enter') sendChatMessage(); }

// Mocking AI response
function sendChatMessage() {
    const i = document.getElementById('chat-user-input');
    const userText = i.value.trim();
    if(!userText) return;
    
    appendChatBubble(userText, 'user');
    i.value = '';
    const tId = appendChatBubble('<i class="fa-solid fa-ellipsis animate-bounce"></i> 芽芽思考中...', 'ai');
    
    setTimeout(() => {
        document.getElementById(tId).remove();
        appendChatBubble(currentLang === 'zh' ? '這是一個非常好的問題！Smart Bud 建議您在寶寶這個時期可以多給予他們探索的空間，搭配 Tidy Tot 防髒托盤或是 Doddl 的餐具，能減少您的焦慮並幫助他們快速建立自信喔！' : 'That is a wonderful question! We suggest giving your child safe space to explore using Tidy Tot protective trays or Doddl cutlery. It will minimize your stress and build their confidence!', 'ai');
    }, 1200);
}

function appendChatBubble(text, role) {
    const c = document.getElementById('chat-messages-area');
    const id = 'bubble-' + Date.now();
    const div = document.createElement('div'); div.id = id; div.className = `flex items-start gap-2.5 ${role==='user'?'justify-end':''}`;
    div.innerHTML = role === 'user' ? 
        `<div class="bg-brand-700 text-white p-3 rounded-2xl text-xs max-w-[80%] font-semibold leading-relaxed">${text}</div><div class="w-7 h-7 rounded-full bg-brand-200 text-brand-700 flex items-center justify-center text-[10px] font-bold shrink-0">ME</div>` :
        `<div class="w-7 h-7 rounded-full bg-brand-900/30 text-brand-700 flex items-center justify-center text-[10px] shrink-0 font-black">AI</div><div class="bg-white p-3 rounded-2xl border border-brand-200/40 text-xs shadow-sm leading-relaxed text-gray-600 max-w-[80%]">${text}</div>`;
    c.appendChild(div); c.scrollTop = c.scrollHeight;
    return id;
}

// ================= MISSING ADMIN FUNCTIONS =================

// 1. General Hero Content
function loadGeneralContent() {
    safeSetVal('custom-gemini-key', generalDb.geminiKey || '');
    safeSetVal('edit-nav-brand-title', generalDb.brandTitle || '');
    safeSetVal('edit-nav-brand-subtitle-zh', generalDb.brandSubtitleZH || '');
    safeSetVal('edit-hero-headline-zh', generalDb.heroHeadlineZH || '');
    safeSetVal('edit-hero-headline-en', generalDb.heroHeadlineEN || '');
    safeSetVal('edit-hero-subheadline-zh', generalDb.heroSubheadlineZH || '');
    safeSetVal('edit-hero-subheadline-en', generalDb.heroSubheadlineEN || '');
}

function saveGeneralContent() {
    generalDb = {
        geminiKey: document.getElementById('custom-gemini-key').value,
        brandTitle: document.getElementById('edit-nav-brand-title').value,
        brandSubtitleZH: document.getElementById('edit-nav-brand-subtitle-zh').value,
        heroHeadlineZH: document.getElementById('edit-hero-headline-zh').value,
        heroHeadlineEN: document.getElementById('edit-hero-headline-en').value,
        heroSubheadlineZH: document.getElementById('edit-hero-subheadline-zh').value,
        heroSubheadlineEN: document.getElementById('edit-hero-subheadline-en').value
    };
    localStorage.setItem('sb_general_db', JSON.stringify(generalDb));
    showToast("首頁核心文字已更新！(Home content saved)");
}

// 2. Contact Information
function loadContactContent() {
    safeSetVal('admin-contact-email', contactDb.email || '');
    safeSetVal('admin-contact-phone', contactDb.phone || '');
    safeSetVal('admin-contact-instagram', contactDb.ig || '');
    safeSetVal('admin-contact-whatsapp-link', contactDb.waLink || '');
    safeSetVal('admin-contact-copyright', contactDb.copyright || '');
}

function saveAdminContactData() {
    contactDb = {
        email: document.getElementById('admin-contact-email').value,
        phone: document.getElementById('admin-contact-phone').value,
        ig: document.getElementById('admin-contact-instagram').value,
        waLink: document.getElementById('admin-contact-whatsapp-link').value,
        copyright: document.getElementById('admin-contact-copyright').value
    };
    localStorage.setItem('sb_contact_db', JSON.stringify(contactDb));
    showToast("聯繫資訊已更新！(Contact info saved)");
}

// 3. Media & Image Uploads (Base64 Encoding)
function uploadCompanyLogo(e) {
    const file = e.target.files[0];
    if (file) {
        // Quick size check (Warn if over 2MB)
        if (file.size > 2 * 1024 * 1024) {
            showToast("⚠️ 警告：圖片可能過大，建議小於 2MB。");
        }

        const reader = new FileReader();
        reader.onload = function(evt) {
            try {
                localStorage.setItem('sb_company_logo', evt.target.result);
                document.getElementById('admin-logo-preview-box').innerHTML = `<img src="${evt.target.result}" class="w-full h-full object-cover">`;
                syncFrontContent(); 
                showToast("公司商標已更新！(Company logo updated)");
            } catch (error) {
                console.error(error);
                showToast("❌ 錯誤：圖片檔案太大，儲存空間不足！請壓縮圖片。");
            }
        };
        reader.readAsDataURL(file);
    }
}

function clearCustomLogo() {
    localStorage.removeItem('sb_company_logo');
    document.getElementById('admin-logo-preview-box').innerHTML = '';
    syncFrontContent();
    showToast("公司商標已還原預設！(Logo reset to default)");
}

function updateBrandImagePreview() {
    const brand = document.getElementById('image-select-brand').value;
    const saved = localStorage.getItem(`sb_brand_logo_${brand}`);
    document.getElementById('brand-logo-preview-box').innerHTML = saved 
        ? `<img src="${saved}" class="h-full object-contain">` 
        : '<span class="text-xs text-gray-400">尚無自訂圖片</span>';
}

function uploadBrandLogo(e) {
    const file = e.target.files[0];
    const brand = document.getElementById('image-select-brand').value;
    if (file) {
        if (file.size > 2 * 1024 * 1024) {
            showToast("⚠️ 警告：圖片可能過大，建議小於 2MB。");
        }

        const reader = new FileReader();
        reader.onload = function(evt) {
            try {
                localStorage.setItem(`sb_brand_logo_${brand}`, evt.target.result);
                updateBrandImagePreview();
                syncFrontContent(); // Ensure frontend updates immediately
                showToast("品牌標誌已更新！(Brand logo updated)");
            } catch (error) {
                console.error(error);
                showToast("❌ 錯誤：圖片檔案太大，儲存空間不足！請壓縮圖片。");
            }
        };
        reader.readAsDataURL(file);
    }
}

function clearBrandLogo() {
    const brand = document.getElementById('image-select-brand').value;
    localStorage.removeItem(`sb_brand_logo_${brand}`);
    updateBrandImagePreview();
    showToast("品牌標誌已還原預設！(Brand logo reset)");
}

// 4. Brands Content Management
function loadAdminBrandData() {
    const brand = document.getElementById('admin-select-brand').value;
    const data = JSON.parse(localStorage.getItem(`sb_brand_data_${brand}`)) || {};
    safeSetVal('admin-brand-age-zh', data.age || '');
    safeSetVal('admin-brand-badge-zh', data.badge || '');
    safeSetVal('admin-brand-title-zh', data.title || '');
    safeSetVal('admin-brand-desc-zh', data.desc || '');
    safeSetVal('admin-brand-products-zh', data.products || '');
}

function saveAdminBrandData() {
    const brand = document.getElementById('admin-select-brand').value;
    const data = {
        age: document.getElementById('admin-brand-age-zh').value,
        badge: document.getElementById('admin-brand-badge-zh').value,
        title: document.getElementById('admin-brand-title-zh').value,
        desc: document.getElementById('admin-brand-desc-zh').value,
        products: document.getElementById('admin-brand-products-zh').value
    };
    localStorage.setItem(`sb_brand_data_${brand}`, JSON.stringify(data));
    showToast("品牌資料已更新！(Brand data saved)");
}

// 5. Milestones Content Management
function loadAdminMilestoneData() {
    const ms = document.getElementById('admin-select-milestone').value;
    const data = JSON.parse(localStorage.getItem(`sb_ms_data_${ms}`)) || {};
    safeSetVal('admin-ms-title-zh', data.title || '');
    safeSetVal('admin-ms-rec-zh', data.rec || '');
}

function saveAdminMilestoneData() {
    const ms = document.getElementById('admin-select-milestone').value;
    const data = {
        title: document.getElementById('admin-ms-title-zh').value,
        rec: document.getElementById('admin-ms-rec-zh').value
    };
    localStorage.setItem(`sb_ms_data_${ms}`, JSON.stringify(data));
    showToast("發育里程碑已更新！(Milestones saved)");
}

// 6. B2B Leads Inbox & Form Handler
function handleFormSubmit(e) {
    e.preventDefault();
    const lead = {
        id: 'lead_' + Date.now(),
        date: new Date().toLocaleString('zh-HK'),
        name: document.getElementById('input-name').value,
        email: document.getElementById('input-email').value,
        brand: document.getElementById('input-brand').value,
        type: document.getElementById('input-country').value,
        message: document.getElementById('input-message').value
    };
    
    leadsDb.push(lead);
    localStorage.setItem('sb_leads_db', JSON.stringify(leadsDb));
    
    // Switch to success view
    document.getElementById('b2b-form-container').classList.add('hidden');
    document.getElementById('form-success').classList.remove('hidden');
    document.getElementById('form-success').classList.add('block');
    
    // Refresh admin view if open
    renderAdminLeads();
}

function resetForm() {
    document.getElementById('bd-form').reset();
    document.getElementById('form-success').classList.add('hidden');
    document.getElementById('form-success').classList.remove('block');
    document.getElementById('b2b-form-container').classList.remove('hidden');
}

function renderAdminLeads() {
    const list = document.getElementById('admin-leads-list');
    if (!list) return;
    
    if (leadsDb.length === 0) {
        list.innerHTML = `<div class="p-8 text-center text-gray-400 font-bold bg-brand-50 rounded-2xl border border-brand-200/50">收件箱目前沒有提案 (Inbox is empty).</div>`;
        return;
    }
    
    // Render leads from newest to oldest
    list.innerHTML = [...leadsDb].reverse().map(l => `
        <div class="p-4 bg-brand-50 rounded-2xl border border-brand-200/50">
            <div class="flex justify-between items-center mb-2 border-b border-brand-200 pb-2">
                <span class="text-xs font-black text-brand-800 uppercase tracking-wider">${l.type}</span>
                <span class="text-[10px] text-gray-400 font-bold">${l.date}</span>
            </div>
            <div class="text-sm font-bold text-brand-700 mb-1">${l.name} <span class="text-xs text-gray-500 font-normal">(${l.brand})</span></div>
            <div class="text-xs text-brand-600 mb-3"><a href="mailto:${l.email}">${l.email}</a></div>
            <p class="text-xs text-gray-600 bg-white p-3 rounded-xl border border-brand-200">${l.message}</p>
        </div>
    `).join('');
}

// ================= ADMIN SECURITY =================

async function requireAdminPassword() {
    // 1. Check if the user already logged in during this browser session
    if (sessionStorage.getItem('sb_admin_logged_in') === 'true') {
        switchPage('admin');
        return;
    }

    // 2. Prompt for the password
    const userInput = prompt("請輸入系統管理控制台密碼 (Enter Admin Password):");
    
    // If the user clicks cancel, do nothing
    if (userInput === null) return;

    try {
        // 3. Send the password to your secure Vercel API
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password: userInput })
        });

        const data = await response.json();

        // 4. Handle the server's response
        if (data.success) {
            sessionStorage.setItem('sb_admin_logged_in', 'true');
            switchPage('admin');
            showToast("管理員登入成功！ (Admin login successful)");
        } else {
            showToast("密碼錯誤！ Access Denied.");
        }
    } catch (error) {
        console.error("Login verification failed:", error);
        showToast("系統發生錯誤，請稍後再試。 (System error)");
    }
}

function clearAdminLeads() {
    if(confirm("確定要清空所有提案紀錄嗎？此操作無法復原。(Clear all leads?)")) {
        leadsDb = [];
        localStorage.setItem('sb_leads_db', JSON.stringify(leadsDb));
        renderAdminLeads();
        showToast("收件箱已清空！(Inbox cleared)");
    }
}

function renderBrandsPage() {
    const container = document.getElementById('dynamic-brands-container');
    if (!container) return;

    container.innerHTML = brandsDb.map((b, index) => {
        // Alternate layout: Even indexes image left, Odd indexes image right
        const layoutClass = index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse';
        const badgeColor = b.badge.includes('總代') ? 'bg-brand-700 text-white' : 'bg-brand-900/40 text-brand-700';
        
        // Read directly from the asset path
        const logoHtml = b.logo 
            ? `<img src="${b.logo}" class="h-16 w-auto object-contain drop-shadow-sm">` 
            : `<div class="h-16 w-full flex items-center justify-center font-black text-2xl text-brand-800 tracking-widest uppercase opacity-40">${b.name}</div>`;

        return `
            <div class="bg-white rounded-[40px] border border-brand-200/40 p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col ${layoutClass} gap-10 items-center">
                <div class="lg:w-2/5 flex flex-col items-center">
                    <div class="mb-6 flex items-center justify-center w-full">${logoHtml}</div>
                    <span class="px-4 py-1.5 ${badgeColor} rounded-full text-xs font-extrabold shadow-sm uppercase tracking-wider">${b.badge}</span>
                    <div class="mt-4 text-xs font-bold text-brand-800 bg-brand-50 border border-brand-200/50 px-3 py-1 rounded-full text-center">
                        <span>${b.age}</span>
                    </div>
                </div>
                <div class="lg:w-3/5 w-full">
                    <h3 class="text-2xl font-black text-brand-700 mb-4">${b.title}</h3>
                    <p class="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">${b.desc}</p>
                    <div class="bg-brand-50 p-6 rounded-2xl border border-brand-200/20 mb-6">
                        <h4 class="text-xs font-black text-brand-800 uppercase tracking-widest mb-3"><i class="fa-solid fa-basket-shopping mr-1.5"></i> 熱門商品與產品特色</h4>
                        <div class="text-xs text-gray-500 leading-relaxed font-medium whitespace-pre-line">${b.features}</div>
                    </div>
                    <div class="flex flex-wrap gap-4 items-center">
                        <button onclick="switchPage('milestones'); switchMilestoneTab('${b.tabId}');" class="px-5 py-2.5 bg-brand-50 text-brand-700 border border-brand-200 rounded-full text-xs font-extrabold hover:bg-brand-100 transition-all flex items-center gap-2">
                            <i class="fa-solid fa-graduation-cap"></i> <span class="lbl-read-milestone">閱讀里程碑對應</span>
                        </button>
                        <button onclick="switchPage('shop')" class="px-5 py-2.5 bg-brand-800/10 text-brand-800 rounded-full text-xs font-extrabold hover:bg-brand-850/25 transition-all">
                            <i class="fa-solid fa-cart-shopping mr-1"></i> <span class="lbl-go-shop">前往選品店購買</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Init
window.onload = function() {
    switchPage('home');
    localizeApp();
    saveCart();
    renderBrandsPage();
};
