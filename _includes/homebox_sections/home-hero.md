<section class="home-hero"> <!--HOME HERO-->
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-5 col-sm">
    <div class="light-box">
    <p style="color:black;">Not sold on this art... just needs to show kids  and mum and the box friendly, fun bright.<br>Overall, art should maybe have a few more kid friendly elements below:</p>
  </div>
  </div>
  <div class="col-xs-12 col-sm-5 col-sm-offset-7 hero-content">
  <h1 class="handdrawn main-header">{{page.landing.headline}}</h1>
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
</div>
<style type="text/css">
  .light-box{
    background: rgba(255, 255, 255, 0.75);
    padding: 5px 25px;
  }
</style>
</section>
