import React, {useState} from 'react';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'
import {Button, Tile} from "carbon-components-react";
import alphabetConverter from "../../alphabetConverter";

const Translator = () => {
    const {transcript, resetTranscript} = useSpeechRecognition();
    const [recording, setRecording] = useState(false);

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return <div style={{paddingTop: '50px'}}>
            Use Chrome Browser
        </div>
    }

    function start() {
        SpeechRecognition.startListening({continuous: true, language: 'ar-TN'});
        setRecording(true);
    }

    function stop() {
        SpeechRecognition.stopListening();
        setRecording(false);
    }

    return (
        <div style={{paddingTop: '50px'}}>
            <div style={{paddingTop: '7px'}}>
                <Button onClick={() => start()} disabled={recording}>
                    Start</Button>
                <Button onClick={() => stop()} disabled={!recording}>
                    Stop
                </Button>
                <Button kind='secondary' onClick={resetTranscript}>
                    Reset
                </Button>
                <Tile style={{width: "40%", marginTop: "1em"}}>
                    <b>Tunisian</b><br/><br/>
                    {transcript}
                </Tile>
                <Tile style={{width: "40%", marginTop: "1em"}}>
                    <b>German</b><br/><br/>
                    {transcript}
                </Tile>
            </div>
        </div>
    );
};

export default Translator;