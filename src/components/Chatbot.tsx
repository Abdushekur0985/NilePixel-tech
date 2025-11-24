import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I\'m NilePixel\'s AI assistant. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const USE_LOCAL_CHATBOT = import.meta.env.VITE_LOCAL_CHATBOT === 'true';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');

    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      if (USE_LOCAL_CHATBOT) {
        // Local mock response for development when backend is unavailable
        await new Promise((r) => setTimeout(r, 700));
        const mockReply = "Hi — I'm running in local mock mode. The real chatbot isn't available right now.";
        setMessages(prev => [...prev, { role: 'assistant', content: mockReply }]);
        setIsLoading(false);
        return;
      }
      const res = await supabase.functions.invoke('chat', {
        body: JSON.stringify({
          message: userMessage,
          history: messages
        }),
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json'
      });

      if (res.error) throw res.error;

      const reply = (res.data && (res.data as any).reply) || "I'm sorry, I couldn't generate a response.";

      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (error) {
      console.error('Chat error:', error);
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive"
      });
      // Keep the user's message and show a helpful assistant reply instead
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm temporarily unavailable. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(e as any);
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg glow-blue z-50"
          size="icon"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[380px] h-[600px] glass-card rounded-lg shadow-2xl z-50 flex flex-col animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center glow-blue">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">NilePixel AI</h3>
                <p className="text-xs text-muted-foreground">Always here to help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/50 text-foreground'
                    }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-secondary/50 p-3 rounded-lg">
                  <Loader2 className="h-5 w-5 animate-spin text-primary" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="p-4 border-t border-border/50">
            <div className="flex gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="min-h-[60px] max-h-[120px] resize-none"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || isLoading}
                className="h-[60px] w-[60px] shrink-0 glow-blue"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
