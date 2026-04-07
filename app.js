var F=[
  {n:"Starbucks",e:"☕",w:"Free drink of any size",c:"drink",t:"t-drink",s:"national",h:"Sign up for Starbucks Rewards. Free drink loads to your app on your birthday.",q:"Starbucks"},
  {n:"Dunkin",e:"🍩",w:"Free medium drink with app",c:"drink",t:"t-drink",s:"national",h:"Join Dunkin Rewards. Drink reward appears in app on your birthday.",q:"Dunkin"},
  {n:"Jamba Juice",e:"🥤",w:"Free 16oz smoothie",c:"drink",t:"t-drink",s:"national",h:"Sign up for Jamba Rewards. Free smoothie unlocks on your birthday.",q:"Jamba Juice"},
  {n:"IHOP",e:"🥞",w:"Free stack of pancakes",c:"food",t:"t-food",s:"national",h:"Join MyHOP rewards. Free short stack redeemable on your birthday.",q:"IHOP"},
  {n:"Denny's",e:"🍳",w:"Free Grand Slam breakfast",c:"food",t:"t-food",s:"national",h:"Sign up for Denny's Rewards. Free Grand Slam on your birthday.",q:"Dennys"},
  {n:"Baskin Robbins",e:"🍦",w:"Free 2.5oz ice cream scoop",c:"food",t:"t-food",s:"national",h:"Join BR Rewards. Free scoop redeemable on your birthday.",q:"Baskin Robbins"},
  {n:"Cold Stone Creamery",e:"🍨",w:"Free ice cream creation",c:"food",t:"t-food",s:"national",h:"Sign up for My Cold Stone Club. Email arrives with free creation offer.",q:"Cold Stone Creamery"},
  {n:"Panera Bread",e:"🥐",w:"Free pastry or bakery item",c:"food",t:"t-food",s:"national",h:"Join MyPanera. Birthday reward loads to your account automatically.",q:"Panera Bread"},
  {n:"Krispy Kreme",e:"🍩",w:"Free doughnut on your birthday",c:"food",t:"t-food",s:"national",h:"Sign up for Krispy Kreme Rewards. Free doughnut in store or app.",q:"Krispy Kreme"},
  {n:"Chipotle",e:"🌯",w:"Free chips and guac with app",c:"food",t:"t-food",s:"national",h:"Join Chipotle Rewards. Birthday reward appears in app.",q:"Chipotle"},
  {n:"Buffalo Wild Wings",e:"🍗",w:"Free appetizer with rewards",c:"food",t:"t-food",s:"national",h:"Join Blazin Rewards. Free appetizer on your birthday month.",q:"Buffalo Wild Wings"},
  {n:"Applebees",e:"🍰",w:"Free dessert with entree",c:"food",t:"t-food",s:"national",h:"Join Applebees email list. Birthday dessert offer emailed to you.",q:"Applebees"},
  {n:"Red Robin",e:"🍔",w:"Free Tavern Double burger",c:"food",t:"t-food",s:"national",h:"Join Red Robin Royalty. Free birthday burger loaded to your account.",q:"Red Robin"},
  {n:"Cheesecake Factory",e:"🍰",w:"Free slice of cheesecake",c:"food",t:"t-food",s:"national",h:"Join their email list. Birthday offer sent to your inbox.",q:"Cheesecake Factory"},
  {n:"Moes Southwest Grill",e:"🌮",w:"Free burrito with rewards",c:"food",t:"t-food",s:"national",h:"Join Moes Rewards. Free birthday burrito in app.",q:"Moes Southwest Grill"},
  {n:"Auntie Annes",e:"🥨",w:"Free pretzel",c:"food",t:"t-food",s:"national",h:"Join Pretzel Perks. Birthday pretzel appears in your app.",q:"Auntie Annes"},
  {n:"Cinnabon",e:"🌀",w:"Free minibon",c:"food",t:"t-food",s:"national",h:"Join Cinnabon rewards. Birthday reward emailed to you.",q:"Cinnabon"},
  {n:"Marble Slab Creamery",e:"🍦",w:"Free ice cream with signup",c:"food",t:"t-food",s:"national",h:"Join My Sweet Rewards. Birthday offer emailed to you.",q:"Marble Slab Creamery"},
  {n:"Sephora",e:"💄",w:"Free birthday gift in store",c:"beauty",t:"t-beauty",s:"national",h:"Join Beauty Insider. Pick up your gift in store during your birthday month.",q:"Sephora"},
  {n:"Ulta Beauty",e:"💅",w:"Free birthday gift plus bonus points",c:"beauty",t:"t-beauty",s:"national",h:"Join Ultamate Rewards. Gift available in store during birthday month.",q:"Ulta Beauty"},
  {n:"Bath and Body Works",e:"🧴",w:"Free item with purchase",c:"beauty",t:"t-beauty",s:"national",h:"Join My Bath and Body Works Rewards. Offer sent by email on your birthday.",q:"Bath Body Works"},
  {n:"Kohls",e:"🛍️",w:"5 dollar birthday coupon",c:"retail",t:"t-retail",s:"national",h:"Join Kohls Rewards. Birthday offer emailed or in app.",q:"Kohls"},
  {n:"DSW",e:"👟",w:"5 dollar birthday bonus",c:"retail",t:"t-retail",s:"national",h:"Join DSW VIP. Birthday reward added to your account.",q:"DSW shoe store"},
  {n:"Dave and Busters",e:"🎮",w:"Free 10 dollar power card",c:"fun",t:"t-fun",s:"national",h:"Join D and B Rewards. Free power card loaded on your birthday.",q:"Dave Busters"},
  {n:"AMC Theatres",e:"🎬",w:"Free large popcorn",c:"fun",t:"t-fun",s:"national",h:"Join AMC Stubs. Birthday popcorn reward added to your account.",q:"AMC Theatres"},
  {n:"Build A Bear",e:"🧸",w:"Pay your age for a bear",c:"fun",t:"t-fun",s:"national",h:"Join Count Your Candles club. Pay your age up to 29 dollars for a bear on your birthday.",q:"Build A Bear Workshop"},
  {n:"Chip City",e:"🍪",w:"Free cookie on your birthday",c:"food",t:"t-food",s:"regional",h:"Join Chip City rewards. Free cookie on your birthday. NYC area locations.",q:"Chip City Cookies"},
  {n:"Insomnia Cookies",e:"🍪",w:"Free cookie on your birthday",c:"food",t:"t-food",s:"regional",h:"Join Insomnia Rewards. Free cookie loaded to your account on your birthday.",q:"Insomnia Cookies"},
];

