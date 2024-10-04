#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// Define the serve function
function serve(port) {
  console.log(`Server is running on port ${port}`);
  // Add your server logic here, for example, starting an Express server
  // const express = require('express');
  // const app = express();
  // app.listen(port, () => {
  //   console.log(`Server started on port ${port}`);
  // });
}

yargs(hideBin(process.argv))
  .command(
    'serve [port]', 
    'start the server', 
    (yargs) => {
      return yargs.positional('port', {
        describe: 'port to bind on',
        default: 5000
      });
    }, 
    (argv) => {
      if (argv.verbose) console.info(`start server on :${argv.port}`);
      serve(argv.port);
    }
  )
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
  .parse();
