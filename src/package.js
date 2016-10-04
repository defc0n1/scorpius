Package.describe({
    name: 'scorpiusjs:scorpius',
    summary: 'Scorpius the admin solution for Meteor projects.',
    version: "0.4.0",
    git: 'https://github.com/scorpiusjs/scorpius'
});

// npm dependencies
Npm.depends({
    
});

// atmosphere dependences
Package.onUse(function(api) {
    api.versionsFrom('1.4.1');
    
    api.use([
        'barbatus:typescript@0.4.0',
        'blaze-html-templates@1.0.1',
        'ecmascript@0.1.6'
    ]);
    
    api.mainModule('index.ts');
});

// tests
// Package.onTest(function(api) {
//   api.use('tinytest');
//   // api.use('scorpiusjs:core');
// });