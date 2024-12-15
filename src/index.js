/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
//import {blocks} from './blocks/text';
import {blocks} from './blocks/json';
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import {jsonGenerator} from './generators/json';
import './index.css';

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, {toolbox});


//ANHLUU MODIFIED FOR CODE VAR
// Function to process generated code and ensure only the first instance of each variable is declared with 'let'
function processCodeWithLet(code) {
  let lines = code.split('\n');  // Split the code into individual lines
  let declaredVariables = {};  // Track declared variables

  // Iterate through each line of code
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    // Check if the line contains an assignment (contains '=')
    if (line.includes('=')) {
      let parts = line.split('=');  // Split at the equal sign to extract variable name
      let variableName = parts[0].trim();  // Extract the variable name (before '=')

      console.log(`Processing line: "${line}"`);
      console.log(`Extracted variable: "${variableName}"`);

      // If the variable has not been declared yet, declare it with 'let'
      if (!declaredVariables[variableName]) {
        lines[i] = `let ${variableName} = ${parts[1].trim()};`;  // Modify to use 'let' with the variable name preserved
          //eval(lines[i]);
        declaredVariables[variableName] = true;  // Mark the variable as declared
      } else {
        lines[i] = `${variableName} = ${parts[1].trim()};`;  // Modify to use '=' for subsequent assignments
      }
    }
  }

  return lines.join('\n');  // Join the modified lines back together
}


//NEW SHIT


// Inline Worker Variables
//let worker = null;
//
//// Function to compile and run code using an inline Web Worker
//const compileCode = () => {
//  const code = jsonGenerator.workspaceToCode(ws);
//  codeDiv.innerText = code;
//
//  if (worker) {
//    alert("A worker is already running. Please stop it before starting a new execution.");
//    return;
//  }
//
//  // Inline Web Worker code as a string
//  const workerCode = `
//    self.onmessage = async (event) => {
//      const { code } = event.data;
//      try {
//        // Execute the received code asynchronously
//        const result = await eval(\`(async () => { \${code} })()\`);
//        self.postMessage({ success: true, result });
//      } catch (error) {
//        self.postMessage({ success: false, error: error.message });
//      }
//    };
//  `;
//
//  // Create a Blob URL for the worker
//  const blob = new Blob([workerCode], { type: 'application/javascript' });
//  const workerURL = URL.createObjectURL(blob);
//
//  // Instantiate the worker
//  worker = new Worker(workerURL);
//
//  // Send the generated code to the worker
//  worker.postMessage({ code });
//
//  // Handle worker messages
//  worker.onmessage = (event) => {
//    if (event.data.success) {
//      alert(`Execution result: ${event.data.result}`);
//    } else {
//      alert(`Execution error: ${event.data.error}`);
//    }
//    cleanupWorker();
//  };
//
//  // Handle worker errors
//  worker.onerror = (error) => {
//    console.error("Worker error:", error);
//    alert(`Worker error: ${error.message}`);
//    cleanupWorker();
//  };
//};
//
//// Function to stop code execution
//const stopCode = () => {
//  if (worker) {
//    worker.terminate();
//    worker = null;
//    alert("Code execution stopped.");
//  } else {
//    alert("No execution is currently running.");
//  }
//};
//
//// Cleanup worker after execution
//const cleanupWorker = () => {
//  if (worker) {
//    worker.terminate();
//    worker = null;
//  }
//};
//
//// Attach event listeners to the "Run Code" and "Stop Code" buttons
//const runButton = document.getElementById('runButton');
//const stopButton = document.getElementById('stopButton');
//runButton.addEventListener('click', compileCode);
//stopButton.addEventListener('click', stopCode);
//NEWSHIT

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function example(coding) {
    eval(coding);
  //console.log("Start");
  //await delay(10000); // Waits for 2 seconds
  //console.log("End after 2 seconds");
}


// This function displays the generated code from the workspace and runs it.
const runCode = () => {
  const code = jsonGenerator.workspaceToCode(ws);
code = processCodeWithLet(code);  // Process the code to add 'let' where necessary
  codeDiv.innerText = code;

};

