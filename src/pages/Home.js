import React from 'react';
import NavBar from '../components/navBar/NavBar';



const  Home= ()=> {
  return (
    <>

    <NavBar/>



   <div className="container">

   <h2>this is the home page</h2>



   <table class="">
<caption itemprop="about">Technical Specification</caption>
<tbody>
<tr><th>Thickness:</th><td><strong>12.5mm</strong></td></tr>
<tr><th>Width:</th><td><strong>1200mm</strong></td></tr>
<tr><th>Length:</th><td><strong>2400mm</strong></td></tr>
<tr><th>Pieces Per Pallet:</th><td><strong>60</strong></td></tr>
<tr><th>Sales Unit:</th><td><strong>Pallet</strong></td></tr>
<tr><th>Sales Unit Coverage:</th><td><strong>172.8m2</strong></td></tr>
<tr><th>Brand:</th><td><strong>Knauf Drywall</strong></td></tr>
<tr><th>Manufacturer's Reference:</th><td><strong>243481</strong></td></tr>
<tr><th>Weight:</th><td><strong>10kg/m2</strong></td></tr>
<tr><th>Thermal Conductivity:</th><td><strong>0.24W/mK</strong></td></tr>
<tr><th>Edge:</th><td><strong>Square</strong></td></tr>
</tbody>
</table>
    </div>


    </>
  )
}

export default Home