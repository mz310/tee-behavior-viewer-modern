/* ============ Brand tokens ============ */
:root{
  --yellow:#F4B400;
  --green:#0F9D58;
  --red:#DB4437;
  --blue:#4285F4;
  --black:#000000;
  --ink:#ffffff;
  --muted:#9ca3af;
  --glass:#0B0F1Acc;
  --glass-2:#0B0F1A99;
  --border:#1f2937;
  --radius:14px;
  --shadow: 0 16px 40px rgba(0,0,0,.4);
}

*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%}
body{
  color:var(--ink);
  font-family:'Josefin Sans', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  background: radial-gradient(50% 60% at 15% -5%, rgba(66,133,244,.18), transparent 55%),
              radial-gradient(50% 60% at 95% 10%, rgba(15,157,88,.15), transparent 55%),
              radial-gradient(35% 35% at 85% 85%, rgba(244,180,0,.12), transparent 55%),
              linear-gradient(125deg, #090d16 0%, #0a0f1a 50%, #0a1215 100%);
  background-size: 120% 120%, 120% 120%, 120% 120%, 100% 100%;
  animation: bgShift 20s ease-in-out infinite alternate;
  overflow-x:hidden;
  min-height:100vh;
}
@keyframes bgShift{
  0%{ background-position: 0% 0%, 100% 0%, 0% 100%, 0% 0% }
  100%{ background-position: 40% 20%, 60% 15%, 100% 60%, 0% 0% }
}

.wrap{max-width:1100px; margin:0 auto; padding:20px 24px 32px; display:flex; flex-direction:column; min-height:100vh}

/* ============ Compact Header Bar ============ */
.header-bar{
  display:flex; align-items:center; gap:16px; margin-bottom:24px;
  background: linear-gradient(135deg, var(--glass), var(--glass-2));
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border:1px solid var(--border);
  border-radius: var(--radius);
  padding:14px 18px;
  box-shadow: 0 8px 24px rgba(0,0,0,.3);
}
.header-logo{
  width:70px; height:48px; flex-shrink:0;
  filter: drop-shadow(0 4px 12px rgba(0,0,0,.25));
}
.header-content{
  flex:1; display:flex; flex-direction:column; gap:6px;
}
.site-title{
  font-size:20px; font-weight:800; line-height:1.2; letter-spacing:0.3px;
  color:var(--ink);
}
.accent-bar{
  height: 4px; border-radius:999px;
  background: linear-gradient(90deg, var(--yellow), var(--red), var(--green), var(--blue));
  filter: drop-shadow(0 2px 8px rgba(66,133,244,.25));
  animation: barGlow 8s ease-in-out infinite alternate;
}
@keyframes barGlow{
  from{ opacity:.85 }
  to  { opacity:1 }
}
.site-subtitle{
  font-size:13px; color:var(--muted); margin-top:4px; line-height:1.4;
}

/* ============ Main Card ============ */
.card{
  position:relative;
  background: linear-gradient(160deg, var(--glass), var(--glass-2));
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border:1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow);
  overflow:hidden;
  flex:1;
}
.card::before{
  content:""; position:absolute; inset:-2px;
  background: radial-gradient(300px 150px at 30% -10%, rgba(66,133,244,.08), transparent 70%);
  pointer-events:none;
  z-index:0;
}
.card > *{ position:relative; z-index:1; }

/* ============ Form Controls ============ */
.controls{ display:grid; grid-template-columns: 1fr auto auto; gap:10px; align-items:end }
label{ display:block; color:var(--muted); font-size:13px; margin-bottom:6px; font-weight:600 }
.input-wrap{ position:relative }
.input-wrap .icon{
  position:absolute; left:12px; top:50%; transform:translateY(-50%);
  width:18px; height:18px; opacity:.6;
}
input[type=text]{
  width:100%;
  background:#0a1018; color:var(--ink); border:1px solid var(--border);
  padding:11px 14px; border-radius:10px; font-size:15px; outline:none;
  transition: box-shadow .2s ease, border-color .2s ease;
  font-family: inherit;
}
input[type=text]:focus{
  border-color: var(--blue);
  box-shadow: 0 0 0 3px rgba(66,133,244,.2);
}
button{
  border:none; cursor:pointer; font-weight:700; font-size:14px; letter-spacing:0.3px;
  padding:11px 18px; border-radius:10px; 
  background: linear-gradient(135deg, var(--yellow), var(--green));
  color:#0a0e0a; box-shadow: 0 4px 16px rgba(244,180,0,.25);
  transition: transform .15s ease, box-shadow .2s ease;
  font-family: inherit;
  white-space:nowrap;
}
button:hover{ transform: translateY(-1px); box-shadow:0 6px 20px rgba(244,180,0,.35) }
button:active{ transform: translateY(0) }
.ghost{
  background: transparent; color:var(--ink); border:1px solid var(--border); 
  box-shadow:0 2px 8px rgba(0,0,0,.2);
}
.ghost:hover{ 
  background: rgba(255,255,255,.05);
  box-shadow:0 4px 12px rgba(0,0,0,.3);
}

