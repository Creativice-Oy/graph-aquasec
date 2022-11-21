# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Added `ACCOUNT_EMAIL` and `ACCOUNT_PASSWORD` to the list of environment
  variables. They are required for accessing the API responsible for fetching
  repositories and detections data.

- The following entities are **now** created:

| Resources  | Entity `_type`       | Entity `_class` |
| ---------- | -------------------- | --------------- |
| Detection  | `aquasec_detection`  | `Finding`       |
| Repository | `aquasec_repository` | `CodeRepo`      |

- The following relationships are **now** created:

| Source Entity `_type` | Relationship `_class` | Target Entity `_type` |
| --------------------- | --------------------- | --------------------- |
| `aquasec_account`     | **HAS**               | `aquasec_repository`  |
| `aquasec_repository`  | **HAS**               | `aquasec_detection`   |

## [1.0.1] - 2022-01-31

### Fixed

- Fixed questions.yaml file not being included in build.
- Upgraded to latest SDK.
- Updated documentation.
- Prettier formatting fixes.

## [1.0.0] - 2022-01-27

### Added

- Initial `@jupiterone/graph-aquasec` release.
- Ingestion of `aquasec_api_key`
- Ingestion of `aquasec_account`
- Ingestion of `aquasec_group`
- Ingestion of `aquasec_user`
