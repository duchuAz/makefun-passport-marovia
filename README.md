# Marovia — an invented passport spread

A 1024×1024 image of an open passport spread from the Republic of Marovia, a salt-mining country that does not exist. The left data page carries the portrait, coat of arms, fields and MRZ of Elena Victoria Munteanu; the right visa page carries a Romanian Schengen visa, six border stamps, a 2026 salt-mine research permit and a fee stamp. `passport.html` is the self-contained design source, rendered once with headless Chrome into the committed `entry.png`; `main.ts` copies that artifact to `/output/entry.png`.

## Run

```sh
node --experimental-strip-types main.ts
```

The image is written to `/output/entry.png` (or `$OUTPUT_DIR/entry.png`).

[![make.fun](https://img.shields.io/badge/make.fun-elite%20team-2f6f6a)](https://make.fun)
