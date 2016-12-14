---
title: Pricing
date: 2016-12-14 11:16:00 +11:00
header: Join the Gnibl club
subheader: Select your preferences and find the Gnibl membership most suited to your
  team.
small box:
  name: Small box
  image: 
  cost:
    per week: 125
    per fortnight: 140
    per month: 150
  number of snacks: 50
medium box:
  name: Medium box
  image: 
  cost:
    per week: 250
    per fortnight: 280
    per month: 300
  number of snacks: 100
custom box:
  name: Custom box
  starting cost: 300
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
  image: 
- value: 20% off your first month
  image: 
cta: Sign up now
cta custom box: Request a quote
layout: default
---

<main class="pricing">
<div class="table hidden-xs"></div>
{% include pricing_sections/calculator.md %}
</main>