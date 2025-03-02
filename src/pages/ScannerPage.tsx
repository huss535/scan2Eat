import { QrcodeErrorCallback, QrcodeSuccessCallback } from "html5-qrcode";
import BarcodeScanner from "../components/BarcodeScanner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ScannerPage = () => {
    /*  const [scannedCode, setScannedCode] = useState<string | null>(null); */
    const navigate = useNavigate();

    const handleScanSuccess: QrcodeSuccessCallback = (decodedText, decodedResult) => {
        /* setScannedCode(decodedText); */

        navigate(`/ingredient/${decodedText}`);
    };

    // Callback for scan errors
    const handleScanError: QrcodeErrorCallback = (error) => {
        console.error('Scan error:', error);
    };


    return (
        <div id="scanner-page">

            <BarcodeScanner onScanSuccess={handleScanSuccess} onScanError={handleScanError} />
            <section>
                <h1 >
                    SCAN
                </h1>
                <h1>
                    UNDERSTAND
                </h1>
                <h1>
                    EAT WELL
                </h1>
            </section>
        </div>
    );
}

export default ScannerPage;