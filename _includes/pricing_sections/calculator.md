<div class="col-xs-12 col-sm-6 col-lg-4 calculator">
  <!--SIZE SELECTION-->
  <h4>{{page['size selection'].lead}}</h4>
  <div class="tabs size-selection">
  {% for breakpoint in page['size selection'].breakpoints %}
  <div class="btn-tab" data-box-size="{{breakpoint.box}}">{{breakpoint['company size']}}</div>
  {%endfor%}
  </div>
  <!--FREQUENCY SELECTION-->
  <h4>{{page['frequency selection'].lead}}</h4>
  <div class="tabs frequency-selection">
  {% for option in page['frequency selection'].options %}
  <div class="btn-tab">{{option}}</div>
  {%endfor%}
  </div>
  <div class="bump-below-xs">
  <hr class="hidden-xs">
  <h2 class="price" style="text-transform: none; text-align: center;">
    <span class="cost"></span> / <span class="frequency"></span>
  </h2>
  <div class="row">
  {% for prop in page['value props'] %}
  <div class="col-xs-6">
    <img src="{{prop.image}}">
    <p style="font-size: 14px;font-weight: bold;">{{prop.value}}</p>
  </div>
  {% endfor %}
  </div>
  <a class="btn btn-red" style="max-width: none"><span class="pricing-cta">{{page.cta}}</span></a>
  <p class="additional-info" style="font-size: 14px; font-weight: bold; text-align: center">
    <span class="snack-num"></span> snacks
    (<span class="per-snack"></span> each)
    delivered <span class="frequency-ly"></span></p>
  </div>
</div>

<script>
// set number of snacks to default
var snack_num = {{page['medium box']['number of snacks']}};

// set cost to default
var cost = {{page['medium box'].cost['per fortnight']}};

// set CTAs for reference in JS
var cta = "{{page.cta}}";
var custom_cta = "{{page['cta custom box']}}";


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
  } else if (box_size == "custom box") {
    cost = {{page['custom box']['starting cost']}};
    custom_box = true;
  }
}
</script>
