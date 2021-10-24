import { Button } from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';

export default function Calculators() {
    return (
        <div>
            <h2>Kalkulatory</h2>
            <p><Link to='/kwadrat'><Button>Kwadrat</Button></Link></p>
            <p><Link to='/prostokat'><Button>Prostokąt</Button></Link></p>
            <p><Link to='/rownoleglobok'><Button>Równoległobok</Button></Link></p>
            <p><Link to='/romb'><Button>Romb</Button></Link></p>
            <p><Link to='/cisnienieHydro'><Button>Ciśnienie hydrostatyczne</Button></Link></p>
        </div>
    )
}
