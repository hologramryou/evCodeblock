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
{
    "type": "move",
    "message0": "%1 %2 %3",
    "args0": [
      {
        "type": "field_label",
        "name": "MEMBER_NAME",
        "text": "Di chuyển"
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
                                                                              "type": "up",
                                                                              "message0": "%1 %2 %3",
                                                                              "args0": [
                                                                                {
                                                                                  "type": "field_label",
                                                                                  "name": "MEMBER_NAME",
                                                                                  "text": "Tiến Lên"
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
                                                                          }
                                                                          
]);
