import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "../ui/button";

export function FixedScroll() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    isVisible && (
      <Button
        size="icon"
        className="fixed bottom-7 end-7 z-50 rounded-full bg-[#F5F5F5] text-primary hover:bg-[#f5f5f5] md:bottom-28 md:end-28"
        onClick={scrollToTop}
      >
        <ArrowUp />
      </Button>
    )
  );
}
