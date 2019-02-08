<section class="home-hero"> <!--HOME HERO-->
  <div class="container">
  <div class="col-xs-12 col-sm-5 hero-content" style="float: right;">
  <h1 class="handdrawn main-header" style="position:relative;">{{page.landing.headline}}</h1>
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
    <a class="btn btn-red" href="/homebox"><span>{{page.landing.ctared}}</span></a><br>
    <a class="btn btn-green" href="/"><span>{{page.landing.ctagreen}}</span></a>
    {% endif %}
    <p style="text-align: center;">{{page.landing["small text"]}}</p>
  </div>
  </div>
</section>
<style>
  .home-hero {
    background: url(/uploads/new.jpg), url(../images/dotted.jpg);
    background-size: cover, auto;
    min-height: 70vh;
    background-repeat: no-repeat, repeat;
    background-position: left center;
    overflow-y: hidden;
    padding: 0;
    height: auto;
}
section{
    position: inherit !important;
}
.or{
  font-size: 16px;
  font-family: brandon-grotesque, sans-serif;
  font-style: normal;
  font-weight: 100;
  vertical-align: middle;
}
header .logo{
  left: auto;
}
@media (max-width: 1023px), (orientation: portrait){
.home-hero {
    max-height: none;
    height: auto;
    background-image: url(/uploads/mobile-header.jpg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top;
    text-align: center;
    padding-top: 100px;
    }
  }
  @media (min-width: 1024px){
    .handdrawn{
      background-image: none;
    }
    .main-header{
      font-size: 65px !important;
    }
  }
  @media (min-width: 320px) and (max-width: 480px){
    .main-header{
      font-size: 50px !important;
    }
  }
  @media (min-width: 320px) and (max-width: 10230px){
    .btn-green{
      margin-bottom: 40px;
    }
  }
</style>