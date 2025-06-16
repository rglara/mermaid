import type {
  DefaultSharedCoreModuleContext,
  LangiumCoreServices,
  LangiumSharedCoreServices,
  Module,
  PartialLangiumCoreServices,
} from 'langium';
import {
  inject,
  createDefaultCoreModule,
  createDefaultSharedCoreModule,
  EmptyFileSystem,
} from 'langium';
import { CommonValueConverter } from '../common/valueConverter.js';
import { MermaidGeneratedSharedModule, StoryMapGeneratedModule } from '../generated/module.js';
import { StoryMapTokenBuilder } from './tokenBuilder.js';

interface StoryMapAddedServices {
  parser: {
    TokenBuilder: StoryMapTokenBuilder;
    ValueConverter: CommonValueConverter;
  };
}

export type StoryMapServices = LangiumCoreServices & StoryMapAddedServices;

export const StoryMapModule: Module<
  StoryMapServices,
  PartialLangiumCoreServices & StoryMapAddedServices
> = {
  parser: {
    TokenBuilder: () => new StoryMapTokenBuilder(),
    ValueConverter: () => new CommonValueConverter(),
  },
};

export function createStoryMapServices(context: DefaultSharedCoreModuleContext = EmptyFileSystem): {
  shared: LangiumSharedCoreServices;
  StoryMap: StoryMapServices;
} {
  const shared: LangiumSharedCoreServices = inject(
    createDefaultSharedCoreModule(context),
    MermaidGeneratedSharedModule
  );
  const StoryMap: StoryMapServices = inject(
    createDefaultCoreModule({ shared }),
    StoryMapGeneratedModule,
    StoryMapModule
  );
  shared.ServiceRegistry.register(StoryMap);
  return { shared, StoryMap };
}
