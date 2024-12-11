import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserProfileProps {
  name: string;
  image?: string;
}

export default function UserProfile({ name, image }: UserProfileProps) {
  return (
    <div className="flex items-center gap-2 p-1 bg-white rounded-lg shadow-sm border">
      <Avatar className="h-6 w-6 border">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-gray-700">{name}</span>
      </div>
    </div>
  );
}
