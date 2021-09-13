import React, { useEffect, useState } from 'react';
import CheckoutHeader from '../../components/checkout/CheckoutHeader';
import CheckoutSummary from '../../components/checkout/CheckoutSummary';
import CheckoutStage from '../../components/checkout/CheckoutStage';
import t from '../../lang/en/t';

// TODO: validation 
//
// const validationErrors = {
//     "email_address": "Please enter your email address.",
//     "deliver_first_name":  "Please enter your first name.",
//     "deliver_last_name": "Please enter your last name.",
//     "delivery_telephone": "Please enter your contact number.",
//     "delivery_country": "",
//     "delivery_search": "",
//     "delivery_address_1": "Please enter the first line of your address.",
//     "delivery_address_2": "",
//     "delivery_city": "Please enter your town/city.",
//     "delivery_postcode": "Please enter your post/zip code.",
//     "billing_same_as_delivery": "",
//     "billing_first_name":  "Please enter your first name.",
//     "billing_last_name": "Please enter your last name.",
//     "billing_telephone": "Please enter your contact number.",
//     "billing_country": "",
//     "billing_search": "",
//     "billing_address_1": "Please enter the first line of your address.",
//     "billing_address_2": "",
//     "billing_city": "Please enter your town/city.",
//     "billing_postcode":"Please enter your post/zip code." 
// };

const initialState = {
    sections: {
        "Your Details": {
            "email_address":
            {
                title: "email_address",
                action: "email_address",
                value: "chris.clarke@internetfusion.co.uk"
            },
            "delivery_first_name":
            {
                title: "delivery_first_name",
                action: "delivery_first_name",
                value: "Chris"
            },
            "delivery_last_name":
            {
                title: "delivery_last_name",
                action: "delivery_last_name",
                value: "Clarke"
            },
        },
        "Delivery Details": {
            "delivery_telephone":
            {
                title: "delivery_telephone",
                action: "delivery_telephone",
                value: "729947"
            },
            "delivery_country":
            {
                title: "delivery_country",
                action: "delivery_country",
                value: "UK"
            },
            "delivery_search":
            {
                title: "delivery_search",
                action: "delivery_search",
                value: "N1 5DS"
            },
            "delivery_address_1":
            {
                title: "delivery_address_1",
                action: "delivery_address_1",
                value: "Flat 1-3"
            },
            "delivery_address_2":
            {
                title: "delivery_address_2",
                action: "delivery_address_2",
                value: "70 Bridport Place"
            },
            "delivery_city":
            {
                title: "delivery_city",
                action: "delivery_city",
                value: "London"
            },
            "delivery_postcode":
            {
                title: "delivery_postcode",
                action: "delivery_postcode",
                value: "N1 5DS"
            },
        },
        "Billing Address": {
            "billing_same_as_delivery":
            {
                type: 'checkbox',
                title: "billing_same_as_delivery",
                action: "billing_same_as_delivery",
                value: "on"
            },
            "billing_first_name":
            {
                title: "billing_first_name",
                action: "billing_first_name",
                value: "Chris"
            },
            "billing_last_name":
            {
                title: "billing_last_name",
                action: "billing_last_name",
                value: "Clarke"
            },
            "billing_telephone":
            {
                title: "billing_telephone",
                action: "billing_telephone",
                value: "729947"
            },
            "billing_country":
            {
                title: "billing_country",
                action: "billing_country",
                value: "UK"
            },
            "billing_search":
            {
                title: "billing_search",
                action: "billing_search",
                value: "N1 5DS"
            },
            "billing_address_1":
            {
                title: "billing_address_1",
                action: "billing_address_1",
                value: "Flat 1-3"
            },
            "billing_address_2":
            {
                title: "billing_address_2",
                action: "billing_address_2",
                value: "70 Bridport Place"
            },
            "billing_city":
            {
                title: "billing_city",
                action: "billing_city",
                value: "London"
            },
            "billing_postcode":
            {
                title: "billing_postcode",
                action: "billing_postcode",
                value: "N1 5DS"
            },
            "deliveryMethod":
            {
                type: 'checkbox',
                title: "deliveryMethod",
                action: "deliveryMethod",
                value: "on"
            },
        },
    },    
    isSummaryHidden: false,
    selectedAddress: undefined,
    checkoutStage: {
        isSameAsDelivery: true,
        csrf_token: 'f1MGpPtHA25TVxvQ6Rm9u79xgrewdB64Tg3OKYVi',
        fasterOptions: [{
            id: '11',
            title: t('Super 1st Class Delivery'),
            desc: t('Est. Delivery 12th March'),
            price: '£Price'
        }, {
            id: '12',
            title: t('Ultra 2nd Class Delivery'),
            desc: t('Est. Delivery 13th March'),
            price: '£Price'
        }],
        greenerOptions: [{
            id: '21',
            title: t('Sunshine 1st Class Delivery'),
            desc: t('Est. Delivery 12th March'),
            price: '£Price'
        }, {
            id: '22',
            title: t('Breeze 2nd Class Delivery'),
            desc: t('Est. Delivery 13th March'),
            price: '£Price'
        }]
    },
    yourDetails: {
        postcode: 'CB12AA',
        country: 'UK',
        first_name: 'Jon',
        surname: 'Smith',
        email_address: 'jon@smith.com',
        address: 'My house',
        address_line_2: 'My street',
        phone_number: '01234567890',
        addresses: [{
            id: 1,
            title: 'Jon Smith',
            desc: '123 Lavendar Hill',
            address_line_2: 'best house',
            postcode: 'AA1 9ZZ'
        },
        {
            id: 2,
            title: 'Jane Smith',
            desc: '124 Rosemary Close',
            address_line_2: 'smart flat',
            postcode: 'BB2 8YY'
        }]
    },
    paymentOptions: [{
        id: 1,
        onClick: () => { console.log('klarna') },
        title: 'Klarna',
        desc: t('Split the bill with Klarna'),
        selected: false
    }, {
        id: 2,
        onClick: () => { console.log('paypal') },
        title: 'paypal',
        desc: t('The easiest way to spend money'),
        selected: false
    }],
    step: 1,
    checkoutSummary: {
        summary: {
            price: 63.95,
            step: '1/2'
        },
        items: [{
            id: 1,
            price: '63.95',
            title: 'Roxy Kashmir Womens Ski Helmet',
            type: 'Bright White',
            size: 'Medium / 57 - 58 cm',
            qty: '1'
        }, {
            id: 2,
            price: '13.95',
            title: 'Roxy Kashmir Womens Ski Helmet',
            type: 'Bright White',
            size: 'Medium / 57 - 58 cm',
            qty: '9'
        }]
    }
};

const Checkout = () => {
    const [state, save] = useState(initialState);
    const [step, setStep] = useState(state.step);
    const { checkoutStage, yourDetails, checkoutSummary, paymentOptions } = state;
    useEffect(() => {
        // Repaint on change of state
    }, [checkoutStage, yourDetails, checkoutSummary, paymentOptions, step]);
    return <div className="checkout">
        <CheckoutHeader />
        <CheckoutSummary state={state} setStep={setStep} step={step} />
        <CheckoutStage state={state} save={save} setStep={setStep} step={step} />
    </div>
}

export default Checkout;