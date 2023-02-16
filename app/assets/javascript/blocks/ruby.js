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
  "type": "describe",
  "message0": "Describe %1",
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
}
]);

