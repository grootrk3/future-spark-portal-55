
export const programsData = [
  {
    id: 1,
    title: "Computer Science",
    category: "Technology",
    description: "Develop expertise in artificial intelligence, software engineering, and data science with our comprehensive program.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
    duration: "4 years",
    degreeLevel: "Bachelor's Degree",
    tuition: "$9,500 per year",
    startDates: "September, January",
    semesters: [
      {
        courses: [
          { title: "Introduction to Computer Science", credits: 3, description: "Foundational concepts and principles of computer science." },
          { title: "Calculus I", credits: 4, description: "Limits, derivatives, integrals and their applications." },
          { title: "English Composition", credits: 3, description: "Effective writing and communication skills." },
          { title: "Introduction to Programming", credits: 4, description: "Fundamentals of programming using Python." },
        ]
      },
      {
        courses: [
          { title: "Data Structures", credits: 4, description: "Implementation and usage of fundamental data structures." },
          { title: "Discrete Mathematics", credits: 3, description: "Logic, sets, relations, and combinatorics." },
          { title: "Calculus II", credits: 4, description: "Advanced integration techniques and series." },
          { title: "Physics for Computer Scientists", credits: 3, description: "Basic physical principles for computation." },
        ]
      },
      {
        courses: [
          { title: "Algorithms and Complexity", credits: 4, description: "Design and analysis of efficient algorithms." },
          { title: "Computer Architecture", credits: 3, description: "Organization and design of computer systems." },
          { title: "Database Systems", credits: 4, description: "Design and implementation of database systems." },
          { title: "Statistics for Computing", credits: 3, description: "Statistical methods for data analysis." },
        ]
      },
      {
        courses: [
          { title: "Operating Systems", credits: 4, description: "Principles and practices of modern operating systems." },
          { title: "Software Engineering", credits: 4, description: "Methodologies and tools for software development." },
          { title: "Web Development", credits: 3, description: "Client and server-side web technologies." },
          { title: "Ethics in Computing", credits: 2, description: "Ethical issues in computing and technology." },
        ]
      }
    ],
    requirements: {
      general: [
        "Completed application form",
        "High school diploma or equivalent",
        "Letters of recommendation",
        "Personal statement",
        "Application fee"
      ],
      academic: [
        "Minimum GPA of 3.0",
        "Completion of prerequisite courses: Algebra II, Pre-Calculus",
        "SAT score of at least 1200 or ACT score of at least 25",
        "Demonstrated interest in computer science"
      ]
    },
    careers: [
      { 
        title: "Software Developer", 
        description: "Design, build and maintain software applications for various platforms and industries." 
      },
      { 
        title: "Data Scientist", 
        description: "Analyze complex data sets to extract meaningful insights for decision making." 
      },
      { 
        title: "Machine Learning Engineer", 
        description: "Create and implement AI and machine learning algorithms for various applications." 
      },
      { 
        title: "DevOps Engineer", 
        description: "Bridge software development and IT operations to improve deployment efficiency." 
      }
    ]
  },
  {
    id: 2,
    title: "Business Administration",
    category: "Business",
    description: "Learn key management principles, finance, marketing, and entrepreneurship skills needed in today's global economy.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800",
    duration: "4 years",
    degreeLevel: "Bachelor's Degree",
    tuition: "$8,800 per year",
    startDates: "September, January, May",
    semesters: [
      {
        courses: [
          { title: "Principles of Management", credits: 3, description: "Introduction to management theory and practice." },
          { title: "Microeconomics", credits: 3, description: "Study of markets, prices, and individual economic decisions." },
          { title: "Business Mathematics", credits: 3, description: "Mathematical tools for business decision making." },
          { title: "Business Communication", credits: 3, description: "Effective communication in business contexts." },
        ]
      },
      {
        courses: [
          { title: "Principles of Marketing", credits: 3, description: "Marketing concepts, strategies and implementation." },
          { title: "Macroeconomics", credits: 3, description: "Study of national economies and global economic systems." },
          { title: "Financial Accounting", credits: 4, description: "Recording, reporting, and analyzing financial transactions." },
          { title: "Business Law", credits: 3, description: "Legal principles affecting business operations." },
        ]
      },
      {
        courses: [
          { title: "Managerial Accounting", credits: 3, description: "Accounting information for internal decision making." },
          { title: "Organizational Behavior", credits: 3, description: "Human behavior in organizational settings." },
          { title: "Business Statistics", credits: 4, description: "Statistical methods for business analysis." },
          { title: "Operations Management", credits: 3, description: "Managing production and service operations." },
        ]
      },
      {
        courses: [
          { title: "Strategic Management", credits: 4, description: "Integration of business functions for organizational success." },
          { title: "Corporate Finance", credits: 3, description: "Financial decision making in corporate context." },
          { title: "International Business", credits: 3, description: "Global business practices and cross-cultural management." },
          { title: "Business Ethics", credits: 3, description: "Ethical issues and decision making in business." },
        ]
      }
    ],
    requirements: {
      general: [
        "Completed application form",
        "High school diploma or equivalent",
        "Letters of recommendation",
        "Personal statement",
        "Application fee"
      ],
      academic: [
        "Minimum GPA of 2.8",
        "Completion of basic mathematics courses",
        "SAT score of at least 1100 or ACT score of at least 22",
        "Demonstrated leadership potential"
      ]
    },
    careers: [
      { 
        title: "Business Analyst", 
        description: "Analyze business processes and recommend improvements for efficiency and profitability." 
      },
      { 
        title: "Marketing Manager", 
        description: "Develop and implement marketing strategies to promote products or services." 
      },
      { 
        title: "Financial Advisor", 
        description: "Provide guidance on investments, insurance, taxes, and financial planning." 
      },
      { 
        title: "Human Resources Manager", 
        description: "Oversee recruitment, employee relations, and organizational development." 
      }
    ]
  },
  {
    id: 3,
    title: "Environmental Science",
    category: "Science",
    description: "Study sustainability, conservation, and environmental policy to address the world's most pressing ecological challenges.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800",
    duration: "4 years",
    degreeLevel: "Bachelor's Degree",
    tuition: "$9,200 per year",
    startDates: "September",
    semesters: [
      {
        courses: [
          { title: "Introduction to Environmental Science", credits: 4, description: "Overview of environmental systems and human impacts." },
          { title: "General Biology I", credits: 4, description: "Fundamentals of cellular and molecular biology." },
          { title: "General Chemistry I", credits: 4, description: "Basic principles of chemistry and lab techniques." },
          { title: "Environmental Ethics", credits: 3, description: "Ethical considerations in environmental decision making." },
        ]
      },
      {
        courses: [
          { title: "Ecology", credits: 4, description: "Relationships between organisms and their environments." },
          { title: "General Biology II", credits: 4, description: "Evolution, diversity, and physiology of organisms." },
          { title: "General Chemistry II", credits: 4, description: "Advanced chemistry concepts and applications." },
          { title: "Statistics for Scientists", credits: 3, description: "Statistical methods for analyzing scientific data." },
        ]
      },
      {
        courses: [
          { title: "Conservation Biology", credits: 4, description: "Principles and practices of conserving biodiversity." },
          { title: "Climate Science", credits: 3, description: "Atmospheric processes and climate change science." },
          { title: "Environmental Policy", credits: 3, description: "Laws, regulations and policies affecting the environment." },
          { title: "GIS for Environmental Science", credits: 3, description: "Geographic Information Systems for environmental analysis." },
        ]
      },
      {
        courses: [
          { title: "Sustainable Resource Management", credits: 4, description: "Sustainable use of natural resources." },
          { title: "Environmental Toxicology", credits: 3, description: "Effects of pollutants on ecosystems and organisms." },
          { title: "Field Research Methods", credits: 4, description: "Techniques for environmental field research." },
          { title: "Capstone: Environmental Impact Assessment", credits: 3, description: "Comprehensive environmental impact study." },
        ]
      }
    ],
    requirements: {
      general: [
        "Completed application form",
        "High school diploma or equivalent",
        "Letters of recommendation",
        "Personal statement",
        "Application fee"
      ],
      academic: [
        "Minimum GPA of 3.0",
        "Completion of prerequisite courses: Biology, Chemistry",
        "SAT score of at least 1150 or ACT score of at least 24",
        "Demonstrated interest in environmental issues"
      ]
    },
    careers: [
      { 
        title: "Environmental Scientist", 
        description: "Study environmental problems and develop solutions to protect the earth." 
      },
      { 
        title: "Conservation Scientist", 
        description: "Manage the overall land quality of forests, parks, and other natural resources." 
      },
      { 
        title: "Environmental Policy Analyst", 
        description: "Research and analyze environmental issues and develop policy recommendations." 
      },
      { 
        title: "Sustainability Consultant", 
        description: "Help organizations improve their environmental performance and reduce impact." 
      }
    ]
  },
  {
    id: 4,
    title: "Nursing",
    category: "Healthcare",
    description: "Prepare for a career in healthcare with comprehensive training in patient care, medical procedures, and healthcare ethics.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800",
    duration: "4 years",
    degreeLevel: "Bachelor's Degree",
    tuition: "$10,500 per year",
    startDates: "September",
    semesters: [
      {
        courses: [
          { title: "Anatomy and Physiology I", credits: 4, description: "Structure and function of the human body." },
          { title: "Chemistry for Health Sciences", credits: 3, description: "Chemical principles relevant to healthcare." },
          { title: "Psychology", credits: 3, description: "Introduction to human behavior and mental processes." },
          { title: "Introduction to Nursing", credits: 2, description: "Overview of nursing profession and practice." },
        ]
      },
      {
        courses: [
          { title: "Anatomy and Physiology II", credits: 4, description: "Advanced study of human body systems." },
          { title: "Microbiology", credits: 4, description: "Study of microorganisms and their impact on health." },
          { title: "Nutrition", credits: 3, description: "Principles of nutrition and diet therapy." },
          { title: "Fundamentals of Nursing", credits: 4, description: "Basic nursing skills and concepts." },
        ]
      },
      {
        courses: [
          { title: "Pharmacology", credits: 3, description: "Drug classifications, actions, and nursing implications." },
          { title: "Adult Health Nursing I", credits: 5, description: "Care of adults with common health problems." },
          { title: "Mental Health Nursing", credits: 4, description: "Care of patients with psychiatric disorders." },
          { title: "Nursing Research", credits: 3, description: "Research methods and evidence-based practice." },
        ]
      },
      {
        courses: [
          { title: "Maternal-Child Nursing", credits: 5, description: "Care of women and children during pregnancy and childhood." },
          { title: "Adult Health Nursing II", credits: 5, description: "Care of adults with complex health problems." },
          { title: "Community Health Nursing", credits: 4, description: "Health promotion and disease prevention in communities." },
          { title: "Nursing Leadership", credits: 3, description: "Leadership and management in nursing practice." },
        ]
      }
    ],
    requirements: {
      general: [
        "Completed application form",
        "High school diploma or equivalent",
        "Letters of recommendation",
        "Personal statement",
        "Application fee",
        "Criminal background check"
      ],
      academic: [
        "Minimum GPA of 3.2",
        "Completion of prerequisite courses: Biology, Chemistry",
        "SAT score of at least 1200 or ACT score of at least 25",
        "CPR certification before clinical rotations"
      ]
    },
    careers: [
      { 
        title: "Registered Nurse", 
        description: "Provide and coordinate patient care in various healthcare settings." 
      },
      { 
        title: "Nurse Educator", 
        description: "Teach nursing students and provide continuing education for nurses." 
      },
      { 
        title: "Clinical Nurse Specialist", 
        description: "Expert in a specialized area of nursing practice." 
      },
      { 
        title: "Nurse Manager", 
        description: "Supervise nursing staff and manage patient care units." 
      }
    ]
  },
  {
    id: 5,
    title: "Mechanical Engineering",
    category: "Engineering",
    description: "Learn to design, develop, and test mechanical and thermal devices including tools, engines, and machines.",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800",
    duration: "4 years",
    degreeLevel: "Bachelor's Degree",
    tuition: "$11,200 per year",
    startDates: "September, January",
    semesters: [
      {
        courses: [
          { title: "Calculus I", credits: 4, description: "Limits, derivatives, integrals and their applications." },
          { title: "General Physics I", credits: 4, description: "Mechanics, heat, and sound with lab." },
          { title: "Introduction to Engineering", credits: 3, description: "Overview of engineering disciplines and problem-solving." },
          { title: "Engineering Graphics", credits: 3, description: "Technical drawing and CAD fundamentals." },
        ]
      },
      {
        courses: [
          { title: "Calculus II", credits: 4, description: "Advanced integration techniques and series." },
          { title: "General Physics II", credits: 4, description: "Electricity, magnetism, and optics with lab." },
          { title: "Materials Science", credits: 3, description: "Properties and applications of engineering materials." },
          { title: "Programming for Engineers", credits: 3, description: "Computer programming for engineering applications." },
        ]
      },
      {
        courses: [
          { title: "Differential Equations", credits: 3, description: "Solving and applying differential equations." },
          { title: "Thermodynamics", credits: 3, description: "Energy, heat, and work relationships." },
          { title: "Dynamics", credits: 3, description: "Motion of bodies under the action of forces." },
          { title: "Electric Circuits", credits: 3, description: "Fundamentals of electrical circuit analysis." },
        ]
      },
      {
        courses: [
          { title: "Fluid Mechanics", credits: 3, description: "Behavior of fluids at rest and in motion." },
          { title: "Heat Transfer", credits: 3, description: "Principles of conduction, convection, and radiation." },
          { title: "Machine Design", credits: 4, description: "Design of machine elements and mechanical systems." },
          { title: "Control Systems", credits: 3, description: "Analysis and design of control systems." },
        ]
      }
    ],
    requirements: {
      general: [
        "Completed application form",
        "High school diploma or equivalent",
        "Letters of recommendation",
        "Personal statement",
        "Application fee"
      ],
      academic: [
        "Minimum GPA of 3.2",
        "Completion of prerequisite courses: Calculus, Physics, Chemistry",
        "SAT score of at least 1250 or ACT score of at least 26",
        "Demonstrated interest in engineering through coursework or activities"
      ]
    },
    careers: [
      { 
        title: "Mechanical Engineer", 
        description: "Design and develop mechanical systems and components for various industries." 
      },
      { 
        title: "Automotive Engineer", 
        description: "Design and develop vehicles and vehicle systems." 
      },
      { 
        title: "Aerospace Engineer", 
        description: "Design aircraft, spacecraft, and propulsion systems." 
      },
      { 
        title: "Robotics Engineer", 
        description: "Design and develop robotic systems and automated equipment." 
      }
    ]
  },
  {
    id: 6,
    title: "Psychology",
    category: "Social Sciences",
    description: "Explore human behavior and mental processes through scientific research, theories, and therapeutic techniques.",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=800",
    duration: "4 years",
    degreeLevel: "Bachelor's Degree",
    tuition: "$8,900 per year",
    startDates: "September, January",
    semesters: [
      {
        courses: [
          { title: "Introduction to Psychology", credits: 3, description: "Overview of psychological principles and theories." },
          { title: "Statistics for Social Sciences", credits: 3, description: "Basic statistical methods in psychological research." },
          { title: "Critical Thinking", credits: 3, description: "Principles of logical reasoning and argument evaluation." },
          { title: "Biology for Social Sciences", credits: 3, description: "Biological foundations of behavior." },
        ]
      },
      {
        courses: [
          { title: "Developmental Psychology", credits: 3, description: "Human development across the lifespan." },
          { title: "Research Methods in Psychology", credits: 4, description: "Design and implementation of psychological research." },
          { title: "Social Psychology", credits: 3, description: "Individual behavior in social contexts." },
          { title: "Personality Psychology", credits: 3, description: "Theories and research on personality development." },
        ]
      },
      {
        courses: [
          { title: "Abnormal Psychology", credits: 3, description: "Psychological disorders and treatments." },
          { title: "Cognitive Psychology", credits: 3, description: "Mental processes including perception, memory, and thinking." },
          { title: "Biological Psychology", credits: 3, description: "Neural bases of behavior and mental processes." },
          { title: "Psychology of Learning", credits: 3, description: "Principles and theories of learning and behavior." },
        ]
      },
      {
        courses: [
          { title: "Clinical Psychology", credits: 3, description: "Theory and practice of psychological assessment and intervention." },
          { title: "Cross-Cultural Psychology", credits: 3, description: "Cultural influences on psychological processes." },
          { title: "History and Systems of Psychology", credits: 3, description: "Historical development of psychological theories." },
          { title: "Capstone Research Project", credits: 4, description: "Independent research in psychology." },
        ]
      }
    ],
    requirements: {
      general: [
        "Completed application form",
        "High school diploma or equivalent",
        "Letters of recommendation",
        "Personal statement",
        "Application fee"
      ],
      academic: [
        "Minimum GPA of 2.8",
        "Completion of introductory social science courses",
        "SAT score of at least 1100 or ACT score of at least 23",
        "Interest in human behavior and mental processes"
      ]
    },
    careers: [
      { 
        title: "Mental Health Counselor", 
        description: "Provide treatment for mental health issues and emotional disorders." 
      },
      { 
        title: "Human Resources Specialist", 
        description: "Apply psychological principles to personnel management and development." 
      },
      { 
        title: "Market Research Analyst", 
        description: "Study market conditions and consumer behavior to examine sales potential." 
      },
      { 
        title: "Research Assistant", 
        description: "Support psychological research in academic or clinical settings." 
      }
    ]
  }
];
