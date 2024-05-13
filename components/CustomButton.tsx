import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function CustomButton({
  title,
  className = "",
  href,
}: {
  title: string;
  className?: string;
  href?: string;
}) {

  // If href is provided, wrap the Button with a Link component
  if (href) {
    return (
      <Link href={href} passHref>
        <Button className={`w-[250px] h-[45px]  font-medium hover:bg-best ${className}`}>
          {title}
        </Button>
      </Link>
    );
  }

  // If no href is provided, render the Button normally
  return (
    <Button className={`w-[250px] h-[45px] uppercase font-medium hover:bg-best ${className}`}>
      {title}
    </Button>
  );
}
