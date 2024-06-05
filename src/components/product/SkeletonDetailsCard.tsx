import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonDetailsCard() {
  return (
    <div className="mb-10 flex flex-col justify-between lg:flex-row lg:gap-10">
      <div>
        <div className="flex flex-col-reverse gap-7 lg:max-w-[600px] xl:flex-row">
          <div className="flex flex-row items-center justify-between gap-4  xl:flex-col">
            {Array.from({ length: 4 }, (_, idx) => (
              <div
                className="flex h-[70px] w-[170px] items-center justify-center rounded-sm bg-[#f5f5f5] lg:h-[138px]"
                key={idx}
              >
                <Skeleton className="max-h-full cursor-pointer lg:h-[124px] lg:w-[121px]" />
              </div>
            ))}
          </div>
          <div className="flex h-[300px]  items-center justify-center rounded-sm bg-[#f5f5f5] lg:h-[600px] lg:w-[600px]">
            <Skeleton className="max-h-full max-w-full" />
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-0">
        <div className="space-y-6">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-16 w-full" />
          <hr />
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-16 w-full" />
        </div>
      </div>
    </div>
  );
}
