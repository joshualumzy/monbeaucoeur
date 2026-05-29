// HERO BG ZOOM
window.addEventListener('load', () => document.getElementById('hero-bg').classList.add('loaded'));

// HAMBURGER
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}));

// SCROLL REVEAL
document.querySelectorAll('.reveal').forEach(el =>
  new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 }).observe(el)
);

// VIDEO — click to play in HD
document.getElementById('video-wrapper').addEventListener('click', function() {
  if (!this.classList.contains('playing')) playVideo();
});
function playVideo() {
  const wrapper = document.getElementById('video-wrapper');
  const iframe = document.getElementById('yt-iframe');
  wrapper.classList.add('playing');
  iframe.src = 'https://www.youtube.com/embed/fazmnh9f6Sk?autoplay=1&rel=0&modestbranding=1&vq=hd1080';
}

// CONTACT FORM
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.textContent = tr[currentLang].submitDone;
  btn.style.background = '#6B7C5E';
  btn.style.color = 'white';
}

// i18n
let currentLang = 'nl';
const tr = {
  nl: {
    navLinks: ['De Droom','De Kijk','De Zoektocht','Coaching','Contact'],
    navCta: 'Neem Contact Op',
    heroEyebrow: 'Entre Bordeaux & Toulouse · France',
    heroTitle: 'Leven in balans<br>met de <em>natuur</em>',
    heroSub: 'Wij stelden ons een wereld voor waarin we samen met en van de natuur meer kunnen leren — een plek waar harten zichzelf mogen zijn.',
    heroBtnMain: 'Ontdek onze droom', heroBtnGhost: 'Coaching',
    videoLbl: 'Bekijk onze wereld', videoHd: 'Mon Beau Coeur <em>in beeld</em>',
    droomLbl: 'De Droom', droomHd: 'Een plek waar we<br><em>verbinding vinden</em>',
    droomBody: `<p>Wij stelden ons een wereld voor waarin we samen met en van de natuur meer kunnen leren. Om de wijsheden die erin verborgen liggen in ons dagelijks bestaan te gebruiken, zodat we nog meer verbonden zijn met de natuur en onszelf. Waar harten zichzelf mogen zijn.</p><p>Dat zochten wij al heel lang. We wilden minder tijd doorbrengen in een steeds anoniemere wereld. Wij zochten een plek waar wij onze werk in het coachen van mensen bij het ontrafelen van hun uitdagingen op hun levenspad optimaal konden uitoefenen. Naast ook een plek van waar we bestaande en nieuwe start-ups kunnen begeleiden.</p><p>Deze droom borrelde al een paar jaar bij ons, Frederique en Ronald Horn. Met het zoeken naar de perfecte plek om onze droom werkelijkheid te maken kochten we eind 2021 een huis met 60 Ha bos en landbouwgrond tussen Bordeaux en Toulouse.</p><p>Met alle gemak en voorzieningen in de buurt maar wel met de rust en de inspiratie van de natuur. Op deze nieuwe locatie voelen we de ruimte en vrijheid van waaruit we onze activiteiten voortzetten en uitbreiden. We bieden op maat gemaakte trajecten aan in en met de natuur waarbij we je begeleiden bij je vraag en je deelneemt aan de projecten.</p>`,
    interludeQuote: 'De grootste zekerheid ben je zelf. Ik vind het geweldig om mensen te helpen tot dit inzicht te komen om vandaar met hen de ware passie in een eigen onderneming te verwezenlijken.',
    quoteRonald: 'Ik ben opgegroeid met de boodschap haal je diploma\'s, vind een goede werkgever en doe je best. Dan had je zekerheid. Toen ik voor mijzelf begon ontdekte ik dat dit nooit zekerheid was geweest. De grootste zekerheid ben je zelf. Ik vind het geweldig om mensen te helpen tot dit inzicht te komen om vandaar met hun de ware passie in een eigen onderneming te verwezenlijken. Dit kunnen wij perfect vanuit Frankrijk doen.',
    quoteFrederique: 'Door in resonantie met de natuur levensvraagstukken te ontrafelen heb ik geleerd om eerst mijzelf en nu ook andere mensen verder te helpen op hun levenspad, in Frankrijk hebben wij nu de perfecte plek hiervoor.',
    kijkLbl: 'De Kijk', kijkHd: 'Ongedwongen<br><em>symbiose</em>',
    kijkBody: `<p class="kijk-body">Hoe wij kijken naar samenleven met de natuur? In de natuur leven dieren in vrijheid hun eigen pad de natuur kent een ongedwongen symbiose van samenwerking. De ene plant groeit met de ander. De afval van het ene dier is voeding voor het andere en zo ontstaat er telkens weer een nieuw ecosysteem.</p>`,
    zoekLbl: 'De Zoektocht', zoekHd: 'Bouwen aan<br><em>zelfvoorzienendheid</em>',
    zoekSub: 'Waar we nu naar op zoek zijn? Nu we bouwen aan een plek voor de toekomst, gaat ons werk gewoon door. Het is belangrijk voor ons om zelfvoorzienend te kunnen zijn, daarom zijn wij gestart met de volgende projecten.',
    proj: [['Voedselbos','Een bos dat voedsel produceert en tegelijk een ecosysteem in stand houdt.'],['Permacultuur','Duurzame landbouw in harmonie met de natuur.'],['Eigen energie & water','Eigen energie en watervoorzieningen als fundament voor zelfvoorzienendheid.']],
    vacHd: 'Kom meewerken',
    vacSub: 'Voor het aanleggen van permacultuur, waterpartijen en bossen bieden we regelmatig nieuwe projecten aan waar mensen kunnen meewerken op basis van werken tegen wonen. Dit geldt zeker ook voor de verzorging van onze dieren (paarden, kippen) waarbij het essentieel is dat wij erin geloven dat onze dieren ruimte en vrijheid nodig hebben.',
    tags: ['Dierenverzorger (paarden)','Schilder','Timmerman','Loodgieter','Metselaar'],
    vacBtn: 'Stuur ons een bericht',
    coachingLbl: 'Coaching', coachingHd: 'Jouw levenspad<br><em>ontrafelen</em>',
    coachingSub: 'We hebben de ervaring dat mensen die bij ons komen met een coachingsvraag er ook de behoefte is om er even helemaal uit te zijn. Om hierop in te spelen bieden we op maat gemaakte trajecten aan in en met de natuur waarbij we je begeleiden bij je vraag en je deelneemt aan de projecten.',
    coachingBtn: 'Plan een gesprek',
    contactLbl: 'Contact', contactHd: 'Neem contact<br><em>op</em>',
    contactSub: 'Interesse in coaching, meewerken aan een project, of gewoon een vraag? Stuur ons een bericht.',
    lblAddress: 'Adres', lblEmail: 'Email',
    fName: 'Uw naam', fEmail: 'E-mailadres', fMsg: 'Uw bericht',
    submitBtn: 'Verstuur bericht', submitDone: 'Verstuurd ✓',
  },
  en: {
    navLinks: ['The Dream','The Outlook','The Question','Coaching','Contact'],
    navCta: 'Get in Touch',
    heroEyebrow: 'Between Bordeaux & Toulouse · France',
    heroTitle: 'Living in balance<br>with <em>nature</em>',
    heroSub: 'Imagine a world in which we can learn more together with and from nature — where hearts just can be.',
    heroBtnMain: 'Discover our dream', heroBtnGhost: 'Coaching',
    videoLbl: 'See our world', videoHd: 'Mon Beau Coeur <em>on film</em>',
    droomLbl: 'The Dream', droomHd: 'A place where we<br><em>find connection</em>',
    droomBody: `<p>Imagine a world in which we can learn more together with and from nature. To use the wisdom hidden in it in our daily existence so that we are reconnected with nature and ourselves. Where hearts just can be.</p><p>We wanted to move away from an increasingly anonymous world. To be able to expand our experiences in coaching people in unravelling their changes on their path of life. Besides also a place from where we can continue guiding start-ups.</p><p>This dream has been bubbling with us, Frederique and Ronald Horn, for a few years. Searching for the perfect place to make our dream a reality, we bought a house in a quiet part of France at the end of 2021.</p><p>With all convenience and amenities nearby, but with the tranquillity and inspiration of nature. At this new location we feel the space and freedom from which we continue to expand our lives. We offer tailor-made offerings in and with nature, where we guide you with your question and you can also take part in our projects and daily life here.</p>`,
    interludeQuote: 'The greatest certainty in life is yourself. It feels great to help people come to this insight and from there to realise their true passion in their own project or company.',
    quoteRonald: 'I grew up with the message that you get your diplomas, find a good employer and do your best. Then you had certainty. When I started my own business I discovered that this had never been a certainty. The greatest certainty a life is yourself. It feels great to help people to come to this insight and from there to realize their true passion in their own project or company. We can do this perfectly from France.',
    quoteFrederique: 'By unravelling life issues in resonance with nature, I have learned to first help myself and now other people on their life path, in France we have the perfect place for this.',
    kijkLbl: 'The Outlook', kijkHd: 'Effortless<br><em>symbiosis</em>',
    kijkBody: `<p class="kijk-body">How do we see living together with nature? In nature, animals live their life in freedom. Nature has a concept of symbiosis and cooperation. One plant grows with another. The waste of one animal is food for another and so a new ecosystem is created time and again. This is how we also see our own life in nature.</p>`,
    zoekLbl: 'The Question', zoekHd: 'Building toward<br><em>self-sufficiency</em>',
    zoekSub: 'What are we looking for? Our work continues, as we build a place for the future. It is important for us to be self-sufficient, so we have started the following projects.',
    proj: [['Food forest','A forest that yields food while sustaining a natural ecosystem.'],['Permaculture','Sustainable agriculture in harmony with nature.'],['Own energy & water supply','Providing our own energy and water as the foundation for self-sufficiency.']],
    vacHd: 'Come Work With Us',
    vacSub: 'For the construction of permaculture, water features and forests, we regularly offer new projects where people can cooperate and live on the basis of working in exchange for lodging and food. Beyond help on projects, we are also looking for people, with a heart for animals, to take care of our horses and chickens. We believe that our animals like we need space, freedom and a natural life.',
    tags: ['Animal caretaker (horses)','Painter','Carpenter','Plumber','Mason'],
    vacBtn: 'Send us a message',
    coachingLbl: 'Coaching', coachingHd: 'Unravelling your<br><em>life path</em>',
    coachingSub: 'Our experience is that the people who come to us with a coaching question also feel the need to get away from it all. To respond to this, we offer tailor-made offerings in and with nature, where we guide you with your question. During your stay you can also take part in our projects and daily life here.',
    coachingBtn: 'Schedule a call',
    contactLbl: 'Contact', contactHd: 'Get in<br><em>touch</em>',
    contactSub: 'Interested in coaching, working on a project, or simply have a question? Send us a message.',
    lblAddress: 'Address', lblEmail: 'Email',
    fName: 'Your name', fEmail: 'Email address', fMsg: 'Your message',
    submitBtn: 'Send message', submitDone: 'Sent ✓',
  },
  de: {
    navLinks: ['Der Traum','Das Aussehen','Das Streben','Coaching','Kontakt'],
    navCta: 'Kontakt aufnehmen',
    heroEyebrow: 'Zwischen Bordeaux & Toulouse · Frankreich',
    heroTitle: 'Im Einklang mit<br>der <em>Natur</em> leben',
    heroSub: 'Stellen Sie sich eine Welt vor, in der wir gemeinsam mit und von der Natur mehr lernen können — wo Herzen sie selbst sein können.',
    heroBtnMain: 'Unseren Traum entdecken', heroBtnGhost: 'Coaching',
    videoLbl: 'Unsere Welt entdecken', videoHd: 'Mon Beau Coeur <em>im Film</em>',
    droomLbl: 'Der Traum', droomHd: 'Ein Ort, an dem wir<br><em>Verbindung finden</em>',
    droomBody: `<p>Stellen Sie sich eine Welt vor, in der wir gemeinsam mit und von der Natur mehr lernen können. Die dort verborgene Weisheit in unserem täglichen Leben zu nutzen, damit wir uns wieder mit der Natur und uns selbst verbinden können. Wo Herzen sie selbst sein können.</p><p>Das stellen wir uns schon länger vor. Wir wollten weg von einer zunehmend anonymen Welt. Um unsere Erfahrungen im Coaching von Menschen und der Führung von Start-ups von einem neuen Ort aus erweitern zu können.</p><p>Dieser Traum brodelt bei uns, Frederique und Ronald Horn, seit einigen Jahren. Auf der Suche nach dem perfekten Ort, um unseren Traum zu verwirklichen, kauften wir Ende 2021 ein Haus in einem ruhigen Teil Frankreichs.</p><p>Mit allen Bequemlichkeiten und Annehmlichkeiten in der Nähe, aber mit der Ruhe und Inspiration der Natur. An diesem neuen Standort spüren wir den Raum und die Freiheit, von der aus wir unsere Aktivitäten fortsetzen und erweitern. Wir bieten maßgeschneiderte Routen in und mit der Natur an, bei denen wir Sie mit Ihrer Frage anleiten und Sie sich an den Projekten beteiligen.</p>`,
    interludeQuote: 'Die größte Gewissheit bist du selbst. Ich finde es toll, Menschen dabei zu helfen, zu dieser Einsicht zu kommen und von dort aus ihre wahre Leidenschaft im eigenen Unternehmen zu verwirklichen.',
    quoteRonald: 'Ich bin mit der Botschaft aufgewachsen, dass man seine Diplome bekommt, einen guten Arbeitgeber findet und sein Bestes gibt. Dann hattest du Gewissheit. Als ich mein eigenes Unternehmen gründete, stellte ich fest, dass dies nie eine Gewissheit gewesen war. Die größte Gewissheit bist du selbst. Ich finde es toll, Menschen dabei zu helfen, zu dieser Einsicht zu kommen und von dort aus ihre wahre Leidenschaft im eigenen Unternehmen zu verwirklichen. Das können wir perfekt von Frankreich aus.',
    quoteFrederique: 'Durch das Lösen von Lebensfragen in Resonanz mit der Natur habe ich gelernt, zuerst mir selbst und jetzt anderen Menschen auf ihrem Lebensweg zu helfen, in Frankreich haben wir jetzt den perfekten Ort dafür.',
    kijkLbl: 'Das Aussehen', kijkHd: 'Ungezwungene<br><em>Symbiose</em>',
    kijkBody: `<p class="kijk-body">Wie sehen wir das Zusammenleben mit der Natur? In der Natur leben Tiere in Freiheit ihren eigenen Weg, die Natur hat eine lockere Symbiose der Kooperation. Eine Pflanze wächst mit der anderen. Der Abfall eines Tieres ist Nahrung für ein anderes und so entsteht immer wieder ein neues Ökosystem.</p>`,
    zoekLbl: 'Das Streben', zoekHd: 'Aufbau zur<br><em>Selbstversorgung</em>',
    zoekSub: 'Was suchen wir jetzt? Während wir einen Ort für die Zukunft bauen, geht unsere Arbeit weiter. Es ist uns wichtig, autark zu sein, deshalb haben wir folgende Projekte gestartet.',
    proj: [['Essen Wald','Ein Wald, der Nahrung produziert und gleichzeitig ein Ökosystem erhält.'],['Permakultur','Nachhaltiger Anbau in Harmonie mit der Natur.'],['Eigene Energie- und Wasserversorgung','Eigenversorgung als Grundlage für Unabhängigkeit.']],
    vacHd: 'Mitarbeiten',
    vacSub: 'Für den Bau von Permakultur, Wasserspielen und Wäldern bieten wir regelmäßig neue Projekte an, bei denen Menschen auf der Basis von Gegenarbeit kooperieren und leben können. Dies gilt sicherlich auch für die Pflege unserer Tiere (Pferde, Hühner), wo es uns wichtig ist, dass wir glauben, dass unsere Tiere Raum und Freiheit brauchen.',
    tags: ['Tierpfleger (Pferde)','Maler','Tischler','Klempner','Maurer'],
    vacBtn: 'Schreiben Sie uns',
    coachingLbl: 'Coaching', coachingHd: 'Deinen Lebensweg<br><em>entfalten</em>',
    coachingSub: 'Unsere Erfahrung ist, dass Menschen, die mit einer Coaching-Frage zu uns kommen, auch das Bedürfnis verspüren, Abstand zu gewinnen. Um darauf zu reagieren, bieten wir maßgeschneiderte Routen in und mit der Natur an, bei denen wir Sie mit Ihrer Frage anleiten und Sie sich an den Projekten beteiligen.',
    coachingBtn: 'Gespräch vereinbaren',
    contactLbl: 'Kontakt', contactHd: 'Kontakt<br><em>aufnehmen</em>',
    contactSub: 'Interesse an Coaching, Mitarbeit an einem Projekt oder einfach eine Frage? Schreiben Sie uns.',
    lblAddress: 'Adresse', lblEmail: 'E-Mail',
    fName: 'Ihr Name', fEmail: 'E-Mail-Adresse', fMsg: 'Ihre Nachricht',
    submitBtn: 'Nachricht senden', submitDone: 'Gesendet ✓',
  },
  fr: {
    navLinks: ['Le Rêve','Le Regard','La Quête','Coaching','Contact'],
    navCta: 'Nous Contacter',
    heroEyebrow: 'Entre Bordeaux & Toulouse · France',
    heroTitle: 'Vivre en équilibre<br>avec la <em>nature</em>',
    heroSub: 'Imaginez un monde dans lequel nous pouvons apprendre davantage avec et de la nature — un endroit pour le cœur.',
    heroBtnMain: 'Découvrir notre rêve', heroBtnGhost: 'Coaching',
    videoLbl: 'Découvrez notre monde', videoHd: 'Mon Beau Coeur <em>en images</em>',
    droomLbl: 'Le Rêve', droomHd: 'Un endroit où nous<br><em>trouvons la connexion</em>',
    droomBody: `<p>Imaginez un monde dans lequel nous pouvons apprendre davantage avec et de la nature. Utiliser la sagesse qui s'y cache dans notre quotidien pour nous reconnecter à la nature et à nous-mêmes. Nous imaginions cela depuis un moment. Un place voor cœur.</p><p>Nous voulions nous éloigner d'un monde de plus en plus anonyme. Pour pouvoir étendre nos expériences dans le coaching de personnes et l'accompagnement de start-ups depuis un nouvel endroit.</p><p>Ce rêve de France fin 2021.</p><p>Avec toutes les commodités à proximité, mais avec la tranquillité et l'inspiration de la nature. Dans ce nouvel emplacement, nous ressentons l'espace et la liberté à partir desquels nous poursuivons et développons nos activités. Nous vous proposons des parcours sur-mesure dans et avec la nature, où nous vous guidons par votre questionnement et vous participez aux projets.</p>`,
    interludeQuote: 'La plus grande certitude est vous-même. Je pense que c\'est formidable d\'aider les gens à en venir à cette idée et à partir de là, à réaliser leur véritable passion dans leur propre entreprise.',
    quoteRonald: 'J\'ai grandi with the message que vous obtenez vos diplômes, trouvez un bon employeur et faites de votre mieux. Alors vous aviez la certitude. Lorsque j\'ai lancé ma propre entreprise, j\'ai découvert que cela n\'avait jamais été une certitude. La plus grande certitude est vous-même. Je pense que c\'est formidable d\'aider les gens à en venir à cette idée et à partir de là, à réaliser leur véritable passion dans leur propre entreprise. Nous pouvons le faire parfaitement depuis la France.',
    quoteFrederique: 'En démêlant les problèmes de la vie en résonance avec la nature, j\'ai appris à d\'abord moi-même et maintenant les autres sur leur chemin de vie, en France nous avons maintenant l\'endroit idéal pour cela.',
    kijkLbl: 'Le Regard', kijkHd: 'Symbiose<br><em>naturelle</em>',
    kijkBody: `<p class="kijk-body">Comment voyons-nous la coexistence avec la nature ? Dans la nature, les animaux vivent leur propre chemin en toute liberté. La nature a une symbiose décontractée de coopération. Une plante pousse avec une autre. Les déchets d'un animal sont de la nourriture pour un autre et ainsi un nouvel écosystème est créé à maintes reprises.</p>`,
    zoekLbl: 'La Quête', zoekHd: 'Construire vers<br><em>l\'autonomie</em>',
    zoekSub: 'Que cherchons-nous maintenant ? Alors que nous construisons un lieu pour l\'avenir, notre travail se poursuit. Il est important pour nous d\'être autonomes, c\'est pourquoi nous avons lancé les projets suivants.',
    proj: [['Forêt alimentaire','Une forêt qui produit des aliments tout en maintenant un écosystème naturel.'],['Permaculture','Agriculture durable en harmonie avec la nature.'],['Propre énergie & eau','Approvisionnement propre en énergie et eau comme fondement de l\'autonomie.']],
    vacHd: 'Venez travailler avec nous',
    vacSub: 'Pour la construction de permaculture, de points d\'eau et de forêts, nous proposons régulièrement de nouveaux projets où les gens peuvent coopérer et vivre sur la base du travail contre logement. Cela s\'applique certainement aussi aux soins de nos animaux (chevaux, poules) où il est essentiel que nous croyions que nos animaux ont besoin d\'espace et de liberté.',
    tags: ['Gardien d\'animaux (chevaux)','Peintre','Charpentier','Plombier','Maçon'],
    vacBtn: 'Envoyez-nous un message',
    coachingLbl: 'Coaching', coachingHd: 'Démêler votre<br><em>chemin de vie</em>',
    coachingSub: 'Notre expérience est que les personnes qui viennent nous voir avec une question de coaching ressentent également le besoin de s\'évader. Pour y répondre, nous vous proposons des parcours sur-mesure dans et avec la nature, où nous vous guidons par votre questionnement et vous participez aux projets.',
    coachingBtn: 'Planifier un entretien',
    contactLbl: 'Contact', contactHd: 'Nous<br><em>contacter</em>',
    contactSub: 'Intéressé par le coaching, participer à un projet, ou simplement une question ? Envoyez-nous un message.',
    lblAddress: 'Adresse', lblEmail: 'E-mail',
    fName: 'Votre nom', fEmail: 'Adresse e-mail', fMsg: 'Votre message',
    submitBtn: 'Envoyer', submitDone: 'Envoyé ✓',
  }
};

