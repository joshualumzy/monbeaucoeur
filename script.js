*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --cream: #F7F3ED; --warm-white: #FDFAF6;
  --forest: #2C3B2D; --forest-mid: #3E5240;
  --moss: #6B7C5E; --sand: #C8B89A; --sand-light: #E8DDD0;
  --text: #1E2820; --text-muted: #6B7265;
  --serif: 'Cormorant Garamond', Georgia, serif;
  --sans: 'Jost', sans-serif;
  --nav-h: 68px;
}
html { scroll-behavior: smooth; }
body { font-family: var(--sans); background: var(--warm-white); color: var(--text); font-weight: 300; line-height: 1.7; overflow-x: hidden; }

/* NAV */
nav { position: fixed; top: 0; left: 0; right: 0; z-index: 200; display: flex; align-items: center; justify-content: space-between; padding: 0 3.5rem; height: var(--nav-h); background: rgba(253,250,246,0.96); backdrop-filter: blur(10px); border-bottom: 1px solid var(--sand-light); }
.nav-logo { font-family: var(--serif); font-size: 1.35rem; font-weight: 400; color: var(--forest); letter-spacing: 0.05em; text-decoration: none; flex-shrink: 0; }
.nav-links { display: flex; gap: 2rem; list-style: none; }
.nav-links a { font-size: 0.68rem; font-weight: 400; letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-muted); text-decoration: none; transition: color 0.2s; }
.nav-links a:hover { color: var(--forest); }
.nav-right { display: flex; align-items: center; gap: 1rem; flex-shrink: 0; }
.lang-switcher { display: flex; border: 1px solid var(--sand); overflow: hidden; }
.lang-switcher button { background: none; border: none; border-right: 1px solid var(--sand); padding: 0.32rem 0.55rem; font-family: var(--sans); font-size: 0.6rem; font-weight: 400; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); cursor: pointer; transition: background 0.15s, color 0.15s; }
.lang-switcher button:last-child { border-right: none; }
.lang-switcher button:hover { background: var(--sand-light); color: var(--forest); }
.lang-switcher button.active { background: var(--forest); color: var(--warm-white); }
.nav-cta { font-size: 0.68rem; font-weight: 400; letter-spacing: 0.14em; text-transform: uppercase; color: var(--warm-white); background: var(--forest); border: none; padding: 0.6rem 1.2rem; cursor: pointer; text-decoration: none; transition: background 0.2s; white-space: nowrap; }
.nav-cta:hover { background: var(--forest-mid); }

/* HAMBURGER */
.nav-hamburger { display: none; flex-direction: column; justify-content: center; gap: 5px; background: none; border: none; cursor: pointer; padding: 6px; z-index: 300; }
.nav-hamburger span { display: block; width: 22px; height: 1.5px; background: var(--forest); transition: transform 0.3s, opacity 0.3s; transform-origin: center; }
.nav-hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.nav-hamburger.open span:nth-child(2) { opacity: 0; }
.nav-hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* MOBILE OVERLAY */
.mobile-menu { display: none; position: fixed; inset: 0; top: var(--nav-h); background: var(--warm-white); z-index: 150; flex-direction: column; align-items: center; justify-content: center; gap: 2rem; opacity: 0; pointer-events: none; transition: opacity 0.3s; }
.mobile-menu.open { opacity: 1; pointer-events: all; }
.mobile-menu a { font-family: var(--serif); font-size: 2.2rem; font-weight: 300; color: var(--forest); text-decoration: none; letter-spacing: 0.04em; transition: color 0.2s; }
.mobile-menu a:hover { color: var(--moss); }

