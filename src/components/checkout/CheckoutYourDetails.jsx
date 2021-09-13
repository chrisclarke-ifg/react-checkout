import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import PageBreak from '../../components/PageBreak';
import SectionHeader from './SectionHeader';
import t from '../../lang/en/t';

const CheckoutYourDetails = ({
    first_name = '',
    surname = '',
    email_address = '',
    address = '',
    address_line_2 = '',
    phone_number = '',
    onEditDetails,
    isSummaryHidden
}) => {
    const customer_name = `${first_name} ${surname}`;
    const customer_email = email_address;

    return isSummaryHidden ? <></> :
        <>
            <Container className="container-fluid checkout-summary__head">
                <Row className="row checkout__section-head">
                    <Col className="col-6 flex-vert-align">
                        <SectionHeader title={t('Delivery Details')} />
                    </Col>
                </Row>
            </Container>
            <Container className="container-fluid checkout-summary__section">
                <Row>
                    <Col className="col-6 col-md-7">
                        <h3>{t('Personal Details')}</h3>
                        <span>{customer_name}</span>
                        <br />
                        <span>{customer_email}</span>
                        <br />
                    </Col>
                    <Col className="col-3 col-md-2">
                        <button className="btn btn--link i-show-loading"
                            onClick={() => {
                                onEditDetails()
                            }}>
                            {t('Edit Details')}
                        </button>
                    </Col>
                    <Col className="col-12">
                        <PageBreak />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-6 col-md-7">
                        <h3>{t('Delivery Address')}</h3>
                        <span>{address}</span>
                        <br />
                        <span>{address_line_2}</span>
                        <br />
                    </Col>
                    <Col className="col-3 col-md-2">
                        <button className="btn btn--link i-show-loading"
                            onClick={() => {
                                onEditDetails()
                            }}>
                            {t('Edit Details')}
                        </button>
                    </Col>
                    <Col className="col-12">
                        <PageBreak />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-6 col-md-7">
                        <h3>{t('Phone Number')}</h3>
                        <span>{phone_number}</span>
                        <br />
                    </Col>
                    <Col className="col-3 col-md-2">
                        <button className="btn btn--link i-show-loading"
                            onClick={() => {
                                onEditDetails()
                            }}>
                            {t('Edit Details')}
                        </button>
                    </Col>
                    <Col className="col-12">
                        <PageBreak />
                    </Col>
                </Row>
            </Container>
        </>;
};

export default CheckoutYourDetails;