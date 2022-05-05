const apiAppendData = async () =>{
   try { 
       let ipAndLocationData = await getLocation();
       let browser = whichBrowser();

       return {
           browser, ipAndLocationData
        }
    }
    catch(error){
        let browser = whichBrowser();

        return {
            browser
         }
    }
}

export const getLocation = async() =>{
    try { 
        let ipApi = await fetch(`https://ipinfo.io/json?token=69e9221c22cb9d`);
        let ipAndLocationData = await ipApi.json();
    
        return ipAndLocationData
    }
    catch(error){
        return "noIpLocationFound"
    }
}

// BROWSER check
function whichBrowser() {
    if (isFirefox()) {
        return "Firefox";
    } else if (isEdge()) {
        return "Edge";
    } else if (isIE()) {
        return "Internet Explorer";
    } else if (isOpera()) {
        return "Opera";
    } else if (isVivaldi()) {
        return "Vivalid";
    } else if(isBrave()){
        return "Brave";
    } else if (isChrome()) {
        return "Chrome";
    } else if (isSafari()) {
        return "Safari";
    } else {
        return "Unknown";
    }
}

function agentHas(keyword) {
    return navigator.userAgent.toLowerCase().search(keyword.toLowerCase()) > -1;
}

function isIE() {
    return !!document.documentMode;
}

function isBrave(){
    return navigator.brave && navigator.brave.isBrave() || false;
}

function isSafari() {
    return (!!window.ApplePaySetupFeature || !!window.safari) && agentHas("Safari") && !agentHas("Chrome") && !agentHas("CriOS");
}

function isChrome() {
    return agentHas("CriOS") || agentHas("Chrome") || !!window.chrome;
}

function isFirefox() {
    return agentHas("Firefox") || agentHas("FxiOS") || agentHas("Focus");
}

function isEdge() {
    return agentHas("Edg");
}

function isOpera() {
    return agentHas("OPR");
}

function isVivaldi() {
    return agentHas("Vivaldi");
}


export default apiAppendData;