Blockly.Blocks['controls_wait'] = {
    init: function () {
        this.appendValueInput("DURATION")
            .setCheck("Number")
            .appendField("wait");
        this.appendDummyInput()
            .appendField("seconds");
        this.setColour(210);
        this.setTooltip("Wait for a specified duration.");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['controls_repeat_ext'] = {
    init: function () {
        this.appendValueInput("TIMES")
            .setCheck("Number")
            .appendField("repeat");
        this.appendStatementInput("DO")
            .appendField("do");
        this.setColour(210);
        this.setTooltip("Repeat a block of statements a specified number of times.");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['controls_if'] = {
    init: function () {
        this.appendValueInput("IF0")
            .setCheck("Boolean")
            .appendField("if");
        this.appendStatementInput("DO0")
            .appendField("then");
        this.appendStatementInput("ELSE")
            .appendField("else");
        this.setColour(210);
        this.setTooltip("If a condition is true, then do some statements.");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['controls_forever'] = {
    init: function () {
        this.appendStatementInput("DO")
            .appendField("forever");
        this.setColour(210);
        this.setTooltip("Repeat the contained statements forever.");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['controls_wait_until'] = {
    init: function () {
        this.appendValueInput("CONDITION")
            .setCheck("Boolean")
            .appendField("wait until");
        this.setColour(210);
        this.setTooltip("Wait until a condition is true.");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['controls_repeat_until'] = {
    init: function () {
        this.appendValueInput("UNTIL")
            .setCheck("Boolean")
            .appendField("repeat until");
        this.appendStatementInput("DO")
            .appendField("do");
        this.setColour(210);
        this.setTooltip("Repeat until a condition is true.");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['controls_stop'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("stop")
            .appendField(new Blockly.FieldDropdown([["all", "all"], ["this script", "this script"], ["other scripts in sprite", "other scripts in sprite"]]), "STOP");
        this.setColour(210);
        this.setTooltip("Stop the specified script(s).");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['event_whencloned'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("when I start as a clone");
        this.setColour(210);
        this.setTooltip("Triggered when a clone starts.");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['controls_create_clone_of'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("create clone of")
            .appendField(new Blockly.FieldDropdown([["myself", "myself"], ["sprite", "sprite"]]), "CLONE");
        this.setColour(210);
        this.setTooltip("Creates a clone of the specified sprite.");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['controls_delete_this_clone'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("delete this clone");
        this.setColour(210);
        this.setTooltip("Deletes the current clone.");
        this.setHelpUrl("");
    }
};
