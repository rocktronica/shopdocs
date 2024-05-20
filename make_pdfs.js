"use strict";

const util = require("util");
const exec = util.promisify(require("child_process").exec);
const puppeteer = require("puppeteer");
const { basename } = require("node:path");

const naiveExec = async (command) => (await exec(command)).stdout.trim();

const rootUrl = "http://localhost:8080/docs/";
const dir = "output";
const siteDownloadsDir = "_site/static/downloads";

const confirmUrl = async () => {
  try {
    await exec(`wget -q --spider "${rootUrl}"`);
  } catch (error) {
    console.log(`${rootUrl} is not available`);
    console.log(`Try 'npx @11ty/eleventy --serve'`);
    process.exit();
  }
};

const getPageAndBrowser = async (url) => {
  const browser = await puppeteer.launch({ headless: "new" });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });
  await page.waitForTimeout(2000); // Arbitrary! Wish this were smarter but who cares

  return { page, browser };
};

const exportPdf = async (slug) => {
  const url = `${rootUrl}/${slug}`;
  const outputPath = `${dir}/${slug}.pdf`;

  console.log(`Exporting ${outputPath}`);

  const { page, browser } = await getPageAndBrowser(url);

  await page.pdf({
    preferCSSPageSize: true,
    printBackground: true,
    path: outputPath,
  });

  await browser.close();
};

const getSlugs = async () => {
  const { globby } = await import("globby");

  return [...(await globby("docs/*.md"))]
    .map((path) => basename(path, ".md"))
    .filter((slug) => slug !== "index");
};

const run = async (slugQuery) => {
  await confirmUrl();

  await naiveExec(`mkdir -pv "${dir}"`);
  console.log(`Output directory: ${dir}`);
  console.log();

  const slugs = (await getSlugs()).filter(
    (slug) => !slugQuery || slug == slugQuery
  );

  if (slugs.length == 0) {
    console.log(`Nothing found for "${slugQuery}"`);
  }

  slugs.forEach((slug) => exportPdf(slug));

  console.log();

  await naiveExec(`mkdir -pv "${siteDownloadsDir}"`);
  console.log(`Copying to ${siteDownloadsDir}`);
  await naiveExec(`cp -a  ${dir}/. ${siteDownloadsDir}/`);
  console.log();
};

run(process.argv[2]);
