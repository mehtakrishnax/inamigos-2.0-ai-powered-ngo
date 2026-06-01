// ==========================================
// CORE STATE & LOCALIZATION REGISTRY
// ==========================================
let currentLang = 'EN';

const translations = {
  EN: {
    nav_home: "Dashboard", nav_about: "About", nav_projects: "Projects", nav_ai: "AI Solutions",
    nav_volunteer: "Volunteer Hub", nav_impact: "Impact", nav_stories: "Stories",
    nav_events: "Events", nav_gallery: "Gallery", nav_donor: "Donor Hub", nav_contact: "Contact",
    
    hero_tag: "InAmigos 2026 Ecosystem",
    hero_title_1: "Empowering Communities Through ",
    hero_title_2: "Artificial Intelligence ",
    hero_title_3: "and Compassion",
    hero_desc: "InAmigos Foundation merges human compassion with intelligent technology. Discover how we optimize resource allocation, match volunteers with active programs, forecast community needs, and translate help requests instantly.",
    hero_cta_donate: "Donate Now", hero_cta_volunteer: "Become a Volunteer", hero_cta_explore: "Explore AI Solutions",
    console_title: "Resource Dispatch Logs",
    
    about_title: "Get to Know Us Better",
    about_subtitle: "InAmigos Foundation is a Section 8 registered non-profit organization registered with NITI Aayog (CSR-1), leading the digital transition of community care.",
    value_mission_title: "Our Mission",
    value_mission_desc: "To create positive, long-lasting societal change through community empowerment, transparent volunteering channels, and intensive ground deployment.",
    value_vision_title: "Our Vision",
    value_vision_desc: "Uniting driven individuals to foster a more inclusive, compassionate, and empowered society, with a focus on serving underprivileged communities with dignity and care.",
    value_values_title: "Core Values",
    value_values_desc: "Fostering absolute programmatic transparency, operational integrity, unconditional community support, and rapid scaling in every operations center.",
    
    journey_title: "Our Journey",
    journey_subtitle: "Tracking milestones from community inception to 2026 technology deployment",
    t1_title: "Inception & Pandemic Relief", t1_desc: "InAmigos Foundation established on Sept 23, 2020 by Mr. Govind Shukla to mitigate community isolation during the global pandemic.",
    t2_title: "Project Expansion", t2_desc: "Formalized Section 8 non-profit status. Deployed Projects Seva, Bachpanshala, and Udaan across Chhattisgarh, feeding over 10,000 families.",
    t3_title: "CSR Accreditation", t3_desc: "Received NITI Aayog registration (CSR-1), 80G & 12A certifications. Scaled global training internships to support over 30,000 students globally.",
    t4_title: "Smart Integration (2.0)", t4_desc: "Pioneered InAmigos 2.0 with custom matching tools, automated resource grids, and responsive donor portal ledgers.",
    lead_ceo: "Founder & CEO",
    lead_title: "A Note From Our Founder",
    lead_quote: "\"When we started InAmigos, the goal was simple: serve with dignity. In the digital age, compassion alone is a great start, but when coupled with modern technology, it transforms into an unstoppable catalyst for scalable, hyper-efficient human development.\"",
    
    projects_title: "Our Primary Initiatives",
    projects_subtitle: "Discover our 6 core projects deployed inside active regions, backed by real performance metrics and responsive progress indicators.",
    proj_target: "Target Milestone Completion",
    p1_title: "Project SEVA", p1_desc: "Providing food and clothing to underprivileged communities, including daily wage workers and the homeless.",
    p_meals: "Meals Distributed", p_centers: "Active Hubs",
    p2_title: "Project BACHPANSHALA", p2_desc: "Bridging educational gaps by providing underprivileged children with basic digital literacy, life skills, and school education support.",
    p_kids: "Students Taught", p_laptops: "Devices Deployed",
    p3_title: "Project UDAAN", p3_desc: "Dedicated to women's empowerment by promoting financial independence, skill development, and menstrual hygiene awareness.",
    p_women: "Self-Reliant Women", p_guilds: "Self Help Collectives",
    p4_title: "Project JEEV", p4_desc: "An animal welfare initiative that rescues, protects, and feeds stray animals, with a dedicated local volunteer response network.",
    p_animals: "Strays Fed Daily", p_rescues: "Successful Rescues",
    p5_title: "Project PRAKRITI", p5_desc: "Advocating for environmental conservation and sustainability through urban plantation drives and plastic recycling camps.",
    p_trees: "Saplings Planted", p_co2: "Estimated CO2 Off-set",
    p6_title: "Project VIKAS", p6_desc: "Facilitating skill development and employability through internships in fields such as data operations, digital marketing, and social work.",
    p_interns: "Interns Trained", p_employment: "Placement Rate",
    
    ai_title: "Intelligent Social Solutions",
    ai_subtitle: "Click any card to interact with the active simulated models of our NGO technology suite.",
    ai_live: "Active Assistant", ai_complex: "Interactive Map",
    ai1_title: "AI Volunteer Assistant (ERA)", ai1_desc: "Intelligent chat assistant (ERA) for quick guidance, center navigation, and FAQ translation.",
    ai2_title: "AI Volunteer Matcher", ai2_desc: "Matches your specific skill sets and interests with the optimal project match.",
    ai3_title: "Smart Donation Advisor", ai3_desc: "Suggests custom funding portfolios based on target interests and impact fields.",
    ai4_title: "AI Impact Predictor", ai4_desc: "Translates donation sums into concrete beneficiaries and ecological growth metrics.",
    ai5_title: "Bilingual Language Assistant", ai5_desc: "Seamless switching between English and Hindi translation dictionaries across the web UI.",
    ai6_title: "AI Story Synthesizer", ai6_desc: "Generates human-centric narrative transformations from localized ground reports.",
    ai7_title: "Grant Match Engine", ai7_desc: "Matches NGO targets with available active CSR schemes and NITI Aayog proposals.",
    ai8_title: "Resource Allocation Grid", ai8_desc: "Interactive routing engine modeling logistical dispatch metrics in Chhattisgarh zones.",
    ai9_title: "Beneficiary Support Finder", ai9_desc: "Helps underprivileged citizens find the nearest distribution base or educational hub.",
    ai10_title: "Predictive Outreach Analytics", ai10_desc: "Statistical model showcasing anticipated growth and outreach projections.",
    
    ai_btn_interact: "Open Chat Box", ai_btn_match: "Check Alignment", ai_btn_advise: "Get Proposal",
    ai_btn_predict: "Calculate Forecast", ai_btn_translate: "Toggle Language", ai_btn_story: "Synthesize Narrative",
    ai_btn_grant: "Match Grants", ai_btn_alloc: "Scroll to Dashboard", ai_btn_locate: "Locate Services",
    ai_btn_analytics: "Analyze Metrics",
    
    vol_title: "Become an InAmigos Volunteer",
    vol_desc_1: "Volunteering with InAmigos Foundation is entirely structured through automated skills coordination. By utilizing the 2.0 Matching Algorithm, we place digital strategists, graphic handlers, food route coordinators, and teaching supervisors exactly where their impact is maximized.",
    vol_desc_2: "*Note: Active internships under Project Vikas provide academic and placement endorsements upon programmatic reviews. Join 30,000+ trained candidates globally.",
    vol_cta_match: "Test My Matching Score",
    vol_form_title: "Quick Registration",
    f_name: "Full Name", f_email: "Email Address", f_skill: "Key Skill Set", f_subject: "Subject", f_message: "Message Details",
    vol_btn_submit: "Register in Volunteer Registry",
    
    imp_title: "Real-Time Impact Dashboard",
    imp_subtitle: "Explore our certified social performance vectors, lives directly impacted, and structural dispatches computed live.",
    stat_lives: "Total Lives Impacted", stat_trees: "Saplings Planted", stat_meals: "Meals Distributed",
    stat_interns: "Interns Trained", stat_vols: "Registered Volunteers", stat_comm: "Communities Served",
    alloc_title: "Smart Resource Dispatch Dashboard",
    alloc_sim: "Logistics Dispatch Route Visualizer",
    alloc_recalc: "Recalculate Optimal Routes",
    
    st_title: "Success Chronicles",
    st_subtitle: "Real human transitions enabled through InAmigos digital networks.",
    st_c1_role: "Project Udaan Beneficiary - Bastar Self Help Guild",
    st_c1_quote: "\"Being part of the InAmigos sewing guild helped me establish a stable monthly salary. In 2.0, the AI story synthesizer shared my products online, immediately linking me to wholesale corporate vendors in Raipur.\"",
    
    ev_title: "Upcoming Campaigns & Drives",
    ev_subtitle: "Register to participate or coordinate in the nearest community drives.",
    ev_tag_seva: "Project SEVA Drive", ev_tag_prakriti: "Project Prakriti",
    ev_d: "Days", ev_h: "Hrs", ev_m: "Mins",
    ev1_title: "Monsoon Clothing & Food Drive", ev1_loc: "Raipur Railway Shelter, CG",
    ev2_title: "20,000 Seed-Bombing Mission", ev2_loc: "Bhilai Forest Outskirts, CG",
    ev_btn_reg: "Register as Coordinator",
    
    g_title: "Social Action Gallery",
    g_subtitle: "Visual chronicles of our active volunteers, education hubs, and environment projects.",
    g1_title: "Slum Nutrition Drive", g2_title: "Tablet Literacy Session",
    g3_title: "Women Guild Workshop", g4_title: "Green Seed Planting",
    
    don_title: "Donor Command Center",
    don_subtitle: "Access your personalized ledger, verified digital tax certificates, and target donation indicators.",
    don_lock_title: "Secure Ledger Portal",
    don_lock_desc: "For demo safety, enter any username to instantly unlock a premium donor simulation dashboard containing previous transaction lists.",
    don_btn_unlock: "Access Donor Ledger",
    don_tier: "Pioneer Patron",
    don_btn_logout: "Logout",
    ledger_title: "Certified Donation History",
    h_date: "Date", h_txn: "Txn Hash", h_project: "Target Initiative", h_amount: "Amount", h_status: "CSR Status", h_cert: "Certificate",
    ach_title: "Social Achievements",
    ac1_title: "SEVA Shield", ac1_desc: "Helped feed 50+ families",
    ac2_title: "Prakriti Medal", ac2_desc: "Planted 10 saplings",
    ac3_title: "Literacy Anchor", ac3_desc: "Support 5 tablets",
    ac4_title: "Elite Patron", ac4_desc: "Top 5% contribution",
    
    con_title: "Contact Central",
    con_subtitle: "Connect with the administrative centers of InAmigos Foundation.",
    con_form_title: "Direct Inquiry Form",
    con_btn_submit: "Send Message",
    ci_loc_title: "Head Office Address",
    ci_mail_title: "Electronic Mail",
    ci_phone_title: "Helpline Number",
    
    bot_name: "ERA",
    bot_online: "ERA Active",
    bot_hello: "Greetings! I am ERA 🤖, your smart InAmigos coordinator. How can I guide your volunteering, CSR funding, or support requirements today?",
    s1: "CSR Credentials", s2: "SEVA Locations", s3: "Vikas Internships",
    
    m_m_title: "AI Volunteer Matching System",
    m_m_desc: "Input your professional skill sets and operational availability. The local matching classifier calculates the fit percentage across our 6 projects.",
    m_m_s1: "Select Your Primary Skill Set",
    ms_teaching: "Academic Mentorship & Child Tutoring",
    ms_cooking: "Food Preparation & Logistics Routing",
    ms_marketing: "Digital Promotion, Graphics & Copywriting",
    ms_animal: "Veterinary Care & Rescue Management",
    ms_horticulture: "Urban Plantation & Sapling Seed Bombing",
    ms_finance: "CSR Relations, Auditing & Bookkeeping",
    m_m_s2: "What is your Availability?",
    mv_wknd: "Weekends (Sat - Sun)",
    mv_wkdy: "Weekdays (Mon - Fri)",
    m_m_btn: "Run Match Finder",
    m_m_res_h: "Match Recommendations",
    
    da_title: "Smart Donation Advisor",
    da_desc: "Our smart calculator constructs the optimal donation allocation portfolio based on your impact preferences.",
    da_label_amount: "Target Contribution Amount (INR)",
    da_label_focus: "Primary Area of Interest",
    df_balanced: "Balanced Allocation (Across All Projects)",
    df_kids: "Child Education & Digital Literacy (Bachpanshala)",
    df_hunger: "Food Security & Daily Shelters (Seva)",
    df_green: "Climate Offset & Sapling Care (Prakriti)",
    da_btn: "Assemble Allocation Model",
    da_res_h: "Recommended CSR Allocation Portfolio",
    
    ip_title: "AI Impact Predictor",
    ip_desc: "Compute direct socio-ecological benefits and predicted beneficiaries matching your donation volume.",
    ip_label_amount: "Enter Donation Amount (INR)",
    ip_btn: "Calculate Forecast",
    ip_res_h: "Impact Forecast Summary",
    
    sg_title: "AI Success Story Generator",
    sg_desc: "Our engine compiles raw ground logs and achievements into structured narrative stories.",
    sg_label_proj: "Select Target Initiative",
    sg_label_name: "Beneficiary Name (Optional)",
    sg_btn: "Compile Impact Story",
    sg_res_h: "Synthesized Impact Narrative",
    
    gr_title: "AI Grant Recommendation Engine",
    gr_desc: "Matches NGO operational projects with current active CSR grants and national funding agencies.",
    gr_label_domain: "NGO Corporate Sector Scope",
    gd_rural: "Rural Tribal Empowerment (Women & Education)",
    gd_health: "Nutrition, Slum Feeding & Disaster Relief",
    gd_tech: "Digital Literacy & STEM Training for Youth",
    gr_btn: "Query CSR Database",
    gr_res_h: "Matching Grant Options",
    
    bs_title: "AI Beneficiary Support Locator",
    bs_desc: "Locate the nearest active feeding centers, Bachpanshaala schools, or clothing distribution points instantly.",
    bs_label_dist: "Select Nearest District (CG)",
    bs_btn: "Search Resource Bases",
    bs_res_h: "Active Ground Resources Found",
    
    pa_title: "Predictive Campaign Analytics",
    pa_desc: "Heuristic statistical forecasts modeling future outreach, funds raised, and saplings planted over the next 12 months.",
    pa_label_growth: "Target Annual Growth Rate Accent",
    pa_btn: "Run Predictive Modeling",
    pa_res_h: "Outreach Projections Summary",
    
    cert_title: "Certificate of Impact",
    cert_sub: "NITI AAYOG REGISTERED • 80G COMPLIANT",
    cert_ceo_sign: "Govind Shukla (CEO)",
    cert_verified: "CSR-1 Verified",
    cert_btn_print: "Print Certificate"
  },
  HI: {
    nav_home: "डैशबोर्ड", nav_about: "हमारे बारे में", nav_projects: "परियोजनाएं", nav_ai: "एआई समाधान",
    nav_volunteer: "स्वयंसेवक केंद्र", nav_impact: "हमारा प्रभाव", nav_stories: "सफलता की कहानियां",
    nav_events: "अभियान", nav_gallery: "गैलरी", nav_donor: "दाता केंद्र", nav_contact: "संपर्क करें",
    
    hero_tag: "इनअमिगोस 2026 इकोसिस्टम",
    hero_title_1: "एआई और करुणा द्वारा ",
    hero_title_2: "समुदायों को ",
    hero_title_3: "सशक्त बनाना",
    hero_desc: "इनअमिगोस फाउंडेशन मानवीय करुणा को उन्नत तकनीक के साथ जोड़ता है। जानें कैसे हम संसाधनों के वितरण को अनुकूलित करते हैं, स्वयंसेवकों को सक्रिय कार्यक्रमों से जोड़ते हैं, आवश्यकताओं का पूर्वानुमान लगाते हैं और अनुवाद करते हैं।",
    hero_cta_donate: "अभी दान करें", hero_cta_volunteer: "स्वयंसेवक बनें", hero_cta_explore: "एआई समाधान देखें",
    console_title: "संसाधन वितरण लॉग",
    
    about_title: "हमें और करीब से जानें",
    about_subtitle: "इनअमिगोस फाउंडेशन नीति आयोग (CSR-1) के साथ पंजीकृत एक गैर-लाभकारी संगठन है, जो सामुदायिक सेवा के डिजिटल बदलाव का नेतृत्व कर रहा है।",
    value_mission_title: "हमारा लक्ष्य",
    value_mission_desc: "सामुदायिक सशक्तिकरण, पारदर्शी स्वयंसेवा माध्यमों और सघन जमीनी कार्यों के जरिए समाज में सकारात्मक और दीर्घकालिक बदलाव लाना।",
    value_vision_title: "हमारी दृष्टि",
    value_vision_desc: "वंचित समुदायों की सम्मान और देखभाल के साथ सेवा करने पर ध्यान केंद्रित करते हुए, एक अधिक समावेशी, संवेदनशील और सशक्त समाज को बढ़ावा देने के लिए प्रेरित लोगों को एकजुट करना।",
    value_values_title: "मुख्य मूल्य",
    value_values_desc: "हमारे हर संचालन केंद्र में पूर्ण संगठनात्मक पारदर्शिता, परिचालन ईमानदारी और बिना शर्त सामुदायिक सहायता को बनाए रखना।",
    
    journey_title: "हमारी यात्रा",
    journey_subtitle: "साल 2020 में शुरुआत से लेकर 2026 तक की मुख्य उपलब्धियां",
    t1_title: "शुरुआत और महामारी राहत", t1_desc: "वैश्विक महामारी के दौरान समुदायों की सहायता के लिए 23 सितंबर 2020 को श्री गोविंद शुक्ला द्वारा इनअमिगोस फाउंडेशन की स्थापना।",
    t2_title: "परियोजनाओं का विस्तार", t2_desc: "सेक्शन 8 गैर-लाभकारी संगठन के रूप में पंजीकरण। छत्तीसगढ़ में सेवा, बचपनशाला और उड़ान परियोजनाओं की शुरुआत।",
    t3_title: "सीएसआर प्रमाणन", t3_desc: "नीति आयोग पंजीकरण (CSR-1), 80G और 12A प्रमाणपत्र प्राप्त हुए। वैश्विक स्तर पर 30,000+ छात्रों को प्रशिक्षित किया।",
    t4_title: "स्मार्ट एकीकरण (2.0)", t4_desc: "कस्टम मिलान टूल, स्वचालित संसाधन ग्रिड और उत्तरदायी दाता बहीखाता के साथ इनअमिगोस 2.0 का शुभारंभ।",
    lead_ceo: "संस्थापक एवं सीईओ",
    lead_title: "हमारे संस्थापक का संदेश",
    lead_quote: "\"जब हमने शुरुआत की थी, तब लक्ष्य सरल था: सम्मान के साथ सेवा करना। आज के डिजिटल युग में, जब करुणा को आधुनिक तकनीक के साथ जोड़ा जाता है, तो यह सामाजिक बदलाव की रफ्तार को कई गुना बढ़ा देता है।\"",
    
    projects_title: "हमारी प्रमुख पहल",
    projects_subtitle: "हमारे 6 मुख्य प्रोजेक्ट्स को देखें जो वास्तविक प्रदर्शन मानकों और प्रगति संकेतकों के साथ विभिन्न क्षेत्रों में काम कर रहे हैं।",
    proj_target: "प्रगति स्तर",
    p1_title: "प्रोजेक्ट सेवा", p1_desc: "दैनिक वेतनभोगी मजदूरों, झुग्गी बस्तियों और बेघर परिवारों को स्वच्छ भोजन और वस्त्र वितरित करना।",
    p_meals: "भोजन वितरित", p_centers: "सक्रिय केंद्र",
    p2_title: "प्रोजेक्ट बचपनशाला", p2_desc: "ग्रामीण बच्चों के लिए डिजिटल शिक्षण उपकरण, बुनियादी कोडिंग और जीवन कौशल कार्यशालाएं प्रदान करके शिक्षा अंतर को कम करना।",
    p_kids: "शिक्षित बच्चे", p_laptops: "उपकरण वितरित",
    p3_title: "प्रोजेक्ट उड़ान", p3_desc: "स्वयं सहायता समूहों, व्यावसायिक प्रशिक्षण और मासिक धर्म स्वच्छता अभियानों के जरिए महिलाओं को आत्मनिर्भर बनाना।",
    p_women: "आत्मनिर्भर महिलाएं", p_guilds: "स्वयं सहायता समूह",
    p4_title: "प्रोजेक्ट जीव", p4_desc: "सड़क के लावारिस पशुओं के लिए प्राथमिक चिकित्सा, सामुदायिक भोजन और टीकाकरण अभियान चलाने वाला पशु कल्याण मिशन।",
    p_animals: "दैनिक आहार पशु", p_rescues: "सफल रेस्क्यू",
    p5_title: "प्रोजेक्ट प्रकृति", p5_desc: "पर्यावरण संरक्षण के लिए वृक्षारोपण अभियान, बीज-बमबारी और प्लास्टिक पुनर्चक्रण शिविरों का संचालन।",
    p_trees: "पौधे लगाए गए", p_co2: "कम हुआ कार्बन",
    p6_title: "प्रोजेक्ट विकास", p6_desc: "डेटा ऑपरेशंस, ग्राफिक्स और सामाजिक क्षेत्र प्रबंधन में युवाओं को प्रशिक्षित कर वैश्विक इंटर्नशिप प्रदान करना।",
    p_interns: "प्रशिक्षित इंटर्न्स", p_employment: "प्लेसमेंट दर",
    
    ai_title: "स्मार्ट सामाजिक समाधान",
    ai_subtitle: "हमारे उन्नत तकनीक आधारित समाधानों के साथ बातचीत करने के लिए किसी भी कार्ड पर क्लिक करें।",
    ai_live: "सक्रिय सहायक", ai_complex: "नक्शा सिमुलेटर",
    ai1_title: "एआई स्वयंसेवक सहायक (ERA)", ai1_desc: "त्वरित मार्गदर्शन (ERA), केंद्र ढूंढने और प्रश्नों के अनुवाद के लिए बुद्धिमान चैट सहायक।",
    ai2_title: "एआई स्वयंसेवक मैचिंग", ai2_desc: "आपके कौशल और रुचि का विश्लेषण करके सबसे उपयुक्त सामाजिक प्रोजेक्ट की सिफारिश करता है।",
    ai3_title: "स्मार्ट डोनेशन एडवाइजर", ai3_desc: "आपकी रुचि और बजट के अनुसार सबसे प्रभावी दान पोर्टफोलियो तैयार करता है।",
    ai4_title: "एआई प्रभाव सूचक", ai4_desc: "आपके द्वारा दान की गई राशि से होने वाले सामाजिक और पर्यावरणीय बदलाव का सटीक अनुमान लगाता है।",
    ai5_title: "द्विभाषी भाषा सहायक", ai5_desc: "बिना पेज रीलोड किए पूरी वेबसाइट को हिंदी और अंग्रेजी में तुरंत बदलें।",
    ai6_title: "एआई कहानी निर्माता", ai6_desc: "जमीनी रिपोर्ट और उपलब्धियों के आधार पर प्रेरक सफलता की कहानियां तैयार करता है।",
    ai7_title: "अनुदान खोजक", ai7_desc: "नीति आयोग और सरकारी योजनाओं के साथ एनजीओ के लिए सही अनुदानों का मिलान करता है।",
    ai8_title: "संसाधन आवंटन डैशबोर्ड", ai8_desc: "छत्तीसगढ़ के क्षेत्रों में राहत सामग्री वितरण के लिए सबसे छोटा और कुशल मार्ग तय करता. है।",
    ai9_title: "एआई लाभार्थी सहायक", ai9_desc: "जरूरतमंद नागरिकों को सबसे नजदीकी वितरण केंद्र या स्कूल ढूंढने में मदद करता है।",
    ai10_title: "पूर्वानुमान अभियान विश्लेषण", ai10_desc: "अगले 12 महीनों में स्वयंसेवकों की संख्या और बढ़ने वाले प्रभाव की भविष्यवाणी करता है।",
    
    ai_btn_interact: "चैट बॉक्स खोलें", ai_btn_match: "संरेखण जांचें", ai_btn_advise: "प्रस्ताव प्राप्त करें",
    ai_btn_predict: "पूर्वानुमान लगाएं", ai_btn_translate: "भाषा बदलें", ai_btn_story: "कहानी तैयार करें",
    ai_btn_grant: "अनुदान खोजें", ai_btn_alloc: "डैशबोर्ड पर जाएं", ai_btn_locate: "सेवाएं खोजें",
    ai_btn_analytics: "विश्लेषण देखें",
    
    vol_title: "इनअमिगोस के स्वयंसेवक बनें",
    vol_desc_1: "इनअमिगोस फाउंडेशन में स्वयंसेवा पूरी तरह से कौशल-आधारित है। एआई मैचिंग एल्गोरिदम के जरिए हम स्वयंसेवकों को उनकी क्षमता के अनुसार सही जगह पर नियुक्त करते हैं।",
    vol_desc_2: "*नोट: प्रोजेक्ट विकास के तहत इंटर्नशिप पूरी करने पर शैक्षणिक और करियर प्रमाण पत्र दिए जाते हैं। 30,000+ उम्मीदवारों में शामिल हों।",
    vol_cta_match: "अपना मैचिंग स्कोर जांचें",
    vol_form_title: "त्वरित पंजीकरण",
    f_name: "पूरा नाम", f_email: "ईमेल पता", f_skill: "मुख्य कौशल", f_subject: "विषय", f_message: "संदेश का विवरण",
    vol_btn_submit: "स्वयंसेवक सूची में जुड़ें",
    
    imp_title: "वास्तविक समय प्रभाव डैशबोर्ड",
    imp_subtitle: "हमारे सामाजिक कार्यों, लाभान्वित लोगों और राहत सामग्री वितरण के आंकड़ों को लाइव देखें।",
    stat_lives: "कुल लाभान्वित लोग", stat_trees: "लगाए गए पौधे", stat_meals: "भोजन वितरित",
    stat_interns: "प्रशिक्षित इंटर्न्स", stat_vols: "पंजीकृत स्वयंसेवक", stat_comm: "लाभान्वित समुदाय",
    alloc_title: "स्मार्ट संसाधन वितरण डैशबोर्ड",
    alloc_sim: "लॉजिस्टिक्स रूट विज़ुअलाइज़र",
    alloc_recalc: "आवंटन मार्ग की पुनर्गणना करें",
    
    st_title: "सफलता की कहानियां",
    st_subtitle: "हमारे डिजिटल नेटवर्क के जरिए लोगों के जीवन में आए बदलाव की सच्ची कहानियां।",
    st_c1_role: "प्रोजेक्ट उड़ान लाभार्थी - बस्तर स्वयं सहायता समूह",
    st_c1_quote: "\"इनअमिगोस समूह से जुड़ने के बाद मुझे नियमित आय का साधन मिला। एआई कहानी निर्माता ने मेरे हस्तशिल्प उत्पादों को ऑनलाइन साझा किया, जिससे रायपुर में सीधे थोक खरीदार मिल गए।\"",
    
    ev_title: "आगामी अभियान और कार्यक्रम",
    ev_subtitle: "अपने नजदीकी सेवा अभियान में शामिल होने या सहयोग करने के लिए पंजीकरण करें।",
    ev_tag_seva: "प्रोजेक्ट सेवा अभियान", ev_tag_prakriti: "प्रोजेक्ट प्रकृति",
    ev_d: "दिन", ev_h: "घंटे", ev_m: "मिनट",
    ev1_title: "मानसून वस्त्र और भोजन वितरण", ev1_loc: "रायपुर रेलवे शेल्टर, छत्तीसगढ़",
    ev2_title: "20,000 बीज-बमबारी पर्यावरण मिशन", ev2_loc: "भिलाई वन क्षेत्र, छत्तीसगढ़",
    ev_btn_reg: "समन्वयक के रूप में पंजीकरण करें",
    
    g_title: "सामाजिक कार्यों की गैलरी",
    g_subtitle: "स्वयंसेवकों, शिक्षा केंद्रों और वृक्षारोपण अभियानों की वास्तविक तस्वीरें।",
    g1_title: "झुग्गी पोषण अभियान", g2_title: "डिजिटल साक्षरता सत्र",
    g3_title: "महिला स्वयं सहायता कार्यशाला", g4_title: "वृक्षारोपण अभियान",
    
    don_title: "दाता कमान केंद्र",
    don_subtitle: "अपने दान इतिहास, प्रमाणित कर-बचत प्रमाणपत्रों और प्रभाव रिपोर्ट तक पहुंचें।",
    don_lock_title: "सुरक्षित दान बहीखाता",
    don_lock_desc: "सिमुलेशन देखने के लिए अपना नाम दर्ज करें और तुरंत बहीखाता डैशबोर्ड खोलें।",
    don_btn_unlock: "बहीखाता खोलें",
    don_tier: "अग्रणी संरक्षक",
    don_btn_logout: "लॉगआउट",
    ledger_title: "सत्यापित दान का इतिहास",
    h_date: "तारीख", h_txn: "लेनदेन हैश", h_project: "परियोजना", h_amount: "राशि", h_status: "सीएसआर स्थिति", h_cert: "प्रमाणपत्र",
    ach_title: "सामाजिक उपलब्धियां",
    ac1_title: "सेवा रक्षक", ac1_desc: "50+ परिवारों को भोजन कराया",
    ac2_title: "प्रकृति पदक", ac2_desc: "10 पौधे लगाए",
    ac3_title: "साक्षरता समर्थक", ac3_desc: "5 टैबलेट्स का सहयोग दिया",
    ac4_title: "विशिष्ट दाता", ac4_desc: "शीर्ष 5% दानकर्ताओं में शामिल",
    
    con_title: "संपर्क केंद्र",
    con_subtitle: "इनअमिगोस फाउंडेशन के प्रशासनिक केंद्रों से सीधे संपर्क करें।",
    con_form_title: "पूछताछ फॉर्म",
    con_btn_submit: "सुरक्षित संदेश भेजें",
    ci_loc_title: "मुख्य कार्यालय का पता",
    ci_mail_title: "ईमेल पता",
    ci_phone_title: "हेल्पलाइन नंबर",
    
    bot_name: "ERA",
    bot_online: "ERA सक्रिय है",
    bot_hello: "नमस्कार! मैं ERA हूँ 🤖, आपकी स्मार्ट इनअमिगोस समन्वयक। मैं स्वयंसेवा, सीएसआर दान या अन्य सहायता में आपका मार्गदर्शन कैसे कर सकती हूँ?",
    s1: "सीएसआर प्रमाणन विवरण", s2: "सेवा केंद्रों की सूची", s3: "विकास इंटर्नशिप फॉर्म",
    
    m_m_title: "एआई स्वयंसेवक मैचिंग",
    m_m_desc: "अपने कौशल और समय की जानकारी भरें। हमारा एल्गोरिदम वर्गीकृत करके सबसे सही प्रोजेक्ट का सुझाव देगा।",
    m_m_s1: "अपना प्राथमिक कौशल चुनें",
    ms_teaching: "शैक्षणिक मार्गदर्शन और बच्चों को पढ़ाना",
    ms_cooking: "भोजन तैयार करना और वितरण रसद",
    ms_marketing: "डिजिटल प्रचार, ग्राफिक और लेखन कार्य",
    ms_animal: "पशु चिकित्सा और बचाव प्रबंधन",
    ms_horticulture: "वृक्षारोपण और बीज बमबारी",
    ms_finance: "सीएसआर संबंध, ऑडिटिंग और बहीखाता",
    m_m_s2: "आपके पास कितना समय है?",
    mv_wknd: "सप्ताहांत (शनिवार - रविवार)",
    mv_wkdy: "कार्यदिवस (सोमवार - शुक्रवार)",
    m_m_btn: "संरेखण की गणना करें",
    m_m_res_h: "एआई मिलान परिणाम",
    
    da_title: "स्मार्ट डोनेशन एडवाइजर",
    da_desc: "आपकी प्राथमिकताओं के आधार पर दान वितरण का सबसे सही खाका तैयार करता है।",
    da_label_amount: "दान की लक्ष्य राशि (INR)",
    da_label_focus: "रुचि का मुख्य क्षेत्र",
    df_balanced: "संतुलित वितरण (सभी परियोजनाओं में)",
    df_kids: "शिक्षा और डिजिटल साक्षरता (बचपनशाला)",
    df_hunger: "खाद्य सुरक्षा और आश्रय (सेवा)",
    df_green: "वृक्षारोपण और पर्यावरण (प्रकृति)",
    da_btn: "आवंटन पोर्टफोलियो बनाएं",
    da_res_h: "अनुशंसित दान आवंटन सूची",
    
    ip_title: "एआई प्रभाव सूचक",
    ip_desc: "दान की जाने वाली राशि से समाज में होने वाले बदलावों का सटीक हिसाब लगाएं।",
    ip_label_amount: "दान राशि दर्ज करें (INR)",
    ip_btn: "प्रभाव का आकलन करें",
    ip_res_h: "एआई प्रभाव रिपोर्ट",
    
    sg_title: "एआई सफलता कहानी निर्माता",
    sg_desc: "यह इंजन जमीनी रिपोर्ट और आकड़ों के आधार पर प्रेरक सफलता की कहानियां तैयार करता है।",
    sg_label_proj: "प्रोजेक्ट का चुनाव करें",
    sg_label_name: "लाभार्थी का नाम (वैकल्पिक)",
    sg_btn: "कहानी तैयार करें",
    sg_res_h: "तैयार की गई प्रेरक कहानी",
    
    gr_title: "एआई अनुदान खोजक",
    gr_desc: "एनजीओ परियोजनाओं का उपयुक्त सरकारी योजनाओं और सीएसआर अनुदानों से मिलान करें।",
    gr_label_domain: "एनजीओ कॉर्पोरेट सेक्टर स्कोप",
    gd_rural: "ग्रामीण अधिकारिता (महिलाएं एवं शिक्षा)",
    gd_health: "पोषण, भोजन वितरण और आपदा राहत",
    gd_tech: "डिजिटल साक्षरता और युवाओं के लिए तकनीकी प्रशिक्षण",
    gr_btn: "सीएसआर डेटाबेस में खोजें",
    gr_res_h: "उपयुक्त सीएसआर अनुदान विकल्प",
    
    bs_title: "एआई लाभार्थी सेवा केंद्र",
    bs_desc: "अपने पास के भोजन वितरण केंद्र, बचपनशाला स्कूल या सहायता केंद्रों की खोज करें।",
    bs_label_dist: "अपने जिले का चयन करें (छत्तीसगढ़)",
    bs_btn: "नजदीकी केंद्र खोजें",
    bs_res_h: "सक्रिय सहायता केंद्र उपलब्ध हैं",
    
    pa_title: "पूर्वानुमान अभियान विश्लेषण",
    pa_desc: "अगले 12 महीनों में संभावित सामाजिक प्रगति, दान और लगाए जाने वाले पौधों का सांख्यिकीय पूर्वानुमान।",
    pa_label_growth: "लक्ष्य वार्षिक वृद्धि दर",
    pa_btn: "पूर्वानुमान मॉडल चलाएं",
    pa_res_h: "संभावित विकास दर रिपोर्ट",
    
    cert_title: "प्रभाव प्रमाण पत्र",
    cert_sub: "नीति आयोग पंजीकृत • 80G अनुपालन",
    cert_ceo_sign: "गोविंद शुक्ला (सीईओ)",
    cert_verified: "CSR-1 सत्यापित",
    cert_btn_print: "प्रमाण पत्र प्रिंट करें"
  }
};

