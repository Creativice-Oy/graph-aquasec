import {
  createIntegrationEntity,
  Entity,
} from '@jupiterone/integration-sdk-core';

import { AquaSecRepository } from '../../aquasec/types';
import { Entities } from '../constants';

export function buildRepositoryEntityKey(id: string) {
  return `aquasec_repository:${id}`;
}

export function createRepositoryEntity(data: AquaSecRepository): Entity {
  return createIntegrationEntity({
    entityData: {
      source: data,
      assign: {
        _key: buildRepositoryEntityKey(data.repository_id),
        _type: Entities.REPOSITORY._type,
        _class: Entities.REPOSITORY._class,
        id: data.repository_id,
        name: data.name,
        repositoryId: data.repository_id,
        scmId: data.scm_id,
        source: data.source,
        'lastScan.branch': data.last_scan.branch,
        'lastScan.buildSystem': data.last_scan.build_system,
        'lastScan.gitUser': data.last_scan.git_user,
        'lastScan.highSeverityCount': data.last_scan.high_severity_count,
        'lastScan.impactedFileCount': data.last_scan.impacted_file_count,
        'lastScan.lowSeverityCount': data.last_scan.low_severity_count,
        'lastScan.mediumSeverityCount': data.last_scan.medium_severity_count,
        'lastScan.policyFailureCount': data.last_scan.policy_failure_count,
        'lastScan.policyPassCount': data.last_scan.policy_pass_count,
        'lastScan.policyWarningCount': data.last_scan.policy_warning_count,
        'lastScan.scanDate': data.last_scan.scan_date,
        'lastScan.scanId': data.last_scan.scan_id,
        'lastScan.scmLink': data.last_scan.scm_link,
        'lastScan.triggeredBy': data.last_scan.triggered_by,
        'lastScan.unknownSeverityCount': data.last_scan.unknown_severity_count,
      },
    },
  });
}
