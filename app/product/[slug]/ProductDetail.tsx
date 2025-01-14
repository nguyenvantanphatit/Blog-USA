"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { handleAddToCart } from "@/lib/cartUtils";

interface ProductDetailProps {
  detail: {
    product: {
      id: number;
      name: string;
      description: string;
      price: string;
      quantity: number;
      Category: {
        id: number;
        name: string;
      };
      ProductImages: Array<{
        productId: string;
        imageUrl: string;
        order: string;
      }>;
      Reviews: Array<any>;
    };
    relatedProducts: Array<any>;
  };
}

export default function ProductDetail({ detail }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={detail.product.ProductImages[selectedImage]?.imageUrl || "/placeholder.svg"}
              alt={detail.product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {detail.product.ProductImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  "relative aspect-square overflow-hidden rounded-lg bg-gray-100",
                  selectedImage === index && "ring-2 ring-black"
                )}
              >
                <Image
                  src={image.imageUrl || "/placeholder.svg"}
                  alt={`${detail.product.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{detail.product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-5 w-5",
                      i < 4 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(4.9)</span>
            </div>
            <p className="mt-4 text-2xl font-bold">${detail.product.price}</p>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="font-medium">Available Size</h3>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <Button
                  key={size}
                  variant="outline"
                  className="h-12"
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="font-medium">Available Color</h3>
            <div className="mt-2 flex gap-2">
              <button className="h-8 w-8 rounded-full bg-black ring-2 ring-offset-2" />
              <button className="h-8 w-8 rounded-full bg-gray-500" />
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </Button>
            <span className="w-12 text-center">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </div>

          {/* Add to Cart */}
          <div className="flex gap-4">
            <Button onClick={() => handleAddToCart(detail.product, quantity)} className="flex-1">Add to Cart</Button>
            <Button variant="outline" className="flex-1">Buy Now</Button>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="details" className="mt-8">
            <TabsList>
              <TabsTrigger value="details">The Details</TabsTrigger>
              <TabsTrigger value="ratings">Ratings & Reviews</TabsTrigger>
              <TabsTrigger value="discussion">Discussion</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-4">
              <p className="text-muted-foreground">{detail.product.description}</p>
            </TabsContent>
            <TabsContent value="ratings">
              <div className="space-y-4">
                {detail.product.Reviews.map((review, index) => (
                  <div key={index} className="border-b pb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{review.comment}</span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="discussion">
              <p className="text-muted-foreground">No discussions yet.</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {detail.relatedProducts.map((product) => (
            <Link 
              key={product.id} 
              href={`/product/${product.slug}`}
              className="group"
            >
              <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100 mb-4">
                <Image
                  src={product.ProductImages[0]?.imageUrl || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-sm">{product.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{product.Category.name}</p>
              <p className="font-medium mt-1">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

