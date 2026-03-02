/* ============================================================
   CLIMATE WARDEN — articles.js
   All news articles data + dynamic renderer for article.html
   ============================================================ */

const ARTICLES = [
  {
    id: 1,
    category: 'Youth Day of Service',
    title: 'Green School, Green Future: A YDoS 2025 Initiative',
    date: 'October 10, 2025',
    author: 'Climate Warden Team',
    readTime: '3 min read',
    image: 'images/ydos2.jpg',
    imageCaption: 'Students participating in a Climate Warden workshop at a Bauchi State secondary school.',
    body: `
      <p>Every great movement has a beginning. For Climate Warden, that beginning was the Youth Day of Service (YDoS) 2025. Under the theme "Green School, Green Future," Mustapha Muhammad Ali led a dedicated team of volunteers to Federal Low Cost Primary School to tackle environmental illiteracy at its roots.</p>
      <p>A Day of Impact YDoS is a pan-African youth-led social impact campaign, and our project was selected to represent the power of climate advocacy. We didn't just visit the school; we transformed how the students viewed their environment..</p>
      <h2>Key Achievements of the YDoS Project</h2>
      <p>The Pilot Sustainability Club: We inaugurated our very first student-led club, proving that primary school pupils are the most enthusiastic Climate Wardens.</p>
      <p>Direct Education: Over 50 pupils received their first formal lesson on carbon footprints and biodiversity.</p>
      <p>Legacy of Growth: The success of this single day of service provided the data and the passion needed to scale Climate Warden into the formal NGO it is today.</p>
      <p>Youth Day of Service taught us that you don't need a massive budget to start a revolution—you just need a committed team and a local school willing to learn.</p>
      `
  },
  {
    id: 2,
    category: 'Campaign',
    title: 'Success Friends International Academy Students Lead Greening Initiative',
    date: 'July 7, 2025',
    author: 'Climate Warden Field Team',
    readTime: '3 min read',
    image: 'images/sucess.jpg',
    imageCaption: 'Success Friends International Academy Students Lead Greening Initiative.',
    body: `
      <p>The transformation of Success Friends International Academy into a "Climate Warden School" reached its physical milestone this week. Following their recent education sessions, the students transitioned from the classroom to the field to conduct their first official tree-planting exercise.</p>
      <h2>Rooting Knowledge in the Soil</h2>
      <p>The event focused on the practical application of the biodiversity lessons learned earlier in the week. Students were taught how to properly prepare the soil and ensure the long-term survival of their seedlings.</p>
      <h2>Impact Highlights</h2>
      <p>Indigenous Species: We planted a variety of hardy, local trees that will provide significant shade and help reduce the "Heat Island" effect on the school premises.</p>
      <p>Student Ownership: Each student in the Sustainability Club has committed to a maintenance schedule, ensuring the trees are watered and protected as they grow.</p>
      <p>Community Pride: The school administration has pledged to protect these new green zones, setting an example for other private academies in the area.</p>`
  },
  {
    id: 3,
    category: 'Education',
    title: 'Success Friends International Academy Joins the Climate Warden Network',
    date: 'July 7, 2025',
    author: 'Climate Warden Team',
    readTime: '3 min read',
    image: 'images/cresent.jpg',
    imageCaption: "Success Friends International Academy Joins the Climate Warden Network.",
    body: `
      <p>The mission to climate-proof our schools reached a new milestone this week Climate Warden officially partnered with Success Friends International Academy. This expansion represents the second phase of our school-based outreach, aimed at creating a network of "Green Schools" across the region.</p>
      <h2>Standardizing Sustainability</h2>
      <p>Following the successful model established at Crescent Comprehensive, the team delivered an intensive climate education session focused on Biodiversity Loss and Local Adaptation. The students at Success Friends showed remarkable insight, discussing the impacts of local deforestation on their immediate environment.</p>
      <p>Seeing the same spark of leadership at Success Friends that we saw at Crescent proves that our youth are hungry for environmental knowledge," Founder Mustapha Muhammad Ali remarked. "We aren't just visiting schools; we are building a network.</p>
      `
  },
  {
    id: 4,
    category: 'Tree Planting',
    title: "Crescent Sustainability Club Leads Inaugural Tree Planting Drive",
    date: 'May 15, 2025',
    author: 'Climate Warden Team',
    readTime: '3 min read',
    image: 'images/tree-planting.jpg',
    imageCaption: 'Crescent Sustainability Club Leads Inaugural Tree Planting Drive.',
    body: `
      <p>Action followed education this week at Crescent Comprehensive School, as the newly formed Sustainability Club rolled up their sleeves for their first official field activity:.</p>
      <p>Under the guidance of the Climate Warden team, students planted a variety of indigenous tree species selected for their shade-giving properties and resilience to the local climate..</p>
      <h2>Learning by Doing</h2>
      <p>The event wasn't just about digging holes; it was a practical lesson in biology and environmental stewardship. Students learned: The "Cooling Effect": How trees act as natural air conditioners for school buildings. Soil Health: The importance of proper mulching and watering techniques for young seedlings. Long-term Care: Each club member was assigned a "Tree Buddy"—a specific sapling they are responsible for nurturing throughout the school year..</p>
      <p>Watching a student plant their first tree is watching a 'Warden' being born, These trees will grow alongside these students, providing shade for the generations that follow.".</p>`
  },
  {
    id: 5,
    category: 'Education',
    title: 'Climate Warden Delivers First Education Module and Inaugurates Student Sustainability Club',
    date: 'May 8, 2025',
    author: 'Climate Warden Team',
    readTime: '3 min read',
    image: 'images/first-session.jpg',
    imageCaption: 'Climate Warden Delivers First Education Module and Inaugurates Student Sustainability Club.',
    body: `
      <p>Building on the momentum of our FXB Fellowship launch, the Climate Warden team returned to Crescent Comprehensive School to deliver the first official climate education session. This marked the practical start of our mission to integrate environmental literacy into the Nigerian school system..</p>
      <p>Engaging the Next Generation The session focused on "Climate Change in Our Backyard," helping students understand how global warming affects local weather, agriculture, and health in their own community. The interactive workshop encouraged students to identify environmental challenges within their school premises and propose local solutions..</p>
      <h2>Highlights of the Session:</h2>
      <p>Interactive Learning: We used visual aids and local examples to explain biodiversity and the importance of urban trees.
      Club Formation: The Crescent Sustainability Club was officially formed with its first 25 members. These students have pledged to lead waste-reduction efforts and monitor the school’s green spaces.
      Warden Kits: We distributed introductory climate guides to club members to help them lead discussions in their respective classrooms..</p>
      <p>Seeing the students' enthusiasm during the formation of the club confirms that our youth are ready to lead This isn't just a club; it’s a training ground for future environmental defenders..</p>
      `
  },
  {
    id: 6,
    category: 'Education',
    title: 'Climate Warden Launches FXB Fellowship Project at Crescent Comprehensive School ',
    date: 'May 7, 2025',
    author: 'Programs Team',
    readTime: '3 min read',
    image: 'images/fxb-launch.jpg',
    imageCaption: 'Climate Warden Launches FXB Fellowship Project at Crescent Comprehensive School.',
    body: `
      <p>As part of his final project for the prestigious FXB Climate Advocates Fellowship, Climate Warden Founder Mustapha Muhammad Ali officially launched the "Empowering Youth and Local Communities for Climate and Biodiversity Action" initiative. The launch took place at Crescent Comprehensive School, marking the beginning of a long-term partnership to integrate climate education into the heart of the community..</p>
      <h2>Sustainable Education in Action</h2>
      <p>The project focuses on a "Grassroots-First" approach, targeting primary and secondary schools to ensure that climate consciousness starts at a young age. During the launch event, Mustapha engaged with students and faculty to explain the vital link between local biodiversity and global climate resilience.."</p>
      <h2>Key Components of the Launch</h2>
      <p>Sustainability Clubs: We officially inaugurated the school's first Sustainability Club, a student-led group dedicated to waste management, tree care, and environmental advocacy.

      Climate Curriculum: The project introduced a specialized climate education module designed to simplify complex environmental issues for young minds.

      ommunity Expansion: While it started at Crescent Comprehensive, this fellowship project is designed to scale across multiple local schools and community centers in the coming months.

      "Education is the most powerful tool for conservation," Mustapha stated during the event. "By forming these clubs, we are handing the leadership of the environment back to the people who will live in it.".</p>
    `
  },
  {
    id: 7,
    category: 'Launch of Climate Warden',
    title: "Climate Warden Launched in Bauchi State",
    date: 'December 20, 2025',
    author: 'Climate Warden Team',
    readTime: '3 min read',
    image: 'images/launch.jpg',
    imageCaption: 'Launch of Climate Warden.',
    body: `
      <p>In a significant step toward local environmental resilience, Climate Warden officially held its physical launch event, transitioning from a digital advocacy platform to a grassroots operational NGO. The event brought together community leaders, youth activists, and the newly unveiled Climate Warden core team to kickstart a mission of urban reforestation and climate education.
      <p>Founded by Mustapha Muhammad Ali, Climate Warden was born from a vision to protect Nigerian communities from the escalating threats of climate change, specifically focusing on rising urban temperatures and deforestation.</p>
      <h2>The Road Ahead</h2>
      <p>The launch marks the day we put shovels in the ground," said Mustapha during the opening remarks. "Climate Warden is not just about awareness; it is about building a team of 'Guardians' who are equipped to protect and restore our local ecosystems.".</p>`
  }
];

