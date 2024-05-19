// src/components/QRCodeGenerator.js
import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ value,size }) => {
  return <QRCode size={size} value={value} />;
};

export default QRCodeGenerator;
