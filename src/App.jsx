import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Code2, Database, BrainCircuit, Layout, ChevronRight, Server, ExternalLink, ArrowUpRight } from 'lucide-react';
import './index.css';

// Animation variants
const popUpVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 0.8
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", damping: 15, stiffness: 100, delay: 0.8 }
  }
};

function App() {
  const [formStatus, setFormStatus] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('Sending...');
    const formData = new FormData(event.target);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setFormStatus('Message Sent!');
        event.target.reset();
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setFormStatus('Error sending message.');
    }
  };

  return (
    <>
      <div className="container" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

        {/* Navigation */}
        <header className="header-nav">
          <a href="#" className="logo">
            Ayush.
          </a>
          <nav className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </header>

        {/* Hero Section */}
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', padding: '60px 0 100px 0' }}>

          {/* Floating Pills removed per request */}

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '1200px', width: '100%', display: 'flex', flexWrap: 'wrap-reverse', gap: '64px', alignItems: 'center' }}>

            {/* Left Column: Text */}
            <div style={{ flex: '1 1 500px' }}>
              <motion.h1 variants={popUpVariants} style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
                lineHeight: '1.05',
                color: 'var(--text-primary)',
                letterSpacing: '-2px',
                marginBottom: '48px'
              }}>
                Ayush Singh <br /><span style={{ fontStyle: 'italic', color: '#444' }}>Rawat.</span>
              </motion.h1>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'flex-start' }}>
                <motion.div variants={popUpVariants}>
                  <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '450px' }}>
                    Final-year B.Tech Computer Science student passionate about Backend Development, AI, and Full-Stack Engineering. Built scalable web applications, AI-powered solutions, and machine learning projects while gaining hands-on experience with Flask, React, Python, and SQL. Focused on building real-world software
                  </p>
                </motion.div>

                <motion.div variants={popUpVariants} style={{ borderLeft: '1px solid var(--glass-border)', paddingLeft: '32px' }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '2px', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '24px', lineHeight: '1.8' }}>
                    AVAILABLE FOR INTERNSHIPS<br />& COLLABORATIONS · INDIA
                  </p>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <a href="#projects" className="btn-primary" style={{ padding: '12px 24px', fontSize: '0.85rem' }}>
                      VIEW PROJECTS
                      <span className="btn-icon" style={{ width: '24px', height: '24px' }}>
                        <ArrowUpRight size={14} strokeWidth={2.5} />
                      </span>
                    </a>
                    <a href="mailto:ayushrawat011@gmail.com" className="btn-secondary" style={{ padding: '12px 24px', fontSize: '0.85rem' }}>
                      CONTACT ME
                    </a>
                    <a href="/Ayush_Resume.pdf" download="Ayush_Resume.pdf" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', fontSize: '0.85rem' }}>
                      <Download size={16} />
                      RESUME
                    </a>
                  </div>
                  <div style={{ display: 'flex', gap: '24px', marginTop: '32px', alignItems: 'center' }}>
                    <a href="https://github.com/ayushhhxr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', transition: 'opacity 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                      <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/ayush-rawat-b508102ba/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', transition: 'opacity 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                      <Linkedin size={24} />
                    </a>
                    <a href="mailto:ayushrawat011@gmail.com" style={{ color: 'var(--text-primary)', transition: 'opacity 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                      <Mail size={24} />
                    </a>
                    <a href="tel:+918076733610" style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontFamily: 'var(--font-mono)', textDecoration: 'none', transition: 'opacity 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                      +91 8076733610
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column: Image */}
            <motion.div variants={popUpVariants} style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '100%', maxWidth: '380px', aspectRatio: '3/4', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', position: 'relative' }}>
                <img src="/me.jpeg" alt="Ayush Singh Rawat" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(0,0,0,0.05)', borderRadius: '24px', pointerEvents: 'none' }}></div>
              </div>
            </motion.div>

          </motion.div>
        </main>
      </div>

      {/* About Section */}
      <div style={{ background: 'var(--bg-color)' }}>
        <div className="container">
          <section id="about" className="section" style={{ paddingTop: '160px' }}>
            <div className="split-layout">
              <div>
                <div className="section-tag">01 &mdash; About</div>
                <h2 className="section-title">
                  A developer <br />
                  <em>obsessed</em> with <br />
                  the small details.
                </h2>
              </div>

              <div style={{ paddingTop: '80px' }}>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '24px' }}>
                  I'm a Computer Science Engineering student who fell in love with backend systems and machine learning — the quiet layers that make software actually work. I care about clean APIs, honest models, and building things that solve real problems for real people.
                </p>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  My goal is simple — become a software engineer who can move fluently between production backends and applied AI, and ship products that respect their users. That's the whole thing.
                </p>

                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-date">Jun 2023 - Jun 2027</div>
                    <div className="timeline-title">Coer University | Roorkee</div>
                    <div className="timeline-desc">B.Tech in Computer Science and Engineering (AI & ML)</div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-date">Jun 2021 - Jun 2023</div>
                    <div className="timeline-title">Vanasthali Public School | New Delhi</div>
                    <div className="timeline-desc">Senior Secondary (Class XII)</div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-date">Jun 2008 - Jun 2021</div>
                    <div className="timeline-title">Blooming Vale Public School | Kotdwara</div>
                    <div className="timeline-desc">Secondary (Class X)</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="section">
            <div className="split-layout" style={{ marginBottom: '64px' }}>
              <div>
                <div className="section-tag">02 &mdash; Skills</div>
                <h2 className="section-title">
                  A curated <em>stack</em><br />
                  for building & shipping.
                </h2>
              </div>
              <div style={{ paddingTop: '80px' }}>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Six domains. Practiced across coursework, personal projects, hackathons and open source.
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>

              {/* ML / AI */}
              <div className="skill-card-new-layout">
                <div className="skill-card-title-new">ML / AI</div>
                <div className="skill-tags-new">
                  <span className="skill-tag-new">PyTorch</span>
                  <span className="skill-tag-new">TensorFlow</span>
                  <span className="skill-tag-new">Hugging Face</span>
                  <span className="skill-tag-new">RAG</span>
                  <span className="skill-tag-new">Scikit-learn</span>
                  <span className="skill-tag-new">OpenCV</span>
                </div>
              </div>

              {/* LANGUAGES */}
              <div className="skill-card-new-layout">
                <div className="skill-card-title-new">LANGUAGES</div>
                <div className="skill-tags-new">
                  <span className="skill-tag-new">Python</span>
                  <span className="skill-tag-new">SQL</span>
                  <span className="skill-tag-new">C</span>
                </div>
              </div>

              {/* WEB & DEPLOYMENT */}
              <div className="skill-card-new-layout">
                <div className="skill-card-title-new">WEB & DEPLOYMENT</div>
                <div className="skill-tags-new">
                  <span className="skill-tag-new">Django & Flask</span>
                  <span className="skill-tag-new">React & Next.js</span>
                  <span className="skill-tag-new">Streamlit</span>
                  <span className="skill-tag-new">REST APIs</span>
                  <span className="skill-tag-new">Docker</span>
                  <span className="skill-tag-new">AWS & Vercel</span>
                </div>
              </div>

              {/* DATA & TOOLS */}
              <div className="skill-card-new-layout">
                <div className="skill-card-title-new">DATA & TOOLS</div>
                <div className="skill-tags-new">
                  <span className="skill-tag-new">PostgreSQL & MongoDB</span>
                  <span className="skill-tag-new">Pandas & NumPy</span>
                  <span className="skill-tag-new">GitHub Actions</span>
                  <span className="skill-tag-new">Jupyter Notebook</span>
                  <span className="skill-tag-new">Beautiful Soup</span>
                </div>
              </div>

            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section">
            <div className="split-layout" style={{ marginBottom: '64px' }}>
              <div>
                <div className="section-tag">03 &mdash; SELECTED WORK</div>
                <h2 className="section-title">
                  Featured <em>projects</em><br />
                  & experiments.
                </h2>
              </div>
              <div style={{ paddingTop: '80px' }}>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Selected projects across AI, computer vision and backend engineering. Swipe or scroll to explore.
                </p>
              </div>
            </div>

            <div className="projects-grid">

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="project-card-new"
              >
                <div className="project-header-new">
                  <h3 className="project-title-new">Edureach</h3>
                  <div className="btn-group-new">
                    <a href="https://github.com/ayushhhxr/Edureach" target="_blank" rel="noopener noreferrer" className="btn-site">Live Site</a>
                    <a href="https://github.com/ayushhhxr/Edureach" target="_blank" rel="noopener noreferrer" className="btn-github">GitHub</a>
                  </div>
                </div>
                <div className="project-image-container-new">
                  <img src="/edureach.jpg" alt="Edureach" className="project-image-new" />
                </div>
                <div className="project-content-new">
                  <p className="project-desc-new">
                    Offline Multilingual AI Education Platform. Built a RAG pipeline with ChromaDB + Sentence Transformers supporting PDF ingestion, semantic chunking, and citations. Integrated multilingual support for 5+ Indian languages using IndicTrans2, and implemented dual LLM provider with automatic offline fallback.
                  </p>
                  <div className="project-tags-new">
                    <span className="project-tag-new">Python</span>
                    <span className="project-tag-new">JS</span>
                    <span className="project-tag-new">RAG</span>
                    <span className="project-tag-new">HTML</span>
                    <span className="project-tag-new">PDFPlumber</span>
                    <span className="project-tag-new">FastAPI</span>
                    <span className="project-tag-new">ChromaDB</span>
                    <span className="project-tag-new">OpenAI</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                className="project-card-new"
              >
                <div className="project-header-new">
                  <h3 className="project-title-new">Player Tracking System</h3>
                  <div className="btn-group-new">
                    <a href="https://github.com/ayushhhxr/player_reid_submission" target="_blank" rel="noopener noreferrer" className="btn-site">Live Site</a>
                    <a href="https://github.com/ayushhhxr/player_reid_submission" target="_blank" rel="noopener noreferrer" className="btn-github">GitHub</a>
                  </div>
                </div>
                <div className="project-image-container-new">
                  <img src="/player%20reid.webp" alt="Player Tracking System" className="project-image-new" />
                </div>
                <div className="project-content-new">
                  <p className="project-desc-new">
                    Player Re-identification and Tracking. Implements a player re-identification and tracking system for sports videos using computer vision techniques. Leverages YOLO for object detection and Deep SORT for multi-object tracking.
                  </p>
                  <div className="project-tags-new">
                    <span className="project-tag-new">Python</span>
                    <span className="project-tag-new">YOLO</span>
                    <span className="project-tag-new">OpenCV</span>
                    <span className="project-tag-new">DeepSORT</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                className="project-card-new"
              >
                <div className="project-header-new">
                  <h3 className="project-title-new">Annsetu</h3>
                  <div className="btn-group-new">
                    <a href="#" className="btn-site">Live Site</a>
                    <a href="#" className="btn-github">GitHub</a>
                  </div>
                </div>
                <div className="project-image-container-new">
                  <img src="/annsetu.png" alt="Annsetu" className="project-image-new" />
                </div>
                <div className="project-content-new">
                  <p className="project-desc-new">
                    Surplus Resource Redistribution Platform. Built a full stack platform connecting corporates, NGOs, and volunteers using Flask REST API, PostgreSQL and JWT auth. Implemented dual layer multilingual support for 7 Indian languages and built a real-time donation lifecycle tracker.
                  </p>
                  <div className="project-tags-new">
                    <span className="project-tag-new">Python</span>
                    <span className="project-tag-new">HTML5</span>
                    <span className="project-tag-new">JS</span>
                    <span className="project-tag-new">CSS</span>
                    <span className="project-tag-new">Flask</span>
                    <span className="project-tag-new">PostgreSQL</span>
                    <span className="project-tag-new">REST APIs</span>
                    <span className="project-tag-new">Google Translate API</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="section">
            <div className="section-tag">04 &mdash; EXPERIENCE</div>
            <h2 className="section-title">
              Where I've <em>shipped</em><br />
              & shown up.
            </h2>
            <div className="exp-list" style={{ marginTop: '64px' }}>
              <div className="exp-row">
                <div className="exp-year">2026</div>
                <div className="exp-content">
                  <h3 className="exp-title">Backend Developer Internship <span className="exp-company">&mdash; Nexaiit</span></h3>
                  <ul className="exp-desc" style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>Designed and optimized database schemas, improving query performance and data management.</li>
                    <li>Integrated frontend applications with backend APIs and ensured secure data exchange.</li>
                    <li>Tested, debugged, and fixed backend issues while collaborating with the development team using Git.</li>
                    <li>Implemented file upload and data preprocessing.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section">
            <div className="contact-layout">
              <div>
                <div className="section-tag">06 &mdash; CONTACT</div>
                <h2 className="section-title">
                  Let's <em>talk</em>.
                </h2>
                <div className="contact-info">
                  <p>Have an idea, an internship, or want to collaborate on something interesting? Drop me a note — I read everything.</p>
                  <div className="contact-links">
                    <a href="mailto:ayushrawat011@gmail.com" className="contact-link">
                      <div className="contact-icon-wrapper"><Mail size={16} /></div>
                      ayushrawat011@gmail.com
                    </a>
                    <a href="https://github.com/ayushhhxr" target="_blank" rel="noopener noreferrer" className="contact-link">
                      <div className="contact-icon-wrapper"><Github size={16} /></div>
                      @ayushhhxr
                    </a>
                    <a href="https://www.linkedin.com/in/ayush-rawat-b508102ba/" target="_blank" rel="noopener noreferrer" className="contact-link">
                      <div className="contact-icon-wrapper"><Linkedin size={16} /></div>
                      LinkedIn
                    </a>
                    <a href="/Ayush_Resume.pdf" download="Ayush_Resume.pdf" className="btn-secondary" style={{ display: 'inline-flex', width: 'fit-content', marginTop: '16px', alignItems: 'center', gap: '8px' }}>
                      <Download size={18} />
                      DOWNLOAD RESUME
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-form-card">
                <form onSubmit={onSubmit}>
                  {/* Web3Forms Access Key */}
                  <input type="hidden" name="access_key" value="e396c32b-2414-402f-9f87-609a536e2d0e" />

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input type="text" name="name" className="form-input" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input type="email" name="email" className="form-input" placeholder="you@domain.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input type="text" name="subject" className="form-input" placeholder="What's this about?" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea name="message" className="form-input" placeholder="Tell me what you're building or the opportunity you have in mind." required></textarea>
                  </div>

                  {/* Honeypot to prevent spam */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="form-footer">
                    <div className="form-note">ALL MESSAGES ARE STORED SECURELY.</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      {formStatus && <span style={{ color: formStatus === 'Message Sent!' ? '#4ade80' : '#f87171', fontSize: '0.9rem' }}>{formStatus}</span>}
                      <button type="submit" className="btn-primary" style={{ padding: '20px 40px' }} disabled={formStatus === 'Sending...'}>
                        {formStatus === 'Sending...' ? 'SENDING...' : 'SEND MESSAGE'} <ArrowUpRight size={18} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

export default App;
