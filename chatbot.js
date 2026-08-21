
const botReplies = {
  "hello": "👋 Hello! I'm here to help you with coding. Ask me about programming languages, concepts, or career advice!",
  "hi": "👋 Hi there! How can I assist with your coding journey today?",
  "beginner": "🚀 Starting to code? Great choice! Begin with HTML & CSS for web development, or Python for general programming. Practice regularly and build small projects!",
  "which language": "👉 Depends on your goal:\n- Web Dev → HTML, CSS, JS, React\n- Data Science → Python, SQL, ML\n- App Dev → Java, Kotlin, Flutter\n- Cybersecurity → Python, Linux, Networking\n- Competitive Programming → C++ / Java",
  "html": "📄 HTML → The standard markup language for creating web pages. Start with basic tags like &lt;html&gt;, &lt;head&gt;, &lt;body&gt;, &lt;div&gt;, and &lt;p&gt;. Then learn about forms, tables, and semantic HTML5.",
  "css": "🎨 CSS → Styles your HTML. Learn selectors, box model, flexbox, grid, and responsive design. Frameworks like Bootstrap can help you style faster.",
  "javascript": "⚡ JavaScript → Makes websites interactive. Start with fundamentals (variables, functions, DOM manipulation), then ES6+ features, async JS, and frameworks like React.",
  "python": "🐍 Python → Great for beginners! Learn syntax, data structures, then move to libraries for data analysis (Pandas), web development (Django/Flask), or machine learning (TensorFlow).",
  "java": "☕ Java → Object-oriented language used for Android apps, enterprise software, and more. Learn OOP concepts, Java APIs, and Spring framework for web development.",
  "c++": "🔌 C++ → Powerful for system programming, game development, and competitive coding. Learn memory management, STL, and advanced OOP concepts.",
  "react": "⚛️ React → JavaScript library for building UIs. Start with JSX, components, state/props, hooks, then routing and state management with Redux.",
  "ml": "🤖 ML → Start with Python, learn math (stats, linear algebra), then libraries like Scikit-learn, TensorFlow, PyTorch. Practice with real datasets on Kaggle.",
  "ai": "🧠 AI → Begin with Python, learn math basics, then ML algorithms, neural networks, NLP, and computer vision. Deep learning frameworks like TensorFlow/PyTorch are essential.",
  "cybersecurity": "🔒 Cybersecurity → Learn networking fundamentals, Linux, Python scripting, and security concepts. Certifications like CEH or Security+ can be helpful.",
  "dsa": "📊 DSA → Essential for coding interviews. Learn time complexity, then practice arrays, strings, linked lists, trees, graphs, and dynamic programming on platforms like LeetCode.",
  "advanced": "🎯 Advanced topics include: System Design, Distributed Systems, Machine Learning Engineering, DevOps, Cloud Architecture, and Advanced Algorithms.",
  "resources": "📚 Helpful resources:\n- FreeCodeCamp (free tutorials)\n- MDN Web Docs (web technologies)\n- Stack Overflow (Q&A)\n- LeetCode (interview practice)\n- Coursera/Udemy (courses)",
  "project": "💡 Project ideas:\n- Todo list app\n- Weather app with API\n- Personal portfolio website\n- Chat application\n- Machine learning model on dataset",
  "job": "💼 For coding jobs:\n- Build a strong portfolio\n- Practice algorithm questions\n- Contribute to open source\n- Network on LinkedIn\n- Prepare for behavioral interviews",
  "default": "🤔 I'm not sure I understand. Try asking about:\n- Specific programming languages (HTML, Python, Java)\n- Career paths (Web Dev, Data Science)\n- Concepts (DSA, ML, Cybersecurity)\n- Or type 'resources' for learning materials"
};

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

function sendMessage() {
  const input = document.getElementById('chat-input');
  const messages = document.getElementById('chat-messages');
  const userMsg = input.value.trim();
  
  if (!userMsg) return;
  
  // Add user message
  const messageContainer = document.createElement('div');
  messageContainer.className = 'message-container';
  messageContainer.innerHTML = `
    <div class="user">${userMsg}</div>
    <span class="message-time">${getCurrentTime()}</span>
  `;
  messages.appendChild(messageContainer);
  
  // Clear input
  input.value = '';
  
  // Show typing indicator
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'typing-indicator';
  typingIndicator.id = 'typing-indicator';
  typingIndicator.innerHTML = `
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
  `;
  messages.appendChild(typingIndicator);
  typingIndicator.style.display = 'flex';
  
  messages.scrollTop = messages.scrollHeight;
  
  // Simulate bot thinking
  setTimeout(() => {
    // Remove typing indicator
    typingIndicator.remove();
    
    // Generate bot reply
    let reply = botReplies.default;
    for (let key in botReplies) {
      if (userMsg.toLowerCase().includes(key)) {
        reply = botReplies[key];
        break;
      }
    }
    
    // Add bot message
    const botMessageContainer = document.createElement('div');
    botMessageContainer.className = 'message-container';
    botMessageContainer.innerHTML = `
      <div class="bot"><b>Bot:</b> ${reply}</div>
      <span class="message-time">${getCurrentTime()}</span>
    `;
    messages.appendChild(botMessageContainer);
    
    messages.scrollTop = messages.scrollHeight;
  }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
}

function suggestionChip(topic) {
  const input = document.getElementById('chat-input');
  input.value = topic;
  sendMessage();
}

// Initialize the chat when page loads
document.addEventListener('DOMContentLoaded', function() {
  const messages = document.getElementById('chat-messages');
  const welcomeContainer = document.createElement('div');
  welcomeContainer.className = 'message-container';
  welcomeContainer.innerHTML = `
    <div class="bot"><b>Bot:</b> 👋 Namaste! I can help you learn coding from beginner to advanced levels. Ask me about programming languages, concepts, or career guidance!</div>
    <span class="message-time">${getCurrentTime()}</span>
  `;
  messages.appendChild(welcomeContainer);
  
  // Add event listener for browser back/forward buttons
  window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
      // Page was loaded from cache, ensure proper display
      messages.scrollTop = messages.scrollHeight;
    }
  });
});

