"use client";

import ProductImage from "@/app/components/ProductImage";
import { Dialog } from "@headlessui/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


function Modal() {
    const [isOpen, setIsOpen] = useState(true);
    const id  = useParams().id;
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        async function fetchProduct() {
            const res = await fetch(`https://fakestoreapi.com/products ${id}`);
            const product = await res.json();
            console.log(product);

        }

    }, [id]);

    return (
        <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
  
        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-10">
            
                <div className="flex gap-x-8 h-96">
                    {product?.image && (
                        <div className="relative w-72 h-full">
                      <ProductImage product={product} fill={true} />  
                      </div>
                    )}
                    <div>
                        <div>
                            <h1 className="font-medium">{product?.title}</h1>
                            <p className='font-medium text-sm'>${product?.price}</p>
                        </div>
                    </div>
                </div>
  
           </Dialog.Panel>
        </div>
      </Dialog>
    );
}

export default Modal