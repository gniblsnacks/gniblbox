<h2 class="handdrawn red-header left-header">From Our Customers</h2>
<section class="offwhite-bg"> <!--TESTIMONIALS-->
  <div class="container">
    <div class="row">
    {% for testimonial in page.testimonials %}
      {% assign mod = forloop.index | modulo: 2 %}
      <div class="testimonial-container">
      <div class="testimonial col-xs-8 col-sm-4 {% if mod == 1 %}pull-right{%endif%}">
        <p>{{testimonial['review text']}}</p>
        <img class="chat-tail hidden-xs" src="assets/images/chat-tail.svg">
        <img class="chat-tail visible-xs" src="assets/images/chat-tail-alt.svg">
        <div class="testimonial-photo hidden-xs" style="background-image:url({{testimonial.image}})">
        </div>
      </div>
      <div class="col-xs-4 visible-xs photo-container {% if mod == 1 %}left{%endif%}">
        <div class="testimonial-photo" style="background-image:url({{testimonial.image}})"></div>
      </div>
      </div>
    {% endfor %}
    </div>
  </div>
</section>
