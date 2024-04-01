function getAuthContext() {
    const persistRoot = localStorage.getItem("persist:root");
    if (!persistRoot) {
        return {
            isAuthenticated: false,
            token: null,
            user: null,
        };
    }

    const root = JSON.parse(persistRoot);
    const auth = JSON.parse(root.auth);

    return auth.authContext;
}

export {getAuthContext};