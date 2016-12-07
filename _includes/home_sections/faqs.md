<section class="faqs"> <!--FAQS-->
  <div class="wave offwhite-bg">
  </div>
  <div class="container">
    <h2 class="alt-header">Frequently Asked Questions</h2>
    <ul class="collapsible">
      {% for faq in page.faqs %}
      <div class="row"><li {% if forloop.first %} class="open" {% endif %}>
        <div class="col-xs-9 col-xs-offset-2 col-sm-10 col-sm-offset-1">
          <h4>{{faq.question}}</h4>
        </div>
        <div class="col-xs-9 col-xs-offset-2 col-sm-10 col-sm-offset-1">
          <p>{{faq['answer text']}}</p>
        </div>
      </li></div>
      {%endfor%}
    </ul>
    <h4 class="alt-header">More questions?</h4>
    <a class="btn btn-green">Contact Us</a>
  </div>
</section>
