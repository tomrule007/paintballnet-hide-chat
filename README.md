# paintballnet-hide-chat 1.0.0

Bookmarklet to toggle non-player chat visibility for paintballnet.net

---

## HOW TO USE

1. Goto [bookmarklet page](https://tomrule007.github.io/paintballnet-hide-chat/build/index.html) and copy `PBN-HideChat` link to your browser bookmarks.

2. Open [http://paintballnet.net/play](http://paintballnet.net/play)
3. With `paintballnet.net/play` tab active click the `PBN-HideChat` bookmark

---

## Development - Getting Started

### Setup

```bash
$git clone https://github.com/tomrule007/paintballnet-hide-chat.git
$cd paintballnet-hide-chat
$npm install
```

Development

```bash
$npm run start
```

that runs the script and with auto loading web-dev server. Also includes the paintballnet css classes for a better feel of actual ui interface on paintballnet and supports hot reloading for speedy development.

### Generate bookmarklet

Production build:

```bash
$npm run build
```

generates a single `build/index.html` file with bookmarklet link that can be hosted or opened directly in the browser.

---

## Version History

- 1.0.0: Basic chat visibility toggling with notification text.
