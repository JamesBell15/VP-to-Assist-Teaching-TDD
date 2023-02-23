const blocks = Blockly.defineBlocksWithJsonArray([
{
  "type": "p",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_label_serializable",
      "name": "P_NAME",
      "text": "p"
    },
    {
      "type": "input_value",
      "name": "P_VALUE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230
},
{
  "type": "it",
  "message0": "it %1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "IT_VALUE",
      "text": "label test"
    },
    {
      "type": "input_statement",
      "name": "IT_STATEMENT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "path_to",
  "message0": "Path to %1",
  "args0": [
    {
      "type": "field_input",
      "name": "PATH",
      "text": "path to file"
    }
  ],
  "nextStatement": null,
  "colour": 345,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "expect",
  "message0": "expect %1 to %2",
  "args0": [
    {
      "type": "field_input",
      "name": "EXPECT_VALUE",
      "text": "result"
    },
    {
      "type": "input_statement",
      "name": "EXPECT_STATEMENT",
      "align": "CENTRE"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
}
]);