// Toggle logic between English and Hindi
function toggleLanguage(lang) {
  if (lang !== 'EN' && lang !== 'HI') return;
  currentLang = lang;
  
  // Highlight switch visual state
  document.getElementById('langEN').classList.toggle('active', lang === 'EN');
  document.getElementById('langHI').classList.toggle('active', lang === 'HI');
  
  // Scan DOM and perform swaps
  const elementsToTranslate = document.querySelectorAll('[data-translate]');
  elementsToTranslate.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
        el.setAttribute('placeholder', translations[lang][key]);
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });
}

function toggleLanguageManual() {
  const nextLang = currentLang === 'EN' ? 'HI' : 'EN';
  toggleLanguage(nextLang);
}

// ==========================================
// THEME SWITCHER LOGIC (LIGHT / DARK MODE)
// ==========================================
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
  updateThemeTogglerIcon(savedTheme);
}

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-theme');
  const activeTheme = isDark ? 'dark' : 'light';
  localStorage.setItem('theme', activeTheme);
  updateThemeTogglerIcon(activeTheme);
}

function updateThemeTogglerIcon(theme) {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;
  
  if (theme === 'dark') {
    // Sun icon for dark mode (to switch back to light)
    toggleBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
  } else {
    // Moon icon for light mode (to switch to dark)
    toggleBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
  }
}

