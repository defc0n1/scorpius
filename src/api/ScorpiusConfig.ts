'use strict';

import { _ } from 'meteor/underscore';
import { ReactiveDict } from 'meteor/reactive-dict';

/**
 * ScorpiusConfig class controls the configuration of the Scorpius Framework.
 * Utilize this by instantiating a new Scorpius Config item and passing default params.
 * @type class
 */

const CoreConfig: Object = {
    name: 'foo'
}

export const ScorpiusConfig = (options: Object) => {
    let processedConfig = new ReactiveDict(_.extend(CoreConfig, options));
    return processedConfig.get();
}