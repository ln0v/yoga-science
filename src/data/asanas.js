// src/data/asanas.js

export const ASANAS = [
  {
    id: "tadasana",
    sanskrit: "Tadasana",
    english: "Mountain Pose",
    type: "standing",
    image: "/asanas/tadasana.svg",
    evidenceLevel: "insufficient",
    tags: ["posture", "alignment", "foundation"],
    conditionsLinked: ["back-pain", "posture"],
    shortSummary:
      "A foundational standing pose focusing on alignment, balance, and postural awareness.",
    traditionalBenefits: [
      "Improves posture and balance",
      "Develops awareness of alignment",
      "Prepares body and mind for practice",
    ],
    researchSummary:
      "Most research on posture and balance in yoga uses broader standing-sequence protocols; there are no pose-specific clinical trials for Tadasana alone. Tadasana is often included as a foundational posture in programs for low back pain and balance training.",
    safetyNotes: [
      "Generally safe for most people.",
      "Those with balance issues may practice near a wall or chair for support.",
    ],
    references: [
      {
        label: "Example: Yoga for chronic low back pain (programs including standing poses)",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
      },
    ],
  },
  {
    id: "vrksasana",
    sanskrit: "Vṛkṣāsana",
    english: "Tree Pose",
    type: "balancing",
    image: "/asanas/vrksasana.svg",
    evidenceLevel: "preliminary",
    tags: ["balance", "focus", "standing"],
    conditionsLinked: ["balance-training", "fall-prevention"],
    shortSummary:
      "A one-legged balance pose that trains stability, proprioception, and concentration.",
    traditionalBenefits: [
      "Improves balance and leg strength",
      "Enhances focus and mental steadiness",
    ],
    researchSummary:
      "Balance-focused yoga programs that include Tree Pose have been studied for fall risk reduction and balance improvement in older adults, though effects are from the overall program, not this pose in isolation.",
    safetyNotes: [
      "Practice near a wall or support if balance is limited.",
      "Avoid placing the foot directly on the knee joint.",
    ],
    references: [
      {
        label: "Example: Yoga and balance in older adults",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
      },
    ],
  },
  {
    id: "bhujangasana",
    sanskrit: "Bhujangasana",
    english: "Cobra Pose",
    type: "backbend",
    image: "/asanas/bhujangasana.svg",
    evidenceLevel: "preliminary",
    tags: ["backbend", "spine", "extension"],
    conditionsLinked: ["low-back-pain"],
    shortSummary:
      "A gentle prone backbend that strengthens back muscles and opens the chest.",
    traditionalBenefits: [
      "Strengthens back muscles",
      "Opens chest and shoulders",
      "Traditionally said to invigorate the spine",
    ],
    researchSummary:
      "Prone backbends similar to Cobra are commonly incorporated into physiotherapy and yoga programs for chronic low back pain. Evidence supports such multi-pose programs, but not this pose alone.",
    safetyNotes: [
      "Avoid forcing into pain, especially with disc issues or acute back injury.",
      "Keep lower ribs on the floor in gentle variations.",
    ],
    references: [
      {
        label: "Example: Yoga for chronic low back pain programs",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
      },
    ],
  },
  {
    id: "adho-mukha-svanasana",
    sanskrit: "Adho Mukha Śvānāsana",
    english: "Downward-Facing Dog",
    type: "inversion",
    image: "/asanas/adho-mukha-svanasana.svg",
    evidenceLevel: "preliminary",
    tags: ["inversion", "shoulders", "hamstrings"],
    conditionsLinked: ["general-fitness", "stress"],
    shortSummary:
      "An inverted V-shaped pose stretching hamstrings, calves, and shoulders, often used as a transition and rest.",
    traditionalBenefits: [
      "Elongates spine and back body",
      "Builds arm and shoulder strength",
      "Traditionally said to calm the mind",
    ],
    researchSummary:
      "Often included in Hatha and Vinyasa yoga protocols studied for general fitness and stress reduction; specific pose-level evidence is limited.",
    safetyNotes: [
      "Modify for wrist, shoulder, or hamstring issues.",
      "Those with uncontrolled hypertension or glaucoma should seek medical advice before regular practice.",
    ],
    references: [
      {
        label: "Example: Hatha yoga trials for stress and fitness",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
      },
    ],
  },
  {
    id: "trikonasana",
    sanskrit: "Trikoṇāsana",
    english: "Triangle Pose",
    type: "standing",
    image: "/asanas/trikonasana.svg",
    evidenceLevel: "insufficient",
    tags: ["side-bend", "hamstrings", "hips"],
    conditionsLinked: ["back-pain", "general-flexibility"],
    shortSummary:
      "A standing lateral stretch that lengthens the side body and hamstrings while challenging balance.",
    traditionalBenefits: [
      "Stretches legs and side body",
      "Improves spinal mobility",
      "Traditionally associated with digestive support",
    ],
    researchSummary:
      "Triangle Pose appears in many multi-pose yoga interventions, especially for flexibility and back health; there is insufficient evidence specific to this pose alone.",
    safetyNotes: [
      "Avoid collapsing into the lower side; use a block under the hand.",
      "Caution with lumbar disc problems or SI joint issues.",
    ],
    references: [
      {
        label: "Example: Yoga flexibility programs",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
      },
    ],
  },
  {
    id: "setu-bandha-sarvangasana",
    sanskrit: "Setu Bandha Sarvāṅgāsana",
    english: "Bridge Pose",
    type: "backbend",
    image: "/asanas/setu-bandha-sarvangasana.svg",
    evidenceLevel: "preliminary",
    tags: ["backbend", "hips", "glutes"],
    conditionsLinked: ["low-back-pain", "mood"],
    shortSummary:
      "A supine backbend strengthening glutes and hamstrings while opening the front of the body.",
    traditionalBenefits: [
      "Strengthens back and legs",
      "Opens chest and hip flexors",
      "Traditionally thought to uplift mood",
    ],
    researchSummary:
      "Included in several yoga interventions for back pain and mood; research supports program-level benefits, not pose-specific effects.",
    safetyNotes: [
      "Avoid forcing the neck; keep weight on shoulders and upper back.",
      "Caution with cervical spine issues or recent spinal surgery.",
    ],
    references: [
      {
        label: "Example: Yoga for back pain and depression (multi-pose protocols)",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
      },
    ],
  },
  {
    id: "balasana",
    sanskrit: "Balasana",
    english: "Child’s Pose",
    type: "forward-fold",
    image: "/asanas/balasana.svg",
    evidenceLevel: "insufficient",
    tags: ["restorative", "forward-fold", "relaxation"],
    conditionsLinked: ["stress", "anxiety"],
    shortSummary:
      "A resting pose that gently flexes the spine and can promote a sense of safety and ease.",
    traditionalBenefits: [
      "Calms the nervous system",
      "Gently stretches back and hips",
      "Used as a rest during practice",
    ],
    researchSummary:
      "Restorative and gentle forward-folding poses like Child’s Pose are widely used in programs for stress, anxiety, and chronic pain, but there is no pose-specific clinical trial evidence.",
    safetyNotes: [
      "Modify or widen knees for knee issues.",
      "Use props if hips do not comfortably reach towards heels.",
    ],
    references: [
      {
        label: "Example: Restorative yoga for stress and anxiety",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
      },
    ],
  },
  {
    id: "surya-namaskar",
    sanskrit: "Sūrya Namaskāra",
    english: "Sun Salutation (sequence)",
    type: "sequence",
    image: "/asanas/surya-namaskar.svg",
    evidenceLevel: "preliminary",
    tags: ["sequence", "cardio", "full-body"],
    conditionsLinked: ["general-fitness", "cardio-metabolic", "mood"],
    shortSummary:
      "A dynamic sequence of 12 postures linked with breath, often practised in repeated rounds.",
    traditionalBenefits: [
      "Builds strength and flexibility",
      "Warms the whole body",
      "Traditionally said to support digestion and vitality",
    ],
    researchSummary:
      "Sun Salutation–based programs have been studied for physical fitness, flexibility, and cardio-metabolic markers. Evidence is promising but limited by small sample sizes and varying protocols.",
    safetyNotes: [
      "Modify pace and depth for heart disease, hypertension, or joint issues.",
      "Learn under guidance if new to yoga or with medical conditions.",
    ],
    references: [
      {
        label: "Example: Narrative review of Surya Namaskar and health",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
      },
    ],
  },
];
