import { getCollection } from 'astro:content';
import { projects, type Project } from './projects';

export async function getPublishedProjects(): Promise<Project[]> {
  const entries = await getCollection(
    'work',
    ({ data }) => data.status === 'published',
  );
  return projects
    .filter((project) => entries.some(({ data }) => data.projectId === project.id))
    .map((project) => {
      const entry = entries.find(({ data }) => data.projectId === project.id)!;
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
