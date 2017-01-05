<section class="boss faqs" style="padding: 100px 0">
  <div class="wave">
  </div>
  <div class="container box-bg">
    <h2 class="alt-header">How to convince your boss</h2>
    <ul class="collapsible">
      {% for block in page['boss section'] %}
      <div class="row"><li {% if forloop.first %} class="open" {% endif %}>
        <div class="col-xs-9 col-xs-offset-2 col-sm-10 col-sm-offset-1">
          <h4>{{block.header | markdownify | strip_html}}</h4>
        </div>
        <div class="col-xs-9 col-xs-offset-2 col-sm-10 col-sm-offset-1">
          <div class="answer">{{block.body | markdownify }}</div>
        </div>
      </li></div>
      {%endfor%}
    </ul>
    <h4 class="alt-header">Want to know more?</h4>
    <a class="btn btn-green"><span>Get in touch</span></a>
  </div>
</section>
