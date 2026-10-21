---
sidebar_position: 2
title: Quick install
---

# OpenEverest quick install guide

Helm is the fastest way to install OpenEverest. Charts live in [openeverest/helm-charts](https://github.com/openeverest/helm-charts/tree/v1.x/charts/everest).

:::info Alternative installation method
You can also install with `everestctl`. See the [everestctl install guide](https://docs.openeverest.io/install/installEverest.html) on the current MkDocs site.
:::

## Prerequisites

1. Install [Helm v3](https://helm.sh/docs/intro/install/).
2. Install [yq](https://github.com/mikefarah/yq).
3. Set up a Kubernetes cluster. OpenEverest installs operators and packages, but it does **not** create the cluster.

   :::note
   Amazon EKS and Google GKE are the recommended starting points. Cluster setup steps stay on the [MkDocs install section](https://docs.openeverest.io/install/prerequisites.html) until those pages are ported.
   :::

4. Confirm cluster access. By default OpenEverest uses `~/.kube/config`.

   ```sh
   export KUBECONFIG=~/.kube/config
   kubectl get nodes
   ```

## Install with Helm

1. Add the chart repository:

   ```sh
   helm repo add openeverest https://openeverest.github.io/helm-charts/
   helm repo update
   ```

2. Install OpenEverest:

   ```sh
   helm install everest openeverest/openeverest \
     --namespace everest-system \
     --create-namespace
   ```

3. Retrieve the initial admin password:

   ```sh
   kubectl get secret everest-secrets \
     -n everest-system \
     -o jsonpath='{.data.admin-password}' | base64 --decode
   ```

4. Port-forward the UI (if you are not using Ingress):

   ```sh
   kubectl port-forward svc/everest 8080:8080 -n everest-system
   ```

   Open `http://127.0.0.1:8080` and sign in.

## Next

See [Features](features.md) for what you can do after install, or [Get help](get-help.md) if something fails.
