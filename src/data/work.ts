import { getCollection } from 'astro:content';
import { projects, type Project } from './projects';

export async function getPublishedProjects(): Promise<Project[]> {
  const entries = await getCollection(
    'work',
    ({ data }) => data.status === 'published',
  );
  return projects.map((project) => {
    const matches = entries.filter(({ data }) => data.projectId === project.id);
    if (matches.length > 1)
      throw new Error(`Duplicate case studies for ${project.id}`);
    const entry = matches[0];
    if (!entry) return { ...project, caseStudy: undefined };
    return {
      ...project,
      title: entry.data.title,
      role: entry.data.role,
      teamContext: entry.data.teamContext,
      stack: entry.data.stack,
      repoUrl: entry.data.repoUrl,
      caseStudy: `/work/${entry.id}/`,
    };
  });
}
