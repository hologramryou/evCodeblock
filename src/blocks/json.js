import * as Blockly from 'blockly';


export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{
  "type": "object",
  "message0": "{ %1 %2 }",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "MEMBERS"
    }
  ],
  "output": null,
  "colour": 230,
},
{
  "type": "member",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "MEMBER_NAME",
      "text": ""
    },
    {
      "type": "field_label",
      "name": "COLON",
      "text": ":"
    },
    {
      "type": "input_value",
      "name": "MEMBER_VALUE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
},
{
  "type": "print",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_label",
      "name": "MEMBER_NAME",
      "text": "print"
    },
    {
      "type": "field_label",
      "name": "COLON",
      "text": ":"
    },
    {
      "type": "input_value",
      "name": "MEMBER_VALUE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
},
//Di chuyển
{
  "type": "move_backward",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_label",
      "name": "MEMBER_NAME",
      "text": "Đi lùi"
    },
    {
      "type": "field_label",
      "name": "COLON",
      "text": ":"
    },
    {
      "type": "input_value",
      "name": "MEMBER_VALUE",
      "check": "StepNumber"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
},
{
  "type": "move_forward",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_label",
      "name": "MEMBER_NAME",
      "text": "Tiến lên"
    },
    {
      "type": "field_label",
      "name": "COLON",
      "text": ":"
    },
    {
      "type": "input_value",
      "name": "MEMBER_VALUE",
      "check": "StepNumber"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
},
{
  "type": "turn_left",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_label",
      "name": "MEMBER_NAME",
      "text": "Quay trái"
    },
    {
      "type": "field_label",
      "name": "COLON",
      "text": ":"
    },
    {
      "type": "input_value",
      "name": "MEMBER_VALUE",
      "check": "StepNumber"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
},
{
  "type": "turn_right",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_label",
      "name": "MEMBER_NAME",
      "text": "Quay phải"
    },
    {
      "type": "field_label",
      "name": "COLON",
      "text": ":"
    },
    {
      "type": "input_value",
      "name": "MEMBER_VALUE",
      "check": "StepNumber"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
},
{
  "type": "move_backward_infi",
  "message0": "%1 ",
  "args0": [
    {
      "type": "field_label",
      "name": "MEMBER_NAME",
      "text": "Đi lùi"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
},
{
  "type": "move_forward_infi",
  "message0": "%1 ",
  "args0": [
    {
      "type": "field_label",
      "name": "MEMBER_NAME",
      "text": "Tiến lên"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
},
{
  "type": "turn_left_infi",
  "message0": "%1 ",
  "args0": [
    {
      "type": "field_label",
      "name": "MEMBER_NAME",
      "text": "Quay trái"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
},
{
  "type": "turn_right_infi",
  "message0": "%1 ",
  "args0": [
    {
      "type": "field_label",
      "name": "MEMBER_NAME",
      "text": "Quay phải"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
},
//Linh kiện 
{
  "type": "turn_up",
  "message0": "%1",
  "args0": [
    {
      "type": "field_label",
      "name": "MEMBER_NAME",
      "text": "Quay lên 90 độ"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 128,
},
{
  "type": "turn_down",
  "message0": "%1",
  "args0": [
    {
      "type": "field_label",
      "name": "MEMBER_NAME",
      "text": "Quay xuống 90 độ"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
},
{
  "type": "rotate",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_label",
      "name": "MEMBER_NAME",
      "text": "Quay "
    },
    {
      "type": "field_label",
      "name": "COLON",
      "text": ":"
    },
    {
      "type": "input_value",
      "name": "MEMBER_VALUE",
      "check": "DegreeNumber"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
},
//Giá trị
{
  "type": "step",
  "message0": "%1 bước",
  "args0": [
    {
      "type": "field_number",
      "name": "NUM",
      "value": "1",
      "min": "1",
      "precision":"1"
    },
  ],
  "output": "StepNumber",
  "colour": 120,
  "tooltip": "Số bước ",
},
{
  "type": "degree",
  "message0": "%1 độ",
  "args0": [
    {
      "type": "field_number",
      "name": "NUM",
      "value": "10",
      "min": "10",
      "max": "180",
      "precision":"1"
    },
  ],
  "output": "DegreeNumber",
  "colour": 120,
  "tooltip": "Góc quay ",
}
]);
