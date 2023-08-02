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
        className='relative z-50'
        >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true">
                
            </div>
        </Dialog>
    );
}