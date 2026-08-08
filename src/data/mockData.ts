import { Course, Trainer, Testimonial, UpcomingBatch, GalleryItem, BlogPost, FAQItem, AusbildungProgram } from '../types';

export const COURSES: Course[] = [
  {
    id: 'a1-grundstufe',
    level: 'A1',
    title: 'A1 Beginner German',
    germanTitle: 'A1 Grundstufe - Start Deutsch 1',
    shortDesc: 'Build your initial foundation in German vocabulary, everyday conversations, and essential grammar.',
    fullDesc: 'The A1 German course is designed for absolute beginners with no prior knowledge of German. You will master basic greetings, self-introductions, ordering food, shopping, asking for directions, and forming fundamental sentences.',
    durationHours: 80,
    durationWeeks: 8,
    priceEUR: 349,
    priceLocal: '€349 / ₹28,500',
    recommendedFor: 'Complete beginners, prospective students, and job seekers aiming for Goethe-Zertifikat A1.',
    outcomes: [
      'Understand and use familiar everyday expressions and basic phrases',
      'Introduce yourself and ask others about personal details',
      'Interact in a simple way provided the other person speaks slowly and clearly',
      'Pass the official Goethe-Zertifikat A1: Start Deutsch 1 exam with confidence'
    ],
    syllabusModules: [
      { moduleNumber: 1, title: 'Alphabet, Pronunciation & Greetings', topics: ['German Phonetics', 'Greetings & Courtesies', 'Numbers 1-100', 'Basic Nouns & Articles'] },
      { moduleNumber: 2, title: 'Daily Routine & Family', topics: ['Verbs conjugation in Present Tense', 'Family members', 'Telling Time & Calendar', 'Possessive Pronouns'] },
      { moduleNumber: 3, title: 'Food, Shopping & Leisure', topics: ['Accusative Case (Akkusativ)', 'Modal Verbs (können, müssen, möchten)', 'Ordering at Restaurants', 'Shopping dialogues'] },
      { moduleNumber: 4, title: 'Living in Germany & Exam Prep', topics: ['Prepositions of Place', 'Separable Verbs (Trennbare Verben)', 'Goethe A1 Listening, Speaking, Reading & Writing mock tests'] }
    ],
    goethePrepIncluded: true,
    upcomingBatchDate: '2026-08-15',
    mode: 'Online',
    rating: 4.9,
    enrolledStudents: 1420,
    badgeTag: 'Most Popular for Beginners',
    image: 'https://images.unsplash.com/photo-1527891751199-7225231a68dd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a2-grundstufe-2',
    level: 'A2',
    title: 'A2 Elementary German',
    germanTitle: 'A2 Grundstufe 2 - Goethe Zertifikat A2',
    shortDesc: 'Expand your expressiveness to describe your background, work, environment, and daily interactions.',
    fullDesc: 'A2 elevates your language skills from simple phrases to connected sentences. Express past events, navigate public transportation, talk about health, career history, and handle routine social situations in Germany.',
    durationHours: 90,
    durationWeeks: 9,
    priceEUR: 399,
    priceLocal: '€399 / ₹32,000',
    recommendedFor: 'Learners who completed A1 or possess elementary vocabulary.',
    outcomes: [
      'Understand sentences and frequently used expressions related to areas of immediate relevance',
      'Communicate in routine tasks requiring a simple exchange of information',
      'Describe in simple terms aspects of your background and immediate environment',
      'Prepare thoroughly for Goethe / Telc A2 examination'
    ],
    syllabusModules: [
      { moduleNumber: 1, title: 'Past Events & Memory', topics: ['Perfekt Tense with haben/sein', 'Regular & Irregular Partizip II', 'Talking about holidays & childhood'] },
      { moduleNumber: 2, title: 'Dative Case & Directions', topics: ['Dativ Case & Dative Prepositions', 'Navigating German cities', 'Asking & giving directions', 'Public transit in Germany'] },
      { moduleNumber: 3, title: 'Work, Health & Appointments', topics: ['Subordinate clauses (weil, dass, wenn)', 'Expressing illness & doctor visits', 'Writing formal emails & appointment requests'] },
      { moduleNumber: 4, title: 'Comparative & Goethe A2 Prep', topics: ['Adjective Comparisons (Komparativ & Superlativ)', 'Reflexive Verbs', 'Official Goethe A2 Exam simulations'] }
    ],
    goethePrepIncluded: true,
    upcomingBatchDate: '2026-08-20',
    mode: 'Hybrid',
    rating: 4.95,
    enrolledStudents: 1150,
    badgeTag: 'Essential Step',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'b1-mittelstufe-1',
    level: 'B1',
    title: 'B1 Intermediate German',
    germanTitle: 'B1 Zertifikat Deutsch - Goethe & Telc B1',
    shortDesc: 'Achieve true communicative independence for university admission, job seeking, and German residency.',
    fullDesc: 'B1 is the turning point where you become an independent user of the German language. Crucial for spouse visa, student visa, job applications, and citizenship eligibility in Germany.',
    durationHours: 120,
    durationWeeks: 12,
    priceEUR: 499,
    priceLocal: '€499 / ₹39,500',
    recommendedFor: 'Students planning university enrollment in Germany, Job seekers, and Spouse Visa applicants.',
    outcomes: [
      'Understand the main points of clear standard input on familiar matters regularly encountered',
      'Deal with most situations likely to arise whilst travelling in a German-speaking area',
      'Produce simple connected text on topics which are familiar or of personal interest',
      'Describe experiences, events, dreams, hopes & ambitions and briefly give reasons for opinions',
      '100% Goethe / Telc B1 Exam readiness guaranteed'
    ],
    syllabusModules: [
      { moduleNumber: 1, title: 'Complex Sentence Structures', topics: ['Genitive Case & Genitive Prepositions', 'Relative Clauses (Relativsätze)', 'Adjective Endings in all cases'] },
      { moduleNumber: 2, title: 'Präteritum & Professional Life', topics: ['Past Tense (Präteritum) for formal writing', 'Job interviews & CV writing in German', 'Expressing opinions & arguments'] },
      { moduleNumber: 3, title: 'Passiv & Hypothesis', topics: ['Passive Voice (Vorgangspassiv)', 'Konjunktiv II for polite requests & hypothetical conditions', 'Debates on environment & society'] },
      { moduleNumber: 4, title: 'Goethe/Telc B1 Masterclass', topics: ['Module-by-module Exam Training (Lesen, Hören, Schreiben, Sprechen)', '4 Full-length Mock Exams with personalized feedback'] }
    ],
    goethePrepIncluded: true,
    upcomingBatchDate: '2026-08-25',
    mode: 'Online',
    rating: 4.98,
    enrolledStudents: 1890,
    badgeTag: 'High Career Demand',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'b2-mittelstufe-2',
    level: 'B2',
    title: 'B2 Upper Intermediate',
    germanTitle: 'B2 Goethe-Zertifikat / Telc B2 Professional',
    shortDesc: 'Master professional workplace fluency, university academic discussions, and complex technical texts.',
    fullDesc: 'B2 German is required by most German universities, medical licensing bodies (Approbation), and engineering firms. Gain fluency to converse spontaneously without strain for native speakers.',
    durationHours: 140,
    durationWeeks: 14,
    priceEUR: 599,
    priceLocal: '€599 / ₹47,000',
    recommendedFor: 'Doctors, Nurses, Engineers, IT Professionals, and Master degree applicants.',
    outcomes: [
      'Understand the main ideas of complex text on both concrete and abstract topics',
      'Interact with a degree of fluency and spontaneity with native speakers',
      'Produce clear, detailed text on a wide range of subjects',
      'Explain a viewpoint on a topical issue giving the advantages and disadvantages'
    ],
    syllabusModules: [
      { moduleNumber: 1, title: 'Advanced Grammar & Connectors', topics: ['Two-part connectors (je... desto, sowohl... als auch)', 'Nomen-Verb-Verbindungen', 'Subjunctive I & II (Konjunktiv I for indirect speech)'] },
      { moduleNumber: 2, title: 'Business & Academic German', topics: ['Technical vocabulary', 'Presentation techniques in German', 'Writing argumentative essays & formal complaints'] },
      { moduleNumber: 3, title: 'Partizipialattribute & Nuance', topics: ['Extended participle clauses', 'Modal particles (denn, doch, ja, mal)', 'Nuanced expressions in negotiations'] },
      { moduleNumber: 4, title: 'B2 Exam & Interview Drill', topics: ['Intensive B2 speaking prep with native German trainers', 'Full Telc/Goethe B2 practice sets'] }
    ],
    goethePrepIncluded: true,
    upcomingBatchDate: '2026-09-01',
    mode: 'Hybrid',
    rating: 4.97,
    enrolledStudents: 1320,
    badgeTag: 'Professional Standard',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'c1-oberstufe-1',
    level: 'C1',
    title: 'C1 Advanced German',
    germanTitle: 'C1 Goethe-Zertifikat / TestDaF / DSH Prep',
    shortDesc: 'Express yourself fluently and spontaneously for academic research, executive roles, and legal practice.',
    fullDesc: 'C1 is the gateway to native-level academic and professional integration in Germany. Recommended for PhD candidates, researchers, legal professionals, and executive leadership.',
    durationHours: 160,
    durationWeeks: 16,
    priceEUR: 699,
    priceLocal: '€699 / ₹55,000',
    recommendedFor: 'University students needing TestDaF / DSH-2, Executives, Medical Specialists.',
    outcomes: [
      'Understand a wide range of demanding, longer texts, and recognize implicit meaning',
      'Express ideas fluently and spontaneously without much obvious searching for expressions',
      'Use language flexibly and effectively for social, academic and professional purposes',
      'Pass Goethe C1, TestDaF (TDN 4/5) or DSH-2/3 exams'
    ],
    syllabusModules: [
      { moduleNumber: 1, title: 'Academic Discourse & Syntax', topics: ['Complex nominal style (Nominalstil)', 'Advanced passive constructions', 'Stylistic refining'] },
      { moduleNumber: 2, title: 'Scientific & Socio-Political Analysis', topics: ['Analyzing research publications', 'Debating economic policy', 'Formulating hypotheses'] },
      { moduleNumber: 3, title: 'Idiomatic & Rhetorical Mastery', topics: ['Rhetoric devices in public speaking', 'German literature & historical context', 'Advanced writing style'] },
      { moduleNumber: 4, title: 'TestDaF / DSH Intensive Prep', topics: ['TestDaF computer-based & paper-based simulation', 'Graph description & scientific argument writing'] }
    ],
    goethePrepIncluded: true,
    upcomingBatchDate: '2026-09-10',
    mode: 'Online',
    rating: 4.99,
    enrolledStudents: 680,
    badgeTag: 'Academic Mastery',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'c2-oberstufe-2',
    level: 'C2',
    title: 'C2 Native Mastery',
    germanTitle: 'C2 Großes Deutsches Sprachdiplom (GDS)',
    shortDesc: 'Achieve flawless mastery equivalent to a educated native speaker of German.',
    fullDesc: 'The highest CEFR level qualification. Recognized worldwide as proof of supreme German language mastery required for university lecturing, court translation, and diplomacy.',
    durationHours: 180,
    durationWeeks: 18,
    priceEUR: 899,
    priceLocal: '€899 / ₹71,000',
    recommendedFor: 'Translators, University Lecturers, Diplomats, Literature Scholars.',
    outcomes: [
      'Understand with ease virtually everything heard or read',
      'Summarise information from different spoken and written sources, reconstructing arguments',
      'Express yourself spontaneously, very fluently and precisely, differentiating finer shades of meaning',
      'Obtain the prestigious Goethe-Zertifikat C2: GDS'
    ],
    syllabusModules: [
      { moduleNumber: 1, title: 'Literary & Juridical German', topics: ['Classical & Contemporary German literature', 'Legal & administrative texts', 'Stylistic nuances'] },
      { moduleNumber: 2, title: 'Simultaneous Translation Techniques', topics: ['Oral summary of complex lectures', 'Nuanced diplomatic communication', 'Regional dialects & register'] },
      { moduleNumber: 3, title: 'High-Level Academic Writing', topics: ['Dissertation defense simulation', 'Editorial writing for German media', 'Philosophical debates'] },
      { moduleNumber: 4, title: 'Goethe C2 GDS Exam Workshop', topics: ['Detailed critique of written work', 'Simulated 1-on-1 GDS oral exams with certified examiners'] }
    ],
    goethePrepIncluded: true,
    upcomingBatchDate: '2026-09-15',
    mode: 'Online',
    rating: 5.0,
    enrolledStudents: 340,
    badgeTag: 'Ultimate Distinction',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'dr-klaus-weber',
    name: 'Dr. Klaus Weber',
    title: 'Head of German Pedagogy & Goethe Examiner',
    germanLevel: 'Native Speaker',
    experienceYears: 16,
    nativeSpeaker: true,
    bio: 'Former lecturer at Ludwig-Maximilians-Universität München (LMU). Specializes in C1/C2 TestDaF preparation and advanced phonetics.',
    certification: 'Certified Goethe-Zertifikat & TestDaF Senior Examiner',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    specialties: ['TestDaF / DSH', 'C1 & C2 Mastery', 'Phonetics', 'Academic Writing'],
    greetingDe: 'Herzlich willkommen bei DeutschKraft! Ich helfe Ihnen, Ihre Träume in Deutschland zu verwirklichen.',
    greetingEn: 'Welcome to DeutschKraft! I help you turn your German aspirations into reality.',
    studentsTaught: 4200
  },
  {
    id: 'hannah-schneider',
    name: 'Hannah Schneider',
    title: 'Senior German Language Specialist',
    germanLevel: 'Native Speaker',
    experienceYears: 11,
    nativeSpeaker: true,
    bio: 'Born in Berlin, Hannah holds a Master in Applied Linguistics from Humboldt University Berlin. Creator of interactive B1/B2 communicative modules.',
    certification: 'Telc Certified Instructor & Intercultural Trainer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    specialties: ['B1 & B2 Intermediate', 'Medical German (Fachsprachenprüfung)', 'Workplace Communication'],
    greetingDe: 'Hallo! Deutsch lernen macht riesigen Spaß, wenn man die richtige Methode nutzt.',
    greetingEn: 'Hello! Learning German is immensely fun when using the right immersive method.',
    studentsTaught: 3100
  },
  {
    id: 'arjun-sharma',
    name: 'Arjun Sharma, M.A.',
    title: 'Lead Instructor (A1 - B1)',
    germanLevel: 'C2 Certified (Goethe GDS)',
    experienceYears: 8,
    nativeSpeaker: false,
    bio: 'Scored 100% in Goethe C2 GDS. Spent 6 years studying and working in Stuttgart. Understands the exact challenges non-native speakers face when learning German.',
    certification: 'Goethe Institute Certified Pedagogy Specialist',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    specialties: ['A1 & A2 Foundation', 'Grammar Simplified', 'Student Visa Guidance'],
    greetingDe: 'Guten Tag! Ich kenne genau die Hürden beim Deutschlernen und zeige Ihnen den schnellsten Weg.',
    greetingEn: 'Good day! I know exact hurdles in learning German and will guide you on the fastest route.',
    studentsTaught: 2800
  },
  {
    id: 'sophi-becker',
    name: 'Sophie Becker',
    title: 'Ausbildung & Career Training Coach',
    germanLevel: 'Native Speaker',
    experienceYears: 9,
    nativeSpeaker: true,
    bio: 'Specialist in preparing international candidates for vocational training (Ausbildung) and nursing jobs across Bavaria and Baden-Württemberg.',
    certification: 'Certified Business German Coach & HR Specialist',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    specialties: ['Ausbildung Prep', 'Nursing German (Pflege)', 'Interview Coaching'],
    greetingDe: 'Willkommen! Gemeinsam bereiten wir Ihre erfolgreiche Karriere in Deutschland vor.',
    greetingEn: 'Welcome! Together we prepare your successful career trajectory in Germany.',
    studentsTaught: 2400
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Priya Mukherjee',
    role: 'M.Sc. Automotive Engineering Student',
    city: 'TU Munich (TUM), Germany',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    courseCompleted: 'B2',
    goetheScore: 'Goethe B2 - 94/100',
    quote: 'DeutschKraft transformed my German skills in just 7 months. I passed my Goethe B2 exam on the first attempt with 94 points and secured admission at TU Munich!',
    destination: 'Technical University of Munich',
    programType: 'University',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Vikramaditya Roy',
    role: 'Software Developer',
    city: 'Berlin, Germany',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    courseCompleted: 'B2',
    goetheScore: 'Telc B2 - Passed with Distinction',
    quote: 'The live interactive sessions and mock interview drills with Hannah & Klaus gave me the confidence to crack tech interviews in Berlin. Highly recommended!',
    destination: 'Berlin Tech Center',
    programType: 'Job Visa',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Ananya Nair',
    role: 'Registered Nurse (Pflegefachkraft)',
    city: 'Stuttgart, Germany',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80',
    courseCompleted: 'B2',
    goetheScore: 'Goethe B2 & B2 Pflege',
    quote: 'I did the Ausbildung prep with DeutschKraft. They guided me through language learning, B2 certification, and connected me with top hospitals in Stuttgart!',
    destination: 'Klinikum Stuttgart',
    programType: 'Ausbildung',
    rating: 5
  },
  {
    id: 'test-4',
    name: 'Lucas Fernandez',
    role: 'Renewable Energy Researcher',
    city: 'Aachen, Germany',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    courseCompleted: 'C1',
    goetheScore: 'TestDaF TDN 5/5/5/4',
    quote: 'Dr. Klaus Weber’s C1 TestDaF masterclass was exceptional. The focus on scientific writing and oral arguments made all the difference.',
    destination: 'RWTH Aachen University',
    programType: 'University',
    rating: 5
  }
];

