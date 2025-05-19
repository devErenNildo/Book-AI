import AvatarImage from "../../atoms/user/AvatarImage";
import { PropsCardAvatar } from "@/app/types/interface/interfaces";

export default function AvatarCard({ images }: PropsCardAvatar) {
    return (
        <div className="flex justify-center -space-x-4 mb-6">
            {
                images?.map((img, i) => (
                    <AvatarImage src={img.picture.thumbnail} alt={img.name.first} key={i} width={48} height={48} />
                ))
            }
        </div>
    );
}
