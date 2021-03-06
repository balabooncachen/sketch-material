import Utils from "../utils";
var Settings = require("sketch/settings");

export default {
  updateLayerMetadata(data) {
    var selection = Utils.selection();

    log(data);

    if (selection.count() <= 0) {
      Utils.message("Select a layer first");
    } else {
      var selecitonLoop = selection.objectEnumerator(),
        sel;

      while ((sel = selecitonLoop.nextObject())) {
        var keys = "";
        for (let i = 0; i < data.length; i++) {
          Settings.setLayerSettingForKey(sel, data[i].key, data[i].value);
          keys = keys + data[i].key + "|";
        }
        Settings.setLayerSettingForKey(sel, "keys", keys);
      }

      // Utils.doc().reloadInspector();
    }
  }
};
