new-branch:
	git checkout -b $(name) $(source) && \
	git push --set-upstream origin $(name)