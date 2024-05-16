# On Design

<!-- TODO: rename file -->

<!-- TODO: intro text -->

<!-- TODO image: intro image? -->

## Don Norman's Principles of Interaction Design

The field of designing products for mass production is called Industrial Design, and _the Design of Everyday Things_ by Don Norman is its bookshelf staple. <!-- Two thing I want to share from it are TODO MENTAL MODEL thing and design principles. -->

<!-- ### TODO MENTAL MODEL thing

hey

A fun way to explore this idea is to have somebody explain a piece of technology and see how it differs from your understanding or even the manufacturer's description. -->

This is its "Principles of Interaction Design," adapted for our usage and accompanied by my unsolicited addenda:

* **Visibility**
    * The more visible something is, the more likely users will know about it and use it
    <!-- * Basically, make things you want the user to do easy, and things you want to allow but caution against harder.  -->
    * I've heard this as "Size implies importance," which can be further interpreted to "Often is to easy as rare is to hard". A big friendly knob will get turned a lot, a little knob once and awhile, and a tiny trimpot you can only access from the bottom with a screwdriver hardly ever.
    <!-- * I am big into making things big, and I don't shy away from it. I see a lot of gadgets that are basically like "this other thing but now it's smaller" or whatever and I think that is kind of misguided. -->
    * Examples: the stomp switch on a guitar pedal, presets for common parameters, big pads on a drum machine
* **Feedback**
    * Making it clear what action is being done and what it accomplished
    * I think of this as "Be responsive." A lot of times when we think a machine or program is broken, it's really just unresponsive to our action... It could be waiting for something else or actually working but not providing the feedback that  so you'll spam click a button to save
    * Examples: a lit LED to say the machine is on or working, beeps when moving around menus or making selections; the "CLICK" from our tacile switches is mechanical feedback too.
* **Constraints**
    * Limiting the range of possibilities to simplify the interface and guide towards the appropriate action
    * This seems related to visibilty to me! We can think of the controls for inappropriate or unusable actions as invisible, and they get increasing more visible as their results are appropriate.
    * Potentiometers are prime constraint candidates. We can pick pots with resistance ranges that pair well with our circuits, and we can further limit their high end with serial resistors.
    * Examples: chromatic harmonicas, all musical instruments for humans constrain their output to our audible hearing range
* **Mapping**
    * Clear relationship between controls and their effect
    * The better the mapping, the less explanation.
    * The textbook example is stovetop range controls in a 1x4 line despite the burners being a 2x2 grid. How often do you turn on the wrong burner? What text/icons are on the machine to denote the mapping?
    * I've always heard this as "Proximity implies relation".
    * Examples: TODO knobs grouped together
* **Consistency**
    * Similar things for similar tasks. Inversely, dissimilar things for dissimilar tasks.
    * A common confusion on complex machines is false consistency, where similar controls have dissimilar tasks. Think buttons with "alt" functions or the inverted keys on a Hammond organ that do drawbar presets.
    * Other examples: piano keys all of the same dimensions and layout, organ drawbars with colors for special overtones, color-coded mixer knobs for EQ/pan/level.
* **Affordance**
    * An implicit visual suggestion about how something is supposed to be used
    * It's a clue! A chair's cushion tells you where to sit &mdash; it _invites_ you to use it in a specific and obvious way, without a word of written instruction. You might call it intuitive or self-evident.
    * I think this one is easy to misapply or do naively. I've seen enough screws hammered into wood to know that nothing is obvious to everybody. But it's still a worthwhile goal!
    * The more people will understand it, the better. The strongest affordances rely on physicality shared by all/most humans; lesser ones rely on culture or idiom or genre. The weakest might be contextual to the instrument itself.
    * Examples: a padded drum throne to sit on and pedals where your feet will be, black and white piano keys for Westen musical scales, an LED next to a volume knob to convey that it's also an on/off switch.

<!-- ### More on "Constraint"

There's a balance to be had in how much control a user has over a machine. Too much control and it's overwhelming. Too little and it's a toy.

The bad news is that finding the right balance can be hard, but the good news is that, regardless of where you land, your design can still find an audience. Windows, Macintosh, and Linux computers all basically do the same stuff, but they attract different types of users who want different levels of control for different usages.

That's why I think it's naive to say one is empirically, blanketly better than the others. What makes a thing's design good or bad is just as much about the human using it as it is about the thing itself!

Something something market segmentation by level of constraint

-->

### Paths vs puzzles

Now, all of that is well and good and worth considering, BUT we're making novelty musical instruments and noise machines, not helicopter cockpits or hospital equipment! God willing, nobody's life will ever depend on what we'll make from a `CD4093 Quad 2-Input NAND Schmitt-Trigger`.

Keep and ditch design rules as you desire. Not everything has to make sense. There's a lot of joy to be had in making a weird, harmless thing to confuse somebody.

<!-- ## Gestalt

"The whole is greater than the sum of its parts."

  - Proximity
    - Proximity implies relation
  - Alignment
    - Also informs relation
  - Repetition
  - Contrast
    - size, color,

 -->

---

## A maker's development lifecycle

<!-- TODO IMAGE: drawing of "Proof of Concept" breadboard, prototype cardboard, and finished product-->

This is the process I use when I make things:

1. **Proof of Concept (PoC)**
    * This is the breadboard version of a machine, with its main function(s) working but limited in functionality and control. It is probably table-bound, a little delicate, and requires assistance to be used because nothing is labelled. 
    * For example, an oscillator has a couple buttons to play different frequencies, and its output connects to a cheap guitar amp.
    * The goals are to prove that the basic premise is both 1) technically feasible and 2) worth the effort to continue. You might call it a technical demo.
