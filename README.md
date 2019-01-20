# RPL syntax highlighting #
Syntax definitions of RPL for various highlighters.

This repo shouldn't contain full plugins for editors - those should be separate repos. This is just meant to be for the highlighter files themselves.

Keeping this centralized means that if something is changed about the syntax (new keywords or something) then all syntax files can be updated in the same PR, easily, and there shouldn't be any differences in understanding between the editors.

Some editors may support more precise syntax than others, particularly regarding literals.

For a syntax reference, see [here](http://imperial.logicplace.com/Specification/RPL_Syntax)

The versioning for these files is of the form `Major.Minor.Highlighter` where `Major.Minor` is the semantic version of the syntax specification and `.Highlighter` is the edition of the highlighter definition relative to that version. That is, if the syntax upgrades from `1.3` to `1.4` and a highlighter was at `1.3.1` it upgrades to `1.4.0` because it's the first rendition of `1.4`. A `-d` on the end means it's in development and not fit for general use.

## test.rpl ##
This is a test file meant to cover all good and bad syntax forms of note. Depending on the highlighter, some tests may not work but nothing can be done about it (at this level).

Any bad cases are marked with a comment `# bad`

## Planned definitions ##

* Textmate
* Sublime 3
* gedit
* Highlight.JS
* Notepad++
