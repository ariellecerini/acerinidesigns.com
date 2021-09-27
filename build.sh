docker stop acerinidesigns-runner
docker container rm acerinidesigns-runner

docker build --tag acerinidesigns .

docker create -p 8000:8000 --name acerinidesigns-runner acerinidesigns
docker start acerinidesigns-runner

