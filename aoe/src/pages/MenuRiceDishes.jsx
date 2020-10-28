import React from 'react';
import { Image, } from 'react-bootstrap';

import YakinikuDeco from '../assets/YakinikuDeco.svg';

export const RiceDishes = ({data}) => {
    return (
        <div>
            <Image src={YakinikuDeco} alt="Logo" fluid />
            <h1>{data.cardTitle}</h1>
        </div>
    );
}