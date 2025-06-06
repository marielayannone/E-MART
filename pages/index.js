import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-orange-500 text-white text-center py-6">
        <h1 className="text-4xl font-bold">Bienvenidos a E-Mart</h1>
        <p className="text-lg mt-2">Compra y vende a tu manera</p>
        <Link href="/register">
          <button className="mt-4 bg-white text-orange-600 font-semibold py-2 px-4 rounded hover:bg-orange-100">
            Registrarse
          </button>
        </Link>
        <Link href="/login">
          <button className="mt-2 bg-white text-orange-600 font-semibold py-2 px-4 rounded hover:bg-orange-100">
            Iniciar sesión
          </button>
        </Link>
      </header>
    </div>
  );
}