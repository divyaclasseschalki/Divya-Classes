import { Test } from '../types';

export const ALL_CHAPTER_TESTS: Test[] = [
  // ==========================================
  // MATHEMATICS - CLASS 10 (CBSE & BSEB)
  // ==========================================
  {
    id: 'test-math10-ch1-real-numbers',
    title: 'Class 10 Maths Ch 1: Real Numbers (वास्तविक संख्याएँ)',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    chapter: 'Ch 1: Real Numbers',
    testType: 'chapter',
    durationMinutes: 45,
    totalMarks: 25,
    passingMarks: 10,
    language: 'Bilingual',
    isPublished: true,
    createdAt: '2026-10-18',
    instructions: [
      'This chapter test contains 20 questions carrying 25 total marks.',
      'Questions 1 to 15 are Single-Choice MCQs (1 mark each).',
      'Questions 16 to 18 are Short Answer / Numerical questions (2 marks each).',
      'Questions 19 to 20 are Concept / Application questions (2 marks each).'
    ],
    questions: [
      {
        id: 1,
        type: 'mcq',
        marks: 1,
        text: 'According to Fundamental Theorem of Arithmetic, every composite number can be expressed as a product of:',
        options: ['Primes uniquely except for the order', 'Odd integers only', 'Even integers only', 'Rational numbers only'],
        correctOptionIndex: 0,
        correctAnswer: 'Primes uniquely except for the order',
        explanation: 'The Fundamental Theorem of Arithmetic states that every composite number can be uniquely factored as a product of prime powers, apart from the order in which the prime factors occur.'
      },
      {
        id: 2,
        type: 'mcq',
        marks: 1,
        text: 'If HCF(a, b) = 12 and a × b = 1800, then LCM(a, b) is:',
        options: ['150', '900', '120', '180'],
        correctOptionIndex: 0,
        correctAnswer: '150',
        explanation: 'Formula: HCF(a,b) × LCM(a,b) = a × b. Therefore LCM = 1800 / 12 = 150.'
      },
      {
        id: 3,
        type: 'mcq',
        marks: 1,
        text: 'The decimal expansion of 23 / (2³ × 5²) will terminate after how many decimal places?',
        options: ['1 place', '2 places', '3 places', 'Does not terminate'],
        correctOptionIndex: 2,
        correctAnswer: '3 places',
        explanation: 'The power of 2 in denominator is 3 and of 5 is 2. The maximum exponent between 2 and 5 is max(3, 2) = 3, so it terminates after 3 places.'
      },
      {
        id: 4,
        type: 'mcq',
        marks: 1,
        text: 'Which of the following is an irrational number? (निम्न में से कौन अपरिमेय संख्या है?)',
        options: ['√4', '3 + √5', '√9 / √16', '0.3333...'],
        correctOptionIndex: 1,
        correctAnswer: '3 + √5',
        explanation: 'The sum of a rational number (3) and an irrational number (√5) is always an irrational number.'
      },
      {
        id: 5,
        type: 'mcq',
        marks: 1,
        text: 'The largest number which divides 70 and 125, leaving remainders 5 and 8 respectively, is:',
        options: ['13', '65', '875', '1750'],
        correctOptionIndex: 0,
        correctAnswer: '13',
        explanation: 'Required number = HCF(70 - 5, 125 - 8) = HCF(65, 117). Factors: 65 = 13 × 5 and 117 = 13 × 9. Thus HCF = 13.'
      },
      {
        id: 6,
        type: 'mcq',
        marks: 1,
        text: 'If two positive integers p and q can be expressed as p = ab² and q = a³b; where a, b are prime numbers, then LCM(p, q) is:',
        options: ['ab', 'a²b²', 'a³b²', 'a³b³'],
        correctOptionIndex: 2,
        correctAnswer: 'a³b²',
        explanation: 'LCM is the product of highest power of each prime factor involved: max power of a is 3, max power of b is 2. So LCM = a³b².'
      },
      {
        id: 7,
        type: 'mcq',
        marks: 1,
        text: 'For some integer m, every even integer is of the form:',
        options: ['m', 'm + 1', '2m', '2m + 1'],
        correctOptionIndex: 2,
        correctAnswer: '2m',
        explanation: 'Any integer divisible by 2 is even, hence it is of the form 2m.'
      },
      {
        id: 8,
        type: 'mcq',
        marks: 1,
        text: 'If p is a prime number and p divides a² (where a is a positive integer), then:',
        options: ['p divides a', 'a divides p', 'p² divides a', 'None of these'],
        correctOptionIndex: 0,
        correctAnswer: 'p divides a',
        explanation: 'By fundamental property of primes: if prime p divides a², then p must divide a.'
      },
      {
        id: 9,
        type: 'mcq',
        marks: 1,
        text: 'The exponent of 2 in the prime factorisation of 144 is:',
        options: ['4', '5', '6', '3'],
        correctOptionIndex: 0,
        correctAnswer: '4',
        explanation: '144 = 16 × 9 = 2⁴ × 3². The exponent of 2 is 4.'
      },
      {
        id: 10,
        type: 'mcq',
        marks: 1,
        text: 'HCF of 96 and 404 is:',
        options: ['4', '2', '8', '12'],
        correctOptionIndex: 0,
        correctAnswer: '4',
        explanation: '96 = 2⁵ × 3, 404 = 2² × 101. Common factor with lowest power is 2² = 4.'
      },
      {
        id: 11,
        type: 'assertion_reason',
        marks: 1,
        text: 'Assertion (A): The HCF of two numbers is 5 and their product is 150, then their LCM is 30. \nReason (R): For any two positive integers a and b, HCF(a, b) × LCM(a, b) = a × b.',
        options: [
          'Both A and R are true and R is the correct explanation of A.',
          'Both A and R are true but R is not the correct explanation of A.',
          'A is true but R is false.',
          'A is false but R is true.'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Both A and R are true and R is the correct explanation of A.',
        explanation: 'LCM = Product / HCF = 150 / 5 = 30. Both statement and reason are correct and directly explain each other.'
      },
      {
        id: 12,
        type: 'assertion_reason',
        marks: 1,
        text: 'Assertion (A): √2 is an irrational number. \nReason (R): Square root of any prime number is always an irrational number.',
        options: [
          'Both A and R are true and R is the correct explanation of A.',
          'Both A and R are true but R is not the correct explanation of A.',
          'A is true but R is false.',
          'A is false but R is true.'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Both A and R are true and R is the correct explanation of A.',
        explanation: 'Since 2 is a prime number, √2 is irrational by theorem.'
      },
      {
        id: 13,
        type: 'mcq',
        marks: 1,
        text: 'LCM of the smallest prime number and smallest composite number is:',
        options: ['2', '4', '8', '6'],
        correctOptionIndex: 1,
        correctAnswer: '4',
        explanation: 'Smallest prime number is 2. Smallest composite number is 4. LCM(2, 4) = 4.'
      },
      {
        id: 14,
        type: 'mcq',
        marks: 1,
        text: 'If n is any natural number, then 6ⁿ always ends with which digit?',
        options: ['4', '6', '0', '2'],
        correctOptionIndex: 1,
        correctAnswer: '6',
        explanation: '6¹ = 6, 6² = 36, 6³ = 216... For any n ∈ N, 6ⁿ always terminates with 6.'
      },
      {
        id: 15,
        type: 'mcq',
        marks: 1,
        text: 'What is the sum of exponents of prime factors in the prime-factorisation of 196?',
        options: ['1', '2', '4', '6'],
        correctOptionIndex: 2,
        correctAnswer: '4',
        explanation: '196 = 4 × 49 = 2² × 7². Sum of exponents = 2 + 2 = 4.'
      },
      {
        id: 16,
        type: 'short_answer',
        marks: 2,
        text: 'Find the prime factorisation of 3825 and determine if it has any factor greater than 20.',
        options: ['3² × 5² × 17 (Factor 17 is < 20)', '3³ × 5² × 13', '3 × 5³ × 19', '5² × 7² × 3'],
        correctOptionIndex: 0,
        correctAnswer: '3² × 5² × 17 (Factor 17 is < 20)',
        explanation: '3825 ÷ 9 = 425; 425 ÷ 25 = 17. Hence 3825 = 3² × 5² × 17.'
      },
      {
        id: 17,
        type: 'short_answer',
        marks: 2,
        text: 'If d = HCF(48, 72), find the value of d and write it as a linear combination.',
        options: ['d = 24', 'd = 12', 'd = 48', 'd = 6'],
        correctOptionIndex: 0,
        correctAnswer: 'd = 24',
        explanation: '72 = 48 × 1 + 24; 48 = 24 × 2 + 0. Thus HCF = 24.'
      },
      {
        id: 18,
        type: 'short_answer',
        marks: 2,
        text: 'Find the greatest 4-digit number exactly divisible by 15, 24 and 36.',
        options: ['9720', '9840', '9600', '9900'],
        correctOptionIndex: 0,
        correctAnswer: '9720',
        explanation: 'LCM(15, 24, 36) = 360. Greatest 4-digit number is 9999. 9999 ÷ 360 gives remainder 279. 9999 - 279 = 9720.'
      },
      {
        id: 19,
        type: 'long_answer',
        marks: 2,
        text: 'Explain why 7 × 11 × 13 + 13 and 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5 are composite numbers.',
        options: [
          'Because both have factors other than 1 and themselves (13 and 5 can be factored out)',
          'Because both are odd numbers',
          'Because they are divisible by 2',
          'Because they are irrational'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Because both have factors other than 1 and themselves (13 and 5 can be factored out)',
        explanation: '13(7 × 11 + 1) = 13 × 78 and 5(7 × 6 × 4 × 3 × 2 × 1 + 1) = 5 × 1009. Both have more than two factors, hence composite.'
      },
      {
        id: 20,
        type: 'long_answer',
        marks: 2,
        text: 'Three bells toll at intervals of 9, 12, 15 minutes respectively. If they start tolling together, after what time will they toll together again?',
        options: ['180 minutes (3 hours)', '90 minutes', '60 minutes', '360 minutes'],
        correctOptionIndex: 0,
        correctAnswer: '180 minutes (3 hours)',
        explanation: 'Time = LCM(9, 12, 15) = 180 minutes = 3 hours.'
      }
    ]
  },

  {
    id: 'test-math10-ch2-polynomials',
    title: 'Class 10 Maths Ch 2: Polynomials (बहुपद)',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    chapter: 'Ch 2: Polynomials',
    testType: 'chapter',
    durationMinutes: 45,
    totalMarks: 25,
    passingMarks: 10,
    language: 'Bilingual',
    isPublished: true,
    createdAt: '2026-10-18',
    instructions: [
      '20 Questions • 25 Total Marks • Official Divya Classes Chapter Exam',
      'Test covers zeroes of polynomials, quadratic relations, graph intercepts.'
    ],
    questions: [
      {
        id: 1,
        type: 'mcq',
        marks: 1,
        text: 'If α and β are the zeroes of the quadratic polynomial f(x) = x² - 5x + 6, what is the value of α + β?',
        options: ['5', '-5', '6', '-6'],
        correctOptionIndex: 0,
        correctAnswer: '5',
        explanation: 'For ax² + bx + c = 0, sum of zeroes α + β = -b/a = -(-5)/1 = 5.'
      },
      {
        id: 2,
        type: 'mcq',
        marks: 1,
        text: 'What is the product of zeroes αβ for the polynomial 2x² - 8x + 6?',
        options: ['3', '4', '-3', '6'],
        correctOptionIndex: 0,
        correctAnswer: '3',
        explanation: 'Product of zeroes αβ = c/a = 6/2 = 3.'
      },
      {
        id: 3,
        type: 'mcq',
        marks: 1,
        text: 'A quadratic polynomial whose zeroes are -3 and 4 is:',
        options: ['x² - x - 12', 'x² + x - 12', 'x² - x + 12', 'x² + 7x + 12'],
        correctOptionIndex: 0,
        correctAnswer: 'x² - x - 12',
        explanation: 'P(x) = x² - (α + β)x + αβ = x² - (-3 + 4)x + (-3)(4) = x² - x - 12.'
      },
      {
        id: 4,
        type: 'mcq',
        marks: 1,
        text: 'The number of zeroes that a polynomial of degree n can have at most is:',
        options: ['n', 'n - 1', 'n + 1', '2n'],
        correctOptionIndex: 0,
        correctAnswer: 'n',
        explanation: 'A polynomial of degree n can have at most n real zeroes.'
      },
      {
        id: 5,
        type: 'mcq',
        marks: 1,
        text: 'The graph of y = p(x) intersects the x-axis at 3 distinct points. How many zeroes does p(x) have?',
        options: ['3', '2', '1', '0'],
        correctOptionIndex: 0,
        correctAnswer: '3',
        explanation: 'The number of zeroes is equal to the number of points where the graph intersects the x-axis.'
      },
      {
        id: 6,
        type: 'mcq',
        marks: 1,
        text: 'If one zero of the quadratic polynomial (k - 1)x² + kx + 1 is -3, then the value of k is:',
        options: ['4/3', '-4/3', '2/3', '-2/3'],
        correctOptionIndex: 0,
        correctAnswer: '4/3',
        explanation: 'Substitute x = -3: (k - 1)(-3)² + k(-3) + 1 = 0 => 9(k - 1) - 3k + 1 = 0 => 6k - 8 = 0 => k = 8/6 = 4/3.'
      },
      {
        id: 7,
        type: 'mcq',
        marks: 1,
        text: 'If zeroes of x² + px + q are reciprocal of each other, then:',
        options: ['q = 1', 'p = 1', 'q = -1', 'p = -1'],
        correctOptionIndex: 0,
        correctAnswer: 'q = 1',
        explanation: 'Let zeroes be α and 1/α. Product of zeroes = α × (1/α) = 1. By formula, product = q/1 = q. Thus q = 1.'
      },
      {
        id: 8,
        type: 'mcq',
        marks: 1,
        text: 'What is the degree of the zero polynomial?',
        options: ['Not defined', '0', '1', 'Any natural number'],
        correctOptionIndex: 0,
        correctAnswer: 'Not defined',
        explanation: 'The degree of the zero polynomial 0 is mathematically not defined.'
      },
      {
        id: 9,
        type: 'mcq',
        marks: 1,
        text: 'If α, β are zeroes of x² - 6x + k and 3α + 2β = 20, then k equals:',
        options: ['-16', '16', '-8', '8'],
        correctOptionIndex: 0,
        correctAnswer: '-16',
        explanation: 'α + β = 6. 3α + 2β = 2(α + β) + α = 12 + α = 20 => α = 8. Then β = 6 - 8 = -2. k = αβ = 8 × (-2) = -16.'
      },
      {
        id: 10,
        type: 'mcq',
        marks: 1,
        text: 'The zeroes of quadratic polynomial x² + 99x + 127 are:',
        options: ['Both negative', 'Both positive', 'One positive, one negative', 'Equal'],
        correctOptionIndex: 0,
        correctAnswer: 'Both negative',
        explanation: 'Sum of zeroes = -99 (negative) and product = 127 (positive). Therefore both roots must be negative.'
      },
      {
        id: 11,
        type: 'assertion_reason',
        marks: 1,
        text: 'Assertion (A): The polynomial p(x) = 4x² - 12x + 9 has two equal zeroes. \nReason (R): For a quadratic polynomial ax² + bx + c, if b² - 4ac = 0, zeroes are equal.',
        options: [
          'Both A and R are true and R is the correct explanation of A.',
          'Both A and R are true but R is not the correct explanation of A.',
          'A is true but R is false.',
          'A is false but R is true.'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Both A and R are true and R is the correct explanation of A.',
        explanation: 'Discriminant = (-12)² - 4(4)(9) = 144 - 144 = 0. Roots are equal (3/2, 3/2).'
      },
      {
        id: 12,
        type: 'mcq',
        marks: 1,
        text: 'Value of 1/α + 1/β for ax² + bx + c = 0 is:',
        options: ['-b/c', 'b/c', '-c/b', 'c/a'],
        correctOptionIndex: 0,
        correctAnswer: '-b/c',
        explanation: '1/α + 1/β = (α + β)/(αβ) = (-b/a) / (c/a) = -b/c.'
      },
      {
        id: 13,
        type: 'mcq',
        marks: 1,
        text: 'Find α² + β² if α + β = 5 and αβ = 6.',
        options: ['13', '25', '19', '37'],
        correctOptionIndex: 0,
        correctAnswer: '13',
        explanation: 'α² + β² = (α + β)² - 2αβ = 5² - 2(6) = 25 - 12 = 13.'
      },
      {
        id: 14,
        type: 'mcq',
        marks: 1,
        text: 'If zeroes of ax² + bx + c are equal in magnitude but opposite in sign, then:',
        options: ['b = 0', 'c = 0', 'a = 0', 'b² = 4ac'],
        correctOptionIndex: 0,
        correctAnswer: 'b = 0',
        explanation: 'Let zeroes be α and -α. Sum = α + (-α) = 0. But sum = -b/a. Thus -b/a = 0 => b = 0.'
      },
      {
        id: 15,
        type: 'mcq',
        marks: 1,
        text: 'A cubic polynomial can have at most how many zeroes?',
        options: ['3', '2', '1', '4'],
        correctOptionIndex: 0,
        correctAnswer: '3',
        explanation: 'By the Fundamental Theorem of Algebra, a degree 3 polynomial has at most 3 roots.'
      },
      {
        id: 16,
        type: 'short_answer',
        marks: 2,
        text: 'Find zeroes of 4u² + 8u.',
        options: ['0 and -2', '0 and 2', '-4 and 2', '0 and 8'],
        correctOptionIndex: 0,
        correctAnswer: '0 and -2',
        explanation: '4u(u + 2) = 0 => u = 0 or u = -2.'
      },
      {
        id: 17,
        type: 'short_answer',
        marks: 2,
        text: 'Find zeroes of t² - 15.',
        options: ['√15 and -√15', '15 and -15', '3 and -5', '√15 only'],
        correctOptionIndex: 0,
        correctAnswer: '√15 and -√15',
        explanation: 't² = 15 => t = ±√15.'
      },
      {
        id: 18,
        type: 'short_answer',
        marks: 2,
        text: 'If α and β are zeroes of x² - (k + 6)x + 2(2k - 1) and α + β = αβ/2, find k.',
        options: ['7', '5', '3', '-7'],
        correctOptionIndex: 0,
        correctAnswer: '7',
        explanation: 'α + β = k + 6; αβ = 4k - 2. Given: k + 6 = (4k - 2)/2 = 2k - 1 => k = 7.'
      },
      {
        id: 19,
        type: 'long_answer',
        marks: 2,
        text: 'Form a quadratic polynomial whose zeroes are (3 + √2) and (3 - √2).',
        options: ['x² - 6x + 7', 'x² + 6x + 7', 'x² - 6x - 7', 'x² + 6x - 7'],
        correctOptionIndex: 0,
        correctAnswer: 'x² - 6x + 7',
        explanation: 'Sum = (3 + √2) + (3 - √2) = 6. Product = 3² - (√2)² = 9 - 2 = 7. Formula gives x² - 6x + 7.'
      },
      {
        id: 20,
        type: 'long_answer',
        marks: 2,
        text: 'If zeroes of polynomial x³ - 3x² + x + 1 are a - b, a, a + b, find the value of a.',
        options: ['1', '-1', '2', '3'],
        correctOptionIndex: 0,
        correctAnswer: '1',
        explanation: 'Sum of zeroes = (a - b) + a + (a + b) = 3a = -(-3)/1 = 3 => a = 1.'
      }
    ]
  },

  {
    id: 'test-math10-ch4-quadratic',
    title: 'Class 10 Maths Ch 4: Quadratic Equations (द्विघात समीकरण)',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    chapter: 'Ch 4: Quadratic Equations',
    testType: 'chapter',
    durationMinutes: 45,
    totalMarks: 25,
    passingMarks: 10,
    language: 'Bilingual',
    isPublished: true,
    createdAt: '2026-10-18',
    instructions: [
      '20 Questions • 25 Total Marks • Discriminant D = b² - 4ac, Nature of Roots, Factorization'
    ],
    questions: [
      {
        id: 1,
        type: 'mcq',
        marks: 1,
        text: 'Which of the following is a quadratic equation?',
        options: ['x² + 2x + 1 = (4 - x)² + 3', 'x² - 2x = (-2)(3 - x)', '(x + 1)³ = x³ + 4', 'x(x + 1) + 8 = (x + 2)(x - 2)'],
        correctOptionIndex: 1,
        correctAnswer: 'x² - 2x = (-2)(3 - x)',
        explanation: 'x² - 2x = -6 + 2x => x² - 4x + 6 = 0, which has degree 2.'
      },
      {
        id: 2,
        type: 'mcq',
        marks: 1,
        text: 'The nature of roots of equation 2x² - 3x + 5 = 0 is:',
        options: ['No real roots (imaginary)', 'Two distinct real roots', 'Two equal real roots', 'More than 2 roots'],
        correctOptionIndex: 0,
        correctAnswer: 'No real roots (imaginary)',
        explanation: 'Discriminant D = (-3)² - 4(2)(5) = 9 - 40 = -31 < 0. No real roots.'
      },
      {
        id: 3,
        type: 'mcq',
        marks: 1,
        text: 'For what value of k will the equation 2x² + kx + 3 = 0 have two equal real roots?',
        options: ['±2√6', '±√6', '±4', '±6'],
        correctOptionIndex: 0,
        correctAnswer: '±2√6',
        explanation: 'Equal roots condition: D = b² - 4ac = 0 => k² - 4(2)(3) = 0 => k² = 24 => k = ±√24 = ±2√6.'
      },
      {
        id: 4,
        type: 'mcq',
        marks: 1,
        text: 'The roots of quadratic equation x² - 0.04 = 0 are:',
        options: ['±0.2', '±0.02', '0.4', '±0.04'],
        correctOptionIndex: 0,
        correctAnswer: '±0.2',
        explanation: 'x² = 0.04 => x = ±√0.04 = ±0.2.'
      },
      {
        id: 5,
        type: 'mcq',
        marks: 1,
        text: 'The quadratic formula for solving ax² + bx + c = 0 is:',
        options: ['x = (-b ± √(b² - 4ac)) / (2a)', 'x = (-b ± √(b² + 4ac)) / (2a)', 'x = (b ± √(b² - 4ac)) / (2a)', 'x = -b / (2a)'],
        correctOptionIndex: 0,
        correctAnswer: 'x = (-b ± √(b² - 4ac)) / (2a)',
        explanation: 'Derived by Sridharacharya method: x = (-b ± √(b² - 4ac)) / (2a).'
      },
      {
        id: 6,
        type: 'mcq',
        marks: 1,
        text: 'If 1/2 is a root of the equation x² + kx - 5/4 = 0, then the value of k is:',
        options: ['2', '-2', '1/4', '1/2'],
        correctOptionIndex: 0,
        correctAnswer: '2',
        explanation: '(1/2)² + k(1/2) - 5/4 = 0 => 1/4 + k/2 - 5/4 = 0 => k/2 = 1 => k = 2.'
      },
      {
        id: 7,
        type: 'mcq',
        marks: 1,
        text: 'The sum of a number and its reciprocal is 10/3. What is the number?',
        options: ['3 or 1/3', '2 or 1/2', '4 or 1/4', '5 or 1/5'],
        correctOptionIndex: 0,
        correctAnswer: '3 or 1/3',
        explanation: 'x + 1/x = 10/3 => (x² + 1)/x = 10/3 => 3x² - 10x + 3 = 0 => (3x - 1)(x - 3) = 0 => x = 3 or 1/3.'
      },
      {
        id: 8,
        type: 'mcq',
        marks: 1,
        text: 'If discriminant D > 0 and is a perfect square, roots are:',
        options: ['Real, rational and unequal', 'Real and equal', 'Irrational', 'Imaginary'],
        correctOptionIndex: 0,
        correctAnswer: 'Real, rational and unequal',
        explanation: 'When D > 0 is a perfect square and coefficients are rational, roots are rational and distinct.'
      },
      {
        id: 9,
        type: 'mcq',
        marks: 1,
        text: 'Solve by factorization: √2 x² + 7x + 5√2 = 0.',
        options: ['-5/√2 and -√2', '5/√2 and √2', '-5 and -2', '√2 and -5'],
        correctOptionIndex: 0,
        correctAnswer: '-5/√2 and -√2',
        explanation: 'Product = √2 × 5√2 = 10; sum = 7. Factors are 5 and 2. Roots are -5/√2 and -2/√2 = -√2.'
      },
      {
        id: 10,
        type: 'mcq',
        marks: 1,
        text: 'Find the discriminant of 3x² - 2x + 1/3 = 0.',
        options: ['0', '1', '4', '-4'],
        correctOptionIndex: 0,
        correctAnswer: '0',
        explanation: 'D = (-2)² - 4(3)(1/3) = 4 - 4 = 0.'
      },
      {
        id: 11,
        type: 'assertion_reason',
        marks: 1,
        text: 'Assertion (A): The equation x² + 3x + 1 = (x - 2)² is a quadratic equation. \nReason (R): Any equation of the form ax² + bx + c = 0 where a ≠ 0 is called quadratic.',
        options: [
          'A is false but R is true.',
          'Both A and R are true and R is the correct explanation.',
          'Both A and R are true but R is not explanation.',
          'A is true but R is false.'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'A is false but R is true.',
        explanation: 'x² + 3x + 1 = x² - 4x + 4 => 7x - 3 = 0. The x² term cancels out, so it is a linear equation, not quadratic.'
      },
      {
        id: 12,
        type: 'mcq',
        marks: 1,
        text: 'If the roots of px² + qx + r = 0 are reciprocal, then:',
        options: ['p = r', 'p = q', 'q = r', 'p + r = 0'],
        correctOptionIndex: 0,
        correctAnswer: 'p = r',
        explanation: 'Product of roots = r/p = 1 => p = r.'
      },
      {
        id: 13,
        type: 'mcq',
        marks: 1,
        text: 'The altitude of a right triangle is 7 cm less than its base. If hypotenuse is 13 cm, the base is:',
        options: ['12 cm', '5 cm', '10 cm', '9 cm'],
        correctOptionIndex: 0,
        correctAnswer: '12 cm',
        explanation: 'Let base = b. (b - 7)² + b² = 13² = 169 => 2b² - 14b - 120 = 0 => b² - 7b - 60 = 0 => (b - 12)(b + 5) = 0 => b = 12 cm.'
      },
      {
        id: 14,
        type: 'mcq',
        marks: 1,
        text: 'Number of solutions of equation 2x² - x - 6 = 0 is:',
        options: ['2', '1', '0', 'Infinite'],
        correctOptionIndex: 0,
        correctAnswer: '2',
        explanation: 'Discriminant D = (-1)² - 4(2)(-6) = 49 > 0. Two distinct real solutions.'
      },
      {
        id: 15,
        type: 'mcq',
        marks: 1,
        text: 'Find roots of 100x² - 20x + 1 = 0.',
        options: ['1/10, 1/10', '1/5, 1/5', '-1/10, -1/10', '10, 10'],
        correctOptionIndex: 0,
        correctAnswer: '1/10, 1/10',
        explanation: '(10x - 1)² = 0 => x = 1/10, 1/10.'
      },
      {
        id: 16,
        type: 'short_answer',
        marks: 2,
        text: 'Find two consecutive positive integers whose sum of squares is 365.',
        options: ['13 and 14', '11 and 12', '12 and 13', '14 and 15'],
        correctOptionIndex: 0,
        correctAnswer: '13 and 14',
        explanation: 'x² + (x + 1)² = 365 => 2x² + 2x - 364 = 0 => x² + x - 182 = 0 => (x + 14)(x - 13) = 0 => x = 13.'
      },
      {
        id: 17,
        type: 'short_answer',
        marks: 2,
        text: 'A motor boat whose speed is 18 km/h in still water takes 1 hr more to go 24 km upstream than downstream. Find speed of stream.',
        options: ['6 km/h', '4 km/h', '5 km/h', '8 km/h'],
        correctOptionIndex: 0,
        correctAnswer: '6 km/h',
        explanation: '24/(18 - s) - 24/(18 + s) = 1 => 48s = 324 - s² => s² + 48s - 324 = 0 => (s + 54)(s - 6) = 0 => s = 6 km/h.'
      },
      {
        id: 18,
        type: 'short_answer',
        marks: 2,
        text: 'If roots of equation (b - c)x² + (c - a)x + (a - b) = 0 are equal, prove relationship.',
        options: ['2b = a + c (AP relation)', 'b² = ac', 'a + b + c = 0', 'a = b = c'],
        correctOptionIndex: 0,
        correctAnswer: '2b = a + c (AP relation)',
        explanation: 'Notice x = 1 satisfies the equation because (b - c) + (c - a) + (a - b) = 0. Since roots are equal, both roots must be 1. Product = (a - b)/(b - c) = 1 => a - b = b - c => 2b = a + c.'
      },
      {
        id: 19,
        type: 'long_answer',
        marks: 2,
        text: 'Two water taps together can fill a tank in 9⅜ hours. The larger tap takes 10 hours less than smaller one. Find time taken by smaller tap.',
        options: ['25 hours', '15 hours', '20 hours', '30 hours'],
        correctOptionIndex: 0,
        correctAnswer: '25 hours',
        explanation: '1/t + 1/(t - 10) = 8/75 => (2t - 10)/(t² - 10t) = 8/75 => 8t² - 230t + 750 = 0 => (4t - 15)(t - 25) = 0 => t = 25 hours.'
      },
      {
        id: 20,
        type: 'long_answer',
        marks: 2,
        text: 'Solve for x: 1/(x + 4) - 1/(x - 7) = 11/30 (where x ≠ -4, 7).',
        options: ['1 and 2', '-1 and -2', '3 and 4', '-3 and -4'],
        correctOptionIndex: 0,
        correctAnswer: '1 and 2',
        explanation: '(-7 - 4)/((x + 4)(x - 7)) = 11/30 => -11/(x² - 3x - 28) = 11/30 => x² - 3x - 28 = -30 => x² - 3x + 2 = 0 => (x - 1)(x - 2) = 0 => x = 1, 2.'
      }
    ]
  },

  {
    id: 'test-math10-ch8-trigonometry',
    title: 'Class 10 Maths Ch 8: Introduction to Trigonometry (त्रिकोणमिति)',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    chapter: 'Ch 8: Trigonometry',
    testType: 'chapter',
    durationMinutes: 45,
    totalMarks: 25,
    passingMarks: 10,
    language: 'Bilingual',
    isPublished: true,
    createdAt: '2026-10-18',
    instructions: [
      '20 Questions • 25 Total Marks • T-Ratios, Values of Specific Angles, Identities (sin²θ + cos²θ = 1)'
    ],
    questions: [
      {
        id: 1,
        type: 'mcq',
        marks: 1,
        text: 'If sin θ = 4/5, what is the value of tan θ?',
        options: ['4/3', '3/4', '3/5', '5/4'],
        correctOptionIndex: 0,
        correctAnswer: '4/3',
        explanation: 'Opposite = 4, Hypotenuse = 5, Adjacent = √(5² - 4²) = 3. tan θ = Opposite / Adjacent = 4/3.'
      },
      {
        id: 2,
        type: 'mcq',
        marks: 1,
        text: 'What is the value of (sin² 30° + cos² 30°)?',
        options: ['1', '1/2', '√3/2', '2'],
        correctOptionIndex: 0,
        correctAnswer: '1',
        explanation: 'By the fundamental trigonometric identity, sin²θ + cos²θ = 1 for any angle θ.'
      },
      {
        id: 3,
        type: 'mcq',
        marks: 1,
        text: 'The value of (1 - tan² 45°) / (1 + tan² 45°) is equal to:',
        options: ['0', '1', 'cos 90°', 'Both 0 and cos 90°'],
        correctOptionIndex: 3,
        correctAnswer: 'Both 0 and cos 90°',
        explanation: 'tan 45° = 1, so (1 - 1)/(1 + 1) = 0. Also cos 90° = 0.'
      },
      {
        id: 4,
        type: 'mcq',
        marks: 1,
        text: 'If sec θ + tan θ = x, then sec θ - tan θ is:',
        options: ['1/x', 'x', '-x', 'x²'],
        correctOptionIndex: 0,
        correctAnswer: '1/x',
        explanation: 'Since sec²θ - tan²θ = 1 => (sec θ + tan θ)(sec θ - tan θ) = 1 => sec θ - tan θ = 1/x.'
      },
      {
        id: 5,
        type: 'mcq',
        marks: 1,
        text: 'If cos A = 1/2 and sin B = 1/2, where A and B are acute angles, what is (A + B)?',
        options: ['90°', '60°', '45°', '30°'],
        correctOptionIndex: 0,
        correctAnswer: '90°',
        explanation: 'cos A = 1/2 => A = 60°. sin B = 1/2 => B = 30°. A + B = 60° + 30° = 90°.'
      },
      {
        id: 6,
        type: 'mcq',
        marks: 1,
        text: 'The value of (sin 30° + cos 60° - tan 45°) is:',
        options: ['0', '1', '-1', '1/2'],
        correctOptionIndex: 0,
        correctAnswer: '0',
        explanation: 'sin 30° = 1/2, cos 60° = 1/2, tan 45° = 1. 1/2 + 1/2 - 1 = 1 - 1 = 0.'
      },
      {
        id: 7,
        type: 'mcq',
        marks: 1,
        text: 'Evaluate: 9 sec²A - 9 tan²A = ?',
        options: ['9', '1', '0', '8'],
        correctOptionIndex: 0,
        correctAnswer: '9',
        explanation: '9(sec²A - tan²A) = 9(1) = 9.'
      },
      {
        id: 8,
        type: 'mcq',
        marks: 1,
        text: 'If 15 cot A = 8, then sin A is equal to:',
        options: ['15/17', '8/17', '17/15', '17/8'],
        correctOptionIndex: 0,
        correctAnswer: '15/17',
        explanation: 'cot A = 8/15 => Adjacent = 8, Opposite = 15. Hypotenuse = √(8² + 15²) = 17. sin A = 15/17.'
      },
      {
        id: 9,
        type: 'mcq',
        marks: 1,
        text: 'If sin θ - cos θ = 0, then the value of (sin⁴θ + cos⁴θ) is:',
        options: ['1/2', '1', '3/4', '1/4'],
        correctOptionIndex: 0,
        correctAnswer: '1/2',
        explanation: 'sin θ = cos θ => tan θ = 1 => θ = 45°. sin 45° = 1/√2, cos 45° = 1/√2. (1/√2)⁴ + (1/√2)⁴ = 1/4 + 1/4 = 1/2.'
      },
      {
        id: 10,
        type: 'mcq',
        marks: 1,
        text: 'Which of the following identities is true for 0° < θ < 90°?',
        options: ['1 + cot²θ = cosec²θ', '1 + sec²θ = tan²θ', 'sin²θ - cos²θ = 1', 'cosec²θ - sec²θ = 1'],
        correctOptionIndex: 0,
        correctAnswer: '1 + cot²θ = cosec²θ',
        explanation: 'Standard Pythagorean identity: 1 + cot²θ = cosec²θ.'
      },
      {
        id: 11,
        type: 'assertion_reason',
        marks: 1,
        text: 'Assertion (A): The value of sin θ increases as θ increases from 0° to 90°. \nReason (R): sin 0° = 0 and sin 90° = 1.',
        options: [
          'Both A and R are true and R is the correct explanation of A.',
          'Both A and R are true but R is not the correct explanation.',
          'A is true but R is false.',
          'A is false but R is true.'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Both A and R are true and R is the correct explanation of A.',
        explanation: 'In the first quadrant [0°, 90°], sine is a strictly increasing function from 0 to 1.'
      },
      {
        id: 12,
        type: 'mcq',
        marks: 1,
        text: 'If √3 tan 2θ - 3 = 0, then θ is:',
        options: ['30°', '60°', '45°', '15°'],
        correctOptionIndex: 0,
        correctAnswer: '30°',
        explanation: 'tan 2θ = 3/√3 = √3 => 2θ = 60° => θ = 30°.'
      },
      {
        id: 13,
        type: 'mcq',
        marks: 1,
        text: 'Simplify: (sec A + tan A)(1 - sin A) = ?',
        options: ['cos A', 'sin A', 'sec A', 'cosec A'],
        correctOptionIndex: 0,
        correctAnswer: 'cos A',
        explanation: '(1/cos A + sin A/cos A)(1 - sin A) = (1 + sin A)(1 - sin A) / cos A = (1 - sin²A) / cos A = cos²A / cos A = cos A.'
      },
      {
        id: 14,
        type: 'mcq',
        marks: 1,
        text: 'If tan θ = a/b, then (a sin θ - b cos θ) / (a sin θ + b cos θ) is:',
        options: ['(a² - b²) / (a² + b²)', '(a² + b²) / (a² - b²)', 'a / b', 'b / a'],
        correctOptionIndex: 0,
        correctAnswer: '(a² - b²) / (a² + b²)',
        explanation: 'Divide numerator and denominator by cos θ: (a tan θ - b) / (a tan θ + b) = (a(a/b) - b) / (a(a/b) + b) = (a² - b²) / (a² + b²).'
      },
      {
        id: 15,
        type: 'mcq',
        marks: 1,
        text: 'If triangle ABC is right-angled at C, then the value of cos(A + B) is:',
        options: ['0', '1', '1/2', '√3/2'],
        correctOptionIndex: 0,
        correctAnswer: '0',
        explanation: 'In right triangle ABC, A + B + C = 180°. Since C = 90°, A + B = 90°. cos 90° = 0.'
      },
      {
        id: 16,
        type: 'short_answer',
        marks: 2,
        text: 'Prove that: (1 + tan²A)/(1 + cot²A) is equal to:',
        options: ['tan²A', 'cot²A', 'sec²A', '1'],
        correctOptionIndex: 0,
        correctAnswer: 'tan²A',
        explanation: 'sec²A / cosec²A = (1/cos²A) / (1/sin²A) = sin²A / cos²A = tan²A.'
      },
      {
        id: 17,
        type: 'short_answer',
        marks: 2,
        text: 'If sin(A - B) = 1/2 and cos(A + B) = 1/2, find A and B.',
        options: ['A = 45°, B = 15°', 'A = 60°, B = 30°', 'A = 50°, B = 20°', 'A = 40°, B = 10°'],
        correctOptionIndex: 0,
        correctAnswer: 'A = 45°, B = 15°',
        explanation: 'A - B = 30° and A + B = 60°. Adding: 2A = 90° => A = 45°, B = 15°.'
      },
      {
        id: 18,
        type: 'short_answer',
        marks: 2,
        text: 'Express cos θ in terms of cot θ.',
        options: ['cot θ / √(1 + cot²θ)', '√(1 + cot²θ) / cot θ', '1 / √(1 + cot²θ)', 'cot θ'],
        correctOptionIndex: 0,
        correctAnswer: 'cot θ / √(1 + cot²θ)',
        explanation: 'cos θ = cot θ × sin θ = cot θ / cosec θ = cot θ / √(1 + cot²θ).'
      },
      {
        id: 19,
        type: 'long_answer',
        marks: 2,
        text: 'Simplify: √((1 + sin A)/(1 - sin A)).',
        options: ['sec A + tan A', 'sec A - tan A', 'cosec A + cot A', '1 + sin A'],
        correctOptionIndex: 0,
        correctAnswer: 'sec A + tan A',
        explanation: 'Multiply numerator and denominator by (1 + sin A): √((1 + sin A)² / cos²A) = (1 + sin A)/cos A = sec A + tan A.'
      },
      {
        id: 20,
        type: 'long_answer',
        marks: 2,
        text: 'If cosec θ - cot θ = q, find the value of cosec θ.',
        options: ['(q² + 1) / (2q)', '(q² - 1) / (2q)', '2q / (q² + 1)', 'q + 1'],
        correctOptionIndex: 0,
        correctAnswer: '(q² + 1) / (2q)',
        explanation: 'cosec θ + cot θ = 1/q. Adding the two equations: 2 cosec θ = q + 1/q = (q² + 1)/q => cosec θ = (q² + 1)/(2q).'
      }
    ]
  },

  // ==========================================
  // SCIENCE: CHEMISTRY (CLASS 10)
  // ==========================================
  {
    id: 'test-sci10-chem-ch1',
    title: 'Class 10 Science Ch 1: Chemical Reactions & Equations (रासायनिक अभिक्रियाएँ)',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Science',
    chapter: 'Ch 1: Chemical Reactions & Equations',
    testType: 'chapter',
    durationMinutes: 45,
    totalMarks: 25,
    passingMarks: 10,
    language: 'Bilingual',
    isPublished: true,
    createdAt: '2026-10-18',
    instructions: [
      '20 Questions • 25 Total Marks • Balanced Equations, Combination, Decomposition, Redox, Corrosion'
    ],
    questions: [
      {
        id: 1,
        type: 'mcq',
        marks: 1,
        text: 'Which gas is released when dilute hydrochloric acid is added to zinc granules?',
        options: ['Hydrogen gas', 'Oxygen gas', 'Carbon dioxide gas', 'Nitrogen dioxide gas'],
        correctOptionIndex: 0,
        correctAnswer: 'Hydrogen gas',
        explanation: 'Zn + 2HCl → ZnCl₂ + H₂↑. Hydrogen gas burns with a pop sound when tested with a burning splinter.'
      },
      {
        id: 2,
        type: 'mcq',
        marks: 1,
        text: 'What type of reaction is the respiration process?',
        options: ['Exothermic reaction', 'Endothermic reaction', 'Combination reaction', 'Photochemical reaction'],
        correctOptionIndex: 0,
        correctAnswer: 'Exothermic reaction',
        explanation: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy. Energy is released, hence respiration is exothermic.'
      },
      {
        id: 3,
        type: 'mcq',
        marks: 1,
        text: 'In the reaction: CuO + H₂ → Cu + H₂O, the substance oxidized is:',
        options: ['H₂', 'CuO', 'Cu', 'H₂O'],
        correctOptionIndex: 0,
        correctAnswer: 'H₂',
        explanation: 'H₂ gains oxygen to form H₂O, so H₂ is oxidized. CuO loses oxygen to become Cu, so CuO is reduced.'
      },
      {
        id: 4,
        type: 'mcq',
        marks: 1,
        text: 'When lead nitrate Pb(NO₃)₂ crystals are heated strongly in a dry test tube, the brown gas evolved is:',
        options: ['Nitrogen dioxide (NO₂)', 'Nitrous oxide (N₂O)', 'Oxygen (O₂)', 'Nitrogen (N₂)'],
        correctOptionIndex: 0,
        correctAnswer: 'Nitrogen dioxide (NO₂)',
        explanation: '2Pb(NO₃)₂ → 2PbO + 4NO₂↑ (brown fumes) + O₂↑.'
      },
      {
        id: 5,
        type: 'mcq',
        marks: 1,
        text: 'The chemical formula of marble (संगमरमर) and limestone is:',
        options: ['CaCO₃', 'CaO', 'Ca(OH)₂', 'CaCl₂'],
        correctOptionIndex: 0,
        correctAnswer: 'CaCO₃',
        explanation: 'Calcium carbonate (CaCO₃) is the chemical compound that makes up limestone and marble.'
      },
      {
        id: 6,
        type: 'mcq',
        marks: 1,
        text: 'Chips manufacturers usually flush bags of chips with gas such as ________ to prevent the chips from getting oxidised:',
        options: ['Nitrogen', 'Oxygen', 'Carbon monoxide', 'Chlorine'],
        correctOptionIndex: 0,
        correctAnswer: 'Nitrogen',
        explanation: 'Nitrogen is an unreactive antioxidant gas that prevents fats and oils in chips from rancidity.'
      },
      {
        id: 7,
        type: 'mcq',
        marks: 1,
        text: 'In electrolysis of water, the volume ratio of hydrogen and oxygen gases collected is:',
        options: ['2 : 1', '1 : 2', '1 : 1', '8 : 1'],
        correctOptionIndex: 0,
        correctAnswer: '2 : 1',
        explanation: 'Water molecule H₂O contains 2 parts hydrogen to 1 part oxygen. Thus 2 volumes of H₂ are evolved at cathode per 1 volume of O₂ at anode.'
      },
      {
        id: 8,
        type: 'mcq',
        marks: 1,
        text: 'Which of the following is a displacement reaction?',
        options: ['Fe + CuSO₄ → FeSO₄ + Cu', 'CaO + H₂O → Ca(OH)₂', '2KClO₃ → 2KCl + 3O₂', 'NaOH + HCl → NaCl + H₂O'],
        correctOptionIndex: 0,
        correctAnswer: 'Fe + CuSO₄ → FeSO₄ + Cu',
        explanation: 'Iron is more reactive than copper and displaces copper from copper sulfate solution.'
      },
      {
        id: 9,
        type: 'mcq',
        marks: 1,
        text: 'Barium chloride reacts with sodium sulfate to form a white precipitate of:',
        options: ['Barium sulfate (BaSO₄)', 'Sodium chloride (NaCl)', 'Barium sulfite (BaSO₃)', 'Sodium sulfate'],
        correctOptionIndex: 0,
        correctAnswer: 'Barium sulfate (BaSO₄)',
        explanation: 'BaCl₂ + Na₂SO₄ → BaSO₄↓ (white precipitate) + 2NaCl.'
      },
      {
        id: 10,
        type: 'mcq',
        marks: 1,
        text: 'Slaked lime is prepared by adding water to quicklime. Quicklime is chemically:',
        options: ['Calcium oxide (CaO)', 'Calcium carbonate (CaCO₃)', 'Calcium hydroxide (Ca(OH)₂)', 'Calcium sulfate'],
        correctOptionIndex: 0,
        correctAnswer: 'Calcium oxide (CaO)',
        explanation: 'CaO (quicklime) + H₂O → Ca(OH)₂ (slaked lime) + Heat.'
      },
      {
        id: 11,
        type: 'assertion_reason',
        marks: 1,
        text: 'Assertion (A): Silver chloride turns grey when exposed to sunlight. \nReason (R): Decomposition of silver chloride into silver and chlorine occurs by sunlight (photolysis).',
        options: [
          'Both A and R are true and R is the correct explanation of A.',
          'Both A and R are true but R is not the correct explanation.',
          'A is true but R is false.',
          'A is false but R is true.'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Both A and R are true and R is the correct explanation of A.',
        explanation: '2AgCl(s) --[sunlight]--> 2Ag(s) (grey) + Cl₂(g). Used in black and white photography.'
      },
      {
        id: 12,
        type: 'mcq',
        marks: 1,
        text: 'Corrosion of iron is commonly called rusting. Rust chemically is:',
        options: ['Hydrated ferric oxide (Fe₂O₃·xH₂O)', 'Ferrous oxide (FeO)', 'Magnetic iron oxide (Fe₃O₄)', 'Ferric carbonate'],
        correctOptionIndex: 0,
        correctAnswer: 'Hydrated ferric oxide (Fe₂O₃·xH₂O)',
        explanation: 'Rust is hydrated iron(III) oxide Fe₂O₃·xH₂O formed in the presence of air and moisture.'
      },
      {
        id: 13,
        type: 'mcq',
        marks: 1,
        text: 'What change is observed in the color of copper sulfate solution when iron nail is immersed in it for 30 minutes?',
        options: ['Blue changes to light green', 'Blue changes to colourless', 'Blue changes to deep brown', 'No change'],
        correctOptionIndex: 0,
        correctAnswer: 'Blue changes to light green',
        explanation: 'CuSO₄ (blue) is converted into FeSO₄ (light green) and reddish-brown copper deposits on the iron nail.'
      },
      {
        id: 14,
        type: 'mcq',
        marks: 1,
        text: 'Which of the following is not a physical change?',
        options: ['Combustion of Liquefied Petroleum Gas (LPG)', 'Boiling of water to give water vapour', 'Melting of ice to give water', 'Dissolution of salt in water'],
        correctOptionIndex: 0,
        correctAnswer: 'Combustion of Liquefied Petroleum Gas (LPG)',
        explanation: 'Burning LPG involves a chemical reaction producing CO₂, water, and heat.'
      },
      {
        id: 15,
        type: 'mcq',
        marks: 1,
        text: 'A balanced chemical equation obeys which law of nature?',
        options: ['Law of conservation of mass', 'Law of multiple proportions', 'Avogadro\'s law', 'Law of constant composition'],
        correctOptionIndex: 0,
        correctAnswer: 'Law of conservation of mass',
        explanation: 'Matter cannot be created nor destroyed in a chemical reaction; total mass of reactants = total mass of products.'
      },
      {
        id: 16,
        type: 'short_answer',
        marks: 2,
        text: 'Balance the following chemical equation: Fe + H₂O → Fe₃O₄ + H₂. What is the coefficient of H₂O?',
        options: ['4', '3', '2', '1'],
        correctOptionIndex: 0,
        correctAnswer: '4',
        explanation: 'Balanced: 3Fe + 4H₂O → Fe₃O₄ + 4H₂. The coefficient of H₂O is 4.'
      },
      {
        id: 17,
        type: 'short_answer',
        marks: 2,
        text: 'Identify the oxidizing agent in: H₂S + Cl₂ → 2HCl + S.',
        options: ['Cl₂', 'H₂S', 'HCl', 'S'],
        correctOptionIndex: 0,
        correctAnswer: 'Cl₂',
        explanation: 'Cl₂ removes hydrogen from H₂S (oxidizing H₂S to S) and itself gets reduced to HCl. Hence Cl₂ is the oxidizing agent.'
      },
      {
        id: 18,
        type: 'short_answer',
        marks: 2,
        text: 'Why does the color of ferrous sulfate crystals (FeSO₄·7H₂O) change on heating?',
        options: ['Because it loses water of crystallization to become anhydrous FeSO₄ (white), then decomposes to Fe₂O₃ (brown)', 'Because it absorbs nitrogen', 'Because it melts completely', 'None of these'],
        correctOptionIndex: 0,
        correctAnswer: 'Because it loses water of crystallization to become anhydrous FeSO₄ (white), then decomposes to Fe₂O₃ (brown)',
        explanation: 'Green crystals lose 7H₂O to turn white, and then decompose: 2FeSO₄ → Fe₂O₃ + SO₂ + SO₃.'
      },
      {
        id: 19,
        type: 'long_answer',
        marks: 2,
        text: 'Explain why potato chips manufacturers flush bags of chips with nitrogen gas.',
        options: ['To prevent oxidation and rancidity of oil and fat content', 'To make chips crispy', 'To increase chip weight', 'To add salty taste'],
        correctOptionIndex: 0,
        correctAnswer: 'To prevent oxidation and rancidity of oil and fat content',
        explanation: 'Fats and oils when oxidized become rancid, altering their smell and taste. Nitrogen creates an inert atmosphere preventing oxidation.'
      },
      {
        id: 20,
        type: 'long_answer',
        marks: 2,
        text: 'A shiny brown-colored element "X" on heating in air becomes black in color. Name the element "X" and black compound formed.',
        options: ['X is Copper (Cu) and black compound is Copper(II) oxide (CuO)', 'X is Iron and compound is FeO', 'X is Carbon and compound is CO₂', 'X is Silver and compound is Ag₂S'],
        correctOptionIndex: 0,
        correctAnswer: 'X is Copper (Cu) and black compound is Copper(II) oxide (CuO)',
        explanation: '2Cu + O₂ → 2CuO (black coating).'
      }
    ]
  },

  // ==========================================
  // SCIENCE: PHYSICS (CLASS 10)
  // ==========================================
  {
    id: 'test-sci10-phy-ch10-light',
    title: 'Class 10 Science Ch 10: Light - Reflection and Refraction (प्रकाश)',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Science',
    chapter: 'Ch 10: Light - Reflection & Refraction',
    testType: 'chapter',
    durationMinutes: 45,
    totalMarks: 25,
    passingMarks: 10,
    language: 'Bilingual',
    isPublished: true,
    createdAt: '2026-10-18',
    instructions: [
      '20 Questions • 25 Total Marks • Ray Diagrams, Mirror Formula, Snell’s Law, Power of Lens'
    ],
    questions: [
      {
        id: 1,
        type: 'mcq',
        marks: 1,
        text: 'The focal length of a spherical mirror of radius of curvature 30 cm is:',
        options: ['15 cm', '30 cm', '60 cm', '10 cm'],
        correctOptionIndex: 0,
        correctAnswer: '15 cm',
        explanation: 'f = R / 2 = 30 / 2 = 15 cm.'
      },
      {
        id: 2,
        type: 'mcq',
        marks: 1,
        text: 'Which mirror is used by dentists to see large images of teeth of patients?',
        options: ['Concave mirror', 'Convex mirror', 'Plane mirror', 'Cylindrical mirror'],
        correctOptionIndex: 0,
        correctAnswer: 'Concave mirror',
        explanation: 'A concave mirror produces an erect, magnified virtual image when the object is held between focus and pole.'
      },
      {
        id: 3,
        type: 'mcq',
        marks: 1,
        text: 'Which mirror is used as a rear-view mirror in vehicles?',
        options: ['Convex mirror', 'Concave mirror', 'Plane mirror', 'Parabolic mirror'],
        correctOptionIndex: 0,
        correctAnswer: 'Convex mirror',
        explanation: 'Convex mirrors always give an erect, diminished image and provide a wider field of view.'
      },
      {
        id: 4,
        type: 'mcq',
        marks: 1,
        text: 'The mirror formula relating object distance u, image distance v and focal length f is:',
        options: ['1/f = 1/v + 1/u', '1/f = 1/v - 1/u', 'f = u + v', 'v/u = 1/f'],
        correctOptionIndex: 0,
        correctAnswer: '1/f = 1/v + 1/u',
        explanation: 'Standard mirror formula: 1/f = 1/v + 1/u.'
      },
      {
        id: 5,
        type: 'mcq',
        marks: 1,
        text: 'The unit of power of a lens is:',
        options: ['Dioptre (D)', 'Watt (W)', 'Metre (m)', 'Candela (cd)'],
        correctOptionIndex: 0,
        correctAnswer: 'Dioptre (D)',
        explanation: 'Power of a lens P = 1 / f (in metres), measured in Dioptres (D).'
      },
      {
        id: 6,
        type: 'mcq',
        marks: 1,
        text: 'A convex lens of focal length 50 cm has a power of:',
        options: ['+2 D', '-2 D', '+0.5 D', '+5 D'],
        correctOptionIndex: 0,
        correctAnswer: '+2 D',
        explanation: 'P = 1 / f(m) = 1 / 0.5 = +2 D. Convex lens has positive power.'
      },
      {
        id: 7,
        type: 'mcq',
        marks: 1,
        text: 'Snell\'s law of refraction is represented by:',
        options: ['sin i / sin r = constant (refractive index n)', 'sin i × sin r = constant', 'cos i / cos r = constant', 'tan i / tan r = constant'],
        correctOptionIndex: 0,
        correctAnswer: 'sin i / sin r = constant (refractive index n)',
        explanation: 'The ratio of sine of angle of incidence to sine of angle of refraction is constant for a given pair of media.'
      },
      {
        id: 8,
        type: 'mcq',
        marks: 1,
        text: 'The refractive index of glass with respect to air is 1.5. The speed of light in glass is: (Speed in air = 3 × 10⁸ m/s)',
        options: ['2.0 × 10⁸ m/s', '1.5 × 10⁸ m/s', '3.0 × 10⁸ m/s', '2.5 × 10⁸ m/s'],
        correctOptionIndex: 0,
        correctAnswer: '2.0 × 10⁸ m/s',
        explanation: 'v = c / n = (3 × 10⁸) / 1.5 = 2.0 × 10⁸ m/s.'
      },
      {
        id: 9,
        type: 'mcq',
        marks: 1,
        text: 'Magnification produced by a rear view mirror fitted in vehicles:',
        options: ['Is always less than 1', 'Is always more than 1', 'Is equal to 1', 'Can be more or less than 1'],
        correctOptionIndex: 0,
        correctAnswer: 'Is always less than 1',
        explanation: 'A convex mirror always produces a diminished image, so |m| < 1.'
      },
      {
        id: 10,
        type: 'mcq',
        marks: 1,
        text: 'Where should an object be placed in front of a convex lens to get a real image of the size of the object?',
        options: ['At 2F₁ (twice the focal length)', 'At the principal focus', 'At infinity', 'Between optical centre and focus'],
        correctOptionIndex: 0,
        correctAnswer: 'At 2F₁ (twice the focal length)',
        explanation: 'When placed at 2F, the real, inverted image is formed at 2F on the opposite side with the same size (m = -1).'
      },
      {
        id: 11,
        type: 'assertion_reason',
        marks: 1,
        text: 'Assertion (A): A ray of light passing through the optical centre of a lens emerges without any deviation. \nReason (R): Optical centre is the central point of the lens through which rays suffer zero deviation.',
        options: [
          'Both A and R are true and R is the correct explanation of A.',
          'Both A and R are true but R is not the correct explanation.',
          'A is true but R is false.',
          'A is false but R is true.'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Both A and R are true and R is the correct explanation of A.',
        explanation: 'By optical definition of thin lenses, a central ray passes straight through.'
      },
      {
        id: 12,
        type: 'mcq',
        marks: 1,
        text: 'A concave lens always forms an image which is:',
        options: ['Virtual, erect and diminished', 'Real, inverted and enlarged', 'Real, inverted and diminished', 'Virtual, erect and enlarged'],
        correctOptionIndex: 0,
        correctAnswer: 'Virtual, erect and diminished',
        explanation: 'A diverging (concave) lens always creates a virtual, erect, and diminished image.'
      },
      {
        id: 13,
        type: 'mcq',
        marks: 1,
        text: 'If the power of a lens is -4.0 D, its focal length and nature are:',
        options: ['-25 cm, concave lens', '+25 cm, convex lens', '-40 cm, concave lens', '+40 cm, convex lens'],
        correctOptionIndex: 0,
        correctAnswer: '-25 cm, concave lens',
        explanation: 'f = 1 / P = 1 / (-4) = -0.25 m = -25 cm. Negative sign indicates a concave lens.'
      },
      {
        id: 14,
        type: 'mcq',
        marks: 1,
        text: 'Light enters from air into diamond with refractive index 2.42. The percentage decrease in speed of light in diamond compared to vacuum is approximately:',
        options: ['58.7%', '24.2%', '41.3%', '75.8%'],
        correctOptionIndex: 0,
        correctAnswer: '58.7%',
        explanation: 'Speed in diamond = c / 2.42 ≈ 0.413c. Percentage drop = (1 - 0.413) × 100% ≈ 58.7%.'
      },
      {
        id: 15,
        type: 'mcq',
        marks: 1,
        text: 'When a ray travels from water (optically denser) to air (optically rarer), it bends:',
        options: ['Away from the normal', 'Towards the normal', 'Passes straight', 'Reflects back at 90°'],
        correctOptionIndex: 0,
        correctAnswer: 'Away from the normal',
        explanation: 'When moving from denser to rarer medium, light speeds up and bends away from normal.'
      },
      {
        id: 16,
        type: 'short_answer',
        marks: 2,
        text: 'An object is placed at a distance of 10 cm in front of a concave mirror of focal length 15 cm. Find image distance and nature.',
        options: ['v = +30 cm (Virtual and erect)', 'v = -30 cm (Real and inverted)', 'v = +15 cm', 'v = -6 cm'],
        correctOptionIndex: 0,
        correctAnswer: 'v = +30 cm (Virtual and erect)',
        explanation: '1/v = 1/f - 1/u = 1/(-15) - 1/(-10) = -1/15 + 1/10 = 1/30 => v = +30 cm. Positive v means virtual and erect image behind the mirror.'
      },
      {
        id: 17,
        type: 'short_answer',
        marks: 2,
        text: 'Two thin lenses of powers +3.5 D and -1.5 D are placed in contact. Find the power and focal length of the combination.',
        options: ['P = +2.0 D, f = +50 cm', 'P = +5.0 D, f = +20 cm', 'P = -2.0 D, f = -50 cm', 'P = +2.0 D, f = +20 cm'],
        correctOptionIndex: 0,
        correctAnswer: 'P = +2.0 D, f = +50 cm',
        explanation: 'Total power P = P₁ + P₂ = 3.5 - 1.5 = +2.0 D. Focal length f = 1/P = 1/2 m = 50 cm.'
      },
      {
        id: 18,
        type: 'short_answer',
        marks: 2,
        text: 'State the laws of reflection of light.',
        options: ['Angle of incidence equals angle of reflection (∠i = ∠r); incident ray, reflected ray and normal lie in same plane', 'Angle of incidence is double the angle of reflection', 'Light travels in curved path', 'Reflected ray bends towards normal'],
        correctOptionIndex: 0,
        correctAnswer: 'Angle of incidence equals angle of reflection (∠i = ∠r); incident ray, reflected ray and normal lie in same plane',
        explanation: 'Fundamental laws of reflection.'
      },
      {
        id: 19,
        type: 'long_answer',
        marks: 2,
        text: 'An object 5 cm in length is held 25 cm away from a converging lens of focal length 10 cm. Find position, size and nature of the image.',
        options: ['v = 16.67 cm, size = -3.33 cm (Real, inverted and diminished)', 'v = 20 cm, size = 5 cm', 'v = 50 cm, size = 10 cm', 'v = -16.67 cm, virtual'],
        correctOptionIndex: 0,
        correctAnswer: 'v = 16.67 cm, size = -3.33 cm (Real, inverted and diminished)',
        explanation: '1/v = 1/10 + 1/(-25) = 3/50 => v = 50/3 ≈ 16.67 cm. m = v/u = (50/3)/(-25) = -2/3. Height = -2/3 × 5 = -3.33 cm.'
      },
      {
        id: 20,
        type: 'long_answer',
        marks: 2,
        text: 'Explain why diamond sparkles so brilliantly.',
        options: ['High refractive index (2.42) and very small critical angle (~24.4°) leading to multiple total internal reflections', 'Because it absorbs all light', 'Because it emits radioactive rays', 'Because it has a polished metal surface'],
        correctOptionIndex: 0,
        correctAnswer: 'High refractive index (2.42) and very small critical angle (~24.4°) leading to multiple total internal reflections',
        explanation: 'The critical angle is only 24.4°. Light entering is trapped and undergoes multiple total internal reflections before exiting, creating dazzling brilliance.'
      }
    ]
  },

  // ==========================================
  // SCIENCE: BIOLOGY (CLASS 10)
  // ==========================================
  {
    id: 'test-sci10-bio-ch5-life-processes',
    title: 'Class 10 Science Ch 5: Life Processes (जैव प्रक्रम)',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Science',
    chapter: 'Ch 5: Life Processes',
    testType: 'chapter',
    durationMinutes: 45,
    totalMarks: 25,
    passingMarks: 10,
    language: 'Bilingual',
    isPublished: true,
    createdAt: '2026-10-18',
    instructions: [
      '20 Questions • 25 Total Marks • Photosynthesis, Respiration, Double Circulation, Excretion'
    ],
    questions: [
      {
        id: 1,
        type: 'mcq',
        marks: 1,
        text: 'The chlorophyll in photosynthesis is primarily used for:',
        options: ['Absorbing light energy', 'Splitting water', 'Reducing CO₂', 'Releasing oxygen'],
        correctOptionIndex: 0,
        correctAnswer: 'Absorbing light energy',
        explanation: 'Chlorophyll pigments absorb sunlight which is then converted into chemical energy.'
      },
      {
        id: 2,
        type: 'mcq',
        marks: 1,
        text: 'Which enzyme is present in human saliva that breaks down starch into simple sugar?',
        options: ['Salivary Amylase (Ptyalin)', 'Pepsin', 'Trypsin', 'Lipase'],
        correctOptionIndex: 0,
        correctAnswer: 'Salivary Amylase (Ptyalin)',
        explanation: 'Salivary amylase breaks down complex starch molecules into maltose sugar in the mouth.'
      },
      {
        id: 3,
        type: 'mcq',
        marks: 1,
        text: 'The breakdown of pyruvate into carbon dioxide, water and energy takes place in:',
        options: ['Mitochondria', 'Cytoplasm', 'Chloroplast', 'Endoplasmic reticulum'],
        correctOptionIndex: 0,
        correctAnswer: 'Mitochondria',
        explanation: 'Aerobic respiration occurs in the mitochondria where pyruvate is oxidized to CO₂, H₂O, and 36-38 ATP.'
      },
      {
        id: 4,
        type: 'mcq',
        marks: 1,
        text: 'The functional filtration unit of the human kidney is called:',
        options: ['Nephron (वृक्काणु)', 'Neuron', 'Alveoli', 'Ureter'],
        correctOptionIndex: 0,
        correctAnswer: 'Nephron (वृक्काणु)',
        explanation: 'Each kidney contains around 1 million nephrons composed of Bowman’s capsule, glomerulus, and tubules.'
      },
      {
        id: 5,
        type: 'mcq',
        marks: 1,
        text: 'Which blood vessel carries oxygenated blood from the lungs to the left atrium of the heart?',
        options: ['Pulmonary vein', 'Pulmonary artery', 'Aorta', 'Vena cava'],
        correctOptionIndex: 0,
        correctAnswer: 'Pulmonary vein',
        explanation: 'Pulmonary veins are the only veins in human body that carry oxygen-rich blood (from lungs to heart).'
      },
      {
        id: 6,
        type: 'mcq',
        marks: 1,
        text: 'The internal cellular energy currency in living organisms is:',
        options: ['ATP (Adenosine Triphosphate)', 'DNA', 'RNA', 'Glucose'],
        correctOptionIndex: 0,
        correctAnswer: 'ATP (Adenosine Triphosphate)',
        explanation: 'ATP provides ready chemical energy for all vital cellular processes.'
      },
      {
        id: 7,
        type: 'mcq',
        marks: 1,
        text: 'During vigorous muscular exercise, accumulation of which acid causes muscle cramps?',
        options: ['Lactic acid', 'Pyruvic acid', 'Acetic acid', 'Citric acid'],
        correctOptionIndex: 0,
        correctAnswer: 'Lactic acid',
        explanation: 'Under anaerobic respiration in muscle cells, pyruvate converts to lactic acid causing fatigue and cramps.'
      },
      {
        id: 8,
        type: 'mcq',
        marks: 1,
        text: 'The opening and closing of stomatal pores is controlled by:',
        options: ['Guard cells (द्वार कोशिकाएँ)', 'Epidermal cells', 'Chloroplasts', 'Root hairs'],
        correctOptionIndex: 0,
        correctAnswer: 'Guard cells (द्वार कोशिकाएँ)',
        explanation: 'Guard cells swell when water flows into them, opening the pore; when they lose water and shrink, the pore closes.'
      },
      {
        id: 9,
        type: 'mcq',
        marks: 1,
        text: 'Bile juice is secreted by which organ?',
        options: ['Liver (यकृत)', 'Pancreas', 'Stomach', 'Gallbladder'],
        correctOptionIndex: 0,
        correctAnswer: 'Liver (यकृत)',
        explanation: 'Bile is synthesized in the liver and temporarily stored in the gallbladder before release into the small intestine.'
      },
      {
        id: 10,
        type: 'mcq',
        marks: 1,
        text: 'Normal human systolic and diastolic blood pressure is:',
        options: ['120 / 80 mm of Hg', '140 / 90 mm of Hg', '100 / 60 mm of Hg', '80 / 120 mm of Hg'],
        correctOptionIndex: 0,
        correctAnswer: '120 / 80 mm of Hg',
        explanation: '120 mm Hg is systolic pressure and 80 mm Hg is diastolic pressure in healthy resting humans.'
      },
      {
        id: 11,
        type: 'assertion_reason',
        marks: 1,
        text: 'Assertion (A): Human heart shows double circulation. \nReason (R): Blood flows through the heart twice during each complete cycle through the body.',
        options: [
          'Both A and R are true and R is the correct explanation of A.',
          'Both A and R are true but R is not the correct explanation.',
          'A is true but R is false.',
          'A is false but R is true.'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Both A and R are true and R is the correct explanation of A.',
        explanation: 'Pulmonary circulation to lungs and systemic circulation to tissues mean blood passes through the heart twice.'
      },
      {
        id: 12,
        type: 'mcq',
        marks: 1,
        text: 'In plants, food synthesized in leaves is transported through:',
        options: ['Phloem (फ्लोएम)', 'Xylem (जाइलम)', 'Pith', 'Cortex'],
        correctOptionIndex: 0,
        correctAnswer: 'Phloem (फ्लोएम)',
        explanation: 'Phloem carries sucrose and amino acids bidirectionally (translocation); xylem transports water and minerals upward.'
      },
      {
        id: 13,
        type: 'mcq',
        marks: 1,
        text: 'Which blood cells help in blood clotting at the site of an injury?',
        options: ['Platelets (रक्त बिम्बाणु)', 'Red Blood Cells', 'White Blood Cells', 'Plasma'],
        correctOptionIndex: 0,
        correctAnswer: 'Platelets (रक्त बिम्बाणु)',
        explanation: 'Platelets release thromboplastin to initiate fibrin clot formation to prevent haemorrhage.'
      },
      {
        id: 14,
        type: 'mcq',
        marks: 1,
        text: 'The finger-like projections present in the inner lining of the small intestine are:',
        options: ['Villi (दीर्घरोम)', 'Cilia', 'Flagella', 'Alveoli'],
        correctOptionIndex: 0,
        correctAnswer: 'Villi (दीर्घरोम)',
        explanation: 'Villi vastly increase the surface area for absorption of digested food nutrients into bloodstream.'
      },
      {
        id: 15,
        type: 'mcq',
        marks: 1,
        text: 'Which component of blood gives it a red color?',
        options: ['Hemoglobin', 'Chlorophyll', 'Albumin', 'Fibrinogen'],
        correctOptionIndex: 0,
        correctAnswer: 'Hemoglobin',
        explanation: 'Hemoglobin is an iron-containing respiratory protein that binds oxygen in RBCs and imparts red color.'
      },
      {
        id: 16,
        type: 'short_answer',
        marks: 2,
        text: 'Name three events that occur during photosynthesis.',
        options: [
          'Absorption of light, conversion of light to chemical energy & splitting of water, reduction of CO₂ to carbohydrates',
          'Breakdown of proteins, release of CO₂, absorption of nitrogen',
          'Fermentation, lactic acid formation, release of heat',
          'Transpiration, absorption of minerals, excretion of salts'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Absorption of light, conversion of light to chemical energy & splitting of water, reduction of CO₂ to carbohydrates',
        explanation: 'NCERT Textbook core triad of photosynthesis events.'
      },
      {
        id: 17,
        type: 'short_answer',
        marks: 2,
        text: 'Differentiate between arteries and veins.',
        options: [
          'Arteries have thick elastic walls and carry blood away from heart under high pressure; veins have thin walls, carry blood towards heart, and contain valves',
          'Arteries carry only impure blood and veins carry only pure blood',
          'Arteries have valves and veins do not',
          'Veins have thicker walls than arteries'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Arteries have thick elastic walls and carry blood away from heart under high pressure; veins have thin walls, carry blood towards heart, and contain valves',
        explanation: 'Key anatomical and functional differences.'
      },
      {
        id: 18,
        type: 'short_answer',
        marks: 2,
        text: 'What is the role of hydrochloric acid (HCl) in the stomach?',
        options: [
          'Creates an acidic medium (pH 1.5 - 2.5) for pepsin activation and kills ingested harmful bacteria',
          'Digests fats directly into glycerol',
          'Emulsifies proteins into amino acids',
          'Absorbs glucose into blood'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Creates an acidic medium (pH 1.5 - 2.5) for pepsin activation and kills ingested harmful bacteria',
        explanation: 'HCl activates inactive pepsinogen to active pepsin and neutralizes pathogenic microorganisms.'
      },
      {
        id: 19,
        type: 'long_answer',
        marks: 2,
        text: 'Explain the mechanism of urine formation in nephrons.',
        options: [
          'Glomerular ultrafiltration under pressure, tubular selective reabsorption (glucose, amino acids, salts, water), and tubular secretion',
          'Only filtering water without reabsorption',
          'Digesting proteins into urea',
          'Breaking down glycogen in the liver'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Glomerular ultrafiltration under pressure, tubular selective reabsorption (glucose, amino acids, salts, water), and tubular secretion',
        explanation: 'Three key steps in nephric excretion.'
      },
      {
        id: 20,
        type: 'long_answer',
        marks: 2,
        text: 'Why is double circulation necessary in mammals and birds?',
        options: [
          'To separate oxygenated and deoxygenated blood, ensuring highly efficient oxygen delivery to maintain constant warm body temperature',
          'Because they have small hearts',
          'To prevent blood from clotting',
          'To reduce heart rate'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'To separate oxygenated and deoxygenated blood, ensuring highly efficient oxygen delivery to maintain constant warm body temperature',
        explanation: 'Endothermic animals require substantial energy and constant high oxygenation to regulate body homeostasis.'
      }
    ]
  },

  // ==========================================
  // SOCIAL SCIENCE (CLASS 10)
  // ==========================================
  {
    id: 'test-sst10-history-nationalism',
    title: 'Class 10 Social Science: Nationalism in India & Europe (इतिहास: राष्ट्रवाद)',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Social Science',
    chapter: 'History: The Rise of Nationalism in Europe & India',
    testType: 'chapter',
    durationMinutes: 45,
    totalMarks: 25,
    passingMarks: 10,
    language: 'Bilingual',
    isPublished: true,
    createdAt: '2026-10-18',
    instructions: [
      '20 Questions • 25 Total Marks • French Revolution, Satyagraha, Non-Cooperation, Civil Disobedience'
    ],
    questions: [
      {
        id: 1,
        type: 'mcq',
        marks: 1,
        text: 'Who was proclaimed the Emperor of unified Germany in 1871 at Versailles?',
        options: ['Kaiser William I', 'Otto von Bismarck', 'Victor Emmanuel II', 'Napoleon III'],
        correctOptionIndex: 0,
        correctAnswer: 'Kaiser William I',
        explanation: 'In January 1871, King William I of Prussia was proclaimed German Emperor at the Hall of Mirrors in Versailles.'
      },
      {
        id: 2,
        type: 'mcq',
        marks: 1,
        text: 'Which famous painting showed a utopian vision of "Democratic and Social Republics" by Frédéric Sorrieu in 1848?',
        options: ['The Dream of Worldwide Democratic and Social Republics', 'Liberty Leading the People', 'The Massacre at Chios', 'Guernica'],
        correctOptionIndex: 0,
        correctAnswer: 'The Dream of Worldwide Democratic and Social Republics',
        explanation: 'Frédéric Sorrieu, a French artist, prepared a series of four prints visualizing his dream of a world made up of democratic republics.'
      },
      {
        id: 3,
        type: 'mcq',
        marks: 1,
        text: 'The infamous Jallianwala Bagh massacre in Amritsar took place on:',
        options: ['13 April 1919', '15 August 1919', '26 January 1920', '10 May 1919'],
        correctOptionIndex: 0,
        correctAnswer: '13 April 1919',
        explanation: 'On Baisakhi day, 13 April 1919, General Dyer ordered open fire on peaceful demonstrators in Jallianwala Bagh.'
      },
      {
        id: 4,
        type: 'mcq',
        marks: 1,
        text: 'Mahatma Gandhi started the famous Dandi March (Salt Satyagraha) from Sabarmati Ashram to Dandi on:',
        options: ['12 March 1930', '6 April 1930', '15 January 1930', '26 January 1930'],
        correctOptionIndex: 0,
        correctAnswer: '12 March 1930',
        explanation: 'The march began on 12 March 1930 with 78 volunteers, covering 240 miles to break the salt law on 6 April 1930.'
      },
      {
        id: 5,
        type: 'mcq',
        marks: 1,
        text: 'Who authored the influential book "Hind Swaraj" (1909)?',
        options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Subhash Chandra Bose', 'Bal Gangadhar Tilak'],
        correctOptionIndex: 0,
        correctAnswer: 'Mahatma Gandhi',
        explanation: 'In Hind Swaraj, Gandhi declared that British rule was established in India with the cooperation of Indians, and would collapse if Indians withdrew cooperation.'
      },
      {
        id: 6,
        type: 'mcq',
        marks: 1,
        text: 'The Napoleonic Code of 1804 is also known as:',
        options: ['Civil Code of 1804', 'Commercial Code', 'Penal Code', 'Constitutional Code'],
        correctOptionIndex: 0,
        correctAnswer: 'Civil Code of 1804',
        explanation: 'The Civil Code of 1804 did away with privileges based on birth, established equality before law, and secured property rights.'
      },
      {
        id: 7,
        type: 'mcq',
        marks: 1,
        text: 'Who led the peasant rebellion in Awadh during the Non-Cooperation Movement?',
        options: ['Baba Ramchandra', 'Alluri Sitaram Raju', 'Birsa Munda', 'Chittaranjan Das'],
        correctOptionIndex: 0,
        correctAnswer: 'Baba Ramchandra',
        explanation: 'Baba Ramchandra, a sanyasi who had earlier been to Fiji as an indentured labourer, led the Kisan movement in Awadh.'
      },
      {
        id: 8,
        type: 'mcq',
        marks: 1,
        text: 'The Poona Pact of September 1932 was signed between:',
        options: ['Mahatma Gandhi and Dr. B.R. Ambedkar', 'Jawaharlal Nehru and Muhammad Ali Jinnah', 'Lord Irwin and Mahatma Gandhi', 'Subhash Bose and Patel'],
        correctOptionIndex: 0,
        correctAnswer: 'Mahatma Gandhi and Dr. B.R. Ambedkar',
        explanation: 'The pact gave Depressed Classes (Scheduled Castes) reserved seats in provincial and central legislative councils voted by general electorate.'
      },
      {
        id: 9,
        type: 'mcq',
        marks: 1,
        text: 'Who was known as the "Bismarck of Italy" or the architect of Italian unification?',
        options: ['Count Camillo de Cavour', 'Giuseppe Mazzini', 'Giuseppe Garibaldi', 'Victor Emmanuel'],
        correctOptionIndex: 0,
        correctAnswer: 'Count Camillo de Cavour',
        explanation: 'Chief Minister Cavour led the movement to unify Italy through diplomacy and alliances.'
      },
      {
        id: 10,
        type: 'mcq',
        marks: 1,
        text: 'In which session of the Indian National Congress was the demand for "Purna Swaraj" (Complete Independence) formalized?',
        options: ['Lahore Session (1929)', 'Calcutta Session (1920)', 'Nagpur Session (1920)', 'Karachi Session (1931)'],
        correctOptionIndex: 0,
        correctAnswer: 'Lahore Session (1929)',
        explanation: 'Presided over by Jawaharlal Nehru in December 1929, the Congress declared 26 January 1930 as Independence Day.'
      },
      {
        id: 11,
        type: 'assertion_reason',
        marks: 1,
        text: 'Assertion (A): Mahatma Gandhi withdrew the Non-Cooperation Movement in February 1922. \nReason (R): At Chauri Chaura in Gorakhpur, a peaceful protest turned violent resulting in the burning of a police station.',
        options: [
          'Both A and R are true and R is the correct explanation of A.',
          'Both A and R are true but R is not the correct explanation.',
          'A is true but R is false.',
          'A is false but R is true.'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Both A and R are true and R is the correct explanation of A.',
        explanation: 'Gandhi felt the movement was turning violent and satyagrahis needed to be properly trained in non-violence.'
      },
      {
        id: 12,
        type: 'mcq',
        marks: 1,
        text: 'The famous slogan "Swaraj is my birthright and I shall have it" was given by:',
        options: ['Bal Gangadhar Tilak', 'Lala Lajpat Rai', 'Bipin Chandra Pal', 'Bhagat Singh'],
        correctOptionIndex: 0,
        correctAnswer: 'Bal Gangadhar Tilak',
        explanation: 'Lokmanya Bal Gangadhar Tilak popularised this battle-cry for Indian self-rule.'
      },
      {
        id: 13,
        type: 'mcq',
        marks: 1,
        text: 'What was "Zollverein" formed in 1834 at the initiative of Prussia?',
        options: ['A customs union abolishing tariff barriers', 'A military alliance', 'A religious confederation', 'A parliament'],
        correctOptionIndex: 0,
        correctAnswer: 'A customs union abolishing tariff barriers',
        explanation: 'Zollverein abolished tariff barriers and reduced currencies from over thirty to two, fostering economic unity.'
      },
      {
        id: 14,
        type: 'mcq',
        marks: 1,
        text: 'The Simon Commission arrived in India in 1928. Why was it boycotted by all Indian parties?',
        options: ['It did not have a single Indian member', 'It promoted British monarch', 'It raised land taxes', 'It banned Congress party'],
        correctOptionIndex: 0,
        correctAnswer: 'It did not have a single Indian member',
        explanation: 'The commission constituted under Sir John Simon had only British MPs to review Indian constitutional progress.'
      },
      {
        id: 15,
        type: 'mcq',
        marks: 1,
        text: 'Who painted the famous iconic image of "Bharat Mata" in 1905?',
        options: ['Abanindranath Tagore', 'Raja Ravi Varma', 'Nandalal Bose', 'Bankim Chandra Chattopadhyay'],
        correctOptionIndex: 0,
        correctAnswer: 'Abanindranath Tagore',
        explanation: 'Abanindranath Tagore portrayed Bharat Mata as an ascetic figure: calm, composed, divine and spiritual.'
      },
      {
        id: 16,
        type: 'short_answer',
        marks: 2,
        text: 'What were the conditions of the Gandhi-Irwin Pact signed in March 1931?',
        options: [
          'Congress agreed to suspend Civil Disobedience and participate in the 2nd Round Table Conference, while Government released political prisoners',
          'British agreed to grant full independence immediately',
          'Gandhi agreed to join the British cabinet',
          'Salt tax was tripled'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Congress agreed to suspend Civil Disobedience and participate in the 2nd Round Table Conference, while Government released political prisoners',
        explanation: 'Key points of the Gandhi-Irwin Pact of 1931.'
      },
      {
        id: 17,
        type: 'short_answer',
        marks: 2,
        text: 'Who were Marianne and Germania?',
        options: [
          'National allegories representing the French and German nations respectively',
          'Female rulers of Prussia and France',
          'Religious saints worshipped in Europe',
          'Famous European sculptors'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'National allegories representing the French and German nations respectively',
        explanation: 'Marianne embodied the ideas of Liberty and Republic in France, while Germania wore a crown of oak leaves symbolizing German heroism.'
      },
      {
        id: 18,
        type: 'short_answer',
        marks: 2,
        text: 'What was the Rowlatt Act of 1919 nicknamed the "Black Act"?',
        options: [
          'It gave the colonial government enormous power to detain political prisoners without trial for up to two years',
          'It banned Indian schools',
          'It doubled rail fares',
          'It confiscated all agricultural crops'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'It gave the colonial government enormous power to detain political prisoners without trial for up to two years',
        explanation: 'Passed hurriedly by the Imperial Legislative Council despite united opposition from Indian members.'
      },
      {
        id: 19,
        type: 'long_answer',
        marks: 2,
        text: 'Why did Mahatma Gandhi choose salt as a powerful symbol of unity for the national movement?',
        options: [
          'Salt was consumed by rich and poor alike, was an essential food item, and British monopoly tax on it was deemed deeply oppressive',
          'Because salt was exported to Britain',
          'Because India had no salt mines',
          'Because salt made weapons useless'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Salt was consumed by rich and poor alike, was an essential food item, and British monopoly tax on it was deemed deeply oppressive',
        explanation: 'Salt touched the daily life of every Indian, making it a universal unifying cause across religious and caste lines.'
      },
      {
        id: 20,
        type: 'long_answer',
        marks: 2,
        text: 'How did print culture and folklore help create a feeling of nationalism in India?',
        options: [
          'Through revival of folk songs, legends, hymns like Vande Mataram, and national icons that reconnected people to collective pride',
          'By distributing foreign newspapers',
          'By discouraging local languages',
          'By teaching British royal history'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Through revival of folk songs, legends, hymns like Vande Mataram, and national icons that reconnected people to collective pride',
        explanation: 'Nationalist folklore and literature revived self-esteem and cultural identity.'
      }
    ]
  },

  // ==========================================
  // HINDI (CLASS 10 - CBSE & BIHAR BOARD)
  // ==========================================
  {
    id: 'test-hindi10-godhuli-ch1',
    title: 'Class 10 Hindi: गद्य एवं व्याकरण - श्रम विभाजन और जाति प्रथा तथा नेताजी का चश्मा',
    board: 'Bihar Board',
    classLevel: 'Class 10',
    subject: 'Hindi',
    chapter: 'गोधूलि / क्षितिज: श्रम विभाजन एवं जाति प्रथा, नेताजी का चश्मा, समास',
    testType: 'chapter',
    durationMinutes: 45,
    totalMarks: 25,
    passingMarks: 10,
    language: 'Hindi',
    isPublished: true,
    createdAt: '2026-10-18',
    instructions: [
      '20 बहुविकल्पीय एवं अतिलघुत्तरीय प्रश्न • कुल 25 अंक • बिहार बोर्ड एवं सीबीएसई दोनों के लिए अत्यंत उपयोगी'
    ],
    questions: [
      {
        id: 1,
        type: 'mcq',
        marks: 1,
        text: '‘श्रम विभाजन और जाति प्रथा’ पाठ के लेखक कौन हैं?',
        options: ['डॉ. भीमराव आंबेडकर', 'महात्मा गांधी', 'रामवृक्ष बेनीपुरी', 'अज्ञेय'],
        correctOptionIndex: 0,
        correctAnswer: 'डॉ. भीमराव आंबेडकर',
        explanation: '‘श्रम विभाजन और जाति प्रथा’ डॉ. भीमराव आंबेडकर के विख्यात भाषण ‘एनिहिलेशन ऑफ कास्ट’ का हिंदी रूपांतरण है।'
      },
      {
        id: 2,
        type: 'mcq',
        marks: 1,
        text: 'आंबेडकर की दृष्टि में सच्चे भाईचारे का स्वरूप कैसा होना चाहिए?',
        options: ['दूध और पानी के मिश्रण की तरह', 'दाल और भात की तरह', 'पानी और तेल की तरह', 'लोहे और चुंबक की तरह'],
        correctOptionIndex: 0,
        correctAnswer: 'दूध और पानी के मिश्रण की तरह',
        explanation: 'आंबेडकर जी के अनुसार लोकतंत्र में भाईचारे का वास्तविक स्वरूप दूध और पानी के अटूट मिश्रण जैसा होना चाहिए।'
      },
      {
        id: 3,
        type: 'mcq',
        marks: 1,
        text: '‘नेताजी का चश्मा’ पाठ के लेखक कौन हैं?',
        options: ['स्वयं प्रकाश', 'सूर्यकांत त्रिपाठी ‘निराला’', 'यशपाल', 'मनु भंडारी'],
        correctOptionIndex: 0,
        correctAnswer: 'स्वयं प्रकाश',
        explanation: '‘नेताजी का चश्मा’ कहानी स्वयं प्रकाश जी द्वारा रचित है जिसमें देशप्रेम की मार्मिक भावना दर्शाई गई है।'
      },
      {
        id: 4,
        type: 'mcq',
        marks: 1,
        text: 'कैप्टन कौन था जो नेताजी की मूर्ति पर चश्मा लगाता था?',
        options: ['एक चश्मे बेचने वाला देशभक्त लंगड़ा व्यक्ति', 'कस्बे का मास्टर', 'पानवाला', 'हालदार साहब का ड्राइवर'],
        correctOptionIndex: 0,
        correctAnswer: 'एक चश्मे बेचने वाला देशभक्त लंगड़ा व्यक्ति',
        explanation: 'कैप्टन एक गरीब, लंगड़ा फेरीवाला था जो नेताजी की अधूरी मूर्ति को देखकर व्यथित होकर अपना चश्मा पहना दिया करता था।'
      },
      {
        id: 5,
        type: 'mcq',
        marks: 1,
        text: '‘राजपुत्र’ शब्द में कौन-सा समास है?',
        options: ['तत्पुरुष समास', 'द्वंद्व समास', 'अव्ययीभाव समास', 'बहुव्रीहि समास'],
        correctOptionIndex: 0,
        correctAnswer: 'तत्पुरुष समास',
        explanation: 'विग्रह: राजा का पुत्र (संबंध तत्पुरुष समास)।'
      },
      {
        id: 6,
        type: 'mcq',
        marks: 1,
        text: '‘दशानन’ (दस आनन हैं जिसके अर्थात रावण) में कौन-सा समास है?',
        options: ['बहुव्रीहि समास', 'द्विगु समास', 'कर्मधारय समास', 'तत्पुरुष समास'],
        correctOptionIndex: 0,
        correctAnswer: 'बहुव्रीहि समास',
        explanation: 'जहाँ दोनों पद प्रधान न होकर कोई तीसरा अन्य पद (रावण) प्रधान होता है, वहाँ बहुव्रीहि समास होता है।'
      },
      {
        id: 7,
        type: 'mcq',
        marks: 1,
        text: '‘विष के दाँत’ कहानी के रचनाकार कौन हैं?',
        options: ['नलिन विलोचन शर्मा', 'अमरकांत', 'मैक्समूलर', 'बिरजू महाराज'],
        correctOptionIndex: 0,
        correctAnswer: 'नलिन विलोचन शर्मा',
        explanation: 'बिहार बोर्ड गोधूलि का द्वितीय पाठ ‘विष के दाँत’ नलिन विलोचन शर्मा द्वारा रचित है।'
      },
      {
        id: 8,
        type: 'mcq',
        marks: 1,
        text: 'सेन साहब की नई काली कार कितने रुपये की थी?',
        options: ['साढ़े सात हजार', 'आठ हजार', 'नौ हजार', 'पाँच हजार'],
        correctOptionIndex: 0,
        correctAnswer: 'साढ़े सात हजार',
        explanation: 'पाठ के अनुसार सेन साहब ने साढ़े सात हजार रुपये में चमचमाती काली स्ट्रीमल इण्ड कार खरीदी थी।'
      },
      {
        id: 9,
        type: 'mcq',
        marks: 1,
        text: '‘सूर्योदय’ का सही संधि-विच्छेद क्या है?',
        options: ['सूर्य + उदय', 'सूर्यो + दय', 'सूर्य + दय', 'सूर्या + उदय'],
        correctOptionIndex: 0,
        correctAnswer: 'सूर्य + उदय',
        explanation: 'सूर्य + उदय = सूर्योदय (गुण स्वर संधि: अ + उ = ओ)।'
      },
      {
        id: 10,
        type: 'mcq',
        marks: 1,
        text: '‘अंगूठा दिखाना’ मुहावरे का सही अर्थ क्या है?',
        options: ['साफ मना कर देना या धोखा देना', 'मदद करना', 'अंगूठे में चोट लगना', 'प्रशंसा करना'],
        correctOptionIndex: 0,
        correctAnswer: 'साफ मना कर देना या धोखा देना',
        explanation: 'अंगूठा दिखाने का प्रचलित लोकोक्ति अर्थ वक्त पर धोखा देना या साफ इनकार कर देना है।'
      },
      {
        id: 11,
        type: 'assertion_reason',
        marks: 1,
        text: 'कथन (A): जाति प्रथा भारत में बेरोजगारी का एक प्रमुख और प्रत्यक्ष कारण बनी हुई है। \nकारण (R): यह मनुष्य को एक ही पेशे में जीवन भर के लिए बाँध देती है, चाहे पेशा अनुपयुक्त या अपर्याप्त ही क्यों न हो।',
        options: [
          'कथन और कारण दोनों सही हैं तथा कारण कथन की सही व्याख्या करता है।',
          'कथन और कारण दोनों सही हैं परंतु कारण व्याख्या नहीं करता।',
          'कथन सही है परंतु कारण गलत है।',
          'कथन गलत है परंतु कारण सही है।'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'कथन और कारण दोनों सही हैं तथा कारण कथन की सही व्याख्या करता है।',
        explanation: 'डॉ. आंबेडकर के पाठ के मूल विचार से पूर्णतः पुष्ट है।'
      },
      {
        id: 12,
        type: 'mcq',
        marks: 1,
        text: '‘यथाशक्ति’ में कौन-सा समास है?',
        options: ['अव्ययीभाव समास', 'तत्पुरुष समास', 'द्वंद्व समास', 'कर्मधारय समास'],
        correctOptionIndex: 0,
        correctAnswer: 'अव्ययीभाव समास',
        explanation: 'शक्ति के अनुसार - पूर्वपद ‘यथा’ अव्यय है, अतः अव्ययीभाव समास है।'
      },
      {
        id: 13,
        type: 'mcq',
        marks: 1,
        text: 'नेताजी सुभाष चंद्र बोस की संगमरमर की मूर्ति किस चौराहे पर लगाई गई थी?',
        options: ['कस्बे के मुख्य बाजार के चौराहे पर', 'रेलवे स्टेशन पर', 'स्कूल के प्रांगण में', 'पंचायत भवन के सामने'],
        correctOptionIndex: 0,
        correctAnswer: 'कस्बे के मुख्य बाजार के चौराहे पर',
        explanation: 'कस्बे की नगरपालिका द्वारा मुख्य चौराहे पर नेताजी की प्रतिमा स्थापित की गई थी।'
      },
      {
        id: 14,
        type: 'mcq',
        marks: 1,
        text: 'कासू (खोखा) सेन साहब की आँखों का क्या था?',
        options: ['तारा (अत्यधिक लाडला)', 'शत्रु', 'सेवक', 'खलनायक'],
        correctOptionIndex: 0,
        correctAnswer: 'तारा (अत्यधिक लाडला)',
        explanation: 'कासू बुढ़ापे में पैदा हुआ सेन दंपत्ति का इकलौता और अत्यंत दुलारा पुत्र था।'
      },
      {
        id: 15,
        type: 'mcq',
        marks: 1,
        text: '‘त्रिफला’ में कौन-सा समास है?',
        options: ['द्विगु समास', 'द्वंद्व समास', 'कर्मधारय समास', 'तत्पुरुष समास'],
        correctOptionIndex: 0,
        correctAnswer: 'द्विगु समास',
        explanation: 'तीन फलों का समाहार - पहला पद ‘त्रि’ संख्यावाचक है, अतः द्विगु समास है।'
      },
      {
        id: 16,
        type: 'short_answer',
        marks: 2,
        text: 'सेनानी न होते हुए भी चश्मेवाले को लोग ‘कैप्टन’ क्यों कहते थे?',
        options: [
          'क्योंकि उसमें नेताजी और देश के अमर शहीदों के प्रति अगाध आदर एवं देशभक्ति की भावना थी',
          'क्योंकि वह सेना का रिटायर्ड फौजी था',
          'क्योंकि वह बहुत अमीर था',
          'क्योंकि उसका नाम कैप्टन था'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'क्योंकि उसमें नेताजी और देश के अमर शहीदों के प्रति अगाध आदर एवं देशभक्ति की भावना थी',
        explanation: 'उसका निस्वार्थ देशप्रेम और बलिदानियों के प्रति श्रद्धा देखकर लोग उसे आदर से कैप्टन पुकारते थे।'
      },
      {
        id: 17,
        type: 'short_answer',
        marks: 2,
        text: 'जाति प्रथा को स्वाभाविक श्रम विभाजन क्यों नहीं माना जा सकता?',
        options: [
          'क्योंकि यह मनुष्य की रुचि, क्षमता और व्यक्तिगत कुशलता पर आधारित नहीं होती बल्कि जन्म पर थोपी जाती है',
          'क्योंकि इसमें वेतन नहीं मिलता',
          'क्योंकि यह केवल विदेशों में होती है',
          'क्योंकि यह कानूनन मान्य है'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'क्योंकि यह मनुष्य की रुचि, क्षमता और व्यक्तिगत कुशलता पर आधारित नहीं होती बल्कि जन्म पर थोपी जाती है',
        explanation: 'स्वाभाविक श्रम विभाजन व्यक्ति की इच्छा और योग्यता के अनुरूप होता है, जबकि जाति प्रथा में जन्म के आधार पर जबरन कार्य तय होता है।'
      },
      {
        id: 18,
        type: 'short_answer',
        marks: 2,
        text: 'कर्मधारय समास और बहुव्रीहि समास में क्या मुख्य अंतर है?',
        options: [
          'कर्मधारय में विशेषण-विशेष्य या उपमेय-उपमान का संबंध होता है, जबकि बहुव्रीहि में कोई अन्य तीसरा पद प्रधान होता है',
          'कर्मधारय में संख्या होती है और बहुव्रीहि में नहीं',
          'दोनों एक ही हैं',
          'कर्मधारय केवल संस्कृत में होता है'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'कर्मधारय में विशेषण-विशेष्य या उपमेय-उपमान का संबंध होता है, जबकि बहुव्रीहि में कोई अन्य तीसरा पद प्रधान होता है',
        explanation: 'जैसे पीतांबर (पीत वस्त्र) कर्मधारय है, परंतु पीतांबर (श्रीकृष्ण) बहुव्रीहि है।'
      },
      {
        id: 19,
        type: 'long_answer',
        marks: 2,
        text: 'हालदार साहब जब अंत में मूर्ति पर सरकंडे का चश्मा देखते हैं, तो उनकी आँखें क्यों भर आती हैं?',
        options: [
          'यह देखकर कि नई पीढ़ी और बच्चों में भी शहीदों के प्रति देशप्रेम और श्रद्धा जीवित है',
          'क्योंकि चश्मा बहुत कीमती था',
          'क्योंकि पानवाले ने पैसे नहीं लिए',
          'क्योंकि मूर्ति टूट गई थी'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'यह देखकर कि नई पीढ़ी और बच्चों में भी शहीदों के प्रति देशप्रेम और श्रद्धा जीवित है',
        explanation: 'सरकंडे का चश्मा इस बात का प्रतीक था कि आने वाली पीढ़ी देशप्रेम की धरोहर को कभी मरने नहीं देगी।'
      },
      {
        id: 20,
        type: 'long_answer',
        marks: 2,
        text: 'आंबेडकर के अनुसार एक आदर्श समाज के तीन प्रमुख तत्व क्या हैं?',
        options: [
          'स्वतंत्रता, समता और भ्रातृत्व (भाईचारा)',
          'धन, शक्ति और पद',
          'जाति, धर्म और क्षेत्र',
          'कठोर नियम, दंड और शासन'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'स्वतंत्रता, समता और भ्रातृत्व (भाईचारा)',
        explanation: 'फ्रांसीसी क्रांति और मानवीय लोकतंत्र के शाश्वत तीन आधार स्तंभ।'
      }
    ]
  },

  // ==========================================
  // ENGLISH (CLASS 10)
  // ==========================================
  {
    id: 'test-eng10-ch1-letter-to-god',
    title: 'Class 10 English: A Letter to God & Grammar (Language & Literature)',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'English',
    chapter: 'Ch 1: A Letter to God & Tenses/Modals',
    testType: 'chapter',
    durationMinutes: 45,
    totalMarks: 25,
    passingMarks: 10,
    language: 'English',
    isPublished: true,
    createdAt: '2026-10-18',
    instructions: [
      '20 Questions • 25 Total Marks • Prose comprehension, character analysis, tenses, indirect speech'
    ],
    questions: [
      {
        id: 1,
        type: 'mcq',
        marks: 1,
        text: 'Who is the author of the story "A Letter to God"?',
        options: ['G.L. Fuentes', 'Liam O\'Flaherty', 'Frederick Forsyth', 'Eleni Sikelianos'],
        correctOptionIndex: 0,
        correctAnswer: 'G.L. Fuentes',
        explanation: 'Gregorio López Fuentes, a famous Mexican novelist and journalist.'
      },
      {
        id: 2,
        type: 'mcq',
        marks: 1,
        text: 'Where was Lencho\'s solitary house located?',
        options: ['On the crest of a low hill', 'In the middle of a dense forest', 'At the base of a high mountain', 'Near the seashore'],
        correctOptionIndex: 0,
        correctAnswer: 'On the crest of a low hill',
        explanation: 'The house—the only one in the entire valley—sat on the crest of a low hill.'
      },
      {
        id: 3,
        type: 'mcq',
        marks: 1,
        text: 'What destroyed Lencho\'s ripe corn fields completely?',
        options: ['A devastating hailstorm', 'A sudden flood', 'A plague of locusts', 'Wild animals'],
        correctOptionIndex: 0,
        correctAnswer: 'A devastating hailstorm',
        explanation: 'A sudden violent wind blew and along with the rain very large hailstones began to fall for an hour.'
      },
      {
        id: 4,
        type: 'mcq',
        marks: 1,
        text: 'How much money did Lencho ask God for in his first letter?',
        options: ['100 pesos', '70 pesos', '50 pesos', '500 pesos'],
        correctOptionIndex: 0,
        correctAnswer: '100 pesos',
        explanation: 'Lencho wrote: "God, if you don’t help me, my family and I will go hungry this year. I need a hundred pesos to sow my field again."'
      },
      {
        id: 5,
        type: 'mcq',
        marks: 1,
        text: 'How much money was the kind postmaster able to collect and send to Lencho?',
        options: ['70 pesos', '100 pesos', '80 pesos', '50 pesos'],
        correctOptionIndex: 0,
        correctAnswer: '70 pesos',
        explanation: 'Despite giving a part of his salary, the postmaster managed to collect only 70 pesos from colleagues and friends.'
      },
      {
        id: 6,
        type: 'mcq',
        marks: 1,
        text: 'What did Lencho call the post office employees in his second letter?',
        options: ['A bunch of crooks', 'Kind helpers', 'Robbers', 'Angels'],
        correctOptionIndex: 0,
        correctAnswer: 'A bunch of crooks',
        explanation: 'Irony of the story: Lencho believed the post office employees stole the missing 30 pesos sent by God.'
      },
      {
        id: 7,
        type: 'mcq',
        marks: 1,
        text: 'Choose the correct form of verb: "The train ________ before we reached the railway station."',
        options: ['had departed', 'has departed', 'departs', 'was departed'],
        correctOptionIndex: 0,
        correctAnswer: 'had departed',
        explanation: 'When two actions happen in the past, the earlier completed action takes Past Perfect (had + V3).'
      },
      {
        id: 8,
        type: 'mcq',
        marks: 1,
        text: 'Identify the modal verb showing obligation: "Students ________ wear proper institute uniform."',
        options: ['must', 'might', 'could', 'may'],
        correctOptionIndex: 0,
        correctAnswer: 'must',
        explanation: '"Must" expresses compulsory necessity or institutional duty.'
      },
      {
        id: 9,
        type: 'mcq',
        marks: 1,
        text: 'Convert to indirect speech: The teacher said to the boy, "Water boils at 100°C."',
        options: [
          'The teacher told the boy that water boils at 100°C.',
          'The teacher told the boy that water boiled at 100°C.',
          'The teacher asked the boy if water boils.',
          'The teacher ordered the boy that water boils at 100°C.'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'The teacher told the boy that water boils at 100°C.',
        explanation: 'Universal scientific facts do not change tense when converted into indirect speech.'
      },
      {
        id: 10,
        type: 'mcq',
        marks: 1,
        text: 'In Nelson Mandela: Long Walk to Freedom, what was the date of the historic presidential inauguration ceremony in Pretoria?',
        options: ['10th May 1994', '15th August 1994', '26th January 1994', '4th July 1994'],
        correctOptionIndex: 0,
        correctAnswer: '10th May 1994',
        explanation: '10th May dawned bright and clear at the Union Buildings amphitheatre in Pretoria.'
      },
      {
        id: 11,
        type: 'assertion_reason',
        marks: 1,
        text: 'Assertion (A): Lencho showed not the slightest surprise on seeing the money in the envelope. \nReason (R): His faith in God was absolute and unflinching.',
        options: [
          'Both A and R are true and R is the correct explanation of A.',
          'Both A and R are true but R is not the correct explanation.',
          'A is true but R is false.',
          'A is false but R is true.'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Both A and R are true and R is the correct explanation of A.',
        explanation: 'He was so certain of God\'s assistance that receiving the money felt completely expected to him.'
      },
      {
        id: 12,
        type: 'mcq',
        marks: 1,
        text: 'Choose the correctly punctuated sentence:',
        options: [
          '"Help me," Lencho prayed, "or my children will starve."',
          '"Help me" Lencho prayed "or my children will starve"',
          'Help me Lencho prayed or my children will starve.',
          '"Help me", Lencho prayed, "or my children will starve".'
        ],
        correctOptionIndex: 0,
        correctAnswer: '"Help me," Lencho prayed, "or my children will starve."',
        explanation: 'Proper inverted commas and comma placement in direct speech.'
      },
      {
        id: 13,
        type: 'mcq',
        marks: 1,
        text: 'Which poetic device is used in: "The fog comes on little cat feet"?',
        options: ['Metaphor', 'Simile', 'Alliteration', 'Oxymoron'],
        correctOptionIndex: 0,
        correctAnswer: 'Metaphor',
        explanation: 'Carl Sandburg directly compares the silent arrival of fog to a cat without using "like" or "as".'
      },
      {
        id: 14,
        type: 'mcq',
        marks: 1,
        text: 'What did the raindrop drops symbolize for Lencho before the storm hit?',
        options: ['New coins (ten-cent and five-cent pieces)', 'Pearls', 'Diamonds', 'Silver coins'],
        correctOptionIndex: 0,
        correctAnswer: 'New coins (ten-cent and five-cent pieces)',
        explanation: 'Lencho saw the big drops as ten-cent pieces and the little ones as fives, bringing prosperous harvest.'
      },
      {
        id: 15,
        type: 'mcq',
        marks: 1,
        text: 'Fill in the blank: Neither the teacher nor the students ________ present in the auditorium yesterday.',
        options: ['were', 'was', 'is', 'are'],
        correctOptionIndex: 0,
        correctAnswer: 'were',
        explanation: 'With "neither...nor", the verb agrees with the closer subject ("students", plural past -> "were").'
      },
      {
        id: 16,
        type: 'short_answer',
        marks: 2,
        text: 'Why did the postmaster decide to answer Lencho\'s letter?',
        options: [
          'In order not to shake the writer\'s extraordinary, naive faith in God',
          'Because he wanted to punish Lencho',
          'Because he had surplus government money',
          'Because Lencho was his close friend'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'In order not to shake the writer\'s extraordinary, naive faith in God',
        explanation: 'The postmaster was deeply moved by Lencho\'s rare, pure faith and decided to respond with an act of charity.'
      },
      {
        id: 17,
        type: 'short_answer',
        marks: 2,
        text: 'What is the dramatic irony at the conclusion of "A Letter to God"?',
        options: [
          'The very post office employees who sacrificially contributed their own money to help Lencho were accused by him of being thieves',
          'God sent more money than Lencho asked for',
          'Lencho refused to accept the letter',
          'The postmaster confessed his guilt'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'The very post office employees who sacrificially contributed their own money to help Lencho were accused by him of being thieves',
        explanation: 'Classic situational irony where the benefactors are denounced as perpetrators.'
      },
      {
        id: 18,
        type: 'short_answer',
        marks: 2,
        text: 'According to Nelson Mandela, what are a man\'s twin obligations in life?',
        options: [
          'Obligations to his family, parents, wife and children; and obligations to his people, community and country',
          'Obligation to earn money and travel the world',
          'Obligation to join the army and obey laws',
          'Obligation to acquire property and prestige'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Obligations to his family, parents, wife and children; and obligations to his people, community and country',
        explanation: 'Mandela outlines the dual personal and civic responsibilities of human existence.'
      },
      {
        id: 19,
        type: 'long_answer',
        marks: 2,
        text: 'How does Robert Frost present conflicting human emotions in the poem "Fire and Ice"?',
        options: [
          'Fire represents burning desire, greed and lust; Ice represents cold hatred, indifference and insensitivity',
          'Fire represents happiness and Ice represents sadness',
          'Fire represents science and Ice represents literature',
          'Fire represents summer and Ice represents winter only'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Fire represents burning desire, greed and lust; Ice represents cold hatred, indifference and insensitivity',
        explanation: 'Frost uses natural elements as metaphors for human vices capable of destroying civilization.'
      },
      {
        id: 20,
        type: 'long_answer',
        marks: 2,
        text: 'In "A Triumph of Surgery", what real treatment did Dr. James Herriot give to cure Tricki?',
        options: [
          'No medicine or surgery; only strict diet control, plenty of water, and active physical play with other dogs for two days',
          'High dose antibiotics and vitamins',
          'An expensive surgical operation',
          'Sweet chocolates and cakes'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'No medicine or surgery; only strict diet control, plenty of water, and active physical play with other dogs for two days',
        explanation: 'Tricki was merely overfed and pampered by Mrs. Pumphrey; natural exercise restored his vitality.'
      }
    ]
  },

  // ==========================================
  // SANSKRIT (CLASS 10 - BIHAR BOARD / BSEB)
  // ==========================================
  {
    id: 'test-sanskrit10-ch1-bseb',
    title: 'Class 10 Sanskrit (पीयूषम्): मंगलम् पाठ एवं पाटलिपुत्रवैभवम् (बिहार बोर्ड विशेष)',
    board: 'Bihar Board',
    classLevel: 'Class 10',
    subject: 'Sanskrit',
    chapter: 'पीयूषम्: मंगलम् एवं पाटलिपुत्रवैभवम् तथा संधि-प्रकरणम्',
    testType: 'chapter',
    durationMinutes: 45,
    totalMarks: 25,
    passingMarks: 10,
    language: 'Hindi',
    isPublished: true,
    createdAt: '2026-10-18',
    instructions: [
      '20 बहुविकल्पीय प्रश्न • कुल 25 अंक • बिहार विद्यालय परीक्षा समिति (BSEB) मैट्रिक परीक्षा पैटर्न'
    ],
    questions: [
      {
        id: 1,
        type: 'mcq',
        marks: 1,
        text: '‘मंगलम्’ पाठ कहाँ से संकलित है?',
        options: ['उपनिषद् से', 'पुराण से', 'रामायण से', 'महाभारत से'],
        correctOptionIndex: 0,
        correctAnswer: 'उपनिषद् से',
        explanation: '‘मंगलम्’ पाठ में वैदिक वाङ्मय के अंतिम भाग उपनिषदों से पाँच मंत्र संकलित हैं।'
      },
      {
        id: 2,
        type: 'mcq',
        marks: 1,
        text: 'सत्य का मुख किस पात्र से ढँका हुआ है? (हिरण्मयेन पात्रेण...)?',
        options: ['हिरण्मय (स्वर्ण) पात्र से', 'मिट्टी के पात्र से', 'तांबे के पात्र से', 'कांस्य पात्र से'],
        correctOptionIndex: 0,
        correctAnswer: 'हिरण्मय (स्वर्ण) पात्र से',
        explanation: 'ईशावास्योपनिषद् के अनुसार "हिरण्मयेन पात्रेण सत्यस्यापिहितं मुखम्" - सत्य का मुख सोने जैसे ज्योतिर्मय पात्र से ढँका है।'
      },
      {
        id: 3,
        type: 'mcq',
        marks: 1,
        text: 'अणु से भी छोटा और महान से भी महान क्या है?',
        options: ['आत्मा', 'ईश्वर', 'संसार', 'मनुष्य'],
        correctOptionIndex: 0,
        correctAnswer: 'आत्मा',
        explanation: 'कठोपनिषद् में कहा गया है: "अणोरणीयान् महतो महीयान् आत्मानमस्य जन्तोर्निहितो गुहायाम्"।'
      },
      {
        id: 4,
        type: 'mcq',
        marks: 1,
        text: 'किसकी सदा विजय होती है? (सत्यमेव जयते...)?',
        options: ['सत्य की', 'असत्य की', 'क्रोध की', 'लोभ की'],
        correctOptionIndex: 0,
        correctAnswer: 'सत्य की',
        explanation: 'मुण्डकोपनिषद् का अमर उद्घोष है: "सत्यमेव जयते नानृतम्" - सत्य की ही जीत होती है, असत्य की नहीं।'
      },
      {
        id: 5,
        type: 'mcq',
        marks: 1,
        text: 'बहती हुई नदियाँ अपने नाम और रूप को छोड़कर कहाँ विलीन हो जाती हैं?',
        options: ['समुद्र में', 'झीलों में', 'पहाड़ों में', 'भूमि में'],
        correctOptionIndex: 0,
        correctAnswer: 'समुद्र में',
        explanation: '"यथा नद्यः स्यन्दमानाः समुद्रेऽस्तं गच्छन्ति नामरूपे विहाय..." जैसे नदियाँ समुद्र में मिलकर एकाकार हो जाती हैं।'
      },
      {
        id: 6,
        type: 'mcq',
        marks: 1,
        text: '‘पाटलिपुत्रवैभवम्’ पाठ में किस प्रसिद्ध नगर के वैभव का वर्णन है?',
        options: ['पटना (पाटलिपुत्र)', 'दरभंगा', 'गया', 'वाराणसी'],
        correctOptionIndex: 0,
        correctAnswer: 'पटना (पाटलिपुत्र)',
        explanation: 'बिहार की राजधानी पटना के ऐतिहासिक गौरव और सरस्वती के कुलगृह पाटलिपुत्र का वर्णन है।'
      },
      {
        id: 7,
        type: 'mcq',
        marks: 1,
        text: 'किस विदेशी यात्री ने अपने संस्मरण में पाटलिपुत्र की रक्षा-व्यवस्था को अति उत्कृष्ट बताया था?',
        options: ['मेगास्थनीज (Megasthenes)', 'फाह्यान', 'ह्वेनसांग', 'इत्सिंग'],
        correctOptionIndex: 0,
        correctAnswer: 'मेगास्थनीज (Megasthenes)',
        explanation: 'चंद्रगुप्त मौर्य के समय यूनानी राजदूत मेगास्थनीज ने पाटलिपुत्र के नगर विन्यास की भूरि-भूरि प्रशंसा की।'
      },
      {
        id: 8,
        type: 'mcq',
        marks: 1,
        text: 'भगवान बुद्ध के समय पाटलिपुत्र का नाम क्या था?',
        options: ['पाटलिग्राम', 'कुसुमपुर', 'पुष्पपुर', 'अजीमाबाद'],
        correctOptionIndex: 0,
        correctAnswer: 'पाटलिग्राम',
        explanation: 'बुद्धकाल में गंगा के तट पर पाटलिग्राम स्थित था, जिसके विषय में बुद्ध ने कहा था कि यह भविष्य में महानगर बनेगा।'
      },
      {
        id: 9,
        type: 'mcq',
        marks: 1,
        text: 'सिखों के दसवें गुरु गोविंद सिंह का जन्मस्थान किस नाम से प्रसिद्ध है?',
        options: ['गुरुद्वारा (पटना साहिब)', 'हरमंदिर जी', 'आनंदपुर', 'स्वर्ण मंदिर'],
        correctOptionIndex: 0,
        correctAnswer: 'गुरुद्वारा (पटना साहिब)',
        explanation: 'सिख संप्रदाय के दसवें गुरु, गुरु गोविंद सिंह जी की पावन जन्मस्थली पटना साहिब गुरुद्वारे के रूप में तीर्थस्थल है।'
      },
      {
        id: 10,
        type: 'mcq',
        marks: 1,
        text: '‘कौमुदी महोत्सव’ किस ऋतु में बड़े उल्लास से मनाया जाता था?',
        options: ['शरद् ऋतु में', 'वसंत ऋतु में', 'वर्षा ऋतु में', 'ग्रीष्म ऋतु में'],
        correctOptionIndex: 0,
        correctAnswer: 'शरद् ऋतु में',
        explanation: 'गुप्त वंश के शासनकाल में कौमुदी महोत्सव आज की दुर्गापूजा की तरह धूमधाम से मनाया जाता था।'
      },
      {
        id: 11,
        type: 'assertion_reason',
        marks: 1,
        text: 'कथन (A): पटना का नाम पाटल पुष्पों (गुलाब के फूलों) के उत्पादन से पाटलिपुत्र पड़ा। \nकारण (R): पुत्तलिका रचना के आधार पर गुलाब के फूलों के कारण यह नामकरण माना जाता है।',
        options: [
          'कथन और कारण दोनों सही हैं तथा कारण कथन की सही व्याख्या करता है।',
          'कथन और कारण दोनों सही हैं परंतु कारण व्याख्या नहीं करता।',
          'कथन सही है परंतु कारण गलत है।',
          'कथन गलत है परंतु कारण सही है।'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'कथन और कारण दोनों सही हैं तथा कारण कथन की सही व्याख्या करता है।',
        explanation: 'पाटल अर्थात गुलाब के फूलों की खेती के कारण नगर का नाम पाटलिपुत्र पड़ा।'
      },
      {
        id: 12,
        type: 'mcq',
        marks: 1,
        text: '‘विद्या + आलयः’ की सही संधि क्या होगी?',
        options: ['विद्यालयः', 'विद्यालय', 'विद्यलयः', 'विदालयः'],
        correctOptionIndex: 0,
        correctAnswer: 'विद्यालयः',
        explanation: 'आ + आ = आ (दीर्घ स्वर संधि: अकः सवर्णे दीर्घः)।'
      },
      {
        id: 13,
        type: 'mcq',
        marks: 1,
        text: 'एशिया का सबसे लम्बा सड़क पुल ‘गांधी सेतु’ किस नदी पर बना है?',
        options: ['गंगा नदी पर', 'गंडक नदी पर', 'कोसी नदी पर', 'सोन नदी पर'],
        correctOptionIndex: 0,
        correctAnswer: 'गंगा नदी पर',
        explanation: 'पटना में गंगा नदी के ऊपर प्रसिद्ध गांधी सेतु निर्मित है।'
      },
      {
        id: 14,
        type: 'mcq',
        marks: 1,
        text: '‘कविराज’ राजशेखर ने काव्यमीमांसा में किसे विद्वानों की परीक्षा स्थली बताया है?',
        options: ['पाटलिपुत्र को', 'उज्जयिनी को', 'मिथिला को', 'काशी को'],
        correctOptionIndex: 0,
        correctAnswer: 'पाटलिपुत्र को',
        explanation: 'अत्रोपवर्षवर्षाविह पाणिनिपिङ्गलाविह व्याडिः वररुचिः पतञ्जलिः इह परीक्षिताः ख्यातिमुपजग्मुः।'
      },
      {
        id: 15,
        type: 'mcq',
        marks: 1,
        text: '‘देव + ऋषिः’ की संधि क्या होगी?',
        options: ['देवर्षिः', 'देवरिषिः', 'देवाऋषिः', 'देवऋषि'],
        correctOptionIndex: 0,
        correctAnswer: 'देवर्षिः',
        explanation: 'अ + ऋ = अर् (गुण स्वर संधि: आद्गुणः)।'
      },
      {
        id: 16,
        type: 'short_answer',
        marks: 2,
        text: 'मंगलम् पाठ के आधार पर सत्य की क्या महिमा है?',
        options: [
          'सत्य की ही सदा विजय होती है, सत्य से ही देवलोक का मार्ग प्रशस्त होता है, सत्यवादी को मोक्ष प्राप्त होता है',
          'सत्य केवल राजाओं के लिए है',
          'सत्य से धन मिलता है',
          'सत्य बोलना व्यर्थ है'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'सत्य की ही सदा विजय होती है, सत्य से ही देवलोक का मार्ग प्रशस्त होता है, सत्यवादी को मोक्ष प्राप्त होता है',
        explanation: 'मुण्डकोपनिषद् के मंत्र ३ में सत्य की पारमार्थिक महिमा प्रतिपादित है।'
      },
      {
        id: 17,
        type: 'short_answer',
        marks: 2,
        text: 'पाटलिपुत्र के प्राचीन दर्शनीय स्थलों के नाम बताएँ।',
        options: [
          'गोलघर, तारामंडल, जैविक उद्यान (संजय गांधी जैविक उद्यान), संग्रहालय, उच्च न्यायालय, गुरुद्वारा',
          'ताजमहल, लाल किला, कुतुब मीनार',
          'हवा महल, जल महल',
          'मीनाक्षी मंदिर'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'गोलघर, तारामंडल, जैविक उद्यान (संजय गांधी जैविक उद्यान), संग्रहालय, उच्च न्यायालय, गुरुद्वारा',
        explanation: 'पाठ में वर्णित पटना के प्रमुख ऐतिहासिक और दर्शनीय स्थल।'
      },
      {
        id: 18,
        type: 'short_answer',
        marks: 2,
        text: '‘आलसकथा’ पाठ के रचयिता कौन हैं और इसका क्या संदेश है?',
        options: [
          'विद्यापति; आलस्य मनुष्य के शरीर में स्थित सबसे बड़ा शत्रु है जिससे बचना चाहिए',
          'कालिदास; आलस्य अच्छी बात है',
          'बाणभट्ट; आलसियों को पुरस्कार मिलना चाहिए',
          'भवभूति; कथा का कोई उद्देश्य नहीं है'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'विद्यापति; आलस्य मनुष्य के शरीर में स्थित सबसे बड़ा शत्रु है जिससे बचना चाहिए',
        explanation: 'मैथिल कोकिल विद्यापति कृत पुरुषपरीक्षा ग्रंथ से संकलित व्यंग्यात्मक कथा।'
      },
      {
        id: 19,
        type: 'long_answer',
        marks: 2,
        text: 'दामोदर गुप्त ने अपने ‘कुट्टनीमत’ काव्य में पाटलिपुत्र की क्या उपमा दी है?',
        options: [
          'अस्ति महीतलतिलकं सरस्वतीकुलगृहं महानगरम्। नाम्ना पाटलिपुत्रं परिभूतपुरन्दरस्थानम् (इंद्रलोक से भी सुंदर)',
          'यह एक साधारण ग्राम है',
          'यह केवल व्यापारियों का नगर है',
          'यह वीरान जगह है'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'अस्ति महीतलतिलकं सरस्वतीकुलगृहं महानगरम्। नाम्ना पाटलिपुत्रं परिभूतपुरन्दरस्थानम् (इंद्रलोक से भी सुंदर)',
        explanation: 'दामोदर गुप्त ने पाटलिपुत्र को पृथ्वी का तिलक, विद्या की नगरी और इंद्र के स्वर्ग से भी श्रेष्ठ बताया।'
      },
      {
        id: 20,
        type: 'long_answer',
        marks: 2,
        text: 'कठोपनिषद् के अनुसार ज्ञानी पुरुष शोक से कब मुक्त हो जाते हैं?',
        options: [
          'जब वे परमात्मा के अनुग्रह से हृदय रूपी गुफा में स्थित सूक्ष्म आत्मा के रहस्य को जान लेते हैं',
          'जब वे बहुत धन कमा लेते हैं',
          'जब वे राज्य जीत लेते हैं',
          'जब वे युद्ध करते हैं'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'जब वे परमात्मा के अनुग्रह से हृदय रूपी गुफा में स्थित सूक्ष्म आत्मा के रहस्य को जान लेते हैं',
        explanation: 'आत्मज्ञान ही मनुष्य को सांसारिक मोह, काम और शोक से सदा के लिए मुक्त करता है।'
      }
    ]
  },

  // ==========================================
  // MATHEMATICS - CLASS 9
  // ==========================================
  {
    id: 'test-math9-ch1-number-systems',
    title: 'Class 9 Maths Ch 1: Number Systems (संख्या पद्धति)',
    board: 'CBSE',
    classLevel: 'Class 9',
    subject: 'Mathematics',
    chapter: 'Ch 1: Number Systems',
    testType: 'chapter',
    durationMinutes: 45,
    totalMarks: 25,
    passingMarks: 10,
    language: 'Bilingual',
    isPublished: true,
    createdAt: '2026-10-18',
    instructions: [
      '20 Questions • 25 Total Marks • Rational & Irrational numbers, Laws of Exponents, Rationalisation'
    ],
    questions: [
      {
        id: 1,
        type: 'mcq',
        marks: 1,
        text: 'Every rational number is:',
        options: ['A real number', 'A whole number', 'An integer', 'A natural number'],
        correctOptionIndex: 0,
        correctAnswer: 'A real number',
        explanation: 'Real numbers comprise all rational and irrational numbers on the number line.'
      },
      {
        id: 2,
        type: 'mcq',
        marks: 1,
        text: 'Between two rational numbers, there are:',
        options: ['Infinitely many rational numbers', 'Exactly one rational number', 'No rational numbers', 'Only 10 rational numbers'],
        correctOptionIndex: 0,
        correctAnswer: 'Infinitely many rational numbers',
        explanation: 'Rational numbers are dense; between any two distinct rational numbers lie infinitely many others.'
      },
      {
        id: 3,
        type: 'mcq',
        marks: 1,
        text: 'The decimal representation of an irrational number is always:',
        options: ['Non-terminating and non-recurring', 'Terminating', 'Non-terminating recurring', 'Terminating recurring'],
        correctOptionIndex: 0,
        correctAnswer: 'Non-terminating and non-recurring',
        explanation: 'By definition, irrational numbers have non-terminating and non-repeating decimal expansions.'
      },
      {
        id: 4,
        type: 'mcq',
        marks: 1,
        text: 'Rationalise the denominator of 1 / (√7 - 2):',
        options: ['(√7 + 2) / 3', '(√7 - 2) / 3', '(√7 + 2) / 5', '√7 + 2'],
        correctOptionIndex: 0,
        correctAnswer: '(√7 + 2) / 3',
        explanation: '(1 / (√7 - 2)) × ((√7 + 2) / (√7 + 2)) = (√7 + 2) / (7 - 4) = (√7 + 2) / 3.'
      },
      {
        id: 5,
        type: 'mcq',
        marks: 1,
        text: 'The value of (64)^(1/2) is:',
        options: ['8', '16', '32', '4'],
        correctOptionIndex: 0,
        correctAnswer: '8',
        explanation: '64^(1/2) = √(64) = 8.'
      },
      {
        id: 6,
        type: 'mcq',
        marks: 1,
        text: 'Simplify: (√3 - √2)(√3 + √2) = ?',
        options: ['1', '5', '√6', '0'],
        correctOptionIndex: 0,
        correctAnswer: '1',
        explanation: '(a - b)(a + b) = a² - b² = (√3)² - (√2)² = 3 - 2 = 1.'
      },
      {
        id: 7,
        type: 'mcq',
        marks: 1,
        text: 'Which of the following is equal to x³?',
        options: ['x⁶ / x³', 'x² × x²', '(x³)³', 'x⁶ - x³'],
        correctOptionIndex: 0,
        correctAnswer: 'x⁶ / x³',
        explanation: 'Law of exponents: xᵃ / xᵇ = x^(a - b) => x⁶ / x³ = x^(6 - 3) = x³.'
      },
      {
        id: 8,
        type: 'mcq',
        marks: 1,
        text: 'Find the value of (125)^(-1/3):',
        options: ['1/5', '5', '-5', '-1/5'],
        correctOptionIndex: 0,
        correctAnswer: '1/5',
        explanation: '(5³)^(-1/3) = 5^(3 × -1/3) = 5^(-1) = 1/5.'
      },
      {
        id: 9,
        type: 'mcq',
        marks: 1,
        text: 'Express 0.3333... in the p/q form (where p and q are integers and q ≠ 0):',
        options: ['1/3', '3/10', '33/100', '1/9'],
        correctOptionIndex: 0,
        correctAnswer: '1/3',
        explanation: 'x = 0.333...; 10x = 3.333...; 9x = 3 => x = 3/9 = 1/3.'
      },
      {
        id: 10,
        type: 'mcq',
        marks: 1,
        text: 'Is zero a rational number?',
        options: ['Yes, it can be written as 0/1 where 1 ≠ 0', 'No, because it has no value', 'Only in negative numbers', 'It is an imaginary number'],
        correctOptionIndex: 0,
        correctAnswer: 'Yes, it can be written as 0/1 where 1 ≠ 0',
        explanation: 'Zero can be written as 0/q (q ≠ 0), so it satisfies the rational definition.'
      },
      {
        id: 11,
        type: 'assertion_reason',
        marks: 1,
        text: 'Assertion (A): √9 is a rational number. \nReason (R): The square root of a perfect square integer is always a rational integer.',
        options: [
          'Both A and R are true and R is the correct explanation of A.',
          'Both A and R are true but R is not the correct explanation.',
          'A is true but R is false.',
          'A is false but R is true.'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Both A and R are true and R is the correct explanation of A.',
        explanation: '√9 = 3 = 3/1, which is a rational number.'
      },
      {
        id: 12,
        type: 'mcq',
        marks: 1,
        text: 'Find the product: (2√2 + 5√3) + (√2 - 3√3) equals:',
        options: ['3√2 + 2√3', '2√2 + 2√3', '3√2 - 2√3', '√2 + 2√3'],
        correctOptionIndex: 0,
        correctAnswer: '3√2 + 2√3',
        explanation: '(2√2 + √2) + (5√3 - 3√3) = 3√2 + 2√3.'
      },
      {
        id: 13,
        type: 'mcq',
        marks: 1,
        text: 'Value of (32)^(2/5) is:',
        options: ['4', '2', '8', '16'],
        correctOptionIndex: 0,
        correctAnswer: '4',
        explanation: '(2⁵)^(2/5) = 2^(5 × 2/5) = 2² = 4.'
      },
      {
        id: 14,
        type: 'mcq',
        marks: 1,
        text: 'Find a rational number between 1/4 and 1/2:',
        options: ['3/8', '1/8', '5/8', '7/8'],
        correctOptionIndex: 0,
        correctAnswer: '3/8',
        explanation: 'Mean = (1/4 + 1/2) / 2 = (3/4) / 2 = 3/8.'
      },
      {
        id: 15,
        type: 'mcq',
        marks: 1,
        text: 'The value of 7^(1/2) × 8^(1/2) is:',
        options: ['(56)^(1/2)', '56', '15^(1/2)', '28'],
        correctOptionIndex: 0,
        correctAnswer: '(56)^(1/2)',
        explanation: 'aᵐ × bᵐ = (ab)ᵐ => (7 × 8)^(1/2) = (56)^(1/2).'
      },
      {
        id: 16,
        type: 'short_answer',
        marks: 2,
        text: 'Rationalise: 5 / (√3 - √5).',
        options: ['-5(√3 + √5) / 2', '5(√3 + √5) / 2', '-5(√3 - √5) / 2', '√3 + √5'],
        correctOptionIndex: 0,
        correctAnswer: '-5(√3 + √5) / 2',
        explanation: 'Multiply by (√3 + √5): 5(√3 + √5) / (3 - 5) = -5(√3 + √5) / 2.'
      },
      {
        id: 17,
        type: 'short_answer',
        marks: 2,
        text: 'Express 0.2353535... in p/q form.',
        options: ['233 / 990', '235 / 999', '23 / 99', '235 / 990'],
        correctOptionIndex: 0,
        correctAnswer: '233 / 990',
        explanation: 'Let x = 0.23535...; 10x = 2.3535...; 1000x = 235.3535... Subtracting gives 990x = 233 => x = 233/990.'
      },
      {
        id: 18,
        type: 'short_answer',
        marks: 2,
        text: 'If x = 2 + √3, find the value of (x + 1/x).',
        options: ['4', '2√3', '2', '8'],
        correctOptionIndex: 0,
        correctAnswer: '4',
        explanation: '1/x = 1/(2 + √3) = 2 - √3. Thus x + 1/x = (2 + √3) + (2 - √3) = 4.'
      },
      {
        id: 19,
        type: 'long_answer',
        marks: 2,
        text: 'Find values of a and b if: (√3 - 1)/(√3 + 1) = a + b√3.',
        options: ['a = 2, b = -1', 'a = 1, b = 2', 'a = -2, b = 1', 'a = 3, b = -1'],
        correctOptionIndex: 0,
        correctAnswer: 'a = 2, b = -1',
        explanation: '(√3 - 1)² / (3 - 1) = (3 + 1 - 2√3) / 2 = (4 - 2√3) / 2 = 2 - √3. Comparing with a + b√3 gives a = 2, b = -1.'
      },
      {
        id: 20,
        type: 'long_answer',
        marks: 2,
        text: 'Simplify: (81/16)^(-3/4) × [(25/9)^(-3/2) ÷ (5/2)⁻³].',
        options: ['1', '8/27', '27/8', '5/3'],
        correctOptionIndex: 0,
        correctAnswer: '1',
        explanation: 'Converting all terms to prime factors yields 1 after cancellation.'
      }
    ]
  },

  // ==========================================
  // SCIENCE - CLASS 9 (PHYSICS & CHEMISTRY)
  // ==========================================
  {
    id: 'test-sci9-phy-motion',
    title: 'Class 9 Science Ch 7: Motion & Laws of Motion (गति एवं बल)',
    board: 'CBSE',
    classLevel: 'Class 9',
    subject: 'Science',
    chapter: 'Ch 7 & 8: Motion and Force',
    testType: 'chapter',
    durationMinutes: 45,
    totalMarks: 25,
    passingMarks: 10,
    language: 'Bilingual',
    isPublished: true,
    createdAt: '2026-10-18',
    instructions: [
      '20 Questions • 25 Total Marks • Velocity, Acceleration, Equations of Motion, Newton’s Laws'
    ],
    questions: [
      {
        id: 1,
        type: 'mcq',
        marks: 1,
        text: 'The slope of a velocity-time (v-t) graph gives:',
        options: ['Acceleration', 'Distance', 'Displacement', 'Speed'],
        correctOptionIndex: 0,
        correctAnswer: 'Acceleration',
        explanation: 'Slope = change in velocity / time taken = a.'
      },
      {
        id: 2,
        type: 'mcq',
        marks: 1,
        text: 'The area under a velocity-time graph represents:',
        options: ['Distance or Displacement', 'Acceleration', 'Velocity', 'Force'],
        correctOptionIndex: 0,
        correctAnswer: 'Distance or Displacement',
        explanation: 'Area under v-t graph = velocity × time = displacement.'
      },
      {
        id: 3,
        type: 'mcq',
        marks: 1,
        text: 'Which equation of motion gives the position-time relation?',
        options: ['s = ut + ½ at²', 'v = u + at', 'v² - u² = 2as', 'F = ma'],
        correctOptionIndex: 0,
        correctAnswer: 's = ut + ½ at²',
        explanation: 'Standard second equation of uniform accelerated motion.'
      },
      {
        id: 4,
        type: 'mcq',
        marks: 1,
        text: 'What is the SI unit of momentum (संवेग)?',
        options: ['kg m/s', 'kg m/s²', 'N m', 'Joule'],
        correctOptionIndex: 0,
        correctAnswer: 'kg m/s',
        explanation: 'Momentum p = mass × velocity = kg × m/s.'
      },
      {
        id: 5,
        type: 'mcq',
        marks: 1,
        text: 'Newton\'s First Law of Motion is also termed as the law of:',
        options: ['Inertia (जड़त्व)', 'Momentum', 'Action and reaction', 'Energy conservation'],
        correctOptionIndex: 0,
        correctAnswer: 'Inertia (जड़त्व)',
        explanation: 'An object remains at rest or in uniform motion unless acted upon by an external net force.'
      },
      {
        id: 6,
        type: 'mcq',
        marks: 1,
        text: 'When a car rounds a curved path at constant speed, its velocity is:',
        options: ['Changing because its direction of motion changes continuously', 'Constant', 'Zero', 'Decreasing'],
        correctOptionIndex: 0,
        correctAnswer: 'Changing because its direction of motion changes continuously',
        explanation: 'Velocity is a vector quantity; changing direction changes velocity (circular acceleration).'
      },
      {
        id: 7,
        type: 'mcq',
        marks: 1,
        text: 'Action and reaction forces according to Newton\'s Third Law:',
        options: ['Act on two different bodies simultaneously', 'Act on the same body in same direction', 'Cancel each other out completely', 'Act at different times'],
        correctOptionIndex: 0,
        correctAnswer: 'Act on two different bodies simultaneously',
        explanation: 'Forces always occur in matched pairs acting on opposing interaction bodies.'
      },
      {
        id: 8,
        type: 'mcq',
        marks: 1,
        text: 'A passenger in a moving bus falls forward when the bus stops suddenly due to:',
        options: ['Inertia of motion', 'Inertia of rest', 'Inertia of direction', 'Gravitation'],
        correctOptionIndex: 0,
        correctAnswer: 'Inertia of motion',
        explanation: 'The upper body tends to keep moving forward due to inertia while feet stop with the bus floor.'
      },
      {
        id: 9,
        type: 'mcq',
        marks: 1,
        text: 'A car accelerates uniformly from 18 km/h to 36 km/h in 5 seconds. Its acceleration is:',
        options: ['1 m/s²', '2 m/s²', '3.6 m/s²', '0.5 m/s²'],
        correctOptionIndex: 0,
        correctAnswer: '1 m/s²',
        explanation: 'u = 18 × 5/18 = 5 m/s; v = 36 × 5/18 = 10 m/s. a = (10 - 5) / 5 = 1 m/s².'
      },
      {
        id: 10,
        type: 'mcq',
        marks: 1,
        text: 'The rate of change of momentum is proportional to the applied:',
        options: ['Unbalanced external force', 'Velocity', 'Distance', 'Work'],
        correctOptionIndex: 0,
        correctAnswer: 'Unbalanced external force',
        explanation: 'Newton\'s Second Law: F = dp/dt = ma.'
      },
      {
        id: 11,
        type: 'assertion_reason',
        marks: 1,
        text: 'Assertion (A): Displacement can be zero even when distance covered is non-zero. \nReason (R): Displacement is the shortest straight-line distance between initial and final points.',
        options: [
          'Both A and R are true and R is the correct explanation of A.',
          'Both A and R are true but R is not the correct explanation.',
          'A is true but R is false.',
          'A is false but R is true.'
        ],
        correctOptionIndex: 0,
        correctAnswer: 'Both A and R are true and R is the correct explanation of A.',
        explanation: 'Completing a full round of a circular track gives distance 2πr but displacement 0.'
      },
      {
        id: 12,
        type: 'mcq',
        marks: 1,
        text: 'A force of 5 N produces an acceleration of 10 m/s² on a mass m₁. What is the mass m₁?',
        options: ['0.5 kg', '2 kg', '50 kg', '5 kg'],
        correctOptionIndex: 0,
        correctAnswer: '0.5 kg',
        explanation: 'm = F / a = 5 / 10 = 0.5 kg.'
      },
      {
        id: 13,
        type: 'mcq',
        marks: 1,
        text: 'Rocket propulsion works on the principle of conservation of:',
        options: ['Linear momentum', 'Mass', 'Kinetic energy', 'Angular momentum'],
        correctOptionIndex: 0,
        correctAnswer: 'Linear momentum',
        explanation: 'Backward expulsion of high-velocity exhaust gases propels the rocket forward.'
      },
      {
        id: 14,
        type: 'mcq',
        marks: 1,
        text: 'Why does a cricket fielder pull his hands backward while catching a fast moving ball?',
        options: ['To increase time of impact, thereby reducing the impact force on hands', 'To look stylish', 'To stop the ball faster', 'To increase momentum'],
        correctOptionIndex: 0,
        correctAnswer: 'To increase time of impact, thereby reducing the impact force on hands',
        explanation: 'F = Δp / Δt. Increasing Δt dramatically reduces the deceleration force F.'
      },
      {
        id: 15,
        type: 'mcq',
        marks: 1,
        text: 'Which object has the greatest inertia?',
        options: ['A cricket ball', 'A tennis ball', 'A heavy iron train carriage', 'A bicycle'],
        correctOptionIndex: 2,
        correctAnswer: 'A heavy iron train carriage',
        explanation: 'Inertia is directly proportional to mass; train carriage has the largest mass.'
      },
      {
        id: 16,
        type: 'short_answer',
        marks: 2,
        text: 'An athlete completes one round of a circular track of diameter 200 m in 40 s. What will be distance and displacement at 2 min 20 s?',
        options: ['Distance = 2200 m, Displacement = 200 m', 'Distance = 1100 m, Displacement = 0', 'Distance = 4400 m, Displacement = 100 m', 'Distance = 200 m, Displacement = 2200 m'],
        correctOptionIndex: 0,
        correctAnswer: 'Distance = 2200 m, Displacement = 200 m',
        explanation: 'Time = 140 s = 3.5 rounds. Distance = 3.5 × (π × 200) = 2200 m. Displacement = diameter = 200 m.'
      },
      {
        id: 17,
        type: 'short_answer',
        marks: 2,
        text: 'State Newton\'s Second Law of Motion and derive F = ma.',
        options: ['F ∝ (mv - mu)/t = m(v - u)/t = ma', 'F = m/a', 'F = v/t', 'F = mv²'],
        correctOptionIndex: 0,
        correctAnswer: 'F ∝ (mv - mu)/t = m(v - u)/t = ma',
        explanation: 'Standard derivation showing rate of change of momentum.'
      },
      {
        id: 18,
        type: 'short_answer',
        marks: 2,
        text: 'A bullet of mass 20 g is fired horizontally with a velocity 150 m/s from a pistol of mass 2 kg. Find recoil velocity of the pistol.',
        options: ['-1.5 m/s', '-3.0 m/s', '-0.75 m/s', '-15 m/s'],
        correctOptionIndex: 0,
        correctAnswer: '-1.5 m/s',
        explanation: 'By conservation of momentum: 0 = m₁v₁ + m₂v₂ => (0.020 × 150) + 2 × v₂ = 0 => 3 + 2v₂ = 0 => v₂ = -1.5 m/s.'
      },
      {
        id: 19,
        type: 'long_answer',
        marks: 2,
        text: 'Derive v² - u² = 2as graphically or algebraically.',
        options: ['Using distance s = average velocity × time = ((u + v)/2) × ((v - u)/a) = (v² - u²)/(2a)', 'By adding v and u', 'By dividing acceleration by mass', 'By integrating time'],
        correctOptionIndex: 0,
        correctAnswer: 'Using distance s = average velocity × time = ((u + v)/2) × ((v - u)/a) = (v² - u²)/(2a)',
        explanation: 'Third equation of motion algebraic derivation.'
      },
      {
        id: 20,
        type: 'long_answer',
        marks: 2,
        text: 'Explain why water droplets shake off a wet umbrella when it is vigorously twirled and stopped.',
        options: ['Due to inertia of motion, water droplets continue moving tangentially when the umbrella cloth stops', 'Because water reacts chemically with fabric', 'Because of electrical attraction', 'Because gravity pulls it upwards'],
        correctOptionIndex: 0,
        correctAnswer: 'Due to inertia of motion, water droplets continue moving tangentially when the umbrella cloth stops',
        explanation: 'The droplets resist the change in their motion state and fly off.'
      }
    ]
  }
];
