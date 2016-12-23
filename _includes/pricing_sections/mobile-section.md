<div class="table-bg mobile-container">
<div class="visible-sm visible-xs container box-bg mobile-pricing">
<h2 class="price" style="text-transform: none; text-align: center;">
  <span class="cost"></span> / <span class="frequency"></span>
</h2>
<div class="row">
{% for prop in page['value props'] %}
<div class="col-xs-12 col-sm-6"  style="margin-bottom: 20px">
  <img src="{{prop.image}}" style="width: 60px; float: left;">
  <p style="font-size: 14px;font-weight: bold; width: calc(100% - 70px); margin-left: 10px; float: left">{{prop.value}}</p>
</div>
{% endfor %}
</div>
<a class="btn btn-red product-link" style="max-width: none"><span class="pricing-cta">{{page.cta}}</span></a>
<p class="additional-info" style="font-size: 14px; font-weight: bold; text-align: center">
  <span class="snack-num"></span> snacks
  (<span class="per-snack"></span> each)
  delivered <span class="frequency-ly"></span></p>
</div>
</div>
