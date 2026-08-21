// ===============================
// 🧬 BioGenius - Biotechnology Chatbot
// ===============================

const botReplies = {

  "hello":
    "👋 Hello! I'm BioGenius 🧬. I can help you with Biotechnology, Bioinformatics, Molecular Biology, Genetics and related topics.",

  "hi":
    "👋 Hi! Welcome to BioGenius 🧬. What would you like to learn today?",

  "bioinformatics":
    "💻 Bioinformatics is the combination of biology, computer science and statistics. It is used to analyze DNA, RNA and protein data. Important tools include BLAST, NCBI, PDB and sequence alignment.",

  "biotechnology":
    "🧬 Biotechnology is the use of living organisms, cells or biological molecules to develop useful products and technologies. Major areas include genetic engineering, fermentation, pharmaceuticals, agriculture and bioinformatics.",

  "dna":
    "🧬 DNA (Deoxyribonucleic Acid) stores genetic information. It consists of nucleotides containing A, T, G and C. A pairs with T, while G pairs with C.",

  "rna":
    "🧬 RNA (Ribonucleic Acid) plays important roles in gene expression and protein synthesis. Major types include mRNA, tRNA and rRNA.",

  "gene":
    "🧬 A gene is a segment of DNA that contains information required to produce a functional RNA or protein. Genes are the basic units of heredity.",

  "genome":
    "🧬 A genome is the complete set of genetic material present in an organism. Genome sequencing helps scientists study genes, mutations and evolution.",

  "gene expression":
    "🧬 Gene expression is the process by which information stored in DNA is used to produce functional RNA or proteins. The basic flow is DNA → RNA → Protein.",

  "central dogma":
    "🧬 The Central Dogma describes the flow of genetic information: DNA → RNA → Protein.",

  "pcr":
    "🧪 PCR (Polymerase Chain Reaction) is a technique used to amplify a specific DNA sequence. The three basic steps are denaturation, annealing and extension.",

  "crispr":
    "✂️ CRISPR-Cas9 is a genome-editing technology used to make targeted changes in DNA. It uses guide RNA to direct Cas9 toward a specific DNA sequence.",

  "blast":
    "🔎 BLAST (Basic Local Alignment Search Tool) compares a biological sequence with sequences in databases to find similar sequences. It is widely used in bioinformatics.",

  "ncbi":
    "🗄️ NCBI (National Center for Biotechnology Information) provides biological databases and tools such as GenBank, PubMed, BLAST and Gene.",

  "protein":
    "🧬 Proteins are biological macromolecules made of amino acids. They perform structural, enzymatic, transport, signaling and many other functions in cells.",

  "enzyme":
    "⚗️ Enzymes are biological catalysts that increase the rate of biochemical reactions without being consumed. Most enzymes are proteins.",

  "fermentation":
    "🧫 Fermentation is a biological process in which microorganisms convert substrates into useful products. Examples include ethanol, antibiotics, organic acids and enzymes.",

  "yeast":
    "🧫 Saccharomyces cerevisiae is a yeast commonly used in fermentation. It is widely used for ethanol production and baking.",

  "elisa":
    "🧪 ELISA (Enzyme-Linked Immunosorbent Assay) is a laboratory technique used to detect or quantify antigens or antibodies using enzyme-linked reactions.",

  "antibody":
    "🧬 Antibodies are proteins produced by B cells that specifically recognize and bind to antigens. They are important in immunity, diagnostics and biotechnology.",

  "antigen":
    "🧬 An antigen is a molecule or substance that can be recognized by the immune system and can trigger an immune response.",

  "cell":
    "🔬 A cell is the basic structural and functional unit of life. Cells can be broadly classified into prokaryotic and eukaryotic cells.",

  "bacteria":
    "🦠 Bacteria are single-celled prokaryotic organisms. They are important in biotechnology, medicine, agriculture, fermentation and environmental applications.",

  "virus":
    "🦠 Viruses are infectious biological agents that require host cells for replication. They contain genetic material surrounded by a protein coat.",

  "mutation":
    "🧬 A mutation is a change in the DNA sequence. Mutations can be harmful, beneficial or neutral depending on their effect.",

  "genetics":
    "🧬 Genetics is the branch of biology that studies genes, heredity and variation in organisms.",

  "genetic engineering":
    "🧬 Genetic engineering involves modifying an organism's DNA using biotechnology techniques. It can be used to produce recombinant proteins, improve crops and study gene function.",

  "cloning":
    "🧬 Cloning is the process of producing genetically identical copies of biological material, such as DNA, cells or organisms.",

  "plasmid":
    "🧬 A plasmid is a small circular DNA molecule commonly found in bacteria. Plasmids are widely used as vectors in genetic engineering.",

  "vector":
    "🧬 In genetic engineering, a vector is a DNA molecule used to carry foreign genetic material into a host cell. Plasmids are common vectors.",

  "sequencing":
    "🧬 DNA sequencing determines the order of nucleotides in a DNA molecule. Important technologies include Sanger sequencing and next-generation sequencing (NGS).",

  "sanger":
    "🧬 Sanger sequencing is a DNA sequencing method based on chain termination using modified nucleotides called ddNTPs.",

  "ngs":
    "🧬 Next-Generation Sequencing (NGS) allows millions of DNA fragments to be sequenced simultaneously. It is widely used in genomics and research.",

  "alignment":
    "🔎 Sequence alignment arranges DNA, RNA or protein sequences to identify regions of similarity. It can help study function, evolution and relationships between sequences.",

  "python":
    "🐍 Python is widely used in bioinformatics for sequence analysis, data processing and automation. Useful libraries include Biopython, Pandas, NumPy and Matplotlib.",

  "biopython":
    "🐍 Biopython is a collection of Python tools for computational biology and bioinformatics. It supports sequence handling, FASTA files, BLAST and biological databases.",

  "pdb":
    "🧬 PDB (Protein Data Bank) is a major database containing 3D structural information about proteins, nucleic acids and other biological macromolecules.",

  "amino acid":
    "🧬 Amino acids are the building blocks of proteins. There are 20 standard amino acids commonly used to build proteins.",

  "metabolism":
    "⚡ Metabolism includes all chemical reactions occurring inside an organism. It includes catabolism, which breaks molecules down, and anabolism, which builds molecules.",

  "photosynthesis":
    "🌱 Photosynthesis is the process by which plants, algae and some microorganisms convert light energy into chemical energy, mainly producing glucose and oxygen.",

  "respiration":
    "⚡ Cellular respiration is the process of converting nutrients into usable cellular energy, mainly ATP. Aerobic respiration generally uses oxygen.",

  "career":
    "🎓 Biotechnology career options include Bioinformatics, Research & Development, Clinical Research, Pharmaceutical Biotechnology, Quality Control, Bioprocessing and Computational Biology.",

  "project":
    "💡 BioGenius project ideas:\n• DNA Sequence Analyzer\n• Protein Sequence Analyzer\n• BLAST-based tool\n• Disease Gene Database\n• Virtual Biotechnology Lab\n• Gene Expression Analysis\n• DNA GC Content Calculator",

  "dsa":
    "💻 DSA can be very useful for Bioinformatics. Start with arrays, strings, hash tables, sorting, searching and graphs. Python is a good language to practice.",

  "study":
    "📚 For Biotechnology, focus on Molecular Biology, Genetics, Biochemistry, Microbiology, Cell Biology, Genetic Engineering and Bioinformatics. Combine theory with practical projects.",

  "resources":
    "📚 Useful resources:\n• NCBI\n• PubMed\n• EMBL-EBI\n• Protein Data Bank\n• UniProt\n• Biopython\n• Nature\n• ScienceDirect",

  "default":
    "🤔 I don't have a specific answer for that yet.\n\nTry asking me about:\n• Biotechnology\n• Bioinformatics\n• DNA / RNA\n• Genetics\n• PCR\n• CRISPR\n• BLAST\n• NCBI\n• Protein\n• Fermentation\n• ELISA\n• Python\n• Gene Expression\n• Projects\n• Career"
};


