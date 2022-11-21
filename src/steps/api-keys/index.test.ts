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

test('#fetchApiKeys', async () => {
  recording = setupProjectRecording({
    directory: __dirname,
    name: 'fetch-api-keys',
  });

  const stepConfig = buildStepTestConfigForStep(Steps.API_KEYS);
  const stepResult = await executeStepWithDependencies(stepConfig);
  expect(stepResult).toMatchStepMetadata(stepConfig);
});
