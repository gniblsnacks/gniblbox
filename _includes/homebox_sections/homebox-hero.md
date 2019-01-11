<section class="home-hero"> <!--HOME HERO-->
  <div class="container">
  <div class="col-xs-12 col-sm-5 col-sm-offset-7 hero-content">
  <h1 class="handdrawn main-header">{{page.landingnew.headline}}</h1>
    <p>{{page.landing1["sub text"]}}</p>
    {% if page["free trial"] %}
    <form id="landing-form">
      <input type="email" name="email" placeholder="Your work email">
      <a class="btn btn-red" onclick="$('#landing-form').submit()" style="max-width: none !important"><span>{{page.landing1.cta}}</span></a>
        <input type="submit" style="position: absolute; left: -2000px">
        <div class="validation"></div>
    </form>
    <div class="visible-xs"><p style="margin-top: 20px; font-style: italic">or <a href="/plans">{{page.landing1['mobile pricing link']}}</a></p></div>
    {% else %}
    <a class="btn btn-red" href="/plans" style="max-width: none !important"><span>{{page.landing1.cta}}</span></a>
    <p style="margin-top: 20px; font-style: italic; text-align: center">or <a href="/boxes">purchase a single box</a></p>
    {% endif %}
  </div>
  </div>
</section>