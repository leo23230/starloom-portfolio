import React from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/manrope'
import '@fontsource-variable/space-grotesk'
import { links, projects, spektr } from './content'
import './style.css'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`
const media = (filename) => asset(`media/${filename}`)

function Icon({ name }) {
  const paths = {
    arrow: <><path d="M4 12h15" /><path d="m12 5 7 7-7 7" /></>,
    diagonal: <><path d="M6 18 18 6" /><path d="M7 6h11v11" /></>,
    down: <><path d="M12 4v15" /><path d="m5 12 7 7 7-7" /></>,
    play: <path d="m8 5 12 7-12 7z" />,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8m-8 4h8" /></>,
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

function ExternalLink({ href, children, className = 'text-link', icon = 'diagonal' }) {
  return <a className={className} href={href}>{children}<Icon name={icon} /></a>
}

function ResumeLink({ className }) {
  return <a className={className} href={asset(links.resume)}><Icon name="file" /> Résumé <span className="file-type">PDF</span></a>
}

function ProjectCard({ project }) {
  return (
    <article className="project-card" id={project.id} aria-labelledby={`${project.id}-title`}>
      <a className="card-image" href={project.video} aria-label={`Watch ${project.title} gameplay on YouTube`}>
        <img src={media(project.image)} alt={project.alt} loading="lazy" width="480" height="270" />
        <span className="card-number" aria-hidden="true">{project.number}</span>
        <span className="play-icon"><Icon name="play" /></span>
      </a>
      <div className="card-content">
        <p className="eyebrow">{project.category}</p>
        <h3 id={`${project.id}-title`}>{project.title}</h3>
        <p className="project-role">{project.role}</p>
        <p>{project.description}</p>
        <p className="contribution">{project.contribution}</p>
        <ul className="tags" aria-label={`${project.title} technologies and skills`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <ExternalLink href={project.video}>Watch gameplay</ExternalLink>
      </div>
    </article>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" id="top">
        <div className="container header-inner">
          <a href="#top" className="brand">
            <img src={asset('mark.svg')} alt="" width="30" height="30" />
            <span>Leo Melendez</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <ResumeLink className="nav-resume" />
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="hero">
          <div className="container hero-grid">
            <div className="intro">
              <p className="eyebrow intro-label"><span /> Gameplay Programmer</p>
              <h1>Leo<br />Melendez<span>.</span></h1>
              <p className="hero-description">I build multiplayer gameplay, player mechanics, and real-time systems in Unity and C#.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">View projects <Icon name="down" /></a>
                <ResumeLink className="button button-secondary" />
              </div>
            </div>
            <figure className="hero-figure">
              <a href="#spektr" className="hero-image" aria-label="Explore the featured project, Spektr">
                <img src={media(spektr.hero)} alt={spektr.heroAlt} width="1440" height="810" fetchPriority="high" />
                <span className="hero-image-caption"><span className="eyebrow">Featured game</span><strong>{spektr.title}</strong></span>
                <span className="hero-image-arrow"><Icon name="diagonal" /></span>
              </a>
              <figcaption><span>01 / Featured project</span><span>Game footage · Steam</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="container work" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">Selected work</h2>
            <span className="eyebrow section-index">01–03 / Games</span>
          </div>

          <article className="feature" id="spektr" aria-labelledby="spektr-title">
            <div className="feature-overview">
              <div className="feature-copy">
                <p className="eyebrow feature-kicker">01 / {spektr.release}</p>
                <h3 id="spektr-title">{spektr.title}</h3>
                <p className="project-role">{spektr.role} <span>·</span> StarloomStudios</p>
                <p className="feature-description">{spektr.description}</p>
                <ul className="tags" aria-label="Spektr technologies and scope">
                  <li>Unity</li><li>C#</li><li>FishNet</li><li>5-player multiplayer</li>
                </ul>
                <ExternalLink href={links.steam} className="button button-primary">View on Steam</ExternalLink>
              </div>
              <figure className="trailer">
                <video aria-label="Spektr alpha gameplay trailer" controls playsInline preload="none" poster={media(spektr.poster)} width="1280" height="720">
                  <source src={media(spektr.video)} type="video/mp4" />
                  <a href={links.steam}>Watch the trailer on Steam</a>
                </video>
                <figcaption><Icon name="play" /> Alpha gameplay trailer</figcaption>
              </figure>
            </div>
            <div className="feature-detail">
              <div className="feature-work">
                <h4>What I built</h4>
                {spektr.work.map(({ title, description }) => (
                  <div key={title} className="work-note"><h5>{title}</h5><p>{description}</p></div>
                ))}
              </div>
              <div className="benchmark">
                <h4>RTX 2060 laptop performance</h4>
                <dl className="performance-grid">
                  {spektr.performance.map(({ value, label }) => (
                    <div key={value}><dt>{label}</dt><dd>{value}</dd></div>
                  ))}
                </dl>
                <p>Scene lighting changes brought the game above 60 FPS. Lowering texture resolution, shadow resolution, and render scale on the same laptop pushed it above 100 FPS.</p>
              </div>
            </div>
          </article>

          <div className="projects-grid">
            {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </section>

        <section className="container about" id="about" aria-labelledby="about-title">
          <div className="about-copy">
            <p className="eyebrow">About</p>
            <h2 id="about-title">Teaching and software development</h2>
            <p>I’m an independent game developer based in New Jersey. Alongside game programming, I’ve built mobile app interfaces, helped set up a college XR workflow, and taught students how to write and debug code.</p>
            <ResumeLink className="button button-primary" />
          </div>
          <div className="experience" aria-label="Selected professional experience">
            <div><strong>Teacher’s Assistant</strong><span>The College of New Jersey</span><p>Helped 60+ students debug projects and taught a Unity/C# lecture on inheritance.</p></div>
            <div><strong>Coding Instructor</strong><span>CodeWizardsHQ</span><p>Taught 300+ K–12 students and mentored high school interns.</p></div>
            <div><strong>Full Stack Developer II</strong><span>New Level Innovations</span><p>Built mobile interfaces and integrated Firebase services.</p></div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <div><strong>Leo Melendez</strong><span>Gameplay Programmer · New Jersey</span></div>
          <nav aria-label="Contact and profiles">
            <ExternalLink href={links.email}>Email</ExternalLink>
            <ExternalLink href={links.github}>GitHub</ExternalLink>
            <ExternalLink href={links.steam}>Steam</ExternalLink>
            <ExternalLink href={links.itch}>itch.io</ExternalLink>
          </nav>
        </div>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
