import { Tabular } from 'meteor/aldeed:tabular';
import { Meteor, Package } from 'meteor/meteor';

const Tabular = null;

if (Package['nicolaslopezj:tabular-materialize']) {
    Tabular = Package['nicolaslopezj:tabular-materialize'].Tabular;
} else if (Package['aldeed:tabular']) {
    Tabular = Package['aldeed:tabular'].Tabular;
} else {
    throw new Meteor.Error('scorpius.accounts', 'You must install tabular to use this package');
}