2. **Prototype**
    * A prototype takes the PoC off the breadboard and into the real world. It's soldered up to withstand being handed around and probably in a crude enclosure to protect it from the elements.
    * It should be closer to feature complete but doesn't have to be exhaustive. Ugly but intuitive is perfect.
    * Continuing our Proof of Concept example, now the oscillator has buttons for a full, tuned octave of notes and the amp is built-in. There's a switch for power and maybe a switch for a filter too. Oh, and it's all in a cardboard box with all the components poking out.
    * Enclosing our circuit starts to abstrtact away its complexity. It's no longer a jumble of electronic components but a singular machine. "The whole is greater than the sum of its parts." It has a permanence.
    * The goal of a prototype is user testing. Carry it around with you. Is it fun to play? Let someone else try. Are they able to use it without your assistance?
3. **Finished Product**
    * This version is what you could imagine sitting on a store shelf or on a nice display in your home &mdash; it is "shelf-worthy."
    * Okay, maybe "product" isn't the right word because you don't have to sell it. Pretend it's a very nice gift for somebody or something.
    * Our cardboard prototype now has 25 buttons for two full octaves of notes, and they're all capped with piano key overlays. The filter switch is replaced by two knobs for even more filtering control, and there's a bigger knob for volume too. It's made of plastic/wood/metal, and close to none of the underlying components are visible to the user.
    * In startup land, a "Minimally Viable Product" (MVP) is one that reduces the feature set to the bare minimum of what people will pay money for.
    * The goal of a product is probably money, but yours can be pride or a sense of achievement or anything else that validates all your hard work!

Distinctions between stages are blurry, and they can overlap. The important takeaway is that the core functionality of the machine is understood and working from start to finish, and you iterate incrementally. You don't just go straight to the end!

Stages can also loop and cycle, individually or in a subset. You could go through multiple Proof-of-Concepts before you find one you like, with multiple prototypes as you build out its features; and an MVP makes a great base framework to PoC new functions.

<!-- TODO: maybe annotate minutiae here, silkscreened stompboxes -->

<!-- * Breadboards are well suited to the proof of concept phase but I don't like them much beyond that. In fact, I start to get anxious when breadboards are too busy. Get that soldered up before the cat knocks it over!
* My pet peeve about a lot of electronics projects is that they either basically stop at the prototype "components in a box" phase and lack polish or they try to skip the prototype stage entirely and  -->

<!-- ## Further Reading

* Don't Make Me Think by Steve Krug
    * This is the book I read in college for web design and I'd later get it for interns at work. Its title is its premise: the less a user has to think to use your product, the better. Any edition you can find will feel dated, but, like Don Norman's work, the core ideas are timeless.
* Push Turn Move: Interface Design in Electronic Music by Kim Bjørn
    * In coffee table book about synths and their design decisions, interspersed with interviews from their designers. It's very cool and colorful but a lot to digest and hard to summarize. Definitely a great gift for any gearhead. -->

  <!-- - We know this machines function. We know what it does. But we don't know its form. We don't know how we use it. Let's design a form for the space drum function.
  - There's a lot to say about design, none of which I'm qualified to do.
  - It is NOT just aesthetic. Smart TV. Form vs Function... Form AND Function.
  - Sound overwhelming? You've already been making design decisions. Resistors -> pots, pot direction, taper/sweep. Any fine-tuning you've done to make a circuit more fun/approachable/useful.
  - Form changes based on how the function is to be used.
  - 3 questions, flip a coin, 6 permutations:
    - Handheld/small vs tabletop/big
    - Musical instrument vs professional utility
    - One-off for someone specific you love vs for strangers on Amazon
  - You decide
    - Standalone vs part of a bigger system
    - What is controlled vs fixed
    - Lights
    - Name! Recall triangle-as-square.
  - Draw it and we'll come back to review -->

<!-- ## og notes from kirk's calss

- Design
  - "Interface"... what comes to mind?
    - Apple vs Android. How you interact w/ a device
    - Point of contact between to different things
  - Everything in the design world has two components
    - The job at hand: what it's supposed to do
    - The hand at job: what the human interacts with
    - ie, a hammer is intuitive bc we'd never pick it up by the mallet
  - Every instrument has two components
    - Generator: how it vibrates air
    - Interace: how its user control it
    - Different instruments can share generators but not interfaces, and vice versa: organs vs harpsichords vs synths all have keybaords, and wind instruments have a consistent interface but are in different keys
  - Anthony, a puppeteer: form vs function is a forever debate
    - a cool looking puppet may not be easy to use
  - Kirk used to talk about more instruments but keeps narrowing it down bc who knows if that's useful
    - Mbira aka Kalimba aka thumb piano
  - We have cart blanche in the design!!
  - Example projects
    - Ramona Sharples plexiglass synth
    - Bob Motown cat undertoner -->

  <!-- - Homework: something to present!
    - Nothing too small. Triangle-as-square
    - Crafty? Try making an enclosure
    - Will also accept drawings or theoretical schematics. Talk through it
    - "Perfect is the enemy of good". Cautionary tale: Troy's guitar. Incremental progress is still progress. None of this matters. Perfection is an illusion. -->

<!-- - Anthony: How do you "compose" with these circuits?
    - Big great ol question! Kirk recommends just making a lot of stuff and using those pieces in your comps.
    - Could be an analog about film/TV: is the narrative made in the script or later in editing?
    - How can we use the things we can make, how can we make things we can use, how do we want to, etc. -> industrial design. All consumer goods are an answer to the question "What is the cheapest way to make a thing that people will use" -->