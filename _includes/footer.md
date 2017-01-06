<footer class="cardboard-bg">
  <div class="footer-wave wave cardboard-bg"></div>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <img class="logo" src="/assets/images/logo.svg" alt="Gnibl" style="display: inline-block;">
        <div class="social visible-xs" style="float:right">
          {%for link in site['Footer Social Links']%}
          <a href="{{link.url}}"><img src="{{link.image}}" alt="{{link.website}}"></a>
          {%endfor%}
        </div>
        <div class="footer-links">
          {%for link in site['Footer Menu Links']%}
          <a href="{{link.URL}}">{{link.Title}}</a>
          {%endfor%}
          <a href="" class="visible-xs">Terms &amp; Conditions</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="accepted-payments col-sm-4">
        <h4>Accepted Payments</h4>
        {%for payment in site['Accepted Payments']%}
        <img src="{{payment.image}}" alt="{{payment.name}}"></a>
        {%endfor%}
      </div>
      <div class="col-sm-8 hidden-xs">
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <span style="line-height: 50px">Copyright &copy;<script>document.write(new Date().getFullYear())</script></span>
        <a style="margin-left: 20px; line-height: 50px" class="hidden-xs" href="">Terms &amp; Conditions</a>
        <div class="social hidden-xs" style="float:right">
          {%for link in site['Footer Social Links']%}
          <a href="{{link.url}}"><img src="{{link.image}}" alt="{{link.website}}"></a>
          {%endfor%}
        </div>
      </div>
    </div>
  </div>
</footer>
{% if page.title == "Home" %}
<div class="fixed-cta"><a class="btn btn-red" href="/trial"><span>Try Gnibl for free</span></a></div>
{% endif %}

<!--LEAN BOOTSTRAP-->
<script src="/assets/bootstrap/js/bootstrap.min.js"></script>
<!--SLICK CAROUSEL-->
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
<!--VALIDATION-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.15.0/jquery.validate.min.js"></script>
<!--INSTAFEED-->
<script src="/assets/script/instafeed.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
