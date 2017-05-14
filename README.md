# Express Seed

> A seed project for the [Express](https://expressjs.com/) framework.

## Docker

### Building the image

```
$ docker build -t danielpacak/express-seed .
```

Run `docker images` and see if the image `danielpacak/express-seed` shows.

### Running the image

```
$ docker run --name express-seed -p 49160:8080 -d danielpacak/express-seed
```

Head over to [http://localhost:49160](http://localhost:49160) and your app should be live.

To print the output of the app `docker logs express-seed`.
If you need to go inside the container you can use the `exec` command:

```
$ docker exec -it express-seed /bin/bash
```

