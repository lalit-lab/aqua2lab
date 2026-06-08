import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919811238855"
      target="_blank"
      className="fixed bottom-10 right-8 z-[100] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-wa-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} color="white" fill="white" />
    </a>
  );
}
