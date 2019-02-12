<h2 id="about" class="handdrawn red-header left-header" style="top: 40px">How does it work?</h2>
<section class="wood-bg about" style="padding: 80px 0; z-index: 20;"> <!--HOW IT WORKS-->
  <div class="wave">
  </div>
  <div class="container">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 box-bg">
      <p class="intro">{{page.about.intro | markdownify | strip_html}}</p>
      {% for step in page.about.steps %}
      <div class="step" style="display: block; clear: both; margin-bottom: 20px; overflow: auto">
        <img style="width: 60px; float: left;" src="/assets/images/numbers/{{forloop.index}}.svg">
        <h4 style="margin: 10px 0 0 10px; width: calc(100% - 70px); float: left">{{step.header | markdownify | strip_html}}</h4>
      </div>
      {{step['sub text'] | markdownify }}
      {% endfor %}
      <a href="/office-plans" class="btn btn-green"><span>{{page.about.cta | markdownify | strip_html}}</span></a>
    </div>
  </div>
  <div class="wave wave-bottom offwhite-bg">
  </div>
  <img class="popcorn" src="/uploads/popcorn.png">
  <img class="nuts" src="/uploads/nuts.png">
    <img class="edamame" src="/uploads/edamame.png">
  <img class="overhead-box" src="/uploads/overhead-box.png">
</section>