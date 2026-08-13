import { Course, Trainer, Testimonial, UpcomingBatch, GalleryItem, BlogPost, FAQItem, AusbildungProgram, Exam } from '../types';
import a1Img from '../img/a1.png';
import a2Img from '../img/a2.png';
import b1Img from '../img/b1.png';
import b2Img from '../img/b2.png';
import c1img from '../img/c1.png';
import c2img from '../img/c2.jpg';
import ausbildung1Img from '../img/ausbildung.png';
import ausbildung2Img from '../img/ausbildung-2.png';
import ausbildung3Img from '../img/ausbildung-3.jpg';
import ausbildung4Img from '../img/ausbildung-4.jpg';
import ausbildung5Img from '../img/ausbildung-5.jpg';

export const EXAMS: Exam[] = [
  {
    id: 'goethe',
    tags: ['GOETHE', 'Most Widely Recognised'],
    quickInfo: 'Levels A1 to C2 · Accepted Worldwide',
    title: 'Goethe Exam',
    description: 'The most globally recognised German certification, accepted by universities, employers, and the German government for study, work, and visa applications.',
    checklist: [
      'Required by most German universities at B2 or higher',
      'Accepted for skilled worker and Ausbildung visas from B1'
    ],
    infoBox: 'Accepted For: University Admission, Work Visas, Ausbildung',
    ctaText: 'Learn About Goethe',
    link: '/contact',
    image: a1Img
  },
  {
    id: 'telc',
    tags: ['TELC', 'Best Value'],
    quickInfo: 'Levels A1 to C2 · Accepted Across Germany',
    title: 'telc Exam',
    description: 'A widely accepted German certification, generally more affordable than Goethe, with a dedicated healthcare track for nursing and care roles.',
    checklist: [
      'Recognised by German employers and institutions',
      'Includes a specialised Pflege certificate for healthcare pathways'
    ],
    infoBox: 'Accepted For: Work Visas, Ausbildung, Healthcare Roles',
    ctaText: 'Learn About telc',
    link: '/contact',
    image: b1Img
  },
  {
    id: 'osd',
    tags: ['ÖSD', 'Best for Austria'],
    quickInfo: 'Levels A1 to C2 · Accepted in Austria, Germany & Switzerland',
    title: 'ÖSD Exam',
    description: 'The official German language certificate of Austria, officially recognized across the DACH region for universities, work, and immigration.',
    checklist: [
      'Fully recognized for university admission in Germany and Austria',
      'Optimal for health and IT professionals targeting Austrian pathways'
    ],
    infoBox: 'Accepted For: DACH Region Universities, Visas, Migration',
    ctaText: 'Learn About ÖSD',
    link: '/contact',
    image: c1img
  }
];

