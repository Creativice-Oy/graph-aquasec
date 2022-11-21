import {
  executeStepWithDependencies,
  Recording,
} from '@jupiterone/integration-sdk-testing';

import { buildStepTestConfigForStep } from '../../../test/config';
import { setupProjectRecording } from '../../../test/recording';
import { Steps } from '../constants';

let recording: Recording;

afterEach(async () => {
  await recording.stop();
});

test('#fetchRepositories', async () => {
  recording = setupProjectRecording({
    directory: __dirname,
    name: 'fetch-repositories',
  });

  const stepConfig = buildStepTestConfigForStep(Steps.REPOSITORIES);
  const stepResult = await executeStepWithDependencies(stepConfig);
  expect(stepResult).toMatchStepMetadata(stepConfig);
});