// ==========================================
// SCROLL TRIGGERS & NAV STYLES
// ==========================================
window.addEventListener('scroll', () => {
  const header = document.getElementById('mainHeader');
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Hamburger menu control
const hamburger = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  });
}

// Auto closes mobile menu
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(link => link.classList.remove('active'));
    item.classList.add('active');
    navLinks.classList.remove('active');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Smooth scroll routing
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

// ==========================================
// COUNTER TRIGGER EFFECTS (INTERSECTION OBSERVER)
// ==========================================
const startCounter = (el) => {
  const targetVal = parseInt(el.getAttribute('data-target'), 10);
  let count = 0;
  const speed = 100;
  const increment = Math.ceil(targetVal / speed);
  
  const timer = setInterval(() => {
    count += increment;
    if (count >= targetVal) {
      el.innerText = targetVal.toLocaleString() + "+";
      clearInterval(timer);
    } else {
      el.innerText = count.toLocaleString() + "+";
    }
  }, 20);
};

const observerOptions = {
  root: null,
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.count-up').forEach(counter => {
  observer.observe(counter);
});

// ==========================================
// DYNAMIC LIVE TICKER FEED (HERO VISUAL CONSOLE)
// ==========================================
const liveOperations = [
  { icon: "🍱", title: "Project Seva Dispatch", desc: "Meals and clothes successfully routed to Bilaspur shelter centers." },
  { icon: "📖", title: "Digital Tablets Deployed", desc: "Project Bachpanshala deployed digital tools to Durg tribal school kids." },
  { icon: "🤝", title: "Volunteer Matched", desc: "Skills matcher placed 8 technical supervisors in active Chhattisgarh nodes." },
  { icon: "🌱", title: "Environmental Green Mission", desc: "Urban plantation seed bombing calculated for Durg forest periphery." },
  { icon: "🐾", title: "Project Jeev Action", desc: "First-aid medical responders assigned to animal rescue coordinate, Raipur." },
  { icon: "👩", title: "Women Guild Handicrafts", desc: "Udaan self-help guild handicraft ledger linked to Raipur wholesale merchants." }
];

