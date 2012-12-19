window.keymap.bindKeys '#root-view'
  'meta-\\': 'tree-view:toggle'
  'meta-|': 'tree-view:reveal-active-file'

window.keymap.bindKeys '.tree-view'
  'right': 'tree-view:expand-directory'
  'left': 'tree-view:collapse-directory'
  'enter': 'tree-view:open-selected-entry'
  'm': 'tree-view:move'
  'a': 'tree-view:add'
  'delete': 'tree-view:remove'
  'backspace': 'tree-view:remove'

window.keymap.bindKeys '.tree-view-dialog .mini.editor'
  'enter': 'core:confirm'
  'escape': 'core:cancel'
