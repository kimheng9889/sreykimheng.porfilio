export const profile = {
  name: 'Alex Morgan',
  role: 'DevOps Developer',
  location: 'Remote / UTC+7',
  email: 'hello@alexmorgan.dev',
  intro: 'I build reliable delivery systems, automate the repetitive, and help teams ship with confidence.',
  bio: 'DevOps developer with a product mindset. I enjoy turning fragile release processes into observable, repeatable platforms that make engineering teams faster and calmer.',
  availability: 'Open to platform engineering opportunities',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
}

export const skills = [
  { name: 'AWS / Cloud', value: 92 },
  { name: 'Kubernetes', value: 84 },
  { name: 'Terraform', value: 88 },
  { name: 'CI/CD', value: 95 },
  { name: 'Observability', value: 82 },
  { name: 'Linux & Bash', value: 90 },
]

export const toolGroups = [
  { label: 'Cloud', tools: ['AWS', 'Azure', 'Cloudflare'] },
  { label: 'Delivery', tools: ['GitHub Actions', 'Argo CD', 'Docker'] },
  { label: 'Platform', tools: ['Kubernetes', 'Helm', 'Terraform'] },
  { label: 'Signals', tools: ['Prometheus', 'Grafana', 'OpenTelemetry'] },
]

export const projects = [
  { number: '01', title: 'Golden Path Platform', description: 'A self-service deployment platform that gives product teams safe defaults from pull request to production.', tags: ['Kubernetes', 'Backstage', 'Argo CD'], metric: '42%', metricLabel: 'faster releases', accent: 'mint' },
  { number: '02', title: 'Cloud Cost Radar', description: 'FinOps dashboards and automated guardrails that make cloud spend visible before it becomes a surprise.', tags: ['AWS', 'Terraform', 'Python'], metric: '28%', metricLabel: 'monthly savings', accent: 'amber' },
  { number: '03', title: 'Zero-Downtime Delivery', description: 'Progressive delivery workflows with health checks, automated rollback, and clear service ownership.', tags: ['GitHub Actions', 'Istio', 'Grafana'], metric: '99.98%', metricLabel: 'availability', accent: 'blue' },
]

export const timeline = [
  { period: '2023 — now', role: 'DevOps Developer', company: 'Northstar Labs', text: 'Building internal platforms, reusable infrastructure modules, and delivery workflows for 30+ services.' },
  { period: '2021 — 2023', role: 'Cloud Engineer', company: 'Signal Works', text: 'Migrated workloads to AWS, introduced infrastructure as code, and established the first observability standards.' },
  { period: '2019 — 2021', role: 'Software Engineer', company: 'Independent projects', text: 'Learned by shipping web applications, automating deployments, and making Linux servers do useful things.' },
]
