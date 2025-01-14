import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[16rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  image,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  image: string;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-white",
      "transform-gpu",
      className,
    )}
  >
    <div className="py-8">
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-8">
      <h3 className="text-xl font-semibold text-yellow-500">
        {name}
      </h3>
    </div>
    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto ">
        <Link href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };

