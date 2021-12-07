# Crayfish
Testing project for playing with Kubernetes environments

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: crayfish
  labels:
    istio-injection: enabled
---
apiVersion: v1
data:
  .dockerconfigjson: "<base64 encoded docker login file>"
kind: Secret
metadata:
  name: github-pull-images-secret
  namespace: crayfish
type: kubernetes.io/dockerconfigjson
---
kind: GitRepo
apiVersion: fleet.cattle.io/v1alpha1
metadata:
  name: crayfish
  namespace: fleet-local
spec:
  repo: https://github.com/akazakou/crayfish.git
  targetNamespace: crayfish
  branch: main
  paths:
  - deploy/helm
  targets:
  - name: main
    clusterGroup: main # here is a cluster group name that should be created in the Rancher Fleet CD
```