import { getProductDetails, getProducts } from "@/lib/api";
import ProductDetail from "./ProductDetail";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product : any) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await getProductDetails(params.slug);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.imageUrl,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailsPage({ params }: { params: { slug: string } }) {
  const product = await getProductDetails(params.slug);
  if (!product) {
    notFound();
  }
  return <ProductDetail detail={product} />;
}