let feedIndex = 0;
const liveConsoleFeed = document.getElementById('liveConsoleFeed');

function pushLiveConsoleFeed() {
  if (!liveConsoleFeed) return;
  const currentFeed = liveOperations[feedIndex];
  
  const feedElement = document.createElement('div');
  feedElement.className = 'feed-item';
  feedElement.style.opacity = '0';
  feedElement.style.transform = 'translateY(12px)';
  feedElement.style.transition = 'all 0.4s ease-out';
  
  feedElement.innerHTML = `
    <div class="feed-icon">${currentFeed.icon}</div>
    <div class="feed-info">
      <h4>${currentFeed.title}</h4>
      <p>${currentFeed.desc}</p>
    </div>
  `;
  
  if (liveConsoleFeed.children.length >= 3) {
    const lastItem = liveConsoleFeed.lastElementChild;
    lastItem.style.opacity = '0';
    lastItem.style.transform = 'translateY(-12px)';
    setTimeout(() => lastItem.remove(), 350);
  }
  
  liveConsoleFeed.prepend(feedElement);
  
  setTimeout(() => {
    feedElement.style.opacity = '1';
    feedElement.style.transform = 'translateY(0)';
  }, 40);

  feedIndex = (feedIndex + 1) % liveOperations.length;
}

