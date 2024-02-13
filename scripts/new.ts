import inquirer from 'inquirer';
import fs from 'fs';

type Questions = {
  type: "input";
  name: string;
  message: string;
}

const questions: Questions[] = [
    {
        type: 'input',
        name: 'componentName',
        message: 'Enter the name of the component'
    }
]

inquirer.prompt(questions).then(answers => {
   if (answers.componentName === '') return console.error('Component name cannot be empty');
   if (answers.componentName.includes(' ')) return console.error('Component name cannot contain spaces');

   const setFirstLetterUpperCase = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

    const path = process.cwd() + '/src/components/' + setFirstLetterUpperCase(answers.componentName);
    fs.mkdirSync(path);

  

    const reactComponent = `import React from "react";
    import "./style.css"
    
    export default function ${setFirstLetterUpperCase(answers.componentName)}() {
      return (
        <></>
      );
    }
    `
    fs.writeFileSync(path + '/index.jsx', reactComponent)
    fs.writeFileSync(path + '/style.css', '')

    console.log('Component created successfully');
});
