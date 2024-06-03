import '@testing-library/jest-dom';

import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as unknown as typeof global.TextDecoder;

import { JSDOM } from 'jsdom';


const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="content"></div></body></html>`);
global.window = dom.window as unknown as Window & typeof globalThis;
global.document = dom.window.document;