/* HERO */
.hero { position: relative; height: 100vh; min-height: 600px; overflow: hidden; display: flex; align-items: flex-end; }
.hero-bg { position: absolute; inset: 0; background-image: url('https://images.weserv.nl/?url=static.wixstatic.com/media/f56ccd_1b568f5899c54a10b06b2173cc67c923~mv2.png&w=2000&q=90'); background-size: cover; background-position: center 40%; transform: scale(1.04); transition: transform 7s ease-out; }
.hero-bg.loaded { transform: scale(1); }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(15,25,15,0.78) 0%, rgba(15,25,15,0.3) 55%, rgba(15,25,15,0.08) 100%); }
.hero-content { position: relative; z-index: 2; padding: 0 4rem 5rem; max-width: 780px; }
.hero-eyebrow { font-size: 0.67rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--sand); margin-bottom: 1.2rem; }
.hero-title { font-family: var(--serif); font-size: clamp(3.2rem, 6vw, 5.8rem); font-weight: 300; line-height: 1.05; color: var(--cream); margin-bottom: 1.5rem; }
.hero-title em { font-style: italic; }
.hero-sub { font-size: 1rem; color: rgba(247,243,237,0.72); max-width: 500px; margin-bottom: 2.5rem; line-height: 1.8; }
.hero-actions { display: flex; gap: 1.2rem; align-items: center; flex-wrap: wrap; }
.btn-on-dark { background: var(--cream); color: var(--forest); padding: 0.85rem 2rem; font-family: var(--sans); font-size: 0.72rem; font-weight: 400; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none; border: none; cursor: pointer; transition: background 0.2s, color 0.2s; display: inline-block; flex-shrink: 0; }
.btn-on-dark:hover { background: var(--forest); color: var(--cream); }
.btn-ghost-light { color: rgba(247,243,237,0.75); font-family: var(--sans); font-size: 0.72rem; font-weight: 400; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none; border-bottom: 1px solid rgba(247,243,237,0.35); padding-bottom: 2px; transition: color 0.2s, border-color 0.2s; }
.btn-ghost-light:hover { color: var(--cream); border-color: var(--cream); }
.hero-scroll { position: absolute; bottom: 2rem; right: 4rem; z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
.hero-scroll-line { width: 1px; height: 40px; background: rgba(247,243,237,0.2); position: relative; overflow: hidden; }
.hero-scroll-line::after { content: ''; position: absolute; top: -100%; left: 0; width: 100%; height: 100%; background: rgba(247,243,237,0.6); animation: scrollLine 2s ease-in-out infinite; }
@keyframes scrollLine { 0% { top: -100%; } 100% { top: 100%; } }

/* COMMON */
.section-label { font-size: 0.65rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--moss); margin-bottom: 0.8rem; }
.section-title { font-family: var(--serif); font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 300; color: var(--forest); line-height: 1.15; margin-bottom: 1.2rem; }
.section-title em { font-style: italic; }
.divider { width: 36px; height: 1px; background: var(--sand); margin: 1.4rem 0; }
.btn-dark { background: var(--forest); color: var(--warm-white); padding: 0.85rem 2rem; font-family: var(--sans); font-size: 0.72rem; font-weight: 400; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none; border: none; cursor: pointer; transition: background 0.2s; display: inline-block; }
.btn-dark:hover { background: var(--forest-mid); }

/* VIDEO — click to play */
.video-section { background: var(--forest); padding: 5rem 4rem; }
.video-inner { max-width: 1100px; margin: 0 auto; }
.video-section .section-label { color: var(--sand); }
.video-section h2 { font-family: var(--serif); font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 300; color: var(--cream); margin-bottom: 2rem; }
.video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; cursor: pointer; }
.video-poster { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; }
.video-play-btn { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 80px; height: 80px; background: rgba(247,243,237,0.15); border: 2px solid rgba(247,243,237,0.6); border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: background 0.2s, transform 0.2s; pointer-events: none; }
.video-wrapper:hover .video-play-btn { background: rgba(247,243,237,0.25); transform: translate(-50%,-50%) scale(1.08); }
.video-play-btn svg { margin-left: 5px; }
.video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; display: none; }
.video-wrapper.playing .video-poster,
.video-wrapper.playing .video-play-btn { display: none; }
.video-wrapper.playing iframe { display: block; }

/* DROOM */
.droom { background: var(--warm-white); padding: 7rem 4rem; }
.droom-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; max-width: 1200px; margin: 0 auto; align-items: start; }
.droom-text p { font-size: 0.97rem; color: var(--text-muted); margin-bottom: 1.1rem; line-height: 1.85; }
.droom-mosaic { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; }
.droom-mosaic img { width: 100%; object-fit: cover; display: block; }
.droom-mosaic .img-wide { grid-column: span 2; aspect-ratio: 16/7; }
.droom-mosaic .img-tall { aspect-ratio: 3/4; }
.droom-mosaic .img-square { aspect-ratio: 1/1; }