// ==========================================
// TESTIMONIALS SLIDER REGISTRY & ACTIONS
// ==========================================
const testimonies = [
  {
    icon: "👩",
    name: "Shreya Mandavi",
    role: "Project Udaan Beneficiary - Bastar Self Help Guild",
    roleHI: "प्रोजेक्ट उड़ान लाभार्थी - बस्तर स्वयं सहायता समूह",
    quote: "Being part of the InAmigos sewing guild helped me establish a stable monthly salary. The local success stories finder shared my products, linking me directly to wholesale merchants in Raipur.",
    quoteHI: "इनअमिगोस समूह से जुड़ने के बाद मुझे नियमित आय का साधन मिला। स्थानीय सफलता कहानी खोजक ने मेरे उत्पादों को साझा किया, जिससे मैं सीधे रायपुर के व्यापारियों से जुड़ गई।"
  },
  {
    icon: "👨",
    name: "Faiz Khan",
    role: "Volunteer Supervisor - Uttar Pradesh Center",
    roleHI: "स्वयंसेवक समन्वयक - उत्तर प्रदेश केंद्र",
    quote: "Coordinating humanitarian relief and education drives is deeply satisfying. The InAmigos volunteer matcher recommended this based on my social service background.",
    quoteHI: "मानवीय राहत और शिक्षा अभियानों का समन्वय करना गहरा संतोष देता है। इनअमिगोस स्वयंसेवक मिलानकर्ता ने मेरे सामाजिक सेवा पृष्ठभूमि के आधार पर इसकी सिफारिश की थी।"
  },
  {
    icon: "👩",
    name: "Manavi Jaiswal",
    role: "Junior Volunteer Associate - Chhattisgarh",
    roleHI: "कनिष्ठ स्वयंसेवक सहयोगी - छत्तीसगढ़",
    quote: "Managing ground drives used to take days of checks. Now, the resource allocation grids automate logistics routing in real time, making our relief dispatches highly optimized.",
    quoteHI: "जमीनी अभियानों का प्रबंधन करने में पहले दिनों का समय लगता था। अब, संसाधन आवंटन ग्रिड वास्तविक समय में रसद मार्गों को स्वचालित करते हैं, जिससे हमारे राहत कार्य बेहद आसान हो जाते हैं।"
  }
];

