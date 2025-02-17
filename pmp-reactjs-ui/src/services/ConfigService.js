import HttpService from "./HttpService.js";

export const loadAppConfig = async () => {
    try {
        //const resp = await HttpService.get("/api/configs");
        //const appConfig = resp.data.response;
        //localStorage.setItem('appConfig', JSON.stringify(appConfig));
    } catch (err) {
        console.log("unable to load configs: " + err);
    }
}

export const getAppConfig = async () => {
    let cachedAppConfig = localStorage.getItem('appConfig');
    if (!cachedAppConfig) {
        await loadAppConfig();
        cachedAppConfig = localStorage.getItem('appConfig');
    }
    return JSON.parse(cachedAppConfig);

}