export const COURSES: Course[] = [
  {
    id: 'a1-grundstufe',
    level: 'A1',
    title: 'A1 Beginner German',
    germanTitle: 'A1 GRUNDSTUFE – START DEUTSCH 1',
    shortDesc: 'Start from zero and build real confidence with the German language. This level focuses on everyday vocabulary, basic sentence structure, and simple conversations — designed for complete beginners with no prior German knowledge.',
    fullDesc: 'No prior knowledge needed. GLS builds your foundation from your first "Hallo" to real conversations: vocabulary, grammar, and confidence, all structured around how you\'ll actually use German in Germany..',
    durationHours: 80,
    durationWeeks: 8,
    durationString: '50–90 Days (Weekday/Weekend) · Available Online & Offline',
    classDurationString: 'Class Duration: 90 mins (weekdays) / 150 mins (weekends)',
    priceEUR: 349,
    priceLocal: '€349 / ₹28,500',
    recommendedFor: 'Complete beginners, prospective students aiming for Studienkolleg, job seekers preparing for Germany, and individuals applying for a Family Reunion (Spouse) Visa needing the Goethe-Zertifikat A1.',
    outcomes: [
      'Hold basic conversations: greetings, introductions, and everyday questions',
      'Read and write simple sentences using core grammar rules'
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
    image: a1Img,
    ctaText: 'Get Free Course Guidance',
    learningFeaturesSubtitle: "From your very first word to real conversations, here's what the Deutsch A1 Anfängerkurs course covers.",
    learningFeatures: [
      {
        icon: 'MessageCircle',
        title: 'Greetings & Introductions',
        description: 'Introduce yourself, greet others, and share basic personal details.'
      },
      {
        icon: 'Users',
        title: 'Family & Daily Life',
        description: 'Talk about your family, your routine, and everyday activities.'
      },
      {
        icon: 'Clock',
        title: 'Numbers, Time & Dates',
        description: 'Use numbers, tell the time, and talk about days and months.'
      },
      {
        icon: 'ShoppingBag',
        title: 'Shopping & Simple Conversations',
        description: 'Order food, ask prices, and handle everyday interactions.'
      },
      {
        icon: 'PenTool',
        title: 'Basic Sentence Building',
        description: 'Form simple, correct sentences using core German grammar.'
      }
    ],
    faqs: [
      {
        question: 'Do I need any prior knowledge of German to join A1?',
        answer: 'No, this course is built for complete beginners.'
      },
      {
        question: 'Which exam does A1 prepare me for?',
        answer: 'Goethe-Zertifikat A1 (Start Deutsch 1) and telc A1.'
      },
      {
        question: 'Does the A1 certificate expire?',
        answer: 'No, it doesn\'t expire but visa and immigration applications often ask for a certificate issued within the last 6–12 months, so check your specific requirement before applying.'
      },
      {
        question: 'Is A1 enough for a German visa?',
        answer: 'A1 is commonly required for certain visa categories, such as spouse/family reunification visas. It is not sufficient on its own for study or work visas.'
      },
      {
        question: 'What happens after I finish A1?',
        answer: 'You move on to A2 Elementary German, building on this foundation.'
      }
    ]
  },
  {
    id: 'a2-grundstufe-2',
    level: 'A2',
    title: 'A2 Elementary German',
    germanTitle: 'A2 GRUNDSTUFE 2 – GOETHE ZERTIFIKAT A2',
    shortDesc: 'Move beyond the basics into everyday fluency. You\'ll learn to talk about your routine, family, work, and surroundings, while strengthening grammar fundamentals needed for the Goethe A2 exam.',
    fullDesc: 'A2 elevates your language skills from simple phrases to connected sentences. Express past events, navigate public transportation, talk about health, career history, and handle routine social situations in Germany.',
    durationHours: 90,
    durationWeeks: 9,
    durationString: '55–90 Days (Weekday/Weekend) · Available Online & Offline',
    classDurationString: 'Class Duration: 90 mins (weekdays) / 150 mins (weekends)',
    priceEUR: 399,
    priceLocal: '€399 / ₹32,000',
    recommendedFor: 'Learners who completed A1 or possess elementary vocabulary.',
    outcomes: [
      'Describe your background, environment, and daily routine with ease',
      'Handle short, routine exchanges in familiar situations'
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
    image: a2Img,
    ctaText: 'Get Free Course Guidance',
    trustText: 'Trusted by 10,000+ students across 14 years',
    learningFeaturesSubtitle: "From basic phrases to confident everyday conversations, here's what the Deutsch A2 Grundstufe course covers.",
    learningFeatures: [
      { icon: 'Users', title: 'Expanded Everyday Conversations', description: 'Talk more naturally about your work, environment, and daily life.' },
      { icon: 'Clock', title: 'Past & Future Events', description: 'Describe things that already happened and make simple plans.' },
      { icon: 'ShoppingBag', title: 'Directions & Travel Basics', description: 'Ask for and understand directions in everyday situations.' },
      { icon: 'MessageCircle', title: 'Likes, Dislikes & Opinions', description: 'Express preferences and share simple opinions with ease.' },
      { icon: 'PenTool', title: 'Everyday Grammar in Use', description: 'Strengthen sentence structure for smoother, more natural speech.' }
    ],
    faqs: [
      { question: 'Do I need to complete A1 before joining A2?', answer: 'Yes, A2 assumes A1-level knowledge — basic vocabulary, sentence structure, and everyday phrases.' },
      { question: 'Which exam does A2 prepare me for?', answer: 'Goethe-Zertifikat A2 and telc A2.' },
      { question: 'Does the A2 certificate expire?', answer: 'No — but as with A1, some visa or institutional applications may require a certificate issued within the last 6–12 months.' },
      { question: 'Is A2 enough to work or study in Germany?', answer: 'A2 is generally not sufficient for work or university admission; it primarily supports everyday communication and certain visa categories.' },
      { question: 'What happens after I finish A2?', answer: 'You move on to B1 Intermediate German, the level typically needed for greater independence in Germany.' }
    ]
  },
  {
    id: 'b1-mittelstufe-1',
    level: 'B1',
    title: 'B1 Intermediate German',
    germanTitle: 'B1 ZERTIFIKAT DEUTSCH – GOETHE & TELC B1',
    shortDesc: 'This is where German starts working for your career. Gain the independence to hold detailed conversations at work, university, or in daily life, a key requirement for admissions, job applications, and settling into life in Germany.',
    fullDesc: 'This is where German starts working for your career — hold detailed conversations at work, university, or in daily life across Germany. B1 is the turning point where you become an independent user of the German language. Crucial for spouse visa, student visa, job applications, and citizenship eligibility in Germany.',
    durationHours: 120,
    durationWeeks: 12,
    durationString: '80–105 Days (Weekday/Weekend) · Available Online & Offline',
    classDurationString: 'Class Duration: 90 mins (weekdays) / 150 mins (weekends)',
    priceEUR: 499,
    priceLocal: '€499 / ₹39,500',
    recommendedFor: 'Students planning university enrollment in Germany, Job seekers, and Spouse Visa applicants.',
    outcomes: [
      'Communicate confidently in academic, professional, and social settings',
      'Handle unexpected situations while travelling or living in a German-speaking country'
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
    image: b1Img,
    ctaText: 'Get Free Course Guidance',
    trustText: 'Trusted by 10,000+ students across 14 years',
    learningFeaturesSubtitle: "From everyday German to real independence, here's what the Deutsch B1 Mittelstufe course covers.",
    learningFeatures: [
      { icon: 'MessageCircle', title: 'University & Work-Ready German', description: 'Communicate confidently in academic and professional settings.' },
      { icon: 'Users', title: 'Connected, Detailed Speech', description: 'Explain your thoughts clearly, beyond short phrases.' },
      { icon: 'Clock', title: 'Handling Real-Life Situations', description: 'Manage travel, appointments, and unexpected situations on your own.' },
      { icon: 'ShoppingBag', title: 'Calls, Messages & Writing', description: 'Use the phone, write messages, and handle everyday correspondence.' },
      { icon: 'PenTool', title: 'Confident Everyday Independence', description: 'Navigate daily life in Germany without needing help.' }
    ],
    faqs: [
      { question: 'Do I need A2 before joining B1?', answer: 'Yes, B1 builds directly on A2-level grammar and vocabulary.' },
      { question: 'Which exam does B1 prepare me for?', answer: 'Goethe-Zertifikat B1 and telc B1.' },
      { question: 'Is B1 required for a German visa?', answer: 'B1 is commonly requested for certain visa categories, including spouse/family reunification visas. Requirements vary by visa type, so confirm with the relevant authority.' },
      { question: 'Is B1 enough for German university admission?', answer: 'Not for programs taught in German; most German universities require C1 level German (typically via TestDaF or DSH) for German-taught programs.' },
      { question: 'What happens after I finish B1?', answer: 'You move on to B2 Upper Intermediate German, which strengthens your German for professional and academic settings.' }
    ]
  },
  {
    id: 'b2-mittelstufe-2',
    level: 'B2',
    title: 'B2 Upper Intermediate',
    germanTitle: 'B2 GOETHE-ZERTIFIKAT / TELC B2 PROFESSIONAL',
    shortDesc: 'Step into fluency that works for you — professionally and personally. At this level, you\'ll navigate workplace discussions, academic settings, and complex conversations with genuine confidence, not just textbook German.',
    fullDesc: 'Navigate workplace discussions, academic settings, and complex conversations with confidence — not just textbook German. B2 German is required by most German universities, medical licensing bodies (Approbation), and engineering firms. Gain fluency to converse spontaneously without strain for native speakers.',
    durationHours: 140,
    durationWeeks: 14,
    durationString: '80 Days (Weekdays) · Available Online & Offline',
    classDurationString: 'Class Duration: 90 mins (Mon–Friday)',
    priceEUR: 599,
    priceLocal: '€599 / ₹47,000',
    recommendedFor: 'Doctors, Nurses, Engineers, IT Professionals, and Master degree applicants.',
    outcomes: [
      'Discuss detailed topics and technical subjects with clarity',
      'Interact naturally with native speakers without constant hesitation'
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
    image: b2Img,
    ctaText: 'Get Free Course Guidance',
    trustText: 'Trusted by 10,000+ students across 14 years',
    learningFeaturesSubtitle: "From confident conversation to professional fluency, here's what the Deutsch B2 Fortgeschrittene Mittelstufe course covers.",
    learningFeatures: [
      { icon: 'Users', title: 'Professional Fluency', description: 'Hold detailed conversations at work and in academic settings.' },
      { icon: 'Clock', title: 'Understanding Complex Texts', description: 'Grasp the main ideas in technical or detailed material.' },
      { icon: 'MessageCircle', title: 'Natural, Spontaneous Conversation', description: 'Interact with native speakers without searching for words.' },
      { icon: 'PenTool', title: 'Expressing Views Clearly', description: 'Discuss and debate topics with structure and confidence.' },
      { icon: 'ShoppingBag', title: 'Workplace & Academic Readiness', description: 'Handle discussions, meetings, and coursework in German.' }
    ],
    faqs: [
      { question: 'Do I need B1 before joining B2?', answer: 'Yes, B2 assumes solid B1-level grammar and everyday communication skills.' },
      { question: 'Which exam does B2 prepare me for?', answer: 'Goethe-Zertifikat B2 and telc B2 Professional.' },
      { question: 'Is B2 enough for German university admission?', answer: 'Not for programs taught in German — most universities require C1 level. B2 is a stepping stone toward that requirement.' },
      { question: 'Is the B2 certificate valid indefinitely?', answer: 'Yes, it doesn\'t expire — but always check whether the institution or authority you\'re applying to requires a recently issued certificate.' },
      { question: 'What happens after I finish B2?', answer: 'You move on to C1 Advanced German, the level most German universities require for German-taught programs.' }
    ]
  },
  {
    id: 'c1-oberstufe-1',
    level: 'C1',
    title: 'C1 Advanced German',
    germanTitle: 'C1 GOETHE-ZERTIFIKAT / TESTDAF / DSH PREP',
    shortDesc: 'Built for those heading into academic research, executive roles, or legal and technical fields. This level sharpens your ability to express complex ideas precisely in writing, in meetings, and in high-stakes conversations.',
    fullDesc: 'Built for academic research, executive roles, and technical fields, express complex ideas precisely, in writing and in high-stakes conversations. Only 5% of German learners reach this level of mastery.',
    durationHours: 160,
    durationWeeks: 16,
    durationString: '80 Days (Weekdays) · Available Online & Offline',
    classDurationString: 'Class Duration: 90 mins (Mon–Friday)',
    priceEUR: 699,
    priceLocal: '€699 / ₹55,000',
    recommendedFor: 'University students needing TestDaF / DSH-2, Executives, Medical Specialists.',
    outcomes: [
      'Follow and contribute to demanding academic or professional discussions',
      'Express nuanced ideas fluently, without searching for words'
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
    image: c1img,
    ctaText: 'Get Free Course Guidance',
    trustText: 'Trusted by 10,000+ students across 14 years',
    learningFeaturesSubtitle: "From professional fluency to academic precision, here's what the Deutsch C1 Fortgeschrittenenkurs course covers.",
    learningFeatures: [
      { icon: 'MessageCircle', title: 'Precision in Complex Topics', description: 'Express nuanced ideas fluently in technical or legal contexts.' },
      { icon: 'Clock', title: 'Advanced Reading Comprehension', description: 'Understand long, demanding texts with implicit meaning.' },
      { icon: 'Users', title: 'Confident Public & Professional Speech', description: 'Present and argue your point in high-stakes settings.' },
      { icon: 'PenTool', title: 'Structured Academic Writing', description: 'Write clear, well-organized texts for study or work.' },
      { icon: 'ShoppingBag', title: 'Fluency Under Pressure', description: 'Communicate smoothly even in unfamiliar or demanding situations.' }
    ],
    faqs: [
      { question: 'Do I need B2 before joining C1?', answer: 'Yes, C1 builds on B2-level fluency and comprehension.' },
      { question: 'Which exam does C1 prepare me for?', answer: 'Goethe-Zertifikat C1, TestDaF, and DSH.' },
      { question: 'Is C1 enough for German university admission?', answer: 'Yes — most German universities require C1-level proficiency (via TestDaF Level 4 in all sections, or DSH-2 or higher) for programs taught in German.' },
      { question: 'Do I need C1 if my program is taught in English?', answer: 'Not necessarily — English-taught programs usually require proof of English proficiency (TOEFL/IELTS) instead, though some universities may still ask for basic German (A1/A2) for daily life and integration.' },
      { question: 'What happens after I finish C1?', answer: 'You move on to C2 Oberstufe, the highest level of German proficiency.' }
    ]
  },
  {
    id: 'c2-oberstufe-2',
    level: 'C2',
    title: 'C2 Native Mastery',
    germanTitle: 'C2 GROSSES DEUTSCHES SPRACHDIPLOM (GDS)',
    shortDesc: 'Final step to learn German that feels indistinguishable from a native speaker\'s. This level is for those aiming for top MNC roles in Germany or full academic and professional integration into German-speaking life.',
    fullDesc: 'German that feels indistinguishable from a native speaker\'s — for top MNC roles or full academic and professional integration into German-speaking life. This is the highest qualification recognizing native-level mastery.',
    durationHours: 160,
    durationWeeks: 16,
    durationString: '80 Days (Weekdays)  · Available Online & Offline',
    classDurationString: 'Class Duration: 90 mins (Mon–Friday)',
    priceEUR: 799,
    priceLocal: '€799 / ₹64,000',
    recommendedFor: 'Translators, University Lecturers, Diplomats, Literature Scholars.',
    outcomes: [
      'Understand virtually anything heard or read, without effort',
      'Communicate with the nuance, tone, and precision of a native speaker'
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
    image: c2img,
    ctaText: 'Get Free Course Guidance',
    trustText: 'Trusted by 10,000+ students across 14 years',
    learningFeaturesSubtitle: "From advanced fluency to near-native mastery, here's what the Deutsch C2 Oberstufe course covers.",
    learningFeatures: [
      { icon: 'MessageCircle', title: 'Near-Native Comprehension', description: 'Understand virtually anything heard or read, without effort.' },
      { icon: 'Users', title: 'Effortless, Nuanced Expression', description: 'Speak with the tone and precision of a native speaker.' },
      { icon: 'ShoppingBag', title: 'Mastery Across Contexts', description: 'Navigate academic, professional, and social German fluently.' },
      { icon: 'PenTool', title: 'Subtle Meaning & Tone', description: 'Pick up on nuance, humor, and implication naturally.' },
      { icon: 'Clock', title: 'Total Communicative Confidence', description: 'Speak, write, and think in German without hesitation' }
    ],
    faqs: [
      { question: 'Do I need C1 before joining C2?', answer: 'Yes, C2 is the final level and builds directly on C1 fluency.' },
      { question: 'Which certification does C2 prepare me for?', answer: 'The Große Deutsche Sprachdiplom (GDS).' },
      { question: 'Is C2 required for admission to a German university?', answer: 'No, most universities require C1, not C2, for German-taught programs. C2 goes beyond the standard requirement, geared toward advanced academic or professional roles.' },
      { question: 'Is a C2 certificate necessary for most jobs in Germany?', answer: 'Not typically. C1 is usually sufficient for most professional roles. C2 is relevant for specialized academic, research, or high-level professional positions.' },
      { question: 'Is this the highest level of German certification?', answer: 'Yes, C2 is the highest level on the CEFR framework.' }
    ]
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
    image: ausbildung1Img,
    caption: 'Our B2 batch achieving a 98% first-attempt pass rate in Goethe-Zertifikat B2.',
    date: 'July 2026'
  },
  {
    id: 'gal-2',
    title: 'German Culture & Oktoberfest Day',
    category: 'Events',
    image: ausbildung2Img,
    caption: 'Students practicing German conversation while experiencing traditional Bavarian pretzel baking and cultural immersion.',
    date: 'October 2025'
  },
  {
    id: 'gal-3',
    title: 'Interactive Smart Classroom Session',
    category: 'Classroom',
    image: ausbildung3Img,
    caption: 'Small batch size of max 12 students for maximum individual speaking practice.',
    date: 'June 2026'
  },
  {
    id: 'gal-4',
    title: 'Munich & Berlin Campus Orientation Tour',
    category: 'Germany Trips',
    image: ausbildung4Img,
    caption: 'Our students exploring Munich Marienplatz during their university welcome week in Germany.',
    date: 'April 2026'
  },
  {
    id: 'gal-5',
    title: 'Medical German Specialist Workshop',
    category: 'Classroom',
    image: ausbildung5Img,
    caption: 'Doctors and nurses participating in simulated patient consultations in German.',
    date: 'May 2026'
  },
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

export const EXAM_HUB_FAQS: FAQItem[] = [
  {
    id: 'f1',
    category: 'General',
    question: 'Which German language exams are accepted for Germany?',
    answer: 'The Goethe, telc and ÖSD exams are all internationally recognised German proficiency exams. However, which certificate you need can depend on your university, employer, visa category, Ausbildung or other specific requirement.'
  },
  {
    id: 'f2',
    category: 'General',
    question: 'What is the difference between Goethe, telc and ÖSD?',
    answer: 'All three assess German proficiency, but they differ in exam format, structure, locations, scoring and specific use cases. The right choice depends on what you are applying for and which certificate your institution or authority accepts.'
  },
  {
    id: 'f3',
    category: 'General',
    question: 'Which German exam should I take: Goethe, telc or ÖSD?',
    answer: 'There is no single best exam for everyone. Your choice should be based on your goal, required level, destination, application requirements and exam availability. GLS counsellors can help you identify the most suitable option.'
  },
  {
    id: 'f4',
    category: 'General',
    question: 'What German levels can I take exams for?',
    answer: 'German proficiency is generally measured from A1 to C2 under the Common European Framework of Reference for Languages (CEFR). Different exams and exam providers offer different levels, so check the specific exam requirements for your goal.'
  },
  {
    id: 'f5',
    category: 'General',
    question: 'What German level do I need to study or work in Germany?',
    answer: 'It depends on your pathway. Some programmes may require B1 or B2, while university programmes, professional recognition or certain regulated professions may require B2, C1 or higher. Always check the exact requirement of your institution or programme.'
  },
  {
    id: 'f6',
    category: 'General',
    question: 'Can I take a German exam without taking a German course?',
    answer: 'Yes. You can generally register for a proficiency exam without completing a course with the exam provider. However, exam preparation can significantly help you understand the format, improve your skills and practise under exam conditions.'
  },
  {
    id: 'f7',
    category: 'General',
    question: 'How should I prepare for a German proficiency exam?',
    answer: 'Preparation should cover all relevant skills: reading, listening, writing and speaking. You should also become familiar with the specific exam format, question types, timing and assessment criteria of your chosen exam.'
  },
  {
    id: 'f8',
    category: 'General',
    question: 'Are Goethe, telc and ÖSD exams difficult?',
    answer: 'The difficulty depends on your current German proficiency and the level you are attempting. Knowing German alone isn\'t enough. Understanding the exam format and practising the required skills can make a significant difference.'
  },
  {
    id: 'f9',
    category: 'General',
    question: 'How long does it take to reach B1 or B2 German?',
    answer: 'There is no fixed timeline because it depends on your starting level, learning pace, previous exposure to German and how consistently you practise. A structured course combined with regular practice can help you progress more efficiently.'
  },
  {
    id: 'f10',
    category: 'General',
    question: 'Can I retake a German language exam if I don\'t pass?',
    answer: 'Yes, you can generally retake an exam, although retake rules and waiting periods can vary depending on the exam provider and examination centre. It is important to check the specific rules before registering again.'
  },
  {
    id: 'f11',
    category: 'General',
    question: 'How long is a German language certificate valid?',
    answer: 'Many German language certificates do not have a general expiry date. However, a university, employer, embassy, immigration authority or other organisation may require a certificate obtained within a particular period. Always check the requirements of the organisation you are applying to.'
  },
  {
    id: 'f12',
    category: 'General',
    question: 'Can GLS help me choose and prepare for my German exam?',
    answer: 'Yes. GLS can help you understand the differences between Goethe, telc and ÖSD, identify the appropriate level for your goals and prepare you for the exam through structured German language and exam preparation.'
  },
  {
    id: 'f13',
    category: 'General',
    question: 'Where can I take Goethe, telc or ÖSD exams?',
    answer: 'Exam availability depends on the exam provider and authorised examination centres. Before booking, make sure the centre is authorised for the specific exam and level you need.'
  },
  {
    id: 'f14',
    category: 'General',
    question: 'Do I need a German certificate for a German visa?',
    answer: 'It depends on the type of visa and your specific purpose for travelling to Germany. Language requirements can vary for study, work, Ausbildung, family reunification and other visa categories.'
  }
];

export const AUSBILDUNG_FAQS: FAQItem[] = [
  {
    id: 'af1',
    category: 'Ausbildung',
    question: 'Who is eligible for Ausbildung in Germany?',
    answer: 'Anyone who has completed 12th grade or an equivalent qualification, has at least B1 level German, and holds a valid passport. There is no strict upper age limit, though most applicants are between 18 and 30.'
  },
  {
    id: 'af2',
    category: 'Ausbildung',
    question: 'Is Ausbildung really tuition free?',
    answer: 'Yes. Ausbildung is a paid training program, not a university course, so there are no tuition fees. You earn a monthly stipend throughout the training instead of paying for it.'
  },
  {
    id: 'af3',
    category: 'Ausbildung',
    question: 'How much can I earn during Ausbildung?',
    answer: 'Stipends vary by sector and year of training, typically ranging from around €1,000 to €1,350 a month, with higher paying sectors like healthcare and IT often at the top of that range.'
  },
  {
    id: 'af4',
    category: 'Ausbildung',
    question: 'How long does Ausbildung take?',
    answer: 'Most programs run between 2 and 3.5 years, depending on the profession and how the training is structured.'
  },
  {
    id: 'af5',
    category: 'Ausbildung',
    question: 'Do I need to already speak German?',
    answer: 'No. If you are starting from zero, GLS trains you from A1 through B1 before you apply, so you meet the language requirement by the time your program begins.'
  },
  {
    id: 'af6',
    category: 'Ausbildung',
    question: 'Can Ausbildung lead to permanent residency?',
    answer: 'Yes. Under German immigration law, Ausbildung graduates who work in their trained field for 2 years and meet pension contribution requirements can apply for a settlement permit, faster than the standard 5-year path.'
  },
  {
    id: 'af7',
    category: 'Ausbildung',
    question: 'What does GLS help with?',
    answer: 'German language training from A1 to B1, Goethe or ÖSD exam preparation, document and application support, and visa assistance from start to finish.'
  },
  {
    id: 'af8',
    category: 'Ausbildung',
    question: 'Is it difficult to get into an Ausbildung program?',
    answer: 'It is competitive but achievable with the right preparation. Strong German skills and a clear, complete application are what make the biggest difference.'
  }
];
