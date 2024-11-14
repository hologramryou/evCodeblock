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

// This function displays the generated code from the workspace and runs it.
const runCode = () => {
  const code = jsonGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;

};

const compileCode = () =>
{
    const code = jsonGenerator.workspaceToCode(ws);
    codeDiv.innerText = code;
    
    
      //sendData("W")

    try {
      // Execute the generated code
      eval(code);
    } catch (error) {
      console.error("Error executing code:", error);
    }
}


// Function to stop code execution
const stopCode = () => {
  codeDiv.innerText = ''; // Clear the displayed code
  alert("Code execution stopped.");
  // Add additional logic here to stop code execution if needed
};

// Attach event listener to the "Run Code" button
const runButton = document.getElementById('runButton');
const stopButton = document.getElementById('stopButton');
runButton.addEventListener('click', compileCode);
stopButton.addEventListener('click', stopCode);

// Load the initial state from storage and run the code.
load(ws);
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
  runCode();
});

async function sendData(dataToSend) {
  const serverUrl = 'http://192.168.4.1/post'; // Replace with your server's IP address
    alert("run");
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
        alert('Error on sending POST:', response.status);
    }
  } catch (error) {
      alert('Error:', error);
  }
}

