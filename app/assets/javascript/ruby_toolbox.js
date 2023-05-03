/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */



function handlePlay(event) {
  let code = rubyGenerator.workspaceToCode(workspace)

  try {
    document.getElementById("block").value = code
    showBanner()

  } catch (error) {
    console.log(error)
  }
}


let currentButton

document.querySelector('#done').addEventListener('click', handlePlay)

const toolbox = {
  "kind": "categoryToolbox",
  "contents": [
    {
      "kind": "category",
      "name": "Testing",
      "contents": [
        {
          "kind": "block",
          "type": "path_to"
        },
        {
          "kind": "block",
          "type": "describe"
        },
        {
          "kind": "block",
          "type": "context"
        },
        {
          "kind": "block",
          "type": "let"
        },
        {
          "kind": "block",
          "type": "statement_block"
        },
        {
          "kind": "block",
          "type": "it"
        },
        {
          "kind": "block",
          "type": "expect"
        },
        {
          "kind": "block",
          "type": "eq"
        }
      ]
    },
    {
      "kind": "category",
      "name": "Misc",
      "contents": [
        {
          "kind": "block",
          "type": "p"
        },
        {
          "kind": "block",
          "type": "text"
        },
        {
          "kind": "block",
          "type": "logic_null"
        }
      ]
    }
  ]
}

let workspace = Blockly.inject('blocklyDiv',
  {
    toolbox: toolbox,
    theme: {
      "workspaceBackgroundColour": '#800869',
      "toolboxBackgroundColour": '#698008'
    },
    renderer: 'thrasos',
    move: {
      scrollbars: {
        horizontal: true,
        vertical: true
      },
      drag: true,
      wheel: false
    }
  }
)

const updateCode = (event) => {
  if (event.type == Blockly.Events.BLOCK_CHANGE ||
      event.type == Blockly.Events.BLOCK_CREATE ||
      event.type == Blockly.Events.BLOCK_DELETE ||
      event.type == Blockly.Events.BLOCK_MOVE) {
    const code = rubyGenerator.workspaceToCode(workspace)

    document.getElementById('textarea').innerHTML = code.replace('__', '')
  }

}

// to keep toolbox open after block selection
workspace.toolbox_.flyout_.autoClose = false
workspace.addChangeListener(updateCode)


