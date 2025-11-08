const fs = require('fs')

// fs.readFile('./hello.txt', 'utf-8', function (err, content) {
//     if (err) {
//         console.log("error in file reading", err);
//     } else {
//         console.log("File Reading Success", content);
//         fs.writeFile('./backup.txt', content, function (err) {
//             if (err) {
//                 console.log("error while writing backup file", err);
//             } else {
//                 fs.unlink('./hello.txt', function (e) {
//                     if (e) {
//                         console.log("Error while deleting file", e);
//                     }
//                     else {
//                         console.log("File deleted successfully");
//                     }
//                 })
//             }
//         })
//     }
// })


//* this is called callback hell means --> cb ke andar cb ke andar cb .......
//! problem is readability not performance

// solutionn
const fsV2 = require("node:fs/promises");
//? what if - this fs/promises doesnt exists and we have to do promisification of CB supported code like above
//? so let's make our own promisified functions

//* ------------- Custom Promises Section Starts Here -------------*/

function readFileWithPromise(filepath, encoding) {
    return new Promise((resolve, reject) => {
        // console.log("resolve : " + resolve + "reject : " + reject);
        fs.readFile(filepath, encoding, (err, content) => {
            if (err) {
                reject(err)
            } else {
                resolve(content)
            }
        })
    })
}

function writeFileWithPromise(filepath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, content, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

function unlinkWithPromise(filepath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filepath, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

//? This is also called Promicification --> converting a legacy callback code to promises
//* ------------- Custom Promises Ends Starts Here -------------*/

// fsV2
//     .readFile('./hello.txt', "utf-8")
//     .then((content) => fsV2.writeFile('./backup.txt', content))
//     .then(() => fsV2.unlink('./hello.txt'))
//     .catch((err) => console.log("error", e))

//? applying our custom promisified fs functions

// console.log("Program Started");

// multiple async code is running in sync manner
// readFileWithPromise("./hello.txt", "utf-8")
//     .then((content) => writeFileWithPromise("./backup.txt", content))
//     .then(() => unlinkWithPromise("./hello.txt"))
//     .catch((err) => console.log("Error", err))
//     .finally(() => console.log("DONE................."))

// console.log("Program Ended ");

function wait(sec) {
    return new Promise((resolve, reject) => {
        console.log("waiting");
        setTimeout(() => resolve(), sec * 1000)
    })
}

async function doTasks() {
    try {
        const fileContent = await readFileWithPromise('./hello.txt', 'utf-8')
        await writeFileWithPromise('./backup.txt', fileContent)
        await wait(10)
        await unlinkWithPromise('./hello.txt')
    } catch (error) {
        console.log(error);
    } finally {
        console.log("DOne jiiiiii")
    }
}
//* it executes the read file operation and resolves and return the value (which it passes to then function) in by stopping the code further code execution

console.log("Program Started");
doTasks().then(() => console.log("DOne jiiiiii"))
console.log("Program Ended ");


//* here both these codes are non blocking