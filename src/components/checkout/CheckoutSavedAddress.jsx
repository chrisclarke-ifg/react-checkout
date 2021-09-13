import React, { useState } from 'react';
import {
    Row,
    Col,
} from 'reactstrap';
import PageBreak from '../../components/PageBreak';
import Section from '../../components/Section';
import SectionHeader from './SectionHeader';
import t from '../../lang/en/t';

const NoAddresses = () => {
    return <div>
        {t('No saved addresses found')}
    </div>
};

const Address = ({ id, title, desc, postcode, selected, onClick }) => {
    return <>
        <label key={id} className="check-box check-box--detailed" onClick={onClick}>
            {title} <br />
            <span className="desc">{desc}</span><br />
            <span className="postcode">{postcode}</span><br />
            <input type="checkbox" name="saved_address" defaultChecked={selected}></input>
            <span className="check-box__inner"></span>
        </label>
        <PageBreak />
    </>
};

const CheckoutSavedAddress = ({
    selectedAddress = 1,
    addresses,
    onChange
}) => {
    const [addressID, setChecked] = useState(selectedAddress);
    const onClick = addressID => {
        console.log('CheckoutSavedAddress:', addressID);

        if(addressID === selectedAddress) { // Deselect the option
            setChecked(0);
            onChange && onChange({ selectedAddress: 0 });
        } else {
            setChecked(addressID);
            onChange && onChange({ selectedAddress: addressID });
        }
    }

    return <Section>
        <Row className="checkout__section-head">
            <Col className="col-12">
                <SectionHeader title={t('Select Saved Address')} />
            </Col>
        </Row>
        <Section className="i-delivery">
            {(addresses === undefined || addresses.length === 0) ?
                <NoAddresses /> :
                addresses.map(address =>
                    <Address
                        key={address.id}
                        {...address}
                        selected={address.id === addressID}
                        onClick={() => onClick(address.id)}
                    />
                )
            }
        </Section>
    </Section>;
};

export default CheckoutSavedAddress;