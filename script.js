const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const img = (src, title, subtitle='Image evidence') => ({type:'image', src, title, subtitle});
const file = (src, title, icon='fa-file-lines', subtitle='File evidence') => ({type:'file', src, title, icon, subtitle});
const drive = (url, title) => ({type:'drive', src:url, title, subtitle:'Google Drive presentation video'});
const enc = s => s;

const paths = {
  awards:'assets/awards/',
  iicc:'assets/awards/IICC 2025/',
  project:'assets/project/',
  pdf:'assets/project/pdf-previews/',
  charity:'assets/activities/Bữa cơm tất niên - Bệnh viện K - 2026/',
  council:'assets/activities/CLB Phenikaa Student Council/',
  martial:'assets/activities/CLB võ thuật Việt Nhật/',
  belt:'assets/activities/Kỳ thi lên đai/',
  flag:'assets/activities/Lễ trao cờ truyền thống nhân ngày Academic Year 2024-2025/',
  winter:'assets/activities/Mùa đông ấm - HĐ thiện nguyện/'
};

const iiccNames = [
  'z7165677244443_009d6e45be515e973fa2e00b68c4a9a1.jpg',
  'z7165677277822_062f681612ac3b7dfcc18b9794f684ce.jpg',
  'z7165677279153_7de3790bbf55a7a72fb3ab6a007270ec.jpg',
  'z7165677280024_534d786d05cf9db9d051ec5011afeab9.jpg',
  'z7165677284050_df2324cb76d17b0829f7f3fcad2714ac.jpg',
  'z7165677286445_d01a280c80965a236e21d443761399ac.jpg',
  'z7165677287712_528b2a6645c59bb5ee35203393b8b9f2.jpg',
  'z7165677289581_a091b7544c6de53ad85b324c0ea9456f.jpg',
  'z7165677294205_73166b7433c56b9fbfc7791a5e2505f7.jpg',
  'z7165677313784_f222124f4c35484933f222e6a4dacbd1.jpg',
  'z7165677315099_a047b9e914feacc4116e6fe4a79d2a0d.jpg',
  'z7165677317460_d5e4f5119e109a7c937085e15bdf5542.jpg',
  'z7165677322897_561aa9d42860965cd407f4acb7e41bd5.jpg',
  'z7165677324319_19e26dfeae31c7b16eb27c2e84bd6d8e.jpg',
  'z7165677329763_a678facefa90fe2dd9eb3a788a6db599.jpg',
  'z7165677330982_1ec9580248ba01d7f4ba2df545d0111b.jpg'
];

const awardItems = [
  img(paths.awards + 'IICC.jpg', 'IICC Certificate', 'International competition certificate'),
  img(paths.awards + 'scholarship.jpg', 'Academic Scholarship', 'School scholarship evidence'),
  img(paths.awards + 'ascend.jpg', 'Academic Recognition', 'Certificate and academic recognition'),
  img(paths.awards + 'IICC 2025/z7165677244443_009d6e45be515e973fa2e00b68c4a9a1.jpg', 'IICC Team Photo', 'International competition activity'),
  img(paths.awards + 'IICC 2025/z7165677284050_df2324cb76d17b0829f7f3fcad2714ac.jpg', 'IICC Award Moment', 'Award presentation evidence'),
  img(paths.awards + 'IICC 2025/z7165677286445_d01a280c80965a236e21d443761399ac.jpg', 'IICC Stage Recognition', 'Award ceremony evidence'),
  img(paths.awards + 'IICC 2025/z7165677317460_d5e4f5119e109a7c937085e15bdf5542.jpg', 'Phenikaa Team Evidence', 'Team and school representation'),
  img(paths.awards + 'IICC 2025/z7165677322897_561aa9d42860965cd407f4acb7e41bd5.jpg', 'International Booth Display', 'Competition exhibition evidence'),
  img(paths.awards + 'IICC 2025/z7165677324319_19e26dfeae31c7b16eb27c2e84bd6d8e.jpg', 'Award Stage Overview', 'Competition stage evidence'),
  img(paths.awards + 'IICC 2025/z7165677330982_1ec9580248ba01d7f4ba2df545d0111b.jpg', 'Community Interaction', 'Competition activity evidence')
];