export const UPCOMING_BATCHES: UpcomingBatch[] = [
  {
    id: 'batch-a1-aug',
    courseLevel: 'A1',
    startDate: '18 Aug 2026',
    timing: '07:30 AM - 09:30 AM (IST) / Morning Shift',
    mode: 'Online Live',
    seatsLeft: 4,
    instructor: 'Arjun Sharma',
    priceEUR: 349
  },
  {
    id: 'batch-a2-aug',
    courseLevel: 'A2',
    startDate: '22 Aug 2026',
    timing: '06:00 PM - 08:00 PM (IST) / Evening Shift',
    mode: 'Online Live',
    seatsLeft: 3,
    instructor: 'Hannah Schneider',
    priceEUR: 399
  },
  {
    id: 'batch-b1-sep',
    courseLevel: 'B1',
    startDate: '01 Sep 2026',
    timing: '10:00 AM - 01:00 PM (IST) / Weekend Batch',
    mode: 'Hybrid Campus',
    seatsLeft: 5,
    instructor: 'Hannah Schneider',
    priceEUR: 499
  },
  {
    id: 'batch-b2-sep',
    courseLevel: 'B2',
    startDate: '05 Sep 2026',
    timing: '08:00 PM - 10:00 PM (IST) / Night Shift',
    mode: 'Online Live',
    seatsLeft: 2,
    instructor: 'Dr. Klaus Weber',
    priceEUR: 599
  },
  {
    id: 'batch-c1-sep',
    courseLevel: 'C1',
    startDate: '12 Sep 2026',
    timing: '03:00 PM - 06:00 PM (IST) / Weekend Intensive',
    mode: 'Online Live',
    seatsLeft: 6,
    instructor: 'Dr. Klaus Weber',
    priceEUR: 699
  }
];

