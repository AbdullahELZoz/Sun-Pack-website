import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ComingSoonProps {
  title: string;
  description?: string;
}

export function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        <Clock className="h-8 w-8 text-primary" />
      </div>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-muted-foreground max-w-md mb-8">
        {description || "We're working hard to bring you this content. Please check back soon."}
      </p>
      <Link to="/">
        <Button>
          Return to Homepage
        </Button>
      </Link>
    </div>
  );
}