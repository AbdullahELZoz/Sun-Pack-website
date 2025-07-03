import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package } from "lucide-react";

function NotFoundPage() {
  return (
    <MainLayout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
        <Package className="h-16 w-16 text-primary mb-4" />
        <h1 className="text-6xl font-bold mb-2">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mb-8">
          We can't seem to find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>
        <Link to="/">
          <Button size="lg">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
}

export default NotFoundPage;