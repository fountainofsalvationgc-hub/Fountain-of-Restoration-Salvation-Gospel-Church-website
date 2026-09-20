const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false');});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const lightbox=document.querySelector('.lightbox');
const lightboxImg=lightbox?.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(btn=>btn.addEventListener('click',()=>{lightboxImg.src=btn.dataset.full;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');}));
function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImg.src='';}
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
lightbox?.querySelector('.lightbox-close')?.addEventListener('click',closeLightbox);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});
