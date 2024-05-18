# Modulation

![AM and PM](/static/images/modulation/am-pm.png?size=most)

"Modulation" just means one thing altering or varying another. For sound, those two things are waves. The first wave is the _carrier_, and it's the rate of modulation. The second wave is the _message_, and it's where the information is.

Let's build some modulators to get a better idea of what exactly that means.

There are two kinds of wave modulation that we can roughly implement with our workshop kits, and they're conveniently well known to musicians: Tremolo and Vibrato.

## Amplitude modulation = Tremolo

Flutter your hand over your mouth as you sing a long note... that's tremolo! Tremolo is the altering of the volume of a sound, where the frequency is otherwise unaffected. Musical examples are things like rotating Leslie organ speakers and, of course, tremolo effects pedals.

<small>I've learned there's a "tremolando" version of tremolo that's about making a note trill or reiterate quickly, like fast violin bowing or drum rolls. Our tremolo here is not going to be that kind, but you might enjoy thinking about how it could be.</small>

![AM schematic](/static/images/modulation/am-schematic.png)

To make tremolo:

1. Build a Low Frequency Oscillator (LFO) to blink an LED. This is the carrier.
2. Separately, build an audio-rate pitch oscillator. This is the message.
3. The message oscillator's output connects to a voltage divider made from a Light Dependant Resistor (LDR) and some big resistor. The divider's junction is the new audio output.
4. Move the LED closer to the LDR so the pitch is audible when it's lit and less audible when it's dark.

You should hear an audible change in volume matched in tempo to the LED's blinking.

Other things to try/consider:

* All values besides the LED's resistor are made up but should work okay. Try a big pot instead of 100k on the voltage divider to vary the tremolo's depth.
* Instead of the LFO, a fidget spinner atop an LDR will make a kind of electromechanical tremolo, where the carrier frequency decays as the spinner slows down. Mount it on a sturdy enclosure for a tremolo pedal you kick into action.
* Make a "vactrol" by coupling the LED to the LDR in heat-shrink tubing to cut down on environmental light affecting the frequency.
* Remember when we hooked the output of one oscillator into the control input of another to make it beep? Would you consider totally-on-then-totally-off a kind of amplitude modulation?
* Different wave types will change the effect. Try a low pass filter (ex: 10k resistor and 220uF cap) from the LFO before the LED. The LED won't light as brightly but it will pulse gently instead of strobe.
* Google "LDR tremolo" for nicer versions!

## Frequency modulation = Vibrato

Vibrato, on the other hand, is the altering of frequency, where amplitude is otherwise unaffected. When violinists wiggle their wrist/finger while fretting to subtly change the note's pitch, that's vibrato.

![PM schematic](/static/images/modulation/pm-schematic.png)

To make vibrato:

1. Build an LFO to blink an LED, the carrier frequency.
2. Separately, build an audio-rate pitch oscillator, the message frequency. Make it a "light theremin" by having it use an Light Dependant Resistor (LDR).
3. Move the LDR near the LED so the pitch goes high when it's lit and low when it's unlit

Our vibrato sounds closer to a siren than what a violinist would do, but it is still technically frequency modulation and vibrato.

Most of the things to try/consider for tremolo are equally relevant for vibrato.

* The low pass filter trick is great here to glide between the high and low frequencies.
* Can you change the min/max frequency of the audio-rate oscillator? You could shift the high end with a serial resistor by the LDR, and shift the low end with a separate always-on LED near the LDR.
* How else can we make frequency modulation? <span style="display: inline-block; transform: rotate(180deg);"><small>Hint: sequencers</small></span>
* Annoying fact: The tremolo bar on your Stratocaster is misnamed. It's doing vibrato, not tremolo. [Sorry, Leo Fender](https://en.wikipedia.org/wiki/Vibrato_systems_for_guitar).

---

## AM and FM on the radio

Yep! Radios use AM and FM.

The carrier wave frequency is licensed to each radio station. The message wave contains the music (or talk banter or commercials or whatever). Radio stations modulate the two and broadcast it out. The air around us is filled with the electromagnetic cacophony of all of them mixed together.

AM radio uses, you guessed it!, amplitude modulation and FM uses frequency.

(The reason we can't hear these waves without a radio is because the carrier frequencies are well beyond our audible spectrum. It would be like hearing infrared or the microwaves that heat up our leftovers.)

When you tune a radio to your favorite station, it's filtering to the carrier frequency. It then demodulates the message from the carrier from and sends it to an amp to drive a speaker.