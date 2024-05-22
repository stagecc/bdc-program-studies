# BDC Program Studies

## Creating a release

This project contains a [Docker container](./Dockerfile) that builds the React app and serves it with Nginx at port 8080 based on the [config file](./server.conf). Note that this app needs an environment variable for the search API passed as a Docker [build arg](https://docs.docker.com/build/guide/build-args/). See the example below:

```bash
docker build -t <TAG> . \
  --build-arg VITE_DUG_SEARCH_API=https://search-dev.biodatacatalyst.renci.org
```

There is also an automated Github Action that will build and push the image to the [Github Container Registry for this repo](https://github.com/stagecc/bdc-program-studies/pkgs/container/bdc-program-studies). The latest version can be pulled with this command:

```bash
docker pull ghcr.io/stagecc/bdc-program-studies:latest
```

To generate a new release, simply go to the [releases panel](https://github.com/stagecc/bdc-program-studies/releases) and click "Draft a new release". You can choose an appropriate semver tag, describe the update (or auto-generate with "Generate release notes"). Once you click "Publish release", a new git tag will be generated and the automated workflow (defined by [this yaml file](./.github/workflows/)) will run. Click the [actions tab](https://github.com/stagecc/bdc-program-studies/actions) to view the job's progress. Once it has completed successfully, it will be available in the registry and tagged with the provided version number and `latest`.

## Deploying

### Locally

Once you have the image, it can be deployed locally or anywhere that supports standard Docker images. For example, if you have Docker installed on your machine, you could run the following and go to `localhost` (the `-p` option maps the host computer's HTTP port 80 to the containers port 8080).

```bash
docker run -p 80:8080 ghcr.io/stagecc/bdc-program-studies:latest
```

### Sterling

For deployments, RENCI maintains a Kubernetes cluster, which can automatically manage and monitor container images, among many other features. This project provides a [Helm chart](./kubernetes/) used to describe the deployment of this application. To use it, update the `image.tag` field in [values.yaml](./kubernetes/values.yaml) file to the image tag you want to use. Be sure to commit this update so that the file always reflects the state of the cluster. Once the image tag has been update in the chart, we "upgrade" the cluster with the following command:

```bash
helm upgrade program-studies ./kubernetes -n bdc-search-dev
```

Once upgraded, the control plane will automatically shutdown the old instance and bring up the new version, ensuring no downtime.