/* ── Render article on article.html ───────────────────────────── */
(function renderArticle() {
  const root = document.getElementById('article-root');
  if (!root) return;

  const urlParams = new URLSearchParams(window.location.search);
  const paramId = parseInt(urlParams.get('id'), 10);
  const id = !isNaN(paramId) ? paramId : parseInt(localStorage.getItem('cw_article') || '0', 10);

  const article = ARTICLES.find(a => a.id === id);

  if (!article) {
    root.innerHTML = `
      <section class="page-hero">
        <div class="container" style="position:relative;z-index:2;text-align:center">
          <h1>Article Not Found</h1>
          <p>This article doesn't exist or may have been moved.</p>
          <a href="news.html" class="btn btn-neon" style="margin-top:24px">← Back to News</a>
        </div>
      </section>`;
    return;
  }

  document.title = article.title + ' — Climate Warden';
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = article.title;

  const sidebarLinks = ARTICLES
    .filter(a => a.id !== id)
    .slice(0, 4)
    .map(a => `
          <a href="article.html" onclick="localStorage.setItem('cw_article','${a.id}')" style="display:block;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.06);text-decoration:none">
            <span style="font-family:'Inter',sans-serif;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:var(--green-neon)">${a.category}</span>
            <p style="font-family:'Inter',sans-serif;font-size:.83rem;color:rgba(255,255,255,.8);line-height:1.4;margin:4px 0 0">${a.title}</p>
          </a>`)
    .join('');

  root.innerHTML = `
    <section class="page-hero" style="min-height:340px">
      <div class="container" style="position:relative;z-index:2">
        <nav class="breadcrumb">
          <a href="index.html">Home</a><span>›</span>
          <a href="news.html">News</a><span>›</span>
          <span>${article.category}</span>
        </nav>
        <span class="chip" style="display:inline-flex;margin-bottom:16px">${article.category}</span>
        <h1 style="max-width:780px;font-size:clamp(1.5rem,3.5vw,2.4rem);line-height:1.25">${article.title}</h1>
        <div class="news-meta" style="margin-top:16px">
          <span> ${article.date}</span>
          <span> ${article.author}</span>
          <span> ${article.readTime}</span>
        </div>
      </div>
    </section>

    <div class="container" style="margin-top:-48px;position:relative;z-index:3">
      <div style="border-radius:20px;overflow:hidden;border:1px solid var(--green-border);position:relative">
        <img src="${article.image}" alt="${article.imageCaption}"
          style="width:100%;height:460px;object-fit:cover;display:block" loading="lazy" />
        <p style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,.6);
          color:rgba(255,255,255,.7);font-family:'Inter',sans-serif;font-size:.78rem;
          padding:8px 16px;margin:0">${article.imageCaption}</p>
      </div>
    </div>

    <section>
      <div class="container">
        <div class="article-layout">
          <article class="article-body">${article.body}</article>
          <aside class="article-sidebar">
            <div class="glass-card" style="padding:24px;border-radius:16px;margin-bottom:24px">
              <h4 style="font-family:'Poppins',sans-serif;font-size:.95rem;color:#fff;margin-bottom:16px">More Stories</h4>
              ${sidebarLinks}
            </div>
            <div class="glass-card" style="padding:24px;border-radius:16px">
              <h4 style="font-family:'Poppins',sans-serif;font-size:.95rem;color:#fff;margin-bottom:8px">Get Involved</h4>
              <p style="font-family:'Inter',sans-serif;font-size:.82rem;color:var(--text-muted);line-height:1.6;margin-bottom:16px">Join Climate Warden as a student volunteer, school partner or supporter.</p>
              <a href="get-involved.html" class="btn btn-neon" style="width:100%;justify-content:center">Join the Movement</a>
            </div>
          </aside>
        </div>
        <div style="margin-top:48px;padding-top:32px;border-top:1px solid rgba(255,255,255,.08)">
          <a href="news.html" class="btn btn-glass">← Back to All News</a>
        </div>
      </div>
    </section>`;
})();