const charityNames = ['0a74a9ca-df8e-45ac-9877-7c84450b0031.jpg','1b0e5719-8ab8-4317-9dcb-6104ee0b80c2.jpg','3b82484a-3395-4061-9f88-5618e4f8f8a1.jpg','5d2487e9-c9a6-4e2b-a249-09fef78dc98a.jpg','6d4639ed-0bfe-4cb9-8b8f-f584423616f1.jpg','7c7ab929-02a2-4a96-93ae-65e02cfe14fa.jpg','8aef3b91-b33d-4175-8028-c76b24a4fd54.jpg','9cd988f8-544f-4be4-9942-44ae7e15c33f.jpg','9d2d4409-f7af-4bb6-a025-841f9a6123c6.jpg','9d508c1d-3dd8-4739-924e-8c2af2b8716c.jpg','15cd2349-03f4-4937-84b3-6763b6d3bee8.jpg','37f45a62-836b-411e-aeda-345629b1b34b.jpg','39b2883a-097c-44d3-862b-2e80709fc724.jpg','49b75fa4-8785-4080-9791-ec027b4f1ebb.jpg','0654fd47-3606-4360-a01b-492cf389da44.jpg','70a0ad0f-147d-438d-b417-4912a98c75ab.jpg','759ec76d-2f48-4676-a56d-1c35084e9a63.jpg','7866af02-02b6-4aa1-b697-3f9546c48183.jpg','796366e7-c23e-4410-aea7-66776b1dde20.jpg','977b1ac2-e396-47c0-a239-a897f18d3642.jpg','a181963c-3cfa-4d84-a136-b4b7c6bdb9d9.jpg','b5f8138c-bafc-474d-be5b-8f84a4f95afe.jpg','b455c00a-49b1-47f4-b072-048822d7e878.jpg','b455c00a-49b1-47f4-b072-048822d7e878 (1).jpg','b7f6d9c5-07aa-400a-aa6f-bfa7382a5189.jpg','bbc8af06-06ec-4ecc-8ab6-ff6c32270c62.jpg','bdd05e95-246a-45da-b897-4f2437f25922.jpg','be5e9584-1ca0-4d80-a6dc-c4adc1b0251b.jpg','c6f20e6b-004e-4bea-a7de-5a943925c769.jpg','e6f70c22-98a7-4542-8d75-c6f7b1c3380f.jpg','e169c1bb-f860-42f5-b9c8-a3b4238c6fb4.jpg','e6422cd6-41d7-436c-b3f9-2ce40322f55e.jpg'];

