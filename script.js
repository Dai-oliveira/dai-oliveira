const logoBtn = document.getElementById('logo');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');
const msgText = document.getElementById('msgText');

const messages = [
  'A cada novo dia, você se aproxima mais dos seus objetivos — confie no processo.',
  'Pequenos passos consistentes superam grandes planos deixados de lado.',
  'Sua criatividade é sua vantagem: cultive-a com curiosidade e coragem.',
  'O progresso é feito pelas pessoas que seguem em frente, mesmo com medo.',
  'Transforme obstáculos em aprendizado — e aprendizado em impulso.'
];

function showInspiration(){
  const i = Math.floor(Math.random()*messages.length);
  msgText.textContent = messages[i];
  modal.setAttribute('aria-hidden','false');
}

function closeModal(){
  modal.setAttribute('aria-hidden','true');
}

logoBtn.addEventListener('click', showInspiration);
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e)=>{ if(e.target===modal) closeModal(); });
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });
