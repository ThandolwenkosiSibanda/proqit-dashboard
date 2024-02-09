import { useQuery } from '@apollo/client';
import React from 'react';
import { PRODUCTS_QUERY } from '../../gql/Query';







const Story = () => {

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

            <div className="c-products c-products--slider row"  >
     

     <p>Story</p>
            </div>
            


		</>
	);
};



export default Story;
