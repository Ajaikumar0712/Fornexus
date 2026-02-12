import { useState, useRef, useEffect } from 'react';

function AIAgent() {
    // Fallback response function for common questions
    const generateFallbackResponse = (question) => {
        const responses = {
            'price': 'Our pricing starts at ₹9,999/month for the Basic plan (1 AI Agent + setup ₹14,999). Business plan is ₹34,999/month (up to 3 agents + setup ₹29,999). Enterprise plans start from ₹1,00,000/month. Would you like details about any specific plan?',
            
            'service': 'We offer 4 main AI solutions:\n\n1. 🤖 Customer Support Agents (24/7 automated support)\n2. 📊 Data Analysis Agents (insights & predictive analytics)\n3. ⚡ Workflow Automation Agents (automate repetitive tasks)\n4. 🌐 AI Powered Smart Websites\n\nWhich service interests you most?',
            
            'demo': 'I\'d love to show you a demo! You can:\n\n📱 WhatsApp us at +91-6380596859 for instant demo\n📧 Email fornexus94@gmail.com\n🔗 Follow @for.nexus on Instagram\n\nOur team typically responds within minutes. What type of AI solution demo would you like to see?',
            
            'contact': 'You can reach us through:\n\n📱 WhatsApp: +91-6380596859 (fastest response)\n📧 Email: fornexus94@gmail.com\n📸 Instagram: @for.nexus\n💼 LinkedIn: /company/fornexus\n\nWe\'re available Mon-Sat, 9AM-8PM IST. How can we help you today?',
            
            'process': 'Our AI development process has 3 steps:\n\n1. 🔍 Discovery & Strategy - We analyze your needs and create a roadmap\n2. 🛠️ Development & Training - Our experts build and train your AI agent\n3. 🚀 Integration & Launch - We integrate into your systems and go live\n\nTypically takes 2-4 weeks. What kind of AI solution are you considering?',
            
            'custom': 'Absolutely! We specialize in custom AI solutions. Our Enterprise plan includes:\n\n✅ Unlimited custom AI agents\n✅ Bespoke workflow development\n✅ Deep system integration\n✅ Priority 24/7 support\n\nLet\'s discuss your specific needs on WhatsApp: +91-6380596859',
            
            'default': 'Thanks for your question! I\'m here to help with information about FORNEXUS AI solutions.\n\nFor detailed answers and personalized assistance, please reach out:\n\n📱 WhatsApp: +91-6380596859\n📧 Email: fornexus94@gmail.com\n\nOur team will get back to you within minutes!'
        };

        // Match question with appropriate response
        if (question.includes('price') || question.includes('cost') || question.includes('pricing')) {
            return responses.price;
        } else if (question.includes('service') || question.includes('what do you') || question.includes('what can you')) {
            return responses.service;
        } else if (question.includes('demo') || question.includes('show me') || question.includes('example')) {
            return responses.demo;
        } else if (question.includes('contact') || question.includes('reach') || question.includes('call') || question.includes('email')) {
            return responses.contact;
        } else if (question.includes('how') && (question.includes('work') || question.includes('process'))) {
            return responses.process;
        } else if (question.includes('custom') || question.includes('specific') || question.includes('unique')) {
            return responses.custom;
        } else {
            return responses.default;
        }
    };

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
            // For security, API calls should go through your backend
            // This is a fallback response for common questions
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
            
            let aiResponse = generateFallbackResponse(userMessage.toLowerCase());
            setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);

        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'I\'m having trouble processing that right now. For immediate assistance, please contact us directly:\n\n📱 WhatsApp: +91-6380596859\n📧 Email: fornexus94@gmail.com\n\nWe typically respond within minutes!'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const quickQuestions = [
        'What services do you offer?',
        'How much does it cost?',
        'Can I see a demo?',
        'How do I contact you?'
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
