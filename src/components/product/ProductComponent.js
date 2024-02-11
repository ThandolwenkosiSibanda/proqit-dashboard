import React from 'react';
import { useQuery } from '@apollo/client';

import {useParams} from 'react-router-dom';
import {  PRODUCT_QUERY } from '../../gql/Query';
import ProductListItem from './ProductListItem';




const ProductComponent = () => {

  const {id} = useParams();



    console.log('Id',id)

    const {data: productData, loading: productLoading, error: productError} = useQuery(PRODUCT_QUERY, {
        fetchPolicy: 'network-only',
        // pollInterval: 500,
        variables: {
         _id: id,
       },
      });


      console.log('productData', productData)


      const {data: relatedProducts} = useQuery(PRODUCT_QUERY, {
         fetchPolicy: 'network-only',
         // pollInterval: 500,
         variables: {
          _id: id,
        },
       });
 



      console.log('productData', productData?.product);
      console.log('productLoading', productLoading);
      console.log('productError', productError);


	return (
<>
            <div class="c-product-hero c-row--margin-default">
                <div class="row">
                  <div class="col s12">
                     <nav class="c-nav-breadcrumbs" data-name="breadcrumb">
                        <div class="nav-wrapper">
                           <div class>

                              <a class="breadcrumb" href="/">Home</a>
                              <a class="breadcrumb" href="/building-materials/sheet-materials">{productData?.product?.category}</a>
                              <a class="breadcrumb" href="/building-materials/sheet-materials/chipboard">{productData?.product?.subCategory}</a>
                              <a class="breadcrumb" href="/building-materials/sheet-materials/chipboard/chipboard-flooring">{productData?.product?.name}</a>
                           </div>
                        </div>
                     </nav>
                  </div>
               </div>
               <div class="row" data-product-container-id="3557" data-bulk-discounts-enabled="false">
                  <div class="col l4 s12">
                     <div class="c-product-gallery-wrapper">
                        <span class="material-icons">&#xe8ff;</span>
                        <span class="c-product-gallery--badge">Most Popular</span>
                        <div class="c-product-gallery">
                           <div class="carousel-item">
                              <div class="carousel-item-image" ></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col l4 s12">
                     <div class="c-product-information" data-bulk-discounts-enabled="false">
                        <div class="row">
                           <div class="c-product-information__reviews col s12">
                              <p class="c-product-information__reviews-count" data-name="reviews-total">1 Review</p>
                              <div class="c-product-information__reviews-rating">
                                 <div class="rating-stars" title="Rating of this product is 5.0 out of 5."></div>
                                 <span class="c-product-information__reviews-number" data-name="reviews-average">5</span>
                              </div>
                              <a class="c-product-information__reviews-view-all" data-page-scroll="smooth" href="#reviews" data-name="scroll-to-reviews">View Product Reviews</a>
                           </div>
                        </div>
                        <div class="row">
                           <h1 class="c-product-information__heading col s12">{productData?.product?.name}</h1>
                        </div>
                        <div class="row valign-wrapper">
                           <span class="c-product-information__sku col l12 s12">URN: 4005002</span>
                        </div>
                        <div class="row mobile">
                           <div class="c-product-information__variations col s12" data-name="product-options">
                              <h4 class="c-product-information__variations-title">Select Thickness</h4>
                              <div class="c-product-information__variations-variables" data-name="product-option-items">
                                 <a href="/products/18mm-p5-moisture-resistant-chipboard-flooring-t-g-2400mm-x-600mm">
                                 <span class="c-product-information__variations-variable col l4 s4 ">
                                 18mm
                                 </span>
                                 </a> <a href="/products/22mm-p5-moisture-resistant-chipboard-flooring-t-g-2400mm-x-600mm">
                                 <span class="c-product-information__variations-variable col l4 s4 selected">
                                 22mm
                                 </span>
                                 </a> 
                              </div>
                           </div>
                        </div>
                        <div>
                           <div class="row desktop">
                              <span class="c-product-information__price col l12 s6">$<span data-product-price-single-unit="14.99" data-product-price-single-unit-inc-vat="17.99">{productData?.product?.guestPrice}</span><small data-vat-toggle>ex. VAT</small></span>
                              <span class="c-product-information__price-unit col l12 s6 left-align">
                              £<span data-product-price-per-unit="10.41" data-product-price-per-unit-inc-vat="12.49">10.41</span> per m2
                              </span>
                           </div>
                           <div class="row valign-wrapper mobile">
                              <span class="c-product-information__price col l12 s6">
                                 <div>
                                    £<span data-product-price-single-unit="14.99" data-product-price-single-unit-inc-vat="17.99">{productData?.product?.guestPrice}</span><small data-vat-toggle>ex. VAT</small>
                                 </div>
                              </span>
                              <span class="c-product-information__price-unit col l12 s6 right-align">
                              £<span data-product-price-per-unit="10.41" data-product-price-per-unit-inc-vat="12.49">10.41</span> per m2
                              </span>
                           </div>
                        </div>
                        <div class="row desktop">
                           <div class="c-product-information__description col s12">
                              <div class="overflow-content">
                                 <p>{productData?.product?.shortDescription}</p>
                              </div>
                           </div>
                           <div class="col s12">
                              <a href="#product-description" data-page-scroll="smooth">Read full Product Description</a>
                           </div>
                        </div>
 
                     </div>
                  </div>
                  <div class="col l4 s12">
                     <div class="c-product-details" data-name="main-product-basket-widget">
                        <div class="row desktop">
                           <div class="c-product-details__variations col s12" data-name="product-options">
                              <h6 class="c-product-details__variations-title">Select Thickness</h6>
                              <div class="c-product-details__variations-variables" data-name="product-option-items">
                                 <a href="/products/18mm-p5-moisture-resistant-chipboard-flooring-t-g-2400mm-x-600mm">
                                 <span class="c-product-details__variations-variable col l4 s4 ">18mm</span>
                                 </a> <a href="/products/22mm-p5-moisture-resistant-chipboard-flooring-t-g-2400mm-x-600mm">
                                 <span class="c-product-details__variations-variable col l4 s4 selected">22mm</span>
                                 </a> 
                              </div>
                           </div>
                        </div>
                        <div class="row">
                           <div class="c-product-details__delivery center-align col s12">
                              <span class="c-product-details__delivery-ico material-icons">&#xe558;</span>
                              <h6 class="c-product-details__delivery-title">Earliest Delivery Time</h6>
                              <h5 class="c-product-details__delivery-subtitle">Fri 20 Oct</h5>
                           </div>
                           <div class="c-product-details__delivery-counter col s12 center-align">
                              <p>Order within 23hrs</p>
                              <a href="#delivery-information" data-name="delivery-information-modal" data-action="openModal" data-target="delivery-information">View Delivery & Returns Information</a>
                           </div>
                        </div>
                        <div class="row desktop">
                           <form class="new_basket_buy_it_now_product" id="new_basket_buy_it_now_product" action="/checkout/baskets/products" accept-charset="UTF-8" data-remote="true" method="post">
                              <input name="utf8" type="hidden" value="&#x2713;" />
                              <input value="3557" type="hidden" name="basket_buy_it_now_product[product_id]" id="basket_buy_it_now_product_product_id" />
                              <div class="c-product-details__quantity-selector col s12 center-align">
                                 <div class="quantity-container" data-product-id="3557" data-quantity-adjustment="basket" data-quantity-increment-multiple="1">
                                    <button type="button" class="quantity-button" data-action="quantity#minus">&ndash;</button>
                                    <div class="quantity-container__input">
                                       <input type="number" id="quantity" class="quantity input-text qty text" step="1" min="1" max name="basket_buy_it_now_product[quantity_required]" value="1" title="Qty" size="4" placeholder inputmode="numeric" data-name="quantity-input" />
                                    </div>
                                    <button type="button" class="quantity-button" data-action="quantity#plus">+</button>
                                 </div>
                              </div>
                              <div class="c-product-details__add-to-cart col s12 center-align">
                                 <button name="button" type="submit" class="c-button no-variation add-to-basket" data-name="desktop-main-add-to-basket">
                                 <span>Add to Basket - £<span data-product-price-all-units="14.99" data-product-price-all-units-inc-vat="17.99">14.99</span></span>
                                 </button> 
                              </div>
                           </form>
                        </div>
  


                        <div class="row mobile">
                           <h3 class="c-product-details__description-heading col s12">Product Overview</h3>
                           <div class="c-product-details__description col s12">
                              <div class="overflow-content">
                                 <p>22mm P5 Moisture Resistant Chipboard Flooring T&amp;G provides a solid base for additional flooring work. These engineered particleboard sheets are load-bearing and offer increased resistance to humid conditions.&nbsp;</p>
                              </div>
                           </div>
                           <div class="col s12">
                              <a href="#product-description" data-page-scroll="smooth">Read full Product Description</a>
                           </div>
                        </div>
                     </div>
                  </div>
          
               </div>

               
            </div>
            <div class="c-product-content">
               <div class="row">
                  <div class="col s10 offset-s1">
                     <div class="row c-row--margin-default">
                        <div class="c-cta c-cta--layout-image-right valign-wrapper">
                           <div class="c-cta__content col l6 s12" data-name="key-features">
                              <h4 class="c-cta__heading">Key Features</h4>
                              <ul>

                              {productData?.product?.keyFeatures.map((feature, index)=>  <li key={index}>{feature}</li>)}
                        
                              </ul>
                           </div>
                           <div class="c-cta__background crop col l6 s12 desktop">
                              <div class="c-cta__image" ></div>
                           </div>
                           <div class="c-cta__buttons s12 mobile">
                              <a class="c-button c-button--hollow" href="#technical-specification" data-page-scroll="smooth">Technical Specification</a>
                              <a class="c-button c-button--hollow" href="#technical-downloads" data-page-scroll="smooth">Technical Downloads</a>
                              <a class="c-button c-button--hollow" href="#product-description" data-page-scroll="smooth">Product Description</a>
                              <a class="c-button c-button--hollow" href="#reviews" data-page-scroll="smooth">Reviews</a>
                           </div>
                        </div>
                     </div>
                     <div class="row c-row--margin-default" id="technical-specification" itemscope="itemscope" itemtype="https://schema.org/Table">
                        <div class="c-table">
                           <h3 class="c-table__heading col s12">Technical Specification</h3>
                           <table class="c-table__content col s12">
                              <caption itemprop="about">Technical Specification</caption>
                              <tbody>

                              {/* {productData?.product?.technicalDownloads.map((specification, index)=><tr key ={index}>
                                    <th>{specification.name}:</th>
                                    <td><strong>{specification.value}{specification.measurement}</strong></td>
                                 </tr>)
                              } */}
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <div class="row c-row--margin-default" id="product-description">
                     {productData?.product?.content}
                     </div>



                     <div class="row c-row--margin-default">
                        <div class="c-products c-products--related" data-name="related-products">
                           <h2 class="c-products__heading">Related Products</h2>


                           <div class="c-products__list">

                           {relatedProducts?.relatedProducts?.map((product)=>   <ProductListItem product= {product} />)}


                           </div>
                           <div class="c-products__buttons center-align">
                              <a class="c-button c-button--inline" href="/building-materials/sheet-materials">Shop all Sheet Materials ›</a>
                           </div>
                        </div>
                     </div>
                     {/* <div class="row c-row--margin-default">
                        <div class="c-posts">
                           <h2 class="c-posts__heading">Related Articles</h2>
                           <div class="c-posts__list">
                              <div class="c-posts__item">
                                 <div class="c-posts__background">
                                    <a target="_blank" href="https://materialsmarket.com/articles/osb-or-chipboard-for-loft-flooring/" rel="noreferrer">
                                       <div class="c-posts__image"><img height="188" alt loading="lazy" src="https://res.cloudinary.com/materials-market/images/w_2560,h_1707/v1694428293/shutterstock_1721584708/shutterstock_1721584708-jpg?_i=AA" /></div>
                                    </a>
                                 </div>
                                 <div class="c-posts__content">
                                    <h3 class="c-posts__heading s12">OSB or Chipboard For Loft Flooring?</h3>
                                    <time class="c-posts__date s12">11 September 2023</time>
                                 </div>
                                 <div class="c-posts__buttons">
                                    <a target="_blank" class="c-button c-button--inline" href="https://materialsmarket.com/articles/osb-or-chipboard-for-loft-flooring/" rel="noreferrer">Read more</a>
                                 </div>
                              </div>
                              <div class="c-posts__item">
                                 <div class="c-posts__background">
                                    <a target="_blank" href="https://materialsmarket.com/articles/how-to-board-a-loft/" rel="noreferrer">
                                       <div class="c-posts__image"><img height="188" alt ='c-' loading="lazy" src="https://res.cloudinary.com/materials-market/images/w_2560,h_1707/v1693400499/shutterstock_1666263238/shutterstock_1666263238-jpg?_i=AA" /></div>
                                    </a>
                                 </div>
                                 <div class="c-posts__content">
                                    <h3 class="c-posts__heading s12">How To Board A Loft</h3>
                                    <time class="c-posts__date s12">30 August 2023</time>
                                 </div>
                                 <div class="c-posts__buttons">
                                    <a target="_blank" class="c-button c-button--inline" href="https://materialsmarket.com/articles/how-to-board-a-loft/" rel="noreferrer">Read more</a>
                                 </div>
                              </div>
                              <div class="c-posts__item">
                                 <div class="c-posts__background">
                                    <a target="_blank" href="https://materialsmarket.com/articles/painting-chipboard-transforming-your-surfaces/" rel="noreferrer">
                                       <div class="c-posts__image"><img height="188" alt loading="lazy" src="https://res.cloudinary.com/materials-market/images/w_2560,h_1440/v1687365129/shutterstock_2154054205/shutterstock_2154054205-jpg?_i=AA" /></div>
                                    </a>
                                 </div>
                                 <div class="c-posts__content">
                                    <h3 class="c-posts__heading s12">Painting Chipboard: Transforming Your Surfaces</h3>
                                    <time class="c-posts__date s12">21 June 2023</time>
                                 </div>
                                 <div class="c-posts__buttons">
                                    <a target="_blank" class="c-button c-button--inline" href="https://materialsmarket.com/articles/painting-chipboard-transforming-your-surfaces/" rel="noreferrer">Read more</a>
                                 </div>
                              </div>
                              <div class="c-posts__item">
                                 <div class="c-posts__background">
                                    <a target="_blank" href="https://materialsmarket.com/articles/chipboard-vs-mdf-unveiling-the-differences-and-making-the-right-choice/" rel="noreferrer">
                                       <div class="c-posts__image"><img height="188" alt loading="lazy" src="https://materialsmarket.kinsta.cloud/app/uploads/2023/06/shutterstock_1935709672-1024x678.jpg" /></div>
                                    </a>
                                 </div>
                                 <div class="c-posts__content">
                                    <h3 class="c-posts__heading s12">Chipboard vs MDF: Unveiling the Differences and Making the Right Choice</h3>
                                    <time class="c-posts__date s12">21 June 2023</time>
                                 </div>
                                 <div class="c-posts__buttons">
                                    <a target="_blank" class="c-button c-button--inline" href="https://materialsmarket.com/articles/chipboard-vs-mdf-unveiling-the-differences-and-making-the-right-choice/" rel="noreferrer">Read more</a>
                                 </div>
                              </div>
                              <div class="c-posts__item">
                                 <div class="c-posts__background">
                                    <a target="_blank" href="https://materialsmarket.com/articles/the-ultimate-diyers-guide-to-laying-chipboard-flooring/" rel="noreferrer">
                                       <div class="c-posts__image"><img height="188" alt loading="lazy" src="https://res.cloudinary.com/materials-market/images/w_2560,h_1447/v1687357492/shutterstock_2316255105/shutterstock_2316255105-jpg?_i=AA" /></div>
                                    </a>
                                 </div>
                                 <div class="c-posts__content">
                                    <h3 class="c-posts__heading s12">DIYers Guide to Laying Chipboard Flooring</h3>
                                    <time class="c-posts__date s12">21 June 2023</time>
                                 </div>
                                 <div class="c-posts__buttons">
                                    <a target="_blank" class="c-button c-button--inline" href="https://materialsmarket.com/articles/the-ultimate-diyers-guide-to-laying-chipboard-flooring/" rel="noreferrer">Read more</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div> */}
                  </div>
               </div>
            </div>
     
     
   


            </>

	
	);
};


export default ProductComponent;
