#!/bin/bash

{

set -o errexit
set -o errtrace

dir="_site"

function help() {
    echo "\
Deploys to GitHub pages.

Usage:
./deploy.sh
./deploy.sh --do-it-live       Actually deploy
"
}

function bonk() {
    printf "\a"
}

function confirm_git_clean_status() {
    echo "Checking git status for uncommitted changes"
    if git_clean=$(git status --porcelain) && [ -z "$git_clean" ]; then
        echo "Clean"
        echo
    else
        echo "ERROR: Dirty."
        exit
    fi
}

function run() {
    if [[ "$1" == *"-h"* ]]; then
        help
        exit
    fi

    confirm_git_clean_status

    rm -rf $dir
    mkdir -pv $dir >/dev/null

    echo "BUILDING"
    echo "--------"
    npx @11ty/eleventy
    echo

    echo "COMMITTING"
    echo "----------"
    git checkout gh-pages
    cp -r $dir/* "."
    git add .
    git commit --allow-empty -m "Deploy $dir"
    echo

    echo "DEPLOYING"
    echo "---------"
    if [[ "$1" == *"--do-it-live"* ]]; then
        git push origin gh-pages
    else
        echo "Skipped! Supply --do-it-live flag to deploy."
    fi

    git checkout "@{-1}"

    bonk
}

# Send full args string w/ spaces
run "$*"

}
