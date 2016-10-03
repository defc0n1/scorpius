"use strict";
var aldeed_tabular_1 = require('meteor/aldeed:tabular');
var meteor_1 = require('meteor/meteor');
var Tabular = null;
if (meteor_1.Package['nicolaslopezj:tabular-materialize']) {
    aldeed_tabular_1.Tabular = meteor_1.Package['nicolaslopezj:tabular-materialize'].Tabular;
}
else if (meteor_1.Package['aldeed:tabular']) {
    aldeed_tabular_1.Tabular = meteor_1.Package['aldeed:tabular'].Tabular;
}
else {
    throw new meteor_1.Meteor.Error('scorpius.accounts', 'You must install tabular to use this package');
}
