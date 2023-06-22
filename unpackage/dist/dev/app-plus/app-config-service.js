
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login","pages/index","pages/content","pages/info","pages/about","pages/investor","pages/personal","pages/register","pages/fundDetails","pages/InvestmentRecords","pages/InvestmentDetails","pages/RevenueRecords","pages/RechargeRecord","pages/WithdrawalRecords","pages/RealName","pages/BindUSDT","pages/BindBank","pages/AccountSafe","pages/ChangeLoginPassword","pages/ModifyPaymentPassword","pages/contract","pages/withdraw","pages/preview","pages/onlineService"],"window":{"navigationStyle":"custom"},"tabBar":{"color":"#666974","selectedColor":"#f6d658","borderStyle":"#eeeeee","backgroundColor":"#ffffff","fontSize":"12px","iconWidth":"22px","list":[{"pagePath":"pages/index","iconPath":"./static/img/index1.png","selectedIconPath":"./static/img/index.png","text":"首页"},{"pagePath":"pages/investor","iconPath":"./static/img/money1.png","selectedIconPath":"./static/img/money.png","text":"投资"},{"pagePath":"pages/about","iconPath":"./static/img/find1.png","selectedIconPath":"./static/img/find.png","text":"发现"},{"pagePath":"pages/personal","iconPath":"./static/img/user1.png","selectedIconPath":"./static/img/user.png","text":"我的"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"安科生物","compilerVersion":"3.8.4","entryPagePath":"pages/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login","meta":{"isQuit":true},"window":{}},{"path":"/pages/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/content","meta":{},"window":{}},{"path":"/pages/info","meta":{},"window":{}},{"path":"/pages/about","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/investor","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/personal","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/register","meta":{},"window":{}},{"path":"/pages/fundDetails","meta":{},"window":{}},{"path":"/pages/InvestmentRecords","meta":{},"window":{}},{"path":"/pages/InvestmentDetails","meta":{},"window":{}},{"path":"/pages/RevenueRecords","meta":{},"window":{}},{"path":"/pages/RechargeRecord","meta":{},"window":{}},{"path":"/pages/WithdrawalRecords","meta":{},"window":{}},{"path":"/pages/RealName","meta":{},"window":{}},{"path":"/pages/BindUSDT","meta":{},"window":{}},{"path":"/pages/BindBank","meta":{},"window":{}},{"path":"/pages/AccountSafe","meta":{},"window":{}},{"path":"/pages/ChangeLoginPassword","meta":{},"window":{}},{"path":"/pages/ModifyPaymentPassword","meta":{},"window":{}},{"path":"/pages/contract","meta":{},"window":{}},{"path":"/pages/withdraw","meta":{},"window":{}},{"path":"/pages/preview","meta":{},"window":{}},{"path":"/pages/onlineService","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
