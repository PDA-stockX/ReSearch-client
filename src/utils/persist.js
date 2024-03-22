function getAuthContext() {
    const persistRoot = localStorage.getItem("persist:root");
    const root = JSON.parse(persistRoot);
    const auth = JSON.parse(root.auth);

    return auth.authContext;
}

export default getAuthContext;