(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7813f0de"],{"1ed2":function(s,t,a){"use strict";var i=a("ac8f"),e=a.n(i);e.a},ac8f:function(s,t,a){},d538:function(s,t,a){"use strict";a.r(t);var i=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("el-main",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"box"},[a("div",{staticClass:"info-header"},[s._v("\n                    磁盘\n                ")]),a("div",{staticClass:"info-body clearfix"},[a("div",{staticClass:"border-right col-3"},[a("span",{staticClass:"info-body-header"},[s._v("总容量")]),a("br"),a("span",{staticClass:"text-primary"},[s._v(s._s(s.diskSize))]),a("span",{staticClass:"mark"},[s._v("GB")])]),a("div",{staticClass:"border-right col-3"},[a("span",{staticClass:"info-body-header"},[s._v("已使用")]),a("br"),a("span",{staticClass:"text-success"},[s._v(s._s(s.diskUsed))]),a("span",{staticClass:"mark"},[s._v("GB")])]),a("div",{staticClass:"col-3"},[a("span",{staticClass:"info-body-header"},[s._v("剩余")]),a("br"),a("span",{staticClass:"text-success"},[s._v(s._s(s.diskFree))]),a("span",{staticClass:"mark"},[s._v("GB")])])])])])],1),a("el-row",{staticClass:"info-row",attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"box"},[a("div",{staticClass:"info-header"},[s._v("\n                    文件数\n                ")]),a("div",{staticClass:"info-body clearfix"},[a("div",{staticClass:"border-right col-2"},[a("span",{staticClass:"info-body-header"},[s._v("总文件数")]),a("br"),a("span",{staticClass:"text-success"},[s._v(s._s(s.fileNum))])]),a("div",{staticClass:"col-2"},[a("span",{staticClass:"info-body-header"},[s._v("无效文件数")]),a("br"),a("el-tooltip",{attrs:{effect:"light",placement:"right"}},[a("div",{attrs:{slot:"content"},slot:"content"},[s._v("每天凌晨2点"),a("br"),s._v("清理废弃文件")]),a("span",{staticClass:"text-warn"},[s._v(s._s(s.illegalFileNum))])])],1)])])])],1),a("el-row",{staticClass:"info-row",attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"box"},[a("div",{staticClass:"info-header"},[s._v("\n                    文件夹数\n                ")]),a("div",{staticClass:"info-body clearfix"},[a("span",{staticClass:"text-success"},[s._v(s._s(s.folderNum))])])])]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"box"},[a("div",{staticClass:"info-header"},[s._v("\n                    视频数\n                ")]),a("div",{staticClass:"info-body clearfix"},[a("span",{staticClass:"text-success"},[s._v(s._s(s.videoNum))])])])]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"box"},[a("div",{staticClass:"info-header"},[s._v("\n                    音频数\n                ")]),a("div",{staticClass:"info-body clearfix"},[a("span",{staticClass:"text-success"},[s._v(s._s(s.audioNum))])])])])],1)],1)},e=[],l=a("6c6e"),c={data:function(){return{diskSize:0,diskUsed:0,diskFree:0,fileNum:0,illegalFileNum:0,folderNum:0,videoNum:0,audioNum:0}},created:function(){var s=this;Object(l["n"])().then(function(t){var a=t.data;s.diskSize=(a.diskCapacity/1073741824).toFixed(2),s.diskUsed=((a.diskCapacity-a.diskFree)/1073741824).toFixed(2),s.diskFree=(a.diskFree/1073741824).toFixed(2),s.fileNum=a.fileNum,s.folderNum=a.folderNum,s.illegalFileNum=a.garbageFileNum,s.videoNum=a.videoNum,s.audioNum=a.audioNum})}},d=c,o=(a("1ed2"),a("17cc")),n=Object(o["a"])(d,i,e,!1,null,"29cf4088",null);t["default"]=n.exports}}]);
//# sourceMappingURL=chunk-7813f0de.0757945a.js.map