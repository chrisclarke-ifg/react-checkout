import React from 'react';
import { Row, Col } from 'reactstrap';

const PayOption = ({
    id,
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
                <input type="checkbox" name={`payment_option_${id}`} defaultChecked={selected}></input>
                <span className="check-box__inner"></span>
            </label>
        </Col>
    </Row>
};

export default PayOption;