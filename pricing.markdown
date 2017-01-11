---
title: Pricing
date: 2016-12-14 11:16:00 +11:00
header: Join the Gnibl club
subheader: Select your preferences and find the Gnibl membership most suited to your
  team.
small box:
  name: Small box
  image: "/uploads/small-box.png"
  cost:
    per week: 132
    per fortnight: 134.5
    per month: 139
  number of snacks: 50
medium box:
  name: Medium box
  image: "/uploads/medium-box.png"
  cost:
    per week: 259
    per fortnight: 264
    per month: 269
  number of snacks: 100
custom box:
  name: Custom box
  starting cost: 400
size selection:
  lead: What size is your company?
  breakpoints:
  - company size: "<25"
    box: small box
  - company size: 25 – 50
    box: medium box
  - company size: ">50"
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
- value: 50% off your first order
  image: "/uploads/sale.svg"
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
