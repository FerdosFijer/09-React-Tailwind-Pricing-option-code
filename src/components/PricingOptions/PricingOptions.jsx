import React, { use } from 'react';
import DaisyCard from '../PricingCard/DaisyCard';
// import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);
    // console.log(pricingData);
    
    return (
        <div >
            <h2 className='text-5xl mx-auto'>Get our Membership</h2>
            <div className='grid md:grid-cols-3 gap-4 w-11/12 mx-auto'>
                {
                pricingData.map(pricing => <DaisyCard pricing={pricing}> </DaisyCard> )
                }
            </div>
        </div>
    );
};

export default PricingOptions;