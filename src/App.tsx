import {
  ArrowUpRight, Check, ChevronRight, Cloud, Code2, ExternalLink, Github,
  GitBranch, Linkedin, Menu, Network, Server, ShieldCheck, Terminal, X,
} from 'lucide-react'
import { useState } from 'react'
import { profile, projects, skills, timeline, toolGroups } from './data'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Go to homepage">
          <span className="brand-mark"><Terminal size={17} /></span>
          <span>alex<span className="accent-text">.</span>ops</span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          {['about', 'skills', 'projects', 'journey', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href={`mailto:${profile.email}`} onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> {profile.availability}</div>
            <p className="hero-kicker">Hello, I&apos;m {profile.name.split(' ')[0]}.</p>
            <h1>Ship better.<br /><span className="outline-text">Sleep better.</span></h1>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ChevronRight size={17} /></a>
              <a className="text-link" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Decorative deployment pipeline illustration">
            <div className="orb orb-one" /><div className="orb orb-two" />
            <div className="terminal-window">
              <div className="window-bar"><span /><span /><span /><small>deploy-prod.sh</small></div>
              <div className="terminal-body">
                <p><span className="terminal-muted">$</span> ./deploy.sh <span className="terminal-flag">--production</span></p>
                <p className="terminal-muted">preflight checks ........ <b>done</b></p>
                <p className="terminal-muted">provisioning ........... <b>done</b></p>
                <p className="terminal-muted">rolling update .......... <b>done</b></p>
                <p className="terminal-muted">health checks ........... <b>done</b></p>
                <p className="terminal-success"><Check size={14} /> deployment successful</p>
                <p className="terminal-muted">uptime: <span className="terminal-highlight">99.98%</span> <span className="cursor" /></p>
              </div>
            </div>
            <div className="floating-card card-top"><Cloud size={17} /><span>cloud native</span></div>
            <div className="floating-card card-bottom"><ShieldCheck size={17} /><span>secure by default</span></div>
          </div>
        </section>

        <section className="about section-wrap section-grid" id="about">
          <div className="section-label"><span>01</span> / about me</div>
          <div className="about-content">
            <h2>Infrastructure should<br /><em>fade into the background.</em></h2>
            <p>{profile.bio}</p>
            <div className="about-facts"><div><strong>5+</strong><span>years shipping</span></div><div><strong>30+</strong><span>services supported</span></div><div><strong>24/7</strong><span>curiosity online</span></div></div>
          </div>
        </section>

        <section className="skills section-wrap section-grid" id="skills">
          <div className="section-label"><span>02</span> / toolkit</div>
          <div className="skills-content">
            <div className="section-heading"><h2>Tools I trust.<br /><em>Systems I understand.</em></h2><p>A practical toolkit for moving from infrastructure idea to observable production system.</p></div>
            <div className="skills-layout">
              <div className="skill-list">{skills.map((skill) => <div className="skill-row" key={skill.name}><div className="skill-name"><span>{skill.name}</span><span>{skill.value}%</span></div><div className="skill-track"><span style={{ width: `${skill.value}%` }} /></div></div>)}</div>
              <div className="tool-cloud">{toolGroups.map((group) => <div className="tool-group" key={group.label}><span className="tool-label">{group.label}</span><div>{group.tools.map((tool) => <span className="tool-chip" key={tool}>{tool}</span>)}</div></div>)}</div>
            </div>
          </div>
        </section>

        <section className="projects section-wrap section-grid" id="projects">
          <div className="section-label"><span>03</span> / selected work</div>
          <div className="projects-content">
            <div className="section-heading project-heading"><div><h2>Things I&apos;ve<br /><em>made reliable.</em></h2></div><p>Selected examples of platform work, automation, and systems thinking. Details are illustrative placeholders.</p></div>
            <div className="project-list">{projects.map((project) => <article className={`project-card ${project.accent}`} key={project.title}><div className="project-number">{project.number}</div><div className="project-main"><div className="project-title"><h3>{project.title}</h3><ExternalLink size={19} /></div><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="project-metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div></article>)}</div>
          </div>
        </section>

        <section className="journey section-wrap section-grid" id="journey">
          <div className="section-label"><span>04</span> / the journey</div>
          <div className="journey-content"><div className="section-heading"><h2>Always learning.<br /><em>Always improving.</em></h2></div><div className="timeline">{timeline.map((item, index) => <div className="timeline-item" key={item.period}><div className="timeline-marker">{index === 0 ? <Server size={15} /> : <GitBranch size={15} />}</div><div className="timeline-period">{item.period}</div><div><h3>{item.role} <span>@ {item.company}</span></h3><p>{item.text}</p></div></div>)}</div></div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-inner">
            <div className="section-label"><span>05</span> / start a conversation</div>
            <div className="contact-copy"><h2>Have a system<br /><em>worth building?</em></h2><p>Whether you&apos;re scaling a platform or starting from scratch, I&apos;d love to hear what you&apos;re working on.</p></div>
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={20} /></a>
            <div className="social-links"><a href={profile.github}><Github size={17} /> GitHub</a><a href={profile.linkedin}><Linkedin size={17} /> LinkedIn</a><span><Network size={17} /> {profile.location}</span></div>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap"><span>© 2025 {profile.name}. Built with intent.</span><span>Designed for the curious <Code2 size={14} /></span></footer>
    </div>
  )
}

export default App
