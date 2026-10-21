import { Test, SyllabusChapter, ResourceItem, Announcement, AdmissionEnquiry, TestAttempt, Certificate } from '../types';
import { ALL_CHAPTER_TESTS } from './allChapterTests';

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-1',
    title: 'Admissions Open for Academic Session 2025-2026',
    content: 'Special target batches for CBSE and Bihar Board Class 9 & 10 Mathematics and Science under the personal mentorship of Dipak Sir. Limited seats per batch for individualized attention.',
    category: 'Batch',
    targetBoard: 'All',
    targetClass: 'All',
    isImportant: true,
    isPublished: true,
    date: '2026-10-15'
  },
  {
    id: 'ann-2',
    title: 'Weekly Sunday Mathematics & Science Mock Test Series',
    content: 'Full length mock tests every Sunday following the exact 2026 board examination blueprint with immediate detailed analysis and step-by-step solutions.',
    category: 'Exam',
    targetBoard: 'All',
    targetClass: 'Class 10',
    isImportant: true,
    isPublished: true,
    date: '2026-10-18'
  },
  {
    id: 'ann-3',
    title: 'New Chapter-wise Formula & Concept Handbooks Uploaded',
    content: 'Comprehensive formula sheets for Class 10 Trigonometry, Quadratic Equations, Light Reflection & Refraction, and Carbon Compounds are now available in the Study Materials section.',
    category: 'General',
    targetBoard: 'All',
    targetClass: 'Class 10',
    isImportant: false,
    isPublished: true,
    date: '2026-10-20'
  }
];

