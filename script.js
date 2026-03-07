const translations = {
    en: {
        home: "Home",
        tools: "Tools ▼",
        cap_check: "Capacitor Check",
        run_cap: "Running Capacitor Calculator",
        comp_id: "Compressor Terminal ID",
        sub_cool: "Sub-Cool & Super-Heat",
        load_calc: "Load & Electrical Analyzer",
        hero_title: "Precision HVAC Diagnostics",
        hero_desc: "Welcome to HVACProHub, the premier digital resource engineered for the modern HVAC technician.",
        about_title: "About HVACProHub",
        about_desc: "Dedicated to providing professional field technicians with accurate diagnostic tools.",
        contact_title: "Contact Us",
        footer_copy: "© 2026 HVACProHub. All rights reserved.",
        //check capacitor page
        voltage:"Voltage",
        Measured_Capacitance:"Measured Capacitance",   
        tolerance:"Tolerance",
        rated:"Rated",
        capacitor_check:"capacitor-check",
        capacitor_warning:"⚠️ DANGER:Ensure capacitor is fully discharged  before testing to prevent electrical shock.",
        analysis_result:"Analysis Result",
        status:"Status",


    },
    ar: {
        home: "الرئيسية",
        tools: "الأدوات ▼",
        cap_check: "فحص المكثف",
        run_cap: "حاسبة مكثف التشغيل",
        comp_id: "تحديد أطراف الضاغط",
        sub_cool: "حاسبة التبريد الفائق",
        load_calc: "محلل الأحمال الكهربائية",
        hero_title: "تشخيصات HVAC دقيقة",
        hero_desc: "مرحباً بكم في HVACProHub<br>الأداة الرقمية الأسرع لتشخيص أعطال التكييف بدقة احترافية.",       
        about_title: "حول HVACProHub",
        about_desc: "مخصص لتزويد الفنيين الميدانيين بأكثر أدوات التشخيص دقة.",
        contact_title: "اتصل بنا",
        footer_copy: "© 2026 HVACProHub. جميع الحقوق محفوظة.",
        //for check capacitor page
        voltage:"الفولتيه",
        Measured_Capacitance:"القراءه المأخوذه من جهاز القياس",
        tolerance:"نسبه السماح",
        rated:"القيمه الاصليه من المصنع",
        capacitor_check:"افحص",
        capacitor_warning:"⚠️ تحذير مهم : تأكد من تفريغ شحنة المكثف تماماً قبل البدء بالفحص لتجنب الصعق الكهربائي.",
        analysis_result:"نتيجة الفحص",
        status:"الحاله",
        }
};

let currentLang = 'en';

document.getElementById('lang-switch').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    const body = document.getElementById('body-tag');
    const btn = document.getElementById('lang-switch');

    // Switch Direction
    body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    btn.textContent = currentLang === 'ar' ? 'English' : 'العربية';

    // Update Text
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) {
        el.innerHTML = translations[currentLang][key];
        }
    });
});

// Register PWA Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(() => console.log("Service Worker Active"));
}