#! /bin/sh

# npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]

cd ./projects/ng-marquee
npm version minor

cd ../../
# npm version minor

ng build ng-marquee

rm README.md
cp ./projects/ng-marquee/README.md README.md