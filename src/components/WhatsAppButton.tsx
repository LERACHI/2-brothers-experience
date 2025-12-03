import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5545991472777";
const WHATSAPP_MESSAGE = "Olá! Vim pelo site e gostaria de fazer um pedido! 🍔";

export const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-whatsapp animate-pulse-glow text-primary-foreground"
      aria-label="Fazer pedido pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="hidden sm:inline">Fazer Pedido</span>
    </a>
  );
};
