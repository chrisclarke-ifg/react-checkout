import React from 'react';
import { Col, Row } from 'reactstrap';
import SectionHeader from './SectionHeader';
import Section from '../../components/Section';
import t from '../../lang/en/t';

const CheckoutSummaryOverView = ({
    price = 9.99,
    step = 1,
    isSummaryHidden,
    setIsSummaryHidden
}) => (
    <Section className="container-fluid checkout-summary__overview">
        <Row>
            <Col className="col-6">
                <SectionHeader title={t('Secure Checkout')} />
            </Col>
            <Col className="align-right text-large col-6">
                <p>
                    {t('Order Total')}
                    <strong className="checkout-summary__price--total">
                        &pound;{price}
                    </strong>
                </p>
            </Col>
        </Row>
        <Row>
            <Col className="col-6">
                <p>
                    {t('Step:')}
                    <strong>{step}/2</strong>
                </p>
            </Col>
            <Col className="col-6 align-right">
                {isSummaryHidden ?
                    <button className="btn btn--link i-show-loading"
                        onClick={() => setIsSummaryHidden(!isSummaryHidden)}>
                        {t('Show Summary')}
                    </button>
                    :
                    <button className="btn btn--link i-show-loading"
                        onClick={() => setIsSummaryHidden(!isSummaryHidden)}>
                        {t('Hide Summary')}
                    </button>
                }
            </Col>
        </Row>
    </Section>
);

export default CheckoutSummaryOverView;