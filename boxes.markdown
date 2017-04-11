---
title: Boxes
date: 2016-12-14 11:16:00 +11:00
header: Join the Gnibl club
subheader: Select your preferences and find the Gnibl membership most suited to your
  team.
intro copy: Want to impress at your next meeting? Need a tasty team reward? Or just
  don't want the commitment of a subscription? Try a single Gnibl Box - any size you
  like!
starter box:
  name: Starter
  image: "/uploads/starter-box.png"
  cost: 75
  number of snacks: 24
small box:
  name: Classic
  image: "/uploads/small-box.png"
  cost: 149
  number of snacks: 50
medium box:
  name: Midi
  image: "/uploads/medium-box.png"
  cost: 289
  number of snacks: 100
jumbo box:
  name: Jumbo
  image: "/uploads/jumbo-box.png"
  cost: 569
  number of snacks: 200
size selection:
  lead: How many snacks?
  breakpoints:
  - snacks: 24
    box: starter box
  - snacks: 50
    box: small box
  - snacks: 100
    box: medium box
  - snacks: 200
    box: jumbo box
value props:
- value: Free shipping to metro areas
  image: "/uploads/truck.svg"
cta: Order now
layout: default
---

<main class="pricing fixed-header dotted-bg">
<div class="desktop">
<div class="table"></div>
{% include one_off_sections/calculator.md %}
{% include one_off_sections/boxes.md %}
</div>
{% include one_off_sections/mobile-section.md %}
  {% include one_off_sections/quote-modal.md %}
</main>
