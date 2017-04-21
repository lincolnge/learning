FROM ubuntu:trusty

ENV VER     3.0.0

ENV TARBALL http://download.redis.io/releases/redis-$VER.tar.gz

# ==> Install curl and helper tools...

RUN apt-get update

RUN apt-get install -y  curl make gcc

# ==> Download, compile, and install...

RUN curl -L $TARBALL | tar zxv

WORKDIR  redis-$VER

RUN make

RUN make install

#...

# ==> Clean up...

WORKDIR /

RUN apt-get remove -y --auto-remove curl make gcc

RUN apt-get clean

RUN rm -rf /var/lib/apt/lists/*  /redis-$VER

#...

CMD ["redis-server"]