function setLang(lang, btn) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-switcher button').forEach(b =>
    b.classList.toggle('active', b.textContent.trim().toLowerCase() === lang)
  );
  const t = tr[lang];
  const navIds = ['nl-droom','nl-kijk','nl-zoektocht','nl-coaching','nl-contact'];
  const mobIds = ['mob-droom','mob-kijk','mob-zoektocht','mob-coaching','mob-contact'];
  navIds.forEach((id,i) => { const el=document.getElementById(id); if(el) el.textContent=t.navLinks[i]; });
  mobIds.forEach((id,i) => { const el=document.getElementById(id); if(el) el.textContent=t.navLinks[i]; });
  const s=(id,v)=>{ const el=document.getElementById(id); if(el) el.innerHTML=v; };
  const st=(id,v)=>{ const el=document.getElementById(id); if(el) el.textContent=v; };
  st('nav-cta-btn',t.navCta); st('mob-cta',t.navCta);
  st('hero-eyebrow',t.heroEyebrow); s('hero-title',t.heroTitle); st('hero-sub',t.heroSub);
  st('hero-btn-main',t.heroBtnMain); st('hero-btn-ghost',t.heroBtnGhost);
  st('video-lbl',t.videoLbl); s('video-hd',t.videoHd);
  st('droom-lbl',t.droomLbl); s('droom-hd',t.droomHd); s('droom-body',t.droomBody);
  st('interlude-quote',t.interludeQuote);
  st('quote-ronald',t.quoteRonald); st('quote-frederique',t.quoteFrederique);
  st('kijk-lbl',t.kijkLbl); s('kijk-hd',t.kijkHd); s('kijk-body',t.kijkBody);
  st('zoek-lbl',t.zoekLbl); s('zoek-hd',t.zoekHd); st('zoek-sub',t.zoekSub);
  [1,2,3].forEach(i=>s('proj-'+i,`<h4>${t.proj[i-1][0]}</h4><p>${t.proj[i-1][1]}</p>`));
  st('vac-hd',t.vacHd); st('vac-sub',t.vacSub);
  [1,2,3,4,5].forEach(i=>st('tag-'+i,t.tags[i-1]));
  st('vac-btn',t.vacBtn);
  st('coaching-lbl',t.coachingLbl); s('coaching-hd',t.coachingHd); st('coaching-sub',t.coachingSub);
  st('coaching-btn',t.coachingBtn);
  st('contact-lbl',t.contactLbl); s('contact-hd',t.contactHd); st('contact-sub',t.contactSub);
  st('lbl-address',t.lblAddress); st('lbl-email',t.lblEmail);
  document.getElementById('f-name').placeholder=t.fName;
  document.getElementById('f-email').placeholder=t.fEmail;
  document.getElementById('f-msg').placeholder=t.fMsg;
  const sb=document.getElementById('submit-btn');
  sb.textContent=t.submitBtn; sb.style.background=''; sb.style.color='';
}

setLang('nl', null);
