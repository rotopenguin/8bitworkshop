"use strict";

import { PLATFORMS } from "../emu";
import { Platform } from "../baseplatform";

class MarkdownPlatform implements Platform {
  mainElement;
  htmlDiv;

  constructor(mainElement:HTMLElement) {
    this.mainElement = mainElement;
    this.htmlDiv = $('<div class="markdown">').appendTo(mainElement);
    $(mainElement).css('overflowY', 'auto');
  }
  start() {
  }
  reset() {
  }
  pause() {
  }
  resume() {
  }
  loadROM(title, data) {
    this.htmlDiv.html(data);
  }
  isRunning() {
    return false;
  }
  getToolForFilename(fn : string) : string {
    return "markdown";
  }
  getDefaultExtension() : string {
    return ".md";
  }
  getPresets() {
    return [
      {id:'hello.md', name:'Hello'},
    ];
  }

}

PLATFORMS['markdown'] = MarkdownPlatform;
