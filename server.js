const express = require('express');
const cors = require('cors');
const app = express();

// সমস্ত ডোমেইন ও ক্লায়েন্টের জন্য CORS ওপেন
app.use(cors());

// আপনার হুবহু সম্পূর্ণ কনফিগারেশন পে-লোড
const gameConfig = {
    "code": 2,
    "use_login_optional_download": false,
    "use_background_download": false,
    "use_background_download_lobby": false,
    "country_code": "BR",
    "client_ip": "187.77.225.94",
    "gdpr_version": 0,
    "billboard_cdn_url": "",
    "billboard_msg": "",
    "web_url": "",
    "billboard_bg_url": "",
    "max_store": "",
    "max_web": "",
    "max_video": "",
    "patchnote_url": "",
    "multi_region": "",
    "appstore_url": "http://www.freefiremobile.com/",
    "backup_appstore_url": "",
    "garena_login": false,
    "garena_hint": false,
    "gop_url": "",
    "gamevar": "var_name,comment,var_type,var_value\nvar_name,comment,\"var_type float, int, bool\",var_value\nANODisabledRegions,关闭MTP的地区,string,BR,NA\"\nANODisabledClientVariant,ANODisabledClientVariant,string,\"ClientUsingVersion_MAX_HPE,ClientUsingVersion_FFI,ClientUsingVersion_MAX|IND,ClientUsingVersion_MAX|NA,ClientUsingVersion_NORMAL|NA\"\nEnableMtpLiteDataRegion,mtp轻特征开关,string,\"BR,EUROPE,ID,ME,US,RU,SAC,SG,TH,TW,VN,PK,ZA,BD\"\nANOEmulatorCheckDisbaledClientVariant,ANOEmulatorCheckDisbaledClientVariant,string,\"ClientUsingVersion_FFI,ClientUsingVersion_MAX,ClientUsingVersion_NORMAL\"\nForceTutorial_ChangeHudABTest,fps流程中打开hud选择界面的概率,float,-1\nDisableGinInfoSend,DisableGinInfoSend,int,1,,\nEnableCheckFileStates,EnableCheckFileStates,bool,false,,\nEnableFileInfoEncryptionAndroid,EnableFileInfoEncryptionAndroid,bool,true,,",
    "device_whitelist_version": "1.6.0",
    "whitelist_mask": 0,
    "device_whitelist_sp_version": "1.0.0",
    "whitelist_sp_mask": 0,
    "ggp_url": "gin.freefiremobile.com",
    "is_review_server": false,
    "abhotupdate_cdn_url": "http://187.77.225.94:2587/cdn/"
};

// ১. রুট পাথ
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(gameConfig, null, 2));
});

// ২. LocalConfig.json পাথ
app.get('/LocalConfig.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(gameConfig, null, 2));
});

// ৩. সাধারণ API এন্ডপয়েন্ট
app.get('/config', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(gameConfig, null, 2));
});

// ডায়নামিক পোর্ট লিসেনার (Render, Railway বা স্থানীয় হোস্টিংয়ের জন্য)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