function switchStorySlide(index) {
  const container = document.getElementById('storyCarouselContent');
  const dots = document.getElementById('carouselDots').children;
  if (!container) return;

  for (let i = 0; i < dots.length; i++) {
    dots[i].style.background = i === index ? 'var(--primary)' : 'rgba(0, 204, 131, 0.15)';
  }

  container.style.opacity = '0';
  container.style.transform = 'translateY(8px)';
  container.style.transition = 'all 0.3s ease';

  setTimeout(() => {
    const item = testimonies[index];
    container.innerHTML = `
      <div class="story-slide active">
        <div style="display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1.5rem;">
          <div style="width: 64px; height: 64px; border-radius: 50%; font-size: 2.25rem; display: flex; align-items: center; justify-content: center; background: rgba(0, 204, 131, 0.08);">${item.icon}</div>
          <div>
            <h4 style="font-size: 1.25rem; font-weight: 700;">${item.name}</h4>
            <p style="font-size: 0.8rem; color: var(--primary);">${currentLang === 'EN' ? item.role : item.roleHI}</p>
          </div>
        </div>
        <p style="font-style: italic; font-size: 1.05rem; line-height: 1.7; color: var(--text-secondary);">
          "${currentLang === 'EN' ? item.quote : item.quoteHI}"
        </p>
      </div>
    `;
    container.style.opacity = '1';
    container.style.transform = 'translateY(0)';
  }, 300);
}

