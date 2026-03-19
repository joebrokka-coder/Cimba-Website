"use client";

import AnimatedGradientStroke from "@/components/AnimatedGradientStroke";

type Props = {
  title: string;
  containerClassName?: string;
  titleClassName?: string;
};

export default function StrokeSectionTitle({
  title,
  containerClassName = "",
  titleClassName = "",
}: Props) {
  return (
    <div className={`mb-12 w-fit max-w-2xl ${containerClassName}`}>
      <h2 className={titleClassName}>{title}</h2>
      <AnimatedGradientStroke className="mt-2" />
    </div>
  );
}

