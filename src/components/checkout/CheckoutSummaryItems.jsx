import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import PageBreak from '../../components/PageBreak';
import t from '../../lang/en/t';

const CheckoutItem = ({ item }) => {
    const { price, title, type, size, qty, key = '1284723' } = item;
    return <Row className="checkout-summary__items">
        <Col className="col-3 col-md-3">
            <img alt={title}
                srcSet={`https://internetfusion.imgix.net/${key}.jpg?auto=format,compress&amp;cs=srgb&amp;fit=fill&amp;fill=solid&w=130&h=130&dpr=1 1x,
                        https://internetfusion.imgix.net/${key}.jpg?auto=format,compress&amp;cs=srgb&amp;fit=fill&amp;fill=solid&w=130&h=130&dpr=2 2x,
                        https://internetfusion.imgix.net/${key}.jpg?auto=format,compress&amp;cs=srgb&amp;fit=fill&amp;fill=solid&w=130&h=130&dpr=3 3x`}
                src={`https://internetfusion.imgix.net/${key}.jpg?auto=format,compress&amp;cs=srgb&amp;fit=fill&amp;fill=solid?w=130&h=130`}
            />
        </Col>
        <Col className="col-6 col-md-7">
            <h3>{title}</h3>
            <span>{type}</span>
            <br />
            <span>{size}</span>
            <br />
            <span>
                <strong>{t('Qty: ')}{qty}</strong>
            </span>
        </Col>
        <Col className="col-3 col-md-2">
            <h3>
                &pound;{price}
            </h3>
        </Col>
        <Col className="col-12">
            <PageBreak />
        </Col>
    </Row>
};

const CheckoutSummaryItems = ({ items }) => (
    <Container className="container-fluid checkout-summary__items checkout-summary__section">
        {items.map(item => <CheckoutItem key={item.id} item={item} />)}
    </Container>
);

export default CheckoutSummaryItems;