// ==========================================
// CAMPAIGN COUNTDOWN TIMER
// ==========================================
function updateCountdownClocks() {
  const elements = document.querySelectorAll('.event-countdown');
  elements.forEach(el => {
    const endTimeStr = el.getAttribute('data-endtime');
    const endTime = new Date(endTimeStr).getTime();
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance < 0) {
      el.innerHTML = `<span style="color:var(--primary); font-weight:700;">CAMPAIGN ACTIVE</span>`;
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    el.querySelector('.days').innerText = String(days).padStart(2, '0');
    el.querySelector('.hours').innerText = String(hours).padStart(2, '0');
    el.querySelector('.mins').innerText = String(minutes).padStart(2, '0');
  });
}

// Quick coordinative action response
function triggerEventReg(eventName) {
  const name = localStorage.getItem('donorSessionName') || 'Guest Candidate';
  alert(currentLang === 'EN' 
    ? `Registering ${name} for ${eventName}. Ground coordination schedules will email shortly!`
    : `${name} को ${eventName} के लिए पंजीकृत किया जा रहा है। समन्वयक विवरण जल्द ही ईमेल पर भेजा जाएगा!`
  );
}

// DOM Init Bootstrap
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  
  // Theme switcher bind
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }
  
  pushLiveConsoleFeed();
  setInterval(pushLiveConsoleFeed, 5000);
  
  document.getElementById('langSwitcher').addEventListener('click', toggleLanguageManual);
  updateCountdownClocks();
  setInterval(updateCountdownClocks, 1000);
});

