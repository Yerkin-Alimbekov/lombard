import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata = {
  title: "Автоломбард Прогресс с правом вождения",
  description: "Кредиты под залог авто",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru-KZ">
      <body className={`antialiased ${inter.variable} ${bebasNeue.variable}`}>
        {children}
      </body>
    </html>
  );
}
