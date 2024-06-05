import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[180px] w-[190px] rounded-sm" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[190px]" />
        <Skeleton className="h-4 w-[190px]" />
        <Skeleton className="h-4 w-[190px]" />
      </div>
    </div>
  );
}