var checked = JSON.parse(localStorage.getItem('hfd3') || '{}');
var cat = 'all';
var zip = '';

function mapsUrl(q, z) {
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q + (z ? ' near ' + z : ''));
}

function renderGrid() {
  var g = document.getElementById('grid');
  var info = document.getElementById('gridInfo');
  var list = cat === 'all' ? F : F.filter(function(f){ return f.c === cat; });
  var hasZip = zip.length === 5;
  if (!hasZip) list = list.filter(function(f){ return f.s === 'national'; });
  var hidden = F.filter(function(f){ return f.s !== 'national'; }).length;
  var msg = list.length + ' freebies shown';
  if (!hasZip) msg += ' — enter zip to unlock ' + hidden + ' regional freebies';
  info.textContent = msg;
  var html = '';
  for (var i = 0; i < list.length; i++) {
    var f = list[i];
    var sc = f.s === 'national' ? 'sc-nat' : 'sc-reg';
    var sl = f.s === 'national' ? 'Nationwide' : 'Regional';
    var mu = mapsUrl(f.q, zip);
    html += '<div class="card">';
    html += '<div class="card-top"><div class="card-emoji">' + f.e + '</div><span class="card-scope ' + sc + '">' + sl + '</span></div>';
    html += '<div class="card-name">' + f.n + '</div>';
    html += '<div class="card-what">' + f.w + '</div>';
    html += '<span class="card-tag ' + f.t + '">' + f.c + '</span>';
    html += '<div class="card-how">' + f.h + '</div>';
    html += '<a class="map-link" href="' + mu + '" target="_blank" rel="noopener">Find near ' + (zip || 'me') + '</a>';
    html += '</div>';
  }
  g.innerHTML = html;
}

function renderTracker() {
  var total = F.length;
  var done = 0;
  for (var k in checked) { if (checked[k]) done++; }
  var pct = Math.round(done / total * 100);
  document.getElementById('progFill').style.width = pct + '%';
  document.getElementById('progLabel').textContent = done + ' of ' + total + ' claimed';
  var html = '';
  for (var i = 0; i < F.length; i++) {
    var f = F[i];
    var isDone = checked[i] ? ' done' : '';
    var isChecked = checked[i] ? 'checked' : '';
    html += '<label class="t-item' + isDone + '"><input type="checkbox" ' + isChecked + ' data-idx="' + i + '"><span>' + f.e + ' ' + f.n + '</span></label>';
  }
  document.getElementById('tracker').innerHTML = html;
  document.getElementById('tracker').querySelectorAll('input').forEach(function(inp){
    inp.addEventListener('change', function(){
      var idx = this.getAttribute('data-idx');
      checked[idx] = this.checked;
      localStorage.setItem('hfd3', JSON.stringify(checked));
      renderTracker();
    });
  });
}

