/**

 * Default options that are needed for Framework level configuration.
 * You may overwrite these options when instantiating the Scorpius Config.
 * ex: in Meteor.startup function new ScorpiusConfig({settings})
 */
export const CoreConfig: Object = {
    app: {
        name: 'My Scorpius Application',
        version: '0.1.0',
        framework: 'materialize'
    },
    accounts: {
        
    },
    attributes: {
        fileAttribute: {
            
        },
        imageAttribute: {
            
        },
        
    },
    collections: {
        
    },
    dashboards: {
        
    },
    fileCollection: {
        
    },
    fileSystem: {
        providers: {
            s3: {
                
            },
            cloudinary: {
                
            }
        }
    },
    editors: {
        froala: {
            
        },
        summernoate:{
            
        }
    },
    language: {
        en: {
            
        },
        es: {
            
        }
    },
    theme: {
        materialize: {
            
        },
        bootstrap: {
            
        },
        foundation: {
            
        }
    },
    pages: {
        
    },
    relationships: {
        
    }
    
}