<h2 id="products" class="handdrawn green-header right-header" style="position: relative; top: -20px">Our Products</h2>
<section id="products-container" class="dotted-bg"> <!--PRODUCTS-->
  <div class="wave offwhite-bg">
  </div>
  <div class="product-wrapper">
  <div class="product-carousel" style="width: 100%; position: relative; top: -40px">
    {% for product in page.products %}
    <div class="product-slide">
      <div class="product">
        <div class="info">
          {% if product['is vegan?'] %}
          <div class="feature"><img src="/assets/images/vegan.svg"><p>Vegan</p></div>
          {% endif %}
          {% if product['is high in protein?'] %}
          <div class="feature"><img src="/assets/images/protein.svg"><p>High Protein</p></div>
          {% endif %}
          {% if product['is dairy free?'] %}
          <div class="feature"><img src="/assets/images/dairy.svg"><p>Dairy Free</p></div>
          {% endif %}
          {% if product['is gluten free?'] %}
          <div class="feature"><img src="/assets/images/gluten.svg"><p>Gluten Free</p></div>
          {% endif %}
          {% if product['has no added sugar?'] %}
          <div class="feature"><img src="/assets/images/sugar.svg"><p>No Added Sugar</p></div>
          {% endif %}
        </div>
        <img class="product-image" src="{{product.image}}" alt="{{product.name}}">
      </div>
    </div>
    {% endfor %}
    </div>
  </div>
</section>
