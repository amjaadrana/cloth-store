import ProductItem from "@/components/prouduts/ProductItem";
import productService from "@/lib/services/productService";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const featuredProducts = await productService.getFeatured()
  const latestProducts = await productService.getLatest()
  return (
    <>
    <div>
      {featuredProducts.map((product , index) => (
        <div key={product._id}
        id={`product-${index}`}
        className="carousel-item"
        >
          <Link href={`/products/${product.slug}`}>
            <Image
              src={product.image}
              alt={product.name}
              width={1000}
              height={500}
              />
          </Link>

                <div>
                  <a href={`#slide-${
                    index === 0 ? featuredProducts.length - 1 : index - 1}`}
                    className="btn btn-circle"
                    ></a>

                </div>

          </div>
      ))}
    </div>
    <h2 className="text-2xl py-2">Latest Products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {latestProducts.map((product) => (
          <ProductItem key={product.slug} product={convertDocToObj(product)} />
        ))}
      </div>
      </>
  );
}
