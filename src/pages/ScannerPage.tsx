import { QrcodeErrorCallback, QrcodeSuccessCallback } from "html5-qrcode";
import BarcodeScanner from "../components/BarcodeScanner";
import { useState } from "react";

const ScannerPage = () => {
    const [scannedCode, setScanneedCode] = useState<string | null>(null);

    const handleScanSuccess: QrcodeSuccessCallback = (decodedText, decodedResult) => {
        setScanneedCode(decodedText);
        console.log(`Scanned: ${decodedText}`, decodedResult);
    };

    // Callback for scan errors
    const handleScanError: QrcodeErrorCallback = (error) => {
        console.error('Scan error:', error);
    };

    return (
        <div>
            <h1>Barcode Scanner</h1>
            <BarcodeScanner onScanSuccess={handleScanSuccess} onScanError={handleScanError} />
            {scannedCode && <p>Scanned Code: {scannedCode}</p>}
        </div>
    );
}

export default ScannerPage;