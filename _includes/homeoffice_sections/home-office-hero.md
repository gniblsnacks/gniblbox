<section class="home-hero"> <!--HOME HERO-->
  <div class="container">
  <div class="col-xs-12 col-sm-5 hero-content">
  <h1 class="main-header" style="text-align: center;">{{page.landing.headline}}</h1>
    <p style="text-align: center;">{{page.landing["sub text"]}}</p>
    {% if page["free trial"] %}
    <form id="landing-form">
      <input type="email" name="email" placeholder="Your work email">
      <a class="btn btn-red" onclick="$('#landing-form').submit()" style="max-width: none !important"><span>{{page.landing.cta}}</span></a>
        <input type="submit" style="position: absolute; left: -2000px">
        <div class="validation"></div>
    </form>
    <div class="visible-xs"><p style="margin-top: 20px; font-style: italic">or <a href="/plans">{{page.landing['mobile pricing link']}}</a></p></div>
    {% else %}
    <a class="btn btn-red" href="/plans"><span>{{page.landing.ctared}}</span></a><br>
    <a class="btn btn-green" href="/plans"><span>{{page.landing.ctagreen}}</span></a><br><br>
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
.section{
    position: inherit !important;
}
.or{
  font-size: 18px;
  font-family: brandon-grotesque, sans-serif;
  font-style: normal;
  font-weight: 100;
}
</style>