export const INITIAL_SYLLABUS: SyllabusChapter[] = [
  // CBSE Class 10 Mathematics
  {
    id: 'cbse-10-math-1',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    chapterNumber: 1,
    title: 'Real Numbers (वास्तविक संख्याएँ)',
    description: 'Fundamental Theorem of Arithmetic, statements after reviewing work done earlier, proof of irrationality of √2, √3, √5.',
    status: 'Completed',
    keyTopics: ['Fundamental Theorem of Arithmetic', 'Irrationality Proofs', 'HCF & LCM Applications']
  },
  {
    id: 'cbse-10-math-2',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    chapterNumber: 2,
    title: 'Polynomials (बहुपद)',
    description: 'Zeroes of a polynomial, relationship between zeroes and coefficients of quadratic polynomials.',
    status: 'Completed',
    keyTopics: ['Geometrical Meaning of Zeroes', 'Relationship of Zeroes and Coefficients', 'Factorization']
  },
  {
    id: 'cbse-10-math-3',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    chapterNumber: 3,
    title: 'Pair of Linear Equations in Two Variables (दो चर वाले रैखिक समीकरण)',
    description: 'Graphical and algebraic methods: substitution, elimination, consistency and inconsistency conditions.',
    status: 'In Progress',
    keyTopics: ['Consistent/Inconsistent Systems', 'Elimination Method', 'Substitution Method', 'Word Problems']
  },
  {
    id: 'cbse-10-math-4',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    chapterNumber: 4,
    title: 'Quadratic Equations (द्विघात समीकरण)',
    description: 'Standard form ax² + bx + c = 0, solutions by factorization and quadratic formula, discriminant and nature of roots.',
    status: 'In Progress',
    keyTopics: ['Quadratic Formula', 'Nature of Roots (D > 0, D = 0, D < 0)', 'Real-life Word Problems']
  },
  {
    id: 'cbse-10-math-5',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    chapterNumber: 5,
    title: 'Arithmetic Progressions (समांतर श्रेढ़ी)',
    description: 'Motivation for studying AP, derivation of nth term and sum of first n terms with everyday applications.',
    status: 'In Progress',
    keyTopics: ['nth Term Formula (an = a + (n-1)d)', 'Sum of n Terms Formula (Sn)', 'Word Problems']
  },
  {
    id: 'cbse-10-math-8',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    chapterNumber: 8,
    title: 'Introduction to Trigonometry (त्रिकोणमिति का परिचय)',
    description: 'Trigonometric ratios of acute angles, values at 0°, 30°, 45°, 60°, 90°, proof and applications of sin²θ + cos²θ = 1.',
    status: 'In Progress',
    keyTopics: ['T-Ratios (sin, cos, tan, cot, sec, cosec)', 'Specific Angle Table', 'Trigonometric Identities']
  },

  // CBSE Class 10 Science
  {
    id: 'cbse-10-sci-1',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Science',
    subCategory: 'Chemistry',
    chapterNumber: 1,
    title: 'Chemical Reactions and Equations (रासायनिक अभिक्रियाएँ एवं समीकरण)',
    description: 'Chemical equation, balanced chemical equation, implications, types: combination, decomposition, displacement, double displacement, oxidation and reduction.',
    status: 'Completed',
    keyTopics: ['Balancing Equations', 'Exothermic & Endothermic', 'Corrosion & Rancidity', 'Redox Reactions']
  },
  {
    id: 'cbse-10-sci-2',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Science',
    subCategory: 'Chemistry',
    chapterNumber: 2,
    title: 'Acids, Bases and Salts (अम्ल, क्षारक एवं लवण)',
    description: 'Definitions in terms of H+ and OH- ions, general properties, examples, pH scale concept, importance of pH in everyday life, preparation of Bleaching Powder, Baking Soda, Washing Soda, Plaster of Paris.',
    status: 'Completed',
    keyTopics: ['pH Scale & Indicators', 'Neutralization Reactions', 'Common Salts & Chemical Compounds', 'Water of Crystallization']
  },
  {
    id: 'cbse-10-sci-6',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Science',
    subCategory: 'Biology',
    chapterNumber: 6,
    title: 'Life Processes (जैव प्रक्रम)',
    description: 'Nutrition (autotrophic & heterotrophic), Respiration (aerobic & anaerobic), Transport in human beings and plants, Excretion in animals and plants.',
    status: 'In Progress',
    keyTopics: ['Human Digestive System', 'Heart & Double Circulation', 'Nephron & Kidney Function', 'Photosynthesis Mechanisms']
  },
  {
    id: 'cbse-10-sci-10',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Science',
    subCategory: 'Physics',
    chapterNumber: 10,
    title: 'Light - Reflection and Refraction (प्रकाश - परावर्तन तथा अपवर्तन)',
    description: 'Reflection of light by curved surfaces, spherical mirrors, center of curvature, principal axis, focal length, mirror formula, magnification, refraction, laws of refraction, refractive index, lens formula.',
    status: 'In Progress',
    keyTopics: ['Ray Diagrams for Mirrors & Lenses', 'Mirror Formula & Sign Convention', 'Snell\'s Law', 'Power of a Lens']
  },
  {
    id: 'cbse-10-sci-12',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Science',
    subCategory: 'Physics',
    chapterNumber: 12,
    title: 'Electricity (विद्युत)',
    description: 'Electric current, potential difference, Ohm\'s law, resistance, factors affecting resistance, series and parallel combination of resistors, heating effect of electric current, electric power.',
    status: 'Not Started',
    keyTopics: ['Ohm\'s Law (V = IR)', 'Series & Parallel Combinations', 'Joule\'s Law of Heating', 'Kilowatt-Hour Units']
  },

  // Bihar Board Class 10 (BSEB)
  {
    id: 'bseb-10-math-1',
    board: 'Bihar Board',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    chapterNumber: 1,
    title: 'वास्तविक संख्याएँ (Real Numbers)',
    description: 'यूक्लिड विभाजन प्रमेयिका, अंकगणित की आधारभूत प्रमेय, अपरिमेय संख्याओं का पुनर्भ्रमण, दशमलव प्रसार।',
    status: 'Completed',
    keyTopics: ['यूक्लिड विभाजन लेम्मा', 'अभाज्य गुणनखंडन', 'सांत एवं असांत आवर्ती दशमलव', 'HCF एवं LCM']
  },
  {
    id: 'bseb-10-math-2',
    board: 'Bihar Board',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    chapterNumber: 2,
    title: 'बहुपद (Polynomials)',
    description: 'बहुपद के शून्यक, द्विघात और त्रिघात बहुपद, विभाजन एल्गोरिथ्म।',
    status: 'Completed',
    keyTopics: ['शून्यकों का योग एवं गुणनफल', 'द्विघात बहुपद निर्माण', 'ग्राफ की प्रकृति']
  },
  {
    id: 'bseb-10-sci-1',
    board: 'Bihar Board',
    classLevel: 'Class 10',
    subject: 'Science',
    subCategory: 'भौतिकी',
    chapterNumber: 1,
    title: 'प्रकाश का परावर्तन तथा अपवर्तन',
    description: 'दर्पण सूत्र, आवर्धन, लेंस सूत्र, अपवर्तनांक और गोलीय दर्पणों के किरण आरेख।',
    status: 'In Progress',
    keyTopics: ['दर्पण सूत्र 1/f = 1/v + 1/u', 'लेंस की क्षमता P = 1/f', 'क्रांतिक कोण एवं पूर्ण आंतरिक परावर्तन']
  },
  {
    id: 'bseb-10-sci-2',
    board: 'Bihar Board',
    classLevel: 'Class 10',
    subject: 'Science',
    subCategory: 'रसायन शास्त्र',
    chapterNumber: 2,
    title: 'अम्ल, क्षारक एवं लवण',
    description: 'लिटमस पत्र, pH पैमाना, विरंजक चूर्ण, बेकिंग सोडा, धावन सोडा और प्लास्टर ऑफ पेरिस का निर्माण।',
    status: 'In Progress',
    keyTopics: ['उदासीनीकरण अभिक्रिया', 'दैनिक जीवन में pH का महत्व', 'क्रिस्टलन का जल']
  },
  {
    id: 'bseb-10-sci-3',
    board: 'Bihar Board',
    classLevel: 'Class 10',
    subject: 'Science',
    subCategory: 'जीव विज्ञान',
    chapterNumber: 3,
    title: 'जैव प्रक्रम (Life Processes)',
    description: 'स्वपोषी एवं विषमपोषी पोषण, मानव हृदय की संरचना, दोहरा परिसंचरण, वृक्काणु (नेफ्रॉन)।',
    status: 'In Progress',
    keyTopics: ['प्रकाश संश्लेषण की कार्यप्रणाली', 'वायवीय एवं अवायवीय श्वसन', 'हृदय की संरचना', 'उत्सर्जन तंत्र']
  }
];

