---
title: Boxes
date: 2016-12-14 11:16:00 +11:00
header: Join the Gnibl club
subheader: Select your preferences and find the Gnibl membership most suited to your
  team.
small box:
  name: Starter
  image: "/uploads/starter-box.png"
  cost:
    per week: 132
    per fortnight: 134.5
    per month: 139
  number of snacks: 24
medium box:
  name: Classic
  image: "/uploads/small-box.png"
  cost:
    per week: 259
    per fortnight: 264
    per month: 269
  number of snacks: 50
custom box:
  name: Custom
  starting cost: 400
  image: "/uploads/medium-box.png"
size selection:
  lead: How many snacks?
  breakpoints:
  - snacks: 24
    box: small box
  - snacks: 50
    box: medium box
  - snacks: 50+
    box: custom box
frequency selection:
  lead: 'Select your delivery frequency:'
  options:
  - weekly
  - fortnightly
  - monthly
value props:
- value: Free shipping to metro areas
  image: "/uploads/truck.svg"
- value: Optional contribution box
  image: "/uploads/collection.svg"
cta: Sign up now
cta custom box: Request a quote
layout: default
---

<main class="pricing fixed-header dotted-bg">
<div class="desktop">
<div class="table"></div>
{% include pricing_sections/calculator.md %}
{% include pricing_sections/boxes.md %}
</div>
{% include pricing_sections/mobile-section.md %}
  {% include pricing_sections/quote-modal.md %}
</main>
