<div class="col-xs-12 col-md-5 calculator">
  <!--SIZE SELECTION-->
  <div class="col-xs-12 col-sm-6 col-md-12">
    <h4>{{page['size selection'].lead | markdownify | strip_html}}</h4>
    <div class="tabs size-selection">
      {% for breakpoint in page['size selection'].breakpoints %}
      <div class="btn-tab {% if forloop.first %} selected-tab {% endif %}" data-box-size="{{breakpoint.box}}">
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
      <div class="btn-tab {% if forloop.last %} selected-tab {% endif %}" style="width: 50%">
        {{option}}
      </div>
      {%endfor%}
    </div>
  </div>
  <!-- <div class="col-xs-12 col-sm-6 col-md-12">
    <h4>{{page['dietary requirements'].title | markdownify | strip_html}}</h4>
    <form id="quote-form" style="margin-top: 20px">
      <div class="col-xs-6 col-sm-6 col-md-6 check">
        <input class="checkbox" type="checkbox" name="gluten_free" value="Gluten Free" style="margin-top: 10px;">
        <p>Gluten Free</p>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6 check">
        <input class="checkbox" type="checkbox" name="vegan" value="Vegan" style="margin-top: 10px;">
        <p>Vegan</p>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6 check">
        <input class="checkbox" type="checkbox" name="nut_free" value="Nut Free" style="margin-top: 10px;">
        <p>Nut Free</p>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6 check">
        <input class="checkbox" type="checkbox" name="soy_free" value="Soy Free" style="margin-top: 10px;">
        <p>Soy Free</p>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6 check">
        <input class="checkbox" type="checkbox" name="milk_free" value="Milk Free" style="margin-top: 10px;">
        <p>Milk Free</p>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6 check">
        <input class="text" type="text" name="other" placeholder="Other">
      </div>
    </form>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-12">
    <h4>{{page['are the snacks for'].title | markdownify | strip_html}}</h4>
    <form id="quote-form" style="margin-top: 20px">
      <div class="col-xs-12 col-sm-12 col-md-12 check">
        <input class="checkbox" type="checkbox" name="priamry_school_kids" value="Priamry school kids" style="margin-top: 10px;">
        <p>Primary school kids</p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 check">
        <input class="checkbox" type="checkbox" name="high_school_kids" value="High school kids" style="margin-top: 10px;">
        <p>High school kids</p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 check">
        <input class="checkbox" type="checkbox" name="nut_free" value="Adults" style="margin-top: 10px;">
        <p>Adults</p>
      </div>
    </form>
  </div> -->
  <div class="hidden-sm hidden-xs">
  <hr>
  <div class="row">
    <div class="col-xs-12">
      <h2 class="price" style="text-transform: none; text-align: center;">
        <span class="cost"></span> / <span class="frequency"></span>
      </h2>
    </div>
    {% for prop in page['value props'] %}
    <div class="col-xs-12 col-sm-12"  style="margin-bottom: 20px">
      <div class="single-line">
      <img src="{{prop.image}}" style="width: 60px; float: left;">
      <p style="font-size: 14px;font-weight: bold; width: calc(100% - 70px); margin-left: 10px; float: left">{{prop.value | markdownify | strip_html}}</p>
    </div>
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
.single-line{
  margin: 0 auto;
  width: fit-content;
}
@media (min-width: 992px) {
  .price {
    margin-top: 5px;
  }
  /*main.pricing .boxes .box-carousel{
  top: 30%;
  }
  main.pricing .boxes {
    height: 175vh;
  }
  main.pricing .table{
    height: 130vh;
  }*/
}
/*.check p{
  line-height: 0px;
  margin-left: 30px;
}
.checkbox{
  height: 20px;
  width: 20px;
  float: left;
}
.text{
  height: 40px;
}*/
</style>

<script>

// weekly = one off
// fortnightly = monthly

// set number of snacks to default
var snack_num = {{page['small box']['number of snacks']}};

// set cost to default
var cost = {{page['small box'].cost['monthly']}};

// set CTAs for reference in JS
var cta = "{{page.cta}}";
// var custom_cta = "{{page['cta custom box']}}";

var smallboxname = "{{page['small box'].name}}";
var mediumboxname = "{{page['medium box'].name}}";
var familyboxname = "{{page['family box'].name}}";
// var customboxname = "{{page['custom box'].name}}";

var oneoff = false;
function calculatePrice() {
  if (box_size == "medium box") {
    snack_num = {{page['medium box']['number of snacks']}};
    if (delivery_frequency == "month") {
      cost = {{page['medium box'].cost['monthly']}};
    } else {
      cost = {{page['medium box'].cost['single box']}};
    }
    custom_box = false;
  } else if (box_size == "family box") {
    snack_num = {{page['family box']['number of snacks']}};
    if (delivery_frequency == "month") {
      cost = {{page['family box'].cost['monthly']}};
    } else {
      cost = {{page['family box'].cost['single box']}};
    }
    custom_box = false;
  } else if (box_size == "small box") {
    snack_num = {{page['small box']['number of snacks']}};
    if (delivery_frequency == "month") {
      cost = {{page['small box'].cost['monthly']}};
    } else {
      cost = {{page['small box'].cost['single box']}};
    }
    custom_box = false;
  // } else if (box_size == "custom box") {
  //   if (delivery_frequency == "week") {
  //     cost = {{page['custom box'].cost['per week']}};
  //   } else if (delivery_frequency == "month") {
  //     cost = {{page['custom box'].cost['per month']}};
  //   } else {
  //     cost = {{page['custom box'].cost['per fortnight']}};
  //   }
  //   custom_box = true;
  }
}
</script>