// Official Divya Classes practice test format: 20 Questions, 25 Marks
export const INITIAL_TESTS: Test[] = [
  ...ALL_CHAPTER_TESTS,
  {
    id: 'test-cbse10-math-master',
    title: 'CBSE Class 10 Mathematics Comprehensive Practice Exam',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    chapter: 'Real Numbers, Polynomials & Quadratic Equations',
    testType: 'chapter',
    durationMinutes: 45,
    totalMarks: 25,
    passingMarks: 10,
    language: 'English',
    isPublished: true,
    createdAt: '2026-10-15',
    instructions: [
      'This practice exam contains exactly 20 questions carrying a total of 25 marks.',
      'Section A: Questions 1 to 10 are Multiple Choice Questions carrying 1 mark each.',
      'Section B: Questions 11 to 15 are Assertion-Reason questions carrying 1 mark each.',
      'Section C: Questions 16 to 18 are Short Answer questions carrying 2 marks each.',
      'Section D: Questions 19 to 20 are Long Answer questions carrying 3 marks each.',
      'Use of calculators is strictly prohibited.'
    ],
    questions: [
      {
        id: 1,
        type: 'mcq',
        marks: 1,
        text: 'If HCF(306, 657) = 9, what is the value of LCM(306, 657)?',
        options: ['22338', '22388', '23238', '22838'],
        correctOptionIndex: 0,
        correctAnswer: '22338',
        explanation: 'Formula: LCM × HCF = Product of two numbers. Hence LCM = (306 × 657) / 9 = 22338.'
      },
      {
        id: 2,
        type: 'mcq',
        marks: 1,
        text: 'What is the discriminant of the quadratic equation 2x² - 4x + 3 = 0?',
        options: ['-8', '8', '-16', '16'],
        correctOptionIndex: 0,
        correctAnswer: '-8',
        explanation: 'Discriminant D = b² - 4ac = (-4)² - 4(2)(3) = 16 - 24 = -8. Since D < 0, the equation has no real roots.'
      },
      {
        id: 3,
        type: 'mcq',
        marks: 1,
        text: 'What is the 30th term of the Arithmetic Progression: 10, 7, 4, ...?',
        options: ['-77', '77', '-87', '87'],
        correctOptionIndex: 0,
        correctAnswer: '-77',
        explanation: 'Here a = 10, d = 7 - 10 = -3. a30 = a + (30-1)d = 10 + 29(-3) = 10 - 87 = -77.'
      },
      {
        id: 4,
        type: 'mcq',
        marks: 1,
        text: 'What is the distance of point P(6, -8) from the origin (0, 0)?',
        options: ['10 units', '14 units', '√28 units', '8 units'],
        correctOptionIndex: 0,
        correctAnswer: '10 units',
        explanation: 'Distance from origin = √(x² + y²) = √(6² + (-8)²) = √(36 + 64) = √100 = 10 units.'
      },
      {
        id: 5,
        type: 'mcq',
        marks: 1,
        text: 'If sin θ = 3/5, what is the value of cos θ?',
        options: ['4/5', '5/4', '3/4', '4/3'],
        correctOptionIndex: 0,
        correctAnswer: '4/5',
        explanation: 'cos θ = √(1 - sin²θ) = √(1 - 9/25) = √(16/25) = 4/5.'
      },
      {
        id: 6,
        type: 'mcq',
        marks: 1,
        text: 'How many tangents can be drawn to a circle from an exterior point?',
        options: ['Exactly 2', '1', 'Infinitely many', '0'],
        correctOptionIndex: 0,
        correctAnswer: 'Exactly 2',
        explanation: 'From any point lying outside a circle, exactly two tangents can be drawn to that circle.'
      },
      {
        id: 7,
        type: 'mcq',
        marks: 1,
        text: 'What is the area of a circle whose circumference is 44 cm? (Take π = 22/7)',
        options: ['154 cm²', '44 cm²', '308 cm²', '77 cm²'],
        correctOptionIndex: 0,
        correctAnswer: '154 cm²',
        explanation: '2πr = 44 => r = 7 cm. Area = πr² = (22/7) × 7 × 7 = 154 cm².'
      },
      {
        id: 8,
        type: 'mcq',
        marks: 1,
        text: 'What is the probability of getting a number greater than 4 on rolling a standard 6-sided die?',
        options: ['1/3', '1/2', '2/3', '1/6'],
        correctOptionIndex: 0,
        correctAnswer: '1/3',
        explanation: 'Favorable numbers are 5 and 6 (2 outcomes). Total outcomes = 6. Probability = 2/6 = 1/3.'
      },
      {
        id: 9,
        type: 'mcq',
        marks: 1,
        text: 'Which empirical relationship connects Mean, Median, and Mode?',
        options: ['3 Median = Mode + 2 Mean', '3 Mode = Median + 2 Mean', 'Mode = 3 Mean - 2 Median', 'Median = 3 Mode - 2 Mean'],
        correctOptionIndex: 0,
        correctAnswer: '3 Median = Mode + 2 Mean',
        explanation: 'The standard empirical formula is Mode = 3 Median - 2 Mean, which rearranges to 3 Median = Mode + 2 Mean.'
      },
      {
        id: 10,
        type: 'mcq',
        marks: 1,
        text: 'If lines given by 3x + 2ky = 2 and 2x + 5y + 1 = 0 are parallel, then value of k is:',
        options: ['15/4', '-15/4', '5/3', '3/5'],
        correctOptionIndex: 0,
        correctAnswer: '15/4',
        explanation: 'For parallel lines: a1/a2 = b1/b2 => 3/2 = 2k/5 => 4k = 15 => k = 15/4.'
      },
      {
        id: 11,
        type: 'assertion_reason',
        marks: 1,
        text: 'Assertion (A): √3 is an irrational number.\nReason (R): The square root of any prime number is always irrational.',
        options: [
          'Both A and R are true and R is the correct explanation of A',
          'Both A and R are true but R is not the correct explanation of A',
          'A is true but R is false',
          'A is false but R is true'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Both A and R are true and R is the correct explanation of A',
        explanation: 'Since 3 is a prime number, by the prime theorem √3 is irrational. Reason directly explains Assertion.'
      },
      {
        id: 12,
        type: 'assertion_reason',
        marks: 1,
        text: 'Assertion (A): The distance of the point (3, 4) from the x-axis is 4 units.\nReason (R): The distance of any coordinate (x, y) from the x-axis is equal to its ordinate |y|.',
        options: [
          'Both A and R are true and R is the correct explanation of A',
          'Both A and R are true but R is not the correct explanation of A',
          'A is true but R is false',
          'A is false but R is true'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Both A and R are true and R is the correct explanation of A',
        explanation: 'The perpendicular distance from the x-axis is the magnitude of the y-coordinate, which is 4.'
      },
      {
        id: 13,
        type: 'assertion_reason',
        marks: 1,
        text: 'Assertion (A): sin² 45° + cos² 45° = 1.\nReason (R): For any acute angle θ, sin² θ + cos² θ = 1.',
        options: [
          'Both A and R are true and R is the correct explanation of A',
          'Both A and R are true but R is not the correct explanation of A',
          'A is true but R is false',
          'A is false but R is true'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Both A and R are true and R is the correct explanation of A',
        explanation: 'Trigonometric identity holds for all acute angles, hence R correctly explains why it holds for 45°.'
      },
      {
        id: 14,
        type: 'assertion_reason',
        marks: 1,
        text: 'Assertion (A): If two triangles are congruent, they are always similar.\nReason (R): Similar triangles always have identical perimeter and area.',
        options: [
          'A is true but R is false',
          'Both A and R are true and R is the correct explanation of A',
          'Both A and R are true but R is not the correct explanation of A',
          'A is false but R is true'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'A is true but R is false',
        explanation: 'Congruent triangles are always similar with ratio 1:1, but similar triangles do not necessarily have equal areas.'
      },
      {
        id: 15,
        type: 'assertion_reason',
        marks: 1,
        text: 'Assertion (A): The probability of winning a game is 0.7, so the probability of losing is 0.3.\nReason (R): P(E) + P(not E) = 1 for any complementary events.',
        options: [
          'Both A and R are true and R is the correct explanation of A',
          'Both A and R are true but R is not the correct explanation of A',
          'A is true but R is false',
          'A is false but R is true'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Both A and R are true and R is the correct explanation of A',
        explanation: 'P(not E) = 1 - 0.7 = 0.3 because complementary event probabilities sum to 1.'
      },
      {
        id: 16,
        type: 'short_answer',
        marks: 2,
        text: 'Prove that 3 + 2√5 is an irrational number, given that √5 is irrational.',
        correctAnswer: 'Assume 3 + 2√5 = a/b (where a, b are coprime integers, b ≠ 0). Then 2√5 = a/b - 3 = (a - 3b)/b => √5 = (a - 3b)/(2b). Since a and b are integers, RHS is rational, which contradicts that √5 is irrational. Hence 3 + 2√5 is irrational.',
        explanation: 'Standard proof by contradiction.'
      },
      {
        id: 17,
        type: 'short_answer',
        marks: 2,
        text: 'Find the zeroes of the quadratic polynomial x² + 7x + 10 and verify the relationship between the zeroes and the coefficients.',
        correctAnswer: 'Factorization: x² + 5x + 2x + 10 = (x + 5)(x + 2) = 0. Zeroes are α = -2, β = -5. Verification: Sum = -2 + (-5) = -7 = -b/a. Product = (-2)(-5) = 10 = c/a.',
        explanation: 'Factoring and coefficient sum/product checks.'
      },
      {
        id: 18,
        type: 'short_answer',
        marks: 2,
        text: 'If tan(A + B) = √3 and tan(A - B) = 1/√3, where 0° < A + B ≤ 90° and A > B, find the values of A and B.',
        correctAnswer: 'tan(A + B) = tan 60° => A + B = 60°. tan(A - B) = tan 30° => A - B = 30°. Adding gives 2A = 90° => A = 45°. B = 60° - 45° = 15°.',
        explanation: 'A = 45° and B = 15°.'
      },
      {
        id: 19,
        type: 'long_answer',
        marks: 3,
        text: 'A 1.5 m tall boy stands at some distance from a 30 m tall building. The angle of elevation from his eyes to the top of the building increases from 30° to 60° as he walks towards the building. Find the distance he walked towards the building.',
        correctAnswer: 'Height above boy\'s eye level = 30 - 1.5 = 28.5 m. In first position tan 30° = 28.5/x => x = 28.5√3 m. In second position tan 60° = 28.5/y => y = 28.5/√3 = 9.5√3 m. Distance walked = x - y = 28.5√3 - 9.5√3 = 19√3 meters (≈ 32.9 m).',
        explanation: 'Trigonometric heights and distances calculation.'
      },
      {
        id: 20,
        type: 'long_answer',
        marks: 3,
        text: 'State and prove that the lengths of tangents drawn from an external point to a circle are equal.',
        correctAnswer: 'Given: Circle C(O, r) and external point P with tangents PQ and PR. To prove: PQ = PR. Construction: Join OP, OQ, OR. Proof: In right triangles △OQP and △ORP: OQ = OR (radii), OP = OP (common), ∠OQP = ∠ORP = 90° (tangent perpendicular to radius). By RHS congruence △OQP ≅ △ORP. Therefore PQ = PR (CPCTC).',
        explanation: 'CBSE & BSEB Class 10 Core Circle Theorem (Theorem 10.2).'
      }
    ]
  },
  {
    id: 'test-bseb10-sci-master',
    title: 'बिहार बोर्ड (BSEB) कक्षा 10 विज्ञान मॉडल परीक्षा (भौतिकी, रसायन एवं जीव विज्ञान)',
    board: 'Bihar Board',
    classLevel: 'Class 10',
    subject: 'Science',
    chapter: 'संपूर्ण पाठ्यक्रम (प्रकाश, अम्ल-क्षार, रासायनिक अभिक्रियाएँ, जैव प्रक्रम)',
    testType: 'full_syllabus',
    durationMinutes: 45,
    totalMarks: 25,
    passingMarks: 10,
    language: 'Hindi',
    isPublished: true,
    createdAt: '2026-10-16',
    instructions: [
      'यह परीक्षा बिहार विद्यालय परीक्षा समिति (BSEB) के नए पैटर्न पर आधारित है।',
      'सभी 20 प्रश्न अनिवार्य हैं (कुल 25 अंक)।',
      'वस्तुनिष्ठ प्रश्नों में सही विकल्प चुनकर उत्तर दें।',
      'समय समाप्त होने पर स्वतः जमा हो जाएगा।'
    ],
    questions: [
      {
        id: 1,
        type: 'mcq',
        marks: 1,
        text: 'दाढ़ी बनाने में किस प्रकार के दर्पण का उपयोग किया जाता है?',
        options: ['अवतल दर्पण', 'उत्तल दर्पण', 'समतल दर्पण', 'इनमें से कोई नहीं'],
        correctOptionIndex: 0,
        correctAnswer: 'अवतल दर्पण',
        explanation: 'अवतल दर्पण चेहरे का सीधा और बड़ा आभासी प्रतिबिम्ब बनाता है जब चेहरा ध्रुव और फोकस के बीच होता है।'
      },
      {
        id: 2,
        type: 'mcq',
        marks: 1,
        text: 'प्रकाश के परावर्तन के कितने नियम हैं?',
        options: ['2', '1', '3', '4'],
        correctOptionIndex: 0,
        correctAnswer: '2',
        explanation: 'प्रकाश के परावर्तन के दो नियम हैं: (1) आपतन कोण = परावर्तन कोण, (2) आपतित किरण, परावर्तित किरण और अभिलंब एक ही तल में होते हैं।'
      },
      {
        id: 3,
        type: 'mcq',
        marks: 1,
        text: 'श्वसन किस प्रकार की रासायनिक अभिक्रिया है?',
        options: ['ऊष्माक्षेपी', 'ऊष्माशोषी', 'संयोजन', 'अपचयन'],
        correctOptionIndex: 0,
        correctAnswer: 'ऊष्माक्षेपी',
        explanation: 'श्वसन क्रिया में ग्लूकोज के विखंडन से ऊर्जा (ATP) मुक्त होती है, अतः यह ऊष्माक्षेपी अभिक्रिया है।'
      },
      {
        id: 4,
        type: 'mcq',
        marks: 1,
        text: 'उदासीन विलयन का pH मान कितना होता है?',
        options: ['7', '0', '14', '7 से कम'],
        correctOptionIndex: 0,
        correctAnswer: '7',
        explanation: 'उदासीन विलयन में [H+] = [OH-] = 10^-7 M होता है, जिससे pH = 7 होता है।'
      },
      {
        id: 5,
        type: 'mcq',
        marks: 1,
        text: 'मानव हृदय में कितने कोष्ठ (Chambers) होते हैं?',
        options: ['4', '2', '3', '6'],
        correctOptionIndex: 0,
        correctAnswer: '4',
        explanation: 'मानव हृदय में चार कोष्ठ होते हैं: दायाँ अलिंद, बायाँ अलिंद, दायाँ निलय और बायाँ निलय।'
      },
      {
        id: 6,
        type: 'mcq',
        marks: 1,
        text: 'विद्युत आवेश का SI मात्रक क्या होता है?',
        options: ['कूलॉम (Coulomb)', 'वोल्ट', 'एम्पीयर', 'ओम'],
        correctOptionIndex: 0,
        correctAnswer: 'कूलॉम (Coulomb)',
        explanation: 'आवेश (Q = I × t) का SI मात्रक कूलॉम (C) होता है।'
      },
      {
        id: 7,
        type: 'mcq',
        marks: 1,
        text: 'पादप में जाइलम किसके लिए उत्तरदायी है?',
        options: ['जल का वहन', 'भोजन का वहन', 'अमीनो अम्ल का वहन', 'ऑक्सीजन का वहन'],
        correctOptionIndex: 0,
        correctAnswer: 'जल का वहन',
        explanation: 'जाइलम जड़ों द्वारा अवशोषित जल एवं खनिजों को पौधों के ऊपरी भागों तक पहुँचाता है।'
      },
      {
        id: 8,
        type: 'mcq',
        marks: 1,
        text: 'बैकिंग सोडा का रासायनिक सूत्र क्या है?',
        options: ['NaHCO₃', 'Na₂CO₃·10H₂O', 'Ca(OH)₂', 'NaCl'],
        correctOptionIndex: 0,
        correctAnswer: 'NaHCO₃',
        explanation: 'सोडियम हाइड्रोजन कार्बोनेट (NaHCO₃) को बेकिंग सोडा कहा जाता है।'
      },
      {
        id: 9,
        type: 'mcq',
        marks: 1,
        text: 'लोहे को जिंक से लेपित करने की क्रिया को क्या कहते हैं?',
        options: ['गैल्वनीकरण (यशदलेपन)', 'संक्षारण', 'विद्युत अपघटन', 'पानी चढ़ाना'],
        correctOptionIndex: 0,
        correctAnswer: 'गैल्वनीकरण (यशदलेपन)',
        explanation: 'जंग से बचाने के लिए लोहे पर जिंक की पतली परत चढ़ाने की क्रिया गैल्वनीकरण कहलाती है।'
      },
      {
        id: 10,
        type: 'mcq',
        marks: 1,
        text: 'अमीबा अपना भोजन किसके द्वारा पकड़ता है?',
        options: ['कूटपाद (Pseudopodia)', 'मुख गुहा', 'स्पर्शक', 'सिलिया'],
        correctOptionIndex: 0,
        correctAnswer: 'कूटपाद (Pseudopodia)',
        explanation: 'अमीबा कूटपादों की सहायता से भोजन कण को घेरकर खाद्य रिक्तिका में ग्रहण करता है।'
      },
      {
        id: 11,
        type: 'assertion_reason',
        marks: 1,
        text: 'अभिकथन (A): दूर-दृष्टि दोष (Hypermetropia) के निवारण के लिए उत्तल लेंस का चश्मा लगाया जाता है।\nकारण (R): उत्तल लेंस प्रकाश किरणों को अभिसरित (Converge) करता है।',
        options: [
          'A और R दोनों सही हैं तथा R, A की सही व्याख्या है',
          'A और R दोनों सही हैं परन्तु R, A की सही व्याख्या नहीं है',
          'A सही है परन्तु R गलत है',
          'A गलत है परन्तु R सही है'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'A और R दोनों सही हैं तथा R, A की सही व्याख्या है',
        explanation: 'दूर दृष्टि दोष में प्रतिबिम्ब रेटिना के पीछे बनता है, अतः अभिसारी उत्तल लेंस उसे रेटिना पर केंद्रित करता है।'
      },
      {
        id: 12,
        type: 'assertion_reason',
        marks: 1,
        text: 'अभिकथन (A): नीला लिटमस पत्र हाइड्रोक्लोरिक अम्ल में डालने पर लाल हो जाता है।\nकारण (R): अम्ल जलीय विलयन में हाइड्रोजन आयन (H+) उत्पन्न करते हैं।',
        options: [
          'A और R दोनों सही हैं तथा R, A की सही व्याख्या है',
          'A और R दोनों सही हैं परन्तु R, A की सही व्याख्या नहीं है',
          'A सही है परन्तु R गलत है',
          'A गलत है परन्तु R सही है'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'A और R दोनों सही हैं तथा R, A की सही व्याख्या है',
        explanation: 'अम्लीय गुण H+ आयनों के कारण होता है जिससे नीला लिटमस लाल हो जाता है।'
      },
      {
        id: 13,
        type: 'assertion_reason',
        marks: 1,
        text: 'अभिकथन (A): हमारे शरीर में रक्तदाब धमनियों में शिराओं की अपेक्षा बहुत अधिक होता है।\nकारण (R): हृदय सीधे धमनियों में उच्च दाब से रक्त पंप करता है।',
        options: [
          'A और R दोनों सही हैं तथा R, A की सही व्याख्या है',
          'A और R दोनों सही हैं परन्तु R, A की सही व्याख्या नहीं है',
          'A सही है परन्तु R गलत है',
          'A गलत है परन्तु R सही है'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'A और R दोनों सही हैं तथा R, A की सही व्याख्या है',
        explanation: 'निलय के संकुचन से धमनियों में 120 mmHg का उच्च प्रकुंचन दाब उत्पन्न होता है।'
      },
      {
        id: 14,
        type: 'assertion_reason',
        marks: 1,
        text: 'अभिकथन (A): चांदी (Silver) विद्युत का सर्वोत्तम चालक है।\nकारण (R): चांदी की प्रतिरोधकता (Resistivity) बहुत कम होती है।',
        options: [
          'A और R दोनों सही हैं तथा R, A की सही व्याख्या है',
          'A और R दोनों सही हैं परन्तु R, A की सही व्याख्या नहीं है',
          'A सही है परन्तु R गलत है',
          'A गलत है परन्तु R सही है'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'A और R दोनों सही हैं तथा R, A की सही व्याख्या है',
        explanation: 'कम प्रतिरोधकता के कारण चांदी में मुक्त इलेक्ट्रॉन सुगमता से गति करते हैं।'
      },
      {
        id: 15,
        type: 'assertion_reason',
        marks: 1,
        text: 'अभिकथन (A): सूर्योदय एवं सूर्यास्त के समय सूर्य लाल दिखाई देता है।\nकारण (R): लाल रंग के प्रकाश का प्रकीर्णन (Scattering) सबसे कम होता है।',
        options: [
          'A और R दोनों सही हैं तथा R, A की सही व्याख्या है',
          'A और R दोनों सही हैं परन्तु R, A की सही व्याख्या नहीं है',
          'A सही है परन्तु R गलत है',
          'A गलत है परन्तु R सही है'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'A और R दोनों सही हैं तथा R, A की सही व्याख्या है',
        explanation: 'रैले के प्रकीर्णन नियम अनुसार लाल रंग का तरंगदैर्ध्य अधिक होने से इसका प्रकीर्णन न्यूनतम होता है और यह हमारी आँखों तक पहुँचता है।'
      },
      {
        id: 16,
        type: 'short_answer',
        marks: 2,
        text: 'समतल दर्पण द्वारा बने प्रतिबिम्ब की कोई दो विशेषताएँ लिखिए।',
        correctAnswer: '1. प्रतिबिम्ब सदैव आभासी तथा सीधा होता है। 2. प्रतिबिम्ब का आकार वस्तु के आकार के बराबर होता है तथा यह पाश्र्व-परिवर्तित (Laterally inverted) होता है।',
        explanation: 'समतल दर्पण प्रतिबिम्ब गुणधर्म।'
      },
      {
        id: 17,
        type: 'short_answer',
        marks: 2,
        text: 'संयोजन (Combination) तथा वियोजन (Decomposition) अभिक्रियाओं में एक-एक उदाहरण सहित अंतर स्पष्ट करें।',
        correctAnswer: 'संयोजन: दो या अधिक पदार्थ मिलकर एक नया पदार्थ बनाते हैं (CaO + H₂O → Ca(OH)₂)। वियोजन: एकल अभिकारक टूटकर दो या अधिक उत्पाद बनाता है (CaCO₃ → CaO + CO₂)।',
        explanation: 'रासायनिक अभिक्रियाओं के मुख्य प्रकार।'
      },
      {
        id: 18,
        type: 'short_answer',
        marks: 2,
        text: 'नेफ्रॉन (वृक्काणु) का मुख्य कार्य क्या है?',
        correctAnswer: 'नेफ्रॉन वृक्क की संरचनात्मक एवं क्रियात्मक इकाई है। इसका मुख्य कार्य रुधिर से यूरिया, यूरिक अम्ल जैसे हानिकारक अपशिष्टों को छानकर मूत्र का निर्माण करना और जल एवं लवणों का संतुलन बनाए रखना है।',
        explanation: 'उत्सर्जन तंत्र में नेफ्रॉन का कार्य।'
      },
      {
        id: 19,
        type: 'long_answer',
        marks: 3,
        text: 'ओम का नियम क्या है? इसे सत्यापित करने के लिए आवश्यक परिपथ का आरेख एवं सूत्र V = IR का उल्लेख कीजिए।',
        correctAnswer: 'ओम का नियम: अचर ताप पर किसी चालक से प्रवाहित विद्युत धारा उसके सिरों के विभवांतर के समानुपाती होती है (V ∝ I ⇒ V = IR, जहाँ R प्रतिरोध है)। सत्यापन परिपथ में बैटरी, कुंजी, अमीटर, वोल्टमीटर, प्रतिरोधक एवं धारा-नियंत्रक श्रेणी/समांतर में जुड़े होते हैं।',
        explanation: 'भौतिकी का आधारभूत नियम।'
      },
      {
        id: 20,
        type: 'long_answer',
        marks: 3,
        text: 'मानव पाचन तंत्र में यकृत (Liver) एवं अग्न्याशय (Pancreas) द्वारा स्रावित रसों का क्या महत्व है?',
        correctAnswer: 'यकृत पित्त रस (Bile juice) स्रावित करता है जो आमाशय से आए अम्लीय भोजन को क्षारीय बनाता है तथा वसा का इमल्सीकरण (बड़ी गोलिकाओं को छोटी गोलिकाओं में तोड़ना) करता है। अग्न्याशय अग्न्याशयी रस स्रावित करता है जिसमें प्रोटीन के पाचन के लिए ट्रिप्सिन तथा इमल्सीकृत वसा के पाचन के लिए लाइपेस एंजाइम होते हैं।',
        explanation: 'पाचक ग्रंथियों की भूमिका।'
      }
    ]
  }
];

export const INITIAL_RESOURCES: ResourceItem[] = [
  {
    id: 'res-cbse-sample-2026',
    title: 'CBSE Class 10 Mathematics Official Sample Question Paper 2025-2026',
    description: 'Official CBSE board sample question paper with detailed marking scheme and step-by-step solutions verified by Dipak Sir.',
    category: 'Sample Paper',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    fileUrl: 'https://cbseacademic.nic.in/SQP_CLASSX_2025-26.html',
    fileType: 'pdf',
    fileSize: '1.8 MB',
    isPublished: true,
    downloadCount: 342,
    createdAt: '2026-10-10'
  },
  {
    id: 'res-bseb-sample-2026',
    title: 'Bihar Board Class 10 Matric Science Official Model Paper 2025-2026',
    description: 'BSEB secondary examination model paper with 50% objective OMR questions and short/long subjective questions.',
    category: 'Sample Paper',
    board: 'Bihar Board',
    classLevel: 'Class 10',
    subject: 'Science',
    fileUrl: 'https://secondary.biharboardonline.com/',
    fileType: 'pdf',
    fileSize: '2.1 MB',
    isPublished: true,
    downloadCount: 489,
    createdAt: '2026-10-12'
  },
  {
    id: 'res-math-formulas',
    title: 'Divya Classes Complete Class 10 Maths Formula Handbook',
    description: 'Quick revision formulas, theorems, standard trigonometric values, coordinate geometry formulas, and surface areas.',
    category: 'Formula Sheet',
    board: 'Both',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    fileUrl: '#download-formula',
    fileType: 'pdf',
    fileSize: '840 KB',
    isPublished: true,
    downloadCount: 615,
    createdAt: '2026-10-14'
  },
  {
    id: 'res-sci-notes',
    title: 'Divya Classes Class 10 Light & Life Processes Revision Notes',
    description: 'High-yield conceptual notes prepared by Dipak Sir with clear ray diagrams and human digestive/circulatory system notes.',
    category: 'Notes',
    board: 'Both',
    classLevel: 'Class 10',
    subject: 'Science',
    fileUrl: '#download-notes',
    fileType: 'pdf',
    fileSize: '1.4 MB',
    isPublished: true,
    downloadCount: 520,
    createdAt: '2026-10-15'
  }
];

export const INITIAL_YOUTUBE_VIDEOS = [
  {
    id: 'yt-dipak-sir-lecture',
    title: 'Easy Science by Dipak Sir - Special Classroom Concept & Board Exam Preparation Lecture',
    channel: 'Easy Science by Dipak Sir',
    board: 'CBSE & Bihar Board',
    classLevel: 'Class 10',
    subject: 'Science',
    videoId: 'XpKBMlitiag',
    url: 'https://youtu.be/XpKBMlitiag?si=tMuPo3QEzMnmWIpu',
    description: 'Exclusive classroom lecture by Dipak Sir from Begusarai, Bihar covering core scientific principles, board examination numerical problem solving, and scoring tips for Class 9 & 10.'
  },
  {
    id: 'yt-maths-lecture',
    title: 'Class 10th Maths: Quadratic Equations & Real Numbers (द्विघात समीकरण एवं वास्तविक संख्याएँ)',
    channel: 'Easy Science by Dipak Sir',
    board: 'CBSE & Bihar Board',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    videoId: 'XpKBMlitiag',
    url: 'https://youtu.be/XpKBMlitiag?si=tMuPo3QEzMnmWIpu',
    description: 'Master factorization, quadratic formula derivation, discriminant analysis, and NCERT exemplars with step-by-step methods.'
  },
  {
    id: 'yt-science-physics-lecture',
    title: 'Class 10th Science: Light Reflection & Refraction & Electricity Numericals (प्रकाश एवं विद्युत)',
    channel: 'Easy Science by Dipak Sir',
    board: 'CBSE & Bihar Board',
    classLevel: 'Class 10',
    subject: 'Science',
    videoId: 'XpKBMlitiag',
    url: 'https://youtu.be/XpKBMlitiag?si=tMuPo3QEzMnmWIpu',
    description: 'Learn ray diagrams for concave and convex mirrors without mugging up. Mirror formula, Ohm’s law, and Joule’s law numericals simplified by Dipak Sir.'
  }
];

// Initial realistic admission inquiries for the admin dashboard
export const INITIAL_ADMISSIONS: AdmissionEnquiry[] = [
  {
    id: 'adm-101',
    studentName: 'Aman Kumar',
    phone: '9835123456',
    email: 'aman.begusarai@gmail.com',
    board: 'CBSE',
    classLevel: 'Class 10',
    subjects: ['Mathematics', 'Science'],
    preferredBatch: 'Morning 7:00 AM - 8:30 AM',
    address: 'Near Kali Sthan, Begusarai, Bihar',
    message: 'Seeking coaching for Class 10 CBSE Maths and Science board preparation.',
    status: 'Pending',
    createdAt: '2026-10-19T10:15:00Z'
  },
  {
    id: 'adm-102',
    studentName: 'Priya Kumari',
    phone: '8709456789',
    email: 'priya.bseb@gmail.com',
    board: 'Bihar Board',
    classLevel: 'Class 10',
    subjects: ['Mathematics', 'Science'],
    preferredBatch: 'Evening 4:00 PM - 5:30 PM',
    address: 'Chalki, Begusarai, Bihar',
    message: 'Interested in joining Dipak Sir\'s offline batch at Chalki center.',
    status: 'Contacted',
    notes: 'Called parent on 20 Oct. Confirmed orientation class on Saturday.',
    createdAt: '2026-10-20T14:30:00Z'
  },
  {
    id: 'adm-103',
    studentName: 'Rohit Sharma',
    phone: '9123456780',
    board: 'CBSE',
    classLevel: 'Class 9',
    subjects: ['Mathematics'],
    preferredBatch: 'Evening 5:30 PM - 7:00 PM',
    address: 'Barauni, Begusarai',
    message: 'Want to build strong foundation for Class 9 Maths.',
    status: 'Enrolled',
    notes: 'Registration completed. Roll No assigned: DC-B9-04.',
    createdAt: '2026-10-18T09:00:00Z'
  }
];

// Initial test attempts to populate genuine dashboard metrics
export const INITIAL_ATTEMPTS: TestAttempt[] = [
  {
    id: 'att-1',
    testId: 'test-cbse10-math-master',
    testTitle: 'CBSE Class 10 Mathematics Comprehensive Practice Exam',
    studentId: 'DC-2026-1001',
    studentName: 'Rohan Verma',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    answers: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0 },
    marksObtained: 24,
    totalMarks: 25,
    percentage: 96,
    correctCount: 15,
    incorrectCount: 0,
    unansweredCount: 0,
    status: 'completed',
    submittedAt: '2026-10-18T11:45:00Z'
  },
  {
    id: 'att-2',
    testId: 'test-cbse10-math-master',
    testTitle: 'CBSE Class 10 Mathematics Comprehensive Practice Exam',
    studentId: 'DC-2026-1002',
    studentName: 'Ananya Raj',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    answers: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0 },
    marksObtained: 22,
    totalMarks: 25,
    percentage: 88,
    correctCount: 14,
    incorrectCount: 1,
    unansweredCount: 0,
    status: 'completed',
    submittedAt: '2026-10-19T16:20:00Z'
  },
  {
    id: 'att-3',
    testId: 'test-bseb10-sci-master',
    testTitle: 'बिहार बोर्ड (BSEB) कक्षा 10 विज्ञान मॉडल परीक्षा',
    studentId: 'DC-2026-1003',
    studentName: 'Suman Kumar',
    board: 'Bihar Board',
    classLevel: 'Class 10',
    subject: 'Science',
    answers: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 },
    marksObtained: 21,
    totalMarks: 25,
    percentage: 84,
    correctCount: 13,
    incorrectCount: 2,
    unansweredCount: 0,
    status: 'completed',
    submittedAt: '2026-10-20T10:10:00Z'
  },
  {
    id: 'att-4',
    testId: 'test-bseb10-sci-master',
    testTitle: 'बिहार बोर्ड (BSEB) कक्षा 10 विज्ञान मॉडल परीक्षा',
    studentId: 'DC-2026-1004',
    studentName: 'Nisha Bharti',
    board: 'Bihar Board',
    classLevel: 'Class 10',
    subject: 'Science',
    answers: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    marksObtained: 19,
    totalMarks: 25,
    percentage: 76,
    correctCount: 11,
    incorrectCount: 4,
    unansweredCount: 0,
    status: 'completed',
    submittedAt: '2026-10-20T15:00:00Z'
  },
  {
    id: 'att-5',
    testId: 'test-cbse10-math-master',
    testTitle: 'CBSE Class 10 Mathematics Comprehensive Practice Exam',
    studentId: 'DC-2026-1005',
    studentName: 'Vikram Singh',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    answers: { 1: 0, 2: 0, 3: 0, 4: 0 },
    marksObtained: 18,
    totalMarks: 25,
    percentage: 72,
    correctCount: 10,
    incorrectCount: 5,
    unansweredCount: 0,
    status: 'completed',
    submittedAt: '2026-10-21T08:30:00Z'
  }
];

export const INITIAL_CERTIFICATES: Certificate[] = [
  {
    id: 'CERT-DC-2026-001',
    studentId: 'DC-2026-1001',
    studentName: 'Rohan Verma',
    board: 'CBSE',
    classLevel: 'Class 10',
    title: 'CBSE Class 10 Mathematics Mastery',
    achievement: 'First Rank',
    score: 24,
    totalScore: 25,
    percentage: 96,
    issueDate: '2026-10-18',
    authorizedBy: 'Dipak Kumar (Dipak Sir)',
    verificationCode: 'DIVYA-CERT-96A1'
  },
  {
    id: 'CERT-DC-2026-002',
    studentId: 'DC-2026-1002',
    studentName: 'Ananya Raj',
    board: 'CBSE',
    classLevel: 'Class 10',
    title: 'CBSE Class 10 Mathematics Excellence',
    achievement: 'Second Rank',
    score: 22,
    totalScore: 25,
    percentage: 88,
    issueDate: '2026-10-19',
    authorizedBy: 'Dipak Kumar (Dipak Sir)',
    verificationCode: 'DIVYA-CERT-88B2'
  },
  {
    id: 'CERT-DC-2026-003',
    studentId: 'DC-2026-1003',
    studentName: 'Suman Kumar',
    board: 'Bihar Board',
    classLevel: 'Class 10',
    title: 'BSEB Class 10 Science Monthly Champion',
    achievement: 'Third Rank',
    score: 21,
    totalScore: 25,
    percentage: 84,
    issueDate: '2026-10-20',
    authorizedBy: 'Dipak Kumar (Dipak Sir)',
    verificationCode: 'DIVYA-CERT-84C3'
  }
];
