# (work)shop doc(ument)s

A couple times a year, I teach a workshop on electronics and DIY synthesizers. This repo is the source to the documents I write to share with my class.

It's mostly auxiliary stuff that got cut for time and not really the core material, but it's still useful/cool enough to warrant sharing!

## Generating PDFs

Document files are written in markdown, made into a website with eleventy, and then converted to PDF with Chrome via puppeteer.

``` bash
npm install

# Terminal 1
npx @11ty/eleventy --serve

# Terminal 2
node make_pdfs.js
```

Works For Me!

## License

Text content is CC BY-SA 4.0. Code is MIT.