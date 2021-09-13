import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import CheckoutSectionHeader from './CheckoutSectionHeader';
import CheckoutSummaryItems from './CheckoutSummaryItems';
import t from '../../lang/en/t';

const CheckoutBasket = ({ isSummaryHidden, items }) => {
    return !isSummaryHidden ? <>
        <Container className="container-fluid checkout-summary__head">
            <Row className="row checkout__section-head">
                <Col className="col-6 flex-vert-align">
                    <CheckoutSectionHeader title={t('Your basket')} />
                </Col>
                <Col className="col-6 flex-vert-align flex-end">
                    <a href="/order"
                        color="link"
                        className="nav-link"
                        title={t('Edit Basket')}>
                        {t('Edit Basket')}
                    </a>
                </Col>
            </Row>
        </Container>
        <CheckoutSummaryItems items={items} />
    </>
    : <></>;
};

export default CheckoutBasket;