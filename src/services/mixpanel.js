import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN,{debug: true, ignore_dnt: true});

const Mixpanel = {
    identify: (id) => { //track a usuarios
        mixpanel.identify(id);
    },
    alias: (id) => { //track a usuarios no logeados
        mixpanel.alias(id);
    },
    track: (name, props) => {
        mixpanel.track(name, props);
    },
    people: { //trackear personas de manera mas puntual, con sus nombres
        set: (props) => {
            mixpanel.people.set(props);
        }
    },
    TYPES: { //Acciones a las que quiero dar seguimiento
        OPEN_USER_MENU: "OPEN_USER_MENU", //Check
        GO_TO_CATALOG: "GO_TO_CATALOG", //CHECK
        GO_TO_PROFILE: "GO_TO_PROFILE", //CHECK
        CLOSE_SESSION: "CLOSE_SESSION", //CHECK
        VIEW_PRODUCT: "VIEW_PRODUCT", //Los primeros 5
        LOGIN_ATTEMPT: "LOGIN_ATTEMPT", //CHECK
        SUCCESSFULLY_LOGIN: "SUCCESFULLY_LOGIN", //CHECK
        CATEGORIES_FILTERED: "CATEGORIES_FILTERED", //CHECK
        SEARCHED_WORDS: "SEARCHED_WORDS", //CHECK
        CONFIRMATION_EXCHANGE: "CONFIRMATION_EXCHANGE", //CHECK
        CANCEL_EXCHANGE: "CANCEL_EXCHANGE", //CHECK
        ADD_NEW_ITEM: "ADD_NEW_ITEM" //CHECK
    }
};

export default Mixpanel;