/* INTERLUDE */
.interlude { position: relative; height: 440px; overflow: hidden; display: flex; align-items: center; justify-content: center; }
.interlude-bg { position: absolute; inset: -10%; background-size: cover; background-position: center; }
.interlude-overlay { position: absolute; inset: 0; background: rgba(15,25,15,0.58); }
.interlude-text { position: relative; z-index: 2; text-align: center; padding: 0 2rem; }
.interlude-text blockquote { font-family: var(--serif); font-size: clamp(1.3rem, 2.8vw, 2rem); font-weight: 300; font-style: italic; color: var(--cream); line-height: 1.55; max-width: 780px; margin: 0 auto 1.2rem; }
.interlude-text cite { font-size: 0.7rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--sand); font-style: normal; }

/* QUOTES */
.quotes { background: var(--cream); padding: 6rem 4rem; }
.quotes-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
.quote-card { border-left: 2px solid var(--sand); padding: 2rem 2rem 2rem 2.5rem; background: var(--warm-white); }
.quote-text { font-family: var(--serif); font-size: 1.1rem; font-weight: 300; font-style: italic; color: var(--forest); line-height: 1.65; margin-bottom: 1.2rem; }
.quote-author { font-size: 0.7rem; letter-spacing: 0.13em; text-transform: uppercase; color: var(--moss); }

/* KIJK */
.kijk { background: var(--forest); padding: 7rem 4rem; }
.kijk-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
.kijk .section-label { color: var(--sand); }
.kijk .section-title { color: var(--cream); }
.kijk .divider { background: rgba(200,184,154,0.45); }
.kijk-body { font-size: 1rem; color: rgba(247,243,237,0.68); line-height: 1.85; margin-bottom: 1rem; }
.kijk-mosaic { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; }
.kijk-mosaic img { width: 100%; object-fit: cover; display: block; }
.kijk-mosaic .km-wide { grid-column: span 2; aspect-ratio: 16/7; }
.kijk-mosaic .km-sq { aspect-ratio: 1/1; }

/* ZOEKTOCHT */
.zoektocht { background: var(--warm-white); padding: 7rem 4rem; }
.zoektocht-inner { max-width: 1200px; margin: 0 auto; }
.zoektocht-header { margin-bottom: 3rem; max-width: 620px; }
.zoektocht-header p { font-size: 0.97rem; color: var(--text-muted); margin-top: 1rem; line-height: 1.8; }
.projects-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.2rem; }
.project-card { background: var(--cream); padding: 2rem; border-top: 2px solid var(--sand); }
.project-card h4 { font-family: var(--serif); font-size: 1.35rem; font-weight: 400; color: var(--forest); margin-bottom: 0.5rem; }
.project-card p { font-size: 0.87rem; color: var(--text-muted); }
.vacancies-split { display: grid; grid-template-columns: 1fr 1fr; gap: 0; margin-top: 3rem; min-height: 480px; }
.vacancies-img { overflow: hidden; }
.vacancies-img img { width: 100%; height: 100%; object-fit: cover; object-position: center 40%; display: block; }
.vacancies { padding: 3rem 2rem 3rem 3rem; background: var(--cream); }
.vacancies h3 { font-family: var(--serif); font-size: 1.8rem; font-weight: 300; color: var(--forest); margin-bottom: 0.5rem; }
.vacancies > p { font-size: 0.9rem; color: var(--text-muted); max-width: 620px; margin-bottom: 1.5rem; line-height: 1.8; }
.vacancy-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem; }
.vacancy-tag { background: var(--sand-light); color: var(--forest); font-size: 0.77rem; letter-spacing: 0.06em; padding: 0.42rem 1rem; }

