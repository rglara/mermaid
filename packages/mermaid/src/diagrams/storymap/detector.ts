import type {
  DiagramDetector,
  DiagramLoader,
  ExternalDiagramDefinition,
} from '../../diagram-api/types.js';

const id = 'storymap';

const detector: DiagramDetector = (txt) => {
  return /^\s*storymap/.test(txt);
};

const loader: DiagramLoader = async () => {
  const { diagram } = await import('./diagram.js');
  return { id, diagram };
};

export const storymap: ExternalDiagramDefinition = {
  id,
  detector,
  loader,
};
