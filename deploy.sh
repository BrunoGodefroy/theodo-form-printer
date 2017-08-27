CURRENT_BRANCH=`git rev-parse --abbrev-ref HEAD`

if [ -z "$(git status --porcelain)" ]
then
    echo "Clean directory."
else
    echo "Uncommited changes."
    exit 1
fi

if [ "$CURRENT_BRANCH" != "gh-pages" ]
then
    echo "Wrong branch, checkout gh-pages to deploy."
    exit 1
fi

git pull
git merge origin/master
rm bundle.*.js
yarn build
git add 'bundle.*.js'
git add index.html
git commit -m 'Deployment'
git push
