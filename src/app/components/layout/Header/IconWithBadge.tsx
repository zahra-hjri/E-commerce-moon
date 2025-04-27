import Badge from "@/app/components/ui/Badge";

interface IconWithBadgeProps {
  icon: React.ReactNode;
  count: number;
  onClick: () => void;
}

const IconWithBadge = ({ icon, count, onClick }: IconWithBadgeProps) => (
  <div className="relative z-20 cursor-pointer" onClick={onClick}>
    <div className="absolute -top-2 -right-2">
      <Badge color="bg-primary-green">{count}</Badge>
    </div>
    {icon}
  </div>
);

export default IconWithBadge;
