/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_SignUp_SignIn"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://COMSandbox.b2clogin.com/COMSandbox.onmicrosoft.com/B2C_1_SignUp_SignIn",
        }
    },
    authorityDomain: "COMSandbox.b2clogin.com"
}