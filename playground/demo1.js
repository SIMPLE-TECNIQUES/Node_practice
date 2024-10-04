// // const fs = require('fs');
// // // fs.writeFileSync('test1',"my firstl demo file ");
// // fs.appendFileSync("test1","apppended data")
// // require('./demo2.js');
// // var validator = require('validator');

// // const name =require('./demo2.js')
// // import chalk from 'chalk';
// // console.log(name("demo2"))

// // console.log(validator.isEmail("shankargmail.com"));
// // console.log(chalk.blue("hello this is chalk output "));

// // (async()=>{
// //     var chalk=import('chalk');
// //     console.log(chalk.blue('Hello world!'));

// // })
// import chalk from 'chalk';
// import yargs from 'yargs';
// import { hideBin } from 'yargs/helpers';

// yargs(hideBin(process.argv))
//   .version('9.3.0')
//   .argv;
// var str=chalk.green('Hello world changed !');
// console.log();

// //NODE ARGS

// // var x=process.argv[2];
// // if (x=="add"){
// //     console.log(str+"add");
// // }else{
// //     console.log(str+"remove")
// // }

// //npm yargs

// yargs.command(
//     {
//         command:'list',
//         description:'list all the list',
//         handler:function(){
//             console.log("all items are listed")
//         }
//     }
// )
// yargs.command(
//     {
//         command:'remove list ',
//         description:'remove  all the list',
//         handler:function(){
//             console.log("all items listed are removed")
//         }
//     }
// );


// const chalk = require('chalk')
// const yargs = require('yargs')
import yargs from "yargs";
// const getNotes = require('./notes.js')

// Customize yargs version
// yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

console.log(yargs.argv)