# Express Seed

> A seed project for the [Express](https://expressjs.com/) framework.

## Docker

### Building the image

```
$ docker build --tag danielpacak/express-seed .
```

Run `docker images` and see if the image `danielpacak/express-seed` shows.

### Running the image

```
$ docker run --name express-seed \
--env NODE_ENV=production \
--user node \
--init \
--publish 49160:8080 \
--detach \
--memory 300M \
--memory-swap 1G \
danielpacak/express-seed
```

Head over to [http://localhost:49160](http://localhost:49160) and your app should be live.
Navigate to [http://localhost:49160](http://localhost:49160/env) to see the user
[environment properties](https://nodejs.org/api/process.html#process_process_env).

To print the output of the app use the `logs` command:

```
$ docker logs express-seed
```

If you need to go inside the container you can use the `exec` command:

```
$ docker exec --interactive --tty express-seed /bin/bash
```

## Links

* [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
* [Docker and Node.js Best Practices](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md)

