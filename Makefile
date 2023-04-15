.DEFAULT_GOAL=run

setup: package.json
	npm install

run: setup
	npm run dev

.PHONY: setup run