// ===============================
// Get Current Time
// ===============================

function getCurrentTime() {

  const now = new Date();

  return now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

}


// ===============================
// Enter Key
// ===============================

function handleKeyPress(event) {

  if (event.key === "Enter") {

    event.preventDefault();

    sendMessage();

  }

}


// ===============================
// Escape HTML
// ===============================

function escapeHTML(text) {

  const div = document.createElement("div");

  div.textContent = text;

  return div.innerHTML;

}


// ===============================
// Find Bot Reply
// ===============================

function getBotReply(userMessage) {

  const message = userMessage
    .toLowerCase()
    .trim();


  // Exact match
  if (botReplies[message]) {

    return botReplies[message];

  }


  // Long keywords first
  const keys = Object.keys(botReplies)
    .filter(key => key !== "default")
    .sort((a, b) => b.length - a.length);


  for (const key of keys) {

    if (message.includes(key)) {

      return botReplies[key];

    }

  }


  return botReplies.default;

}


// ===============================
// Send Message
// ===============================

function sendMessage() {

  const input = document.getElementById("chat-input");

  const messages = document.getElementById("chat-messages");


  if (!input || !messages) {

    console.error("Chat elements not found!");

    return;

  }


  const userMsg = input.value.trim();


  // Empty message
  if (userMsg === "") {

    return;

  }


  // =========================
  // User Message
  // =========================

  const messageContainer = document.createElement("div");

  messageContainer.className = "message-container";


  const userMessage = document.createElement("div");

  userMessage.className = "user";

  userMessage.textContent = userMsg;


  const userTime = document.createElement("span");

  userTime.className = "message-time";

  userTime.textContent = getCurrentTime();


  messageContainer.appendChild(userMessage);

  messageContainer.appendChild(userTime);

  messages.appendChild(messageContainer);


  // Clear input
  input.value = "";

  input.focus();


  // =========================
  // Typing Indicator
  // =========================

  const typingIndicator = document.createElement("div");

  typingIndicator.className = "typing-indicator";

  typingIndicator.style.display = "flex";


  typingIndicator.innerHTML = `
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
  `;


  messages.appendChild(typingIndicator);


  messages.scrollTop = messages.scrollHeight;


  // =========================
  // Bot Reply
  // =========================

  setTimeout(() => {

    typingIndicator.remove();


    const reply = getBotReply(userMsg);


    const botContainer = document.createElement("div");

    botContainer.className = "message-container";


    const botMessage = document.createElement("div");

    botMessage.className = "bot";


    const botName = document.createElement("b");

    botName.textContent = "BioGenius: ";


    const replyText = document.createElement("span");

    replyText.innerHTML = escapeHTML(reply)
      .replace(/\n/g, "<br>");


    botMessage.appendChild(botName);

    botMessage.appendChild(replyText);


    const botTime = document.createElement("span");

    botTime.className = "message-time";

    botTime.textContent = getCurrentTime();


    botContainer.appendChild(botMessage);

    botContainer.appendChild(botTime);


    messages.appendChild(botContainer);


    messages.scrollTop = messages.scrollHeight;


  }, 700);

}


