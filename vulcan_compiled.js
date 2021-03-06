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
lt.plugins.vulcan.make_connection_input = (function make_connection_input(){var e__8120__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"host:port",new cljs.core.Keyword(null,"value","value",1125876963),"localhost:6000"], null)], null));var seq__12186_12205 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),(function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
}),new cljs.core.Keyword(null,"blur","blur",1016931289),(function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
})], null)));var chunk__12187_12206 = null;var count__12188_12207 = 0;var i__12189_12208 = 0;while(true){
if((i__12189_12208 < count__12188_12207))
{var vec__12190_12209 = cljs.core._nth.call(null,chunk__12187_12206,i__12189_12208);var ev__8121__auto___12210 = cljs.core.nth.call(null,vec__12190_12209,0,null);var func__8122__auto___12211 = cljs.core.nth.call(null,vec__12190_12209,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___12210,func__8122__auto___12211);
{
var G__12212 = seq__12186_12205;
var G__12213 = chunk__12187_12206;
var G__12214 = count__12188_12207;
var G__12215 = (i__12189_12208 + 1);
seq__12186_12205 = G__12212;
chunk__12187_12206 = G__12213;
count__12188_12207 = G__12214;
i__12189_12208 = G__12215;
continue;
}
} else
{var temp__4092__auto___12216 = cljs.core.seq.call(null,seq__12186_12205);if(temp__4092__auto___12216)
{var seq__12186_12217__$1 = temp__4092__auto___12216;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12186_12217__$1))
{var c__7500__auto___12218 = cljs.core.chunk_first.call(null,seq__12186_12217__$1);{
var G__12219 = cljs.core.chunk_rest.call(null,seq__12186_12217__$1);
var G__12220 = c__7500__auto___12218;
var G__12221 = cljs.core.count.call(null,c__7500__auto___12218);
var G__12222 = 0;
seq__12186_12205 = G__12219;
chunk__12187_12206 = G__12220;
count__12188_12207 = G__12221;
i__12189_12208 = G__12222;
continue;
}
} else
{var vec__12191_12223 = cljs.core.first.call(null,seq__12186_12217__$1);var ev__8121__auto___12224 = cljs.core.nth.call(null,vec__12191_12223,0,null);var func__8122__auto___12225 = cljs.core.nth.call(null,vec__12191_12223,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___12224,func__8122__auto___12225);
{
var G__12226 = cljs.core.next.call(null,seq__12186_12217__$1);
var G__12227 = null;
var G__12228 = 0;
var G__12229 = 0;
seq__12186_12205 = G__12226;
chunk__12187_12206 = G__12227;
count__12188_12207 = G__12228;
i__12189_12208 = G__12229;
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
lt.plugins.vulcan.connect_to = (function connect_to(address){var vec__12193 = clojure.string.split.call(null,address,":");var host = cljs.core.nth.call(null,vec__12193,0,null);var port = cljs.core.nth.call(null,vec__12193,1,null);if(cljs.core.truth_((function (){var and__6746__auto__ = host;if(cljs.core.truth_(and__6746__auto__))
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
lt.plugins.vulcan.__BEH__set_session_BANG_ = (function __BEH__set_session_BANG_(client,session){lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"session","session",2998892040),session,new cljs.core.Keyword(null,"type","type",1017479852),"Remote Debugging Protocol",new cljs.core.Keyword(null,"sheets","sheets",4405412454),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"editor.eval.cljs.exec","editor.eval.cljs.exec",866638030),null,new cljs.core.Keyword(null,"editor.eval.css","editor.eval.css",1083014276),null,new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),null], null), null)], null));
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
new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).on("error",(function (p1__12194_SHARP_){return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"connection-failed","connection-failed",2408881534),p1__12194_SHARP_);
}));
new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).on("timeout",(function (p1__12195_SHARP_){return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"connection-failed","connection-failed",2408881534),p1__12195_SHARP_);
}));
return new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).connect(new cljs.core.Keyword(null,"port","port",1017351155).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)),new cljs.core.Keyword(null,"host","host",1017112858).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,client),"localhost"),(function (p1__12196_SHARP_){if(cljs.core.truth_(p1__12196_SHARP_))
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
lt.plugins.vulcan.__BEH__editor__DOT__eval__DOT__css = (function __BEH__editor__DOT__eval__DOT__css(client,request,callback){var id = cljs.core.keyword.call(null,clojure.string.replace.call(null,[cljs.core.str("local-"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(request))].join(''),/\./,"-"));var sheet = id.call(null,new cljs.core.Keyword(null,"sheets","sheets",4405412454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)));var sheets = new cljs.core.Keyword(null,"session","session",2998892040).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).StyleSheets;if(cljs.core.truth_(sheet))
{return sheet.update(new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(request),(function (error){return error;
}));
} else
{return sheets.addStyleSheet(new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(request),(function (error,sheet__$1){return lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sheets","sheets",4405412454),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"sheets","sheets",4405412454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)),id,sheet__$1)], null));
}));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vulcan","editor.eval.css","lt.plugins.vulcan/editor.eval.css",4668004656),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vulcan.__BEH__editor__DOT__eval__DOT__css,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.vulcan","editor.eval.css","lt.plugins.vulcan/editor.eval.css",4668004656),null], null), null));
lt.plugins.vulcan.__BEH__editor__DOT__eval__DOT__cljs__DOT__exec = (function __BEH__editor__DOT__eval__DOT__cljs__DOT__exec(client,requests){var seq__12201 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(requests));var chunk__12202 = null;var count__12203 = 0;var i__12204 = 0;while(true){
if((i__12204 < count__12203))
{var request = cljs.core._nth.call(null,chunk__12202,i__12204);var console_12230 = new cljs.core.Keyword(null,"session","session",2998892040).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).Console;var info_12231 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(requests),new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(request));var editor_12232 = lt.object.by_id.call(null,new cljs.core.Keyword(null,"ed-id","ed-id",1110205563).cljs$core$IFn$_invoke$arity$1(request));console_12230.evaluateJS(new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(request),((function (seq__12201,chunk__12202,count__12203,i__12204,console_12230,info_12231,editor_12232,request){
return (function (error,response){if(cljs.core.truth_(response.exception))
{return lt.object.raise.call(null,editor_12232,new cljs.core.Keyword(null,"editor.eval.cljs.exception","editor.eval.cljs.exception",4479049174),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"meta","meta",1017252215),info_12231,new cljs.core.Keyword(null,"ex","ex",1013907493),response.exception.obj.preview], null));
} else
{return lt.object.raise.call(null,editor_12232,new cljs.core.Keyword(null,"editor.eval.cljs.result","editor.eval.cljs.result",1580065178),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"meta","meta",1017252215),info_12231,new cljs.core.Keyword(null,"result","result",4374444943),lt.objs.eval.cljs_result_format.call(null,response.result)], null));
}
});})(seq__12201,chunk__12202,count__12203,i__12204,console_12230,info_12231,editor_12232,request))
);
{
var G__12233 = seq__12201;
var G__12234 = chunk__12202;
var G__12235 = count__12203;
var G__12236 = (i__12204 + 1);
seq__12201 = G__12233;
chunk__12202 = G__12234;
count__12203 = G__12235;
i__12204 = G__12236;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12201);if(temp__4092__auto__)
{var seq__12201__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12201__$1))
{var c__7500__auto__ = cljs.core.chunk_first.call(null,seq__12201__$1);{
var G__12237 = cljs.core.chunk_rest.call(null,seq__12201__$1);
var G__12238 = c__7500__auto__;
var G__12239 = cljs.core.count.call(null,c__7500__auto__);
var G__12240 = 0;
seq__12201 = G__12237;
chunk__12202 = G__12238;
count__12203 = G__12239;
i__12204 = G__12240;
continue;
}
} else
{var request = cljs.core.first.call(null,seq__12201__$1);var console_12241 = new cljs.core.Keyword(null,"session","session",2998892040).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).Console;var info_12242 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(requests),new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(request));var editor_12243 = lt.object.by_id.call(null,new cljs.core.Keyword(null,"ed-id","ed-id",1110205563).cljs$core$IFn$_invoke$arity$1(request));console_12241.evaluateJS(new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(request),((function (seq__12201,chunk__12202,count__12203,i__12204,console_12241,info_12242,editor_12243,request,seq__12201__$1,temp__4092__auto__){
return (function (error,response){if(cljs.core.truth_(response.exception))
{return lt.object.raise.call(null,editor_12243,new cljs.core.Keyword(null,"editor.eval.cljs.exception","editor.eval.cljs.exception",4479049174),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"meta","meta",1017252215),info_12242,new cljs.core.Keyword(null,"ex","ex",1013907493),response.exception.obj.preview], null));
} else
{return lt.object.raise.call(null,editor_12243,new cljs.core.Keyword(null,"editor.eval.cljs.result","editor.eval.cljs.result",1580065178),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"meta","meta",1017252215),info_12242,new cljs.core.Keyword(null,"result","result",4374444943),lt.objs.eval.cljs_result_format.call(null,response.result)], null));
}
});})(seq__12201,chunk__12202,count__12203,i__12204,console_12241,info_12242,editor_12243,request,seq__12201__$1,temp__4092__auto__))
);
{
var G__12244 = cljs.core.next.call(null,seq__12201__$1);
var G__12245 = null;
var G__12246 = 0;
var G__12247 = 0;
seq__12201 = G__12244;
chunk__12202 = G__12245;
count__12203 = G__12246;
i__12204 = G__12247;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vulcan","editor.eval.cljs.exec","lt.plugins.vulcan/editor.eval.cljs.exec",4523685110),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vulcan.__BEH__editor__DOT__eval__DOT__cljs__DOT__exec,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.vulcan","editor.eval.cljs.exec","lt.plugins.vulcan/editor.eval.cljs.exec",4523685110),null], null), null));
lt.plugins.vulcan.firefox_parse_simple_grip = (function firefox_parse_simple_grip(result){var result_type = result.type;if(cljs.core._EQ_.call(null,result_type,"undefined"))
{return undefined;
} else
{if(cljs.core._EQ_.call(null,result_type,"null"))
{return null;
} else
{if(cljs.core._EQ_.call(null,result_type,"Infinity"))
{return Infinity;
} else
{if(cljs.core._EQ_.call(null,result_type,"-Infinity"))
{return (- Infinity);
} else
{if(cljs.core._EQ_.call(null,result_type,"NaN"))
{return NaN;
} else
{if(cljs.core._EQ_.call(null,result_type,"-0"))
{return 0;
} else
{if(cljs.core._EQ_.call(null,result_type,"longString"))
{return (result.initial + "...");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return result;
} else
{return null;
}
}
}
}
}
}
}
}
});
lt.plugins.vulcan.firefox_parse_grip = (function firefox_parse_grip(client,response,cb,err){var result = response.result;if(cljs.core._EQ_.call(null,result.type,"object"))
{return new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).selectedTab((function (error,tab){if(cljs.core.truth_(error))
{return err.call(null,error);
} else
{return tab.createJSObject(result).ownProperties((function (error__$1,properties){if(cljs.core.truth_(error__$1))
{return err.call(null,error__$1);
} else
{return cb.call(null,properties);
}
}));
}
}));
} else
{return cb.call(null,lt.plugins.vulcan.firefox_parse_simple_grip.call(null,result));
}
});
lt.plugins.vulcan.util_inspect = require("util").inspect;
lt.plugins.vulcan.firefox_pretty_print = (function firefox_pretty_print(thing){return lt.plugins.vulcan.util_inspect.call(null,thing,false,0);
});
lt.plugins.vulcan.__BEH__editor__DOT__eval__DOT__js = (function __BEH__editor__DOT__eval__DOT__js(client,request){var console = new cljs.core.Keyword(null,"session","session",2998892040).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).Console;var info = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(request);var editor = lt.object.by_id.call(null,new cljs.core.Keyword(null,"ed-id","ed-id",1110205563).cljs$core$IFn$_invoke$arity$1(request));return console.evaluateJS(new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(request),(function (error,response){if(cljs.core.truth_(response.exception))
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.eval.js.exception","editor.eval.js.exception",723801901),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"meta","meta",1017252215),info,new cljs.core.Keyword(null,"ex","ex",1013907493),response.exception.obj.preview], null));
} else
{return lt.plugins.vulcan.firefox_parse_grip.call(null,client,response,(function (value){return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.eval.js.result","editor.eval.js.result",3021062051),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"meta","meta",1017252215),info,new cljs.core.Keyword(null,"result","result",4374444943),lt.plugins.vulcan.firefox_pretty_print.call(null,value),new cljs.core.Keyword(null,"no-inspect","no-inspect",887813498),true], null));
}),(function (){return null;
}));
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