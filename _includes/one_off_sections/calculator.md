<div class="col-xs-12 col-md-5 calculator">
  <p style="margin-bottom: 0">Want to impress at your next meeting? Or need a tasty team reward? Or just don't want the commitment of a subscription? Gnibl's one-off boxes to the rescue.</p>
  <!--SIZE SELECTION-->
  <div class="col-xs-12 col-sm-6 col-md-12">
    <h4>{{page['size selection'].lead | markdownify | strip_html}}</h4>
    <div class="tabs size-selection">
    {% for breakpoint in page['size selection'].breakpoints %}
    <div class="btn-tab {% if forloop.first %} selected-tab {% endif %}" data-box-size="{{breakpoint.box}}" style="width: 25%">
      {{breakpoint['snacks']}}
    </div>
    {%endfor%}
    </div>
  </div>
  <div class="hidden-sm hidden-xs">
  <hr>
  <div class="row">
    <div class="col-xs-12">
      <h2 class="price" style="text-transform: none; text-align: center;">
        <span class="cost"></span> <small style='font-size: 16px'>per box</small>
      </h2>
    </div>
    {% for prop in page['value props'] %}
    <div class="col-xs-12 col-sm-6"  style="margin-bottom: 20px">
      <img src="{{prop.image}}" style="width: 60px; float: left;">
      <p style="font-size: 14px;font-weight: bold; width: calc(100% - 70px); margin-left: 10px; float: left">{{prop.value | markdownify | strip_html}}</p>
    </div>
    {% endfor %}
  </div>
  <a class="product-link btn btn-red" style="max-width: none"><span class="pricing-cta">{{page.cta | markdownify | strip_html}}</span></a>
  <p class="additional-info" style="font-size: 14px; font-weight: bold; text-align: center">
    <span class="snack-num"></span> snacks
    (<span class="per-snack"></span> each)</p>
  </div>
</div>
<style>
@media (min-width: 992px) {
  .price {
    margin-top: 5px;
  }
}
</style>

<script>
// set number of snacks to default
var snack_num = {{page['starter box']['number of snacks']}};

// set cost to default
var cost = {{page['starter box'].cost}};

// set CTAs for reference in JS
var cta = "{{page.cta}}";

var starterboxname = "{{page['starter box'].name}}";
var smallboxname = "{{page['small box'].name}}";
var mediumboxname = "{{page['medium box'].name}}";
var customboxname = "{{page['jumbo box'].name}}";

var oneoff = true;
function calculatePrice() {
  if (box_size == "small box") {
    snack_num = {{page['small box']['number of snacks']}};
    cost = {{page['small box']['cost']}};
    custom_box = false;
  } else if (box_size == "medium box") {
    snack_num = {{page['medium box']['number of snacks']}};
    cost = {{page['medium box']['cost']}};
    custom_box = false;
  } else if (box_size == "starter box") {
    snack_num = {{page['starter box']['number of snacks']}};
    cost = {{page['starter box']['cost']}};
    custom_box = false;
  } else if (box_size == "jumbo box") {
    snack_num = {{page['jumbo box']['number of snacks']}};
    cost = {{page['jumbo box']['cost']}};
    custom_box = false;
  }
}
</script>