// ===============================
// Suggestion Chips
// ===============================

function suggestionChip(topic) {

  const input = document.getElementById("chat-input");


  if (!input) {

    return;

  }


  input.value = topic;

  sendMessage();

}


// ===============================
// Page Load
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  const messages = document.getElementById("chat-messages");

  const input = document.getElementById("chat-input");


  if (!messages) {

    console.error("chat-messages not found!");

    return;

  }


  // Welcome message

  const welcomeContainer = document.createElement("div");

  welcomeContainer.className = "message-container";


  const welcomeMessage = document.createElement("div");

  welcomeMessage.className = "bot";


  welcomeMessage.innerHTML = `
    <b>BioGenius:</b>
    👋 Namaste! I'm BioGenius 🧬.
    I can help you learn Biotechnology, Bioinformatics,
    Molecular Biology, Genetics and Computational Biology.
  `;


  const welcomeTime = document.createElement("span");

  welcomeTime.className = "message-time";

  welcomeTime.textContent = getCurrentTime();


  welcomeContainer.appendChild(welcomeMessage);

  welcomeContainer.appendChild(welcomeTime);


  messages.appendChild(welcomeContainer);


  // Focus input

  if (input) {

    input.focus();

  }


  // Scroll

  messages.scrollTop = messages.scrollHeight;

});
