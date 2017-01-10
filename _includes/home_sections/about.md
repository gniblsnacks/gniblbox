<h2 id="about" class="handdrawn red-header left-header" style="top: 40px">How does it work?</h2>
<section class="wood-bg about" style="padding: 80px 0; z-index: 20;"> <!--HOW IT WORKS-->
  <div class="wave">
  </div>
  <div class="container">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 box-bg">
      <p class="intro">{{page.about.intro | markdownify | strip_html}}</p>
      {% for step in page.about.steps %}
      <h4>{{step.header | markdownify | strip_html}}</h4>
      {{step['sub text'] | markdownify }}
      {% endfor %}
      <a href="/pricing" class="btn btn-green" href="/pricing"><span>{{page.about.cta | markdownify | strip_html}}</span></a>
    </div>
  </div>
  <div class="wave wave-bottom offwhite-bg">
  </div>
  <img class="popcorn" src="assets/images/popcorn.png">
  <img class="nuts" src="assets/images/nuts.png">
    <img class="edamame" src="assets/images/edamame.png">
  <img class="overhead-box" src="assets/images/overhead-box.png">
</section>
