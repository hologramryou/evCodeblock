// Định nghĩa các khối sự kiện
Blockly.Blocks['event_whenflagclicked'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("when flag clicked");
        this.setNextStatement(true);
        this.setColour(120);
    }
};

Blockly.Blocks['event_whenkeypressed'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("when")
            .appendField(new Blockly.FieldDropdown([["space", "SPACE"], ["up arrow", "UP"], ["down arrow", "DOWN"], ["left arrow", "LEFT"], ["right arrow", "RIGHT"]]), "KEY")
            .appendField("key pressed");
        this.setNextStatement(true);
        this.setColour(120);
    }
};

Blockly.Blocks['event_whenthisspriteclicked'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("when this sprite clicked");
        this.setNextStatement(true);
        this.setColour(120);
    }
};

Blockly.Blocks['event_whenbackdropswitchesto'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("when backdrop switches to")
            .appendField(new Blockly.FieldTextInput("backdrop1"), "BACKDROP");
        this.setNextStatement(true);
        this.setColour(120);
    }
};

Blockly.Blocks['event_whenloudnessgreaterthan'] = {
    init: function () {
        this.appendValueInput("LOUDNESS")
            .setCheck("Number")
            .appendField("when loudness >");
        this.setNextStatement(true);
        this.setColour(120);
    }
};

Blockly.Blocks['event_whenireceivemessage'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("when I receive")
            .appendField(new Blockly.FieldTextInput("message1"), "MESSAGE");
        this.setNextStatement(true);
        this.setColour(120);
    }
};

Blockly.Blocks['event_broadcast'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("broadcast")
            .appendField(new Blockly.FieldTextInput("message1"), "MESSAGE");
        this.setNextStatement(true);
        this.setColour(120);
    }
};

Blockly.Blocks['event_broadcastandwait'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("broadcast")
            .appendField(new Blockly.FieldTextInput("message1"), "MESSAGE")
            .appendField("and wait");
        this.setNextStatement(true);
        this.setColour(120);
    }
};
