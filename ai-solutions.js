// ==========================================
// 1. FLOATING CHATBOT WIDGET (ERA)
// ==========================================
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const chatbotWindow = document.getElementById('chatbotWindow');

const botKnowledge = {
  EN: {
    csr: "InAmigos Foundation is registered under Section 8 (CIN: U85300CT2020NPL010777). We are NITI Aayog registered (CSR-1), and hold 80G and 12A certifications for tax deductions.",
    seva: "Project SEVA operates in Chhattisgarh regions (Raipur, Durg, Bilaspur, Bastar), providing hot meals and clothing to daily wage workers and underprivileged families.",
    vikas: "Project VIKAS skill programs offer internships in digital operations, digital marketing, and social sector management. Over 30,000 global interns trained to date.",
    default: "I have recorded your query. I am checking our official NGO database to guide you. Feel free to contact our Raipur office directly at support@inamigosfoundation.org.in or call +91 626 730 9902!"
  },
  HI: {
    csr: "इनअमिगोस फाउंडेशन धारा 8 के तहत पंजीकृत संगठन है (CIN: U85300CT2020NPL010777)। हम नीति आयोग पंजीकृत (CSR-1) हैं, और कर छूट के लिए 80G और 12A प्रमाणन रखते हैं।",
    seva: "प्रोजेक्ट सेवा छत्तीसगढ़ के रायपुर, दुर्ग, बिलासपुर और बस्तर जिलों में काम करता है, जो दैनिक मजदूरों और गरीब परिवारों को भोजन और वस्त्र प्रदान करता है।",
    vikas: "प्रोजेक्ट विकास के तहत युवाओं को डेटा ऑपरेशन्स, डिजिटल मार्केटिंग और सोशल वर्क में इंटर्नशिप दी जाती है। अब तक 30,000+ इंटर्न्स को प्रशिक्षित किया जा चुका है।",
    default: "मैंने आपकी पूछताछ दर्ज कर ली है। मैं आपके लिए हमारे डेटाबेस की जांच कर रहा हूं। आप हमारे कार्यालय से support@inamigosfoundation.org.in या +91 626 730 9902 पर भी संपर्क कर सकते हैं।"
  }
};

function toggleChatWindow() {
  if (chatbotWindow) {
    chatbotWindow.classList.toggle('active');
  }
}

function sendUserChat() {
  if (!chatInput || chatInput.value.trim() === '') return;
  const text = chatInput.value.trim();
  chatInput.value = '';
  
  appendChatMsg(text, 'user');
  
  setTimeout(() => {
    let responseText = botKnowledge[currentLang].default;
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes('csr') || lowerText.includes('niti') || lowerText.includes('register') || lowerText.includes('80g') || lowerText.includes('12a')) {
      responseText = botKnowledge[currentLang].csr;
    } else if (lowerText.includes('seva') || lowerText.includes('food') || lowerText.includes('location') || lowerText.includes('meals')) {
      responseText = botKnowledge[currentLang].seva;
    } else if (lowerText.includes('vikas') || lowerText.includes('intern') || lowerText.includes('apply') || lowerText.includes('skill')) {
      responseText = botKnowledge[currentLang].vikas;
    }
    
    appendChatMsg(responseText, 'bot');
  }, 1000);
}

function handleChatEnter(e) {
  if (e.key === 'Enter') {
    sendUserChat();
  }
}

function sendSuggestedChat(text) {
  appendChatMsg(text, 'user');
  setTimeout(() => {
    let responseText = botKnowledge[currentLang].default;
    if (text.includes('Credentials') || text.includes('प्रमाणन')) responseText = botKnowledge[currentLang].csr;
    else if (text.includes('Locations') || text.includes('केंद्रों')) responseText = botKnowledge[currentLang].seva;
    else if (text.includes('Internships') || text.includes('इंटर्नशिप')) responseText = botKnowledge[currentLang].vikas;
    appendChatMsg(responseText, 'bot');
  }, 800);
}

