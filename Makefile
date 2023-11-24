.DEFAULT_GOAL=run

target:
	npm rund ev

setup: package.json
	npm install

run: setup
	npm run dev

.PHONY: setup run
