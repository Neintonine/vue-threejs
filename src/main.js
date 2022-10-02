import { createApp } from 'vue'
import App from './App.vue'
import {createRenderer, createScene, startRendering} from "@/renderer/engine";
import * as SceneTemplate from "./renderer/scenes/3dTest";

let backgroundElem = document.createElement('div');
backgroundElem.id = 'canvas';
document.body.appendChild(backgroundElem);

createRenderer(backgroundElem);
createScene(SceneTemplate);
startRendering();

createApp(App).mount('#app')