function appendChatMsg(text, sender) {
  if (!chatMessages) return;
  const bubble = document.createElement('div');
  bubble.className = `chat-msg ${sender}`;
  bubble.innerText = text;
  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ==========================================
// 2. AI VOLUNTEER MATCHING SYSTEM
// ==========================================
function runMatchingAlgorithm() {
  const skill = document.getElementById('matchSkill').value;
  const weekends = document.getElementById('matchWeekends').checked;
  
  const responseBox = document.getElementById('matchingResponse');
  const responseContent = document.getElementById('matchingResponseContent');
  
  let primaryProject = "Project VIKAS (Skill & Career Development)";
  let matchScore = 92;
  let reason = "Your digital skillset aligns beautifully with our training and administrative modules.";
  
  if (currentLang === 'HI') {
    primaryProject = "प्रोजेक्ट विकास (कौशल विकास प्रशिक्षण)";
    reason = "आपके डिजिटल कौशल हमारी प्रशासनिक और प्रशिक्षण परियोजनाओं के लिए अनुकूल हैं।";
  }

  if (skill === 'teaching') {
    primaryProject = currentLang === 'EN' ? "Project BACHPANSHALA (Rural Classrooms)" : "प्रोजेक्ट बचपनशाला (ग्रामीण शिक्षा)";
    matchScore = weekends ? 98 : 88;
    reason = currentLang === 'EN' 
      ? "Educational workshops require direct mentor-pupil contact. Your choice fits children's school tutoring requirements perfectly."
      : "शैक्षणिक कार्यशालाओं के लिए सीधे मार्गदर्शन की आवश्यकता होती है। आपका अनुभव हमारे बाल शिक्षा केंद्रों के लिए बहुत उपयुक्त है।";
  } else if (skill === 'cooking') {
    primaryProject = currentLang === 'EN' ? "Project SEVA (Distribution & Shelter Support)" : "प्रोजेक्ट सेवा (भोजन वितरण)";
    matchScore = weekends ? 96 : 90;
    reason = currentLang === 'EN'
      ? "Distribution drives are highly active on weekends. Food routing logistics match your preferences."
      : "वितरण अभियान मुख्य रूप से सप्ताहांत में सक्रिय रहते हैं। भोजन रसद आपके मापदंडों के अनुकूल हैं।";
  } else if (skill === 'animal') {
    primaryProject = currentLang === 'EN' ? "Project JEEV (Animal Care & Welfare)" : "प्रोजेक्ट जीव (पशु कल्याण)";
    matchScore = 95;
    reason = currentLang === 'EN'
      ? "Stray animal rescue operations and local vaccination drives will utilize your hands-on coordination skills."
      : "लावारिस पशुओं के रेस्क्यू और टीकाकरण शिविरों के लिए आपका व्यावहारिक सहयोग बहुत उपयोगी होगा।";
  } else if (skill === 'horticulture') {
    primaryProject = currentLang === 'EN' ? "Project PRAKRITI (Urban Plantation)" : "प्रोजेक्ट प्रकृति (वृक्षारोपण)";
    matchScore = weekends ? 94 : 85;
    reason = currentLang === 'EN'
      ? "Urban plantation drives and seed-bombing missions are optimized for forest outskirts and public parks."
      : "शहरी वृक्षारोपण और बीड-बमबारी अभियान पर्यावरण गलियारों के लिए उपयुक्त हैं।";
  } else if (skill === 'finance') {
    primaryProject = currentLang === 'EN' ? "Project UDAAN (Women Empowerment Guilds)" : "प्रोजेक्ट उड़ान (महिला स्वयं सहायता समूह)";
    matchScore = 96;
    reason = currentLang === 'EN'
      ? "Financial bookkeeping and craft workshop audits will help rural women guilds manage handicraft sales accounts."
      : "बहीखाता और सूक्ष्म वित्त प्रबंधन से महिला स्वयं सहायता समूहों को उनके उत्पाद खातों को संभालने में मदद मिलेगी।";
  }

  responseContent.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid rgba(0,0,0,0.05); padding-bottom:0.75rem;">
      <strong>${currentLang === 'EN' ? 'Primary Match:' : 'मुख्य प्रोजेक्ट:'} <span style="color:var(--primary);">${primaryProject}</span></strong>
      <span style="font-family:var(--font-headings); font-weight:800; font-size:1.1rem; color:var(--primary);">${matchScore}% Match</span>
    </div>
    <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.6;">${reason}</p>
    <div style="margin-top:1rem; text-align:right;">
      <button class="btn btn-secondary" style="font-size:0.75rem; padding:0.4rem 1rem;" onclick="scrollToSection('volunteer-hub'); closeAIModal('modalMatching');">${currentLang === 'EN' ? 'Proceed to Signup' : 'पंजीकरण करें'}</button>
    </div>
  `;
  
  responseBox.classList.add('active');
}

// ==========================================
// 3. SMART DONATION ADVISOR
// ==========================================
function updateAdvisorSliderText(val) {
  const sliderText = document.getElementById('advisorSliderText');
  if (sliderText) {
    sliderText.innerText = '₹' + parseInt(val, 10).toLocaleString();
  }
}

function runDonationAdvisor() {
  const amount = parseInt(document.getElementById('advisorAmount').value, 10);
  const focus = document.getElementById('advisorFocus').value;
  
  const responseBox = document.getElementById('advisorResponse');
  const responseContent = document.getElementById('advisorResponseContent');
  
  let splits = { seva: 25, bachpanshaala: 25, udaan: 25, prakriti: 25 };
  
  if (focus === 'balanced') {
    splits = { seva: 25, bachpanshaala: 25, udaan: 25, prakriti: 25 };
  } else if (focus === 'children') {
    splits = { seva: 15, bachpanshaala: 50, udaan: 20, prakriti: 15 };
  } else if (focus === 'hunger') {
    splits = { seva: 60, bachpanshaala: 15, udaan: 15, prakriti: 10 };
  } else if (focus === 'environment') {
    splits = { seva: 15, bachpanshaala: 15, udaan: 10, prakriti: 60 };
  }

  const p1 = (amount * splits.seva) / 100;
  const p2 = (amount * splits.bachpanshaala) / 100;
  const p3 = (amount * splits.udaan) / 100;
  const p4 = (amount * splits.prakriti) / 100;

  responseContent.innerHTML = `
    <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1rem;">
      ${currentLang === 'EN' ? 'Recommended split allocation of your donation:' : 'आपकी प्राथमिकताओं के आधार पर दान का अनुशंसित विभाजन:'}
    </p>
    
    <div style="display:flex; flex-direction:column; gap:0.6rem; margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; font-size:0.85rem;">
        <span>🍱 Project SEVA (${splits.seva}%)</span>
        <strong>₹${p1.toLocaleString()}</strong>
      </div>
      <div style="display:flex; justify-content:space-between; font-size:0.85rem;">
        <span>📖 Project BACHPANSHALA (${splits.bachpanshaala}%)</span>
        <strong>₹${p2.toLocaleString()}</strong>
      </div>
      <div style="display:flex; justify-content:space-between; font-size:0.85rem;">
        <span>👩 Project UDAAN (${splits.udaan}%)</span>
        <strong>₹${p3.toLocaleString()}</strong>
      </div>
      <div style="display:flex; justify-content:space-between; font-size:0.85rem;">
        <span>🌱 Project PRAKRITI (${splits.prakriti}%)</span>
        <strong>₹${p4.toLocaleString()}</strong>
      </div>
    </div>

    <!-- Inline SVG Donut Chart representation -->
    <div style="display:flex; justify-content:center; margin-bottom:1.5rem;">
      <svg width="100" height="100" viewBox="0 0 42 42" class="donut">
        <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="rgba(0,0,0,0.05)" stroke-width="4"></circle>
        
        <!-- Arc 1 -->
        <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="var(--primary)" stroke-width="4" 
                stroke-dasharray="${splits.seva} ${100 - splits.seva}" stroke-dashoffset="100"></circle>
        
        <!-- Arc 2 -->
        <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="var(--secondary)" stroke-width="4" 
                stroke-dasharray="${splits.bachpanshaala} ${100 - splits.bachpanshaala}" stroke-dashoffset="${100 - splits.seva}"></circle>
        
        <!-- Arc 3 -->
        <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="var(--accent)" stroke-width="4" 
                stroke-dasharray="${splits.udaan} ${100 - splits.udaan}" stroke-dashoffset="${100 - splits.seva - splits.bachpanshaala}"></circle>
      </svg>
    </div>

    <div style="text-align:center;">
      <button class="btn btn-primary" onclick="simulateAdvisorDonation(${amount}, '${focus}')" style="font-size:0.8rem; padding:0.5rem 1.5rem;">
        ${currentLang === 'EN' ? 'Approve Allocation & Proceed' : 'दान प्रक्रिया शुरू करें'}
      </button>
    </div>
  `;
  
  responseBox.classList.add('active');
}

function simulateAdvisorDonation(amount, focus) {
  closeAIModal('modalAdvisor');
  scrollToSection('donor-portal');
  
  const nameInput = document.getElementById('donorUsername');
  if (document.getElementById('donorAuthBlock').style.display !== 'none') {
    nameInput.focus();
    alert(currentLang === 'EN' ? "Please log in first with any username to verify your donor profile ledger!" : "कृपया पहले अपने नाम से लॉग इन करें ताकि हम इस दान को बहीखाते में जोड़ सकें!");
    return;
  }
  
  if (typeof pushCustomLedgerEntry === 'function') {
    let focusName = "Balanced Allocation";
    if (focus === 'children') focusName = "Project BACHPANSHALA";
    else if (focus === 'hunger') focusName = "Project SEVA";
    else if (focus === 'environment') focusName = "Project PRAKRITI";
    
    pushCustomLedgerEntry(amount, focusName);
  }
}

// ==========================================
// 4. AI IMPACT PREDICTOR
// ==========================================
function runImpactPredictor() {
  const amount = parseFloat(document.getElementById('predictAmount').value);
  if (isNaN(amount) || amount <= 0) return;
  
  const responseBox = document.getElementById('predictorResponse');
  const responseContent = document.getElementById('predictorResponseContent');
  
  const lives = Math.floor(amount / 100);
  const meals = Math.floor(amount / 50);
  const saplings = Math.floor(amount / 150);
  const literacy = Math.floor(amount / 200);

  responseContent.innerHTML = `
    <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1.25rem;">
      ${currentLang === 'EN' ? `Your donation of ₹${amount.toLocaleString()} is estimated to support:` : `आपकी ₹${amount.toLocaleString()} की दान राशि से धरातल पर होने वाले संभावित बदलाव:`}
    </p>
    
    <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:0.75rem;">
      <div style="background:var(--bg-card); border:1px solid var(--glass-border); border-radius:4px; padding:0.6rem; text-align:center;">
        <span style="display:block; font-size:1.25rem;">👥</span>
        <strong style="display:block; font-size:1.05rem; color:var(--primary);">${lives}+</strong>
        <span style="font-size:0.7rem; color:var(--text-muted);">${currentLang === 'EN' ? 'Lives Benefited' : 'लाभान्वित व्यक्ति'}</span>
      </div>
      <div style="background:var(--bg-card); border:1px solid var(--glass-border); border-radius:4px; padding:0.6rem; text-align:center;">
        <span style="display:block; font-size:1.25rem;">🍱</span>
        <strong style="display:block; font-size:1.05rem; color:var(--primary);">${meals}+</strong>
        <span style="font-size:0.7rem; color:var(--text-muted);">${currentLang === 'EN' ? 'Meals Served' : 'वितरित भोजन पैकेट'}</span>
      </div>
      <div style="background:var(--bg-card); border:1px solid var(--glass-border); border-radius:4px; padding:0.6rem; text-align:center;">
        <span style="display:block; font-size:1.25rem;">🌲</span>
        <strong style="display:block; font-size:1.05rem; color:var(--primary);">${saplings}+</strong>
        <span style="font-size:0.7rem; color:var(--text-muted);">${currentLang === 'EN' ? 'Saplings Planted' : 'वृक्षारोपण पौधे'}</span>
      </div>
      <div style="background:var(--bg-card); border:1px solid var(--glass-border); border-radius:4px; padding:0.6rem; text-align:center;">
        <span style="display:block; font-size:1.25rem;">📖</span>
        <strong style="display:block; font-size:1.05rem; color:var(--primary);">${literacy} Hrs</strong>
        <span style="font-size:0.7rem; color:var(--text-muted);">${currentLang === 'EN' ? 'Classroom Hours' : 'साक्षरता कक्षा घंटे'}</span>
      </div>
    </div>
  `;
  
  responseBox.classList.add('active');
}

// ==========================================
// 6. AI SUCCESS STORY GENERATOR
// ==========================================
const storyLogLines = [
  "[SYSTEM] Pulling regional ground reports...",
  "[SYSTEM] Compiling operational milestones...",
  "[SYSTEM] Generating impact narrative..."
];

function runStoryGenerator() {
  const project = document.getElementById('storyProject').value;
  let inputName = document.getElementById('storyName').value.trim();
  
  const responseBox = document.getElementById('storyResponse');
  const responseContent = document.getElementById('storyResponseContent');
  const storyTerminal = document.getElementById('storyTerminal');
  
  if (inputName === '') {
    inputName = currentLang === 'EN' ? 'Ramesh Sahu' : 'रमेश साहू';
  }
  
  storyTerminal.innerHTML = '';
  responseBox.classList.add('active');
  responseContent.style.opacity = '0.3';
  
  let logIdx = 0;
  function writeTerminalLogs() {
    if (logIdx < storyLogLines.length) {
      const line = document.createElement('div');
      line.innerText = storyLogLines[logIdx];
      storyTerminal.appendChild(line);
      storyTerminal.scrollTop = storyTerminal.scrollHeight;
      logIdx++;
      setTimeout(writeTerminalLogs, 300);
    } else {
      responseContent.style.opacity = '1';
      renderStory(project, inputName, responseContent);
    }
  }
  
  writeTerminalLogs();
}

function renderStory(project, name, container) {
  let storyText = "";
  
  if (project === 'seva') {
    storyText = currentLang === 'EN'
      ? `"${name}, a daily wage construction laborer working in Raipur, frequently struggled to secure warm nutritious meals for his family during seasonal heavy rains. Through InAmigos Project Seva's direct ground dispatches, daily hot meal distributions were successfully setup in his colony. Ramesh's family now has stable access to healthy food, enabling him to save income for his kids' school books."`
      : `"${name}, जो रायपुर में मजदूरी करते हैं, उनके लिए बारिश के मौसम में परिवार के लिए भोजन जुटाना मुश्किल हो जाता था। इनअमिगोस प्रोजेक्ट सेवा के जमीनी वितरणों के माध्यम से उनके क्षेत्र में नियमित भोजन पैकेट मिलने लगे। अब उनके परिवार को भोजन की चिंता नहीं रहती, और वे बच्चों की पढ़ाई के लिए बचत कर पाते हैं।"`;
  } else if (project === 'bachpanshala') {
    storyText = currentLang === 'EN'
      ? `"${name}, a bright young student from Durg district, had never operated a computing device. Project Bachpanshala set up a digital tablet classroom in his block. Guided by local volunteer tutors, he picked up basic computer literacy and math modules inside 8 weeks. He now aspires to pursue a technical career."`
      : `"${name}, जो दुर्ग जिले के एक होनहार छात्र हैं, उन्होंने कभी कंप्यूटर नहीं देखा था। प्रोजेक्ट बचपनशाला ने उनके गाँव में टैबलेट लैब स्थापित की। स्वयंसेवकों के मार्गदर्शन में उन्होंने 8 सप्ताह में कंप्यूटर साक्षरता सीख ली। वे अब तकनीक के क्षेत्र में आगे बढ़ना चाहते हैं।"`;
  } else if (project === 'udaan') {
    storyText = currentLang === 'EN'
      ? `"${name} from Bilaspur rural belt had limited options for independent income. Joining InAmigos Project Udaan's tailoring collective, she trained in professional sewing. Our digital stories finder highlighted her products, connecting her group to local markets. She now sustains a steady, self-reliant livelihood."`
      : `"${name}, जो बिलासपुर की ग्रामीण पृष्ठभूमि से हैं, उनके पास स्वतंत्र आय के साधन सीमित थे। प्रोजेक्ट उड़ान से जुड़कर उन्होंने सिलाई का प्रशिक्षण लिया। हमारे डिजिटल कहानी खोजक ने उनके उत्पादों को स्थानीय बाजारों से जोड़ा, जिससे वे अब स्वावलंबी बन चुकी हैं।"`;
  } else if (project === 'jeev') {
    storyText = currentLang === 'EN'
      ? `"${name} discovered an injured stray dog on the outskirts of Bhilai. Using our floating support finder, she sent coordinates. Local animal welfare volunteers arrived within 30 minutes, providing professional clinical first-aid. The stray is now fully recovered and safely housed."`
      : `"${name} ने भिलाई के पास एक घायल लावारिस कुत्ते को देखा। उन्होंने हमारे सपोर्ट फाइंडर पर स्थान साझा किया। हमारी स्वयंसेवक पशु टीम ने 30 मिनट में पहुंचकर प्राथमिक उपचार किया। वह कुत्ता अब पूरी तरह स्वस्थ और सुरक्षित है।"`;
  } else if (project === 'prakriti') {
    storyText = currentLang === 'EN'
      ? `"${name} coordinated a massive seed-bombing environment drive in Raipur. Guided by regional plantation maps, his volunteer team planted over 500 saplings in deforested soil zones. Our ecological trackers forecast a stable canopy survival rate over the next three monsoons."`
      : `"${name} रायपुर में हमारे वृक्षारोपण पर्यावरण अभियान से जुड़े। उपजाऊ मिट्टी के क्षेत्रों का मिलान करके, उनकी स्वयंसेवक टीम ने 500 पौधे लगाए। हमारे पर्यावरण संकेतक अगले तीन वर्षों में इनके अच्छी तरह जीवित रहने का अनुमान लगा रहे हैं।"`;
  }
  
  container.innerHTML = storyText;
}

// ==========================================
// 7. AI GRANT RECOMMENDATION ENGINE
// ==========================================
function runGrantMatch() {
  const domain = document.getElementById('grantDomain').value;
  const responseBox = document.getElementById('grantResponse');
  const responseContent = document.getElementById('grantResponseContent');
  
  let schemes = [];
  
  if (domain === 'rural') {
    schemes = [
      { name: "NITI Aayog National Social Support Fund", match: "97% Match", budget: "Up to ₹15 Lakhs", status: "80G Verified" },
      { name: "Chhattisgarh Rural Development Collective Scheme", match: "91% Match", budget: "Up to ₹8 Lakhs", status: "Active Call" }
    ];
  } else if (domain === 'health') {
    schemes = [
      { name: "PM Nutrition & Welfare CSR Integration", match: "94% Match", budget: "Up to ₹20 Lakhs", status: "CSR-1 Registered Only" },
      { name: "State Public Health Welfare Support (CG)", match: "88% Match", budget: "Up to ₹10 Lakhs", status: "Open Call" }
    ];
  } else if (domain === 'tech') {
    schemes = [
      { name: "Digital India STEM & Literacy Education Fund", match: "96% Match", budget: "Up to ₹25 Lakhs", status: "Hardware Partner Ready" },
      { name: "Chhattisgarh IT Innovation & Youth CSR Grant", match: "93% Match", budget: "Up to ₹12 Lakhs", status: "Active Call" }
    ];
  }

  let html = `<div style="display:flex; flex-direction:column; gap:0.75rem;">`;
  schemes.forEach(s => {
    html += `
      <div style="background:var(--bg-card); border:1px solid var(--glass-border); border-radius:6px; padding:0.85rem; text-align:left;">
        <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem; font-size:0.875rem;">
          <strong style="color:var(--text-primary);">${s.name}</strong>
          <span style="color:var(--primary); font-weight:700;">${s.match}</span>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted);">
          <span>${currentLang === 'EN' ? 'Grant Scope:' : 'अनुदान दायरा:'} ${s.budget}</span>
          <span style="color:var(--primary);">${s.status}</span>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  
  responseContent.innerHTML = html;
  responseBox.classList.add('active');
}

