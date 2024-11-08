import productService from "@/lib/services/productService"

export async function generateMetadata({
    params,
  }: {
    params: { slug: string }
  }) {
    const product = await productService.getBySlug(params.slug)
    if (!product) {
      return { title: 'Product not found' }
    }
    return {
      title: product.name,
      description: product.description,
    }
  }