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

const AddressLineItem = ({
    Description,
    Highlight,
    Id,
    Text,
    Type
}) => {
    return <>
        <span className="description">{Description}</span>
        <span className="highlight">{Highlight}</span>
        <span className="id">{Id}</span>
        <span className="text">{Text}</span>
        <span className="type">{Type}</span>
    </>
}

const CheckoutDeliveryDetails = ({
	country,
	phone_number,
	postcode,
	onChange
}) => {
	const [state, setDeliveryDetails] = useState({ country, phone_number, postcode });
	let pca = {
		items: []
	};
	const handleChange = event => {
		console.log('CheckoutDeliveryDetails', event);
		let newState = { ...state };
		
		switch (event.target.name) {
			case 'delivery_country':
				newState.country = event.target.value;
				break;
			case 'delivery_phone_number':
				newState.phone_number = event.target.value;
				break;
			case 'delivery_postcode':
				// TODO: get post code lookup
				newState.postcode = event.target.value;
				break;
			default:
		}

		setDeliveryDetails({ ...newState });
		onChange && onChange({ ...newState });
	}
	return <Section>
		<Row>
			<Col className="col-12">
				<SectionHeader title={t('Delivery details')} />
			</Col>
		</Row>

		<Section className="i-delivery">
			<label className="label hidden-xs-up"
				htmlFor="delivery_country">{t('Country')}</label>
			<select
				id="delivery_country"
				name="delivery_country"
				className="input input-select i-country-input"
				onChange={handleChange}
				defaultValue={state.country || "UK"}
				data-state-input="delivery_state"
				data-pca-field="CountryIso2"
				data-pca-mode="COUNTRY"
				data-state-section="i-delivery-state"
			>
				<option>{t('Country')}</option>
				<option data-has-postcodes="1" data-iso-code="GB" value="UK">{t('United Kingdom')}</option>
				<option data-has-postcodes="1" data-iso-code="AL" value="AL" >{t('Albania')}</option>
				<option data-has-postcodes="1" data-iso-code="AD" value="AD" >{t('Andorra')}</option>
				<option data-has-postcodes="1" data-iso-code="AR" value="AR" >{t('Argentina')}</option>
				<option data-has-postcodes="1" data-iso-code="AU" value="AU" >{t('Australia')}</option>
				<option data-has-postcodes="1" data-iso-code="AT" value="AT" >{t('Austria')}</option>
				<option data-has-postcodes="" data-iso-code="BS" value="BS" >{t('Bahamas')}</option>
				<option data-has-postcodes="1" data-iso-code="BH" value="BH" >{t('Bahrain')}</option>
				<option data-has-postcodes="1" data-iso-code="BY" value="BY" >{t('Belarus')}</option>
				<option data-has-postcodes="1" data-iso-code="BE" value="BE" >{t('Belgium')}</option>
				<option data-has-postcodes="1" data-iso-code="BM" value="BM" >{t('Bermuda')}</option>
				<option data-has-postcodes="1" data-iso-code="BA" value="BA" >{t('Bosnia And Herzegovina')}</option>
				<option data-has-postcodes="1" data-iso-code="BR" value="BR" >{t('Brazil')}</option>
				<option data-has-postcodes="1" data-iso-code="BN" value="BN" >{t('Brunei Darussalam')}</option>
				<option data-has-postcodes="1" data-iso-code="BG" value="BG" >{t('Bulgaria')}</option>
				<option data-has-postcodes="1" data-iso-code="CA" value="CA" >{t('Canada')}</option>
				<option data-has-postcodes="1" data-iso-code="CL" value="CL" >{t('Chile')}</option>
				<option data-has-postcodes="1" data-iso-code="CN" value="CN" >{t('China')}</option>
				<option data-has-postcodes="1" data-iso-code="CO" value="CO" >{t('Colombia')}</option>
				<option data-has-postcodes="1" data-iso-code="HR" value="HR" >{t('Croatia')}</option>
				<option data-has-postcodes="1" data-iso-code="CY" value="CY" >{t('Cyprus')}</option>
				<option data-has-postcodes="1" data-iso-code="CZ" value="CZ" >{t('Czech Republic')}</option>
				<option data-has-postcodes="1" data-iso-code="DK" value="DK" >{t('Denmark')}</option>
				<option data-has-postcodes="1" data-iso-code="EC" value="EC" >{t('Ecuador')}</option>
				<option data-has-postcodes="1" data-iso-code="EE" value="EE" >{t('Estonia')}</option>
				<option data-has-postcodes="1" data-iso-code="FO" value="FO" >{t('Faroe Islands')}</option>
				<option data-has-postcodes="1" data-iso-code="FI" value="FI" >{t('Finland')}</option>
				<option data-has-postcodes="1" data-iso-code="FR" value="FR" >{t('France')}</option>
				<option data-has-postcodes="1" data-iso-code="GE" value="GE" >{t('Georgia')}</option>
				<option data-has-postcodes="1" data-iso-code="DE" value="DE" >{t('Germany')}</option>
				<option data-has-postcodes="1" data-iso-code="GI" value="GI" >{t('Gibraltar')}</option>
				<option data-has-postcodes="1" data-iso-code="GR" value="GR" >{t('Greece')}</option>
				<option data-has-postcodes="1" data-iso-code="GL" value="GL" >{t('Greenland')}</option>
				<option data-has-postcodes="" data-iso-code="HK" value="HK" >{t('Hong Kong')}</option>
				<option data-has-postcodes="1" data-iso-code="HU" value="HU" >{t('Hungary')}</option>
				<option data-has-postcodes="1" data-iso-code="IS" value="IS" >{t('Iceland')}</option>
				<option data-has-postcodes="1" data-iso-code="IN" value="IN" >{t('India')}</option>
				<option data-has-postcodes="1" data-iso-code="ID" value="ID" >{t('Indonesia')}</option>
				<option data-has-postcodes="" data-iso-code="IE" value="IE" >{t('Ireland')}</option>
				<option data-has-postcodes="1" data-iso-code="IL" value="IL" >{t('Israel')}</option>
				<option data-has-postcodes="1" data-iso-code="IT" value="IT" >{t('Italy')}</option>
				<option data-has-postcodes="1" data-iso-code="JP" value="JP" >{t('Japan')}</option>
				<option data-has-postcodes="" data-iso-code="KE" value="KE" >{t('Kenya')}</option>
				<option data-has-postcodes="1" data-iso-code="KR" value="KR" >{t('Korea, Republic Of')}</option>
				<option data-has-postcodes="1" data-iso-code="KG" value="KG" >{t('Kyrgyzstan')}</option>
				<option data-has-postcodes="1" data-iso-code="LV" value="LV" >{t('Latvia')}</option>
				<option data-has-postcodes="1" data-iso-code="LI" value="LI" >{t('Liechtenstein')}</option>
				<option data-has-postcodes="1" data-iso-code="LT" value="LT" >{t('Lithuania')}</option>
				<option data-has-postcodes="1" data-iso-code="LU" value="LU" >{t('Luxembourg')}</option>
				<option data-has-postcodes="" data-iso-code="MO" value="MO" >{t('Macao')}</option>
				<option data-has-postcodes="1" data-iso-code="MK" value="MK" >{t('Macedonia, The Former Yugoslav Republic Of')}</option>
				<option data-has-postcodes="1" data-iso-code="MY" value="MY" >{t('Malaysia')}</option>
				<option data-has-postcodes="1" data-iso-code="MT" value="MT" >{t('Malta')}</option>
				<option data-has-postcodes="1" data-iso-code="MX" value="MX" >{t('Mexico')}</option>
				<option data-has-postcodes="1" data-iso-code="MD" value="MD" >{t('Moldova, Republic Of')}</option>
				<option data-has-postcodes="1" data-iso-code="MC" value="MC" >{t('Monaco')}</option>
				<option data-has-postcodes="1" data-iso-code="ME" value="ME" >{t('Montenegro')}</option>
				<option data-has-postcodes="1" data-iso-code="MA" value="MA" >{t('Morocco')}</option>
				<option data-has-postcodes="1" data-iso-code="MZ" value="MZ" >{t('Mozambique')}</option>
				<option data-has-postcodes="1" data-iso-code="NL" value="NL" >{t('Netherlands')}</option>
				<option data-has-postcodes="1" data-iso-code="NZ" value="NZ" >{t('New Zealand')}</option>
				<option data-has-postcodes="" data-iso-code="NG" value="NG" >{t('Nigeria')}</option>
				<option data-has-postcodes="1" data-iso-code="NO" value="NO" >{t('Norway')}</option>
				<option data-has-postcodes="" data-iso-code="PE" value="PE" >{t('Peru')}</option>
				<option data-has-postcodes="1" data-iso-code="PH" value="PH" >{t('Philippines')}</option>
				<option data-has-postcodes="1" data-iso-code="PL" value="PL" >{t('Poland')}</option>
				<option data-has-postcodes="1" data-iso-code="PT" value="PT" >{t('Portugal')}</option>
				<option data-has-postcodes="1" data-iso-code="PR" value="PR" >{t('Puerto Rico')}</option>
				<option data-has-postcodes="" data-iso-code="QA" value="QA" >{t('Qatar')}</option>
				<option data-has-postcodes="1" data-iso-code="RO" value="RO" >{t('Romania')}</option>
				<option data-has-postcodes="1" data-iso-code="RU" value="RU" >{t('Russian Federation')}</option>
				<option data-has-postcodes="1" data-iso-code="SM" value="SM" >{t('San Marino')}</option>
				<option data-has-postcodes="1" data-iso-code="SA" value="SA" >{t('Saudi Arabia')}</option>
				<option data-has-postcodes="1" data-iso-code="RS" value="RS" >{t('Serbia')}</option>
				<option data-has-postcodes="" data-iso-code="SC" value="SC" >{t('Seychelles')}</option>
				<option data-has-postcodes="1" data-iso-code="SG" value="SG" >{t('Singapore')}</option>
				<option data-has-postcodes="1" data-iso-code="SK" value="SK" >{t('Slovakia')}</option>
				<option data-has-postcodes="1" data-iso-code="SI" value="SI" >{t('Slovenia')}</option>
				<option data-has-postcodes="1" data-iso-code="ZA" value="ZA" >{t('South Africa')}</option>
				<option data-has-postcodes="1" data-iso-code="ES" value="ES" >{t('Spain')}</option>
				<option data-has-postcodes="1" data-iso-code="LK" value="LK" >{t('Sri Lanka')}</option>
				<option data-has-postcodes="1" data-iso-code="SE" value="SE" >{t('Sweden')}</option>
				<option data-has-postcodes="1" data-iso-code="CH" value="CH" >{t('Switzerland')}</option>
				<option data-has-postcodes="1" data-iso-code="TW" value="TW" >{t('Taiwan, Republic Of China')}</option>
				<option data-has-postcodes="1" data-iso-code="TH" value="TH" >{t('Thailand')}</option>
				<option data-has-postcodes="1" data-iso-code="TR" value="TR" >{t('Turkey')}</option>
				<option data-has-postcodes="1" data-iso-code="UA" value="UA" >{t('Ukraine')}</option>
				<option data-has-postcodes="" data-iso-code="AE" value="AE" >{t('United Arab Emirates')}</option>
				<option data-has-postcodes="1" data-iso-code="US" value="US" >{t('USA')}</option>
				<option data-has-postcodes="1" data-iso-code="VN" value="VN" >{t('Viet Nam')}</option>
			</select>

			<span>{t('Search for postal / Zip code or first line of address')}</span>

			<InputWithLabel
				placeholder={t('Postcode')}
				action="delivery_postcode"
				dataTitle="delivery-postcode"
				value={state.postcode}
				onChange={handleChange}
				success={true}
			/>

			<span>{t('Manually enter address here')}</span>

			{pca.items && pca.items.length > 0 &&
				pca.items.map(item => <AddressLineItem key={item.Id} {...item} />)
			}

			<InputWithLabel
				placeholder={t('Evening/Mobile no')}
				action="delivery_telephone"
				dataTitle="delivery-phone"
				value={state.phone_number}
				onChange={handleChange}
				success={true}
			/>

			<PageBreak />
		</Section>
	</Section>;
};

export default CheckoutDeliveryDetails;