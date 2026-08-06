import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import './project-card.js'
import type { Project } from './project-card.js'

const PROJECTS: Project[] = [
  {
    title: 'Task Flow',
    description: 'A drag-and-drop kanban board for small teams, with realtime sync.',
    tags: ['TypeScript', 'Lit', 'WebSockets'],
    link: 'https://github.com',
  },
  {
    title: 'Recipe Vault',
    description: 'A searchable recipe manager with offline support via a service worker.',
    tags: ['PWA', 'IndexedDB'],
    link: 'https://github.com',
  },
  {
    title: 'Weather Glance',
    description: 'A minimal weather dashboard with 7-day forecasts and saved locations.',
    tags: ['API', 'CSS Grid'],
    link: 'https://github.com',
  },
]

@customElement('portfolio-app')
export class PortfolioApp extends LitElement {
  @state()
  private _name = 'Your Name'

  render() {
    return html`
      <header>
        <h1>${this._name}</h1>
        <p class="tagline">Building things for the web.</p>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="about">
          <h2>About</h2>
          <p>
            I'm a developer who enjoys turning ideas into working software.
            This page is a demo portfolio built with
            <a href="https://lit.dev/" target="_blank" rel="noopener">Lit</a>.
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div class="grid">
            ${PROJECTS.map(
              (project) => html`<project-card .project=${project}></project-card>`
            )}
          </div>
        </section>
      </main>

      <footer id="contact">
        <h2>Contact</h2>
        <p>
          <a href="mailto:you@example.com">you@example.com</a> ·
          <a href="https://github.com" target="_blank" rel="noopener">GitHub</a> ·
          <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
        </p>
      </footer>
    `
  }

  static styles = css`
    :host {
      --text: #6b6375;
      --text-h: #08060d;
      --bg: #fff;
      --border: #e5e4e7;
      --card-bg: #fff;
      --accent: #aa3bff;
      --accent-bg: rgba(170, 59, 255, 0.1);

      display: block;
      max-width: 900px;
      margin: 0 auto;
      padding: 0 20px 60px;
      font: 16px/1.5 system-ui, 'Segoe UI', Roboto, sans-serif;
      color: var(--text);
    }

    @media (prefers-color-scheme: dark) {
      :host {
        --text: #9ca3af;
        --text-h: #f3f4f6;
        --bg: #16171d;
        --border: #2e303a;
        --card-bg: #1f2028;
        --accent: #c084fc;
        --accent-bg: rgba(192, 132, 252, 0.15);
      }
    }

    h1,
    h2 {
      color: var(--text-h);
      margin: 0 0 8px;
    }

    header {
      padding: 60px 0 32px;
      text-align: center;
      border-bottom: 1px solid var(--border);
      margin-bottom: 40px;
    }

    header h1 {
      font-size: 40px;
    }

    .tagline {
      margin: 0 0 16px;
    }

    nav {
      display: flex;
      justify-content: center;
      gap: 20px;
    }

    nav a,
    footer a {
      color: var(--accent);
      text-decoration: none;
      font-weight: 600;
    }

    nav a:hover,
    footer a:hover {
      text-decoration: underline;
    }

    section {
      margin-bottom: 48px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    footer {
      text-align: center;
      padding-top: 32px;
      border-top: 1px solid var(--border);
    }

    a {
      color: inherit;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'portfolio-app': PortfolioApp
  }
}