export const AUSBILDUNG_PROGRAMS: AusbildungProgram[] = [
  {
    id: 'ausbildung-nursing',
    title: 'Nursing & Healthcare (Pflegefachmann/-frau)',
    field: 'Healthcare',
    monthlyStipendYear1: '€1,190 / month',
    monthlyStipendYear3: '€1,350 / month',
    requiredLevel: 'B2',
    durationYears: 3,
    description: '3-year tuition-free dual vocational program in state hospitals across Germany with guaranteed job placement upon completion.',
    keyBenefits: ['100% Tuition Free', 'Earn €1,200+ monthly while learning', 'PR Eligibility after 2 years of work', 'High demand across Germany']
  },
  {
    id: 'ausbildung-it',
    title: 'IT Systems Integration (Fachinformatiker/in)',
    field: 'Information Technology',
    monthlyStipendYear1: '€1,100 / month',
    monthlyStipendYear3: '€1,300 / month',
    requiredLevel: 'B2',
    durationYears: 3,
    description: 'Learn cloud infrastructure, cybersecurity, and enterprise network management in leading German tech firms.',
    keyBenefits: ['Paid apprenticeship in top tech hubs', 'Hands-on industry projects', 'Direct transition to junior engineer salary (€45k+)']
  },
  {
    id: 'ausbildung-mechatronics',
    title: 'Mechatronics & Industry 4.0 (Mechatroniker/in)',
    field: 'Engineering',
    monthlyStipendYear1: '€1,150 / month',
    monthlyStipendYear3: '€1,400 / month',
    requiredLevel: 'B2',
    durationYears: 3.5,
    description: 'Combine mechanical engineering, electronics, and robotics in the heart of German manufacturing excellence.',
    keyBenefits: ['Work with BMW, Siemens & Bosch partners', 'State-of-the-art laboratory training', 'Permanent workplace placement guarantee']
  },
  {
    id: 'ausbildung-hospitality',
    title: 'Hotel Management (Hotelfachmann/-frau)',
    field: 'Hospitality',
    monthlyStipendYear1: '€1,000 / month',
    monthlyStipendYear3: '€1,200 / month',
    requiredLevel: 'B1',
    durationYears: 3,
    description: 'Master luxury hotel operations, international guest relations, and gastronomy management in Bavarian resort destinations.',
    keyBenefits: ['Accommodation options available', 'International career mobility', 'Free meals and uniforms']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Goethe Exam Pass Celebration 2026',
    category: 'Graduation',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    caption: 'Our B2 batch achieving a 98% first-attempt pass rate in Goethe-Zertifikat B2.',
    date: 'July 2026'
  },
  {
    id: 'gal-2',
    title: 'German Culture & Oktoberfest Day',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
    caption: 'Students practicing German conversation while experiencing traditional Bavarian pretzel baking and cultural immersion.',
    date: 'October 2025'
  },
  {
    id: 'gal-3',
    title: 'Interactive Smart Classroom Session',
    category: 'Classroom',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    caption: 'Small batch size of max 12 students for maximum individual speaking practice.',
    date: 'June 2026'
  },
  {
    id: 'gal-4',
    title: 'Munich & Berlin Campus Orientation Tour',
    category: 'Germany Trips',
    image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80',
    caption: 'Our students exploring Munich Marienplatz during their university welcome week in Germany.',
    date: 'April 2026'
  },
  {
    id: 'gal-5',
    title: 'Medical German Specialist Workshop',
    category: 'Classroom',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    caption: 'Doctors and nurses participating in simulated patient consultations in German.',
    date: 'May 2026'
  },
  {
    id: 'gal-6',
    title: 'Annual Student Excellence Awards',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    caption: 'Felicitation ceremony for top scorers in Goethe C1 & TestDaF examinations.',
    date: 'March 2026'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'complete-guide-to-tuition-free-universities-in-germany-2026',
    title: 'The Ultimate Guide to Tuition-Free Universities in Germany (2026 Update)',
    excerpt: 'Discover how international students can study for free at top public German universities like TUM, LMU, RWTH Aachen, and Heidelberg.',
    content: `Germany remains one of the world's most sought-after study destinations. Public universities in 15 out of 16 German federal states offer 100% tuition-free higher education for both EU and non-EU international students...`,
    category: 'Study in Germany',
    author: 'Dr. Klaus Weber',
    authorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
    publishedDate: '28 July 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'post-2',
    slug: '5-common-german-grammar-mistakes-and-how-to-fix-them',
    title: '5 Crucial German Grammar Mistakes and How to Avoid Them Easily',
    excerpt: 'Struggling with Der, Die, Das, Dative prepositions, or word order in Nebensätze? Here are simple visual rules from our lead instructors.',
    content: `German grammar has a reputation for being rigid, but once you master the underlying matrix of cases and word positions, it becomes remarkably logical...`,
    category: 'Grammar Tips',
    author: 'Hannah Schneider',
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    publishedDate: '15 July 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'post-3',
    slug: 'ausbildung-in-germany-for-international-applicants',
    title: 'Everything You Need to Know About Ausbildung in Germany',
    excerpt: 'How to secure a monthly stipend of €1,200+ while training in Nursing, IT, or Engineering without paying any tuition fee.',
    content: `Dual Vocational Training (Ausbildung) allows non-EU applicants to work for German companies while attending state vocational school...`,
    category: 'Ausbildung',
    author: 'Sophie Becker',
    authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    publishedDate: '02 July 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'post-4',
    slug: 'german-blocked-account-and-aps-certificate-step-by-step',
    title: 'German Student Visa 2026: APS Verification & Blocked Account Setup',
    excerpt: 'Step-by-step guidance on processing your APS document verification, setting up Expatrio/Fintiba, and booking your visa appointment.',
    content: `Applying for a German student visa requires strict documentation compliance. In this guide, we break down the latest 2026 APS requirements...`,
    category: 'Visa Guide',
    author: 'Arjun Sharma',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    publishedDate: '20 June 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    featured: false
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How long has GLS been operating?',
    answer: 'German Language Studio was founded in 2013 by Director Swati and has spent over 14 years training students and professionals for successful careers in Germany.'
  },
  {
    id: 'faq-2',
    category: 'Exams',
    question: 'Is GLS a certified/recognized institute?',
    answer: 'Yes. Our training is aligned with CEFR standards (A1–C2) and prepares students for globally recognized exams including the Goethe-Zertifikat, TestDaF, and ÖSD.'
  },
  {
    id: 'faq-3',
    category: 'General',
    question: 'What makes GLS different from other German language institutes?',
    answer: "We go beyond language classes. GLS combines rigorous exam preparation with industry-specific German training (Healthcare, IT, Engineering) and end-to-end career support — from Ausbildung and Master's guidance to job placement and German-style CV building."
  },
  {
    id: 'faq-4',
    category: 'Courses',
    question: 'Who trains the students at GLS?',
    answer: 'Our programs are led by experienced instructors under the direction of Swati, a German and Spanish language expert with hands-on experience as a translator, international volunteer, and researcher in Germany.'
  },
  {
    id: 'faq-5',
    category: 'Careers',
    question: 'Does GLS only help with language learning, or also with careers in Germany?',
    answer: 'Both. Language mastery is our foundation, but our real focus is outcomes; helping students choose the right path (study, Ausbildung, or job) and supporting them all the way through visa, APS, and job placement processes.'
  },
  {
    id: 'faq-6',
    category: 'Exams',
    question: "What is GLS's success rate?",
    answer: 'We maintain a 90% success rate for Goethe-Zertifikat, TestDaF, and ÖSD exams, with over 10,000 alumni to date.'
  }
];

export const STATS = [
  { label: 'Goethe & Telc Pass Rate', value: 98.4, suffix: '%', icon: 'Award' },
  { label: 'Students Taught', value: 5000, suffix: '+', icon: 'Globe' },
  { label: 'Students Placed', value: 500, suffix: '+', icon: 'GraduationCap' },
  { label: 'Certified Trainers', value: 30, suffix: '+', icon: 'Users' },
];
