---
title: Home
date: 2016-12-07 14:47:00 +11:00
landing:
  headline:
  sub text:
  cta:
clients:
- name:
  image:
about:
  intro:
  steps:
  - header:
    sub text:
  cta:
promise:
  employers:
  - header:
    sub text:
    image:
  employees:
  - header:
    sub text:
    image:
products:
- name:
  image:
  is vegan?:
  is high in protein?:
  is dairy free?:
  is gluten free?:
  is soy free?:
testimonials:
- name:
  image:
  review text:
faqs:
- question:
  answer text:
layout: default
---

<main>
  {% include home_sections/home-hero.md %}
  {% include home_sections/clients.md %}
  {% include home_sections/about.md %}
  {% include home_sections/promise.md %}

  <h2 class="handdrawn green-header right-header">Our Products</h2>
  <section class="dotted-bg"> <!--PRODUCTS-->
    <div class="wave offwhite-bg">
    </div>
    <div style="width: 100%; height: 400px"></div>
    <!--TO DO CAROUSEL-->
  </section>
  <section> <!--INSTAGRAM FEED-->

    <div class="wave dotted-bg">
    </div>
    <div class="container">
      <h2 class="alt-header">Gnibl on Instagram</h2>
      <div style="width: 100%; height: 250px"></div>
      <!--TO DO INSTAFEED-->
    </div>
  </section>

  <h2 class="handdrawn red-header left-header">From Our Customers</h2>
  <section> <!--TESTIMONIALS-->
    <div class="container">
      <div class="col-xs-12 col-sm-4 col-sm-offset-0">
        <div class="testimonial col-xs-8 col-sm-12 pull-right">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad...</p>
        </div>
        <div class="testimonial-photo col-xs-4 col-sm-12" style="background-image:url()">
        </div>
      </div>
      <div class="col-xs-12 col-sm-4 col-sm-offset-0">
        <div class="testimonial col-xs-8 col-sm-12">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad...</p>
        </div>
        <div class="testimonial-photo col-xs-4 col-sm-12" style="background-image:url()">
        </div>
      </div>
      <div class="col-xs-12 col-sm-4 col-sm-offset-0">
        <div class="testimonial col-xs-8 col-sm-12 pull-right">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad...</p>
        </div>
        <div class="testimonial-photo col-xs-4 col-sm-12" style="background-image:url()">
        </div>
      </div>
    </div>
  </section>
  <section class="faqs"> <!--FAQS-->
    <div class="wave offwhite-bg">
    </div>
    <div class="container">
      <h2 class="alt-header">Frequently Asked Questions</h2>
      <ul class="collapsible">
        <div class="row"><li class="open">
          <div class="col-xs-9 col-xs-offset-2 col-sm-10 col-sm-offset-1">
            <h4>Lorem ipsum dolor sit amet?</h4>
          </div>
          <div class="col-xs-9 col-xs-offset-2 col-sm-10 col-sm-offset-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad...</p>
          </div>
        </li></div>
        <div class="row"><li>
          <div class="col-xs-9 col-xs-offset-2 col-sm-10 col-sm-offset-1">
            <h4>Lorem ipsum dolor sit amet?</h4>
          </div>
          <div class="col-xs-9 col-xs-offset-2 col-sm-10 col-sm-offset-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad...</p>
          </div>
        </li></div>
        <div class="row"><li>
          <div class="col-xs-9 col-xs-offset-2 col-sm-10 col-sm-offset-1">
            <h4>Lorem ipsum dolor sit amet?</h4>
          </div>
          <div class="col-xs-9 col-xs-offset-2 col-sm-10 col-sm-offset-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad...</p>
          </div>
        </li></div>
        <div class="row"><li>
          <div class="col-xs-9 col-xs-offset-2 col-sm-10 col-sm-offset-1">
            <h4>Lorem ipsum dolor sit amet?</h4>
          </div>
          <div class="col-xs-9 col-xs-offset-2 col-sm-10 col-sm-offset-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad...</p>
          </div>
        </li></div>
        <div class="row"><li>
          <div class="col-xs-9 col-xs-offset-2 col-sm-10 col-sm-offset-1">
            <h4>Lorem ipsum dolor sit amet?</h4>
          </div>
          <div class="col-xs-9 col-xs-offset-2 col-sm-10 col-sm-offset-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad...</p>
          </div>
        </li></div>
      </ul>
      <h4 class="alt-header">More questions?</h4>
      <a class="btn btn-green">Contact Us</a>
    </div>
  </section>
</main>
