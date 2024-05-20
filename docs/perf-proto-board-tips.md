---
date: 2022-11-21
---

# Perf/Proto-board Tips

![A perfboard I made](/static/images/perf-proto-board-tips/IMG_1329-r.jpg)

## 1. Decide on your goals up front.

An ugly-but-functional board is a lot different than a piece of art, etc. Does it matter where the controls are? Does it need to “make sense” when you look at it? Think form vs function and interface stuff.

## 2. Draw a schematic, and work off of that.

IMHO, breadboards are ephemeral and make for lousy sources of truth. In addition to being a better historical record, a drawn schematic will also test your conceptual understanding of the circuit and free you from thinking about it only in terms of its breadboard construct (which will alleviate some of your bus/row conundrums and help when/if you wanna get PCBs made).

Veroboards/stripboards/perma-protoboards/etc are fine to start but will force your hand on layout and aesthetics. This might be a Hot Take, sorry!

## 3. Divide and conquer.

A big, complex circuit is composed of smaller, simpler circuits: power, oscillator, amp, interface, etc. Try to break it down by function and build each by itself.

Where it makes sense, you can also give each functional circuit its own "module" board, letting you easily rearrange/expand the big circuit later. (Look into plexiglass scorers to cut protoboard, "nibbling tools" for thicker stuff)

## 4. Make room, make room!

Unless you're specifically trying to work into a small enclosure, give yourself ~20% more space than you think you need. The modular boards idea is related to this.

## 5. Fail early, often.

That collection of small circuits means you can test+debug each one individually with clear, isolated expectations and do each as you build it before moving to the next.

The last thing you wanna do is solder for days only to find the damn thing doesn't turn on.

## 6. Be kind to yourself.

Take breaks, drink water, make sure you've got fresh air (like, literally), you know the
deal.

My advice for getting good at anything is to make peace with being bad at it for a long time.

(Adapted from https://community.dogboticlabs.com/posts/29150058/comments/73490542)
