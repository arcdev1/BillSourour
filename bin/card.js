#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Bill Sourour /'),
  handle: chalk.cyan('@BillSourour'),
  work: chalk.white('Founder, Consultant, Teacher at Dev Mastery'),
  medium: chalk.cyan('https://medium.com/@BillSourour'),
  twitter: chalk.cyan('https://twitter.com/BillSourour'),
  github: chalk.cyan('https://github.com/arcdev1'),
  linkedin: chalk.cyan('https://linkedin.com/in/BillSourour'),
  web: chalk.cyan('https://devmastery.com'),
  npx: chalk.white('npx BillSourour'),
  labelWork: chalk.white.bold('      Work:'),
  labelMedium: chalk.white.bold('    Medium:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const mediuming = `${data.labelMedium}  ${data.medium}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  mediuming +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding

console.log(chalk.green(boxen(output, options)))
