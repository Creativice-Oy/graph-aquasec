import { IntegrationInvocationConfig } from '@jupiterone/integration-sdk-core';
import { StepTestConfig } from '@jupiterone/integration-sdk-testing';
import * as dotenv from 'dotenv';
import * as path from 'path';

import { IntegrationConfig } from '../src/config';
import { invocationConfig } from '../src';

if (process.env.LOAD_ENV) {
  dotenv.config({
    path: path.join(__dirname, '../.env'),
  });
}

const DEFAULT_API_KEY = 'dummy-api-key';
const DEFAULT_API_SECRET = 'dummy-api-secret';
const DEFAULT_ACCOUNT_ID = '16582';
const DEFAULT_ACCOUNT_EMAIL = 'dummy@email.com';
const DEFAULT_ACCOUNT_PASSWORD = 'dummy-password';

export const integrationConfig: IntegrationConfig = {
  apiKey: process.env.API_KEY || DEFAULT_API_KEY,
  apiSecret: process.env.API_SECRET || DEFAULT_API_SECRET,
  accountId: process.env.ACCOUNT_ID || DEFAULT_ACCOUNT_ID,
  accountEmail: process.env.ACCOUNT_EMAIL || DEFAULT_ACCOUNT_EMAIL,
  accountPassword: process.env.ACCOUNT_PASSWORD || DEFAULT_ACCOUNT_PASSWORD,
};

export function buildStepTestConfigForStep(stepId: string): StepTestConfig {
  return {
    stepId,
    instanceConfig: integrationConfig,
    invocationConfig: invocationConfig as IntegrationInvocationConfig,
  };
}
