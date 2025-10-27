const DATA_URL = "/data/students.json";
const FETCH_OPTIONS = { cache: "no-cache" };

const $ = (q) => document.querySelector(q);
const uname = $('#uname');
const btn = $('#lookupBtn');
const ok = $('#ok');
const err = $('#err');
const toolbar = $('#toolbar');
const title = $('#studentTitle');
const meta = $('#metaLine');
const frame = $('#canvaFrame');
const embed = $('#embed');
const openBtn = $('#openCanva');
const reportSelect = $('#reportSelect');
const userlist = $('#userlist');
const popupOverlay = $('#popupOverlay');
const popupUsername = $('#popupUsername');
const popupViewReport = $('#popupViewReport');
const popupGotIt = $('#popupGotIt');

let DB = null;
let lastKey = null;

$('#yr').textContent = new Date().getFullYear();

function ensureEmbed(url) {
  try {
    const u = new URL(url);
    if (u.pathname.endsWith('/view') && !u.searchParams.has('embed')) {
      u.searchParams.set('embed', '');
    }
    return u.toString();
  } catch (_) {
    return url;
  }
}

async function fetchDB(force = false) {
  const url = new URL(DATA_URL, window.location.origin);
  if (force) {
    url.searchParams.set('_', Date.now());
  }
  const res = await fetch(url.toString(), FETCH_OPTIONS);
  if (!res.ok) throw new Error('students.json уншиж чадсангүй: ' + res.status);
  DB = await res.json();
  
  // datalist
  userlist.innerHTML = '';
  const students = DB.students || {};
  Object.keys(students).forEach(key => {
    const opt = document.createElement('option');
    const dn = students[key].displayName || key;
    opt.value = key;
    opt.label = dn;
    userlist.appendChild(opt);
  });
}

function pickReport(obj, reportId) {
  const reps = Array.isArray(obj.reports) ? obj.reports : [];
  if (!reps.length) return null;
  if (reportId) {
    return reps.find(r => String(r.id) === String(reportId)) || reps[0];
  }
  return reps[0];
}

function showErr(msg) {
  err.textContent = msg || 'Алдаа гарлаа.';
  err.style.display = 'block';
  ok.style.display = 'none';
  toolbar.style.display = 'none';
  embed.style.display = 'none';
}

function hideErr() {
  err.style.display = 'none';
}

function renderStudent(key, reportId) {
  const s = (DB && DB.students && DB.students[key]);
  if (!s) {
    showErr('Ийм username олдсонгүй.');
    return;
  }

  hideErr();
  ok.style.display = 'block';
  setTimeout(() => ok.style.display = 'none', 2200);
  
  title.textContent = (s.displayName || key) + ' – Зан төлөвийн тайлан';
  meta.textContent = (DB.updatedAt ? ('Жагсаалт шинэчлэгдсэн: ' + DB.updatedAt) : '') + 
                     (s.class ? (' • Анги: ' + s.class) : '');

  const reps = Array.isArray(s.reports) ? s.reports : [];
  reportSelect.innerHTML = '';
  
  if (reps.length > 1) {
    reportSelect.style.display = '';
    reps.forEach((r, i) => {
      const o = document.createElement('option');
      o.value = r.id ?? ('r' + i);
      o.textContent = r.title ? r.title : (r.id ?? ('Тайлан ' + (i + 1)));
      reportSelect.appendChild(o);
    });
    if (reportId) {
      reportSelect.value = String(reportId);
    }
  } else {
    reportSelect.style.display = 'none';
  }

  const rep = pickReport(s, reportId);
  if (!rep) {
    showErr('Энэ сурагчид тайлан бүртгэгдээгүй байна.');
    return;
  }

  const canva = ensureEmbed(rep.canvaUrl);
  lastKey = key;

  frame.src = canva;
  embed.style.display = 'block';
  toolbar.style.display = 'flex';

  openBtn.onclick = () => window.open(canva.replace('/view?embed', '/view'), '_blank', 'noopener');

  try {
    localStorage.setItem('tee-beh-report-last', key);
  } catch (_) {}
  
  embed.scrollIntoView({ behavior: 'smooth', block: 'start' });

  reportSelect.onchange = () => renderStudent(key, reportSelect.value);
}

async function ensureDBThenRender(userKey, reportId) {
  if (!DB) {
    await fetchDB(false).catch(e => showErr(e.message));
  }
  if (DB) {
    renderStudent(userKey, reportId);
  }
}

// Event listeners
btn.addEventListener('click', () => ensureDBThenRender(uname.value.trim().toLowerCase()));

uname.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    ensureDBThenRender(uname.value.trim().toLowerCase());
  }
});

// Popup controls
function closePopup() {
  popupOverlay.classList.add('closing');
  setTimeout(() => {
    popupOverlay.classList.remove('active', 'closing');
  }, 300);
}

popupGotIt.addEventListener('click', closePopup);

popupViewReport.addEventListener('click', () => {
  const username = popupUsername.value.trim().toLowerCase();
  if (username) {
    uname.value = username;
    closePopup();
    ensureDBThenRender(username);
  }
});

popupUsername.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    popupViewReport.click();
  }
});

// Initialize from URL
(function initFromURL() {
  const p = new URLSearchParams(window.location.search);
  const u = p.get('u');
  const r = p.get('r');
  window.__forceLinkMode__ = p.get('noframe') === '1';
  const remembered = localStorage.getItem('tee-beh-report-last');

  fetchDB(false).then(() => {
    if (u) {
      uname.value = u;
      ensureDBThenRender(u, r);
    } else if (remembered) {
      uname.value = remembered;
    } else {
      // Show popup only if no username in URL and no remembered username
      if (!u && !remembered) {
        setTimeout(() => {
          popupOverlay.classList.add('active');
        }, 500);
      }
    }
  }).catch(e => showErr(e.message));
})();
(function () {
  const projectName = "tee-behavior-viewer-modern";

  const payload = {
    project: projectName,
    path: window.location.pathname + window.location.search,
    userAgent: navigator.userAgent,
    ts: Date.now()
  };

  // Одоохондоо зөвхөн консоль дээр тэмдэглэнэ
  console.log("analytics event:", payload);

  // Хэрвээ ирээдүйд сервер рүү илгээмээр байвал fetch ашиглана:
  // fetch("/api/track", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload)
  // });
})();