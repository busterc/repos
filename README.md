# @buster/repos

> Tiny wrapper around github-base for getting publicly available information for a repository, or all of the repositories for one or more users or orgs, from the GitHub API.

## FYI

This is a fork of Jon Schlinkert's [repos](https://github.com/jonschlinkert/repos) module, for the sole purpose of making the destination JSON file **OPTIONAL** when using the CLI. If that is not your desire, then you should just use the original module: [repos](https://www.npmjs.com/package/repos). FWIW, I have opened a [Pull Request](https://github.com/jonschlinkert/repos/pull/1).

## Install

```sh
$ npm install --save @buster/repos
```

## CLI

```sh
$ repos <names> [dest]
```

* `names` - one or more comma-separated user names or orgs
* `dest` - destination path for JSON file (optional)

### Related projects

You might also be interested in these projects:

* [gists](https://www.npmjs.com/package/gists): Methods for working with the GitHub Gist API. Node.js/JavaScript | [homepage](https://github.com/jonschlinkert/gists "Methods for working with the GitHub Gist API. Node.js/JavaScript")
* [github-base](https://www.npmjs.com/package/github-base): Low-level methods for working with the GitHub API in node.js/JavaScript. | [homepage](https://github.com/jonschlinkert/github-base "Low-level methods for working with the GitHub API in node.js/JavaScript.")
* [github-content](https://www.npmjs.com/package/github-content): Easily download files from github raw user content. | [homepage](https://github.com/doowb/github-content "Easily download files from github raw user content.")
* [github-contributors](https://www.npmjs.com/package/github-contributors): Generate a markdown or JSON list of contributors for a project using the GitHub API. | [homepage](https://github.com/jonschlinkert/github-contributors "Generate a markdown or JSON list of contributors for a project using the GitHub API.")
* [topics](https://www.npmjs.com/package/topics): Get and update GitHub repository topics. | [homepage](https://github.com/jonschlinkert/topics "Get and update GitHub repository topics.")

### Author

**Jon Schlinkert**

* [GitHub Profile](https://github.com/jonschlinkert)
* [Twitter Profile](https://twitter.com/jonschlinkert)
* [LinkedIn Profile](https://linkedin.com/in/jonschlinkert)

### License

Copyright © 2018, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).
