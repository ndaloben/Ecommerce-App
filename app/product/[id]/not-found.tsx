import Image from "next/image"

export default function NotFound() {
    return (
        <div className="mt-24">
            <Image src="/404.jpg" alt="" width={800} height={800} className="error"/>
        <div className="">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        </div>
        </div>
    );
}