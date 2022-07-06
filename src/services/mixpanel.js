import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN,{ignore_dnt: true});

const Mixpanel = {
    identify: (id) => {
        mixpanel.identify(id);
    },
    alias: (id) => {
        mixpanel.alias(id);
    },
    track: (name, props) => {
        mixpanel.track(name, props);
    },
    people: {
        set: (props) => {
            mixpanel.people.set(props);
        }
    },
    TYPES: {
        OPEN_USER_MENU: "OPEN_USER_MENU",
        GO_TO_CATALOG: "GO_TO_CATALOG",
        GO_TO_PROFILE: "GO_TO_PROFILE",
        CLOSE_SESSION: "CLOSE_SESSION",
        VIEW_PRODUCT: "VIEW_PRODUCT",
        LOGIN_ATTEMPT: "LOGIN_ATTEMPT",
        SUCCESSFULLY_LOGIN: "SUCCESFULLY_LOGIN",
        CATEGORIES_FILTERED: "CATEGORIES_FILTERED",
        SEARCHED_WORDS: "SEARCHED_WORDS",
        CONFIRMATION_EXCHANGE: "CONFIRMATION_EXCHANGE",
        CANCEL_EXCHANGE: "CANCEL_EXCHANGE", 
        ADD_NEW_ITEM: "ADD_NEW_ITEM"
    }
};

export default Mixpanel;