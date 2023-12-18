async function locator(req, res, next) {
    const ip = global.exec_mode == "pro" ? req.headers['x-real-ip'] : req.ip;
    const response = await fetch(`https://api.iplocation.net/?ip=${ip}`);
    const data = await response.json();
    const countryName = data.country_name;
    req.location = countryName;
    next();
}

module.exports = {
    locator
}