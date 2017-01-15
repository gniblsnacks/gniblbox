<section class="home-hero"> <!--HOME HERO-->
  <div class="container">
  <div class="col-xs-12 col-sm-5 col-sm-offset-7 hero-content">
  <h1 class="handdrawn main-header">{{page.landing.headline}}</h1>
    <p>{{page.landing["sub text"]}}</p>
    <form id="landing-form">
      <input type="email" name="email" placeholder="Your email address">
      <a class="btn btn-red" onclick="$('#landing-form').submit()" style="max-width: none !important"><span>{{page.landing.cta}}</span></a>
        <input type="submit" style="position: absolute; left: -2000px">
        <div class="validation"></div>
    </form>
  </div>
  </div>
</section>
