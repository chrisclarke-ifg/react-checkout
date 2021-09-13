import React, { useState } from 'react';
import {
	Row,
	Col,
} from 'reactstrap';
import PageBreak from '../../components/PageBreak';
import Section from '../../components/Section';
import InputWithLabel from '../../components/InputWithLabel';
import SectionHeader from './SectionHeader';
import t from '../../lang/en/t';

const CheckoutDetails = ({
	onChange,
	email_address = '',
	first_name = '',
	surname = ''
}) => {
	const [state, setState] = useState({
		email_address: email_address,
		first_name: first_name,
		surname: surname
	});
	const handleChange = event => {
		const value = event.target.value;
		const key = event.target.name;
		const newState = { ...state, [key]: value };

		setState(newState);
		onChange && onChange(newState);
	};

	return <Section className="checkout-details">
		<Row className="row checkout__section-head">
			<Col className="col-6 flex-vert-align">
				<SectionHeader title={t('Your Details')} />
			</Col>
			<Col className="col-3 flex-vert-align">
				<button type="button"
					className="btn btn--link i-show-loading">
					{t('Already have an account?')}
				</button>
			</Col>
			<Col className="col-3 flex-vert-align flex-end">
				<button type="button"
					name="click-here-to-login"
					className="btn btn--primary i-show-loading"
					data-cy="click-here-to-login-btn">
					{t('Log in')}
				</button>
			</Col>
		</Row>
		<Row>
			<Col className="col-12">
				<label className="label hidden-xs-up" htmlFor="email_address">
					{t('Email')}
				</label>
				<input name="email_address"
					placeholder="Email"
					type="email"
					className="input login__input i-track input--success"
					data-cy="checkout-your-details-email"
					defaultValue={state.email_address}
					onChange={handleChange}
				/>
			</Col>
			<Col className="col-12">
				<InputWithLabel
					placeholder={t('First name')}
					action="first_name"
					dataTitle="checkout-your-details-firstname"
					value={state.first_name}
					onChange={handleChange}
					success={true}
				/>
			</Col>
			<Col className="col-12">
				<InputWithLabel
					action="surname"
					placeholder={t('Surname')}
					dataTitle="checkout-your-details-surname"
					value={state.surname}
					onChange={handleChange}
					success={true}
				/>
				<PageBreak />
			</Col>
		</Row>
	</Section>;
};

export default CheckoutDetails;