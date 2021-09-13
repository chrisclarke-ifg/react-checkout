import React from 'react';
import {
    Row,
    Col,
} from 'reactstrap';
import PageBreak from '../../components/PageBreak';
import Section from '../../components/Section';
import t from '../../lang/en/t';

// Current rates 
// 
//     "rates": {
//         "TPL-E": {
//             "service": "royal-mail",
//             "logo": "\/shared_images\/icons\/delivery\/royal-mail.png",
//             "value": "TPL-E",
//             "data-priority": "E",
//             "data-rate": "2.99",
//             "data-gbp-rate": "2.99",
//             "title": "Royal Mail Standard Tracked",
//             "etaMessage": "Est. arrival by Fri 30th Apr",
//             "description": "Standard Tracked Service from Royal Mail",
//             "price": "&pound;2.99"
//         },
//      }

// const DeliveryRates = ({
//     service,
//     logo,
//     value,
//     dataPriority,
//     dataRate,
//     dataGbpRate,
//     title,
//     etaMessage,
//     description,
//     price
// }) => {
//     return <>
//         <label className="check-box check-box--detailed">
//             {title} <br />
//             <span className="description">{description}</span>
//             <span className="eta_message">{etaMessage}</span>
//             <span className="right">{price}</span>
//             <input type="radio" name="delivery_delivery_service"></input>
//             <span className="check-box__inner"></span>
//         </label>
//         <PageBreak />
//     </>
// }

const DeliveryOption = ({ id, title, desc, price }) => {
    return <>
        <label className="check-box check-box--detailed">
            {title} <br />
            <span className="desc">{desc}</span>
            <span className="right">{price}</span>
            <input type="radio" name="delivery_delivery_service"></input>
            <span className="check-box__inner"></span>
        </label>
        <PageBreak />
    </>
}

const CheckoutDeliveryOptions = ({ fasterOptions, greenerOptions }) => (
    <Section>
        <Row className="checkout__section-head">
            <Col className="col-12">
                <h3 className="checkout__section-header">{t('Delivery Service')}</h3>
            </Col>
        </Row>
        <Row>
            <Col className="col-12">
                <h4 className="checkout__section-subheader">{t('Greener options')}</h4>
            </Col>
        </Row>
        <Row>
            <Col className="col-12">
                {greenerOptions.map(item => <DeliveryOption key={item.id} {...item} />)}
            </Col>
        </Row>
        <Row>
            <Col className="col-12">
                <h4 className="checkout__section-subheader">{t('Faster options')}</h4>
            </Col>
        </Row>
        <Row>
            <Col className="col-12">
                {fasterOptions.map(item => <DeliveryOption key={item.id} {...item} />)}
            </Col>
        </Row>
    </Section>
);

export default CheckoutDeliveryOptions;