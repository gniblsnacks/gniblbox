<section id="faqs" class="faqs" style="padding-top: 80px; padding-bottom: 80px"> <!--FAQS-->
  <div class="wave offwhite-bg">
  </div>
  <div class="container box-bg">
    <h2 class="alt-header">Frequently Asked Questions</h2>
    <ul class="collapsible">
      {% for faq in page.faqs %}
      <div class="row"><li {% if forloop.first %} class="open" {% endif %}>
        <div class="col-xs-9 col-xs-offset-2 col-sm-10 col-sm-offset-1">
          <h4>{{faq.question | markdownify | strip_html }}</h4>
        </div>
        <div class="col-xs-9 col-xs-offset-2 col-sm-10 col-sm-offset-1">
          <div class="answer">{{faq['answer text'] | markdownify }}</div>
        </div>
      </li></div>
      {%endfor%}
    </ul>
    <h4 class="alt-header">More questions?</h4>
    <a class="btn btn-green"><span>Contact Us</span></a>
  </div>
</section>
