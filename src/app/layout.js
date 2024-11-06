import localFont from "next/font/local";
import "./globals.css";

const YekanBakh = localFont({ src: "./fonts/YekanBakh-VF.ttf" });

export const metadata = {
  title: "HamCar",
  description: "internship project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={YekanBakh.className}>{children}</body>
    </html>
  );
}
