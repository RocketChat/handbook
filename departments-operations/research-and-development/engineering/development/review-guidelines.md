# Review Guidelines

## Review \(PR related items\)

* Milestone and Project are correct
* Related issues to be closed have the correct Milestone and Project
* Related issues to be closed are written correct \(one per line\)
* The title is correct and will be understood when read in the changelog
* Documentation is present, at the docs repository or in issue description \(when applicable\)
* The description is good and could be used in a blogpost \(when applicable\)
* There are images showing the changes from before and after, in English and in good resolution \(when there are UI changes\)

## Review \(Code related items\)

* There are no irrelevant changes, they could make the review complex
* The data structure was change and there are migrations to convert the current data \(CTO should be notified about structure changes\)
* There are no performance issues, especially in migrations \(when applicable, contact the performance team if you aren’t sure\)
* There are no strings missing translations
* There are no translated strings without translation in `en.i18n.json`

## Server Review

* The `package-lock.json` was not changed without changes in `package.json`
* The `package.json` has no irrelevant changes

