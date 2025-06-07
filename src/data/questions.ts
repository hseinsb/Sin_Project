import { QuizQuestion } from '@/types/quiz';

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "What drives you the most in life?",
    options: [
      { text: "Recognition and respect", tags: ["pride"] },
      { text: "Proving others wrong", tags: ["envy"] },
      { text: "Inner peace and no stress", tags: ["sloth"] },
      { text: "Power and influence", tags: ["greed"] },
      { text: "Passion and deep love", tags: ["lust"] }
    ]
  },
  {
    id: 2,
    question: "How do you respond to betrayal?",
    options: [
      { text: "Cold silence and walk away", tags: ["pride", "wrath"] },
      { text: "Make them regret it", tags: ["wrath", "envy"] },
      { text: "Feel numb and spiral", tags: ["sloth"] },
      { text: "Move on and level up", tags: ["greed"] }
    ]
  },
  {
    id: 3,
    question: "What scares you the most?",
    options: [
      { text: "Being forgotten", tags: ["pride"] },
      { text: "Someone doing better than you", tags: ["envy"] },
      { text: "A life of emotional emptiness", tags: ["lust"] },
      { text: "Being stuck or left behind", tags: ["sloth", "greed"] },
      { text: "Constant conflict", tags: ["wrath"] }
    ]
  },
  {
    id: 4,
    question: "What do you fantasize about most?",
    options: [
      { text: "Living a luxurious life", tags: ["greed"] },
      { text: "Being desired and admired", tags: ["lust", "pride"] },
      { text: "Getting revenge on someone", tags: ["wrath"] },
      { text: "Escaping to a peaceful island forever", tags: ["sloth"] }
    ]
  },
  {
    id: 5,
    question: "You walk into a room. What do you want people to feel?",
    options: [
      { text: "Intimidated by your presence", tags: ["pride"] },
      { text: "Attracted to your vibe", tags: ["lust"] },
      { text: "Envious of your success", tags: ["envy"] },
      { text: "Comforted by your calmness", tags: ["sloth"] },
      { text: "Curious about your power", tags: ["greed"] }
    ]
  },
  {
    id: 6,
    question: "When you get angry, you...",
    options: [
      { text: "Explode and regret it later", tags: ["wrath"] },
      { text: "Disappear without a word", tags: ["pride", "sloth"] },
      { text: "Plot how to one-up them", tags: ["envy"] },
      { text: "Seduce or manipulate to win", tags: ["lust", "pride"] }
    ]
  },
  {
    id: 7,
    question: "What kind of success excites you most?",
    options: [
      { text: "Riches and ownership", tags: ["greed"] },
      { text: "Fame and admiration", tags: ["pride"] },
      { text: "Being envied", tags: ["envy"] },
      { text: "Deep pleasure and intimacy", tags: ["lust"] },
      { text: "Comfort without pressure", tags: ["sloth"] }
    ]
  },
  {
    id: 8,
    question: "What emotion do you secretly enjoy feeling?",
    options: [
      { text: "Power", tags: ["pride"] },
      { text: "Longing", tags: ["lust"] },
      { text: "Bitterness", tags: ["wrath"] },
      { text: "Indulgence", tags: ["gluttony"] },
      { text: "Jealousy", tags: ["envy"] }
    ]
  },
  {
    id: 9,
    question: "When you're overwhelmed, you tend to...",
    options: [
      { text: "Shut down completely", tags: ["sloth"] },
      { text: "Snap at people or overreact", tags: ["wrath"] },
      { text: "Dive into distractions (food, scrolling, sex)", tags: ["gluttony", "lust"] },
      { text: "Overwork yourself to feel control", tags: ["greed", "pride"] }
    ]
  },
  {
    id: 10,
    question: "How do you treat people you secretly dislike?",
    options: [
      { text: "Politely ignore them", tags: ["pride"] },
      { text: "Keep tabs on their failure", tags: ["envy"] },
      { text: "Gossip about them", tags: ["wrath", "envy"] },
      { text: "Charm them while hiding judgment", tags: ["lust", "pride"] }
    ]
  },
  {
    id: 11,
    question: "What's your relationship with food like?",
    options: [
      { text: "It's fuel, nothing more", tags: ["pride"] },
      { text: "I overeat when I'm emotional", tags: ["gluttony"] },
      { text: "I love to indulge in rich meals", tags: ["gluttony", "lust"] },
      { text: "I barely eat when I'm stressed", tags: ["sloth"] }
    ]
  },
  {
    id: 12,
    question: "If you could change one thing about yourself, what would it be?",
    options: [
      { text: "I want to be more loved", tags: ["lust"] },
      { text: "I want more energy", tags: ["sloth"] },
      { text: "I want to care less what others think", tags: ["envy"] },
      { text: "I want to be more satisfied", tags: ["greed"] }
    ]
  },
  {
    id: 13,
    question: "What triggers you the fastest?",
    options: [
      { text: "Disrespect", tags: ["pride", "wrath"] },
      { text: "Rejection", tags: ["lust", "envy"] },
      { text: "Laziness in others", tags: ["greed"] },
      { text: "Being ignored", tags: ["wrath"] }
    ]
  },
  {
    id: 14,
    question: "In relationships, you are most afraid of...",
    options: [
      { text: "Being vulnerable", tags: ["pride"] },
      { text: "Being cheated on", tags: ["envy", "wrath"] },
      { text: "Not being fulfilled sexually", tags: ["lust"] },
      { text: "Needing someone too much", tags: ["sloth"] }
    ]
  },
  {
    id: 15,
    question: "Your favorite guilty pleasure?",
    options: [
      { text: "Steamy fantasies", tags: ["lust"] },
      { text: "Overspending", tags: ["greed"] },
      { text: "Doing absolutely nothing", tags: ["sloth"] },
      { text: "Eating late at night", tags: ["gluttony"] }
    ]
  },
  {
    id: 16,
    question: "How do you measure your self-worth?",
    options: [
      { text: "By my success", tags: ["greed"] },
      { text: "By the people who love me", tags: ["lust"] },
      { text: "By how others see me", tags: ["pride"] },
      { text: "By staying chill no matter what", tags: ["sloth"] }
    ]
  },
  {
    id: 17,
    question: "What's your biggest emotional weakness?",
    options: [
      { text: "You need to be desired", tags: ["lust"] },
      { text: "You overcompare yourself", tags: ["envy"] },
      { text: "You explode too fast", tags: ["wrath"] },
      { text: "You procrastinate when unmotivated", tags: ["sloth"] }
    ]
  },
  {
    id: 18,
    question: "You're offered fame, wealth, and love — but can only choose one.",
    options: [
      { text: "Fame", tags: ["pride"] },
      { text: "Wealth", tags: ["greed"] },
      { text: "Love", tags: ["lust"] },
      { text: "Peace", tags: ["sloth"] }
    ]
  },
  {
    id: 19,
    question: "You see someone winning who doesn't \"deserve it.\" You feel...",
    options: [
      { text: "Competitive", tags: ["envy"] },
      { text: "Furious", tags: ["wrath"] },
      { text: "Indifferent — their loss is coming", tags: ["pride"] },
      { text: "Inspired to work harder", tags: ["greed"] }
    ]
  },
  {
    id: 20,
    question: "When you think about your shadow self, you feel...",
    options: [
      { text: "It gives me strength", tags: ["pride"] },
      { text: "It's dangerous if I let it out", tags: ["wrath"] },
      { text: "It's sad but true", tags: ["sloth"] },
      { text: "It's always craving something more", tags: ["lust", "greed"] }
    ]
  },
  {
    id: 21,
    question: "I fear stagnation more than failure.",
    options: [
      { text: "Yes", tags: ["greed"] },
      { text: "No", tags: ["sloth"] }
    ]
  },
  {
    id: 22,
    question: "I've daydreamed about someone envying me.",
    options: [
      { text: "Yes", tags: ["envy"] },
      { text: "No", tags: ["pride"] }
    ]
  },
  {
    id: 23,
    question: "I believe pleasure is a human right.",
    options: [
      { text: "Yes", tags: ["lust", "gluttony"] },
      { text: "No", tags: ["pride"] }
    ]
  },
  {
    id: 24,
    question: "I deserve more because I work harder.",
    options: [
      { text: "Yes", tags: ["pride", "greed"] },
      { text: "No", tags: ["sloth"] }
    ]
  },
  {
    id: 25,
    question: "People wouldn't handle the real me.",
    options: [
      { text: "Yes", tags: ["wrath", "lust"] },
      { text: "No", tags: ["pride"] }
    ]
  }
]; 