//const compileCode = async () =>
//{
//    const code = jsonGenerator.workspaceToCode(ws);
//    codeDiv.innerText = code;
//    
//    
//      //sendData("W")
//
//    try {
//      // Execute the generated code
//        //eval(example(code));
//        await eval(code);
//    } catch (error) {
//      console.error("Error executing code:", error);
//    }
//}

//Done but not too well
async function compileCode() {
  const code = jsonGenerator.workspaceToCode(ws);
   var codedy = processCodeWithLet(code);  // Process the code to add 'let' where necessary
  codeDiv.innerText = codedy;

  try {
    // Wrap the code in an async function before evaluating
    const result = await (async () => {
      return await eval(`
        (async () => {
          ${codedy}
        })()
      `);
    })();

    console.log("Execution result:", result);
  } catch (error) {
    console.error("Error executing code:", error);
  }
}


//func cho lệnh nói:
function speak(text) {
    if (text.trim() === "") {
        alert("Vui lòng nhập văn bản");
        return;
    }
    
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "vi-VN";  // Set language to Vietnamese
    speech.pitch = 1;        // Set pitch (default is 1)
    speech.rate = 1;         // Set rate of speech (default is 1)
    
    window.speechSynthesis.speak(speech);
}



//function blockingDelay(ms) {
//    const start = Date.now();
//    while (Date.now() - start < ms) {
//        // Busy wait
//    }
//    console.log("Blocking delay completed");
//}

// Function to stop code execution
const stopCode = () => {
  codeDiv.innerText = ''; // Clear the displayed code
    //stopExecution();
  alert("Code execution stopped.");
  // Add additional logic here to stop code execution if needed
};

//for CÁI LỒN MẸ BÀN PHÍM CỦA LỒN ĐẠT
// Initialize an empty list
let stringList = [];


let stringClicked = "";

// Function to append a string to the list
function keypress_bd(newString) {
    if (isStringInList(newString))
    {
        if (stringClicked == newString)
            {
                stringClicked = "";
                return true;
            }
        else
        {
            return false;
        }
    }
    else
    {
        stringList.push(newString);
        //alert(`Added: "${newString}"`);
        //alert(`Updated List: [${stringList.join(", ")}]`);
    }
}

// Function to remove a string from the list
function removeString(targetString) {
    const index = stringList.indexOf(targetString);
    if (index !== -1) {
        stringList.splice(index, 1);
        console.log(`Removed: "${targetString}"`);
    } else {
        console.log(`"${targetString}" not found in the list.`);
    }
    console.log(`Updated List: [${stringList.join(", ")}]`);
}

// Function to check if a string is in the list
function isStringInList(targetString) {
    return stringList.includes(targetString);
}

document.addEventListener("keydown", (event) => {
    //alert(`Key pressed: ${event.key}, Code: ${event.code}`);
    if (isStringInList(event.key))
    {
        stringClicked = event.key;
        //alert(`LONME pressed: ${event.key}, Code: ${event.code}`);
    }
    // Check for a specific key
    if (event.key === "Enter") {
        //alert("Enter key was pressed!");
    }
});

// Attach event listener to the "Run Code" button
const runButton = document.getElementById('runButton');
const stopButton = document.getElementById('stopButton');
runButton.addEventListener('click', compileCode);
stopButton.addEventListener('click', stopCode);


// Load the initial state from storage and run the code.
//load(ws);
runCode();

// Every time the workspace changes state, save the changes to storage.
ws.addChangeListener((e) => {
  if (e.isUiEvent) return;
  save(ws);
});

// Whenever the workspace changes meaningfully, run the code again.
ws.addChangeListener((e) => {
  if (
    e.isUiEvent ||
    e.type == Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()
  ) {
    return;
  }
  //runCode();
});

//update: turn of alert
async function sendData(dataToSend) {
  const serverUrl = 'http://192.168.4.1/post'; // Replace with your server's IP address
    //alert("run");
  try {
    const response = await fetch(serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: dataToSend
    });

    if (response.ok) {
      const serverResponse = await response.text();
      alert('Server response:', serverResponse);
    } else {
        //alert('Error on sending POST:', response.status);
    }
  } catch (error) {
      //alert('Error:', error);
  }
}

