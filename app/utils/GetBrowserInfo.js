export default function GetBrowserInfo() {
    return {
      browserColorDepth: screen.colorDepth,
      browserLanguage: navigator.language,
      browserScreenHeight: window.innerHeight,
      browserScreenWidth: window.innerWidth,
      browserTZ: new Date().getTimezoneOffset(),
      browserUserAgent: navigator.userAgent,
      browserJavaEnabled: navigator.javaEnabled(),
    };
  }