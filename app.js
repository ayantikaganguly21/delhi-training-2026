const appContainer = document.getElementById('app-container');
const navBtns = document.querySelectorAll('.nav-btn');

const views = {
    home: `
        <div class="hero">
            <h1>Lost Something on the Train?<br>Let AI Find It.</h1>
            <p>Seamlessly matching lost and found items across Indian Railways using advanced AI image recognition and journey cross-referencing. HWH to NDLS and beyond.</p>
            <div class="hero-actions">
                <button class="btn btn-primary" onclick="switchView('report-lost')">Report Lost Item</button>
                <button class="btn btn-secondary" onclick="switchView('report-found')">I Found Something</button>
            </div>
            
            <div class="glass-card" style="margin-top: 4rem; text-align: left;">
                <h2>How RailFind AI Works</h2>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem; margin-top: 2rem;">
                    <div>
                        <div style="font-size: 2rem; margin-bottom: 1rem;">📝</div>
                        <h3>1. Report</h3>
                        <p style="color: var(--text-muted); margin-top: 0.5rem;">Enter your PNR or Train details. Describe the item or upload an image.</p>
                    </div>
                    <div>
                        <div style="font-size: 2rem; margin-bottom: 1rem;">🧠</div>
                        <h3>2. AI Matches</h3>
                        <p style="color: var(--text-muted); margin-top: 0.5rem;">Our AI cross-references database across coaches and stations.</p>
                    </div>
                    <div>
                        <div style="font-size: 2rem; margin-bottom: 1rem;">🤝</div>
                        <h3>3. Reconnect</h3>
                        <p style="color: var(--text-muted); margin-top: 0.5rem;">Get instant alerts and connect securely with the finder or authorities.</p>
                    </div>
                </div>
            </div>
        </div>
    `
};

function switchView(viewName) {
    navBtns.forEach(btn => btn.classList.remove('active'));
    const targetBtn = Array.from(navBtns).find(btn => btn.dataset.target === viewName);
    if(targetBtn) targetBtn.classList.add('active');
    
    appContainer.innerHTML = views[viewName];
}

function handleFormSubmit(e, type) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.innerHTML = 'Processing via AI...';
    btn.style.opacity = '0.7';
    
    setTimeout(() => {
        alert(type === 'lost' ? 'Lost item registered. AI is currently scanning the Found database.' : 'Found item uploaded successfully! An alert has been sent to potential matches.');
        switchView('matches');
    }, 1500);
}

navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        switchView(e.target.dataset.target);
    });
});

switchView('home');
