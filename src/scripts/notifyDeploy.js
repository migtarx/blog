require('dotenv').config();
const deployEnv = process.env.DEPLOY_ENV;
const ntfyUser = process.env.NTFY_USER;
const ntfyPasswd = process.env.NTFY_PASSWD;
const ntfyTopicUrl = process.env.NTFY_TOPIC_URL;
const projectName = process.env.PROJECT_NAME;
const encodedAuth = Buffer.from(`${ntfyUser}:${ntfyPasswd}`).toString('base64');

(async function() {
    await fetch(ntfyTopicUrl, {
        method: 'POST',
        body: `${projectName} successfully deployed to ${deployEnv}`,
        headers: {
            'Authorization': `Basic ${encodedAuth}`,
            'Title': `Sucessfull deploy - [${projectName}]`,
            'Tags': 'white_check_mark'
        }
    })
})();