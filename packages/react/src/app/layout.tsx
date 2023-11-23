import "../styles/globals.css";

export const metadata = {
  title: "Kafka ETL",
  description: "Visualize Kafka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
