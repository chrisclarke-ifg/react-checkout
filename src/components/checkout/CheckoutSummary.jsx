import React, { useState } from 'react';
import CheckoutSummaryOverView from './CheckoutSummaryOverView';
import CheckoutYourDetails from './CheckoutYourDetails';
import CheckoutBasket from './CheckoutBasket';
import SwishyDumpZone from './SwishyDumpZone';

const CheckoutSummary = ({ state, setStep, step }) => {
    const { checkoutSummary, yourDetails, isSummaryHidden } = state;
    const { items, summary } = checkoutSummary;
    const [summaryHidden, setIsSummaryHidden] = useState(isSummaryHidden);

    return <div className="checkout-summary">
        <SwishyDumpZone />
        <CheckoutSummaryOverView {...summary} isSummaryHidden={summaryHidden} setIsSummaryHidden={setIsSummaryHidden} step={step} />
        <CheckoutYourDetails {...yourDetails}  isSummaryHidden={summaryHidden} onEditDetails={() => setStep(1)} />
        <CheckoutBasket isSummaryHidden={summaryHidden} items={items} />
    </div>;
};

export default CheckoutSummary;