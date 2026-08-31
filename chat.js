// ============================================================
// BioGenius · AI Chat — OpenRouter API Integration
// ============================================================

(function() {
    'use strict';

    // ----------------------------------------------------------------
    //  OPENROUTER API CONFIGURATION (Environment Variable Support)
    // ----------------------------------------------------------------
    const API_KEY = process.env.OPENROUTER_API_KEY || "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";
    const MODEL = "openrouter/free";
    const API_URL = "https://openrouter.ai/api/v1/chat/completions";

    // --- DOM refs ---
    const messagesContainer = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');

    // --- typing indicator ---
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
    `;
    messagesContainer.appendChild(typingDiv);

    // ============================================================
    //  UTILITY FUNCTIONS
    // ============================================================

    function scrollToBottom() {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function showTyping(show) {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) {
            indicator.style.display = show ? 'flex' : 'none';
            if (show) scrollToBottom();
        }
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function applyInlineFormatting(str) {
        let result = str.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        result = result.replace(/\*(.*?)\*/g, '<i>$1</i>');
        return result;
    }

    function formatBotMessage(text) {
        const safe = escapeHtml(text);
        const lines = safe.split('\n');
        const result = [];
        let inList = false;

        for (let line of lines) {
            const numMatch = line.match(/^(\d+)\.\s+(.*)/);
            const bulletMatch = line.match(/^([\-*•])\s+(.*)/);

            if (numMatch) {
                const num = numMatch[1];
                let content = applyInlineFormatting(numMatch[2]);
                result.push(
                    `<span class="list-item"><span class="list-num">${num}.</span> ${content}</span>`
                );
                inList = true;
            } else if (bulletMatch) {
                let content = applyInlineFormatting(bulletMatch[2]);
                result.push(
                    `<span class="list-item"><span class="bullet">•</span> ${content}</span>`
                );
                inList = true;
            } else {
                let formatted = applyInlineFormatting(line);
                if (formatted.trim() === '') {
                    if (inList) {
                        result.push('<br/>');
                        inList = false;
                    } else {
                        result.push(' ');
                    }
                } else {
                    result.push(formatted);
                    inList = false;
                }
            }
        }
        return result.join('<br>');
    }

    // ============================================================
    //  ADD MESSAGE
    // ============================================================

    function addMessage(text, sender) {
        const div = document.createElement('div');
        div.className = sender;

        if (sender === 'bot') {
            div.innerHTML = formatBotMessage(text);
        } else {
            div.textContent = text;
        }

        messagesContainer.insertBefore(div, document.getElementById('typingIndicator'));
        scrollToBottom();
        return div;
    }

    // ============================================================
    //  CALL OPENROUTER API
    // ============================================================

    function callAI(userMessage, callback) {
        const systemPrompt =
            "You are BioGenius, a helpful biotech and coding assistant. " +
            "Always respond with numbered lists (1., 2., 3.) or bullet points for clarity. " +
            "Use **bold** for key terms and important points. " +
            "If the answer has multiple parts, list them. " +
            "Respond in the same language as the user (English or Hindi). " +
            "Keep responses concise but informative (2-4 paragraphs max).";

        const payload = {
            model: MODEL,
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userMessage }
            ],
            max_tokens: 500,
            temperature: 0.7
        };

        const xhr = new XMLHttpRequest();
        xhr.open("POST", API_URL, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer " + API_KEY);
        xhr.setRequestHeader("HTTP-Referer", window.location.origin);
        xhr.setRequestHeader("X-Title", "BioGenius AI Chat");

        xhr.onreadystatechange = function() {
            if (this.readyState !== 4) return;

            if (this.status >= 200 && this.status < 300) {
                try {
                    const res = JSON.parse(this.responseText);
                    const reply = res.choices?.[0]?.message?.content;
                    if (reply) {
                        callback(null, reply);
                    } else {
                        callback(new Error("No response from OpenRouter"), null);
                    }
                } catch (err) {
                    callback(err, null);
                }
            } else {
                let errMsg = "OpenRouter error (HTTP " + this.status + ")";
                try {
                    const errData = JSON.parse(this.responseText);
                    if (errData.error?.message) errMsg = errData.error.message;
                } catch (_) { /* ignore */ }
                callback(new Error(errMsg), null);
            }
        };

        xhr.onerror = function() {
            callback(new Error("Network error — check your connection"), null);
        };

        xhr.send(JSON.stringify(payload));
    }

    // ============================================================
    //  SEND MESSAGE
    // ============================================================

    window.sendMessage = function() {
        const msg = chatInput.value.trim();
        if (!msg) return;

        addMessage(msg, 'user');
        chatInput.value = '';
        chatInput.focus();

        showTyping(true);

        callAI(msg, function(err, reply) {
            showTyping(false);
            if (err) {
                addMessage('❌ ' + err.message, 'bot');
                return;
            }
            let clean = reply;
            if (typeof clean === 'string') {
                clean = clean.replace(/```/g, '').trim();
            }
            addMessage(clean, 'bot');
        });
    };

    // ============================================================
    //  SUGGESTION CHIP HANDLER
    // ============================================================

    window.suggestionChip = function(topic) {
        chatInput.value = topic;
        sendMessage();
    };

    // ============================================================
    //  ENTER KEY HANDLER
    // ============================================================

    window.handleKeyPress = function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    };

    // ============================================================
    //  INITIAL GREETING
    // ============================================================

    setTimeout(() => {
        const greeting =
            "🧬 **Hello! I'm BioGenius AI.**\n\n" +
            "I'm your biotech and coding assistant. Here's what I can help with:\n\n" +
            "1. **DNA** analysis and sequencing\n" +
            "2. **Python** programming for bioinformatics\n" +
            "3. **Biotech** tools and lab techniques\n" +
            "4. **Machine learning** in biology\n\n" +
            "Ask me anything — in English or हिंदी!";
        addMessage(greeting, 'bot');
    }, 500);

    console.log('✅ BioGenius · AI Chat loaded successfully!');

})();
