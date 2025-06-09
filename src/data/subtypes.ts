import { SubtypeDetails } from '@/types/quiz';

export const subtypeDetails: { [key: string]: SubtypeDetails } = {
  // WRATH SUBTYPES
  "punisher": {
    sin: "wrath",
    subtype: "punisher", 
    title: "The Punisher",
    poeticSummary: "You remember everything. Not because you're bitter — but because you once let it slide… and paid the price. Now, you protect yourself by making sure others feel what you felt. Not to destroy them — but to balance the scale.",
    coreWound: "At your core is a betrayal that changed how you see people. Someone hurt you — and got away with it. Now you struggle to forgive, because letting go feels like weakness. So instead, you punish. Subtly. Sharply. Silently.",
    dailyProblems: [
      "You may hold grudges, even if you say you're \"over it.\"",
      "You use sarcasm, silence, or distance to make others feel what they did.",
      "You fear being seen as weak, so you strike first (emotionally) to stay in control.",
      "People often don't know what they did wrong, only that you've changed."
    ],
    howToFix: [
      "Start identifying your hurt before it becomes revenge.",
      "Understand that punishing others doesn't heal you — it only delays healing.",
      "Learn to express your disappointment clearly, not covertly.",
      "Let go of the idea that feeling pain must be returned, not released."
    ],
    reflectionPrompts: [
      "What did I want someone to say to me that I never heard?",
      "Am I protecting myself… or punishing others because I wasn't protected?",
      "What would forgiveness feel like if it didn't mean weakness?"
    ],
    tipToday: "Write a message (but don't send it) to someone you still resent. Tell them how their actions affected you — without trying to make them feel it too. This isn't for them. It's for your release.",
    plainEnglishGuidance: "You need to stop turning your pain into quiet punishment. What you really want is recognition — for someone to finally see how deeply they hurt you. But making others suffer doesn't undo your suffering. It keeps it alive. You must learn to speak before you snap, and to feel without needing others to feel it too. You are strong, but you've turned that strength into armor. Begin turning it into boundaries instead. You heal by letting go — not by holding others hostage to the hurt. You don't have to punish people to protect yourself. You just have to honor your pain… and then stop letting it lead."
  },

  "suppressed_volcano": {
    sin: "wrath",
    subtype: "suppressed_volcano",
    title: "The Suppressed Volcano", 
    poeticSummary: "You've learned to stay quiet. To clench your fists under the table. To smile through betrayal. But inside, a storm grows — unseen, unheard, unresolved. And when it finally erupts… it burns more than just bridges.",
    coreWound: "You grew up (or lived) in a space where your feelings didn't feel safe. You became an expert at hiding your anger — but not at healing it. Now your unspoken rage lives in your body, your tone, your silence… and sometimes, it explodes without warning.",
    dailyProblems: [
      "You bottle things up until your reactions are explosive or passive-aggressive.",
      "You often don't know how angry you are until it's too late.",
      "People accuse you of overreacting, not knowing how much you've been holding in.",
      "You feel shame or regret after expressing your emotions too strongly."
    ],
    howToFix: [
      "Identify your anger early — learn to name it before it controls you.",
      "Create rituals to process emotion before expressing it (e.g., write, walk, breathe).",
      "Communicate before you're at 100% — not after you've hit boiling point.",
      "Learn to express frustration without needing to explode to be heard."
    ],
    reflectionPrompts: [
      "What would it feel like to express my anger at 30% instead of 90%?",
      "What am I really afraid will happen if I say how I feel — calmly?",
      "Who taught me that my feelings are a problem?"
    ],
    tipToday: "Start an \"Anger Log.\" Every time you feel annoyed — even slightly — write it down. Track what triggered you, what you did, and what you wish you had said or done.",
    plainEnglishGuidance: "You need to stop thinking of anger as something bad that must be hidden until it boils over. That's why it shows up in explosions — not conversations. Learn to catch your emotions early. Speak up when you're irritated — not just when you're infuriated. Your healing depends on breaking the cycle of silence, resentment, then regret. Use your anger as information, not ammunition. It's okay to be upset. It's okay to voice it. What matters is that you do it clearly, calmly, and early. That's how you stop burning down everything you care about just to finally feel heard."
  },

  "moral_avenger": {
    sin: "wrath",
    subtype: "moral_avenger",
    title: "The Moral Avenger",
    poeticSummary: "You don't get angry for yourself. You get angry for justice. You carry the weight of right and wrong like it's your personal cross to bear. But somewhere in the fire of your righteousness… you forget that peace isn't always won by war.",
    coreWound: "You've been hurt by unfairness — in your life, or in the world. So you became the one who never lets things slide. You believe deeply in truth and justice… but sometimes, your anger masks the pain of feeling helpless in a broken world.",
    dailyProblems: [
      "You feel deeply triggered when others get away with wrongdoing.",
      "You often argue to prove what's right — not necessarily to understand.",
      "You hold high standards for people and easily lose respect when they fall short.",
      "You may feel isolated because your passion is often misunderstood as aggression."
    ],
    howToFix: [
      "Ask yourself whether your goal is to be right or to be effective.",
      "Learn to separate your worth from others' morality.",
      "Channel your outrage into actions that heal, not destroy.",
      "Practice compassion toward those who are still growing."
    ],
    reflectionPrompts: [
      "Why do I feel responsible for punishing injustice?",
      "What part of me is trying to protect others from pain I once felt?",
      "Can I hold others accountable without burning myself out?"
    ],
    tipToday: "Choose one conflict you're holding onto — and instead of proving the other person wrong, write a letter (even if you never send it) exploring why it hurt so much. Focus on your pain, not just their failure.",
    plainEnglishGuidance: "You have a powerful sense of justice, but you're carrying too much of the world on your shoulders. Not everything unfair needs your flame. Sometimes, your anger is less about others and more about old wounds you never got to avenge. You need to learn the difference between righteous anger and self-righteous control. Start by pausing before reacting — ask: \"Will this bring healing or just heat?\" Let your strength be rooted in mercy, not just fury. You don't have to save the world by setting yourself on fire. Lead with your values, but love with patience. That's how real change begins."
  },

  "resentment_bottler": {
    sin: "wrath",
    subtype: "resentment_bottler", 
    title: "The Repressed Exploder",
    poeticSummary: "You smile when you're supposed to. You nod. You say, \"It's fine.\" But inside, something shakes. It builds in silence. It grows in shadows. Until one day — it erupts. And no one saw it coming… not even you.",
    coreWound: "You were taught — either by family, culture, or fear — that expressing anger is wrong, shameful, or dangerous. So you swallowed it. You learned to be \"good\" instead of honest. But buried anger doesn't vanish. It festers… and eventually explodes in sharp, misdirected ways.",
    dailyProblems: [
      "You avoid confrontation but silently build resentment.",
      "You lash out unexpectedly or over small things after holding in too much.",
      "People may see you as calm or polite, but you feel like a ticking time bomb inside.",
      "You often feel guilt or confusion after expressing anger, even if it was valid."
    ],
    howToFix: [
      "Begin naming your frustrations early — don't wait until they boil over.",
      "Normalize expressing anger as a healthy boundary, not a threat.",
      "Journal or voice-record your raw thoughts before confronting others.",
      "Reframe \"good\" communication as honest communication."
    ],
    reflectionPrompts: [
      "What am I afraid will happen if I express anger directly?",
      "Who taught me that anger is unsafe — and were they right?",
      "What have I been holding that I've never said out loud?"
    ],
    tipToday: "Write down one sentence you've never said because you didn't want to upset someone — then practice saying it aloud to yourself. Let your voice carry the truth, not just the performance.",
    plainEnglishGuidance: "You need to stop suppressing your anger out of fear of being \"bad\" or causing conflict. You're not wrong for feeling what you feel — you're just not giving it air until it suffocates you. The solution isn't to explode or stay silent. It's to speak early. Start identifying moments that bother you in real time and express them clearly and calmly. Train yourself to say things before they build up. You're not protecting people by staying quiet — you're protecting old wounds. The most emotionally intelligent people are the ones who can be kind and direct at the same time. That's your next chapter."
  },

  // LUST SUBTYPES (4 total)
  "lust_control_seeker": {
    sin: "lust",
    subtype: "lust_control_seeker",
    title: "The Control Seeker",
    poeticSummary: "You don't crave touch — you crave control. Intimacy is where you feel powerful, not vulnerable. You dominate desire, manage attraction, and hold the reins… because letting go would mean being seen — and that's far scarier than being wanted.",
    coreWound: "Somewhere in your past, vulnerability wasn't safe. So now you use lust as armor. If you can stay on top — emotionally, physically, socially — you can avoid ever feeling exposed, rejected, or powerless again.",
    dailyProblems: [
      "You control intimacy — who, when, how — but rarely surrender emotionally",
      "You may use seduction, charm, or distance to stay in charge of how people see you",
      "You struggle to receive affection without planning or performing",
      "You fear being known more than being used"
    ],
    howToFix: [
      "Practice being emotionally honest, even when it feels risky",
      "Explore intimacy without performance — what happens when you don't lead?",
      "Reframe surrender: it's not weakness; it's a test of trust",
      "Learn to value being safe over being in control"
    ],
    reflectionPrompts: [
      "What do I fear would happen if someone saw the real me in intimacy?",
      "Why does control feel safer than connection?",
      "When did I learn that being vulnerable leads to pain?"
    ],
    tipToday: "In your next close interaction, let yourself receive without managing the moment. Let someone give without you steering. See what it teaches you.",
    plainEnglishGuidance: "You have to stop using lust as a power game. You're not protecting yourself — you're isolating yourself. Controlling intimacy might make you feel safe, but it also keeps you lonely. The truth is: you'll never feel truly loved until you let yourself be seen. That means dropping the performance. Letting go. Taking emotional risks. You don't need to be in charge to be secure. The real test isn't whether you can attract someone… it's whether you can trust them — and yourself — enough to let them in."
  },

  "validation_chaser": {
    sin: "lust",
    subtype: "validation_chaser",
    title: "The Validation Chaser",
    poeticSummary: "You don't chase people — you chase proof. Proof that you're wanted. Proof that you're attractive. Proof that you're enough. And for a few seconds, when someone desires you… you almost believe it.",
    coreWound: "Deep down, you're not sure you're lovable. So you look for external confirmation — flirty messages, long stares, fast replies. You don't need the person… you need the feeling. Because when someone wants you, it drowns out the voice that says you're not worth wanting.",
    dailyProblems: [
      "You feel a high when someone is attracted to you — and a crash when they lose interest",
      "You might flirt, tease, or post sexually to receive attention, even if you don't want intimacy",
      "You get bored quickly after \"winning\" someone's attention",
      "You tie your self-worth to how desired you are"
    ],
    howToFix: [
      "Start validating yourself with actions, not just attention",
      "Heal your relationship with your reflection — affirm your worth outside of being wanted",
      "Ask: \"Do I like this person… or do I just like being liked?\"",
      "Learn to enjoy intimacy that's slow and mutual — not performative or approval-based"
    ],
    reflectionPrompts: [
      "What does being desired prove to me — and why do I need that proof?",
      "When did I first believe that being wanted meant I was worthy?",
      "Who am I when I'm not being admired?"
    ],
    tipToday: "Go one full day without seeking external validation — no flirting, no checking likes, no \"fishing.\" Instead, write down what you like about yourself every 3 hours. Build inner evidence.",
    plainEnglishGuidance: "You need to stop looking for people to prove your worth. You're stuck in a cycle where being desired feels like self-love — but it's not. It's a drug. And like any drug, it wears off, and you're left needing more. Start building your confidence from the inside out. Affirm yourself when no one's watching. Choose connections where you're seen, not just chased. You don't need another compliment — you need self-trust. Real love isn't about being wanted. It's about being known… and still chosen."
  },

  "pleasure_addict": {
    sin: "lust",
    subtype: "pleasure_addict",
    title: "The Pleasure Addict",
    poeticSummary: "You chase the high. The kiss, the touch, the thrill. Not because you're broken — but because, for a moment, it silences everything. The stress, the shame, the emptiness… gone. Until it's not. And then you need it again.",
    coreWound: "You learned to use pleasure to cope. Maybe you weren't nurtured emotionally — but pleasure gave you control. You could feel good, even if nothing else was good. Now, you chase lust to feel alive — but it leaves you emptier every time.",
    dailyProblems: [
      "You use sex, flirting, or fantasy to escape stress, boredom, or emotional pain",
      "You may feel regret or shame after acting on impulse",
      "You struggle to separate connection from stimulation",
      "You feel disconnected during intimacy — craving more even while getting it"
    ],
    howToFix: [
      "Start noticing what emotional state you're in before chasing pleasure",
      "Create other ways to feel regulated: movement, breathwork, meaningful connection",
      "Practice presence during intimacy — be fully in the moment, not chasing sensation",
      "Build a relationship with your body based on care, not consumption"
    ],
    reflectionPrompts: [
      "What pain or emotion am I trying to silence when I seek pleasure?",
      "What does my body actually need — comfort, safety, or escape?",
      "Am I running toward intimacy… or running from something?"
    ],
    tipToday: "Next time you crave pleasure, pause and name 3 emotions you're feeling. Ask yourself: \"Is this desire… or is it distraction?\"",
    plainEnglishGuidance: "You need to stop using pleasure as a way to avoid your pain. You're not broken for wanting intimacy — but you are stuck in a loop where lust is your medicine. And it's not healing you. It's numbing you. Start paying attention to the feelings underneath your cravings. Build self-soothing tools that don't rely on dopamine hits. Learn to enjoy intimacy without needing it to rescue you. You don't need more stimulation — you need more self-connection. When you learn to be present with yourself, you won't need lust to feel alive. You'll already be home."
  },

  "romantic_idealist": {
    sin: "lust",
    subtype: "romantic_idealist",
    title: "The Romantic Idealist",
    poeticSummary: "You don't just crave bodies — you crave storybook souls. You want magic, not just touch. You ache for a connection that melts time, that makes you feel chosen, seen, and unforgettable. But in chasing the fantasy… you often miss the real thing.",
    coreWound: "At some point, you learned that love must feel intense to be real. You might have grown up feeling emotionally starved, or believing that only perfect love could heal your pain. So now, you idealize romance — and feel disappointed when reality arrives.",
    dailyProblems: [
      "You fall quickly or fantasize deeply about people before truly knowing them",
      "You crave emotional intimacy that feels \"cosmic\" or fated",
      "You struggle with disappointment when passion fades or becomes ordinary",
      "You may confuse longing with love — and end up chasing what isn't there"
    ],
    howToFix: [
      "Ground your attraction in reality: get to know people slowly",
      "Learn to find beauty in consistency, not just chemistry",
      "Focus on how people treat you, not just how they make you feel",
      "Understand that real love is often quieter than the movies"
    ],
    reflectionPrompts: [
      "Do I fall for people… or the feeling they give me?",
      "Where did I first learn that love must feel magical to matter?",
      "What happens when I stop chasing the dream and face the truth?"
    ],
    tipToday: "Revisit someone you once idealized and list the actual red flags you ignored. Then ask yourself: what was I really in love with — them, or the story I told myself?",
    plainEnglishGuidance: "You need to stop expecting love to feel like a fairytale. That fantasy is actually holding you back from real, grounded intimacy. You keep falling in love with how someone makes you feel — not who they actually are. Real relationships take work, boredom, healing, and showing up on bad days. You don't need perfect passion. You need steady care. Let go of the idea that love should always feel like a high — and start noticing who's there when you crash. That's the real romance you're starving for."
  },

  // GLUTTONY SUBTYPES (4 total)
  "escape_artist": {
    sin: "gluttony",
    subtype: "escape_artist",
    title: "The Escape Artist",
    poeticSummary: "Reality is too loud, so you slip away. Into games, fantasies, shows, dreams. You live in stories that feel better than your own. Because there… you're free. But every escape leaves you farther from yourself. You don't want more stimulation — you want less pain.",
    coreWound: "You've likely endured emotional neglect, disconnection, or a lack of control in your life. So you crafted a world where you call the shots — even if it's imaginary. Escaping became your survival. But now it's your cage.",
    dailyProblems: [
      "You frequently \"check out\" — through screens, daydreaming, or addictions",
      "You struggle with follow-through, even on things you care about",
      "You feel more alive in fantasy than in your actual life",
      "You feel ashamed that you escape so much, but don't know how to stop"
    ],
    howToFix: [
      "Start grounding yourself in your body: breath, movement, nature",
      "Make your real life worth staying for — through goals, connections, and structure",
      "Reduce escapism gradually; don't go cold turkey",
      "Be kind to yourself — you escaped to survive, not to be weak"
    ],
    reflectionPrompts: [
      "What part of reality am I constantly running from?",
      "What makes the fantasy world feel safer than the real one?",
      "What would it take for me to feel alive here?"
    ],
    tipToday: "Turn off autopilot. Today, choose one task to complete fully — no distractions, no skipping. Then ask yourself: \"How did it feel to stay?\"",
    plainEnglishGuidance: "You need to stop running from real life and start building one worth living. You're not lazy or lost — you're hurt, and you've been hiding in dreams because reality once felt too painful. But now, you're missing your own story. Start with one grounded action each day — one thing that keeps you here. Talk to someone. Make your bed. Go outside. Bit by bit, remind yourself that the real world can hold beauty too. Escaping got you through the past — but presence will carry you into the future. Come back to yourself. You're needed here."
  },

  "comfort_craver": {
    sin: "gluttony",
    subtype: "comfort_craver",
    title: "The Comfort Craver",
    poeticSummary: "You're not chasing highs — you're chasing safe. Soft blankets. Warm food. Familiar shows. You build your world around comfort, because the world once felt too cold. But what once protected you… now prevents you.",
    coreWound: "You likely experienced instability, chaos, or emotional unpredictability. So you created a fortress of control and comfort. You cling to routines, habits, and physical ease — not because you're lazy, but because discomfort once meant danger.",
    dailyProblems: [
      "You avoid new environments or challenges that might disrupt your emotional or physical comfort",
      "You over-rely on food, shows, or routines to feel calm",
      "You resist change — even good change — because it threatens your safety bubble",
      "You mistake comfort for peace, and numbness for rest"
    ],
    howToFix: [
      "Slowly introduce small discomforts — a cold shower, a new route, a new face",
      "Learn to separate emotional safety from emotional stagnation",
      "Reconnect with the idea that discomfort can equal growth",
      "Make your comfort zone wider, not tighter"
    ],
    reflectionPrompts: [
      "What do I fear would happen if I stepped outside my comfort zone?",
      "Where did I learn that change is dangerous?",
      "Is my comfort making me better, or just safe?"
    ],
    tipToday: "Do one thing differently today — even if it's small. A new breakfast. A new walk. A new thought. Disrupt the loop. See what happens.",
    plainEnglishGuidance: "You need to stop using comfort as a shield from life. You're not weak — you're self-protective. But there's a difference between safety and stagnation. Right now, you've built a bubble so soft that even growth can't reach you. Start by leaning into small discomforts. Let yourself feel awkward, stretched, unsure — not because you're unsafe, but because you're evolving. Life isn't meant to be comfortable all the time. It's meant to grow you. And sometimes, growth begins the moment you step into the unfamiliar… and don't run back."
  },

  "excess_seeker": {
    sin: "gluttony",
    subtype: "excess_seeker",
    title: "The Excess Seeker",
    poeticSummary: "You don't just want some — you want all. One bite becomes five. One win becomes ten. You live at full volume. Because anything less feels like settling. But your appetite never sleeps… and peace never arrives.",
    coreWound: "You likely felt small, deprived, or overlooked growing up. So you built a life where you're always reaching for more. Not out of greed — but survival. You fear that if you stop… you'll go back to being less.",
    dailyProblems: [
      "You struggle to stop once you start — eating, scrolling, spending, working",
      "You feel restless or irritable when things slow down",
      "You often overindulge, then feel regret",
      "\"Enough\" is a word you don't fully trust"
    ],
    howToFix: [
      "Define what \"enough\" looks like before you begin anything",
      "Practice contentment through simplicity — small rituals, quiet wins",
      "Learn the difference between satisfaction and overstimulation",
      "Work on the belief that stillness won't erase your worth"
    ],
    reflectionPrompts: [
      "When did I start believing I had to chase more to matter?",
      "What am I afraid will happen if I stop at enough?",
      "How would life feel if I focused on depth instead of more?"
    ],
    tipToday: "Pick one area of your life where you usually go \"all in.\" This time, stop at 80%. Sit in the discomfort — and the power — of restraint.",
    plainEnglishGuidance: "You need to stop chasing more just to feel like you're enough. You're not broken — you've just trained yourself to associate worth with excess. But fulfillment doesn't come from quantity. It comes from quality, from presence, from knowing when to pause. The more you chase, the emptier you feel. Instead, learn the beauty of \"just enough.\" Set limits and honor them. Find joy in simplicity, not stimulation. You're not here to devour life — you're here to digest it. Slowly. Fully. One meaningful bite at a time."
  },

  "emotional_filler": {
    sin: "gluttony",
    subtype: "emotional_filler",
    title: "The Emotional Filler",
    poeticSummary: "You don't overconsume because you're greedy — you do it because something feels missing. Food, screens, shopping, sex… They're not indulgences. They're insulation. You're trying to feel full — because somewhere deep down… you feel empty.",
    coreWound: "You likely experienced neglect, abandonment, or emotional starvation — not always physically, but spiritually. Now, you seek sensation to fill the silence. You don't crave things — you crave soothing. But comfort has become your cage.",
    dailyProblems: [
      "You turn to consumption when feeling bored, lonely, or hurt",
      "You overeat, binge, scroll endlessly, or shop compulsively to avoid emotions",
      "You struggle with guilt or shame after overindulging — and then do it again",
      "You chase highs to escape lows, but feel emptier each time"
    ],
    howToFix: [
      "Begin identifying the feeling underneath the urge",
      "Replace numbing rituals with soothing ones (journaling, walking, calling someone)",
      "Learn to sit in discomfort without reaching for a fix",
      "Reconnect with people and passions that feed your soul, not just your senses"
    ],
    reflectionPrompts: [
      "What am I really trying to feel when I consume?",
      "When did I start equating comfort with consumption?",
      "What part of me still feels like it's starving?"
    ],
    tipToday: "Next time you reach for something to \"feel better,\" pause. Take a breath. Ask yourself: \"What do I actually need right now?\" Then honor the answer — even if it's silence.",
    plainEnglishGuidance: "You need to stop treating emotional pain with physical pleasure. You're not addicted to things — you're avoiding feelings. The truth is, nothing you consume will ever satisfy a soul wound. The hunger isn't in your body — it's in your heart. Start noticing what you run from. Catch the urge before it becomes a habit. Replace your coping mechanisms with connection — to yourself, to others, to truth. You don't need more pleasure. You need more presence. And with presence comes peace."
  },

  // ENVY SUBTYPES (4 total)
  "spotlight_thief": {
    sin: "envy",
    subtype: "spotlight_thief",
    title: "The Spotlight Thief",
    poeticSummary: "When someone else shines, you feel yourself dim. So you speak louder, step in front, steal the moment, shift the light. You crave to be seen — not just admired, but needed. But your shine is fueled by fear… because when the spotlight's not on you, you don't know who you are.",
    coreWound: "At your core is a fear of being invisible — maybe you were overlooked as a child, or only received attention when performing or excelling. So now, attention feels like oxygen. When others get it, you feel like you're choking. You've confused being noticed with being valued — and that belief controls you.",
    dailyProblems: [
      "You feel uncomfortable when others get praise or attention",
      "You shift conversations to center yourself, often without realizing it",
      "You feel threatened when others are the 'main character'",
      "You secretly fear being irrelevant, forgotten, or ordinary"
    ],
    howToFix: [
      "Learn to celebrate others without making it about you — train your ego to relax",
      "Rebuild your identity around who you are, not how you're perceived",
      "Give attention freely — to others, to small moments — and see that your worth isn't diminished",
      "Practice presence over performance"
    ],
    reflectionPrompts: [
      "Why do I feel uncomfortable when someone else is being celebrated?",
      "Who taught me that love comes from standing out?",
      "What am I afraid people will see if I'm not performing?"
    ],
    tipToday: "In your next group conversation or comment thread, let someone else have the moment. Watch them shine — and remind yourself: Their light doesn't dim yours.",
    plainEnglishGuidance: "You need to stop chasing attention like it's air. You're not bad for wanting to be seen — but you are more than your image. The truth is, people who constantly need the spotlight often feel unseen in private. So start there. See yourself. Validate yourself. Let others win sometimes without needing to one-up or interrupt. It doesn't make you less — it makes you whole. Your worth isn't in the eyes on you. It's in the peace within you. Start living like your light is real, even when no one's watching."
  },

  "resentful_romantic": {
    sin: "envy",
    subtype: "resentful_romantic",
    title: "The Resentful Romantic",
    poeticSummary: "You don't just want love — you want their love. You watch couples in cafes and smiles in stories, and wonder why it isn't your turn. Behind your strength is a quiet ache: the fear that you're unchosen. You don't hate love… you just resent how far away it feels.",
    coreWound: "You've likely experienced deep loneliness, heartbreak, or being overlooked in love. And now, seeing others happy reminds you of your pain. Romance feels like a game you were never given the rules to. You crave connection — but carry bitterness in your heart. You want to be loved… but also don't trust that you ever will be.",
    dailyProblems: [
      "You feel anger or sadness when others get into relationships or seem happy in love",
      "You may avoid dating or become cold to love, even though you deeply want it",
      "You see others' romantic wins as a threat to your self-worth",
      "You've become cynical about relationships, even if you secretly long for one"
    ],
    howToFix: [
      "Grieve what hurt you instead of pretending you don't care — your heart needs honesty",
      "Let yourself want love again without shame or resentment",
      "Take a break from media or spaces that flood you with romantic content",
      "Focus on giving the kind of love you want to receive — to yourself and others"
    ],
    reflectionPrompts: [
      "What part of me feels like I'm not worthy of love?",
      "Who hurt me so deeply that I closed off instead of healed?",
      "What would it feel like to believe love is still possible?"
    ],
    tipToday: "Do one thing today to soften your heart — even if it's writing down the kind of love you hope to experience. Reopening your heart doesn't make you weak — it makes you ready.",
    plainEnglishGuidance: "You need to stop pretending you don't want love just because it hasn't come yet. Your pain is real — but don't let it turn into poison. You've built up walls to protect yourself, but they're starting to suffocate you. It's okay to feel jealous. It's okay to want connection. What's not okay is giving up on love and then resenting those who didn't. Start healing the heartbreak. Talk to someone. Journal it out. Practice openness again — not desperation, but readiness. Love doesn't come to the bitter. It comes to the brave. And you're brave enough to try again."
  },

  "insecure_underminer": {
    sin: "envy",
    subtype: "insecure_underminer",
    title: "The Insecure Underminer",
    poeticSummary: "You clap… but not always from the heart. You smile… but sometimes it stings. You want others to win — but not more than you. So you throw shade in silence. Mock what you wish you had. Because it hurts to admit: you're afraid you're less.",
    coreWound: "You were likely made to feel small growing up — criticized, overlooked, or constantly compared. Now, when someone shines, it feels like a reminder of what you're not. So you protect your ego by cutting others down, even subtly. But every insult hides a deeper ache — the ache of not feeling worthy.",
    dailyProblems: [
      "You catch yourself judging or criticizing people who seem confident or successful",
      "You secretly want what others have but dismiss it as 'shallow' or 'easy'",
      "You feel insecure around people who are more skilled, attractive, or praised",
      "You downplay your own accomplishments out of fear of being seen — or not being enough"
    ],
    howToFix: [
      "Confront the real emotion behind your judgments — usually fear or insecurity",
      "Start giving compliments even when it feels uncomfortable — it breaks the ego's grip",
      "Work on building self-worth that doesn't rely on being 'better than'",
      "Explore and heal the root of your inferiority complex (likely childhood voices)"
    ],
    reflectionPrompts: [
      "Who am I still trying to prove myself to?",
      "When did I start believing I wasn't enough?",
      "Why do I only feel tall when others feel small?"
    ],
    tipToday: "Give one genuine compliment to someone you secretly envy. And mean it. Feel the resistance — and then feel it loosen.",
    plainEnglishGuidance: "You need to stop hiding your hurt behind sarcasm, shade, or criticism. You're not a bad person — you're just wounded. Somewhere along the way, you were made to feel 'less,' and now you try to level the field by pulling others down. But tearing others down never builds you up. It just keeps you small. Start catching yourself in moments of envy. Then ask: 'What does this trigger in me — and what needs healing?' Real power is not in undermining others. It's in finally standing tall on your own. You don't need to dim anyone else's light — yours can shine too."
  },

  "comparer": {
    sin: "envy",
    subtype: "comparer",
    title: "The Comparer",
    poeticSummary: "You scroll through lives not your own. You measure yourself in smiles, successes, stories — that aren't even real. Every win they post feels like a loss to you. And even when you're doing well, it never feels good enough. Because someone else… is always ahead.",
    coreWound: "Deep down, you fear that your worth is conditional — that you'll only matter if you're better than others. You may have grown up competing for attention or approval, and now you compare yourself constantly, hoping to feel like you belong… but only feeling behind.",
    dailyProblems: [
      "You constantly compare your progress, appearance, or success to others",
      "You feel a sting when others succeed — even people you care about",
      "You rarely feel satisfied, even when you win",
      "Social media triggers low self-worth, not inspiration"
    ],
    howToFix: [
      "Unfollow or mute accounts that trigger insecurity, even if they're popular",
      "Celebrate others out loud — it rewires envy into admiration",
      "Measure yourself only against your past self, not someone else's present",
      "Practice gratitude journaling to ground your focus"
    ],
    reflectionPrompts: [
      "Why does their win feel like my loss?",
      "Who made me feel like being average was a failure?",
      "What do I already have, that I forget to see?"
    ],
    tipToday: "Name 3 things you've done this year that your past self would be proud of. That's the only person you're racing.",
    plainEnglishGuidance: "You need to stop comparing your worth to someone else's highlight reel. You're not behind — you're on your own timeline. Envy thrives when you look outward and forget what's growing within. Start tracking your growth instead of others'. Be proud, even when it's quiet. Unfollow what hurts you. Redirect that energy into your craft, your healing, your truth. You don't need to outshine anyone — you just need to stop dimming yourself. The only person you should be better than… is who you were yesterday."
  },

  // PRIDE SUBTYPES (4 total)
  "hidden_insecurity_masker": {
    sin: "pride",
    subtype: "hidden_insecurity_masker",
    title: "The Hidden Insecurity Masker",
    poeticSummary: "You act confident. You move like you've got it all figured out. But it's not pride that fuels you — it's fear. You wear pride like makeup, hoping no one sees the doubt underneath. And the more perfect you appear, the more invisible you feel inside.",
    coreWound: "At your core, you fear being seen as weak, small, or ordinary. You may have been criticized, compared, or dismissed in ways that stuck. So you built a false self — charming, polished, high-functioning — and hoped it would protect you from ever feeling small again.",
    dailyProblems: [
      "You appear confident but often feel anxious or unworthy inside",
      "You feel like a fraud, terrified someone might \"see through\" you",
      "You struggle with deep self-doubt but rarely share it",
      "You dismiss compliments, yet secretly crave validation"
    ],
    howToFix: [
      "Let trusted people see the parts of you that feel unsure",
      "Practice speaking your insecurities without shame — they won't destroy you",
      "Challenge the belief that only perfection earns love",
      "Build inner confidence through self-compassion, not performance"
    ],
    reflectionPrompts: [
      "What part of me am I most afraid people would reject?",
      "Why do I feel unsafe admitting I'm struggling?",
      "Where did I learn that confidence must be constant?"
    ],
    tipToday: "Tell someone you trust one thing you're currently insecure about — without minimizing it, joking about it, or covering it up.",
    plainEnglishGuidance: "You need to stop hiding behind fake confidence. You've built your pride on survival — not truth. The world sees someone put-together, but you feel like you're holding everything in with duct tape. That's not strength — that's fear dressed up. Start showing up as you are, not as who you think people want. Ask for help. Admit when you're unsure. Practice self-kindness instead of self-judgment. The real you — messy, scared, still healing — is the one worthy of love. Stop performing. Start revealing. That's where real strength begins."
  },

  "quietly_superior_outsider": {
    sin: "pride",
    subtype: "quietly_superior_outsider",
    title: "The Quietly Superior Outsider",
    poeticSummary: "You don't need to prove anything. Because deep down… you already believe no one measures up. You watch people, study them, judge them — not out loud, but silently. You feel different. Above. Alone. But your throne is a cage.",
    coreWound: "You were likely misunderstood or alienated early in life. So you built a quiet narrative: \"I don't belong — because I'm beyond them.\" Now, distancing yourself feels like power, but it's also loneliness in disguise.",
    dailyProblems: [
      "You often feel superior to others, but secretly crave connection",
      "You avoid group belonging, believing most people aren't worth your time",
      "You resist being vulnerable, thinking others won't \"get it\"",
      "You may use intellect, standards, or moral purity to keep people at a distance"
    ],
    howToFix: [
      "Explore what it would mean to be equal with others — not above or below",
      "Seek out spaces where you allow yourself to be seen, not just admired",
      "Drop the idea that being misunderstood makes you more special",
      "Learn to connect without needing to compete"
    ],
    reflectionPrompts: [
      "What scares me about truly belonging?",
      "Do I use my standards to protect myself from rejection?",
      "When did I learn that closeness means compromise?"
    ],
    tipToday: "Open up one small truth to someone you quietly judge. See what happens when you drop the mask — even just for a second.",
    plainEnglishGuidance: "You need to stop using superiority as a substitute for connection. Right now, your pride is isolating you. It feels safe to believe you're better, deeper, or more aware than others — but that belief is also a wall. You're starving for closeness, yet keeping yourself above everyone. Let people in. Share the parts of you that aren't polished. Admit when you don't know. You're not meant to be the smartest in the room — you're meant to be in the room, fully present, fully human. Connection doesn't lower your value. It reveals your courage."
  },

  "defensive_know_it_all": {
    sin: "pride",
    subtype: "defensive_know_it_all",
    title: "The Defensive Know-It-All",
    poeticSummary: "You always have an answer. A rebuttal. A reason. A defense. Not because you're always right — but because being wrong feels like being nothing. So you speak loudly, confidently… even when silence would serve you more.",
    coreWound: "You may have grown up feeling unheard or underestimated. You learned that being right was how you stayed respected. Now, being corrected feels like an attack — because it pokes a wound you haven't healed.",
    dailyProblems: [
      "You struggle to admit when you're wrong or uninformed",
      "You feel personally attacked when someone challenges your ideas",
      "Conversations often become debates, not dialogues",
      "You may push people away by always needing the last word"
    ],
    howToFix: [
      "Practice listening with curiosity, not just with rebuttals",
      "Remind yourself that being wrong is part of growth",
      "Learn to say \"I don't know\" — and sit with the discomfort",
      "Invite others to share their views without needing to correct them"
    ],
    reflectionPrompts: [
      "What do I think it means about me if I'm wrong?",
      "What am I trying to protect by always defending myself?",
      "Who taught me that knowledge equals safety?"
    ],
    tipToday: "The next time someone disagrees with you, pause and say: \"That's interesting. Tell me more.\" Just listen. No defense. No debate.",
    plainEnglishGuidance: "You have to stop equating being right with being safe. Right now, your pride is armor — and it's blocking growth, connection, and trust. Being wrong doesn't mean you're stupid. It means you're human. Start inviting correction. Start seeking feedback. You'll learn more, connect deeper, and finally breathe without needing to perform. The strongest minds aren't the loudest — they're the most open. You don't need to win every argument. You need to win your own inner peace."
  },

  "arrogant_overachiever": {
    sin: "pride",
    subtype: "arrogant_overachiever",
    title: "The Arrogant Overachiever",
    poeticSummary: "You don't just want to succeed — you need to be the best. You walk into the room already ranking everyone. But beneath the confidence lies a quiet fear: \"If I'm not extraordinary… am I even worthy at all?\"",
    coreWound: "You were likely praised for performance, not presence. You learned early on that being good wasn't enough — you had to be great. Now, achievement feels like survival — not just success.",
    dailyProblems: [
      "You constantly compare yourself to others, even if silently",
      "You base your worth on how much better you are than others",
      "You downplay others' wins or inflate your own",
      "You feel deep shame when you're not at the top"
    ],
    howToFix: [
      "Redefine success as internal growth, not just external results",
      "Celebrate others' strengths without seeing them as threats",
      "Learn to value rest, vulnerability, and failure — as part of the journey",
      "Reflect on whether you want to lead… or just look impressive"
    ],
    reflectionPrompts: [
      "What part of me feels endangered when I'm not the best?",
      "Who would I be without my achievements?",
      "Do I want admiration… or connection?"
    ],
    tipToday: "Genuinely compliment someone who outperformed you. Then sit with the feeling that you're still enough.",
    plainEnglishGuidance: "You need to stop chasing superiority as your only source of worth. Right now, you think being the best protects you from feeling like a failure — but it actually keeps you exhausted, isolated, and insecure. Start learning to value being, not just winning. Let others shine without it dimming your light. Rest without guilt. Fail without shame. Your real strength isn't in being above people — it's in being whole enough that you don't need to be. When you let go of proving, you make space for becoming."
  },

  // GREED SUBTYPES (4 total)
  "opportunist": {
    sin: "greed",
    subtype: "opportunist",
    title: "The Opportunist",
    poeticSummary: "You see angles in every room. Moves in every silence. You chase opportunities like a wolf tracks scent — sharp, hungry, alert. You don't mean to use people… but sometimes, the goal gets louder than the guilt. It's not about taking — it's about never missing your shot.",
    coreWound: "You likely grew up in a world where resources — attention, love, money — felt scarce. So you learned to take before it's gone. You became strategic, fast, and charming… because waiting meant losing. You don't trust the system to reward you — so you take rewards for yourself.",
    dailyProblems: [
      "You prioritize self-advancement, even if it means cutting ethical corners",
      "You may struggle with guilt but suppress it in the name of 'survival'",
      "You often justify manipulation or taking advantage of situations as 'just smart'",
      "People might feel used or unimportant once they've served their purpose"
    ],
    howToFix: [
      "Practice acting in ways that serve both you and others — win-win thinking",
      "Reflect on where your fear of 'missing out' really comes from",
      "Strengthen values over tactics — ask yourself why you want what you want",
      "Let go of the belief that kindness equals weakness"
    ],
    reflectionPrompts: [
      "Why do I always feel like I have to be one step ahead?",
      "What's the cost of always looking for leverage?",
      "When did I learn that survival means outsmarting others?"
    ],
    tipToday: "Make one decision today not for gain — but for good. Even a small one. Prove to yourself that integrity is a form of power, too.",
    plainEnglishGuidance: "You need to stop seeing life as a game to win. You're smart — but sometimes, your intelligence has turned into armor. You've convinced yourself that if you don't take advantage of every opening, you'll fall behind. But life isn't just about winning — it's about becoming someone worth being. Start shifting your focus from 'getting ahead' to 'becoming aligned.' Ask yourself not 'how can I gain?' but 'who am I becoming if I do this?' The most powerful move you'll ever make is choosing integrity — even when no one's watching."
  },

  "possession_protector": {
    sin: "greed",
    subtype: "possession_protector",
    title: "The Possession Protector",
    poeticSummary: "You don't just hold things — you cling to them. Money. Belongings. Even people. Not because you're selfish… but because you're scared of loss. You build walls of 'mine' to protect the heart inside. But the tighter you grip, the more peace slips through your fingers.",
    coreWound: "You likely grew up in an environment of loss, unpredictability, or emotional scarcity. So you developed a belief: 'If I don't hold on tight, I'll lose everything.' Now, accumulation is your safety. Letting go feels like dying.",
    dailyProblems: [
      "You struggle to share — your money, time, space, or emotions",
      "You may fear generosity, thinking it'll leave you empty",
      "You attach strongly to 'what's yours' and panic at the idea of losing it",
      "You often confuse safety with ownership"
    ],
    howToFix: [
      "Practice small acts of generosity — not to lose, but to liberate",
      "Reflect on times when you gave freely and were still okay — or even better",
      "Reframe letting go as trust, not threat",
      "Build inner stability so you don't need external control"
    ],
    reflectionPrompts: [
      "What part of me feels like it's still living in survival mode?",
      "Why does sharing feel unsafe — and where did I learn that?",
      "What would it mean to have enough, even after giving?"
    ],
    tipToday: "Give something away — time, attention, a small gift. Then sit with what it brings up. Freedom starts where fear ends.",
    plainEnglishGuidance: "You need to stop clinging so tightly to what you have. You're not wrong for wanting to feel safe — but safety isn't in your savings, or your things, or even in your routines. It's in knowing that no matter what leaves, you'll still be whole. Begin practicing generosity — not recklessly, but intentionally. Let people in. Let things go. The more you grip, the more you suffer. Trust that what's truly yours can't be taken. And what you give freely will come back in forms you never expected."
  },

  "status_climber": {
    sin: "greed",
    subtype: "status_climber",
    title: "The Status Climber",
    poeticSummary: "You don't just want money — you want to be seen. Every move is a step higher. Every win, a reminder that you matter. You crave respect. Recognition. Rank. But in chasing the spotlight, you may lose the parts of you that weren't performing.",
    coreWound: "You were likely overlooked, underestimated, or made to feel invisible. So you built your worth on achievement. Now, success isn't just a goal — it's your identity. Without the next win… who are you?",
    dailyProblems: [
      "You constantly compare yourself to others and feel behind",
      "You feel anxious when you're not advancing, improving, or being recognized",
      "You take on more than you can handle just to stay relevant",
      "Even when you win, it never feels like enough"
    ],
    howToFix: [
      "Detach your identity from titles, numbers, or accolades",
      "Invest time in relationships and hobbies that aren't based on status",
      "Practice gratitude for where you are — not just where you're going",
      "Reflect on who you are without the achievements"
    ],
    reflectionPrompts: [
      "What am I afraid I'll become if I'm not successful?",
      "Whose approval am I still chasing?",
      "If no one could see me win… would I still want it?"
    ],
    tipToday: "Celebrate one small win without sharing it. Let the joy come from within — not from the reaction it gets.",
    plainEnglishGuidance: "You need to stop outsourcing your value to your achievements. You're not your résumé. You're not your income. You're not your follower count. You're someone who's been trying to prove your worth in a world that made you feel unseen — but the truth is, you were always worthy. Start focusing on who you are when no one's watching. Build a life you enjoy, not just one that impresses. When you stop performing, you'll finally start living. The spotlight can never show you what your own light already holds."
  },

  "control_seeker": {
    sin: "greed",
    subtype: "control_seeker",
    title: "The Control Seeker",
    poeticSummary: "You don't chase money for luxury — you chase it for security. You want to own the pieces so no one can move the board. Power, wealth, control… they make you feel safe. But control is an illusion — and fear, your real master.",
    coreWound: "You likely experienced uncertainty, instability, or betrayal. You learned early that relying on others leads to disappointment. So you made a vow: 'I'll take care of myself — no matter what it takes.' Now, success isn't a goal… it's armor.",
    dailyProblems: [
      "You measure your worth by your status, income, or ability to stay ahead",
      "You struggle to trust others or delegate — it has to be you",
      "You fear losing control more than failure itself",
      "Relationships may suffer because you prioritize power over vulnerability"
    ],
    howToFix: [
      "Practice letting others lead or support you, even in small ways",
      "Learn to differentiate between healthy ambition and fear-based control",
      "Build inner security through routines, not outcomes",
      "Explore trust-building activities with people you care about"
    ],
    reflectionPrompts: [
      "What am I afraid will happen if I'm not in control?",
      "When did I learn that safety comes from power?",
      "What would life look like if I let go… just a little?"
    ],
    tipToday: "Let someone else take the lead in one small decision today — a meal, a route, a plan. Notice what fears come up. And sit with them, instead of silencing them.",
    plainEnglishGuidance: "You need to stop mistaking control for safety. You're not wrong for wanting security — but true safety comes from trust, not from holding the wheel so tight it breaks. You've been trying to outrun chaos by building empires — but the chaos is inside you. Start letting go of control in small ways. Delegate. Open up. Let someone else support you. When you stop gripping so hard, you'll find freedom. You're allowed to rest. You're allowed to trust. And you're allowed to stop fighting battles that already ended."
  },

  // SLOTH SUBTYPES (4 total)
  "emotionally_frozen": {
    sin: "sloth",
    subtype: "emotionally_frozen",
    title: "The Emotionally Frozen",
    poeticSummary: "You don't feel much — and that's the point. It's not that you can't care… It's that caring became too heavy. So you built a wall. Not out of stone, but silence. And now, even joy feels far away.",
    coreWound: "You've likely faced emotional chaos, betrayal, or trauma that taught you one thing: Feeling deeply is dangerous. So instead of feeling too much, you chose to feel… nothing. Numbness became safety. But now, it's also your prison.",
    dailyProblems: [
      "You don't get excited or emotionally invested — even when you want to",
      "You isolate from others emotionally, even if you're physically present",
      "You often say \"I'm fine,\" but feel hollow inside",
      "You might use distractions, substances, or routines to avoid feelings"
    ],
    howToFix: [
      "Acknowledge your emotional shutdown — name it gently",
      "Create safe, low-pressure environments to feel again (e.g. journaling, music)",
      "Connect with people who hold space, not pressure",
      "Start by feeling one thing a day — even if it's discomfort"
    ],
    reflectionPrompts: [
      "What feeling am I avoiding most?",
      "Who taught me that emotions are a threat?",
      "What would happen if I allowed myself to feel — even just a little?"
    ],
    tipToday: "Listen to a song that used to make you cry or smile. Don't analyze it. Just feel. Even if it's just a flicker — that flicker matters.",
    plainEnglishGuidance: "You need to stop living on autopilot and start giving yourself permission to feel. You've been emotionally frozen for a long time — not because you're cold, but because once upon a time, emotions hurt too much. So you shut them down. But now you're stuck in neutral. And you can't live like this forever. Start with small emotional moments. Let yourself cry at a movie, smile at a memory, or admit when you're not okay. You don't have to open the floodgates — just crack the door. Feeling again is scary… but staying numb will slowly erase you. You're still in there. Let yourself come back."
  },

  "burned_out_performer": {
    sin: "sloth",
    subtype: "burned_out_performer",
    title: "The Burned-Out Performer",
    poeticSummary: "You used to be driven. You used to care. Now… it's hard to get out of bed. Not because you're lazy — but because you gave too much for too long. You sprinted through life to prove your worth… until the tank ran dry.",
    coreWound: "You were likely taught that love comes through achievement. So you became the overachiever, the dependable one, the grinder. But nobody noticed your exhaustion — and eventually… neither did you. Until now.",
    dailyProblems: [
      "You feel mentally and physically exhausted but still guilty for resting",
      "You've lost motivation for things that used to excite you",
      "You beat yourself up for being \"lazy,\" even though you're just depleted",
      "You secretly wish life would just pause — or that someone else would take over"
    ],
    howToFix: [
      "Learn to rest before you break",
      "Separate your worth from your output",
      "Rebuild your energy slowly — through sleep, sunlight, softness",
      "Forgive yourself for slowing down. You needed to"
    ],
    reflectionPrompts: [
      "When did I stop allowing myself to rest without guilt?",
      "Who benefits from me always being tired?",
      "What would it look like to be enough… even while resting?"
    ],
    tipToday: "Cancel one non-essential task today. Then do nothing. Not for productivity. For healing. You're allowed.",
    plainEnglishGuidance: "You need to stop blaming yourself for being tired — and start honoring your body for surviving what it did. You're not lazy. You're drained. You've been performing for so long, trying to stay useful, impressive, strong… that you forgot how to just be. Now is the time to slow down — on purpose. Not forever, just long enough to breathe again. Your worth isn't in how much you produce. It's in how whole you are when no one is watching. Start by resting — not as a reward, but as a right. Your comeback begins with compassion."
  },

  "overthinker_avoider": {
    sin: "sloth",
    subtype: "overthinker_avoider",
    title: "The Overthinker Avoider",
    poeticSummary: "You live in your mind — an endless maze of maybes and what-ifs. You analyze, plan, hesitate… but rarely act. Because what if it goes wrong? What if you're wrong? So instead of failing — you wait. And wait. And wait.",
    coreWound: "You likely grew up in an environment where making mistakes felt unsafe. So now, your brain protects you with analysis. But that protection has become your prison. You don't procrastinate out of laziness — you procrastinate because action feels like danger.",
    dailyProblems: [
      "You overanalyze decisions until you're paralyzed",
      "You avoid starting tasks unless conditions feel \"perfect\"",
      "You seek constant reassurance before acting",
      "You feel mentally exhausted — but haven't done anything"
    ],
    howToFix: [
      "Set time limits for decision-making",
      "Practice taking messy action — perfection isn't the goal",
      "Use body-based practices (like walking or breathing) to escape mental loops",
      "Learn to tolerate discomfort without solving it"
    ],
    reflectionPrompts: [
      "What am I really afraid will happen if I just begin?",
      "When did I learn that mistakes = danger?",
      "What would my life look like if I trusted myself?"
    ],
    tipToday: "Pick one thing you've been avoiding. Do the first 5 minutes of it — nothing more. Then sit with the feeling. You didn't die. You moved.",
    plainEnglishGuidance: "You need to stop hiding behind your thoughts and start trusting your steps. You're not lazy — you're afraid. Afraid of doing it wrong, of being judged, of wasting your shot. But the truth is: the only failure is never starting. Overthinking is just fear wearing glasses. You've trained your mind to protect you — now it's time to train your body to lead you. Take the smallest possible action today. Let that be enough. You don't need a flawless plan. You need momentum. And it starts when you finally move — imperfect, unsure, and alive."
  },

  "numb_drifter": {
    sin: "sloth",
    subtype: "numb_drifter",
    title: "The Numb Drifter",
    poeticSummary: "You're not lazy — you're disconnected. You move through life like a ghost in your own body, not because you don't care, but because you stopped feeling a long time ago. Comfort became your shield. Numbness became your home.",
    coreWound: "You've likely faced overwhelming emotions, trauma, or burnout that made you shut down. So instead of running toward life, you drift beside it. You avoid the highs to dodge the lows, but in doing so… you've muted your entire existence.",
    dailyProblems: [
      "You avoid effortful decisions or uncomfortable emotions",
      "You default to low-energy habits like endless scrolling or sleeping",
      "You feel emotionally flat, even when good things happen",
      "You're aware something's off, but it feels safer to stay \"comfortable\""
    ],
    howToFix: [
      "Start reconnecting to your body through breathwork or movement",
      "Do one small thing each day that makes you feel — joy, sadness, anything",
      "Stop overprotecting yourself from discomfort — it's how you grow",
      "Seek environments that spark energy and life"
    ],
    reflectionPrompts: [
      "When did I stop feeling safe being fully alive?",
      "What emotions am I afraid will come up if I slow down?",
      "What used to make me feel awake — and why did I stop chasing it?"
    ],
    tipToday: "Go for a walk without your phone. Breathe deep. Feel your feet hit the ground. Say out loud: \"I am here.\" Even that… is a start.",
    plainEnglishGuidance: "You need to stop numbing yourself just to get through the day. You're not broken — you're tired of feeling too much, so you started feeling nothing. But the truth is, life isn't meant to be managed — it's meant to be lived. You have to start reconnecting with your senses, your body, your heart. That might mean facing pain — but it also means reclaiming joy. Do something each day that makes you feel, even if it's small. You don't need a full plan right now. You just need to wake up again — one honest moment at a time."
  }
}; 