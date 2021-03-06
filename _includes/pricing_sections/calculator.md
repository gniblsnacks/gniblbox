<div class="col-xs-12 col-md-5 calculator">
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
  <!--FREQUENCY SELECTION-->
  <div class="col-xs-12 col-sm-6 col-md-12">
    <h4>{{page['frequency selection'].lead | markdownify | strip_html}}</h4>
    <div class="tabs frequency-selection">
      {% for option in page['frequency selection'].options %}
      <div class="btn-tab {% if forloop.last %} selected-tab {% endif %}">
        {{option}}
      </div>
      {%endfor%}
    </div>
  </div>
  <div class="hidden-sm hidden-xs">
  <hr>
  <div class="row">
    <div class="col-xs-12">
      <h2 class="price" style="text-transform: none; text-align: center;">
        <span class="cost"></span> / <span class="frequency"></span>
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
  <p class="additional-info">
    <span class="snack-num"></span> snacks
    (<span class="per-snack"></span> each)
    delivered <span class="frequency-ly"></span></p>
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
var cost = {{page['starter box'].cost['per month']}};

// set CTAs for reference in JS
var cta = "{{page.cta}}";
var custom_cta = "{{page['cta custom box']}}";

var starterboxname = "{{page['starter box'].name}}";
var smallboxname = "{{page['small box'].name}}";
var mediumboxname = "{{page['medium box'].name}}";
var customboxname = "{{page['custom box'].name}}";

var oneoff = false;
function calculatePrice() {
  if (box_size == "small box") {
    snack_num = {{page['small box']['number of snacks']}};
    if (delivery_frequency == "week") {
      cost = {{page['small box'].cost['per week']}};
    } else if (delivery_frequency == "month") {
      cost = {{page['small box'].cost['per month']}};
    } else {
      cost = {{page['small box'].cost['per fortnight']}};
    }
    custom_box = false;
  } else if (box_size == "medium box") {
    snack_num = {{page['medium box']['number of snacks']}};
    if (delivery_frequency == "week") {
      cost = {{page['medium box'].cost['per week']}};
    } else if (delivery_frequency == "month") {
      cost = {{page['medium box'].cost['per month']}};
    } else {
      cost = {{page['medium box'].cost['per fortnight']}};
    }
    custom_box = false;
  } else if (box_size == "starter box") {
    snack_num = {{page['starter box']['number of snacks']}};
    if (delivery_frequency == "week") {
      cost = {{page['starter box'].cost['per week']}};
    } else if (delivery_frequency == "month") {
      cost = {{page['starter box'].cost['per month']}};
    } else {
      cost = {{page['starter box'].cost['per fortnight']}};
    }
    custom_box = false;
  } else if (box_size == "custom box") {
    if (delivery_frequency == "week") {
      cost = {{page['custom box'].cost['per week']}};
    } else if (delivery_frequency == "month") {
      cost = {{page['custom box'].cost['per month']}};
    } else {
      cost = {{page['custom box'].cost['per fortnight']}};
    }
    custom_box = true;
  }
}
</script>
