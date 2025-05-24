export const metadata = {
  title: 'Bienvenidos a E-Mart',
  description: 'Compra y vende a tu manera',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
