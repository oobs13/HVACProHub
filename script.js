/* ================================================================
   1. TRANSLATIONS OBJECT
   Contains all text for English and Arabic.
   ================================================================
*/
const translations = {
    en: {
        home: "Home",
        contact: "Contact Us",
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
        voltage: "Voltage",
        Measured_Capacitance: "Measured Capacitance",
        tolerance: "Tolerance",
        rated: "Rated",
        capacitor_check: "Check Capacitor",
        capacitor_warning: "⚠️ <strong>DANGER:</strong> Ensure capacitor is fully discharged before testing to prevent electrical shock.",
        analysis_result: "Analysis Result",
        status: "Status",
        getintouch: "Get in Touch",
        email: "Email Support",
        fullname: "Full Name",
        emailaddress: "Email Address",
        subject: "Subject",
        message: "Message",
        sendmessage: "SEND MESSAGE",
        whatweprovide: "Dedicated to providing professional field technicians with the most accurate and efficient diagnostic tools in the industry.",
        contactfooter: "Contact Us",
        legal: "Legal",
        privacy: "Privacy Policy",
        // Run Cap Calculator Keys
        appTitle: '⚡ Running Capacitor Calculator',
        appSubtitle: 'Single-Phase Motor Analysis',
        lblWatts: 'Motor Power (Watts)',
        lblVoltage: 'Voltage (V)',
        lblFrequency: 'Frequency (Hz)',
        btnCalculate: '⚡ Calculate Capacitor',
        resultTitle: 'Analysis Result',
        lblStandard: 'Suggested Standard',
        lblMin: 'Lower Tolerance (-5%)',
        lblMax: 'Upper Tolerance (+5%)',
        adviceOk: '✅ Nearest standard match found.',
        adviceWarn: '⚠️ Value is unconventional. Check motor nameplate.',
        langNav: 'العربية',
        motor_hp: 'Motor Horsepower',
        printBtn: "🖨️ Print Report" // REFERENCE: Print button English
    },
    ar: {
        home: "الرئيسية",
        contact: "اتصل بنا",
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
        voltage: "الفولتيه",
        Measured_Capacitance: "القراءه المأخوذه من جهاز القياس",
        tolerance: "نسبه السماح",
        rated: "القيمه الاصليه من المصنع",
        capacitor_check: "افحص",
        capacitor_warning: "⚠️ تحذير مهم : تأكد من تفريغ شحنة المكثف تماماً قبل البدء بالفحص لتجنب الصعق الكهربائي.",
        analysis_result: "نتيجة الفحص",
        status: "الحاله",
        getintouch: "للتواصل",
        email: "بريدنا الاكتروني",
        fullname: "الاسم الكامل",
        emailaddress: "بريدك الالكتروني",
        subject: "عنوان الرساله",
        message: "الرساله",
        sendmessage: "ارسل الرساله",
        whatweprovide: "نكرس جهودنا لتزويد الفنيين الميدانيين بأدوات التشخيص الأكثر دقة وكفاءة في هذا القطاع.",
        contactfooter: "اتصل بنا",
        legal: "الشؤون القانونية",
        privacy: "سياسة الخصوصية",
        // Run Cap Calculator Keys
        appTitle: '⚡ حاسبة مكثف التشغيل',
        appSubtitle: 'تحليل المحرك أحادي الطور',
        lblWatts: 'قدرة المحرك (واط)',
        lblVoltage: 'الجهد (فولت)',
        lblFrequency: 'التردد (هرتز)',
        btnCalculate: '⚡ احسب المكثف',
        resultTitle: 'نتائج التحليل',
        lblStandard: 'القيمة القياسية المقترحة',
        lblMin: 'الحد الأدنى (-5%)',
        lblMax: 'الحد الأقصى (+5%)',
        adviceOk: '✅ تم العثور على أقرب مطابقة قياسية.',
        adviceWarn: '⚠️ القيمة غير تقليدية. افحص لوحة بيانات المحرك.',
        langNav: 'English',
        motor_hp: 'القدره الحصانيه',
        printBtn: "🖨️ طباعة التقرير" // REFERENCE: Print button Arabic
    }
};

