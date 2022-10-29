import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode'
import './App.css'

function App() {
    const [link, setLink] = useState('Fabra Code');
    const [qrcodeLink, setQrcodeLink] = useState('');

    function handleQrcode(e) {
        setLink(e.target.value);
        handleGenerate(e.target.value);
    }

    function handleGenerate(linkURL) {
        QRCodeLink.toDataURL(linkURL, {
            width: 800,
            margin: 3,
        }, function (err, url){
            if (err) return console.error(err, 'Opss tivemos um problema');
            setQrcodeLink(url);
        })
    }

    return (
        <div className="container">
            <div className="logo">
                <img src="logo.png" alt="Fabra Code"/>
            </div>

            <div className="box">
                <div className="qr-code">
                    <QRCode
                        size={280}
                        value={link}
                    />
                </div>
                
                <div className="box-input">
                    <input
                        className="input"
                        placeholder="Digite um texto"
                        onChange={ (e) => handleQrcode(e)}
                    />
                    <a href={qrcodeLink} download={`qrcode.png`}>Baixar QR Code</a>
                </div>
            </div>
        </div>
    )
}

export default App