.hint{ font-size:11px; color:#6b7280; margin-top:8px; line-height:1.4 }
.hint code{ background:#0a1018; padding:2px 6px; border-radius:4px; font-size:10px }

/* ============ Alerts ============ */
.alert{display:none;margin-top:12px;border-radius:10px;padding:10px 14px;font-size:13px;font-weight:600}
.alert.error{color:#fca5a5;background:#7f1d1d22;border:1px solid #7f1d1d44}
.alert.ok{color:#6ee7b7;background:#065f4622;border:1px solid #065f4644}

/* ============ Toolbar ============ */
.toolbar{ 
  display:flex; align-items:center; justify-content:space-between; 
  gap:12px; flex-wrap:wrap; margin-top:16px; padding-top:16px;
  border-top:1px solid var(--border);
}
.student-info{flex:1; min-width:200px}
.title{ font-weight:800; font-size:16px; margin-bottom:4px }
.meta{ font-size:12px; color:var(--muted) }
.actions{ display:flex; gap:8px; flex-wrap:wrap }
.actions button{ 
  padding:8px 14px; font-size:13px;
  box-shadow:0 2px 8px rgba(0,0,0,.15);
}
select{
  background:#0a1018; color:var(--ink); border:1px solid var(--border);
  padding:8px 12px; border-radius:8px; font-size:13px; font-family:inherit;
  cursor:pointer;
}

/* ============ Embed ============ */
.embed{
  position:relative; width:100%; height:0; padding-top:177.7778%;
  border-radius:12px; border:1px solid var(--border); overflow:hidden; margin-top:16px;
  background:#0a0f18;
  box-shadow: 0 12px 32px rgba(0,0,0,.35);
  display:none;
}
.embed iframe{ position:absolute; inset:0; width:100%; height:100%; border:0 }

.note{ 
  display:none; margin-top:12px; font-size:13px; color:#d1d5db; 
  background:#0d1520; border:1px solid #1f2937; border-radius:10px; padding:10px 14px 
}
.note code{background:#0a1018; padding:2px 6px; border-radius:4px; font-size:11px}

/* ============ Popup Modal ============ */
.popup-overlay{
  position:fixed; inset:0; background:rgba(0,0,0,.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display:none; align-items:center; justify-content:center;
  z-index:9999; padding:20px;
  animation: fadeIn .3s ease;
}
.popup-overlay.active{ display:flex }
.popup-overlay.closing{ animation: fadeOut .3s ease }
@keyframes fadeIn{
  from{ opacity:0 }
  to{ opacity:1 }
}
@keyframes fadeOut{
  from{ opacity:1 }
  to{ opacity:0 }
}
.popup-card{
  position:relative; max-width:500px; width:100%;
  background: linear-gradient(160deg, var(--glass), var(--glass-2));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border:1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px 28px;
  box-shadow: 0 24px 60px rgba(0,0,0,.7);
  animation: slideUp .3s ease;
}
@keyframes slideUp{
  from{ opacity:0; transform: translateY(30px) scale(0.92) }
  to{ opacity:1; transform: translateY(0) scale(1) }
}
.popup-card::before{
  content:""; position:absolute; inset:-2px;
  background: radial-gradient(350px 180px at 50% -10%, rgba(66,133,244,.15), transparent 70%);
  pointer-events:none; z-index:0; border-radius: var(--radius);
}
.popup-card > *{ position:relative; z-index:1 }
.popup-title{
  font-size:24px; font-weight:800; margin-bottom:10px; color:var(--ink);
  text-align:center; letter-spacing:0.3px;
}
.popup-desc{
  font-size:14px; color:var(--muted); line-height:1.6; margin-bottom:24px;
  text-align:center;
}
.popup-input{
  width:100%;
  background:#0a1018; color:var(--ink); border:1px solid var(--border);
  padding:13px 16px; border-radius:10px; font-size:15px; outline:none;
  transition: box-shadow .2s ease, border-color .2s ease;
  font-family: inherit; margin-bottom:18px;
}
.popup-input:focus{
  border-color: var(--blue);
  box-shadow: 0 0 0 3px rgba(66,133,244,.25);
}
.popup-actions{
  display:flex; gap:12px;
}
.popup-actions button{ flex:1; font-size:15px; padding:12px 20px }

/* ============ Footer ============ */
footer{ 
  margin:32px 0 0; color:var(--muted); font-size:11px; 
  display:flex; align-items:center; gap:16px; justify-content:space-between; 
  flex-wrap:wrap; padding-top:20px; border-top:1px solid #1a1f2b
}
.logo-row{ display:flex; gap:10px; align-items:center }
.badge{
  display:grid; place-items:center; 
  background:#0a1018; border:1px solid var(--border); border-radius:10px; 
  padding:6px 8px;
  transition: transform .2s ease, box-shadow .2s ease;
}
.badge img{ height:22px; width:auto; display:block }
.badge:hover{ 
  transform: translateY(-2px); 
  box-shadow:0 6px 16px rgba(0,0,0,.3);
}

/* ============ Mascot ============ */
.mascot{
  position:fixed; right:20px; bottom:20px; 
  width:80px; height:auto; pointer-events:none; opacity:.75;
  animation: floatY 6s ease-in-out infinite;
  filter: drop-shadow(0 6px 16px rgba(0,0,0,.4));
}
@keyframes floatY{
  0%, 100%{ transform: translateY(0) }
  50%{ transform: translateY(-8px) }
}

/* ============ Responsive ============ */
@media (max-width:942px){
  .header-logo{ display:none }
}

@media (max-width:768px){
  .header-bar{ flex-direction:column; align-items:flex-start; padding:16px }
  .site-title{ font-size:18px }
  .controls{ grid-template-columns:1fr }
  .controls button{ width:100% }
  .toolbar{ flex-direction:column; align-items:stretch }
  .actions{ width:100% }
  .actions button{ flex:1 }
  select{ width:100% }
  .wrap{ padding:16px }
  .popup-card{ padding:24px 20px }
  .popup-title{ font-size:20px }
}

@media (max-width:480px){
  .site-title{ font-size:16px }
  .actions{ flex-direction:column }
  .actions button{ width:100% }
  .popup-actions{ flex-direction:column }
  .popup-actions button{ width:100% }
}