interface PageProps {
  params: { title: string };
}

export default async function CategoryPage({ params }: PageProps) {
  const { title } = await params;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Category: {title}</h1>

      {title === "facial_care" && <p>สินค้าดูแลผิวหน้า</p>}
      {title === "cosmetics" && <p>สินค้าประเภทเครื่องสำอาง</p>}

      <a
        href="/"
        className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        กลับไปหน้า Home
      </a>
    </div>
  );
}
