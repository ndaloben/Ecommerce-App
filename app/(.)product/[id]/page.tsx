"use client";

import ProductImage from "@/app/components/ProductImage";
import { Dialog } from "@headlessui/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


function Modal() {
    const [isOpen, setIsOpen] = useState(true);

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
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
            <Dialog.Title>Complete your order</Dialog.Title>
  
            {/* ... */}
          </Dialog.Panel>
        </div>
      </Dialog>
    );
}

export default Modal