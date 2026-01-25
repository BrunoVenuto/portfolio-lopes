import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  objectPosition?: string; // "70% 50%"
};

export default function SmartImage({
  src,
  alt,
  className,
  priority = false,
  objectPosition = "50% 50%",
}: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, 1200px"
      className={className ?? "object-cover"}
      style={{ objectFit: "cover", objectPosition }}
    />
  );
}
