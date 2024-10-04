#!/usr/bin/env node

import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import * as notes from './note_func.js'

// Customize yargs version
yargs(hideBin(process.argv))
  .version('1.1.0')
  .command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:"Note title",
            demandOption:"true",
            type:'String'
        },
        body:{
            describe:"niche ",
            demandOption:"true",
            type:"String"
        }
    },
    handler: function (argv) {
    notes.addNote(argv.title,argv.body)

    },
  })
  .command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
      title:{
        describe:"Note title",
        type:"String",
        demandOption:"true"
      },
      body:{
        describe:"body of obj",
        type:"String"
      }
    },
    handler: function (argv) {
      notes.removeNote(argv.title);
      console.log("Note removed ");
    },
  })
  .command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
      notes.listNotes();
      console.log(chalk.blue('Listing out all notes'));
    },
  })
  .command({
    command: 'read',
    describe: 'Read a note',
    builder:{
      title:{
        describe:"title",
        demandOption:"true",
        type:"String"
      }
    },
    handler: function (argv) {
      notes.readNote(argv.title);
    },
  })
  .parse(); // This parses the arguments and runs the appropriate command 
  //without parse the node command does not work 

  // Example of using process.argv directly
// const command = process.argv[2];
// if (command === 'add') {
//   console.log(chalk.green('Hello world changed! Adding...'));
// } else {
//   console.log(chalk.red('Hello world changed! Removing...'));
// }

// // Example of asynchronous import with chalk (if needed)
// (async () => {
//   const { default: chalkAsync } = await import('chalk');
//   console.log(chalkAsync.blue('Hello world! (Async import)'));
// })();
