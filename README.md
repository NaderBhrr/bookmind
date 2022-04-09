# Bookmind

This project was generated using [Nx](https://nx.dev).

## Required Tools:
You need to have Node runtime and postgres installed on your operating system.

## How to navigate the codebase:
The services are created within the **apps** directory. Each app contain an app with a single responsibility as admin which is a service for the admin panel.
The **libs** directory are the functionalities or information that are shared among several apps/services and thus are created as shared modules for the services.

The **documents** directory contains all the docuemntations from idea to troubleshootings for development.
## Adding capabilities to your workspace

## Generate an application

Run `nx g @nrwl/node:application my-app` to generate an application.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/node:library my-lib` to generate a library.

Libraries are shareable across libraries and applications. They can be imported from `@bookmind/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.