/* ================================================================
   2. UI & LANGUAGE LOGIC
   ================================================================
*/
function updateUI(lang) {
    const body = document.getElementById('body-tag');
    const btn = document.getElementById('lang-switch');

    // Switch Direction
    if (body) body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    // Switch Button Text
    if (btn) btn.textContent = lang === 'ar' ? 'English' : 'العربية';

    // Update all elements with data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    localStorage.setItem('preferredLang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'ar';
    updateUI(savedLang);

    const langBtn = document.getElementById('lang-switch');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const current = localStorage.getItem('preferredLang') || 'ar';
            const next = current === 'en' ? 'ar' : 'en';
            updateUI(next);
        });
    }

    /* --- ADDED: MOBILE NAVIGATION LOGIC --- */
    const menuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});

// PWA Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(() => console.log("Service Worker Active"));
}

/* ================================================================
   3. PRINT FUNCTION
   REFERENCE: This opens the system print/save dialog
   ================================================================
*/
function triggerPrint() {
    window.print();
}

/* ================================================================
   4. CALCULATION LOGIC (HP BASED)
   Used for the specific HP dropdown calculator
   ================================================================
*/
function calculateRunCap() {
    const hp = parseFloat(document.getElementById('hp_value').value);
    const volts = parseInt(document.getElementById('motor_voltage').value);
    let microfarads = 0;

    // Standard multipliers for HVAC
    if (volts > 200) {
        microfarads = hp * 15; 
    } else {
        microfarads = hp * 60;
    }

    const finalValue = microfarads.toFixed(1);
    const resBox = document.getElementById("runCapResultBox");
    const resVal = document.getElementById("uFResult");

    if (resVal) resVal.innerText = `${finalValue} uF`;
    if (resBox) {
        resBox.style.display = "block";
        resBox.scrollIntoView({ behavior: 'smooth' });
    }
}

/* ================================================================
   5. ADVANCED CALCULATION LOGIC (WATTS BASED)
   ================================================================
*/
let currentLang = 'en'; // Local state for secondary toggle logic if needed

function calculateCapacitor() {
    const watts = parseFloat(document.getElementById('watts').value);
    const voltage = parseFloat(document.getElementById('voltage').value);
    const frequency = parseInt(document.getElementById('frequency').value);

    if(!watts || !voltage) {
        alert("Please enter valid power and voltage values.");
        return;
    }

    const capacitance = (watts * 1000000) / (2 * Math.PI * frequency * Math.pow(voltage, 2));
    const min = capacitance * 0.95;
    const max = capacitance * 1.05;

    const standards = [1, 1.5, 2, 2.5, 3, 4, 5, 6, 7.5, 10, 12.5, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80];
    let nearest = standards[0];
    standards.forEach(s => {
        if(Math.abs(capacitance - s) < Math.abs(capacitance - nearest)) nearest = s;
    });
    
    const resultBox = document.getElementById('resultBox');
    if (resultBox) {
        resultBox.style.display = 'block';
        document.getElementById('capValue').innerText = capacitance.toFixed(2) + ' μF';
        document.getElementById('standardValue').innerText = nearest + ' μF';
        document.getElementById('minValue').innerText = min.toFixed(2) + ' μF';
        document.getElementById('maxValue').innerText = max.toFixed(2) + ' μF';

        const adviceBox = document.getElementById('adviceBox');
        const lang = localStorage.getItem('preferredLang') || 'en';
        const isGood = (nearest >= min && nearest <= max);
        adviceBox.innerText = isGood ? translations[lang].adviceOk : translations[lang].adviceWarn;
        adviceBox.className = 'advice-box ' + (isGood ? 'advice-ok' : 'advice-warn');

        resultBox.scrollIntoView({behavior: 'smooth'});
    }
}