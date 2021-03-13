import React from 'react';
import {Button} from "carbon-components-react";

const AboutPage = () => {
    return (
        <div style={{paddingTop: '50px'}}>
            <p>This website is built to learn. Anyways, if you feel like it, you can send me money via PayPal.</p>
            <a href='https://www.paypal.me/chrw0'>
                <Button kind='primary'>Send money </Button>
            </a>
        </div>
    );
};

export default AboutPage;