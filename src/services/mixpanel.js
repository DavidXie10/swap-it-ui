import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN);

const Mixpanel = {
    identify: (id) => { //track a usuarios
        mixpanel.identify(id)
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
        OPEN_USER_MENU: "OPEN_USER_MENU",
        GOT_TO_CATALOG: "OPEN_USER_MENU",
        VIEW_PRODUCT: "VIEW_PRODUCT",
        SUCCESSFULLY_LOGIN: "SUCCESFULLY_LOGIN"
    }
};

export default Mixpanel;

mixpanel.track("TOGGLE_MENU", {
    currentTheme: 'light'
});