/* COACHING */
.coaching { background: var(--cream); padding: 6rem 4rem; }
.coaching-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr auto; gap: 5rem; align-items: center; }
.coaching h2 { font-family: var(--serif); font-size: clamp(2rem, 3vw, 2.8rem); font-weight: 300; color: var(--forest); line-height: 1.15; margin-bottom: 1rem; }
.coaching h2 em { font-style: italic; }
.coaching p { font-size: 0.95rem; color: var(--text-muted); max-width: 520px; line-height: 1.8; }

/* CONTACT */
.contact { background: var(--forest); padding: 6rem 4rem; }
.contact-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
.contact .section-label { color: var(--sand); }
.contact h2 { font-family: var(--serif); font-size: clamp(2rem, 3vw, 2.8rem); font-weight: 300; color: var(--cream); line-height: 1.15; margin-bottom: 1rem; }
.contact h2 em { font-style: italic; }
.contact-sub { font-size: 0.95rem; color: rgba(247,243,237,0.58); margin-bottom: 2.5rem; line-height: 1.8; }
.contact-details { display: flex; flex-direction: column; gap: 1.5rem; }
.contact-detail-block strong { display: block; font-size: 0.64rem; letter-spacing: 0.17em; text-transform: uppercase; color: var(--sand); font-weight: 400; margin-bottom: 0.3rem; }
.contact-detail-block p, .contact-detail-block a { font-size: 0.92rem; color: rgba(247,243,237,0.58); text-decoration: none; line-height: 1.6; transition: color 0.2s; }
.contact-detail-block a:hover { color: var(--cream); }
.contact-form { display: flex; flex-direction: column; gap: 0.9rem; }
.contact-form input, .contact-form textarea { background: rgba(247,243,237,0.05); border: 1px solid rgba(247,243,237,0.14); color: var(--cream); padding: 0.85rem 1rem; font-family: var(--sans); font-size: 0.9rem; font-weight: 300; outline: none; transition: border-color 0.2s; resize: none; width: 100%; }
.contact-form input::placeholder, .contact-form textarea::placeholder { color: rgba(247,243,237,0.27); }
.contact-form input:focus, .contact-form textarea:focus { border-color: rgba(247,243,237,0.4); }
.btn-light { background: var(--cream); color: var(--forest); padding: 0.85rem 2rem; font-family: var(--sans); font-size: 0.72rem; font-weight: 400; letter-spacing: 0.12em; text-transform: uppercase; border: none; cursor: pointer; transition: opacity 0.2s; align-self: flex-start; }
.btn-light:hover { opacity: 0.85; }

/* FOOTER */
footer { background: var(--forest); padding: 1.8rem 4rem; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(247,243,237,0.07); }
.footer-logo { font-family: var(--serif); font-size: 1rem; font-weight: 300; color: var(--cream); opacity: 0.52; }
.footer-copy { font-size: 0.7rem; color: rgba(247,243,237,0.27); letter-spacing: 0.06em; }
.footer-insta a { font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(247,243,237,0.36); text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: color 0.2s; }
.footer-insta a:hover { color: var(--cream); }

/* REVEAL */
.reveal { opacity: 0; transform: translateY(22px); transition: opacity 0.8s ease, transform 0.8s ease; }
.reveal.visible { opacity: 1; transform: none; }
.reveal.delay-1 { transition-delay: 0.14s; }
.reveal.delay-2 { transition-delay: 0.28s; }

/* RESPONSIVE */
@media (max-width: 960px) {
  nav { padding: 0 1.5rem; }
  .nav-links, .nav-cta { display: none; }
  .nav-hamburger { display: flex; }
  .mobile-menu { display: flex; }
  .hero-content { padding: 0 1.5rem 4rem; }
  .hero-scroll { display: none; }
  .droom, .kijk, .zoektocht, .coaching, .contact, .quotes, .video-section { padding: 4rem 1.5rem; }
  .droom-grid, .kijk-inner, .contact-inner, .coaching-inner, .quotes-inner { grid-template-columns: 1fr; gap: 2.5rem; }
  .projects-grid, .coaching-inner, .vacancies-split { grid-template-columns: 1fr; }
  .vacancies-img { min-height: 280px; }
  .vacancies { padding: 2rem 1.5rem; }
  footer { flex-direction: column; gap: 1rem; text-align: center; padding: 1.8rem 1.5rem; }
  .interlude { height: 340px; }
}
