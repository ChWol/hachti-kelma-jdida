import React, {useState} from 'react';
import {Button} from "carbon-components-react";

const Playground = () => {
    const [number, setNumber] = useState(1);

    function click() {
        window.alert('test!');
        setNumber(number+1);
    }

    return (
        <div style={{paddingTop: '50px'}}>
            Your place to learn and do whatever you feel like
            <br/>
            <br/>
            <Button kind='primary' onClick={() => click()}>Counter: {number}</Button>
            <ul>
                <li>
                    Ideen: Ähnliche Wörter vorschlagen bzw. "meinten sie..."
                </li>
                <li>
                    Texteingabe filtern in String Liste und Übersetzungen mappen
                </li>
                <li>
                    Aussprache oder Meta Informationen ausklappbar
                </li>
                <li>
                    Trainingsmodus
                </li>
            </ul>
        </div>
    );
};

export default Playground;