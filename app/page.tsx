export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center p-8 mt-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Método Raíz TDAH
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl">
        Sistema de liberación biológica en 5 pasos.
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full text-left">
        <p className="text-gray-700 mb-4">
          La base técnica está lista. Estamos construyendo los módulos de los 5 pasos.
        </p>
        <div className="animate-pulse">
          <p className="text-sm text-blue-600 font-semibold">🟢 Estado: Piloto activo</p>
        </div>
      </div>
    </main>
  );
}
