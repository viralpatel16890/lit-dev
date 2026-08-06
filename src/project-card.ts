import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

export interface Project {
  title: string
  description: string
  tags: string[]
  link: string
}

@customElement('project-card')
export class ProjectCard extends LitElement {
  @property({ type: Object })
  project!: Project

  render() {
    const { title, description, tags, link } = this.project
    return html`
      <article>
        <h3>${title}</h3>
        <p>${description}</p>
        <ul class="tags">
          ${tags.map((tag) => html`<li>${tag}</li>`)}
        </ul>
        <a href=${link} target="_blank" rel="noopener">View project →</a>
      </article>
    `
  }

  static styles = css`
    :host {
      display: block;
    }

    article {
      height: 100%;
      box-sizing: border-box;
      padding: 24px;
      border-radius: 12px;
      border: 1px solid var(--border, #e5e4e7);
      background: var(--card-bg, #fff);
      display: flex;
      flex-direction: column;
      gap: 12px;
      transition: box-shadow 0.2s, transform 0.2s;
    }

    article:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.15);
    }

    h3 {
      margin: 0;
      font-size: 20px;
      color: var(--text-h, #08060d);
    }

    p {
      margin: 0;
      flex-grow: 1;
      color: var(--text, #6b6375);
    }

    .tags {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin: 0;
      padding: 0;
    }

    .tags li {
      font-size: 12px;
      padding: 3px 8px;
      border-radius: 999px;
      background: var(--accent-bg, rgba(170, 59, 255, 0.1));
      color: var(--accent, #aa3bff);
    }

    a {
      color: var(--accent, #aa3bff);
      text-decoration: none;
      font-weight: 600;
    }

    a:hover {
      text-decoration: underline;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'project-card': ProjectCard
  }
}
