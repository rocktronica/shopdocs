"use strict";

const util = require("util");
const exec = util.promisify(require("child_process").exec);
const puppeteer = require("puppeteer");
const { basename } = require("node:path");

const naiveExec = async (command) => (await exec(command)).stdout.trim();

const rootUrl = "http://localhost:8080/docs/";
const dir = "output";

const confirmUrl = async () => {
  try {
    await exec(`wget -q --spider "${rootUrl}"`);
  } catch (error) {
    console.log(`${url} is not available`);
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

const run = async () => {
  const { globby } = await import("globby");

  await confirmUrl();

  await naiveExec(`mkdir -pv "${dir}"`);
  console.log(`Output directory: ${dir}`);
  console.log();

  const slugs = [...(await globby("docs/*.md"))]
    .map((path) => basename(path, ".md"))
    .filter((slug) => slug !== "index");

  slugs.forEach((slug) => exportPdf(slug));

  console.log();
};

run();
