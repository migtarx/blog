const staticExtensions = ['.css', '.png', '.ttf', '.woff', '.woff2', '.jpg', '.jpeg', '.gif', '.js', '.html', '.ico'];

function isStatic(req){
    const url = req.originalUrl || req.url;
    const isStaticRoute = staticExtensions.some(ext => url.endsWith(ext));
    return isStaticRoute;
}

module.exports = {
    isStatic
}