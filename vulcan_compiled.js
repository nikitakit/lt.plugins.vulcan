if(!lt.util.load.provided_QMARK_('lt.plugins.vulcan')) {
goog.provide('lt.plugins.vulcan');
goog.require('cljs.core');
goog.require('lt.util.cljs');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.platform');
goog.require('lt.objs.popup');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('lt.objs.context');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.context');
goog.require('clojure.string');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.watches');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.plugins.watches');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.command');
lt.plugins.vulcan._STAR_ns_name_STAR_ = cljs.core.name.call(null,new cljs.core.Keyword(null,"lt.plugins.vulcan","lt.plugins.vulcan",1596835273));
lt.plugins.vulcan._STAR_plugin_path_STAR_ = new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(lt.objs.plugins.by_name.call(null,"vulcan"));
lt.plugins.vulcan._STAR_firefox_client_path_STAR_ = lt.objs.files.join.call(null,lt.plugins.vulcan._STAR_plugin_path_STAR_,"node_modules/firefox-client");
lt.plugins.vulcan.Buffer = require("buffer");
lt.plugins.vulcan.net = require("net");
lt.plugins.vulcan.FirefoxClient = require(lt.plugins.vulcan._STAR_firefox_client_path_STAR_);
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Firefox",new cljs.core.Keyword(null,"desc","desc",1016984067),"Enter in the host:port address Firefox listening on",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.plugins.vulcan.show_connection_ui.call(null);
})], null));
lt.plugins.vulcan.make_connection_input = (function make_connection_input(){var e__8120__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"host:port",new cljs.core.Keyword(null,"value","value",1125876963),"localhost:6000"], null)], null));var seq__10131_10142 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),(function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
}),new cljs.core.Keyword(null,"blur","blur",1016931289),(function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
})], null)));var chunk__10132_10143 = null;var count__10133_10144 = 0;var i__10134_10145 = 0;while(true){
if((i__10134_10145 < count__10133_10144))
{var vec__10135_10146 = cljs.core._nth.call(null,chunk__10132_10143,i__10134_10145);var ev__8121__auto___10147 = cljs.core.nth.call(null,vec__10135_10146,0,null);var func__8122__auto___10148 = cljs.core.nth.call(null,vec__10135_10146,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___10147,func__8122__auto___10148);
{
var G__10149 = seq__10131_10142;
var G__10150 = chunk__10132_10143;
var G__10151 = count__10133_10144;
var G__10152 = (i__10134_10145 + 1);
seq__10131_10142 = G__10149;
chunk__10132_10143 = G__10150;
count__10133_10144 = G__10151;
i__10134_10145 = G__10152;
continue;
}
} else
{var temp__4092__auto___10153 = cljs.core.seq.call(null,seq__10131_10142);if(temp__4092__auto___10153)
{var seq__10131_10154__$1 = temp__4092__auto___10153;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10131_10154__$1))
{var c__7500__auto___10155 = cljs.core.chunk_first.call(null,seq__10131_10154__$1);{
var G__10156 = cljs.core.chunk_rest.call(null,seq__10131_10154__$1);
var G__10157 = c__7500__auto___10155;
var G__10158 = cljs.core.count.call(null,c__7500__auto___10155);
var G__10159 = 0;
seq__10131_10142 = G__10156;
chunk__10132_10143 = G__10157;
count__10133_10144 = G__10158;
i__10134_10145 = G__10159;
continue;
}
} else
{var vec__10136_10160 = cljs.core.first.call(null,seq__10131_10154__$1);var ev__8121__auto___10161 = cljs.core.nth.call(null,vec__10136_10160,0,null);var func__8122__auto___10162 = cljs.core.nth.call(null,vec__10136_10160,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___10161,func__8122__auto___10162);
{
var G__10163 = cljs.core.next.call(null,seq__10131_10154__$1);
var G__10164 = null;
var G__10165 = 0;
var G__10166 = 0;
seq__10131_10142 = G__10163;
chunk__10132_10143 = G__10164;
count__10133_10144 = G__10165;
i__10134_10145 = G__10166;
continue;
}
}
} else
{}
}
break;
}
return e__8120__auto__;
});
/**
* Brings up a connection dialog to input host:port
* when clicked connect-to-remote is invoked
*/
lt.plugins.vulcan.show_connection_ui = (function show_connection_ui(){var input = lt.plugins.vulcan.make_connection_input.call(null);var popup = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Connect to a Firefox's remote debugging API",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),"In order to connect:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",1013907519),"Enable remote debugging",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),"Open developer tools in firefox"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),"Visit the settings panel (gear icon in the top left)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"il","il",1013907605),"Set \"Enable remote debugging\" under \"Advanced Settings\""], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",1013907519),"Listen to a connection",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),"Open the Firefox CLI (Tools > Web Developer > Developer Toolbar)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),"Start a listener by entering: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1016963423),"listen 6000"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),"Server: "], null),input], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"cancel"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"connect",new cljs.core.Keyword(null,"action","action",3885920680),((function (input){
return (function (){return lt.plugins.vulcan.connect_to.call(null,lt.util.dom.val.call(null,input));
});})(input))
], null)], null)], null));lt.util.dom.focus.call(null,input);
return input.setSelectionRange(1000,1000);
});
/**
* Utility function invoked when UI displayed by `show-connection-ui` receives an
* input. Function parses given `address`, writes configuration into global state
* and dispatches :connect! event
*/
lt.plugins.vulcan.connect_to = (function connect_to(address){var vec__10138 = clojure.string.split.call(null,address,":");var host = cljs.core.nth.call(null,vec__10138,0,null);var port = cljs.core.nth.call(null,vec__10138,1,null);if(cljs.core.truth_((function (){var and__6746__auto__ = host;if(cljs.core.truth_(and__6746__auto__))
{return port;
} else
{return and__6746__auto__;
}
})()))
{var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"firefox.client","firefox.client",3134125042));lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"port","port",1017351155),port,new cljs.core.Keyword(null,"host","host",1017112858),host,new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str("Firefox "),cljs.core.str(address)].join('')], null));
return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"connect!","connect!",4735997929));
} else
{return null;
}
});
lt.plugins.vulcan.__BEH__try_connect_BANG_ = (function __BEH__try_connect_BANG_(client,_){if(cljs.core.truth_(new cljs.core.Keyword(null,"port","port",1017351155).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"connect!","connect!",4735997929));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vulcan","try-connect!","lt.plugins.vulcan/try-connect!",1164687289),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vulcan.__BEH__try_connect_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"try-connect!","try-connect!",1801329595),null], null), null));
lt.plugins.vulcan.__BEH__connect_BANG_ = (function __BEH__connect_BANG_(client){lt.objs.notifos.working.call(null,"Connecting to a Firefox");
lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"socket","socket",4411822821),(new lt.plugins.vulcan.FirefoxClient())], null));
return lt.plugins.vulcan.connect.call(null,client);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vulcan","connect!","lt.plugins.vulcan/connect!",3036689547),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vulcan.__BEH__connect_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect!","connect!",4735997929),null], null), null));
lt.plugins.vulcan.__BEH__connection_failed = (function __BEH__connection_failed(client,error){lt.object.raise.call(null,client,new cljs.core.Keyword(null,"close!","close!",3951350939));
if(cljs.core._EQ_.call(null,error.code,"ECONNREFUSED"))
{return lt.objs.notifos.done_working.call(null,"Firefox isn't listening for connections");
} else
{return lt.objs.notifos.done_working.call(null,"Failed to connect to a Firefox");
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vulcan","connection-failed","lt.plugins.vulcan/connection-failed",699872774),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vulcan.__BEH__connection_failed,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connection-failed","connection-failed",2408881534),null], null), null));
lt.plugins.vulcan.__BEH__set_session_BANG_ = (function __BEH__set_session_BANG_(client,session){lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session","session",2998892040),session,new cljs.core.Keyword(null,"type","type",1017479852),"Remote Debugging Protocol",new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),null], null), null)], null));
return lt.objs.notifos.done_working.call(null,"Firefox session is set");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vulcan","set-session!","lt.plugins.vulcan/set-session!",1514435820),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vulcan.__BEH__set_session_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set-session!","set-session!",2223331528),null], null), null));
lt.plugins.vulcan.__BEH__init_session = (function __BEH__init_session(client){lt.objs.notifos.working.call(null,"Setting up Firefox session");
return new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).selectedTab((function (error,tab){if(cljs.core.truth_(error))
{return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"connection-failed","connection-failed",2408881534),error);
} else
{return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"set-session!","set-session!",2223331528),tab);
}
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vulcan","init-session","lt.plugins.vulcan/init-session",1320298089),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vulcan.__BEH__init_session,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-session","init-session",2023206475),null], null), null));
lt.plugins.vulcan.__BEH__connected = (function __BEH__connected(client){return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"init-session","init-session",2023206475));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vulcan","connected","lt.plugins.vulcan/connected",3034767097),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vulcan.__BEH__connected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vulcan","close","lt.plugins.vulcan/close",4785105418),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.clients.rem_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close!","close!",3951350939),null], null), null));
lt.plugins.vulcan.connect = (function connect(client){new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).on("end",(function (){return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"close!","close!",3951350939));
}));
new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).on("error",(function (p1__10139_SHARP_){return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"connection-failed","connection-failed",2408881534),p1__10139_SHARP_);
}));
new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).on("timeout",(function (p1__10140_SHARP_){return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"connection-failed","connection-failed",2408881534),p1__10140_SHARP_);
}));
return new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).connect(new cljs.core.Keyword(null,"port","port",1017351155).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)),new cljs.core.Keyword(null,"host","host",1017112858).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,client),"localhost"),(function (p1__10141_SHARP_){if(cljs.core.truth_(p1__10141_SHARP_))
{return null;
} else
{return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"connect","connect",1965255772));
}
}));
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vulcan","firefox-lang","lt.plugins.vulcan/firefox-lang",1603510240),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"firefox.lang","firefox.lang",3385080661),null], null), null));
lt.plugins.vulcan.lang = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.vulcan","firefox-lang","lt.plugins.vulcan/firefox-lang",1603510240));
lt.plugins.vulcan.handle_message = (function handle_message(client,message){return cljs.core.print.call(null,message);
});
lt.plugins.vulcan.__BEH__editor__DOT__eval__DOT__js = (function __BEH__editor__DOT__eval__DOT__js(client,request){var console = new cljs.core.Keyword(null,"session","session",2998892040).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).Console;var info = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(request);var editor = lt.object.by_id.call(null,new cljs.core.Keyword(null,"ed-id","ed-id",1110205563).cljs$core$IFn$_invoke$arity$1(request));return console.evaluateJS(new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(request),(function (error,response){if(cljs.core.truth_(response.exception))
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.eval.js.exception","editor.eval.js.exception",723801901),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"meta","meta",1017252215),info,new cljs.core.Keyword(null,"ex","ex",1013907493),response.exception.obj.preview], null));
} else
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.eval.js.result","editor.eval.js.result",3021062051),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"meta","meta",1017252215),info,new cljs.core.Keyword(null,"result","result",4374444943),response.result], null));
}
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vulcan","editor.eval.js","lt.plugins.vulcan/editor.eval.js",1227651064),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vulcan.__BEH__editor__DOT__eval__DOT__js,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.vulcan","editor.eval.js","lt.plugins.vulcan/editor.eval.js",1227651064),null], null), null));
lt.plugins.vulcan.__BEH__send_BANG_ = (function __BEH__send_BANG_(client,message){return lt.object.raise.call(null,client,cljs.core.keyword.call(null,lt.plugins.vulcan._STAR_ns_name_STAR_,new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(message)),new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(message));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vulcan","send!","lt.plugins.vulcan/send!",4795707817),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vulcan.__BEH__send_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send!","send!",1123226891),null], null), null));
lt.plugins.vulcan.__BEH__client__DOT__settings = (function __BEH__client__DOT__settings(client,info){return lt.objs.clients.handle_connection_BANG_.call(null,info);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vulcan","client.settings","lt.plugins.vulcan/client.settings",1589819996),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vulcan.__BEH__client__DOT__settings,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client.settings","client.settings",3356017240),null], null), null));
}

//# sourceMappingURL=vulcan_compiled.js.map