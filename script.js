const fs = require('fs');
const { exec } = require('child_process');

function runTscAndDeleteTsFiles(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach((file) => {
            const filePath = `${directory}/${file}`;
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error('Error getting file stats:', err);
                    return;
                }

                if (stats.isDirectory()) {
                    // Recursively call the function for subdirectories
                    runTscAndDeleteTsFiles(filePath);
                } else if (file.endsWith('.ts')) {
                    // Run tsc for TypeScript files
                    const tscCommand = `tsc ${filePath}`;
                    exec(tscCommand, (err, stdout, stderr) => {
                        if (err) {
                            console.error(`Error running ${tscCommand}:`, err);
                        } else {
                            console.log(stdout);

                            // Delete the TypeScript file after running tsc
                            fs.unlink(filePath, (err) => {
                                if (err) {
                                    console.error(`Error deleting ${filePath}:`, err);
                                } else {
                                    console.log(`${filePath} deleted.`);
                                }
                            });
                        }
                    });
                }
            });
        });
    });
}

// Example: Run tsc and delete .ts files in the current directory and its subdirectories
runTscAndDeleteTsFiles(__dirname);
