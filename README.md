# Discovery Semester Website

### Content

Lives in language specific sub-directories of `./public/pages` as markdown files.

Some smaller text snippets (headings, ...) live in `./src/utils/enTranslations.tsx` respectively `./src/utils/deTranslations.tsx`. The sign-up link becomes disabled if the `signUpMenteeURL` respectively `signUpMentorURL` is empty.

### Building

It's a react page built with yarn:

``` sh
$ yarn install
$ yarn build
```

The static site ends up in `./build/` and you can serve it locally for testing with whatever you like. The yarn way is:

``` sh
$ yarn global add serve
$ serve build
```

### Deploying

The site is deployed with netlify, using the disco-github account. Meaning the main branch is automatically published to discovery-semester.ch and preview are generated PRs.
