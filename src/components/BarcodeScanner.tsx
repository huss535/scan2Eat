import { Html5QrcodeScanner, QrcodeSuccessCallback, QrcodeErrorCallback } from "html5-qrcode";
import { useEffect } from "react";

interface BarcodeScannerProps {
    onScanSuccess: QrcodeSuccessCallback,
    onScanError: QrcodeErrorCallback
}

const BarcodeScanner = ({ onScanSuccess, onScanError }: BarcodeScannerProps) => {

    useEffect(() => {

        const qrCodeScanner = new Html5QrcodeScanner(
            'barcode-scanner', // ID of the HTML element to render the scanner
            {
                qrbox: {
                    width: 250,
                    height: 250,
                },
                fps: 5,
                disableFlip: true, // Disable flipping the camera feed
                supportedScanTypes: [], // Disable scan type selection
            },
            false // Verbose mode (set to true for debugging)
        );

        qrCodeScanner.render(onScanSuccess, onScanError);

        return () => {
            qrCodeScanner.clear();
        };
    });



    return <div id="barcode-scanner" style={{ width: '100%' }}></div>;

};

export default BarcodeScanner;