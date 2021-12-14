import React from "react";
import img1 from '../../img/Shop/Related/1.jpg';
import img2 from '../../img/Shop/Related/1.jpg';
import img3 from '../../img/Shop/Related/1.jpg';
import img4 from '../../img/Shop/Related/1.jpg';
import img5 from '../../img/Shop/Related/1.jpg';
import img6 from '../../img/Shop/Related/1.jpg';

function ShopRelatedProducts() {
  return (
    <section id="shop-related-product">
      <div className="container">
        <h2>Raleted Products</h2>
        <div className="owl-carousel">
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
            <img src={img5} />
            <img src={img5} />
            <img src={img5} />
        </div>
      </div>
    </section>
  );
}

export default ShopRelatedProducts;
