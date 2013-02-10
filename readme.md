# Monobar: A Chrome extension for text boxen.

Enhance `<textarea>` elements with a status bar that displays current line, current column (position in the current line) and total character count. Add monospaced font toggle for anything editable (Gmail compose windows, Github issues/comments, etc.).

Inspired by [Linus Torvald's Github rant][3].

## Install

### From source

1. Clone the repo: `$ git clone git://github.com/ellotheth/chromext-monobar.git`
2. Visit the extension management page in Chrome: _Menu_ --> _Tools_ --> _Extensions_
3. Turn on _Developer Mode_
4. Click _Load unpacked extension..._ and browse to the repo clone.

### From a package

1. Download the [latest version][1].
2. Visit the extension management page in Chrome: _Menu_ --> _Tools_ --> _Extensions_
3. Drag-and-drop the file onto the _Extensions_ page. (No, seriously, that's how it works.)

## Changes

### 0.3

- Add a context menu toggle for monospaced fonts in text boxes. From any editable area, right-click and select _Toggle monospace font_.
- Make bar design prettier. A little.

### 0.2

- Fix the bar positioning on pages with > 1 boxen.

### 0.1

- Initial release

## Known issues

- Special-snowflake text boxes (e.g. Google, Facebook, Ideone) [don't work][2].

[2]: https://github.com/ellotheth/chromext-monobar/issues/1
[1]: http://ramblinations.com/projects/monobar/monobar-0.3.crx
[3]: https://github.com/torvalds/linux/pull/17#issuecomment-5659933