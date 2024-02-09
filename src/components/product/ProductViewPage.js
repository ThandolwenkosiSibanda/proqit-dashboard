import React from 'react';
import { useQuery } from '@apollo/client';
import { connect } from 'react-redux';
import {useParams, Link} from 'react-router-dom';
import { PRODUCTS_QUERY, PRODUCT_QUERY } from '../../gql/Query';
import ProductListItem from './ProductListItem';






const ProductViewPage = () => {

  const {id} = useParams();



    console.log('Id',id)

    const {data: productData, loading: productLoading, error: productError} = useQuery(PRODUCT_QUERY, {
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
	
         <main class="main">
          <div class="container">
            <div class="c-product-hero c-row--margin-default">
                <div class="row">
                  <div class="col s12">
                     <nav class="c-nav-breadcrumbs" data-name="breadcrumb">
                        <div class="nav-wrapper">
                           <div class>

                              <a class="breadcrumb" href="/">Home</a>
                              <a class="breadcrumb" href="/timber-sheet">Timber &amp; Sheet</a>
                              <a class="breadcrumb" href="/building-materials/sheet-materials">Sheet Materials</a>
                              <a class="breadcrumb" href="/building-materials/sheet-materials/chipboard">Chipboard</a>
                              <a class="breadcrumb" href="/building-materials/sheet-materials/chipboard/chipboard-flooring">Chipboard Flooring</a>
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
                        <div class="row" >
                           <div class="c-product-bulk-saving col s12">
                              <div class="circle">
                                 <p>BULK SAVING</p>
                              </div>
                              <div class="c-product-bulk-saving__link">
                                 <span>
                                    <div><a href="/products/22mm-p5-moisture-resistant-chipboard-flooring-t-g-2400mm-x-600mm-8-x-2-pack-of-66">Get each sheet for £<span data-product-price-per-unit="13.49" data-product-price-per-unit-inc-vat="16.19">13.49</span> when you buy a pack of 66</a></div>
                                 </span>
                              </div>
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
  
                        <div class="row">
                           <a href="/credit_applications/new">
                              <div class="c-product-details__credit col s12">
                                 <div>
                                    <span>Pay in 30 days</span>
                                    <span>Apply for trade credit</span>
                                 </div>
                              </div>
                           </a>
                        </div>
                        <div class="row">
                           <a href="/sign-up">
                              <div class="c-product-details__trade-account col s12">
                                 <div>
                                    <span>Save more with a trade account</span>
                                    
                                    <span>Register and get discounted trade prices</span>
                                 </div>
                              </div>
                           </a>
                        </div>
                        <div class="row">
                           <div class="c-product-details__trustpilot col s12">
                              <div>
                                 <div class="trustpilot-widget" data-locale="en-GB" data-template-id="5419b732fbfb950b10de65e5" data-businessunit-id="5f324b876ebe7100015c032b" data-style-height="24px" data-style-width="100%" data-theme="light">
                                    <a href="https://uk.trustpilot.com/review/materialsmarket.com" target="_blank" rel="noopener">Trustpilot</a>
                                 </div>
                              </div>
                           </div>
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
                  <div class="c-product-sticky-header-information" data-name="sticky-add-to-basket">
                     <div class="container desktop">
                        <div class="row">
                           <div class="col">
                              <h2 class="c-product-information__heading col s12" >22mm P5 Moisture Resistant Chipboard Flooring T&amp;G 2400mm x 600mm (8&#39; x 2&#39;)</h2>
                              <span class="c-product-information__sku col s12">URN: 4005002</span>
                           </div>
                        </div>
                        <div class="row right-align">
                           <div class="col">
                              <span class="c-product-information__price col l12 s6">£<span data-product-price-single-unit="14.99" data-product-price-single-unit-inc-vat="17.99">14.99</span><small data-vat-toggle>ex. VAT</small></span>
                           </div>
                           <form class="new_basket_buy_it_now_product" id="new_basket_buy_it_now_product" action="/checkout/baskets/products" accept-charset="UTF-8" data-remote="true" method="post">
                              <input name="utf8" type="hidden" value="&#x2713;" />
                              <input value="3557" type="hidden" name="basket_buy_it_now_product[product_id]" id="basket_buy_it_now_product_product_id" />
                              <div class="col">
                                 <div class="c-product-details__quantity-selector">
                                    <div class="quantity-container" data-product-id="3557" data-quantity-adjustment="basket" data-quantity-increment-multiple="1">
                                       <div class="quantity-container__input">
                                          <input type="number" class="quantity" id="quantity" step="1" min="1" max name="basket_buy_it_now_product[quantity_required]" value="1" title="Qty" size="4" placeholder inputmode="numeric" data-name="quantity-input" />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col">
                                 <div class="c-product-details__add-to-cart col s12 center-align">
                                    <button name="button" type="submit" class="c-button no-variation add-to-basket" data-name="desktop-sticky-add-to-basket">
                                    <span>Add to Basket - £<span data-product-price-all-units="14.99" data-product-price-all-units-inc-vat="17.99">14.99</span></span>
                                    </button> 
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                     <div class="container mobile">
                        <div class="row center-align">
                           <form class="new_basket_buy_it_now_product" id="new_basket_buy_it_now_product" action="/checkout/baskets/products" accept-charset="UTF-8" data-remote="true" method="post">
                              <input name="utf8" type="hidden" value="&#x2713;" />
                              <input value="3557" type="hidden" name="basket_buy_it_now_product[product_id]" id="basket_buy_it_now_product_product_id" />
                              <div class="col">
                                 <div class="c-product-details__quantity-selector col s12 center-align">
                                    <div class="quantity-container" data-product-id="3557" data-quantity-adjustment="basket" data-quantity-increment-multiple="1">
                                       <button type="button" class="c-button quantity-button" data-action="quantity#minus"><span>&ndash;</span></button>
                                       <div class="quantity-container__input">
                                          <input type="number" class="quantity" id="quantity" step="1" min="1" max name="basket_buy_it_now_product[quantity_required]" value="1" title="Qty" size="4" placeholder inputmode="numeric" data-name="quantity-input" />
                                       </div>
                                       <button type="button" class="c-button quantity-button" data-action="quantity#plus"><span>+</span></button>
                                    </div>
                                 </div>
                              </div>
                              <div class="col">
                                 <div class="c-product-details__add-to-cart col s12 center-align">
                                    <button name="button" type="submit" class="c-button no-variation add-to-basket" data-name="mobile-sticky-add-to-basket">
                                    <span>Add to Basket - £<span data-product-price-all-units="14.99" data-product-price-all-units-inc-vat="17.99">14.99</span></span>
                                    </button> 
                                 </div>
                              </div>
                           </form>
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
                                 <li>Use in structural flooring applications</li>
                                 <li>Moisture resistant</li>
                                 <li>FSC/PEFC Certified</li>
                                 <li>2400mm x 600mm&nbsp;</li>
                                 <li>Tongue and groove design</li>
                                 <li>Profiled on four edges&nbsp;</li>
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
                                 <tr>
                                    <th>Thickness:</th>
                                    <td><strong>22mm</strong></td>
                                 </tr>
                                 <tr>
                                    <th>Width:</th>
                                    <td><strong>600mm</strong></td>
                                 </tr>
                                 <tr>
                                    <th>Length:</th>
                                    <td><strong>2400mm</strong></td>
                                 </tr>
                                 <tr>
                                    <th>Sales Unit:</th>
                                    <td><strong>Sheet</strong></td>
                                 </tr>
                                 <tr>
                                    <th>Sales Unit Coverage:</th>
                                    <td><strong>1.44m2</strong></td>
                                 </tr>
                                 <tr>
                                    <th>Certification:</th>
                                    <td><strong>FSC / PEFC</strong></td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <div class="row c-row--margin-default" id="product-description">
                        <div class="c-cta col s12">
                           <div class="c-cta__content">
                              <div class="c-cta__inner">
                                 <section class="c-cta__text / s-entry">
                                    <h2>What Is 22mm P5 Moisture Resistant Chipboard Flooring T&amp;G?&nbsp;</h2>
                                    <p>Colour and finish are representative only and may vary slightly as this is a natural product. 22mm chipboard flooring P5 moisture-resistant is a high-performance flooring panel that provides the perfect base for subsequent floor laying operations such as tiles, carpets, and other decorative floors.&nbsp;This highly versatile sheet material is used extensively in bathrooms, kitchens, and living rooms to protect property structure and flooring systems from unwanted moisture.&nbsp;22mm moisture-resistant T&amp;G chipboard does a quality job of resisting humidity and is even more effective when used in conjunction with moisture-resistant fittings and other insulation materials.&nbsp;This board is FSC/PEFC chain of custody certified; a stamp of approval that confirms the long-term stewardship and sustainable management of forests.&nbsp;Each 22mm chipboard flooring P5 board has a smooth surface, meaning you can directly decorate it or install it as a sub-floor base with no added preparation time.&nbsp;Boards can either be screwed or nailed down and they benefit from a specially designed interlocking system that sees them slot together with ease.&nbsp;</p>
                                    <h3>Where Is 22mm Chipboard Flooring P5 Moisture-Resistant Used?&nbsp;</h3>
                                    <p>Comprising recycled wood and melamine fortified resins,22mm chipboard flooring P5 is a strong, durable, high-performance high-density flooring panel manufactured to achieve a structural grade.&nbsp;P5 flooring grade chipboard functions as a base for your choice of decorative flooring in a range of rooms and general flooring applications in both new build applications and refurbishment projects alike.&nbsp;P5 high-performance engineered wooden floorboards are designed for application under a number of floor systems that range from heavy tiles to soft, lightweight carpets.&nbsp;The boards can be used for specific commercial flooring and domestic flooring and are suitable for use underneath: &nbsp;</p>
                                    <ul>
                                       <li>Carpets</li>
                                       <li>Tiles</li>
                                       <li>Stones</li>
                                       <li>Slabs</li>
                                       <li>Bathroom floors&nbsp;</li>
                                       <li>Kitchen floors</li>
                                    </ul>
                                    <p><br /></p>
                                    <h3>22mm Chipboard Flooring Key Features &amp; Benefits</h3>
                                    <p>If you are searching for moisture-resistant, strong sub-flooring, look no further than 22mm tongue and groove chipboards.This engineered product has all of the benefits of other premium sub-floor materials but is far quicker to install thanks to its tongue and groove design.&nbsp;Let's check the specs and many benefits:&nbsp;</p>
                                    <ul>
                                       <li>These 2400mm x 600mm boards are easy to store and handle</li>
                                       <li>Ideal for most domestic applications</li>
                                       <li>The 22mm thickness is ideal for projects that require strong boards with long life cycles</li>
                                       <li>Excellent surface for floor laying projects</li>
                                       <li>Homeowners can apply paint directly onto the smooth surface for an instant aesthetic finish</li>
                                       <li>Accepts most coverings</li>
                                       <li>Features a sanded smooth surface that can either be veneered or decorated</li>
                                       <li>Tongued and grooved variant chipboard flooring guarantees quick and easy installation - profiled on four sides</li>
                                       <li>Banishes the need for intermediate noggins - hidden nails or screws can be utilised&nbsp;</li>
                                       <li>The tongue and groove style allows the sheets to simply slot together with adjacent boards - improving overall joint strength</li>
                                       <li>Made from recycled woodchips - minimises the need for landfill disposal</li>
                                    </ul>
                                    <p></p>
                                    <h3>22mm Chipboard Flooring Moisture Resistance</h3>
                                    <p>With the P5 chipboard sheets, you will be able to tick 'sub-floor base' off your project list in no time.</p>
                                    <p>One of the biggest benefits of moisture-resistant 22mm floorboards is that they are unaffected by humid conditions.&nbsp;Tongue and groove chipboard flooring is manufactured with a combination of special additives and chemicals that make it resistant to moisture.When it comes to structural floor and refurbishment projects, it is important to choose sheets that meet industry specifications for problems like humidity.&nbsp;P5 22mm chipboard is especially effective when it is installed in conjunction with a build-up of moisture-resistant insulation.&nbsp;</p>
                                    <p></p>
                                    <h3>22mm Tongue and Groove Floorboards Installation</h3>
                                    <p>These 2400mm x 600mm chipboards have one main feature that sets them apart from standard sheets in the industry; their tongue and groove design allow them to slot together much like a jigsaw, creating a strong and durable subfloor.With tongue and groove structures, joists remain strong, however, it is recommended that the T&amp;G edges are glued as this improves the solidity of the joint and allows for some joist variation.It should be noted, however, that installation is preferable in dry conditions due to the fact that the sheets are merely moisture-resistant, not waterproof.We recommend installing each sheet alongside other materials that can withstand high levels of humidity.Here at Materials Market, we sell a range of timber flooring solutions; both engineered and otherwise. All our timber is treated with preservatives, kiln dried, and then planed all around to give it eased edges that make them easy to lay, promising easy installation.&nbsp;</p>
                                 </section>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row c-row--margin-default" id="reviews">
                        <div class="c-reviews col s12">
                           <div class="c-reviews__initial">
                              <h2 class="c-reviews__title">Reviews</h2>
                              <div class="c-reviews__ratings">
                                 <div class="c-reviews__ratings-slider">
                                    <div class="c-reviews__ratings-slider-item rated-5" data-rating-filter="5" >
                                       <span>5</span>
                                       <span title="1 reviews"></span>
                                    </div>
                                    <div class="c-reviews__ratings-slider-item rated-4" data-rating-filter="4" >
                                       <span>4</span>
                                       <span title=" reviews"></span>
                                    </div>
                                    <div class="c-reviews__ratings-slider-item rated-3" data-rating-filter="3">
                                       <span>3</span>
                                       <span title=" reviews"></span>
                                    </div>
                                    <div class="c-reviews__ratings-slider-item rated-2" data-rating-filter="2">
                                       <span>2</span>
                                       <span title=" reviews"></span>
                                    </div>
                                    <div class="c-reviews__ratings-slider-item rated-1" data-rating-filter="1" >
                                       <span>1</span>
                                       <span title=" reviews"></span>
                                    </div>
                                 </div>
                                 <div class="c-reviews__ratings-score-sortby">
                                    <div class="c-reviews__ratings-score center-align">
                                       <span data-name="reviews-average">5/5</span>
                                       <span data-name="reviews-total">based on 1 review</span>
                                       <span><button class="btn btn-unstyled leave-review" data-name="leave-review">Leave a Review</button></span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="c-reviews__list">
                              <div class="c-reviews__item" data-name="product-review-item" data-rating="5" data-review-date="2021-12-11">
                                 <div class="rating-stars" title="Rating of this product is 5 out of 5."></div>
                                 <h3 class="c-reviews__heading"></h3>
                                 <div class="c-reviews__text / s-entry">
                                    <p>
                                       excellent sanded smooth finish. installed directly over floor joists. easy to use in tight spaces.
                                    </p>
                                 </div>
                                 <div class="c-reviews__meta">
                                    <author>Alex Peckham</author>
                                    on <time>11 December 2021</time>
                                 </div>
                              </div>
                           </div>
                           <div class="c-reviews__buttons center-align">
                              <a class="c-button c-button--inline" data-action="reviews#showAll"><span>Show all reviews</span></a>
                           </div>
                        </div>
                        <div class="c-leave-review">
                           <div class="c-leave-review__close-background"></div>
                           <div class="c-leave-review__inner">
                              <div class="c-leave-review__close"></div>
                              <h2 class="c-leave-review__heading" data-name="review-modal-title">Leave a Review</h2>
                              <div class="c-leave-review__content" data-name="review-modal-content">
                                 <form action="/product_reviews?product_id=22mm-p5-moisture-resistant-chipboard-flooring-t-g-2400mm-x-600mm" accept-charset="UTF-8" data-remote="true" method="post">
                                    <input name="utf8" type="hidden" value="&#x2713;" />
                                    <div class="row">
                                       <div class="input-field col s12">
                                          <input required="required" class="validate" placeholder="John" type="text" name="product_review[first_name]" id="product_review_first_name" />
                                          <label class="active" for="product_review_first_name">First Name</label>
                                       </div>
                                    </div>
                                    <div class="row">
                                       <div class="input-field col s12">
                                          <input required="required" class="validate" placeholder="Appleseed" type="text" name="product_review[last_name]" id="product_review_last_name" />
                                          <label class="active" for="product_review_last_name">Last Name</label>
                                       </div>
                                    </div>
                                    <div class="row">
                                       <div class="input-field col s12">
                                          <input required="required" class="validate" placeholder="john.appleseed@example.com" type="text" name="product_review[email]" id="product_review_email" />
                                          <label class="active" for="product_review_email">Email</label>
                                       </div>
                                    </div>
                                    <div class="row">
                                       <div class="input-field col s12">
                                          <textarea required="required" class="materialize-textarea" placeholder="Leave a review about 22mm P5 Moisture Resistant Chipboard Flooring T&amp;G 2400mm x 600mm (8&#39; x 2&#39;)" name="product_review[review]" id="product_review_review"></textarea>
                                          <label for="product_review_review">Review</label>
                                       </div>
                                    </div>
                                    <div class="row" data-name="review-rating">
                                       <div class="input-field col s12">
                                          <label required="required" class="active" for="product_review_rating">Rating</label>
                                          <input name="product_review[rating]" id="total-rating" type="hidden" />
                                          <div class="product-review-rating">
                                             <span class="star-label" data-rating-action="click#star">
                                             <label for="product_review_☆">☆</label>
                                             <input id="starValue5" type="radio" value="5"></input>
                                             </span>
                                             <span class="star-label" data-rating-action="click#star">
                                             <label for="product_review_☆">☆</label>
                                             <input id="starValue4" type="radio" value="4"></input>
                                             </span>
                                             <span class="star-label" data-rating-action="click#star">
                                             <label for="product_review_☆">☆</label>
                                             <input id="starValue3" type="radio" value="3"></input>
                                             </span>
                                             <span class="star-label" data-rating-action="click#star">
                                             <label for="product_review_☆">☆</label>
                                             <input id="starValue2" type="radio" value="2"></input>
                                             </span>
                                             <span class="star-label" data-rating-action="click#star">
                                             <label for="product_review_☆">☆</label>
                                             <input id="starValue1" type="radio" value="1"></input>
                                             </span>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="row">
                                       <div class="input-field col s12">
                                          <input type="submit" name="commit" value="Submit Review" class="validate" data-disable-with="Submit Review" />
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row c-row--margin-default">
                        <div class="c-products c-products--related" data-name="related-products">
                           <h2 class="c-products__heading">Related Products</h2>
                           <div class="c-products__list">
                              <div class="product-card" data-product-container-id="3524" data-bulk-discounts-enabled="false">
                                 <div class="product-card__image">
                                    <a href="/products/9mm-hardwood-plywood-class-2-2440mm-x-1220mm">
                                    <img height="188" alt="9mm Structural Hardwood Plywood Sheet 2440mm x 1220mm (8&#39; x 4&#39;)" loading="lazy" src="https://res.cloudinary.com/materials-market/image/upload/q_auto,f_auto/assets//product-images-final/9mm+Structural+Hardwood+Plywood+Sheet+-+Photo.jpg" />
                                    </a> 
                                 </div>
                                 <div class="product-card__content">
                                    <div class="c-products__stars">
                                       <div class="rating-stars"  title="Rating of this product is 5.0 out of 5."></div>
                                    </div>
                                    <span class="c-products__stars-count">(1)</span>
                                    <a href="/products/9mm-hardwood-plywood-class-2-2440mm-x-1220mm">
                                       <h3 class="product-card__heading line-clamp" data-text="9mm Structural Hardwood Plywood Sheet 2440mm x 1220mm (8&#39; x 4&#39;)">
                                          9mm Structural Hardwood Plywood Sheet 2440mm x 1220mm (8&#39; x 4&#39;)
                                       </h3>
                                    </a>
                                 </div>
                                 <div class="product-card__footer">
                                    <div class="c-products__add-to-cart">
                                       <div class="c-products__price l6 s12">
                                          <span data-name="display-price">£<span data-adjust-price-with-quantity="false" data-name="product-card-item-price" data-product-price-all-units="17.29" data-product-price-all-units-inc-vat="20.75">17.29</span></span>
                                          <span class="hidden" data-name="saving-tooltip"><span class="tooltip">with bulk discount</span></span>
                                       </div>
                                       <form class="new_basket_buy_it_now_product" id="new_basket_buy_it_now_product" action="/checkout/baskets/products" accept-charset="UTF-8" data-remote="true" method="post">
                                          <input name="utf8" type="hidden" value="&#x2713;" />
                                          <input value="3524" type="hidden" name="basket_buy_it_now_product[product_id]" id="basket_buy_it_now_product_product_id" />
                                          <div class="quantity-container" data-product-id="3524" data-quantity-adjustment="basket" data-quantity-increment-multiple="1">
                                             <button type="button" class="c-button quantity-button" data-action="quantity#minus"><span>&ndash;</span></button>
                                             <div class="quantity-container__input">
                                                <input type="number"  id="quantity" class="input-text qty text" step="1" min="1" max name="basket_buy_it_now_product[quantity_required]" value="1" title="Qty" size="4" placeholder inputmode="numeric" data-name="quantity-input" />
                                             </div>
                                             <button type="button" class="c-button quantity-button" data-action="quantity#plus"><span>+</span></button>
                                          </div>
                                          <div class="atb-button">
                                             <input type="submit" name="commit" value="Add to Basket" class="c-button no-variation add-to-basket" data-disable-with="Add to Basket" />
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                              <div class="product-card" data-product-container-id="3542" data-bulk-discounts-enabled="false">
                                 <div class="product-card__image">
                                    <a href="/products/11mm-structural-osb-3-2440mm-x-1220mm">
                                    <img height="188" alt="11mm Structural OSB 3 Sterling Board 2440mm x 1220mm (8&#39; x 4&#39;)" loading="lazy" src="https://res.cloudinary.com/materials-market/image/upload/q_auto,f_auto/assets//product-images-final/9mm+Structural+OSB+3+Sterling+Board+-+Photo.jpg" />
                                    </a> 
                                 </div>
                                 <div class="product-card__content">
                                    <span class="badge c-products__badge--info">Most Popular</span>
                                    <div class="c-products__stars">
                                       <div class="rating-stars"  title="Rating of this product is 0 out of 5."></div>
                                    </div>
                                    <span class="c-products__stars-count">(0)</span>
                                    <a href="/products/11mm-structural-osb-3-2440mm-x-1220mm">
                                       <h3 class="product-card__heading line-clamp" data-text="11mm Structural OSB 3 Sterling Board 2440mm x 1220mm (8&#39; x 4&#39;)">
                                          11mm Structural OSB 3 Sterling Board 2440mm x 1220mm (8&#39; x 4&#39;)
                                       </h3>
                                    </a>
                                 </div>
                                 <div class="product-card__footer">
                                    <div class="c-products__add-to-cart">
                                       <div class="c-products__price l6 s12">
                                          <span data-name="display-price">£<span data-adjust-price-with-quantity="false" data-name="product-card-item-price" data-product-price-all-units="14.20" data-product-price-all-units-inc-vat="17.04">14.20</span></span>
                                          <span class="hidden" data-name="saving-tooltip"><span class="tooltip">with bulk discount</span></span>
                                       </div>
                                       <form class="new_basket_buy_it_now_product" id="new_basket_buy_it_now_product" action="/checkout/baskets/products" accept-charset="UTF-8" data-remote="true" method="post">
                                          <input name="utf8" type="hidden" value="&#x2713;" />
                                          <input value="3542" type="hidden" name="basket_buy_it_now_product[product_id]" id="basket_buy_it_now_product_product_id" />
                                          <div class="quantity-container" data-product-id="3542" data-quantity-adjustment="basket" data-quantity-increment-multiple="1">
                                             <button type="button" class="c-button quantity-button" data-action="quantity#minus"><span>&ndash;</span></button>
                                             <div class="quantity-container__input">
                                                <input type="number"  id="quantity" class="input-text qty text" step="1" min="1" max name="basket_buy_it_now_product[quantity_required]" value="1" title="Qty" size="4" placeholder inputmode="numeric" data-name="quantity-input" />
                                             </div>
                                             <button type="button" class="c-button quantity-button" data-action="quantity#plus"><span>+</span></button>
                                          </div>
                                          <div class="atb-button">
                                             <input type="submit" name="commit" value="Add to Basket" class="c-button no-variation add-to-basket" data-disable-with="Add to Basket" />
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                              <div class="product-card" data-product-container-id="3543" data-bulk-discounts-enabled="false">
                                 <div class="product-card__image">
                                    <a href="/products/18mm-structural-osb-3-2440mm-x-1220mm">
                                    <img height="188" alt="18mm Structural OSB 3 Sterling Board 2440mm x 1220mm (8&#39; x 4&#39;)" loading="lazy" src="https://res.cloudinary.com/materials-market/image/upload/q_auto,f_auto/assets//product-images-final/18mm+Structural+OSB+3+Sterling+Board+-+Photo.jpg" />
                                    </a> 
                                 </div>
                                 <div class="product-card__content">
                                    <span class="badge c-products__badge--info">Most Popular</span>
                                    <div class="c-products__stars">
                                       <div class="rating-stars"  title="Rating of this product is 5.0 out of 5."></div>
                                    </div>
                                    <span class="c-products__stars-count">(15)</span>
                                    <a href="/products/18mm-structural-osb-3-2440mm-x-1220mm">
                                       <h3 class="product-card__heading line-clamp" data-text="18mm Structural OSB 3 Sterling Board 2440mm x 1220mm (8&#39; x 4&#39;)">
                                          18mm Structural OSB 3 Sterling Board 2440mm x 1220mm (8&#39; x 4&#39;)
                                       </h3>
                                    </a>
                                 </div>
                                 <div class="product-card__footer">
                                    <div class="c-products__add-to-cart">
                                       <div class="c-products__price l6 s12">
                                          <span data-name="display-price">£<span data-adjust-price-with-quantity="false" data-name="product-card-item-price" data-product-price-all-units="18.50" data-product-price-all-units-inc-vat="22.20">18.50</span></span>
                                          <span class="hidden" data-name="saving-tooltip"><span class="tooltip">with bulk discount</span></span>
                                       </div>
                                       <form class="new_basket_buy_it_now_product" id="new_basket_buy_it_now_product" action="/checkout/baskets/products" accept-charset="UTF-8" data-remote="true" method="post">
                                          <input name="utf8" type="hidden" value="&#x2713;" />
                                          <input value="3543" type="hidden" name="basket_buy_it_now_product[product_id]" id="basket_buy_it_now_product_product_id" />
                                          <div class="quantity-container" data-product-id="3543" data-quantity-adjustment="basket" data-quantity-increment-multiple="1">
                                             <button type="button" class="c-button quantity-button" data-action="quantity#minus"><span>&ndash;</span></button>
                                             <div class="quantity-container__input">
                                                <input type="number"  id="quantity" class="input-text qty text" step="1" min="1" max name="basket_buy_it_now_product[quantity_required]" value="1" title="Qty" size="4" placeholder inputmode="numeric" data-name="quantity-input" />
                                             </div>
                                             <button type="button" class="c-button quantity-button" data-action="quantity#plus"><span>+</span></button>
                                          </div>
                                          <div class="atb-button">
                                             <input type="submit" name="commit" value="Add to Basket" class="c-button no-variation add-to-basket" data-disable-with="Add to Basket" />
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                              <div class="product-card" data-product-container-id="3546" data-bulk-discounts-enabled="false">
                                 <div class="product-card__image">
                                    <a href="/products/12mm-mdf-board-moisture-resistant-2440mm-x-1220mm">
                                    <img height="188" alt="12mm MDF Board Moisture Resistant 2440mm x 1220mm (8&#39; x 4&#39;)" loading="lazy" src="https://res.cloudinary.com/materials-market/image/upload/q_auto,f_auto/assets//product-images-final/12mm+MDF+Board+Moisture+Resistant+-+Photo.jpg" />
                                    </a> 
                                 </div>
                                 <div class="product-card__content">
                                    <span class="badge c-products__badge--info">Most Popular</span>
                                    <div class="c-products__stars">
                                       <div class="rating-stars"  title="Rating of this product is 0 out of 5."></div>
                                    </div>
                                    <span class="c-products__stars-count">(0)</span>
                                    <a href="/products/12mm-mdf-board-moisture-resistant-2440mm-x-1220mm">
                                       <h3 class="product-card__heading line-clamp" data-text="12mm MDF Board Moisture Resistant 2440mm x 1220mm (8&#39; x 4&#39;)">
                                          12mm MDF Board Moisture Resistant 2440mm x 1220mm (8&#39; x 4&#39;)
                                       </h3>
                                    </a>
                                 </div>
                                 <div class="product-card__footer">
                                    <div class="c-products__add-to-cart">
                                       <div class="c-products__price l6 s12">
                                          <span data-name="display-price">£<span data-adjust-price-with-quantity="false" data-name="product-card-item-price" data-product-price-all-units="26.78" data-product-price-all-units-inc-vat="32.14">26.78</span></span>
                                          <span class="hidden" data-name="saving-tooltip"><span class="tooltip">with bulk discount</span></span>
                                       </div>
                                       <form class="new_basket_buy_it_now_product" id="new_basket_buy_it_now_product" action="/checkout/baskets/products" accept-charset="UTF-8" data-remote="true" method="post">
                                          <input name="utf8" type="hidden" value="&#x2713;" />
                                          <input value="3546" type="hidden" name="basket_buy_it_now_product[product_id]" id="basket_buy_it_now_product_product_id" />
                                          <div class="quantity-container" data-product-id="3546" data-quantity-adjustment="basket" data-quantity-increment-multiple="1">
                                             <button type="button" class="c-button quantity-button" data-action="quantity#minus"><span>&ndash;</span></button>
                                             <div class="quantity-container__input">
                                                <input type="number" id="quantity" class="quantity input-text qty text" step="1" min="1" max name="basket_buy_it_now_product[quantity_required]" value="1" title="Qty" size="4" placeholder inputmode="numeric" data-name="quantity-input" />
                                             </div>
                                             <button type="button" class="c-button quantity-button" data-action="quantity#plus"><span>+</span></button>
                                          </div>
                                          <div class="atb-button">
                                             <input type="submit" name="commit" value="Add to Basket" class="c-button no-variation add-to-basket" data-disable-with="Add to Basket" />
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                              <div class="product-card" data-product-container-id="3551" data-bulk-discounts-enabled="false">
                                 <div class="product-card__image">
                                    <a href="/products/12mm-mdf-board-standard-2440mm-x-1220mm">
                                    <img height="188" alt="12mm MDF Board Standard 2440mm x 1220mm (8&#39; x 4&#39;)" loading="lazy" src="https://res.cloudinary.com/materials-market/image/upload/q_auto,f_auto/assets//product-images-final/12mm+MDF+Board+Standard+-+Photo.jpg" />
                                    </a> 
                                 </div>
                                 <div class="product-card__content">
                                    <span class="badge c-products__badge--info">Most Popular</span>
                                    <div class="c-products__stars">
                                       <div class="rating-stars"  title="Rating of this product is 0 out of 5."></div>
                                    </div>
                                    <span class="c-products__stars-count">(0)</span>
                                    <a href="/products/12mm-mdf-board-standard-2440mm-x-1220mm">
                                       <h3 class="product-card__heading line-clamp" data-text="12mm MDF Board Standard 2440mm x 1220mm (8&#39; x 4&#39;)">
                                          12mm MDF Board Standard 2440mm x 1220mm (8&#39; x 4&#39;)
                                       </h3>
                                    </a>
                                 </div>
                                 <div class="product-card__footer">
                                    <div class="c-products__add-to-cart">
                                       <div class="c-products__price l6 s12">
                                          <span data-name="display-price">£<span data-adjust-price-with-quantity="false" data-name="product-card-item-price" data-product-price-all-units="19.18" data-product-price-all-units-inc-vat="23.02">19.18</span></span>
                                          <span class="hidden" data-name="saving-tooltip"><span class="tooltip">with bulk discount</span></span>
                                       </div>
                                       <form class="new_basket_buy_it_now_product" id="new_basket_buy_it_now_product" action="/checkout/baskets/products" accept-charset="UTF-8" data-remote="true" method="post">
                                          <input name="utf8" type="hidden" value="&#x2713;" />
                                          <input value="3551" type="hidden" name="basket_buy_it_now_product[product_id]" id="basket_buy_it_now_product_product_id" />
                                          <div class="quantity-container" data-product-id="3551" data-quantity-adjustment="basket" data-quantity-increment-multiple="1">
                                             <button type="button" class="c-button quantity-button" data-action="quantity#minus"><span>&ndash;</span></button>
                                             <div class="quantity-container__input">
                                                <input type="number" id="quantity" class=" quantity input-text qty text" step="1" min="1" max name="basket_buy_it_now_product[quantity_required]" value="1" title="Qty" size="4" placeholder inputmode="numeric" data-name="quantity-input" />
                                             </div>
                                             <button type="button" class="c-button quantity-button" data-action="quantity#plus"><span>+</span></button>
                                          </div>
                                          <div class="atb-button">
                                             <input type="submit" name="commit" value="Add to Basket" class="c-button no-variation add-to-basket" data-disable-with="Add to Basket" />
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                              <div class="product-card" data-product-container-id="1921" data-bulk-discounts-enabled="true">
                                 <div class="product-card__image">
                                    <a href="/products/100mm-celotex-ga4100-pir-insulation-board-2400mm-x-1200mm">
                                    <img height="188" alt="100mm Celotex GA4100 PIR Insulation Board 2400mm x 1200mm" loading="lazy" src="https://res.cloudinary.com/materials-market/image/upload/q_auto,f_auto/assets//product-images-final/Celotex+PIR+Insulation+Board+-+Photo+(Resized).jpg" />
                                    </a> 
                                 </div>
                                 <div class="product-card__content">
                                    <span class="badge c-products__badge--info">Most Popular</span>
                                    <div class="c-products__stars">
                                       <div class="rating-stars"  title="Rating of this product is 4.972972972972973 out of 5."></div>
                                    </div>
                                    <span class="c-products__stars-count">(37)</span>
                                    <a href="/products/100mm-celotex-ga4100-pir-insulation-board-2400mm-x-1200mm">
                                       <h3 class="product-card__heading line-clamp" data-text="100mm Celotex GA4100 PIR Insulation Board 2400mm x 1200mm">
                                          100mm Celotex GA4100 PIR Insulation Board 2400mm x 1200mm
                                       </h3>
                                    </a>
                                 </div>
                                 <div class="product-card__footer">
                                    <div class="c-products__add-to-cart">
                                       <div class="c-products__price l6 s12">
                                          <span data-name="display-price" >£<span data-name="discount-tier" data-discount-range="10-19" data-bulk-price-per-unit="30.14" data-bulk-price-per-unit-inc-vat="36.17">30.14</span></span>
                                          <span data-name="display-price" >£<span data-name="discount-tier" data-discount-range="20-29" data-bulk-price-per-unit="29.83" data-bulk-price-per-unit-inc-vat="35.80">29.83</span></span>
                                          <span data-name="display-price" >£<span data-name="discount-tier" data-discount-range="30-100000000" data-bulk-price-per-unit="29.53" data-bulk-price-per-unit-inc-vat="35.44">29.53</span></span>
                                          <span data-name="display-price">£<span data-adjust-price-with-quantity="false" data-name="product-card-item-price" data-product-price-all-units="30.44" data-product-price-all-units-inc-vat="36.53">30.44</span></span>
                                          <span class="hidden" data-name="saving-tooltip"><span class="tooltip">with bulk discount</span></span>
                                       </div>
                                       <form class="new_basket_buy_it_now_product" id="new_basket_buy_it_now_product" action="/checkout/baskets/products" accept-charset="UTF-8" data-remote="true" method="post">
                                          <input name="utf8" type="hidden" value="&#x2713;" />
                                          <input value="1921" type="hidden" name="basket_buy_it_now_product[product_id]" id="basket_buy_it_now_product_product_id" />
                                          <div class="quantity-container" data-product-id="1921" data-quantity-adjustment="basket" data-quantity-increment-multiple="1">
                                             <button type="button" class="c-button quantity-button" data-action="quantity#minus"><span>&ndash;</span></button>
                                             <div class="quantity-container__input">
                                                <input type="number"  id="quantity" class=" quantity input-text qty text" step="1" min="1" max name="basket_buy_it_now_product[quantity_required]" value="1" title="Qty" size="4" placeholder inputmode="numeric" data-name="quantity-input" />
                                             </div>
                                             <button type="button" class="c-button quantity-button" data-action="quantity#plus"><span>+</span></button>
                                          </div>
                                          <div class="atb-button">
                                             <input type="submit" name="commit" value="Add to Basket" class="c-button no-variation add-to-basket" data-disable-with="Add to Basket" />
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                              <div class="product-card" data-product-container-id="3547" data-bulk-discounts-enabled="false">
                                 <div class="product-card__image">
                                    <a href="/products/18mm-mdf-board-moisture-resistant-2440mm-x-1220mm">
                                    <img height="188" alt="18mm MDF Board Moisture Resistant 2440mm x 1220mm (8&#39; x 4&#39;)" loading="lazy" src="https://res.cloudinary.com/materials-market/image/upload/q_auto,f_auto/assets//product-images-final/18mm+MDF+Board+Moisture+Resistant+-+Photo.jpg" />
                                    </a> 
                                 </div>
                                 <div class="product-card__content">
                                    <span class="badge c-products__badge--info">Most Popular</span>
                                    <div class="c-products__stars">
                                       <div class="rating-stars"  title="Rating of this product is 0 out of 5."></div>
                                    </div>
                                    <span class="c-products__stars-count">(0)</span>
                                    <a href="/products/18mm-mdf-board-moisture-resistant-2440mm-x-1220mm">
                                       <h3 class="product-card__heading line-clamp" data-text="18mm MDF Board Moisture Resistant 2440mm x 1220mm (8&#39; x 4&#39;)">
                                          18mm MDF Board Moisture Resistant 2440mm x 1220mm (8&#39; x 4&#39;)
                                       </h3>
                                    </a>
                                 </div>
                                 <div class="product-card__footer">
                                    <div class="c-products__add-to-cart">
                                       <div class="c-products__price l6 s12">
                                          <span data-name="display-price">£<span data-adjust-price-with-quantity="false" data-name="product-card-item-price" data-product-price-all-units="35.53" data-product-price-all-units-inc-vat="42.64">35.53</span></span>
                                          <span class="hidden" data-name="saving-tooltip"><span class="tooltip">with bulk discount</span></span>
                                       </div>
                                       <form class="new_basket_buy_it_now_product" id="new_basket_buy_it_now_product" action="/checkout/baskets/products" accept-charset="UTF-8" data-remote="true" method="post">
                                          <input name="utf8" type="hidden" value="&#x2713;" />
                                          <input value="3547" type="hidden" name="basket_buy_it_now_product[product_id]" id="basket_buy_it_now_product_product_id" />
                                          <div class="quantity-container" data-product-id="3547" data-quantity-adjustment="basket" data-quantity-increment-multiple="1">
                                             <button type="button" class="c-button quantity-button" data-action="quantity#minus"><span>&ndash;</span></button>
                                             <div class="quantity-container__input">
                                                <input type="number" id="quantity" class="quantity input-text qty text" step="1" min="1" max name="basket_buy_it_now_product[quantity_required]" value="1" title="Qty" size="4" placeholder inputmode="numeric" data-name="quantity-input" />
                                             </div>
                                             <button type="button" class="c-button quantity-button" data-action="quantity#plus"><span>+</span></button>
                                          </div>
                                          <div class="atb-button">
                                             <input type="submit" name="commit" value="Add to Basket" class="c-button no-variation add-to-basket" data-disable-with="Add to Basket" />
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                              <div class="product-card" data-product-container-id="1173" data-bulk-discounts-enabled="false">
                                 <div class="product-card__image">
                                    <a href="/products/100mm-knauf-earthwool-acoustic-sound-insulation-roll-11m2-roll">
                                    <img height="188" alt="100mm Knauf Earthwool Acoustic (APR) Insulation Roll (12.36m2/Roll)" loading="lazy" src="https://res.cloudinary.com/materials-market/image/upload/q_auto,f_auto/assets//product-images-final/Knauf+Earthwool+Acoustic+Partition+Roll+-+Photo+(Resized).jpg" />
                                    </a> 
                                 </div>
                                 <div class="product-card__content">
                                    <span class="badge c-products__badge--info">Most Popular</span>
                                    <div class="c-products__stars">
                                       <div class="rating-stars"  title="Rating of this product is 5.0 out of 5."></div>
                                    </div>
                                    <span class="c-products__stars-count">(1)</span>
                                    <a href="/products/100mm-knauf-earthwool-acoustic-sound-insulation-roll-11m2-roll">
                                       <h3 class="product-card__heading line-clamp" data-text="100mm Knauf Earthwool Acoustic (APR) Insulation Roll (12.36m2/Roll)">
                                          100mm Knauf Earthwool Acoustic (APR) Insulation Roll (12.36m2/Roll)
                                       </h3>
                                    </a>
                                 </div>
                                 <div class="product-card__footer">
                                    <div class="c-products__add-to-cart">
                                       <div class="c-products__price l6 s12">
                                          <span data-name="display-price">£<span data-adjust-price-with-quantity="false" data-name="product-card-item-price" data-product-price-all-units="48.83" data-product-price-all-units-inc-vat="58.60">48.83</span></span>
                                          <span class="hidden" data-name="saving-tooltip"><span class="tooltip">with bulk discount</span></span>
                                       </div>
                                       <form class="new_basket_buy_it_now_product" id="new_basket_buy_it_now_product" action="/checkout/baskets/products" accept-charset="UTF-8" data-remote="true" method="post">
                                          <input name="utf8" type="hidden" value="&#x2713;" />
                                          <input value="1173" type="hidden" name="basket_buy_it_now_product[product_id]" id="basket_buy_it_now_product_product_id" />
                                          <div class="quantity-container" data-product-id="1173" data-quantity-adjustment="basket" data-quantity-increment-multiple="1">
                                             <button type="button" class="c-button quantity-button" data-action="quantity#minus"><span>&ndash;</span></button>
                                             <div class="quantity-container__input">
                                                <input type="number"  id="quantity" class="quantity input-text qty text" step="1" min="1" max name="basket_buy_it_now_product[quantity_required]" value="1" title="Qty" size="4" placeholder inputmode="numeric" data-name="quantity-input" />
                                             </div>
                                             <button type="button" class="c-button quantity-button" data-action="quantity#plus"><span>+</span></button>
                                          </div>
                                          <div class="atb-button">
                                             <input type="submit" name="commit" value="Add to Basket" class="c-button no-variation add-to-basket" data-disable-with="Add to Basket" />
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                              <div class="product-card" data-product-container-id="3556" data-bulk-discounts-enabled="false">
                                 <div class="product-card__image">
                                    <a href="/products/18mm-p5-moisture-resistant-chipboard-flooring-t-g-2400mm-x-600mm">
                                    <img height="188" alt="18mm P5 Moisture Resistant Chipboard Flooring T&amp;G 2400mm x 600mm (8&#39; x 2&#39;)" loading="lazy" src="https://res.cloudinary.com/materials-market/image/upload/q_auto,f_auto/assets//product-images-final/P5+Chipboard+Flooring+TG+-+Photo.jpg" />
                                    </a> 
                                 </div>
                                 <div class="product-card__content">
                                    <span class="badge c-products__badge--info">Most Popular</span>
                                    <div class="c-products__stars">
                                       <div class="rating-stars"  title="Rating of this product is 5.0 out of 5."></div>
                                    </div>
                                    <span class="c-products__stars-count">(1)</span>
                                    <a href="/products/18mm-p5-moisture-resistant-chipboard-flooring-t-g-2400mm-x-600mm">
                                       <h3 class="product-card__heading line-clamp" data-text="18mm P5 Moisture Resistant Chipboard Flooring T&amp;G 2400mm x 600mm (8&#39; x 2&#39;)">
                                          18mm P5 Moisture Resistant Chipboard Flooring T&amp;G 2400mm x 600mm (8&#39; x 2&#39;)
                                       </h3>
                                    </a>
                                 </div>
                                 <div class="product-card__footer">
                                    <div class="c-products__add-to-cart">
                                       <div class="c-products__price l6 s12">
                                          <span data-name="display-price">£<span data-adjust-price-with-quantity="false" data-name="product-card-item-price" data-product-price-all-units="12.45" data-product-price-all-units-inc-vat="14.94">12.45</span></span>
                                          <span class="hidden" data-name="saving-tooltip"><span class="tooltip">with bulk discount</span></span>
                                       </div>
                                       <form class="new_basket_buy_it_now_product" id="new_basket_buy_it_now_product" action="/checkout/baskets/products" accept-charset="UTF-8" data-remote="true" method="post">
                                          <input name="utf8" type="hidden" value="&#x2713;" />
                                          <input value="3556" type="hidden" name="basket_buy_it_now_product[product_id]" id="basket_buy_it_now_product_product_id" />
                                          <div class="quantity-container" data-product-id="3556" data-quantity-adjustment="basket" data-quantity-increment-multiple="1">
                                             <button type="button" class="c-button quantity-button" data-action="quantity#minus"><span>&ndash;</span></button>
                                             <div class="quantity-container__input">
                                                <input type="number"  id="quantity" class="quantity input-text qty text" step="1" min="1" max name="basket_buy_it_now_product[quantity_required]" value="1" title="Qty" size="4" placeholder inputmode="numeric" data-name="quantity-input" />
                                             </div>
                                             <button type="button" class="c-button quantity-button" data-action="quantity#plus"><span>+</span></button>
                                          </div>
                                          <div class="atb-button">
                                             <input type="submit" name="commit" value="Add to Basket" class="c-button no-variation add-to-basket" data-disable-with="Add to Basket" />
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                              <div class="product-card" data-product-container-id="3520" data-bulk-discounts-enabled="false">
                                 <div class="product-card__image">
                                    <a href="/products/12mm-hardwood-plywood-class-2-2440mm-x-1220mm">
                                    <img height="188" alt="12mm Structural Hardwood Plywood Sheet 2440mm x 1220mm (8&#39; x 4&#39;)" loading="lazy" src="https://res.cloudinary.com/materials-market/image/upload/q_auto,f_auto/assets//product-images-final/12mm+Structural+Hardwood+Plywood+Sheet+-+Photo.jpg" />
                                    </a> 
                                 </div>
                                 <div class="product-card__content">
                                    <span class="badge c-products__badge--info">Most Popular</span>
                                    <div class="c-products__stars">
                                       <div class="rating-stars" title="Rating of this product is 5.0 out of 5."></div>
                                    </div>
                                    <span class="c-products__stars-count">(1)</span>
                                    <a href="/products/12mm-hardwood-plywood-class-2-2440mm-x-1220mm">
                                       <h3 class="product-card__heading line-clamp" data-text="12mm Structural Hardwood Plywood Sheet 2440mm x 1220mm (8&#39; x 4&#39;)">
                                          12mm Structural Hardwood Plywood Sheet 2440mm x 1220mm (8&#39; x 4&#39;)
                                       </h3>
                                    </a>
                                 </div>
                                 <div class="product-card__footer">
                                    <div class="c-products__add-to-cart">
                                       <div class="c-products__price l6 s12">
                                          <span data-name="display-price">£<span data-adjust-price-with-quantity="false" data-name="product-card-item-price" data-product-price-all-units="19.32" data-product-price-all-units-inc-vat="23.18">19.32</span></span>
                                          <span class="hidden" data-name="saving-tooltip"><span class="tooltip">with bulk discount</span></span>
                                       </div>
                                       <form class="new_basket_buy_it_now_product" id="new_basket_buy_it_now_product" action="/checkout/baskets/products" accept-charset="UTF-8" data-remote="true" method="post">
                                          <input name="utf8" type="hidden" value="&#x2713;" />
                                          <input value="3520" type="hidden" name="basket_buy_it_now_product[product_id]" id="basket_buy_it_now_product_product_id" />
                                          <div class="quantity-container" data-product-id="3520" data-quantity-adjustment="basket" data-quantity-increment-multiple="1">
                                             <button type="button" class="c-button quantity-button" data-action="quantity#minus"><span>&ndash;</span></button>
                                             <div class="quantity-container__input">
                                                <input type="number"  id="quantity" class="quantity input-text qty text" step="1" min="1" max name="basket_buy_it_now_product[quantity_required]" value="1" title="Qty" size="4" placeholder inputmode="numeric" data-name="quantity-input" />
                                             </div>
                                             <button type="button" class="c-button quantity-button" data-action="quantity#plus"><span>+</span></button>
                                          </div>
                                          <div class="atb-button">
                                             <input type="submit" name="commit" value="Add to Basket" class="c-button no-variation add-to-basket" data-disable-with="Add to Basket" />
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                              <div class="product-card" data-product-container-id="3552" data-bulk-discounts-enabled="false">
                                 <div class="product-card__image">
                                    <a href="/products/18mm-mdf-board-standard-2440mm-x-1220mm">
                                    <img height="188" alt="18mm MDF Board Standard 2440mm x 1220mm (8&#39; x 4&#39;)" loading="lazy" src="https://res.cloudinary.com/materials-market/image/upload/q_auto,f_auto/assets//product-images-final/18mm+MDF+Board+Standard+-+Photo.jpg" />
                                    </a> 
                                 </div>
                                 <div class="product-card__content">
                                    <span class="badge c-products__badge--info">Most Popular</span>
                                    <div class="c-products__stars">
                                       <div class="rating-stars"  title="Rating of this product is 0 out of 5."></div>
                                    </div>
                                    <span class="c-products__stars-count">(0)</span>
                                    <a href="/products/18mm-mdf-board-standard-2440mm-x-1220mm">
                                       <h3 class="product-card__heading line-clamp" data-text="18mm MDF Board Standard 2440mm x 1220mm (8&#39; x 4&#39;)">
                                          18mm MDF Board Standard 2440mm x 1220mm (8&#39; x 4&#39;)
                                       </h3>
                                    </a>
                                 </div>
                                 <div class="product-card__footer">
                                    <div class="c-products__add-to-cart">
                                       <div class="c-products__price l6 s12">
                                          <span data-name="display-price">£<span data-adjust-price-with-quantity="false" data-name="product-card-item-price" data-product-price-all-units="24.29" data-product-price-all-units-inc-vat="29.15">24.29</span></span>
                                          <span class="hidden" data-name="saving-tooltip"><span class="tooltip">with bulk discount</span></span>
                                       </div>
                                       <form class="new_basket_buy_it_now_product" id="new_basket_buy_it_now_product" action="/checkout/baskets/products" accept-charset="UTF-8" data-remote="true" method="post">
                                          <input name="utf8" type="hidden" value="&#x2713;" />
                                          <input value="3552" type="hidden" name="basket_buy_it_now_product[product_id]" id="basket_buy_it_now_product_product_id" />
                                          <div class="quantity-container" data-product-id="3552" data-quantity-adjustment="basket" data-quantity-increment-multiple="1">
                                             <button type="button" class="c-button quantity-button" data-action="quantity#minus"><span>&ndash;</span></button>
                                             <div class="quantity-container__input">
                                                <input type="number"  id="quantity" class="quantity input-text qty text" step="1" min="1" max name="basket_buy_it_now_product[quantity_required]" value="1" title="Qty" size="4" placeholder inputmode="numeric" data-name="quantity-input" />
                                             </div>
                                             <button type="button" class="c-button quantity-button" data-action="quantity#plus"><span>+</span></button>
                                          </div>
                                          <div class="atb-button">
                                             <input type="submit" name="commit" value="Add to Basket" class="c-button no-variation add-to-basket" data-disable-with="Add to Basket" />
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                              <div class="product-card" data-product-container-id="1435" data-bulk-discounts-enabled="false">
                                 <div class="product-card__image">
                                    <a href="/products/100mm-rockwool-rwa45-acoustic-sound-insulation-slab-2-88m2-pack">
                                    <img height="188" alt="100mm Rockwool RWA45 Acoustic Sound Insulation Slab (2.88m2/Pack)" loading="lazy" src="https://res.cloudinary.com/materials-market/image/upload/q_auto,f_auto/assets//product-images-final/Rockwool+RWA45+Acoustic+Insulation+Slab+-+Photo+(Resized).jpg" />
                                    </a> 
                                 </div>
                                 <div class="product-card__content">
                                    <span class="badge c-products__badge--info">Most Popular</span>
                                    <div class="c-products__stars">
                                       <div class="rating-stars" title="Rating of this product is 5.0 out of 5."></div>
                                    </div>
                                    <span class="c-products__stars-count">(23)</span>
                                    <a href="/products/100mm-rockwool-rwa45-acoustic-sound-insulation-slab-2-88m2-pack">
                                       <h3 class="product-card__heading line-clamp" data-text="100mm Rockwool RWA45 Acoustic Sound Insulation Slab (2.88m2/Pack)">
                                          100mm Rockwool RWA45 Acoustic Sound Insulation Slab (2.88m2/Pack)
                                       </h3>
                                    </a>
                                 </div>
                                 <div class="product-card__footer">
                                    <div class="c-products__add-to-cart">
                                       <div class="c-products__price l6 s12">
                                          <span data-name="display-price">£<span data-adjust-price-with-quantity="false" data-name="product-card-item-price" data-product-price-all-units="21.37" data-product-price-all-units-inc-vat="25.64">21.37</span></span>
                                          <span class="hidden" data-name="saving-tooltip"><span class="tooltip">with bulk discount</span></span>
                                       </div>
                                       <form class="new_basket_buy_it_now_product" id="new_basket_buy_it_now_product" action="/checkout/baskets/products" accept-charset="UTF-8" data-remote="true" method="post">
                                          <input name="utf8" type="hidden" value="&#x2713;" />
                                          <input value="1435" type="hidden" name="basket_buy_it_now_product[product_id]" id="basket_buy_it_now_product_product_id" />
                                          <div class="quantity-container" data-product-id="1435" data-quantity-adjustment="basket" data-quantity-increment-multiple="1">
                                             <button type="button" class="c-button quantity-button" data-action="quantity#minus"><span>&ndash;</span></button>
                                             <div class="quantity-container__input">
                                                <input type="number" id="quantity" class="quantity input-text qty text" step="1" min="1" max name="basket_buy_it_now_product[quantity_required]" value="1" title="Qty" size="4" placeholder inputmode="numeric" data-name="quantity-input" />
                                             </div>
                                             <button type="button" class="c-button quantity-button" data-action="quantity#plus"><span>+</span></button>
                                          </div>
                                          <div class="atb-button">
                                             <input type="submit" name="commit" value="Add to Basket" class="c-button no-variation add-to-basket" data-disable-with="Add to Basket" />
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                              <div class="product-card" data-product-container-id="3521" data-bulk-discounts-enabled="false">
                                 <div class="product-card__image">
                                    <a href="/products/18mm-hardwood-plywood-class-2-2440mm-x-1220mm">
                                    <img height="188" alt="18mm Structural Hardwood Plywood Sheet 2440mm x 1220mm (8&#39; x 4&#39;)" loading="lazy" src="https://res.cloudinary.com/materials-market/image/upload/q_auto,f_auto/assets//product-images-final/18mm+Structural+Hardwood+Plywood+Sheet+-+Photo.jpg" />
                                    </a> 
                                 </div>
                                 <div class="product-card__content">
                                    <span class="badge c-products__badge--info">Most Popular</span>
                                    <div class="c-products__stars">
                                       <div class="rating-stars"  title="Rating of this product is 5.0 out of 5."></div>
                                    </div>
                                    <span class="c-products__stars-count">(6)</span>
                                    <a href="/products/18mm-hardwood-plywood-class-2-2440mm-x-1220mm">
                                       <h3 class="product-card__heading line-clamp" data-text="18mm Structural Hardwood Plywood Sheet 2440mm x 1220mm (8&#39; x 4&#39;)">
                                          18mm Structural Hardwood Plywood Sheet 2440mm x 1220mm (8&#39; x 4&#39;)
                                       </h3>
                                    </a>
                                 </div>
                                 <div class="product-card__footer">
                                    <div class="c-products__add-to-cart">
                                       <div class="c-products__price l6 s12">
                                          <span data-name="display-price">£<span data-adjust-price-with-quantity="false" data-name="product-card-item-price" data-product-price-all-units="26.50" data-product-price-all-units-inc-vat="31.80">26.50</span></span>
                                          <span class="hidden" data-name="saving-tooltip"><span class="tooltip">with bulk discount</span></span>
                                       </div>
                                       <form class="new_basket_buy_it_now_product" id="new_basket_buy_it_now_product" action="/checkout/baskets/products" accept-charset="UTF-8" data-remote="true" method="post">
                                          <input name="utf8" type="hidden" value="&#x2713;" />
                                          <input value="3521" type="hidden" name="basket_buy_it_now_product[product_id]" id="basket_buy_it_now_product_product_id" />
                                          <div class="quantity-container" data-product-id="3521" data-quantity-adjustment="basket" data-quantity-increment-multiple="1">
                                             <button type="button" class="c-button quantity-button" data-action="quantity#minus"><span>&ndash;</span></button>
                                             <div class="quantity-container__input">
                                                <input type="number"  id="quantity" class="quantity input-text qty text" step="1" min="1" max name="basket_buy_it_now_product[quantity_required]" value="1" title="Qty" size="4" placeholder inputmode="numeric" data-name="quantity-input" />
                                             </div>
                                             <button type="button" class="c-button quantity-button" data-action="quantity#plus"><span>+</span></button>
                                          </div>
                                          <div class="atb-button">
                                             <input type="submit" name="commit" value="Add to Basket" class="c-button no-variation add-to-basket" data-disable-with="Add to Basket" />
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                              <div class="product-card" data-product-container-id="1931" data-bulk-discounts-enabled="true">
                                 <div class="product-card__image">
                                    <a href="/products/50mm-celotex-ga4050-pir-insulation-board-2400mm-x-1200mm">
                                    <img height="188" alt="50mm Celotex GA4050 PIR Insulation Board 2400mm x 1200mm" loading="lazy" src="https://res.cloudinary.com/materials-market/image/upload/q_auto,f_auto/assets//product-images-final/Celotex+PIR+Insulation+Board+-+Photo+(Resized).jpg" />
                                    </a> 
                                 </div>
                                 <div class="product-card__content">
                                    <span class="badge c-products__badge--info">Most Popular</span>
                                    <div class="c-products__stars">
                                       <div class="rating-stars"  title="Rating of this product is 4.95 out of 5."></div>
                                    </div>
                                    <span class="c-products__stars-count">(20)</span>
                                    <a href="/products/50mm-celotex-ga4050-pir-insulation-board-2400mm-x-1200mm">
                                       <h3 class="product-card__heading line-clamp" data-text="50mm Celotex GA4050 PIR Insulation Board 2400mm x 1200mm">
                                          50mm Celotex GA4050 PIR Insulation Board 2400mm x 1200mm
                                       </h3>
                                    </a>
                                 </div>
                                 <div class="product-card__footer">
                                    <div class="c-products__add-to-cart">
                                       <div class="c-products__price l6 s12">
                                          <span data-name="display-price" >£<span data-name="discount-tier" data-discount-range="15-29" data-bulk-price-per-unit="18.01" data-bulk-price-per-unit-inc-vat="21.61">18.01</span></span>
                                          <span data-name="display-price" >£<span data-name="discount-tier" data-discount-range="30-49" data-bulk-price-per-unit="17.83" data-bulk-price-per-unit-inc-vat="21.40">17.83</span></span>
                                          <span data-name="display-price" >£<span data-name="discount-tier" data-discount-range="50-100000000" data-bulk-price-per-unit="17.64" data-bulk-price-per-unit-inc-vat="21.17">17.64</span></span>
                                          <span data-name="display-price">£<span data-adjust-price-with-quantity="false" data-name="product-card-item-price" data-product-price-all-units="18.19" data-product-price-all-units-inc-vat="21.83">18.19</span></span>
                                          <span class="hidden" data-name="saving-tooltip"><span class="tooltip">with bulk discount</span></span>
                                       </div>
                                       <form class="new_basket_buy_it_now_product" id="new_basket_buy_it_now_product" action="/checkout/baskets/products" accept-charset="UTF-8" data-remote="true" method="post">
                                          <input name="utf8" type="hidden" value="&#x2713;" />
                                          <input value="1931" type="hidden" name="basket_buy_it_now_product[product_id]" id="basket_buy_it_now_product_product_id" />
                                          <div class="quantity-container" data-product-id="1931" data-quantity-adjustment="basket" data-quantity-increment-multiple="1">
                                             <button type="button" class="c-button quantity-button" data-action="quantity#minus"><span>&ndash;</span></button>
                                             <div class="quantity-container__input">
                                                <input type="number"  id="quantity" class="quantity input-text qty text" step="1" min="1" max name="basket_buy_it_now_product[quantity_required]" value="1" title="Qty" size="4" placeholder inputmode="numeric" data-name="quantity-input" />
                                             </div>
                                             <button type="button" class="c-button quantity-button" data-action="quantity#plus"><span>+</span></button>
                                          </div>
                                          <div class="atb-button">
                                             <input type="submit" name="commit" value="Add to Basket" class="c-button no-variation add-to-basket" data-disable-with="Add to Basket" />
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="c-products__buttons center-align">
                              <a class="c-button c-button--inline" href="/building-materials/sheet-materials">Shop all Sheet Materials ›</a>
                           </div>
                        </div>
                     </div>
                     <div class="row c-row--margin-default">
                        <div class="c-posts">
                           <h2 class="c-posts__heading">Related Articles</h2>
                           <div class="c-posts__list">
                              <div class="c-posts__item">
                                 <div class="c-posts__background">
                                    <a target="_blank" href="https://materialsmarket.com/articles/osb-or-chipboard-for-loft-flooring/">
                                       <div class="c-posts__image"><img height="188" alt loading="lazy" src="https://res.cloudinary.com/materials-market/images/w_2560,h_1707/v1694428293/shutterstock_1721584708/shutterstock_1721584708-jpg?_i=AA" /></div>
                                    </a>
                                 </div>
                                 <div class="c-posts__content">
                                    <h3 class="c-posts__heading s12">OSB or Chipboard For Loft Flooring?</h3>
                                    <time class="c-posts__date s12">11 September 2023</time>
                                 </div>
                                 <div class="c-posts__buttons">
                                    <a target="_blank" class="c-button c-button--inline" href="https://materialsmarket.com/articles/osb-or-chipboard-for-loft-flooring/">Read more</a>
                                 </div>
                              </div>
                              <div class="c-posts__item">
                                 <div class="c-posts__background">
                                    <a target="_blank" href="https://materialsmarket.com/articles/how-to-board-a-loft/">
                                       <div class="c-posts__image"><img height="188" alt loading="lazy" src="https://res.cloudinary.com/materials-market/images/w_2560,h_1707/v1693400499/shutterstock_1666263238/shutterstock_1666263238-jpg?_i=AA" /></div>
                                    </a>
                                 </div>
                                 <div class="c-posts__content">
                                    <h3 class="c-posts__heading s12">How To Board A Loft</h3>
                                    <time class="c-posts__date s12">30 August 2023</time>
                                 </div>
                                 <div class="c-posts__buttons">
                                    <a target="_blank" class="c-button c-button--inline" href="https://materialsmarket.com/articles/how-to-board-a-loft/">Read more</a>
                                 </div>
                              </div>
                              <div class="c-posts__item">
                                 <div class="c-posts__background">
                                    <a target="_blank" href="https://materialsmarket.com/articles/painting-chipboard-transforming-your-surfaces/">
                                       <div class="c-posts__image"><img height="188" alt loading="lazy" src="https://res.cloudinary.com/materials-market/images/w_2560,h_1440/v1687365129/shutterstock_2154054205/shutterstock_2154054205-jpg?_i=AA" /></div>
                                    </a>
                                 </div>
                                 <div class="c-posts__content">
                                    <h3 class="c-posts__heading s12">Painting Chipboard: Transforming Your Surfaces</h3>
                                    <time class="c-posts__date s12">21 June 2023</time>
                                 </div>
                                 <div class="c-posts__buttons">
                                    <a target="_blank" class="c-button c-button--inline" href="https://materialsmarket.com/articles/painting-chipboard-transforming-your-surfaces/">Read more</a>
                                 </div>
                              </div>
                              <div class="c-posts__item">
                                 <div class="c-posts__background">
                                    <a target="_blank" href="https://materialsmarket.com/articles/chipboard-vs-mdf-unveiling-the-differences-and-making-the-right-choice/">
                                       <div class="c-posts__image"><img height="188" alt loading="lazy" src="https://materialsmarket.kinsta.cloud/app/uploads/2023/06/shutterstock_1935709672-1024x678.jpg" /></div>
                                    </a>
                                 </div>
                                 <div class="c-posts__content">
                                    <h3 class="c-posts__heading s12">Chipboard vs MDF: Unveiling the Differences and Making the Right Choice</h3>
                                    <time class="c-posts__date s12">21 June 2023</time>
                                 </div>
                                 <div class="c-posts__buttons">
                                    <a target="_blank" class="c-button c-button--inline" href="https://materialsmarket.com/articles/chipboard-vs-mdf-unveiling-the-differences-and-making-the-right-choice/">Read more</a>
                                 </div>
                              </div>
                              <div class="c-posts__item">
                                 <div class="c-posts__background">
                                    <a target="_blank" href="https://materialsmarket.com/articles/the-ultimate-diyers-guide-to-laying-chipboard-flooring/">
                                       <div class="c-posts__image"><img height="188" alt loading="lazy" src="https://res.cloudinary.com/materials-market/images/w_2560,h_1447/v1687357492/shutterstock_2316255105/shutterstock_2316255105-jpg?_i=AA" /></div>
                                    </a>
                                 </div>
                                 <div class="c-posts__content">
                                    <h3 class="c-posts__heading s12">DIYers Guide to Laying Chipboard Flooring</h3>
                                    <time class="c-posts__date s12">21 June 2023</time>
                                 </div>
                                 <div class="c-posts__buttons">
                                    <a target="_blank" class="c-button c-button--inline" href="https://materialsmarket.com/articles/the-ultimate-diyers-guide-to-laying-chipboard-flooring/">Read more</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>

         </main>
     
   




	
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps, {})(ProductViewPage);
