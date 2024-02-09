import { useQuery } from '@apollo/client';
import React from 'react';


import { PRODUCTS_QUERY } from '../../gql/Query';
import ProductListItem from './ProductListItem';







const BestSellers = () => {

  console.log('Best Sellers');

    const {data: productsData, loading: productsLoading, error: productsError} = useQuery(PRODUCTS_QUERY, {
        fetchPolicy: 'network-only',
        // pollInterval: 500,
      });

      console.log('productsData', productsData);
      console.log('productsLoading', productsLoading);
      console.log('productsError', productsError);


	return (
		<>

            <div className="c-products c-products--slider row c-row--margin-default" data-name="best-sellers" >
            <h2 className="c-products__heading center-align">Market Bestsellers</h2>

            <div className="c-products__list" >

                {productsData?.products?.slice(0, 3).map((product, index)=> (<ProductListItem key ={index} product ={product} />))}

              <div className="product-card" data-product-container-id="1435" data-bulk-discounts-enabled="false">
                <div className="product-card__image">
                {/* <Link to={`/products/${product?._id}`}> */}

                      <img height="188" alt="100mm Rockwool RWA45 Acoustic Sound Insulation Slab (2.88m2/Pack)" loading="lazy" src="" />
                   

                {/* </Link> */}
                </div>
                <div className="product-card__content">
                      <span className="badge c-products__badge--info">Most Popular</span>
                      <div className="c-products__stars">
                        <div className="rating-stars"  
                        title="Rating of this product is 5.0 out of 5.">
                        </div>
                      </div>
                      <span className="c-products__stars-count">(23)</span>
                      <div className="badge c-products__badge--stock">
                        <span>In Stock</span>
                      </div>
                      <a data-most-popular="true" href="products/100mm-rockwool-rwa45-acoustic-sound-insulation-slab-2-88m2-pack.html">
                        <h3 className="product-card__heading line-clamp" data-text="100mm Rockwool RWA45 Acoustic Sound Insulation Slab (2.88m2/Pack)">
                        100mm Rockwool RWA45 Acoustic Sound Insulation Slab (2.88m2/Pack)
                        </h3>
                      </a> 
                      
                </div>

                <div className="product-card__footer">
                        <div className="c-products__add-to-cart">
                          <div className="c-products__price l6 s12">
                            <span data-name="display-price">£<span data-adjust-price-with-quantity="false" data-name="product-card-item-price" data-product-price-all-units="22.26" data-product-price-all-units-inc-vat="26.71">22.26</span></span>
                            <span className="hidden" data-name="saving-tooltip"><span className="tooltip">with bulk discount</span></span>
                          </div>
                          <form className="new_basket_buy_it_now_product" id="new_basket_buy_it_now_product" action="https://materialsmarket.com/checkout/baskets/products" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="&#x2713;" />
                          <input value="1435" type="hidden" name="basket_buy_it_now_product[product_id]" id="basket_buy_it_now_product_product_id" />
                          <div className="quantity-container" data-product-id="1435" data-quantity-adjustment="basket">
                            <button type="button" className="c-button quantity-button" data-action="quantity#minus"><span>&ndash;</span></button>
                            <button type="button" className="c-button quantity-button" data-action="quantity#plus"><span>1</span></button>

                            <button type="button" className="c-button quantity-button" data-action="quantity#plus"><span>+</span></button>
                          </div>
                          <div className="atb-button">
                            <input type="submit" name="commit" value="Add to Basket" className="c-button no-variation add-to-basket" data-disable-with="Add to Basket" />
                          </div>
                        </form> 
                        </div>
                      </div>
               </div>

               


              </div>

            </div>
            


		</>
	);
};



export default BestSellers;