// ==========================================
// 9. AI BENEFICIARY SUPPORT FINDER
// ==========================================
function runBeneficiaryLocator() {
  const zip = document.getElementById('beneficiaryZip').value;
  const responseBox = document.getElementById('beneficiaryResponse');
  const responseContent = document.getElementById('beneficiaryResponseContent');
  
  let locations = [];
  
  if (zip === 'raipur') {
    locations = [
      { center: "Raipur Station Shelter (Project Seva)", service: "Food packet distributions", times: "Daily 12:30 PM - 02:30 PM IST" },
      { center: "InAmigos HQ Literacy Block (Bachpanshala)", service: "Computer & tablet classes", times: "Sat - Sun 10:00 AM - 04:00 PM" }
    ];
  } else if (zip === 'durg') {
    locations = [
      { center: "Bhilai Sector 4 Guild (Project Udaan)", service: "Women stitching guilds", times: "Mon - Fri 11:00 AM - 03:00 PM" },
      { center: "Durg Animal Outpost (Project Jeev)", service: "Veterinary first-aid post", times: "24/7 Helpline" }
    ];
  } else if (zip === 'bilaspur') {
    locations = [
      { center: "Bilaspur City Hub (Project Seva)", service: "Hot dinner distributions", times: "Daily 07:00 PM - 09:00 PM" }
    ];
  } else if (zip === 'bastar') {
    locations = [
      { center: "Jagdalpur Block 2 Collective (Project Udaan)", service: "Handicrafts & micro-credit training", times: "Sat 10:00 AM - 05:00 PM" }
    ];
  }

  let html = `<div style="display:flex; flex-direction:column; gap:0.75rem;">`;
  locations.forEach(l => {
    html += `
      <div style="background:var(--bg-card); border:1px solid var(--glass-border); border-radius:6px; padding:0.85rem; text-align:left;">
        <h5 style="color:var(--primary); font-size:0.875rem; margin-bottom:0.25rem;">📍 ${l.center}</h5>
        <p style="font-size:0.8rem; color:var(--text-primary); margin-bottom:0.15rem;">${currentLang === 'EN' ? 'Active Service:' : 'सक्रिय सेवा:'} ${l.service}</p>
        <p style="font-size:0.725rem; color:var(--text-muted);">${currentLang === 'EN' ? 'Timings:' : 'समय:'} ${l.times}</p>
      </div>
    `;
  });
  html += `</div>`;
  
  responseContent.innerHTML = html;
  responseBox.classList.add('active');
}

