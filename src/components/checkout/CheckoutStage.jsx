import React from 'react';
import { Container } from 'reactstrap';
// import CheckoutKnowYourCustomer from './CheckoutKnowYourCustomer';
import KnowYourCustomer from './KnowYourCustomer';
import CheckoutCardPayment from './CheckoutCardPayment';

const CheckoutStage = ({ save, state, setStep, step }) => {
	const { checkoutStage, paymentOptions } = state;
	const { csrf_token } = checkoutStage;

	const handleSubmit = event => {
		// event.preventDefault();
		console.log('Form Submit: ', event);
		let payload = {};

		const result = Object.keys(event.sections).map(key => {
			const val = event.sections[key];
			Object.keys(val).forEach(i => payload[val[i].action] = val[i].value);
			return payload;
		});
		console.log(result);
	}

	return <Container className="checkout__stage">
		<Container className="container-fluid">
			<form method="POST" data-static-csrf="true" onSubmit={handleSubmit}>
				<input type="hidden" name="_token" value={csrf_token}></input>
				{step === 1 ?
					<KnowYourCustomer state={state} setStep={setStep} save={save} />
					:
					<CheckoutCardPayment paymentOptions={paymentOptions} onPay={() => handleSubmit(state)} />
				}
			</form>
		</Container>
	</Container>;
};

export default CheckoutStage;