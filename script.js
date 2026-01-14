// --- EXISTING LOGIC (Aapka Code) ---
const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const matrixMenu = document.getElementById('matrixMenu');
const moduleText = document.getElementById('current-module');

// Open/Close System
menuOpen.addEventListener('click', () => matrixMenu.classList.add('active'));
menuClose.addEventListener('click', () => matrixMenu.classList.remove('active'));

// Scroll Stream Logic (Auto Text Change)
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const h = window.innerHeight;
    let status = "OVERVIEW_MODULE";

    // Text update based on scroll
    if (y > h * 0.5 && y < h * 1.5) status = "DIFFERENTIATION_CORE";
    else if (y >= h * 1.5) status = "SUCCESSIVE_DIFF_L01";

    if (moduleText.innerText !== status) {
        moduleText.style.opacity = "0";
        setTimeout(() => {
            moduleText.innerText = status;
            moduleText.style.opacity = "1";
        }, 200);
    }
});

// --- NEW LOGIC (Maine Add Kiya Hai) ---

/**
 * 1. Solution Toggle Function
 * Ye function sabhi "View Solution" buttons ke liye kaam karega.
 * Id argument ke hisab se ye solution box dikhayega ya chupayega.
 */
function toggleSolution(id, btnElement) {
    const sol = document.getElementById(id);
    
    // अगर डिस्प्ले 'none' है या खाली है, तो उसे दिखाओ
    if (sol.style.display === "none" || sol.style.display === "") {
        sol.style.display = "block";
        btnElement.innerText = "HIDE_SOLUTION";
        btnElement.style.borderColor = "var(--neon-blue)";
    } else {
        sol.style.display = "none";
        btnElement.innerText = "VIEW_SOLUTION";
        btnElement.style.borderColor = "var(--neon-pink)";
    }
}

/**
 * 2. Sidebar Topic Selection Logic
 * Jab sidebar ke kisi topic par click karoge, to wo active dikhega.
 */
const listItems = document.querySelectorAll('.topic-list li');
listItems.forEach(item => {
    item.addEventListener('click', function() {
        // Purane active topic ko hatao
        listItems.forEach(li => li.classList.remove('active'));
        // Naye par active class lagao
        this.classList.add('active');
        
        // Optional: Smooth scroll to section (Agar section IDs bani ho)
        // const sectionId = this.innerText.split('.')[1].trim().toLowerCase().replace(/ /g, '-');
        // document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    });
});
// 1. Elements को सेलेक्ट करना
const menuOpen = document.getElementById('menuOpen'); // आपका MENU बटन
const menuClose = document.getElementById('menuClose'); // क्लोज बटन [X]
const matrixMenu = document.getElementById('matrixMenu'); // ओवरले लिस्ट

// 2. MENU बटन पर क्लिक करने पर लिस्ट खोलना
menuOpen.addEventListener('click', () => {
    matrixMenu.classList.add('active'); // CSS की active क्लास जोड़ देगा
    document.body.style.overflow = 'hidden'; // लिस्ट खुली हो तो पीछे का पेज स्क्रॉल न हो
});

// 3. CLOSE [X] बटन पर क्लिक करने पर लिस्ट बंद करना
menuClose.addEventListener('click', () => {
    matrixMenu.classList.remove('active'); // active क्लास हटा देगा
    document.body.style.overflow = 'auto'; // स्क्रॉल वापस चालू
});

// 4. किसी टॉपिक पर क्लिक करते ही लिस्ट बंद हो जाए (Phone के लिए)
document.querySelectorAll('.mobile-topic-list a').forEach(link => {
    link.addEventListener('click', () => {
        matrixMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// 5. Solution Toggle Function (Calculus सवालों के लिए)
function toggleSolution(id, btnElement) {
    const sol = document.getElementById(id);
    if (sol.style.display === "block") {
        sol.style.display = "none";
        btnElement.innerText = "VIEW_SOLUTION";
    } else {
        sol.style.display = "block";
        btnElement.innerText = "HIDE_SOLUTION";
    }
}



