export default function CartPage() {
  return (
    <main className="min-h-[60vh] bg-gradient-to-br from-white via-[#f5f7fb] to-[#eef6f3] py-16">
      <div className="container mx-auto px-6 space-y-6 text-center">
        <p className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#0b7b69]/10 text-[#0b7b69] text-xs font-semibold uppercase tracking-[0.3em]">
          Cart
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-[#0f172a]">Your bag is waiting</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">Cart page placeholder. Plug in your checkout flow here.</p>
      </div>
    </main>
  );
}
