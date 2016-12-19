<section style="padding-bottom: 0" class="offwhite-bg">
<h2 class="handdrawn red-header left-header" style="top: -20px; position: absolute">{{page.subsection.header}}</h2>
<img src="/assets/images/work.jpg" style="width: 100%">
<div style="background: white">
<div class="container">
{% for prop in page.subsection['value propositions'] %}
  <div class="col-xs-12 col-sm-6 col-md-3 trial-prop" style="margin-bottom: 30px">
    <img style="width: 60px; float: left" src="{{prop.image}}">
    <p style="width: calc(100% - 80px); margin: 0 0 0 20px; float: left">{{prop.value}}</p>
  </div>
{% endfor %}
</div>
</div>
</section>
