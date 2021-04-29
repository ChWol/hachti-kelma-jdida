import React from 'react';
import {Button} from "carbon-components-react";

const Playground = () => {
    return (
        <div style={{paddingTop: '50px'}}>
            Your place to learn and do whatever you feel like
            <br/>
            <br/>
            <Button kind='primary' onClick={() => window.alert('Moufej2a!')}>Try this</Button>
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