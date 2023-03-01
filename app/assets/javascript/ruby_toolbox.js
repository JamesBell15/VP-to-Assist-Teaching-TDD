/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */


 (function() {
  function handlePlay(event) {
    loadWorkspace(event.target);

    let code = rubyGenerator.workspaceToCode(workspace);

    try {
      document.getElementById("block").value = code;
      showBanner();

    } catch (error) {
      console.log(error);
    }
  }

  function save(button) {
    // button.blocklySave = Blockly.serialization.workspaces.save(Blockly.common.getMainWorkspace());
  }

  function loadWorkspace(button) {
    const workspace = Blockly.common.getMainWorkspace();
    if (button.blocklySave) {
      Blockly.serialization.workspaces.load(button.blocklySave, workspace);
    }
  }

  function handleSave() {
    document.body.setAttribute('mode', 'edit');
    save(currentButton);
  }

  function enableEditMode() {
    document.body.setAttribute('mode', 'edit');
    let buttons = document.getElementsByTagName("button");
    Array.from(buttons).map(btn => {
      btn.removeEventListener('click', handlePlay);
      btn.addEventListener('click', enableBlocklyMode);
    });
  }

  function enableMakerMode() {
    document.body.setAttribute('mode', 'maker');
    let buttons = document.getElementsByTagName("button");
    Array.from(buttons).map(btn => {
      btn.addEventListener('click', handlePlay);
      btn.removeEventListener('click', enableBlocklyMode);
    });
  }

  function enableBlocklyMode(e) {
    document.body.setAttribute('mode', 'blockly');
    currentButton = e.target;
    loadWorkspace(currentButton);
  }

  let currentButton;

  console.log(currentButton);


  document.querySelector('#edit').addEventListener('click', enableEditMode);
  document.querySelector('#done').addEventListener('click', enableMakerMode);
  document.querySelector('#save').addEventListener('click', handleSave);

  enableMakerMode();

  const toolbox = {
    "kind": "flyoutToolbox",
    "contents": [
      {
        "kind": "block",
        "type": "controls_if"
      },
      {
        "kind": "block",
        "type": "controls_repeat_ext"
      },
      {
        "kind": "block",
        "type": "logic_compare"
      },
      {
        "kind": "block",
        "type": "logic_boolean"
      },
      {
        "kind": "block",
        "type": "math_number"
      },
      {
        "kind": "block",
        "type": "math_arithmetic"
      },
      {
        "kind": "block",
        "type": "text"
      },
      {
        "kind": "block",
        "type": "logic_null"
      },
      {
        "kind": "block",
        "type": "p"
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
        "type": "it"
      },
      {
        "kind": "block",
        "type": "expect"
      },
      {
        "kind": "block",
        "type": "eq"
      },
      {
        "kind": "block",
        "type": "path_to"
      }
    ]
  }

  var workspace = Blockly.inject('blocklyDiv',
    {
      toolbox: toolbox,
      theme: {
        "workspaceBackgroundColour": '#800869',
        "toolboxBackgroundColour": '#698008'
      },
      move: {
        scrollbars: {
          horizontal: true,
          vertical: true
        },
        drag: true,
        wheel: false
      }
    }
  );

})();
