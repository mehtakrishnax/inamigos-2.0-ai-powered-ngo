// ==========================================
// DONOR PROFILE PERSISTENCE & LEDGER STATE
// ==========================================
let donorTransactions = [
  { date: "2026-05-12", hash: "TXN-90234-A", project: "Project BACHPANSHALA", amount: 5000, status: "CSR-1 Approved" },
  { date: "2026-05-28", hash: "TXN-10578-B", project: "Project SEVA", amount: 2500, status: "CSR-1 Approved" }
];

function handleDonorLogin(e) {
  e.preventDefault();
  const username = document.getElementById('donorUsername').value.trim();
  if (username === '') return;

  localStorage.setItem('donorSessionName', username);
  bootstrapDonorDashboard(username);
}

function handleDonorLogout() {
  localStorage.removeItem('donorSessionName');
  document.getElementById('donorAuthBlock').style.display = 'block';
  document.getElementById('donorActiveDashboard').style.display = 'none';
}

function bootstrapDonorDashboard(username) {
  document.getElementById('donorAuthBlock').style.display = 'none';
  document.getElementById('donorActiveDashboard').style.display = 'block';
  
  document.getElementById('donorNameText').innerText = username;
  const initials = username.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  document.getElementById('donorAvatarText').innerText = initials || 'VS';

  renderDonorLedger();
  evaluateAchievements();
}

function renderDonorLedger() {
  const tableBody = document.getElementById('ledgerTableBody');
  if (!tableBody) return;
  tableBody.innerHTML = '';

  donorTransactions.forEach(t => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${t.date}</td>
      <td style="font-family:monospace; color:var(--text-muted);">${t.hash}</td>
      <td><strong>${t.project}</strong></td>
      <td style="color:var(--primary); font-weight:700;">₹${t.amount.toLocaleString()}</td>
      <td><span class="badge-tag-success">${t.status}</span></td>
      <td>
        <span class="badge-link-cert" onclick="triggerCertificate('${t.hash}', '${t.project}', ${t.amount})">
          📄 ${currentLang === 'EN' ? 'Certificate' : 'प्रमाण पत्र'}
        </span>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function pushCustomLedgerEntry(amount, targetProject) {
  const today = new Date().toISOString().split('T')[0];
  const randHash = 'TXN-' + Math.floor(10000 + Math.random() * 90000) + '-C';
  
  const newEntry = {
    date: today,
    hash: randHash,
    project: targetProject,
    amount: amount,
    status: "CSR-1 Approved"
  };

  donorTransactions.unshift(newEntry);
  renderDonorLedger();
  evaluateAchievements();
  
  alert(currentLang === 'EN' 
    ? `✔ Authorized! ₹${amount.toLocaleString()} successfully allocated to ${targetProject} in your tax ledger.`
    : `✔ अधिकृत! ₹${amount.toLocaleString()} को ${targetProject} के तहत आपके बहीखाते में जोड़ दिया गया है।`
  );

  triggerCertificate(randHash, targetProject, amount);
}

function evaluateAchievements() {
  const total = donorTransactions.reduce((acc, t) => acc + t.amount, 0);
  const achievements = document.querySelectorAll('.achievement-pill');
  
  if (total >= 10000 && achievements[2]) {
    achievements[2].style.opacity = '1';
    achievements[2].style.borderColor = 'var(--primary)';
  }
  
  if (total >= 25000 && achievements[3]) {
    achievements[3].style.opacity = '1';
    achievements[3].style.borderColor = 'var(--accent)';
  }
}

// ==========================================
// CERTIFICATE MODAL ENGINE
// ==========================================
function triggerCertificate(hash, project, amount) {
  const donorName = localStorage.getItem('donorSessionName') || 'Guest Donor';
  
  document.getElementById('certDonorName').innerText = donorName;
  document.getElementById('certDonorProject').innerText = project;
  document.getElementById('certDonorAmount').innerText = '₹' + amount.toLocaleString();

  openAIModal('modalCertificate');
}

document.addEventListener('DOMContentLoaded', () => {
  const savedName = localStorage.getItem('donorSessionName');
  if (savedName) {
    bootstrapDonorDashboard(savedName);
  }
});
