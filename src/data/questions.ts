import { QuizQuestion } from '@/types/quiz';

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "When you feel emotionally neglected, what do you crave the most?",
    maxSelections: 2,
    options: [
      { text: "I fantasize about being desired, physically and emotionally.", sin: "lust", subtype: "romantic_idealist", weight: 4 },
      { text: "I replay moments where people disrespected me and imagine revenge.", sin: "wrath", subtype: "punisher", weight: 3 },
      { text: "I scroll endlessly, binge, or do anything to distract from feeling lonely.", sin: "gluttony", subtype: "escape_artist", weight: 3 },
      { text: "I feel like I'm falling behind in life compared to everyone else.", sin: "envy", subtype: "comparer", weight: 3 },
      { text: "I want to be praised and told I'm better than what they left.", sin: "pride", subtype: "hidden_insecurity_masker", weight: 3 },
      { text: "I want to be in control again — I hate feeling emotionally dependent.", sin: "greed", subtype: "control_seeker", weight: 3 },
      { text: "I stop caring, isolate, and become numb to everything.", sin: "sloth", subtype: "emotionally_frozen", weight: 3 }
    ]
  },
  {
    id: 2,
    question: "What tempts you the most when you're stressed or lonely?",
    maxSelections: 2,
    options: [
      { text: "Hooking up, fantasizing, or texting someone I shouldn't.", sin: "lust", subtype: "pleasure_addict", weight: 4 },
      { text: "Letting the rage build up. Sometimes I want to break something.", sin: "wrath", subtype: "suppressed_volcano", weight: 3 },
      { text: "Junk food, videos, or anything that makes me feel something quick.", sin: "gluttony", subtype: "comfort_craver", weight: 3 },
      { text: "Comparing my life to others and wondering why they have more.", sin: "envy", subtype: "comparer", weight: 3 },
      { text: "Proving people wrong — imagining success just to spite them.", sin: "pride", subtype: "arrogant_overachiever", weight: 3 },
      { text: "Working harder. Trying to get ahead to feel safe.", sin: "greed", subtype: "control_seeker", weight: 3 },
      { text: "Letting go completely. I mentally check out.", sin: "sloth", subtype: "numb_drifter", weight: 3 }
    ]
  },
  {
    id: 3,
    question: "What kind of success do you fantasize about the most?",
    maxSelections: 2,
    options: [
      { text: "Being deeply loved, famous, and sexually desired.", sin: "lust", subtype: "validation_chaser", weight: 4 },
      { text: "Having the power to silence anyone who doubted me.", sin: "wrath", subtype: "moral_avenger", weight: 3 },
      { text: "Never working again. Endless luxury, food, comfort.", sin: "gluttony", subtype: "excess_seeker", weight: 3 },
      { text: "Having what everyone else wants — and watching them envy me.", sin: "envy", subtype: "spotlight_thief", weight: 3 },
      { text: "Being on stage. Admired, followed, respected.", sin: "pride", subtype: "arrogant_overachiever", weight: 4 },
      { text: "Owning everything — money, freedom, control.", sin: "greed", subtype: "opportunist", weight: 4 },
      { text: "Never needing to do anything again. Peace, stillness, no demands.", sin: "sloth", subtype: "burned_out_performer", weight: 3 }
    ]
  },
  {
    id: 4,
    question: "What hurts your ego the most?",
    maxSelections: 2,
    options: [
      { text: "Being sexually rejected or emotionally unwanted.", sin: "lust", subtype: "validation_chaser", weight: 4 },
      { text: "When someone disrespects me and walks away untouched.", sin: "wrath", subtype: "punisher", weight: 3 },
      { text: "People thinking I'm average or unremarkable.", sin: "pride", subtype: "quietly_superior_outsider", weight: 4 },
      { text: "Watching people surpass me in life.", sin: "envy", subtype: "comparer", weight: 3 },
      { text: "Being excluded from something I feel I deserve.", sin: "greed", subtype: "opportunist", weight: 3 },
      { text: "Being left out or forgotten — even by friends.", sin: "gluttony", subtype: "emotional_filler", weight: 3 },
      { text: "Nothing. I just stop caring and disappear mentally.", sin: "sloth", subtype: "emotionally_frozen", weight: 3 }
    ]
  },
  {
    id: 5,
    question: "How do you usually react to emotional discomfort?",
    maxSelections: 2,
    options: [
      { text: "Seek intimacy, touch, or sexual relief.", sin: "lust", subtype: "pleasure_addict", weight: 4 },
      { text: "Ignore it until it explodes.", sin: "wrath", subtype: "suppressed_volcano", weight: 3 },
      { text: "Eat, scroll, distract. Anything to numb it.", sin: "gluttony", subtype: "emotional_filler", weight: 3 },
      { text: "Compare myself to others and get more insecure.", sin: "envy", subtype: "insecure_underminer", weight: 3 },
      { text: "Try to outwork the emotion. Hustle over heart.", sin: "greed", subtype: "status_climber", weight: 3 },
      { text: "Think about who I need to impress to feel better.", sin: "pride", subtype: "hidden_insecurity_masker", weight: 3 },
      { text: "Detach completely. I freeze or withdraw.", sin: "sloth", subtype: "emotionally_frozen", weight: 3 }
    ]
  },
  {
    id: 6,
    question: "How do you respond to feeling unimportant or invisible?",
    maxSelections: 2,
    options: [
      { text: "I flirt or post something to get attention.", sin: "lust", subtype: "validation_chaser", weight: 4 },
      { text: "I imagine tearing someone down — just to feel heard.", sin: "wrath", subtype: "moral_avenger", weight: 3 },
      { text: "I eat, shop, or do something that gives me instant pleasure.", sin: "gluttony", subtype: "excess_seeker", weight: 3 },
      { text: "I obsess over why others get attention and I don't.", sin: "envy", subtype: "spotlight_thief", weight: 3 },
      { text: "I think about how I deserve better and people just don't see it.", sin: "pride", subtype: "quietly_superior_outsider", weight: 3 },
      { text: "I plan how I'll one-up everyone and rise to the top.", sin: "greed", subtype: "status_climber", weight: 3 },
      { text: "I disconnect and stop trying. Why bother?", sin: "sloth", subtype: "emotionally_frozen", weight: 3 }
    ]
  },
  {
    id: 7,
    question: "What do you often chase — even when you know it's unhealthy?",
    maxSelections: 2,
    options: [
      { text: "Intimacy, flirting, sexual tension. It fills a void.", sin: "lust", subtype: "pleasure_addict", weight: 4 },
      { text: "The upper hand in every argument. I want to win.", sin: "wrath", subtype: "moral_avenger", weight: 3 },
      { text: "Food, substances, entertainment. It numbs me.", sin: "gluttony", subtype: "excess_seeker", weight: 4 },
      { text: "Outdoing people I secretly envy.", sin: "envy", subtype: "insecure_underminer", weight: 3 },
      { text: "Recognition, applause, being the best in the room.", sin: "pride", subtype: "arrogant_overachiever", weight: 4 },
      { text: "More money, influence, success — it's never enough.", sin: "greed", subtype: "status_climber", weight: 4 },
      { text: "Isolation. I retreat from life more than I should.", sin: "sloth", subtype: "numb_drifter", weight: 3 }
    ]
  },
  {
    id: 8,
    question: "What feeling do you hate the most — but often experience?",
    maxSelections: 2,
    options: [
      { text: "Feeling unwanted or not enough for someone I want.", sin: "lust", subtype: "validation_chaser", weight: 4 },
      { text: "Feeling powerless when someone disrespects me.", sin: "wrath", subtype: "resentment_bottler", weight: 3 },
      { text: "Feeling like I need pleasure or stimulation just to feel okay.", sin: "gluttony", subtype: "emotional_filler", weight: 3 },
      { text: "Feeling behind, overlooked, or forgotten.", sin: "envy", subtype: "comparer", weight: 3 },
      { text: "Feeling like I don't stand out or that I'm average.", sin: "pride", subtype: "quietly_superior_outsider", weight: 4 },
      { text: "Feeling financially unstable or not in control of my future.", sin: "greed", subtype: "control_seeker", weight: 3 },
      { text: "Feeling like I've wasted time or life is passing me by.", sin: "sloth", subtype: "burned_out_performer", weight: 3 }
    ]
  },
  {
    id: 9,
    question: "Which of these truths feels most familiar (even if unspoken)?",
    maxSelections: 2,
    options: [
      { text: "I want to be fully desired, even if I hide it.", sin: "lust", subtype: "validation_chaser", weight: 4 },
      { text: "I hold grudges more than I admit.", sin: "wrath", subtype: "punisher", weight: 3 },
      { text: "I cope through comfort more than people know.", sin: "gluttony", subtype: "comfort_craver", weight: 3 },
      { text: "I compare myself to others more than I show.", sin: "envy", subtype: "comparer", weight: 3 },
      { text: "I quietly crave admiration and praise.", sin: "pride", subtype: "hidden_insecurity_masker", weight: 3 },
      { text: "I secretly want to control more of my life and others.", sin: "greed", subtype: "control_seeker", weight: 3 },
      { text: "I pretend not to care so I don't have to try.", sin: "sloth", subtype: "overthinker_avoider", weight: 3 }
    ]
  },
  {
    id: 10,
    question: "What kind of validation do you secretly want most?",
    maxSelections: 2,
    options: [
      { text: "That I'm attractive, magnetic, and irresistible.", sin: "lust", subtype: "validation_chaser", weight: 4 },
      { text: "That I'm right. That I can't be messed with.", sin: "wrath", subtype: "moral_avenger", weight: 3 },
      { text: "That I'm fun, easy to be around, and always down.", sin: "gluttony", subtype: "comfort_craver", weight: 3 },
      { text: "That I'm ahead, special, or chosen.", sin: "envy", subtype: "spotlight_thief", weight: 3 },
      { text: "That I'm better than average — exceptional, even.", sin: "pride", subtype: "arrogant_overachiever", weight: 4 },
      { text: "That I'm successful and unshakably stable.", sin: "greed", subtype: "status_climber", weight: 3 },
      { text: "That I'm calm, chill, and untouched by life.", sin: "sloth", subtype: "numb_drifter", weight: 3 }
    ]
  },
  {
    id: 11,
    question: "Which thought has crossed your mind more than once (even if you'd never admit it)?",
    maxSelections: 2,
    options: [
      { text: "\"I just want to be wanted — badly.\"", sin: "lust", subtype: "validation_chaser", weight: 4 },
      { text: "\"One day they'll regret what they did to me.\"", sin: "wrath", subtype: "punisher", weight: 3 },
      { text: "\"I'll just treat myself again — I deserve it.\"", sin: "gluttony", subtype: "excess_seeker", weight: 3 },
      { text: "\"Why do they get what I work harder for?\"", sin: "envy", subtype: "resentful_romantic", weight: 3 },
      { text: "\"I was meant for greatness — they just don't see it.\"", sin: "pride", subtype: "quietly_superior_outsider", weight: 4 },
      { text: "\"If I had more money, I'd finally feel secure.\"", sin: "greed", subtype: "control_seeker", weight: 3 },
      { text: "\"I don't really care anymore — nothing matters.\"", sin: "sloth", subtype: "emotionally_frozen", weight: 3 }
    ]
  },
  {
    id: 12,
    question: "What do you find yourself craving when you feel uncertain or lost?",
    maxSelections: 2,
    options: [
      { text: "A deep emotional or physical connection with someone.", sin: "lust", subtype: "romantic_idealist", weight: 4 },
      { text: "Control over what's happening and who's involved.", sin: "wrath", subtype: "moral_avenger", weight: 3 },
      { text: "Comfort food, TV, or anything mindless.", sin: "gluttony", subtype: "escape_artist", weight: 3 },
      { text: "Proof that I'm not falling behind in life.", sin: "envy", subtype: "comparer", weight: 3 },
      { text: "A moment where I feel respected and admired.", sin: "pride", subtype: "hidden_insecurity_masker", weight: 4 },
      { text: "The ability to plan and buy my way out of chaos.", sin: "greed", subtype: "control_seeker", weight: 3 },
      { text: "A pause. A reason to not have to do anything right now.", sin: "sloth", subtype: "burned_out_performer", weight: 3 }
    ]
  },
  {
    id: 13,
    question: "When you imagine your \"ideal\" day, what's a detail that stands out?",
    maxSelections: 2,
    options: [
      { text: "A romantic or sensual high point. Something intense.", sin: "lust", subtype: "romantic_idealist", weight: 4 },
      { text: "No one disrespects me — everyone knows I'm in charge.", sin: "wrath", subtype: "moral_avenger", weight: 3 },
      { text: "Endless time to eat, watch, relax, with no pressure.", sin: "gluttony", subtype: "comfort_craver", weight: 4 },
      { text: "I feel ahead of others — like I've won.", sin: "envy", subtype: "spotlight_thief", weight: 3 },
      { text: "I'm being admired, noticed, and complimented.", sin: "pride", subtype: "arrogant_overachiever", weight: 4 },
      { text: "I closed deals, made money, and gained more control.", sin: "greed", subtype: "status_climber", weight: 4 },
      { text: "I did nothing. And no one expected anything from me.", sin: "sloth", subtype: "burned_out_performer", weight: 3 }
    ]
  },
  {
    id: 14,
    question: "What kind of attention hits your ego the hardest — in a good or bad way?",
    maxSelections: 2,
    options: [
      { text: "Sexual or romantic attention (or rejection).", sin: "lust", subtype: "validation_chaser", weight: 4 },
      { text: "Someone challenging or disrespecting me in public.", sin: "wrath", subtype: "punisher", weight: 3 },
      { text: "Being left out or treated like I'm not fun to be around.", sin: "gluttony", subtype: "emotional_filler", weight: 3 },
      { text: "Someone subtly showing off what I don't have.", sin: "envy", subtype: "insecure_underminer", weight: 3 },
      { text: "Someone mocking or ignoring my accomplishments.", sin: "pride", subtype: "defensive_know_it_all", weight: 4 },
      { text: "People questioning how much I make or own.", sin: "greed", subtype: "possession_protector", weight: 3 },
      { text: "No one noticing I'm mentally gone.", sin: "sloth", subtype: "emotionally_frozen", weight: 3 }
    ]
  },
  {
    id: 15,
    question: "What secretly crosses your mind when someone betrays or hurts you?",
    maxSelections: 2,
    options: [
      { text: "\"I could easily replace them with someone hotter, better.\"", sin: "lust", subtype: "lust_control_seeker", weight: 4 },
      { text: "\"They just made an enemy.\"", sin: "wrath", subtype: "punisher", weight: 3 },
      { text: "\"I'll just eat my feelings and disappear for a while.\"", sin: "gluttony", subtype: "emotional_filler", weight: 3 },
      { text: "\"They're going to regret losing someone like me.\"", sin: "envy", subtype: "resentful_romantic", weight: 3 },
      { text: "\"They'll realize how much better I am when I'm gone.\"", sin: "pride", subtype: "quietly_superior_outsider", weight: 4 },
      { text: "\"I need to protect myself and never be this vulnerable again.\"", sin: "greed", subtype: "control_seeker", weight: 3 },
      { text: "\"Whatever. I don't care anymore.\"", sin: "sloth", subtype: "numb_drifter", weight: 3 }
    ]
  },
  {
    id: 16,
    question: "What drives you to keep going — even when things get tough?",
    maxSelections: 2,
    options: [
      { text: "The fantasy of being completely loved and wanted.", sin: "lust", subtype: "romantic_idealist", weight: 4 },
      { text: "Proving to everyone who doubted me that they were wrong.", sin: "wrath", subtype: "moral_avenger", weight: 3 },
      { text: "The promise of a reward, comfort, or break.", sin: "gluttony", subtype: "comfort_craver", weight: 3 },
      { text: "Not wanting to be left behind or seem weak.", sin: "envy", subtype: "comparer", weight: 3 },
      { text: "The need to stand out and be seen as special.", sin: "pride", subtype: "arrogant_overachiever", weight: 4 },
      { text: "The drive to gain control over my circumstances.", sin: "greed", subtype: "control_seeker", weight: 4 },
      { text: "Nothing really. I just go through the motions.", sin: "sloth", subtype: "overthinker_avoider", weight: 3 }
    ]
  },
  {
    id: 17,
    question: "What do you fear losing the most?",
    maxSelections: 2,
    options: [
      { text: "Being desired, loved, or sexually wanted.", sin: "lust", subtype: "validation_chaser", weight: 4 },
      { text: "My ability to defend myself or stay in control.", sin: "wrath", subtype: "resentment_bottler", weight: 3 },
      { text: "Comfort, ease, or the things that make me feel good.", sin: "gluttony", subtype: "comfort_craver", weight: 3 },
      { text: "The few areas where I feel ahead or special.", sin: "envy", subtype: "spotlight_thief", weight: 3 },
      { text: "Respect, admiration, or being seen as impressive.", sin: "pride", subtype: "hidden_insecurity_masker", weight: 4 },
      { text: "Financial security or control over my future.", sin: "greed", subtype: "possession_protector", weight: 4 },
      { text: "The option to avoid responsibility or pressure.", sin: "sloth", subtype: "burned_out_performer", weight: 3 }
    ]
  },
  {
    id: 18,
    question: "How do you usually feel after achieving something big?",
    maxSelections: 2,
    options: [
      { text: "I crave closeness — someone to share the high with.", sin: "lust", subtype: "romantic_idealist", weight: 4 },
      { text: "I downplay it — but secretly want others to praise me.", sin: "pride", subtype: "hidden_insecurity_masker", weight: 4 },
      { text: "I reward myself with something indulgent.", sin: "gluttony", subtype: "victory_eater", weight: 3 },
      { text: "I look around and compare who else achieved more.", sin: "envy", subtype: "restless_climber", weight: 3 },
      { text: "I immediately plan what's next. Can't stop now.", sin: "greed", subtype: "momentum_junkie", weight: 4 },
      { text: "I don't really feel anything. Accomplishment feels flat.", sin: "sloth", subtype: "emotionally_frozen", weight: 3 },
      { text: "I imagine how those who doubted me must feel.", sin: "wrath", subtype: "punisher", weight: 3 }
    ]
  },
  {
    id: 19,
    question: "What's a subtle behavior of yours most people don't see?",
    maxSelections: 2,
    options: [
      { text: "I test people to see how much they want me.", sin: "lust", subtype: "lust_control_seeker", weight: 4 },
      { text: "I mentally prepare to walk away from anyone.", sin: "wrath", subtype: "resentment_bottler", weight: 3 },
      { text: "I self-soothe with distractions even in serious moments.", sin: "gluttony", subtype: "comfort_strategist", weight: 3 },
      { text: "I subtly compare myself to almost everyone.", sin: "envy", subtype: "internal_scorekeeper", weight: 3 },
      { text: "I think I'm more capable than most but I don't say it.", sin: "pride", subtype: "quietly_superior_outsider", weight: 4 },
      { text: "I count what I've earned — and what I still want.", sin: "greed", subtype: "score_counter", weight: 3 },
      { text: "I emotionally disappear in group settings.", sin: "sloth", subtype: "emotionally_frozen", weight: 3 }
    ]
  },
  {
    id: 20,
    question: "What do you fear becoming, deep down?",
    maxSelections: 2,
    options: [
      { text: "Unwanted. Like no one's first choice.", sin: "lust", subtype: "validation_chaser", weight: 4 },
      { text: "Powerless. Walked over. Silenced.", sin: "wrath", subtype: "resentment_bottler", weight: 3 },
      { text: "Alone, bored, stuck in a comfort loop.", sin: "gluttony", subtype: "pleasure_prisoner", weight: 3 },
      { text: "Mediocre. Forgotten. A nobody.", sin: "envy", subtype: "nameless_observer", weight: 3 },
      { text: "Ordinary. Not admired. Not special.", sin: "pride", subtype: "quietly_superior_outsider", weight: 4 },
      { text: "Poor. Dependent. Out of control.", sin: "greed", subtype: "financial_failure_phobia", weight: 3 },
      { text: "Wasted. Like I never lived up to anything.", sin: "sloth", subtype: "burned_out_performer", weight: 3 }
    ]
  },
  {
    id: 21,
    question: "Which part of your personality do you secretly use to get what you want?",
    maxSelections: 2,
    options: [
      { text: "My charm or sexuality — I know it pulls people in.", sin: "lust", subtype: "lust_control_seeker", weight: 4 },
      { text: "My temper or intensity — people don't mess with me.", sin: "wrath", subtype: "suppressed_volcano", weight: 3 },
      { text: "My laid-back vibe — I'm the fun, easy option.", sin: "gluttony", subtype: "effortless_appealer", weight: 3 },
      { text: "My ability to play humble while aiming higher.", sin: "envy", subtype: "silent_strategist", weight: 3 },
      { text: "My confidence — I present myself like I've already won.", sin: "pride", subtype: "arrogant_overachiever", weight: 4 },
      { text: "My ambition — I always look like I'm going somewhere.", sin: "greed", subtype: "social_climber_mask", weight: 3 },
      { text: "My quietness — I disappear until it benefits me to show up.", sin: "sloth", subtype: "overthinker_avoider", weight: 3 }
    ]
  },
  {
    id: 22,
    question: "What would you never want someone to say about you?",
    maxSelections: 2,
    options: [
      { text: "\"You're not attractive enough to keep someone.\"", sin: "lust", subtype: "validation_chaser", weight: 4 },
      { text: "\"You're weak. You let people walk all over you.\"", sin: "wrath", subtype: "resentment_bottler", weight: 3 },
      { text: "\"You're lazy and don't take life seriously.\"", sin: "gluttony", subtype: "pleasure_guilt_mirror", weight: 3 },
      { text: "\"You're just average. Forgettable.\"", sin: "envy", subtype: "identity_erasure", weight: 3 },
      { text: "\"You're not that special.\"", sin: "pride", subtype: "defensive_know_it_all", weight: 4 },
      { text: "\"You're broke and irrelevant.\"", sin: "greed", subtype: "worth_equals_wealth_fear", weight: 3 },
      { text: "\"You wasted your potential.\"", sin: "sloth", subtype: "burned_out_performer", weight: 3 }
    ]
  },
  {
    id: 23,
    question: "Which scenario sounds most tempting — even if wrong?",
    maxSelections: 2,
    options: [
      { text: "Someone obsessed with me, completely addicted.", sin: "lust", subtype: "lust_control_seeker", weight: 4 },
      { text: "Telling off everyone who doubted me, publicly.", sin: "wrath", subtype: "punisher", weight: 3 },
      { text: "Doing nothing but bingeing, eating, and vibing guilt-free.", sin: "gluttony", subtype: "ultimate_indulgence", weight: 3 },
      { text: "Getting the life someone else worked for — instantly.", sin: "envy", subtype: "shortcut_to_superiority", weight: 3 },
      { text: "Being crowned the best — even if I didn't earn it.", sin: "pride", subtype: "arrogant_overachiever", weight: 4 },
      { text: "Having unlimited money, no questions asked.", sin: "greed", subtype: "control_through_wealth", weight: 4 },
      { text: "Living without expectations or responsibilities.", sin: "sloth", subtype: "burned_out_performer", weight: 3 }
    ]
  },
  {
    id: 24,
    question: "What do you believe you deserve — but rarely receive?",
    maxSelections: 2,
    options: [
      { text: "To be deeply wanted and emotionally seen.", sin: "lust", subtype: "romantic_idealist", weight: 4 },
      { text: "To be respected without needing to prove myself.", sin: "wrath", subtype: "moral_avenger", weight: 3 },
      { text: "To enjoy life without shame or guilt.", sin: "gluttony", subtype: "joy_without_judgment", weight: 3 },
      { text: "To be chosen over everyone else.", sin: "envy", subtype: "ultimate_affirmation_desire", weight: 3 },
      { text: "To be admired without having to ask for it.", sin: "pride", subtype: "hidden_insecurity_masker", weight: 4 },
      { text: "To always have enough — emotionally, financially.", sin: "greed", subtype: "security_seeker", weight: 3 },
      { text: "To exist without pressure or performance.", sin: "sloth", subtype: "burned_out_performer", weight: 3 }
    ]
  },
  {
    id: 25,
    question: "When you're alone with your thoughts, what's your most recurring pattern?",
    maxSelections: 2,
    options: [
      { text: "Fantasizing about romantic or sexual scenarios.", sin: "lust", subtype: "pleasure_addict", weight: 4 },
      { text: "Replaying arguments or building fake ones in my head.", sin: "wrath", subtype: "suppressed_volcano", weight: 3 },
      { text: "Craving dopamine hits — snacks, scrolling, distractions.", sin: "gluttony", subtype: "restless_seeker", weight: 3 },
      { text: "Comparing myself to people who \"have it easier.\"", sin: "envy", subtype: "unfairness_filter", weight: 3 },
      { text: "Imagining being seen as important or praised.", sin: "pride", subtype: "hidden_insecurity_masker", weight: 4 },
      { text: "Thinking about how to earn more, grow more, own more.", sin: "greed", subtype: "wealth_obsession_loop", weight: 3 },
      { text: "Trying to escape from thinking entirely. Just go blank.", sin: "sloth", subtype: "overthinker_avoider", weight: 3 }
    ]
  }
]; 