document.getElementById('zipBtn').addEventListener('click', function(){
  var z = document.getElementById('zipInput').value.trim();
  var st = document.getElementById('zipStatus');
  if (!/^\d{5}$/.test(z)) { st.textContent = 'Please enter a valid 5-digit zip code.'; return; }
  zip = z;
  st.textContent = 'Showing all freebies near ' + z + '.';
  renderGrid();
});

document.getElementById('zipInput').addEventListener('keydown', function(e){
  if (e.key === 'Enter') document.getElementById('zipBtn').click();
});

document.getElementById('cats').addEventListener('click', function(e){
  var b = e.target.closest('.cat');
  if (!b) return;
  cat = b.getAttribute('data-cat');
  document.querySelectorAll('.cat').forEach(function(x){ x.classList.remove('on'); });
  b.classList.add('on');
  renderGrid();
});

function handleForm(formId, okId) {
  var form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams(new FormData(form)).toString()
    }).finally(function(){
      form.style.display = 'none';
      document.getElementById(okId).style.display = 'block';
    });
  });
}

handleForm('suggestForm', 'suggestOk');
handleForm('emailForm', 'emailOk');
handleForm('retailerForm', 'retailerOk');

document.getElementById('aiBtn').addEventListener('click', function(){
  var q = document.getElementById('aiQ').value.trim();
  var btn = document.getElementById('aiBtn');
  var res = document.getElementById('aiResult');
  if (!q) return;
  btn.disabled = true;
  btn.textContent = 'Searching...';
  res.className = 'ai-result on';
  res.textContent = 'Looking that up...';
  fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 800,
      system: 'You are a Birthday Freebies expert. Give 3-5 specific real birthday freebie recommendations. For each: brand name, what they get free, one quick tip to claim it. Bullet points. Concise and fun.',
      messages: [{role: 'user', content: q}]
    })
  }).then(function(r){ return r.json(); }).then(function(d){
    var txt = '';
    if (d.content) {
      for (var i = 0; i < d.content.length; i++) {
        if (d.content[i].type === 'text') txt += d.content[i].text;
      }
    }
    res.innerHTML = txt.replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<b>$1</b>') || 'No results found.';
  }).catch(function(){
    res.textContent = 'Something went wrong. Please try again.';
  }).finally(function(){
    btn.disabled = false;
    btn.textContent = 'Ask';
  });
});

document.getElementById('aiQ').addEventListener('keydown', function(e){
  if (e.key === 'Enter') document.getElementById('aiBtn').click();
});

(function confetti(){
  var c = document.getElementById('cc');
  if (!c) return;
  var ctx = c.getContext('2d');
  function resize(){ c.width = c.offsetWidth; c.height = c.offsetHeight; }
  resize();
  window.addEventListener('resize', resize);
  var cols = ['#F4C0D1','#FAC775','#9FE1CB','#CECBF6','#F5C4B3','#C0DD97'];
  var dots = [];
  for (var i = 0; i < 40; i++) {
    dots.push({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      r: Math.random() * 3.5 + 1.5,
      col: cols[Math.floor(Math.random() * cols.length)],
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      rot: Math.random() * 6.28,
      rv: (Math.random() - 0.5) * 0.04,
      sq: Math.random() > 0.5
    });
  }
  function loop(){
    ctx.clearRect(0, 0, c.width, c.height);
    dots.forEach(function(d){
      ctx.save();
      ctx.translate(d.x, d.y);
      ctx.rotate(d.rot);
      ctx.fillStyle = d.col;
      ctx.globalAlpha = 0.35;
      if (d.sq) ctx.fillRect(-d.r, -d.r/2, d.r*2, d.r);
      else { ctx.beginPath(); ctx.arc(0, 0, d.r, 0, 6.28); ctx.fill(); }
      ctx.restore();
      d.x += d.vx; d.y += d.vy; d.rot += d.rv;
      if (d.x < -10) d.x = c.width + 10;
      if (d.x > c.width + 10) d.x = -10;
      if (d.y < -10) d.y = c.height + 10;
      if (d.y > c.height + 10) d.y = -10;
    });
    requestAnimationFrame(loop);
  }
  loop();
})();

renderGrid();
renderTracker();
