import React, {useState, useEffect} from 'react';
import { Row, Col } from 'reactstrap';
import CheckoutDeliveryOptions from './CheckoutDeliveryOptions';
import CheckoutDetails from './CheckoutDetails';
import CheckoutDeliveryDetails from './CheckoutDeliveryDetails';
import CheckoutBillingDetails from './CheckoutBillingDetails';
import CheckoutSavedAddress from './CheckoutSavedAddress';
import t from '../../lang/en/t';

const CheckoutKnowYourCustomer = ({
    save,
    state,
    setStep
}) => {
    const { csrf_token, checkoutStage, yourDetails, selectedAddress } = state;
    const { fasterOptions, greenerOptions, isSameAsDelivery } = checkoutStage;
    const { addresses } = yourDetails;
    const [details, setDetails] = useState(yourDetails);
    
    const setDeliveryDetails = newState => {
        setDetails(newState);
    }

    const setSameAddress = event => {
        const newState = { ...state }
        newState.checkoutStage.isSameAsDelivery = event.isSameAsDelivery;
        console.log('CheckoutKnowYourCustomer - setSameAddress: ', { eventValue: event.isSameAsDelivery,  });
        save(newState);
    }

    const updateDetails = (update) => {
        const newDetails = {...details, ...update};
        const newState = { ...state }
        console.log('CheckoutKnowYourCustomer - updateDetails: ', update);
        newState.checkoutStage = { csrf_token, fasterOptions, greenerOptions, isSameAsDelivery };

        if (selectedAddress > 0) {
            const newSelection = addresses.find((item) => { return (item.id === selectedAddress)} );

            newDetails.first_name = newSelection.title.split(' ')[0];
            newDetails.surname = newSelection.title.split(' ')[1];
            newDetails.address= newSelection.desc;
            newDetails.address_line_2 = newSelection.address_line_2;
        }

        newState.yourDetails = { ...newDetails, addresses };
        save(newState);
    };
    
    const setSavedAddress = event => {
        console.log('CheckoutKnowYourCustomer setSavedAddress: ', event);
        // TODO: Update the saved address details
        const newState = { ...state };
        const newSelection = addresses.find((item) => { return (item.id === event.selectedAddress)} );

        console.log('Address Details for ID: ', newSelection);
        
        if(newSelection === undefined) { // No saved address selected
            save(newState);
            
            return;
        }

        const newDetails = { ...details };
        newDetails.first_name = newSelection.title.split(' ')[0];
        newDetails.surname = newSelection.title.split(' ')[1];
        newDetails.address= newSelection.desc;
        newDetails.address_line_2 = newSelection.address_line_2;
        
        newState.yourDetails = { ...newDetails };
        newState.selectedAddress = event.selectedAddress;

        save(newState);
    }

    const setDeliveryOptions = event => {
        console.log('CheckoutKnowYourCustomer setDeliveryOptions: ', event);
        // TODO: add this update the delivery options
        const newState = { ...state }
        newState.checkoutStage = { csrf_token, fasterOptions, greenerOptions, isSameAsDelivery };
        newState.yourDetails = { ...details, addresses };
        // newState.checkoutStage. = event.;

        save(newState);
    }

    useEffect(()=>{
        // Repaint if state changed
    },[
        yourDetails, isSameAsDelivery
    ]);

    return <>
        <CheckoutDetails
            {...details}
            onChange={updateDetails}
        />
        <CheckoutSavedAddress
            addresses={addresses}
            selectedAddress={selectedAddress}
            onChange={setSavedAddress}
        />
        <CheckoutDeliveryDetails
            country={details.country}
            phone_number={details.phone_number}
            postcode={details.postcode}
            onChange={setDeliveryDetails}
        />
        <CheckoutBillingDetails
            isSameAsDelivery={isSameAsDelivery}
            onChange={setSameAddress}
        />
        <CheckoutDeliveryOptions
            fasterOptions={fasterOptions}
            greenerOptions={greenerOptions}
            onChange={setDeliveryOptions}
        />
        <Row>
            <Col className="col-md-8 offset-md-2">
                <button type="button"
                    name="continue-to-payment"
                    onClick={() => setStep(2)}
                    className="btn btn--primary btn--block checkout__btn i-show-loading"
                    data-cy="continue-to-delivery-btn">
                    {t('Continue To Payment')}
                </button>
            </Col>
        </Row>
    </>;
}

export default CheckoutKnowYourCustomer;