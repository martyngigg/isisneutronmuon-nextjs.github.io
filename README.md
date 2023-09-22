# isisneutronmuon.github.io

The source for the ISIS Neutron and Muon GitHub pages site.
The live version can be viewed at <https://martyngigg.github.io/isisneutronmuon-nextjs.github.io>.

It is a [Next.js](https://nextjs.org/) project using:

- [Tailwind CSS](https://tailwindcss.com/) and
  [tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) for styling.
- [MDX](https://mdxjs.com/) and [remark](https://remark.js.org/) to support Markdown content.

The [development version](#running-the-development-version) uses a local node
server to render the content.

The [production version](#building-the-production-version) is compiled to a
static set of pages using Next.js's support for
[static exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports).
The result requires only a standard webserver to server the content.

## Set Up

### I don't have Node.js installed

Will you be working on other Node.js projects?

- If yes, install [node version manager](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm) and use this to install `node` + `npm`
- If no, install `node` + `npm` using a [provided installer](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm)

Once installed confirm you can run `npm` by printing the help:

```bash
npm -h
```

### I already have Node.js installed

You're ready to go!

## Install the dependencies

Clone this repository locally and change to the directory of the new clone.
Install the dependencies specified in the `package.json` with:

```bash
npm install
```

## Running the development version

While developing you should run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Once saved, any changes will be instantly reflected in the version presented
in the browser allowing a fast-feedback loop during developing.

## Building the production version

The production version is served as a set of static pages that do not require
a running Node.js server. Build the pages with:

```bash
npm run build
```

The results appear in a `dist` subdirectory of the main project.
These pages can be served with any standard webserver such as `Nginx` or
`Apache`. Locally they can be checked using Node's own basic webserver:

```bash
serve ./dist
```
