import Image from "next/image";
import image from "@/public/loading.gif"

export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-background">
            <Image src={image} alt="Carregando..." className="w-32 h-32" />
        </div>
    );
}