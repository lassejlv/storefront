import child_process from 'child_process';


const command = 'bunx vite build && netlify deploy --prod --dir=build'

// We Send a message "Deploying" while the command is running
console.log('Deploying...')

// Run the command
const deploy = child_process.exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  
  console.log(`Deployed: ${stdout}`);
  
});

