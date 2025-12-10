import { useState, useRef, useEffect } from 'react';

function AIAgent() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: 'Hello! 👋 I\'m the FORNEXUS AI Assistant. How can I help you learn about our AI solutions today?'
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim() || isLoading) return;

        const userMessage = inputMessage.trim();
        setInputMessage('');

        // Add user message
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const systemPrompt = `You are a helpful AI assistant for FORNEXUS, an AI agency that builds intelligent autonomous agents. 

Our services include:
- Customer Support Agents (24/7 automated support)
- Data Analysis Agents (insights and predictive analytics)
- Workflow Automation Agents (automate repetitive tasks)
- AI Powered Smart Websites

Our pricing:
- Basic Plan: $100/mo (1 AI Agent, Basic Integration, Email Support)
- Business Plan: $500/mo (Up to 3 AI Agents, Advanced Integrations, Lead Generation & RAG, Dedicated Account Manager)
- Custom Plan: Custom pricing (Unlimited Agents, Bespoke Development, Deep Integration, Priority 24/7 Support)

Be friendly, professional, and helpful. Keep responses concise and engaging. If asked about services not listed, politely explain what we do offer.`;

            const payload = {
                contents: [
                    {
                        role: 'user',
                        parts: [{ text: systemPrompt + '\n\nUser question: ' + userMessage }]
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 1024,
                }
            };

            const apiKey = 'AIzaSyCb4xWNLCQl2Qjsadh0nw0HXdOn-9_CsXU';
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (!response.ok) {
                console.error('API Error:', result);
                throw new Error(result.error?.message || 'Failed to get response from AI');
            }

            if (result.candidates && result.candidates[0]?.content?.parts?.[0]?.text) {
                const aiResponse = result.candidates[0].content.parts[0].text;
                setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
            } else {
                console.error('Unexpected response format:', result);
                throw new Error('Unexpected response format from AI');
            }

        } catch (error) {
            console.error('Error:', error);
            let errorMessage = 'I apologize, but I\'m having trouble connecting right now. ';

            if (error.message.includes('API key')) {
                errorMessage += 'There seems to be an issue with the API configuration. ';
            } else if (error.message.includes('quota')) {
                errorMessage += 'We\'ve reached our usage limit for now. ';
            }

            errorMessage += 'Please try contacting us directly using the contact form below, or reach out via WhatsApp.';

            setMessages(prev => [...prev, {
                role: 'assistant',
                content: errorMessage
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const quickQuestions = [
        'What services do you offer?',
        'How much does it cost?',
        'How does the process work?',
        'Can you help with custom solutions?'
    ];

    const handleQuickQuestion = (question) => {
        setInputMessage(question);
    };

    return (
        <>
            {/* Floating Chat Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 z-50 btn-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
                    aria-label="Open chat"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] card rounded-2xl flex flex-col shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
                                <img src="/assests/favicon.ico" alt="FORNEXUS" className="w-full h-full object-contain rounded-full" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">FORNEXUS Assistant</h3>
                                <p className="text-xs text-indigo-200">Powered by AI</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-gray-200 transition-colors"
                            aria-label="Close chat"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-lg ${message.role === 'user'
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-gray-800 text-gray-100'
                                        }`}
                                >
                                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-gray-800 text-gray-100 p-3 rounded-lg">
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Questions (only show if no messages yet) */}
                    {messages.length === 1 && (
                        <div className="p-3 bg-gray-800 border-t border-gray-700">
                            <p className="text-xs text-gray-400 mb-2">Quick questions:</p>
                            <div className="grid grid-cols-2 gap-2">
                                {quickQuestions.map((question, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleQuickQuestion(question)}
                                        className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-200 p-2 rounded transition-colors text-left"
                                    >
                                        {question}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Input */}
                    <form onSubmit={handleSendMessage} className="p-4 bg-gray-800 border-t border-gray-700">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 bg-gray-900 border border-gray-700 rounded-lg py-2 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !inputMessage.trim()}
                                className="btn-primary text-white px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}

export default AIAgent;
