'use strict';

import { _ } from 'meteor/underscore';
import { CoreConfig } from './lib/CoreConfig';

/**
 * ScorpiusConfig class controls the configuration of the Scorpius Framework.
 * Utilize this by instantiating a new Scorpius Config item and passing default params.
 */
export class ScorpiusConfig {
    constructor(options: Object) {
        return _.extend(CoreConfig, options);
    };
}
