// ==========================================
// REGIONAL DISPATCH NODES DATA
// ==========================================
const regionalNodes = [
  { 
    name: "Durg", 
    status: "stable", 
    x: 100, y: 100,
    meals: 450, tablets: 25, saplings: 300,
    desc: "Bhilai green shelter camps & Project Udaan collectives operational."
  },
  { 
    name: "Bilaspur", 
    status: "stable", 
    x: 300, y: 120,
    meals: 600, tablets: 40, saplings: 400,
    desc: "Urban distribution points & digital literacy classrooms running optimally."
  },
  { 
    name: "Bastar", 
    status: "critical", 
    x: 210, y: 340,
    meals: 1200, tablets: 100, saplings: 800,
    desc: "Active Monsoon SEVA relief. High demands for nutritious meals and clothes."
  },
  { 
    name: "Rajnandgaon", 
    status: "stable", 
    x: 90, y: 280,
    meals: 300, tablets: 15, saplings: 150,
    desc: "Project Bachpanshala schools active with 3 local volunteer mentors."
  }
];

function renderRegionalNodes() {
  const nodeList = document.getElementById('regionNodeList');
  if (!nodeList) return;
  nodeList.innerHTML = '';

  regionalNodes.forEach(node => {
    const card = document.createElement('div');
    card.className = `region-node-card ${node.status === 'critical' ? 'critical-active' : ''}`;
    card.id = `nodeCard-${node.name}`;
    card.setAttribute('onclick', `triggerNodeAlloc('${node.name}')`);
    
    card.innerHTML = `
      <div class="region-head">
        <span class="region-name">${node.name} Center</span>
        <span class="region-status ${node.status}">${currentLang === 'EN' ? node.status.toUpperCase() : (node.status === 'critical' ? 'गंभीर आवश्यकता' : 'संतुलित')}</span>
      </div>
      <p style="font-size:0.775rem; color:var(--text-muted); margin-bottom:0.75rem;">${node.desc}</p>
      <div class="region-resources">
        <span class="region-resource-pill">🍱 Meals: ${node.meals}</span>
        <span class="region-resource-pill">📖 Tabs: ${node.tablets}</span>
        <span class="region-resource-pill">🌲 Trees: ${node.saplings}</span>
      </div>
    `;
    
    nodeList.appendChild(card);
  });
}

function triggerNodeAlloc(regionName) {
  document.querySelectorAll('.region-node-card').forEach(card => card.classList.remove('active'));
  const card = document.getElementById(`nodeCard-${regionName}`);
  if (card) card.classList.add('active');

  document.querySelectorAll('.dispatch-route').forEach(line => {
    line.style.stroke = 'rgba(0, 204, 131, 0.2)';
    line.style.strokeWidth = '2';
  });
  
  const routeLine = document.getElementById(`route${regionName}`);
  if (routeLine) {
    routeLine.style.stroke = 'var(--primary)';
    routeLine.style.strokeWidth = '4';
  }

  const logs = document.getElementById('dispatchLogs');
  if (logs) {
    logs.innerText = currentLang === 'EN' 
      ? `Logistics: Dispatching resources to ${regionName} base...`
      : `लॉजिस्टिक्स: ${regionName} केंद्र के लिए संसाधन भेजे जा रहे हैं...`;
    
    setTimeout(() => {
      logs.innerText = currentLang === 'EN' 
        ? `✔ Dispatched! Optimal route locked for ${regionName}.`
        : `✔ सफल! ${regionName} के लिए वितरण मार्ग सुरक्षित।`;
    }, 1000);
  }
}

function simulateAutomatedAlloc() {
  const logs = document.getElementById('dispatchLogs');
  if (logs) {
    logs.innerText = currentLang === 'EN' 
      ? "Resource Allocator: Auditing regional thresholds..."
      : "रिसोर्स एलोकेटर: क्षेत्रीय आवश्यकताओं का ऑडिट कर रहा है...";
  }

  let nodeIdx = 0;
  function flashSequence() {
    if (nodeIdx < regionalNodes.length) {
      const node = regionalNodes[nodeIdx];
      triggerNodeAlloc(node.name);
      nodeIdx++;
      setTimeout(flashSequence, 800);
    } else {
      if (logs) {
        logs.innerText = currentLang === 'EN' 
          ? "✔ Complete! All regional dispatches successfully balanced."
          : "✔ सफल! सभी क्षेत्रीय वितरण मार्ग संतुलित कर दिए गए हैं।";
      }
    }
  }

  flashSequence();
}

document.addEventListener('DOMContentLoaded', () => {
  renderRegionalNodes();
});
