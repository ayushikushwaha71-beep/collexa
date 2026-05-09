export default function Home() {
  return (
    <main className="min-h-screen bg-white px-10 py-20">
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-6xl font-bold text-black">
          Collexa
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl">
          Discover, compare and choose the best colleges for your future.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-xl">
            Explore Colleges
          </button>

          <button className="border border-black px-6 py-3 rounded-xl">
            Compare Colleges
          </button>
        </div>

      </div>
    </main>
  );
}