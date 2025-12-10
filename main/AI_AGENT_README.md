# FORNEXUS AI Agent 🤖

## Overview
The FORNEXUS AI Agent is an intelligent chatbot assistant integrated into your website. It helps visitors learn about your AI services, pricing, and process through natural conversations.

## Features

### ✨ Core Functionality
- **Real-time AI Conversations** - Powered by Google's Gemini 2.0 Flash model
- **Floating Chat Button** - Always accessible in the bottom-right corner
- **Smart Responses** - Knowledgeable about all FORNEXUS services and pricing
- **Quick Questions** - Pre-defined questions for easy interaction
- **Conversation History** - Maintains context throughout the chat
- **Responsive Design** - Works perfectly on desktop and mobile

### 🎨 UI/UX Features
- **Modern Chat Interface** - Sleek design matching your brand
- **Typing Indicators** - Shows when AI is generating a response
- **Smooth Animations** - Professional transitions and effects
- **Easy Close/Open** - Minimizes to a floating button
- **Auto-scroll** - Messages automatically scroll into view

## What the Agent Knows

The AI agent is trained with information about:

### Services
- Customer Support Agents (24/7 automated support)
- Data Analysis Agents (insights and predictive analytics)
- Workflow Automation Agents (automate repetitive tasks)
- AI Powered Smart Websites

### Pricing Plans
- **Basic Plan**: $100/mo
  - 1 AI Agent
  - Basic Integration
  - Email Support
  - Monthly Reports
  - Standard Training

- **Business Plan**: $500/mo (Most Popular)
  - Up to 3 AI Agents
  - Advanced Integrations (CRM)
  - Lead Generation & RAG
  - Performance Optimization
  - Dedicated Account Manager

- **Custom Plan**: Custom pricing
  - Unlimited Custom Agents
  - Bespoke Workflow Development
  - Deep System Integration
  - Advanced Security & SLA
  - Priority 24/7 Support

### Process
- Discovery & Strategy
- Development & Training
- Integration & Launch

## Technical Details

### Component Location
- File: `src/components/AIAgent.jsx`
- Integration: Added to `App.jsx`

### API Integration
- Uses Google Gemini 2.0 Flash API
- Endpoint: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`
- Currently using project API key

### State Management
- React hooks (useState, useRef, useEffect)
- Message history maintained in component state
- Loading states for better UX

## Quick Questions
The agent provides these quick-start questions:
1. "What services do you offer?"
2. "How much does it cost?"
3. "How does the process work?"
4. "Can you help with custom solutions?"

## Customization

### To Update Agent Knowledge
Edit the `systemPrompt` in `AIAgent.jsx` (around line 44) to add/modify information the agent knows about.

### To Change Appearance
- Modify Tailwind CSS classes in the component
- Update colors to match your brand
- Adjust chat window size (currently 96 width x 600px height)

### To Add More Quick Questions
Edit the `quickQuestions` array (around line 88)

## Error Handling
- Graceful fallback if API fails
- User-friendly error messages
- Suggests contacting via WhatsApp form as backup

## Future Enhancements (Optional)
- [ ] Add conversation persistence (localStorage)
- [ ] Add voice input/output
- [ ] Multi-language support
- [ ] Analytics tracking for popular questions
- [ ] Integration with CRM for lead capture
- [ ] Custom agent personality/tone adjustments

## Usage
The AI Agent automatically loads with your website. Visitors can click the floating chat button in the bottom-right corner to start a conversation!

---

**Note**: For production use, consider:
1. Moving the API key to environment variables
2. Adding rate limiting
3. Implementing conversation analytics
4. Adding user feedback mechanisms
