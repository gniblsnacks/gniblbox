<h2 class="handdrawn red-header left-header" style="top: 40px">How does it work?</h2>
<section class="under wood-bg" style="padding: 80px 0"> <!--HOW IT WORKS-->
  <div class="wave">
  </div>
  <div class="container">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 box-bg">
      <p>{{page.about.intro}}</p>
      {% for step in page.about.steps %}
      <h4>{{step.header}}</h4>
      <p>{{step['sub text']}}</p>
      {% endfor %}
    </div>
  </div>
  <div class="wave wave-bottom offwhite-bg">
  </div>
</section>
