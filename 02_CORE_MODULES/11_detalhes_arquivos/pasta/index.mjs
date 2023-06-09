import fs from 'fs'

fs.stat('../pasta', (err, stats) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
    console.log(stats.atime)
    console.log(stats.ctime)
    console.log(stats.birthtime)
    console.log(stats.size)
})