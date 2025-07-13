import type { DiagramMetadata } from '../types.js';

export default {
  id: 'storymap',
  name: 'Storymap',
  description: 'Visualize backlog of stories in hierarchical format',
  examples: [
    {
      title: 'Storymap',
      isDefault: true,
      code: `storymap-beta`,
    },
  ],
} satisfies DiagramMetadata;
