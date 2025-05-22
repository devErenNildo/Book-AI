import AvatarGallery from "../avatarGallery/AvatarGallery"
import Comunnity from "../../molecules/comunnity/Comunnity"

export default function ComunnitySection() {
    return (
        <section className="py-16 text-center bg-foreground w-full">
            <AvatarGallery />
            <Comunnity />
        </section>
    );
}