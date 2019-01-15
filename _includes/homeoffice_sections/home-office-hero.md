<section class="home-hero"> <!--HOME HERO-->
  <div class="container">
  <div class="col-xs-12 col-sm-5 hero-content">
  <h1 class="main-header">{{page.landing.headline}}</h1>
    <p>{{page.landing["sub text"]}}</p>
    {% if page["free trial"] %}
    <form id="landing-form">
      <input type="email" name="email" placeholder="Your work email">
      <a class="btn btn-red" onclick="$('#landing-form').submit()" style="max-width: none !important"><span>{{page.landing.cta}}</span></a>
        <input type="submit" style="position: absolute; left: -2000px">
        <div class="validation"></div>
    </form>
    <div class="visible-xs"><p style="margin-top: 20px; font-style: italic">or <a href="/plans">{{page.landing['mobile pricing link']}}</a></p></div>
    {% else %}
    <a class="btn btn-red" href="/plans" style="max-width: none !important"><span>{{page.landing.cta}}</span></a>
    <p style="margin-top: 20px; font-style: italic; text-align: center">or <a href="/boxes">purchase a single box</a></p>
    {% endif %}
  </div>
  </div>
</section>
<style>
  .home-hero {
    background: url(/uploads/APB240091.png), url(../images/dotted.jpg);
    background-size: cover, auto;
    min-height: 70vh;
    background-repeat: no-repeat, repeat;
    background-position: left center;
    overflow-y: hidden;
    padding: 0;
    height: auto;
}
.red {
    color: red;
}
</style>