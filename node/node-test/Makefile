# .PHONY: all test clean

all: test lint

test: mocha-test

mocha-test:
	./node_modules/mocha/bin/mocha

lint:
	@eslint src/ test/

istanbul:
	istanbul cover _mocha test/test.*
