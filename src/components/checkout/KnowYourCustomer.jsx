import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import InputWithLabel from '../../components/InputWithLabel';
import Section from '../../components/Section';
import t from '../../lang/en/t';
import SectionHeader from './SectionHeader';
import getShipping from '../../services/getShipping';


const SimpleField = ({ title, value, handleChange, action, type }) => {
    switch (type) {
        case 'checkbox':
            return <label className="check-box label" htmlFor={action} onClick={handleChange}>
                {title}
                <input type="checkbox"
                    className="i-delivery-toggle"
                    name={action}
                    defaultChecked={value === 'on'}></input>
                <span className="check-box__inner"></span>
            </label>;
        case '':
        default:
            return <InputWithLabel
                placeholder={t(title)}
                action={action}
                dataTitle="checkout-your-details-firstname"
                value={value}
                onChange={handleChange}
                success={true}
            />

    }
}

const KnowYourCustomer = ({ state, setStep, save, ...rest }) => {
    const { sections } = state;
    const [content, setContent] = useState({});
    
    const getRates = getShipping({
        bJSON: 'true',
        mode: 'get_delivery',
        city: 'London',
        countryID: '1',
        postcode: sections?.['Delivery Details']?.delivery_postcode?.value,
        arrJSONBasketItems: '{"1113213":1}'
    });
    
    const handleChange = ({ event, section, field }) => {
        const newState = { ...state };
        const newSection = { ...section };

        newSection.value = event.target.value;
        newState.sections[field][section.title] = newSection;
        if (sections?.['Delivery Details']?.delivery_postcode?.value !== '') {
            getRates.then(data => setContent(data.rates));
        }
        save(newState);
    }
    return <>
        {Object.keys(sections).map(field => {
            return <Section key={field}>
                <SectionHeader title={field} />
                {Object.keys(sections[field]).map(i => <Row key={sections[field][i].action}>
                    <Col className="col-12">
                        <SimpleField
                            handleChange={(event) => handleChange({ event, section: sections[field][i], field })}
                            {...sections[field][i]}
                        />
                    </Col>
                </Row>)}
            </Section>
        })}
        <Section>
            <Row>
                <Col className="col-md-8 offset-md-2">
                    <span>Rates</span>
                    <pre>{JSON.stringify(content)}</pre>
                </Col>
            </Row>
        </Section>
        <Section>
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
        </Section>
    </>
}

export default KnowYourCustomer;