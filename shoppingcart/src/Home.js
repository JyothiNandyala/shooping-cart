import React from "react";

const Home = () => {
  return (
    <>
      <div className="container">
        <div>
          <img
            className="img-fluid"
            src="https://miro.medium.com/max/3840/1*9BBIZ6fsU3PpNa4tWCQxQg.jpeg"
            alt="home-image"
          />
        </div>

        <h2 className="text-center mt-3 text-success">What Is Shopping ?</h2>
        <div class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <img
              className="rounded"
              src="https://s3.envato.com/files/233781153/syda_0229561.jpg"
              alt="shoppingImage"
              width="400"
              height="206"
            />
          </div>
          <div class="flex-grow-1 ms-5 h5">
            A shopping cart is a piece of software that keeps the record of the
            items a buyer has 'picked up' from the online store. A shopping cart
            on an online retailer's site is a piece of software that facilitates
            the purchase of a product or service. It accepts the customer's
            payment and organizes the distribution of that information to the
            merchant, payment processor and other parties.
          </div>
        </div>
        <div>
          <h2 className="text-center mt-3 text-success">
            Importance Of Shopping !
          </h2>
        </div>
        <div class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <img
              className="rounded"
              src="https://www.myamigo.com/wp-content/uploads/2019/08/amigo_mobility_valueshopper_grocery_and_retail_commercial_electric_shopping_cart_scooter_handicap_produce.jpg"
              alt="shoppingImage"
              width="400"
              height="236"
            />
          </div>
          <div class="flex-grow-1 ms-5 h5">
            Shopping carts act as the bridge between shopping online and
            purchasing. The importance of a shopping cart in an online store is
            not even a debatable topic. There are never-ending reasons for it.
            The ease of use in the online shopping facilities act as a
            double-headed sword; with easy processes, the customers can quickly
            purchase products as well as abandon them. Therefore it becomes
            essential to add a shopping cart to your online store to bridge the
            gap between shopping and purchasing.It will saves the customers time
            as well as energy.
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
