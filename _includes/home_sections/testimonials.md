<h2 class="handdrawn red-header left-header">From Our Customers</h2>
<section> <!--TESTIMONIALS-->
  <div class="container">
    {% for testimonial in page.testimonials %}
    <div class="col-xs-12 col-sm-4 col-sm-offset-0">
      <div class="testimonial col-xs-8 col-sm-12 {% unless forloop.counter|divisibleby:2 %}pull-right{%endunless%}">
        <p>{{testimonial['review text']}}</p>
      </div>
      <div class="testimonial-photo col-xs-4 col-sm-12" style="background-image:url({{testimonial.image}})">
      </div>
    </div>
    {% endfor %}
  </div>
</section>
