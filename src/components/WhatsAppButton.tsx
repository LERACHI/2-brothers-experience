import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://anota.ai/home/funcionalidade/atendente-virtual/";

export const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-whatsapp animate-pulse-glow text-white"
      aria-label="Fazer pedido pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="hidden sm:inline">Fazer Pedido</span>
    </a>
  );
};