// ==========================================
// MODALS ROUTER OVERLAYS
// ==========================================
function openAIModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('active');
  }
}

function closeAIModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('active');
  }
}

// Window clicks close active modal overlays
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
  }
});

// Helper for quick volunteer submissions
function handleVolunteerReg(e) {
  e.preventDefault();
  const name = document.getElementById('volName').value;
  const feedback = document.getElementById('volFeedback');
  
  feedback.innerText = currentLang === 'EN' ? `Registering ${name} in volunteer database...` : `${name} का पंजीकरण संसाधित हो रहा है...`;
  
  setTimeout(() => {
    feedback.innerText = currentLang === 'EN' ? `✔ Verified! ${name} successfully placed in active volunteer queue.` : `✔ सत्यापित! ${name} को सक्रिय स्वयंसेवक समूह में सफलतापूर्वक जोड़ दिया गया है।`;
    document.getElementById('volunteerForm').reset();
  }, 1500);
}

// Direct inquiry submissions
function handleContactSubmit(e) {
  e.preventDefault();
  const feedback = document.getElementById('contactFeedback');
  feedback.innerText = currentLang === 'EN' ? "Sending inquiry to Administrative Central..." : "जांच संदेश प्रशासनिक केंद्र भेजा जा रहा है...";
  
  setTimeout(() => {
    feedback.innerText = currentLang === 'EN' ? "✔ Sent! Administrative center will resolve shortly." : "✔ संदेश भेज दिया गया है! प्रशासनिक केंद्र जल्द ही संपर्क करेगा।";
    document.getElementById('contactForm').reset();
  }, 1500);
}
