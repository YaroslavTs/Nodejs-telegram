const Telegraf = require('telegraf');
const bot = new Telegraf('819296165:AAFJ3zJfcHFnTNrWUr74ApOehzByAan0yQU')
var process = require('child_process');


bot.command('dir',(ctx)=>{
    process.exec('dir',function (err,stdout,stderr) {
        if (err) {
            console.log("\n"+stderr);
            return ctx.reply("\n"+stderr);
        } else {
            console.log(stdout);
            return ctx.reply(stdout);
        }
    })


})
bot.command('ipconfig',(ctx)=>{
    process.exec('ipconfig',function (err,stdout,stderr) {
        if (err) {
            console.log("\n"+stderr);
            return ctx.reply("\n"+stderr);
        } else {
            console.log(stdout);
            return ctx.reply(stdout);
        }
    })


})

bot.command('cd',(ctx)=>{
    process.exec('ipconfig',function (err,stdout,stderr) {
        if (err) {
            console.log("\n"+stderr);
            return ctx.reply("\n"+stderr);
        } else {
            console.log(stdout);
            return ctx.reply(stdout);
        }
    })


})

bot.command('mkdir',(ctx)=>{
    process.exec('ipconfig',function (err,stdout,stderr) {
        if (err) {
            console.log("\n"+stderr);
            return ctx.reply("\n"+stderr);
        } else {
            console.log(stdout);
            return ctx.reply(stdout);
        }
    })


})
bot.launch();