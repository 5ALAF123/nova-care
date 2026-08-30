export type Department = {
  slug: string;
  name: string;
  short: string;
  icon: string;
  description: string;
  longDescription: string;
  conditions: string[];
  treatments: string[];
  image: string;
};

export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  departmentSlug: string;
  experience: number;
  rating: number;
  reviews: number;
  languages: string[];
  education: string[];
  expertise: string[];
  bio: string;
  fee: number;
  image: string;
  available: boolean;
  location: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  content: string;
};

export const departments: Department[] = [
  {
    slug: "cardiology",
    name: "Cardiology",
    short: "Heart & Vascular Care",
    icon: "Heart",
    description: "Comprehensive heart care from prevention to advanced intervention.",
    longDescription:
      "The Cardiology Department at Nova Care provides world-class cardiovascular care, combining advanced diagnostics, interventional expertise, and personalized prevention plans. Our team manages everything from hypertension and arrhythmias to complex coronary disease.",
    conditions: ["Coronary artery disease", "Arrhythmia & atrial fibrillation", "Heart failure", "Hypertension", "Valvular heart disease", "Congenital heart conditions"],
    treatments: ["Echocardiography & Stress Testing", "Cardiac CT & MRI", "Angioplasty & Stenting", "Electrophysiology Study", "Heart Failure Clinic", "Preventive Cardiology"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800",
  },
  {
    slug: "neurology",
    name: "Neurology",
    short: "Brain & Nervous System",
    icon: "Brain",
    description: "Expert care for neurological disorders with cutting-edge diagnostics.",
    longDescription:
      "Our Neurology team offers comprehensive evaluation and treatment for disorders of the brain, spine, and nervous system, supported by advanced neuroimaging and neurophysiology.",
    conditions: ["Migraine & Headache", "Epilepsy", "Stroke & TIA", "Parkinson's Disease", "Multiple Sclerosis", "Neuropathy"],
    treatments: ["EEG & EMG", "Stroke Unit Care", "Botulinum Therapy", "Memory Clinic", "Neuro-Rehabilitation", "Headache Program"],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800",
  },
  {
    slug: "pediatrics",
    name: "Pediatrics",
    short: "Children's Health",
    icon: "Baby",
    description: "Compassionate, family-centered care for infants to adolescents.",
    longDescription:
      "Nova Care Pediatrics provides nurturing, evidence-based care for children of all ages, with dedicated pediatric specialists and a child-friendly environment.",
    conditions: ["Well-child & Vaccinations", "Asthma & Allergies", "Developmental Concerns", "Infectious Diseases", "Growth & Nutrition", "Adolescent Health"],
    treatments: ["Newborn Care", "Pediatric Allergy Testing", "Developmental Screening", "Nutrition Counseling", "School Health", "Teen Clinic"],
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800",
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
    short: "Bones, Joints & Spine",
    icon: "Bone",
    description: "Restoring mobility through surgical and non-surgical orthopedic care.",
    longDescription:
      "From sports injuries to joint replacement, our Orthopedic Center combines surgical excellence with comprehensive rehabilitation to help you move without pain.",
    conditions: ["Arthritis", "Sports Injuries", "Spine Disorders", "Fractures", "Joint Pain", "Osteoporosis"],
    treatments: ["Arthroscopy", "Joint Replacement", "Spine Surgery", "Sports Medicine", "Fracture Care", "Physiotherapy"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    short: "Skin, Hair & Nails",
    icon: "Sparkles",
    description: "Medical and cosmetic dermatology for healthy, radiant skin.",
    longDescription:
      "Our Dermatologists diagnose and treat a wide range of skin conditions, blending clinical dermatology with aesthetic expertise in a discreet, premium setting.",
    conditions: ["Acne & Rosacea", "Eczema & Psoriasis", "Skin Infections", "Hair Loss", "Mole Evaluation", "Allergic Skin Reactions"],
    treatments: ["Dermoscopy", "Allergy Patch Testing", "Acne Management", "Laser Therapy", "Skin Biopsy", "Cosmetic Consults"],
    image: "https://images.unsplash.com/photo-1551601651-2a8555a10456?q=80&w=800",
  },
  {
    slug: "ophthalmology",
    name: "Ophthalmology",
    short: "Eye Care & Vision",
    icon: "Eye",
    description: "Advanced eye care to protect and restore your vision.",
    longDescription:
      "Comprehensive ophthalmic services including cataract, glaucoma, retina and pediatric eye care, supported by high-precision diagnostics.",
    conditions: ["Cataract", "Glaucoma", "Diabetic Retinopathy", "Dry Eye", "Refractive Errors", "Pediatric Eye Disorders"],
    treatments: ["OCT & Visual Field", "Cataract Surgery", "Glaucoma Management", "Retina Clinic", "Contact Lens Service", "Laser Vision Assessment"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800",
  },
  {
    slug: "dentistry",
    name: "Dentistry",
    short: "Dental & Oral Health",
    icon: "Smile",
    description: "Complete dental care with a focus on comfort and aesthetics.",
    longDescription:
      "From preventive dentistry to smile makeovers, our Dental Center offers gentle, modern care with digital imaging and same-day solutions.",
    conditions: ["Tooth Decay", "Gum Disease", "Tooth Sensitivity", "Misalignment", "Oral Infections", "Jaw Pain"],
    treatments: ["Digital X-Rays", "Teeth Cleaning", "Fillings & Crowns", "Orthodontics", "Whitening", "Implant Consultation"],
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=800",
  },
  {
    slug: "general-medicine",
    name: "General Medicine",
    short: "Primary & Internal Medicine",
    icon: "Stethoscope",
    description: "Your first point of contact for comprehensive adult healthcare.",
    longDescription:
      "Internal Medicine provides continuous, coordinated care for prevention, diagnosis, and management of adult health conditions.",
    conditions: ["Diabetes", "Hypertension", "Thyroid Disorders", "Infections", "Anemia", "Preventive Screenings"],
    treatments: ["Annual Health Checks", "Chronic Disease Management", "Vaccinations", "Lifestyle Counseling", "Lab Coordination", "Referral Network"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800",
  },
  {
    slug: "gynecology",
    name: "Gynecology",
    short: "Women's Health",
    icon: "HeartHandshake",
    description: "Dedicated care for every stage of a woman's life.",
    longDescription:
      "Comprehensive women's health services from adolescence to menopause, delivered with privacy, empathy, and clinical excellence.",
    conditions: ["Menstrual Disorders", "PCOS", "Pregnancy Care", "Menopause", "Infections", "Fertility Concerns"],
    treatments: ["Well-Woman Exams", "Prenatal Clinic", "Ultrasound", "Family Planning", "Menopause Management", "Minimally Invasive Procedures"],
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800",
  },
  {
    slug: "ent",
    name: "ENT",
    short: "Ear, Nose & Throat",
    icon: "Ear",
    description: "Specialized care for ENT disorders and hearing health.",
    longDescription:
      "Our ENT specialists treat conditions of the ear, nose, throat, head and neck, with audiology and allergy support.",
    conditions: ["Sinusitis", "Hearing Loss", "Tonsillitis", "Allergic Rhinitis", "Vertigo", "Voice Disorders"],
    treatments: ["Audiometry", "Nasal Endoscopy", "Allergy Testing", "Vertigo Clinic", "Sleep Apnea Assessment", "Minor ENT Procedures"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800",
  },
  {
    slug: "radiology",
    name: "Radiology",
    short: "Imaging & Diagnostics",
    icon: "Scan",
    description: "High-precision imaging for accurate, early diagnosis.",
    longDescription:
      "State-of-the-art imaging including MRI, CT, Ultrasound, and X-ray with rapid reporting and expert radiologists.",
    conditions: ["Diagnostic Imaging", "Cancer Screening", "Musculoskeletal Imaging", "Vascular Imaging", "Women's Imaging", "Pediatric Imaging"],
    treatments: ["3T MRI", "Low-dose CT", "Ultrasound & Doppler", "Digital X-Ray", "Mammography", "Interventional Radiology"],
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800",
  },
  {
    slug: "emergency-medicine",
    name: "Emergency Medicine",
    short: "24/7 Emergency & Trauma",
    icon: "Siren",
    description: "Immediate, life-saving care when every second counts.",
    longDescription:
      "Our Emergency Department is staffed 24/7 by emergency physicians, trauma surgeons, and critical care nurses with rapid triage and resuscitation capabilities.",
    conditions: ["Chest Pain", "Stroke Symptoms", "Trauma & Fractures", "Breathing Difficulty", "Severe Infections", "Allergic Reactions"],
    treatments: ["24/7 Triage", "Resuscitation Bay", "Trauma Team", "Poison Control", "Emergency Imaging", "Observation Unit"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800",
  },
];

export const doctors: Doctor[] = [
  {
    id: "sarah-mitchell",
    name: "Dr. Sarah Mitchell",
    specialty: "Cardiology",
    departmentSlug: "cardiology",
    experience: 15,
    rating: 4.9,
    reviews: 312,
    languages: ["English", "French"],
    education: ["MD, Johns Hopkins University", "Fellowship, Mayo Clinic"],
    expertise: ["Interventional Cardiology", "Heart Failure", "Preventive Cardiology"],
    bio: "Dr. Sarah Mitchell is a board-certified cardiologist with 15 years of experience in interventional cardiology. She has led over 2,000 cardiac procedures and is passionate about women's heart health.",
    fee: 180,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400",
    available: true,
    location: "Nova Care Main Campus, Floor 3",
  },
  {
    id: "daniel-carter",
    name: "Dr. Daniel Carter",
    specialty: "Neurology",
    departmentSlug: "neurology",
    experience: 18,
    rating: 4.9,
    reviews: 278,
    languages: ["English", "German"],
    education: ["MD, Harvard Medical School", "Residency, Mass General"],
    expertise: ["Stroke", "Epilepsy", "Movement Disorders"],
    bio: "Dr. Daniel Carter is a leading neurologist specializing in stroke and epilepsy. His research on neuroprotection has been published in top journals.",
    fee: 200,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400",
    available: true,
    location: "Nova Care Neuro Center, Floor 2",
  },
  {
    id: "emily-anderson",
    name: "Dr. Emily Anderson",
    specialty: "Pediatrics",
    departmentSlug: "pediatrics",
    experience: 12,
    rating: 4.95,
    reviews: 410,
    languages: ["English", "Spanish"],
    education: ["MD, Stanford University", "Pediatrics Residency, Children's Hospital"],
    expertise: ["Neonatology", "Developmental Pediatrics", "Allergy"],
    bio: "Dr. Emily Anderson brings warmth and expertise to pediatric care. Parents trust her for thorough, gentle consultations and clear guidance.",
    fee: 150,
    image: "https://images.unsplash.com/photo-1594824475545-9d84e24786e3?q=80&w=400",
    available: true,
    location: "Nova Care Children's Wing, Floor 1",
  },
  {
    id: "james-wilson",
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    departmentSlug: "orthopedics",
    experience: 20,
    rating: 4.85,
    reviews: 356,
    languages: ["English"],
    education: ["MD, Columbia University", "Fellowship, Hospital for Special Surgery"],
    expertise: ["Joint Replacement", "Sports Medicine", "Spine Surgery"],
    bio: "Dr. James Wilson is an orthopedic surgeon renowned for minimally invasive joint replacement and arthroscopic procedures.",
    fee: 220,
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=400",
    available: false,
    location: "Nova Care Ortho Center, Floor 4",
  },
  {
    id: "olivia-bennett",
    name: "Dr. Olivia Bennett",
    specialty: "Dermatology",
    departmentSlug: "dermatology",
    experience: 10,
    rating: 4.88,
    reviews: 245,
    languages: ["English", "Italian"],
    education: ["MD, UCSF", "Dermatology Residency, NYU"],
    expertise: ["Cosmetic Dermatology", "Psoriasis", "Pediatric Dermatology"],
    bio: "Dr. Olivia Bennett combines medical dermatology with aesthetic artistry, helping patients achieve healthy, confident skin.",
    fee: 160,
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=400",
    available: true,
    location: "Nova Care Derma Suite, Floor 2",
  },
  {
    id: "michael-thompson",
    name: "Dr. Michael Thompson",
    specialty: "General Medicine",
    departmentSlug: "general-medicine",
    experience: 14,
    rating: 4.82,
    reviews: 298,
    languages: ["English", "Hindi"],
    education: ["MD, University of Toronto", "Internal Medicine, Cleveland Clinic"],
    expertise: ["Diabetes", "Hypertension", "Preventive Care"],
    bio: "Dr. Michael Thompson is your trusted primary care physician, focused on long-term wellness and chronic disease prevention.",
    fee: 140,
    image: "https://images.unsplash.com/photo-1537368910025-70035079f3d5?q=80&w=400",
    available: true,
    location: "Nova Care Primary Care, Floor 1",
  },
  {
    id: "sofia-reyes",
    name: "Dr. Sofia Reyes",
    specialty: "Gynecology",
    departmentSlug: "gynecology",
    experience: 16,
    rating: 4.92,
    reviews: 332,
    languages: ["English", "Spanish"],
    education: ["MD, University of Barcelona", "OB-GYN Residency, Brigham & Women's"],
    expertise: ["Prenatal Care", "Minimally Invasive Surgery", "Menopause"],
    bio: "Dr. Sofia Reyes provides compassionate women's health care across all life stages, with expertise in minimally invasive gynecologic surgery.",
    fee: 175,
    image: "https://images.unsplash.com/photo-1559832303-121b66ed0b42?q=80&w=400",
    available: true,
    location: "Nova Care Women's Health, Floor 3",
  },
  {
    id: "ethan-kim",
    name: "Dr. Ethan Kim",
    specialty: "Ophthalmology",
    departmentSlug: "ophthalmology",
    experience: 13,
    rating: 4.86,
    reviews: 189,
    languages: ["English", "Korean"],
    education: ["MD, Seoul National University", "Ophthalmology, Bascom Palmer"],
    expertise: ["Cataract Surgery", "Retina", "Glaucoma"],
    bio: "Dr. Ethan Kim is an ophthalmic surgeon specializing in cataract and retinal disorders, using the latest laser technologies.",
    fee: 170,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400",
    available: true,
    location: "Nova Care Eye Center, Floor 2",
  },
  {
    id: "priya-nair",
    name: "Dr. Priya Nair",
    specialty: "Dentistry",
    departmentSlug: "dentistry",
    experience: 9,
    rating: 4.9,
    reviews: 210,
    languages: ["English", "Malayalam"],
    education: ["DDS, NYU College of Dentistry", "Aesthetic Dentistry Fellowship"],
    expertise: ["Cosmetic Dentistry", "Orthodontics", "Implants"],
    bio: "Dr. Priya Nair creates confident smiles with a gentle approach to cosmetic and restorative dentistry.",
    fee: 130,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=400",
    available: true,
    location: "Nova Care Dental Studio, Floor 1",
  },
  {
    id: "omar-hassan",
    name: "Dr. Omar Hassan",
    specialty: "ENT",
    departmentSlug: "ent",
    experience: 11,
    rating: 4.84,
    reviews: 176,
    languages: ["English", "Arabic"],
    education: ["MD, Cairo University", "ENT Residency, Johns Hopkins"],
    expertise: ["Rhinology", "Hearing Restoration", "Pediatric ENT"],
    bio: "Dr. Omar Hassan specializes in nasal and sinus disorders and advanced hearing solutions.",
    fee: 155,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400",
    available: false,
    location: "Nova Care ENT Clinic, Floor 2",
  },
  {
    id: "lucas-martin",
    name: "Dr. Lucas Martin",
    specialty: "Radiology",
    departmentSlug: "radiology",
    experience: 17,
    rating: 4.87,
    reviews: 201,
    languages: ["English", "French"],
    education: ["MD, McGill University", "Radiology, Stanford"],
    expertise: ["MRI", "Interventional Radiology", "Oncologic Imaging"],
    bio: "Dr. Lucas Martin leads our imaging team, ensuring rapid, accurate diagnostics with subspecialty expertise.",
    fee: 190,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400",
    available: true,
    location: "Nova Care Imaging, Floor B1",
  },
  {
    id: "ava-rodriguez",
    name: "Dr. Ava Rodriguez",
    specialty: "Emergency Medicine",
    departmentSlug: "emergency-medicine",
    experience: 13,
    rating: 4.91,
    reviews: 287,
    languages: ["English", "Spanish"],
    education: ["MD, University of Miami", "Emergency Medicine, Jackson Memorial"],
    expertise: ["Trauma", "Critical Care", "Toxicology"],
    bio: "Dr. Ava Rodriguez directs our Emergency Department, bringing calm expertise to high-pressure situations 24/7.",
    fee: 0,
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=400",
    available: true,
    location: "Nova Care Emergency, Ground Floor",
  },
];

export const services: Service[] = [
  { title: "Emergency Care", description: "24/7 emergency and trauma care with rapid triage and critical care support.", icon: "Siren" },
  { title: "Diagnostic Imaging", description: "3T MRI, CT, ultrasound and digital X-ray with same-day reporting.", icon: "Scan" },
  { title: "Laboratory Services", description: "Comprehensive labs with automated processing and home sample collection.", icon: "FlaskConical" },
  { title: "Surgery", description: "Minimally invasive and robotic-assisted surgeries across specialties.", icon: "HeartPulse" },
  { title: "Preventive Care", description: "Annual checkups, vaccinations and personalized wellness programs.", icon: "ShieldCheck" },
  { title: "Physical Therapy", description: "Rehabilitation for orthopedic, neuro and post-surgical recovery.", icon: "Activity" },
  { title: "Pharmacy", description: "In-house pharmacy with 24/7 dispensing and medication counseling.", icon: "Pill" },
  { title: "Telemedicine", description: "Video consultations with specialists from the comfort of your home.", icon: "Video" },
];

export const testimonials = [
  { name: "Jennifer Walsh", role: "Cardiology Patient", rating: 5, text: "Dr. Mitchell and the cardiology team were exceptional. They explained every step and made me feel safe. My recovery was smooth and well-coordinated.", avatar: "JW" },
  { name: "Robert Chen", role: "Orthopedics Patient", rating: 5, text: "After my knee replacement with Dr. Wilson, I am walking pain-free. The physiotherapy team is world-class.", avatar: "RC" },
  { name: "Amelia Scott", role: "Mother of Pediatric Patient", rating: 5, text: "Dr. Anderson is wonderful with children. She was patient, thorough, and our daughter actually looks forward to visits.", avatar: "AS" },
  { name: "David Park", role: "Neurology Patient", rating: 5, text: "From diagnosis to treatment, Nova Care Neurology gave me clarity and confidence. Highly professional and human.", avatar: "DP" },
  { name: "Sophia Lee", role: "Dermatology Patient", rating: 5, text: "The dermatology suite feels like a premium spa, but with serious medical expertise. Results exceeded expectations.", avatar: "SL" },
  { name: "Mark Thompson", role: "General Medicine Patient", rating: 4, text: "Easy booking, minimal wait, and Dr. Thompson actually listens. Best primary care experience I've had.", avatar: "MT" },
];

export const faqs = [
  { q: "How do I book an appointment?", a: "You can book online via our appointment portal, call +1 (800) 555-0199, or visit our front desk. Online booking lets you choose department, doctor, date and time instantly." },
  { q: "What should I bring to my appointment?", a: "Please bring a valid ID, insurance card, previous medical reports, current medication list, and any referral letters. For first visits, arrive 15 minutes early." },
  { q: "Can I reschedule or cancel my appointment?", a: "Yes, you can reschedule or cancel up to 24 hours before your appointment through your confirmation email or by calling us. No fee for timely changes." },
  { q: "Is emergency care available 24/7?", a: "Absolutely. Our Emergency Department is open 24 hours, 7 days a week, with emergency physicians, trauma surgeons and critical care support." },
  { q: "How can I find the right specialist?", a: "Use our Find a Doctor tool to filter by specialty, experience, languages and availability, or call our helpdesk for personalized guidance." },
  { q: "Do you accept insurance?", a: "We work with most major insurance providers. Please contact our billing team at +1 (800) 555-0142 to confirm coverage before your visit." },
  { q: "Are telemedicine consultations available?", a: "Yes, many departments offer secure video consultations. Look for the Telemedicine badge when booking or ask our team." },
  { q: "How do I get my test reports?", a: "Reports are available via our patient portal within 24 hours. You will receive an SMS and email notification when ready." },
];

export const articles: Article[] = [
  {
    slug: "5-ways-support-healthy-heart",
    title: "5 Simple Ways to Support a Healthy Heart",
    excerpt: "Evidence-based daily habits that strengthen your cardiovascular system without overhauling your life.",
    category: "Heart Health",
    readTime: "5 min read",
    date: "Aug 12, 2026",
    author: "Dr. Sarah Mitchell",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800",
    content: `
## Why heart health is a daily practice

Your heart beats about 100,000 times a day. Small, consistent choices compound over years. Here are five cardiologist-approved habits that fit into a busy life.

### 1. Move for 30 minutes
Brisk walking, cycling or swimming at moderate intensity helps lower blood pressure and improves cholesterol. Break it into three 10-minute walks if needed.

### 2. Eat more plants, less added salt
Aim for half your plate from vegetables and whole foods. Choose nuts, olive oil and fatty fish. Watch sodium in packaged foods.

### 3. Track your numbers
Know your blood pressure, LDL, and fasting glucose. Annual checkups catch risk early, when lifestyle changes work best.

### 4. Prioritize sleep
Seven to nine hours of sleep supports heart rhythm and recovery. Keep a consistent wind-down routine.

### 5. Manage stress
Breathing exercises, walks in nature, and social connection lower cortisol and support vascular health.

> This article is for general information only and should not be considered personalized medical advice. Speak to your clinician about what's right for you.

If you have chest discomfort, shortness of breath, or fainting, seek urgent care.
    `,
  },
  {
    slug: "when-schedule-routine-checkup",
    title: "When Should You Schedule a Routine Checkup?",
    excerpt: "How often do you really need screening? A clear guide by age and risk factors.",
    category: "Preventive Care",
    readTime: "6 min read",
    date: "Jul 28, 2026",
    author: "Dr. Michael Thompson",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800",
    content: `
## The right cadence for checkups

Routine visits are not just for when you feel unwell. They are your best tool for prevention.

### Every year if you are 40+
Annual physicals, blood pressure, lipids, diabetes screening, and cancer screenings as recommended.

### Every 2 years if you are healthy and under 40
Even if you feel well, a biennial check can catch hypertension or thyroid issues early.

### Sooner if you have risk factors
Family history, smoking, high BMI, or chronic stress may mean more frequent visits.

Book a preventive visit at Nova Care and get a personalized screening calendar.
    `,
  },
  {
    slug: "understanding-preventive-screenings",
    title: "Understanding Preventive Health Screenings",
    excerpt: "A plain-language guide to the tests your doctor may recommend and why they matter.",
    category: "Preventive Care",
    readTime: "7 min read",
    date: "Jul 15, 2026",
    author: "Dr. Ava Rodriguez",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800",
    content: `
## Screening is about catching risk early

Screenings look for disease before symptoms appear, when treatment is simplest.

- **Blood pressure & lipids:** Yearly after 18.
- **Diabetes:** Every 3 years after 45, earlier with risk.
- **Colorectal:** From 45.
- **Cervical & Breast:** Per guidelines and family history.

Nova Care offers bundled preventive packages with same-day labs and imaging.
    `,
  },
  {
    slug: "nutrition-for-busy-families",
    title: "Nutrition Made Simple for Busy Families",
    excerpt: "Practical, pantry-friendly ideas to eat healthier without extra stress.",
    category: "Nutrition",
    readTime: "4 min read",
    date: "Jun 30, 2026",
    author: "Nova Care Nutrition Team",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800",
    content: `Healthy eating does not require perfection. Stock versatile bases like whole grains, beans, frozen vegetables, and canned fish. Cook twice, eat three times. Involve kids in choosing produce.`,
  },
  {
    slug: "mental-wellness-sleep-hygiene",
    title: "Mental Wellness: The Power of Sleep Hygiene",
    excerpt: "How consistent sleep routines improve mood, focus and immunity.",
    category: "Mental Wellness",
    readTime: "5 min read",
    date: "Jun 18, 2026",
    author: "Dr. Daniel Carter",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800",
    content: `Keep screens out of the bedroom, dim lights after 9pm, and anchor your wake time. A 20-minute wind-down with reading or breathing can reset your sleep drive.`,
  },
  {
    slug: "womens-health-after-40",
    title: "Women's Health After 40: What to Know",
    excerpt: "Conversations about perimenopause, bone health and preventive screenings.",
    category: "Women's Health",
    readTime: "6 min read",
    date: "Jun 05, 2026",
    author: "Dr. Sofia Reyes",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800",
    content: `Bone density, cardiovascular risk and hormonal changes evolve after 40. Regular gynecologic visits, strength training, and calcium/vitamin D support long-term wellness.`,
  },
  {
    slug: "childrens-health-healthy-habits",
    title: "Building Healthy Habits in Children",
    excerpt: "Gentle, evidence-based ways to encourage active play and balanced meals.",
    category: "Children's Health",
    readTime: "4 min read",
    date: "May 22, 2026",
    author: "Dr. Emily Anderson",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800",
    content: `Model the behavior you want to see. Make water the default drink, offer variety without pressure, and prioritize outdoor play. Limit recreational screen time and keep bedtimes consistent.`,
  },
];