const activities = [
  {
    id:'k-hospital', filter:'charity', tag:'Community Service', date:'2026',
    title:'Year-End Charity Meal at K Hospital',
    role:'Volunteer participant and support member',
    desc:'Supported a year-end charity meal program for patients and families at K Hospital, helping prepare, distribute and document meaningful community activities.',
    assets:charityNames.map((n,i)=>img(paths.charity+n, `K Hospital Charity Evidence ${i+1}`, 'Community service photo'))
  },
  {
    id:'phenikaa-council', filter:'club', tag:'Student Council', date:'2025',
    title:'Phenikaa Student Council Activities',
    role:'Student council activity participant',
    desc:'Joined school council activities, group coordination and student event documentation.',
    assets:[file(paths.council+'7164353721227','Student Council Activity Video','fa-file-video','Local activity video'), img(paths.council+'z716572333169_b00e9e5dcb2d4f0268f24dcfde0ff24b.jpg','Student Council Group Photo','Club evidence')]
  },
  {
    id:'viet-nhat-martial', filter:'martial', tag:'Martial Arts', date:'2025',
    title:'Viet Nhat Martial Arts Club',
    role:'Martial arts club member',
    desc:'Practiced discipline, endurance and teamwork through Viet Nhat martial arts club training and performance activities.',
    assets:[img(paths.martial+'z7165737710306_da5fcd719f24942dfcf92610b30447b3.jpg','Martial Arts Performance 1','Martial arts evidence'), img(paths.martial+'z7165738651762_0e3c2bce4de4ce089306b4a8057f1bd4.jpg','Martial Arts Performance 2','Martial arts evidence')]
  },
  {
    id:'belt-exam', filter:'martial', tag:'Martial Arts Examination', date:'2025',
    title:'Martial Arts Belt Promotion Exam',
    role:'Participant in belt promotion event',
    desc:'Participated in a formal belt promotion activity, demonstrating training progress, discipline and perseverance.',
    assets:[img(paths.belt+'z7164458639383_f85be1ed490f8cd4980905a72f1e31d2.jpg','Belt Promotion Team Photo 1','Exam evidence'), img(paths.belt+'z7164458999108_df4e55802eb4cff723b5ff3cf744d110.jpg','Belt Promotion Team Photo 2','Exam evidence'), img(paths.belt+'z7164459020081_f9172c74e567779f4b41bc66ae937af9.jpg','Belt Promotion Group Photo','Exam evidence')]
  },
  {
    id:'academic-year-flag', filter:'academic', tag:'School Ceremony', date:'2024-2025',
    title:'Traditional Flag Ceremony - Academic Year 2024-2025',
    role:'School event participant',
    desc:'Took part in a traditional school flag ceremony for the academic year, representing school spirit and collective responsibility.',
    assets:[img(paths.flag+'z7165753822163_311cd53562c2dd7137c126753f56d676.jpg','Academic Year Ceremony 1','School ceremony evidence'), img(paths.flag+'z7165759786059_e4521eb4ba1e8d0dfb37e7c143e5c624.jpg','Academic Year Ceremony 2','School ceremony evidence'), img(paths.flag+'z7165759789607_91c3fa2bf7832615ffc9df0cbe7f5963.jpg','Academic Year Ceremony 3','School ceremony evidence'), img(paths.flag+'z7165759794015_9a23ed6a737d4b11f60493bb6f52147e.jpg','Academic Year Ceremony 4','School ceremony evidence')]
  },
  {
    id:'warm-winter', filter:'charity', tag:'Charity Certificate', date:'2025',
    title:'Warm Winter Charity Campaign',
    role:'Charity campaign participant',
    desc:'Certificate evidence for joining a warm winter charity activity and supporting community outreach.',
    assets:[img(paths.winter+'Muadongam_(12)','Warm Winter Charity Certificate','Charity certificate')]
  }
];

