import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import PageBreak from '../../components/PageBreak';

const CheckoutHeader = () => (
    <header className="container-fluid checkout-header">
    <Row>
        <Col className="col-12">
        <a title="Surfdome" href="/">
            <img className="checkout-header__logo"
            alt="Surfdome"
            src="https://static-surfdome.imgix.net/assets/ui/logos/surfdome-logo-no-tagline-fb2d388707df9684316ad8aac52640ee.png" />
        </a>
        <img alt="Secure"
            className="checkout-header__icon"
            width="19px"
            height="25px"
            src="/images/shared/checkout/lock.svg" />
            <PageBreak className="hidden-md-up checkout__page-break--header" />
        </Col>
    </Row>
    </header>
);

export default CheckoutHeader;