// ==========================================
// 10. PREDICTIVE OUTREACH ANALYTICS
// ==========================================
function updateAnalyticsSliderText(val) {
  const sliderText = document.getElementById('analyticsSliderText');
  if (sliderText) {
    sliderText.innerText = val + '%';
  }
}

function runCampaignAnalytics() {
  const growth = parseFloat(document.getElementById('analyticsGrowth').value);
  const responseBox = document.getElementById('analyticsResponse');
  const responseContent = document.getElementById('analyticsResponseContent');
  
  const baseLives = 50000;
  const baseMeals = 50000;
  const baseTrees = 20000;
  
  const predictedLives = Math.floor(baseLives * (1 + growth / 100));
  const predictedMeals = Math.floor(baseMeals * (1 + growth / 100));
  const predictedTrees = Math.floor(baseTrees * (1 + growth / 100));

  responseContent.innerHTML = `
    <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:1rem;">
      ${currentLang === 'EN' ? `Outreach forecasts modeled over 12 months at +${growth}% growth target:` : `+${growth}% वृद्धि लक्ष्य के आधार पर अगले 12 महीनों में अनुमानित प्रभाव:`}
    </p>
    
    <div style="display:flex; flex-direction:column; gap:0.6rem; text-align:left;">
      <div style="display:flex; justify-content:space-between; font-size:0.85rem;">
        <span>👥 Lives Directly Impacted</span>
        <strong style="color:var(--primary);">${predictedLives.toLocaleString()}+</strong>
      </div>
      <div style="display:flex; justify-content:space-between; font-size:0.85rem;">
        <span>🍱 Meals Provided</span>
        <strong style="color:var(--primary);">${predictedMeals.toLocaleString()}+</strong>
      </div>
      <div style="display:flex; justify-content:space-between; font-size:0.85rem;">
        <span>🌲 Saplings Planted</span>
        <strong style="color:var(--primary);">${predictedTrees.toLocaleString()}+</strong>
      </div>
    </div>
  `;
  
  responseBox.classList.add('active');
}
