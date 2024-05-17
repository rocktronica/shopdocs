# Modulation

"Modulation" just means one thing altering or varying another. For sound, those two things are waves. The first wave is the _carrier_, and it's the rate of modulation. The second wave is the _message_, and it's where the information is.

Let's build some modulators to get a better idea of what exactly that means.

There are two kinds of wave modulation that we can roughly implement with our workshop kits, and they're conveniently well known to musicians: Tremolo and Vibrato.

## Amplitude modulation = Tremolo

<!-- TODO IMAGE: Amplitude modulation -->

Flutter your hand over your mouth as you sing a long note... that's tremolo! Tremolo is the altering of the volume of a sound, where the frequency is otherwise unaffected. Musical examples are things like rotating Leslie organ speakers and, of course, tremolo effects pedals.

<small>I've learned there's a "tremolando" kind of tremolo that's about making a note trill or reiterate quickly, like fast violin bowing or drum rolls. Our tremolo here is not going to be that kind, but you might enjoy thinking about how it could be.</small>

To make one:

1. Build a Low Frequency Oscillator (LFO) to blink an LED. This is the carrier frequency.
2. Separately, build an audio-rate pitch oscillator. This is the message frequency. Connect its output to a Light Dependant Resistor (LDR) then to the amp.
3. Move the LED closer to the LDR so the pitch is audible when it's lit and less audible when it's dark

Why is this working? When the LDR is lit, its resistance is very low and allows the pitch oscillator's current to go to the amp. When the LDR is dark, there can be up to several megaohms of resistance, way more than enough to make the oscillator very quiet.

Other things to try/consider:

* A fidget spinner atop an LDR will make a kind of electromechanical tremolo, where the carrier frequency decays as the spinner slows down
* Can you change the min/max frequency of the audio-rate oscillator? You could shift the high end with a serial resistor by the LDR, and shift the low end with a separate always-on LED near the LDR.
* Make a "vactrol" by coupling the LED to the LDR in heat-shrink tubing to cut down on environmental light affecting the frequency.
* Remember when we hooked the output of one oscillator into the control input of another to make it beep? Would you consider totally-on-then-totally-off a kind of amplitude modulation?
* A fine upgrade would be to make the LDR part of a voltage divider. A pot would make the LDR's effect adjustable.
* Different wave types will change the effect. Try a low pass filter on the LFO.
* Google "LDR tremolo" for nicer versions!

## Frequency modulation = Vibrato

<!-- TODO IMAGE: Frequency modulation -->

Vibrato, on the other hand, is the altering of frequency, where amplitude is otherwise unaffected. When violinists wiggle their wrist/finger while fretting to subtly change the note's pitch, that's vibrato.

1. Build an LFO to blink an LED, the carrier frequency.
2. Separately, build an audio-rate pitch oscillator, the message frequency. Make it a "light theremin" by having it use an Light Dependant Resistor (LDR).
3. Move the LDR near the LED so the pitch goes high when it's lit and low when it's unlit

All the things to try/consider for tremolo are equally relevant for vibrato.

**Annoying fact:** The tremolo bar on your Stratocaster is misnamed. It's doing vibrato, not tremolo. [Sorry, Leo Fender](https://en.wikipedia.org/wiki/Vibrato_systems_for_guitar).

---

## AM and FM on the radio

The carrier wave frequency is fixed to each radio station. The message wave is the music: the old school bangers, the new school hits, the inane jockey banter.

When you tune a radio to your favorite station, you're filtering to its carrier wave frequency. And when you flip the AM/FM switch, you're telling it to use either Amplitude or Frequency modulation.

The reason AM has lower sound quality is because any jump or noise in the amplitude is audible as static.

How exactly a radio demodulates the carrier from the message wave is beyond me and well beyond scope for our class!