const projectAssets = [
  img(paths.project+'Bản sao của z7154367477797_93afa1dcdadf1a376008e55eb5f08b5d.jpg','Project Working Session','Duino-Coin project photo'),
  img(paths.project+'Bản sao của z7192573218021_de1d4af6946ae5f1797a8cb991b5e885.jpg','Project Presentation Review','Duino-Coin project photo'),
  file(paths.project+'Bản sao của Poster Duico-Coin.pptx','Duino-Coin Project Poster','fa-file-powerpoint','PowerPoint poster file'),
  file(paths.project+'Bản sao của Duino-Coin Report (1).pdf','Duino-Coin Technical Report','fa-file-pdf','Project PDF report')
];
const driveVideos = [
  drive('https://drive.google.com/file/d/1FdHkfHdOppZ8zrijedZtCFQiL-nGZtQW/view?usp=drive_link','Presentation Video 1'),
  drive('https://drive.google.com/file/d/1KCwrSLNDgsFirlgNHpn7rwvJQ7bo2qrI/view?usp=drive_link','Presentation Video 2'),
  drive('https://drive.google.com/file/d/11Nt-GX3UTbfqTSWSqQHZX6R4MMbaXHsY/view?usp=drive_link','Presentation Video 3')
];
function escapeHTML(str){ return String(str).replace(/[&<>'"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function fallback(title='Image'){ return `<div class="img-fallback"><span>${escapeHTML(title)}</span></div>`; }
function imgTag(item){ return `<img src="${escapeHTML(item.src)}" alt="${escapeHTML(item.title)}" loading="lazy" data-title="${escapeHTML(item.title)}">`; }
function driveEmbed(url){ const m = url.match(/\/d\/([^/]+)/); return m ? `https://drive.google.com/file/d/${m[1]}/preview` : url; }

function setupBrokenImageFallback(){
  document.addEventListener('error', e => {
    const im = e.target;
    if(im.tagName !== 'IMG') return;
    const tried = Number(im.dataset.tried || 0);
    const original = im.dataset.originalSrc || im.getAttribute('src');
    im.dataset.originalSrc = original;
    const candidates = [];
    const add = v => { if(v && !candidates.includes(v) && v !== im.src) candidates.push(v); };
    if(original.match(/\.jpe?g$/i)){
      add(original.replace(/\.jpe?g$/i,'.png'));
      add(original.replace(/\.jpe?g$/i,'.jpeg'));
      add(original.replace(/\.jpe?g$/i,''));
    } else if(original.match(/\.png$/i)){
      add(original.replace(/\.png$/i,'.jpg'));
      add(original.replace(/\.png$/i,'.jpeg'));
      add(original.replace(/\.png$/i,''));
    } else {
      add(original + '.jpg');
      add(original + '.jpeg');
      add(original + '.png');
      add(original + '.JPG');
    }
    add(original.replace(/%20/g,' '));
    add(original.replace(/ /g,'%20'));
    if(tried < candidates.length){
      im.dataset.tried = String(tried + 1);
      im.src = candidates[tried];
      return;
    }
    const box = document.createElement('div');
    box.className = 'img-fallback';
    box.innerHTML = `<span>${escapeHTML(im.dataset.title || im.alt || 'Image evidence')}</span>`;
    im.replaceWith(box);
  }, true);
}

function openImage(src,title){
  const modal = $('#mediaModal'), box = $('#modalBox');
  box.innerHTML = `<div class="modal-content"><img class="modal-image" src="${escapeHTML(src)}" alt="${escapeHTML(title)}"><h2>${escapeHTML(title)}</h2></div>`;
  modal.classList.add('show'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function openActivity(id){
  const ev = activities.find(a=>a.id===id); if(!ev) return;
  const modal = $('#mediaModal'), box = $('#modalBox');
  box.innerHTML = `<div class="modal-content"><p class="eyebrow">${escapeHTML(ev.tag)} · ${escapeHTML(ev.date)}</p><h2>${escapeHTML(ev.title)}</h2><p><b>${escapeHTML(ev.role)}</b><br>${escapeHTML(ev.desc)}</p><div class="modal-gallery">${ev.assets.map(assetTile).join('')}</div></div>`;
  modal.classList.add('show'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function closeModal(){ const m=$('#mediaModal'); if(m){m.classList.remove('show');m.setAttribute('aria-hidden','true');document.body.style.overflow='';} }
function assetTile(a){
  if(a.type === 'image') return `<button data-img="${escapeHTML(a.src)}" data-title="${escapeHTML(a.title)}">${imgTag(a)}<span>${escapeHTML(a.title)}</span></button>`;
  if(a.type === 'drive') return `<a href="${escapeHTML(a.src)}" target="_blank"><div class="file-tile"><i class="fa-brands fa-google-drive"></i></div><span>${escapeHTML(a.title)}</span></a>`;
  return `<a href="${escapeHTML(a.src)}" target="_blank"><div class="file-tile"><i class="fa-solid ${escapeHTML(a.icon || 'fa-file-lines')}"></i></div><span>${escapeHTML(a.title)}</span></a>`;
}

let awardIndex = 0;
function renderAwardCarousel(){
  const stage = $('#awardStage'), dots = $('#awardDots'); if(!stage || !dots) return;
  stage.innerHTML = awardItems.map((item,i)=>{
    let raw = i - awardIndex;
    if(raw > awardItems.length/2) raw -= awardItems.length;
    if(raw < -awardItems.length/2) raw += awardItems.length;
    const pos = Math.max(-4, Math.min(4, raw));
    const hidden = Math.abs(raw) > 3;
    return `<button class="award-card ${i===awardIndex?'is-active':''} ${hidden?'is-hidden':''}" data-pos="${pos}" data-index="${i}" data-img="${escapeHTML(item.src)}" data-title="${escapeHTML(item.title)}">${imgTag(item)}<span class="award-caption">${escapeHTML(item.title)}</span></button>`;
  }).join('');
  dots.innerHTML = awardItems.map((_,i)=>`<button class="${i===awardIndex?'active':''}" data-dot="${i}" aria-label="Open award ${i+1}"></button>`).join('');
}
function moveAward(dir){ awardIndex = (awardIndex + dir + awardItems.length) % awardItems.length; renderAwardCarousel(); }

function renderActivities(filter='all'){
  const grid = $('#activityGrid'); if(!grid) return;
  const list = activities.filter(a => filter === 'all' || a.filter === filter);
  grid.innerHTML = list.map(ev => {
    const thumbs = ev.assets.slice(0,5);
    const more = ev.assets.length - thumbs.length;
    return `<article class="activity-card"><div class="activity-meta"><span>${escapeHTML(ev.tag)}</span><span>${escapeHTML(ev.date)}</span></div><h3>${escapeHTML(ev.title)}</h3><p><b>${escapeHTML(ev.role)}</b><br>${escapeHTML(ev.desc)}</p><div class="thumbs">${thumbs.map(a => a.type==='image' ? `<button data-img="${escapeHTML(a.src)}" data-title="${escapeHTML(a.title)}">${imgTag(a)}</button>` : `<button onclick="window.open('${escapeHTML(a.src)}','_blank')"><div class="file-tile"><i class="fa-solid fa-file-video"></i></div></button>`).join('')}${more>0?`<div class="more-thumb">+${more}</div>`:''}</div><button class="open-card" data-activity="${escapeHTML(ev.id)}">Open full evidence</button></article>`;
  }).join('');
}

function renderProjectPage(){
  const evGrid = $('#projectEvidence');
  if(evGrid){
    evGrid.innerHTML = projectAssets.map(a => {
      if(a.type === 'image') return `<article class="evidence-card"><button data-img="${escapeHTML(a.src)}" data-title="${escapeHTML(a.title)}">${imgTag(a)}<div><b>${escapeHTML(a.title)}</b><span>${escapeHTML(a.subtitle)}</span></div></button></article>`;
      return `<article class="evidence-card"><a href="${escapeHTML(a.src)}" target="_blank"><div class="file-card"><i class="fa-solid ${escapeHTML(a.icon)}"></i></div><div><b>${escapeHTML(a.title)}</b><span>${escapeHTML(a.subtitle)}</span></div></a></article>`;
    }).join('');
  }
  const videoGrid = $('#videoGrid');
  if(videoGrid){
    videoGrid.innerHTML = driveVideos.map(v=>`<article class="video-card"><iframe src="${escapeHTML(driveEmbed(v.src))}" allow="autoplay; encrypted-media" allowfullscreen></iframe><div><b>${escapeHTML(v.title)}</b><span>${escapeHTML(v.subtitle)}</span></div></article>`).join('');
  }
}

const initialChart = [44,58,50,69,64,82,76,91,88,103,98,112];
let chartData = [...initialChart], balance = 1240.5, hash = 503;
function drawTradeChart(){
  const c = $('#tradeChart'); if(!c) return;
  const ctx = c.getContext('2d'), w=c.width, h=c.height;
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle = '#ffffff'; ctx.fillRect(0,0,w,h);
  ctx.strokeStyle = '#dbeafe'; ctx.lineWidth = 1;
  for(let y=38;y<h;y+=46){ctx.beginPath();ctx.moveTo(36,y);ctx.lineTo(w-18,y);ctx.stroke();}
  const max = Math.max(...chartData)+12, min=Math.min(...chartData)-12;
  const pts = chartData.map((v,i)=>[50 + i*(w-90)/(chartData.length-1), h-42 - ((v-min)/(max-min))*(h-86)]);
  const grad = ctx.createLinearGradient(0,0,w,0); grad.addColorStop(0,'#10b981'); grad.addColorStop(1,'#60a5fa');
  ctx.strokeStyle = grad; ctx.lineWidth = 5; ctx.lineJoin='round'; ctx.lineCap='round';
  ctx.beginPath(); pts.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1])); ctx.stroke();
  pts.forEach(p=>{ctx.fillStyle='#10b981';ctx.beginPath();ctx.arc(p[0],p[1],5,0,Math.PI*2);ctx.fill();});
  ctx.fillStyle='#475569'; ctx.font='700 14px Inter'; ctx.fillText('DUCO wallet value and mining activity simulation', 42, 26);
}
function updateTerminal(type='info'){
  const b=$('#balanceVal'), h=$('#hashVal'), led=$('#ledgerBox');
  if(b) b.textContent = balance.toFixed(2);
  if(h) h.textContent = String(hash);
  if(led){
    const time = new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
    const text = type==='buy' ? 'BUY action simulated - wallet balance increased' : type==='sell' ? 'SELL action simulated - wallet balance decreased' : 'Dashboard reset to original project demo values';
    led.insertAdjacentHTML('afterbegin', `<p class="${type}"><span>[${time}]</span> ${text}</p>`);
  }
}
function initTradeDemo(){
  if(!$('#tradeChart')) return;
  drawTradeChart(); updateTerminal('info');
  $('#buyBtn')?.addEventListener('click',()=>{balance += 15.25; hash += Math.floor(Math.random()*12); chartData.push(chartData.at(-1)+Math.random()*13+2); chartData.shift(); drawTradeChart(); updateTerminal('buy');});
  $('#sellBtn')?.addEventListener('click',()=>{balance = Math.max(0,balance-11.4); hash = Math.max(450,hash-Math.floor(Math.random()*10)); chartData.push(chartData.at(-1)-Math.random()*12); chartData.shift(); drawTradeChart(); updateTerminal('sell');});
  $('#resetBtn')?.addEventListener('click',()=>{balance=1240.5;hash=503;chartData=[...initialChart];drawTradeChart();updateTerminal('info');});
}

function setupEvents(){
  $('#awardPrev')?.addEventListener('click',()=>moveAward(-1));
  $('#awardNext')?.addEventListener('click',()=>moveAward(1));
  document.addEventListener('click', e => {
    const dot = e.target.closest('[data-dot]'); if(dot){ awardIndex = Number(dot.dataset.dot); renderAwardCarousel(); return; }
    const imgBtn = e.target.closest('[data-img]'); if(imgBtn){ openImage(imgBtn.dataset.img, imgBtn.dataset.title || 'Image evidence'); return; }
    const act = e.target.closest('[data-activity]'); if(act){ openActivity(act.dataset.activity); return; }
    if(e.target.id === 'modalClose' || e.target.id === 'mediaModal') closeModal();
  });
  $('#activityFilters')?.addEventListener('click', e => {
    const btn = e.target.closest('button'); if(!btn) return;
    $$('#activityFilters button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active'); renderActivities(btn.dataset.filter);
  });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); if(e.key==='ArrowLeft') moveAward(-1); if(e.key==='ArrowRight') moveAward(1); });
}
function revealOnScroll(){
  const io = new IntersectionObserver(entries => entries.forEach(en=>{ if(en.isIntersecting) en.target.classList.add('show'); }), {threshold:.12});
  $$('.reveal').forEach(el=>io.observe(el));
}

setupBrokenImageFallback();
renderAwardCarousel();
renderActivities();
renderProjectPage();
initTradeDemo();
setupEvents();
revealOnScroll();
