"use client";

import { QRCodeSVG } from "qrcode.react";

// Google Maps listing for Lung Disease Specialists
const GOOGLE_REVIEW_URL = "https://www.google.com/maps?cid=15905943121519007762";

export default function ReviewQRCode({ size = 160 }: { size?: number }) {
  return (
    <QRCodeSVG
      value={GOOGLE_REVIEW_URL}
      size={size}
      bgColor="#ffffff"
      fgColor="#1a3888"
      level="M"
    />
  );
}
