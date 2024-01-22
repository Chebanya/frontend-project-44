#!/usr/bin/env node
import { rule, parityCheck } from '../games/even.js';
import fishGames from '../src/index.js';

fishGames(rule, parityCheck);
