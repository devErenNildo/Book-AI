import AvatarImage from "../../atoms/user/AvatarImage";

interface Props {
  img: string;
  name: string;
  email: string;
}

export default function UserInfos({ img, name, email }: Props) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 border-b">
      <AvatarImage src={img} alt={name} width={30} height={30} />
      <div>
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs text-gray-500 truncate max-w-[150px]">{email}</p>
      </div>
    </div>
  );
}
