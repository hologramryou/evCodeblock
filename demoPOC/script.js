// Initialize Blockly workspace
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: `
    <xml id="toolbox" style="display: none">
        <category name="Logic" colour="#5C81A6">
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
        </category>
        <category name="Loops" colour="#5CA65C">
            <block type="controls_repeat_ext"></block>
            <block type="controls_whileUntil"></block>
        </category>
        <category name="Math" colour="#5C68A6">
            <block type="math_number"></block>
            <block type="math_arithmetic"></block>
        </category>
        <category name="Functions" colour="#9A5CA6" custom="PROCEDURE"></category>
        <category name="Text" colour="#5CA68D">
            <block type="text"></block>
            <block type="text_print"></block>
        </category>
        <category name="Custom Blocks" colour="#5CA699">
            <!-- Custom blocks will be added here dynamically -->
        </category>
    </xml>
    `,
    scrollbars: true,
    trashcan: true
});

// Predefined Blocks
Blockly.Blocks['text_print'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .setCheck(null)
            .appendField("print");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
    }
};

Blockly.JavaScript['text_print'] = function (block) {
    var value = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    return 'alert(' + value + ');\n';
};

// Change the label for the 'if' block
Blockly.Blocks['controls_if'].init = function () {
    this.appendValueInput("IF0")
        .setCheck("Boolean")
        .appendField("nếu"); // Change here to "nếu"
    this.appendStatementInput("DO0")
        .appendField("thì"); // Optional: Change "then" to "thì"

    // Add settings icon (gear icon)
    this.appendDummyInput("SETTINGS")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material-outlined/24/000000/settings.png", 15, 15, "*"))
        .setAlign(Blockly.ALIGN_RIGHT);
    
    this.setColour(210);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("If condition.");
    this.setHelpUrl("");
};

// Generate JavaScript code from blocks
function generateCode() {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('generatedCode').textContent = code;
}

// Compile and Run the generated code
function compileCode() {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    try {
        // Use eval to execute the code
        eval(code);
    } catch (error) {
        console.error('Error executing code:', error);
        alert('Error executing code: ' + error.message);
    }
}

// Add Custom Block
function addCustomBlock() {
    Blockly.Blocks['custom_print'] = {
        init: function () {
            this.appendValueInput("MESSAGE")
                .setCheck("String")
                .appendField("Custom Print");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
        }
    };

    Blockly.JavaScript['custom_print'] = function (block) {
        var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_ATOMIC);
        return 'console.log(' + message + ');\n';
    };

    // Update toolbox with new custom block
    const newToolbox = `
    <xml>
        <category name="Logic" colour="#5C81A6">
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
        </category>
        <category name="Loops" colour="#5CA65C">
            <block type="controls_repeat_ext"></block>
            <block type="controls_whileUntil"></block>
        </category>
        <category name="Math" colour="#5C68A6">
            <block type="math_number"></block>
            <block type="math_arithmetic"></block>
        </category>
        <category name="Functions" colour="#9A5CA6" custom="PROCEDURE"></category>
        <category name="Text" colour="#5CA68D">
            <block type="text"></block>
            <block type="text_print"></block>
        </category>
        <category name="Custom Blocks" colour="#5CA699">
            <block type="custom_print"></block>
        </category>
    </xml>`;
    
    workspace.updateToolbox(newToolbox);
}

// Add Custom Category
function addCustomCategory() {
    const newToolboxWithCategory = `
    <xml>
        <category name="Logic" colour="#5C81A6">
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
        </category>
        <category name="Loops" colour="#5CA65C">
            <block type="controls_repeat_ext"></block>
            <block type="controls_whileUntil"></block>
        </category>
        <category name="Math" colour="#5C68A6">
            <block type="math_number"></block>
            <block type="math_arithmetic"></block>
        </category>
        <category name="Functions" colour="#9A5CA6" custom="PROCEDURE"></category>
        <category name="Text" colour="#5CA68D">
            <block type="text"></block>
            <block type="text_print"></block>
        </category>
        <category name="Custom Blocks" colour="#5CA699">
            <block type="custom_print"></block>
        </category>
        <category name="My Custom Category" colour="#FFA500">
            <block type="math_number"></block>
        </category>
    </xml>`;

    workspace.updateToolbox(newToolboxWithCategory);
}
