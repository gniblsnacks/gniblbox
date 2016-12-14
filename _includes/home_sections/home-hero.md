<section class="home-hero"> <!--HOME HERO-->
  <h1 class="handdrawn main-header right-header">{{page.landing.headline}}</h1>
  <div class="col-xs-12 col-sm-5 col-sm-offset-7 col-lg-4 col-lg-offset-8 hero-content">
    <p>{{page.landing["sub text"]}}</p>
    <form id="landing-form">
      <input type="email" placeholder="Your email address">
      <a class="btn btn-red" onclick="submitForm()" style="max-width: none !important"><span>{{page.landing.cta}}</span></a>
    </form>
  </div>
</section>
