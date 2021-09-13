import React from 'react';
import {
    Row,
    Col,
} from 'reactstrap';
import PageBreak from '../../components/PageBreak';
import Section from '../../components/Section';
import SectionHeader from './SectionHeader';
import t from '../../lang/en/t'

const CheckoutBillingDetails = ({ isSameAsDelivery, onChange }) => {
    const onClick = () => {
        onChange && onChange({ isSameAsDelivery: !isSameAsDelivery });
    };

    return <Section>
        <Row className="checkout__section-head">
            <Col className="col-12">
                <SectionHeader title={t('Billing Details')} />
            </Col>
        </Row>
        <Section className="i-delivery">
            <label className="check-box label" htmlFor="billing_same_as_delivery" onClick={onClick}>
                {t('My billing address is the same as above')}
                <input type="checkbox"
                    className="i-delivery-toggle"
                    name="billing_same_as_delivery"
                    defaultChecked={isSameAsDelivery}></input>
                <span className="check-box__inner"></span>
            </label>
            <PageBreak />
        </Section>
    </Section>;
};

export default CheckoutBillingDetails;