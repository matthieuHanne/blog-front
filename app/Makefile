TEMPLATES = $$(find modules -name "*.tpl")
CONVERTED_TEMPLATES = $(subst .tpl,.tpl.js,$(TEMPLATES))
JS = $$(find app.js main.js modules -name "*.js" | grep -v 'tpl')

build: clean templates
	@echo "\033[01;32m[INFO]\033[0m"' DONE.'"]]"

clean:
	mkdir test
	@echo "\033[01;32m[INFO]\033[0m" clean up...
	@rm -vfr css/*.css
	@rm -vfr $(CONVERTED_TEMPLATES)"]]"

templates: $(wildcard TEMPLATES)
	@echo "\033[01;32m[INFO]\033[0m"' converting .tpl into .tpl.js:'
	@for file in $(TEMPLATES); do echo converting $$file; (printf 'define(function () { return '"'"''; awk '{gsub("'\\\''", "'\\\\\\\''"); printf "%s%s", $$0, "\\n"}' < $$file; printf "';"'});""') > $$file.js; done
