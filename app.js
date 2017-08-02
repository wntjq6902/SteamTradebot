const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const client = new SteamUser();

const logOnOption = {
    accountName: 'wbot01',
    password: 'No Password',
    twoFactorCode: SteamTotp.generateAuthCode('your_steam_shared_secret'),
}


client.logOn(logOnOption);

client.on('loggedOn', () => {
    console.log('Hello, world!')
    console.log('Logged into Steam!');
    client.setPersona(SteamUser.Steam.EPersonaState.LookingToTrade);
});
