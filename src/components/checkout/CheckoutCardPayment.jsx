import React from 'react';
import { Col, Row } from 'reactstrap';
import Section from '../../components/Section';
import InputWithLabel from '../../components/InputWithLabel';
import PayOption from '../../components/PayOption';
import SectionHeader from './SectionHeader';
import t from '../../lang/en/t';

const MarkettingOptin = ({
    onClick,
    title,
    desc,
    selected
}) => {
    return <Row>
        <Col className="col-12">
            <label className="check-box check-box--detailed" onClick={onClick}>
                {title} <br />
                <span className="desc">{desc}</span>
                <input type="checkbox" name={`marketting_optin`} defaultChecked={selected}></input>
                <span className="check-box__inner"></span>
            </label>
        </Col>
    </Row>
};

const PaymentOptions = ({ options }) => {
    return options.length === 0 ?
        <></> :
        options.map(option => <PayOption key={option.id} {...option} />)
};

const CheckoutCardPayment = ({
    paymentOptions,
    onPay
}) => {
    return <Section>
        <Row>
            <Col className="col-12">
                <SectionHeader title={t('Select Payment Method')} />
            </Col>
        </Row>
        <Row>
            <Col className="col-12">
                <InputWithLabel placeholder={t('Long Card Number')} action="long_card_number" dataTitle="long_card_number" success={true} />
            </Col>
        </Row>
        <Row>
            <Col className="col-12">
                <InputWithLabel placeholder={t('Card Holder Name')} action="card_holder_name" dataTitle="card_holder_name" success={true} />
            </Col>
        </Row>
        <Row>
            <Col className="col-6">
                <InputWithLabel placeholder={t('Expiry Date')} action="expiry_date" dataTitle="expiry_date" success={true} />
            </Col>
            <Col className="col-6">
                <InputWithLabel placeholder={t('CVV')} action="cvv" dataTitle="cvv" success={true} />
                <span>{t('Where is this?')}</span>
            </Col>
        </Row>
        <Row>
            <Col className="col-md-8 offset-md-2">
                <button type="button"
                    name="confirm"
                    className="btn btn--primary btn--block checkout__btn i-show-loading"
                    data-cy="confirm-and-pay-btn"
                    onClick={() => onPay()}>
                    {t('Confirm and Pay')}
                </button>
            </Col>
        </Row>
        <MarkettingOptin title={t('Marketting opt in checkbox ')} 
            onClick={() => console.log('marketting selected')}
            desc={t('Please select to opt in to marketting notifications')}
            selected={false}
        />
        <PaymentOptions options={paymentOptions} />
    </Section>;
};

export default CheckoutCardPayment;