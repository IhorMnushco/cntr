!function(y){jQuery.fn.cntr=function(s){s=y.extend({select:!1,flag:!1,flags:!1,search:!1,list:!1,delete:!1,countryAll:[]},s);var e,t,l,a,o,n=[["Afghanistan","af","93"],["Albania","al","355"],["Algeria","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antarctica","aq","672"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia","am","374"],["Aruba","aw","297"],["Australia","au","61"],["Austria","at","43"],["Azerbaijan","az","994"],["Bahamas","bs","1242"],["Bahrain","bh","973"],["Bangladesh","bd","880"],["Barbados","bb","1246"],["Belarus","by","375"],["Belgium","be","32"],["Belize","bz","501"],["Benin","bj","229"],["Bermuda","bm","1441"],["Bhutan","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina","ba","387"],["Botswana","bw","267"],["Brazil","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria","bg","359"],["Burkina Faso","bf","226"],["Burundi","bi","257"],["Cambodia","kh","855"],["Cameroon","cm","237"],["Canada","ca","1"],["Cape Verde","cv","238"],["Cayman Islands","ky","1345"],["Central African Republic","cf","236"],["Chad","td","235"],["Chile","cl","56"],["China","cn","86"],["Christmas Island","cx","61"],["Cocos Islands","cc","61"],["Colombia","co","57"],["Comoros","km","269"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["Croatia","hr","385"],["Cuba","cu","53"],["Cyprus","cy","357"],["Czech Republic","cz","420"],["Democratic Republic of the Congo","cd","243"],["Denmark","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic","do","18"],["East Timor","tl","670"],["Ecuador","ec","593"],["Egypt","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea","gq","240"],["Eritrea","er","291"],["Estonia","ee","372"],["Ethiopia","et","251"],["Falkland Islands","fk","500"],["Faroe Islands","fo","298"],["Fiji","fj","679"],["Finland","fi","358"],["France","fr","33"],["French Polynesia","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia","ge","995"],["Germany","de","49"],["Ghana","gh","233"],["Gibraltar","gi","350"],["Greece","gr","30"],["Greenland","gl","299"],["Grenada","gd","1473"],["Guam","gu","1671"],["Guatemala","gt","502"],["Guernsey","gg","44"],["Guinea","gn","224"],["Guinea-Bissau ","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong","hk","852"],["Hungary","hu","36"],["Iceland","is","354"],["India","in","91"],["Indonesia","id","62"],["Iran","ir","98"],["Iraq","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44"],["Israel","il","972"],["Italy","it","39"],["Jamaica","jm","1876"],["Japan","jp","81"],["Jersey","je","44"],["Jordan","jo","962"],["Kazakhstan","kz","7"],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait","kw","965"],["Kyrgyzstan","kg","996"],["Laos","la","856"],["Latvia","lv","371"],["Lebanon","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya","ly","218"],["Liechtenstein","li","423"],["Lithuania","lt","370"],["Luxembourg","lu","352"],["Macau","mo","853"],["Macedonia","mk","389"],["Madagascar","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Mauritania","mr","222"],["Mauritius","mu","230"],["Mayotte","yt","262"],["Mexico","mx","52"],["Micronesia","fm","691"],["Moldova","md","373"],["Monaco","mc","377"],["Mongolia","mn","976"],["Montenegro","me","382"],["Montserrat","ms","1664"],["Morocco","ma","212"],["Mozambique","mz","258"],["Myanmar","mm","95"],["Namibia","na","264"],["Nauru","nr","674"],["Nepal","np","977"],["Netherlands","nl","31"],["Netherlands Antilles","an","599"],["New Caledonia","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["North Korea","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway","no","47"],["Oman","om","968"],["Pakistan","pk","92"],["Palau","pw","680"],["Palestine","ps","970"],["Panama","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru","pe","51"],["Philippines","ph","63"],["Poland","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1"],["Qatar","qa","974"],["Republic of the Congo","cg","242"],["Reunion","re","262"],["Romania","ro","40"],["Russia","ru","7"],["Rwanda","rw","250"],["Saint Barthelemy","bl","590"],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin","mf","590"],["Saint Pierre and Miquelon","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["Sao Tome and Principe","st","239"],["Saudi Arabia","sa","966"],["Senegal","sn","221"],["Serbia","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Slovakia","sk","421"],["Slovenia","si","386"],["Solomon Islands","sb","677"],["Somalia","so","252"],["South Africa","za","27"],["South Korea","kr","82"],["South Sudan","ss","211"],["Spain","es","34"],["Sri Lanka","lk","94"],["Sudan","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47"],["Swaziland","sz","268"],["Sweden","se","46"],["Switzerland","ch","41"],["Syria","sy","963"],["Taiwan","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand","th","66"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia","tn","216"],["Turkey","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine","ua","380"],["United Arab Emirates","ae","971"],["United Kingdom","gb","44"],["United States","us","1"],["Uruguay","uy","598"],["Uzbekistan","uz","998"],["Vanuatu","vu","678"],["Vatican","va","379"],["Venezuela","ve","58"],["Vietnam","vn","84"],["Wallis and Futuna","wf","681"],["Western Sahara","eh","212"],["Yemen","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"]],r=y(this),c=y("body"),d=r.data("current");r.addClass("cntr-in").wrap('<div class="cntr-bl"></div>');var h=r.parent(),u=h.append('<div class="cntr-ls"><ul></ul></div>').find(".cntr-ls").find("ul");if(!s.search){var g=h.append('<input type="hidden" name="country">').find("input[name=country]");c.on("keypress",function(a){if(h.hasClass("active")&&-1!==a.key.search(/^[^\d+=()\[\]{}\\/^$|?*!@#%:;&,_.'"\s]+$/)){var n=h.find(".cntr-ls").find("li[data-search^="+String.fromCharCode(a.keyCode).toLowerCase()+"]");0!==n.length&&u.animate({scrollTop:n[0].offsetTop-20},500)}}),s.select||s.search||r.on("keypress",function(a){-1!==a.key.search(/[^0-9]/gi)&&a.preventDefault()})}function m(a,n){countryParam=a,e=countryParam[0],t=countryParam[1],l=countryParam[2],n?u.append('<li data-search="'+e.toLowerCase()+'" data-name="'+e+'" data-code="'+t+'" data-phone="'+l+'"><span class="cntr-fl flag-'+t+'"></span>'+e+"</li>"):u.append('<li data-search="'+e.toLowerCase()+'" data-name="'+e+'" data-code="'+t+'" data-phone="'+l+'">'+e+"</li>")}!function(t){if(s.list)y.each(s.countryAll,function(a,e){y.each(n,function(a,n){-1!==n.indexOf(e)&&m(y(this),t)})});else if(s.delete)y.each(n,function(a,n){var e,i;i=n,y.each(s.countryAll,function(a,n){if(-1!==i.indexOf(n))return!(e=!0)}),e||m(n,t)});else for(i=0;i<n.length;i++)n[i],m(n[i],t)}(s.flags);var f=u.find("li");(s.flag?(h.append('<div class="cntr-sl"></div>'),r.addClass("cntr-in-sl"),(o=h.find(".cntr-sl")).css("height",r.height()),o.on("click",function(){y(this).parent().toggleClass("active")})):r.on("click",function(){h.hasClass("changed")&&0!==r.val().length||s.search?s.search&&y(this).parent().toggleClass("active"):y(this).parent().toggleClass("active")}),c.on("click",function(a){h.hasClass("active")&&!h.is(a.target)&&0===h.has(a.target).length&&h.removeClass("active")}),s.search||s.select)&&(a=r.closest("form").find('input[type="tel"]'),h.append('<span class="cntr-arrow"></span>').find(".cntr-arrow").on("click",function(){r.click()}));function p(a,n){a.val(u.find('li[data-code="'+d+'"]').data(n)),void 0!==a.val()&&""!==a.val()&&1<a.val().length&&a.addClass("valid")}function v(){s.flag?(o.html('<span class="flag-'+d+'"></span>'),p(r,"phone"),p(g,"name")):s.search?(p(r,"name"),p(a,"phone")):s.select?(r.text(u.find('li[data-code="'+d+'"]').data("name")),p(g,"name"),p(a,"phone")):(p(r,"phone"),p(g,"name"))}s.search?(r.on("keyup",function(a){if(h.removeClass("changed").addClass("active"),$this=y(this),$div=$this.nextAll(".cntr-ls"),$li=$div.find("li"),$key=a.originalEvent.keyCode,0<$this.val().length?($li.hide(),$div.find('li[data-search^="'+$this.val().toLowerCase()+'"]').show()):$li.show(),13===$key)return y.each(f,function(){if("none"!==y(this).css("display"))return y(this).click(),!1}),!1}).on("keypress",function(a){if($key=a.charCode,13===$key)return!1}),f.on("click",function(){h.removeClass("active").addClass("changed"),r.val(y(this).data("name")),a.val(y(this).data("phone"))})):s.select?f.on("click",function(){h.removeClass("active").addClass("changed"),r.text(y(this).data("name")),g.val(y(this).data("name")),a.val(y(this).data("phone"))}):s.flag?(f.on("click",function(){h.removeClass("active").addClass("changed"),r.addClass("cntr_check"),r.val(y(this).data("phone")),g.val(y(this).data("name")),o.html('<span class="flag-'+y(this).data("code")+'"></span>'),r.focus()}),r.on("keyup",function(){var a=y(this);if(-1!==!a.val().search(/[^0-9]/gi)&&0<a.val().length&&!a.hasClass("cntr_check")){var n=h.find(".cntr-ls").find("li[data-phone|="+a.val()+"]").data("code"),e=h.find(".cntr-ls").find("li[data-phone|="+a.val()+"]").data("name");void 0!==n&&(o.html('<span class="flag-'+n+'"></span>'),g.val(e))}a.val().length<1&&a.removeClass("cntr_check")})):f.on("click",function(){h.removeClass("active").addClass("changed"),r.val(y(this).data("phone")),g.val(y(this).data("name")),r.focus()}),void 0===d||""===d?window.sessionStorage&&sessionStorage.getItem("iso")?(d=sessionStorage.getItem("iso"),h.addClass("changed"),r.addClass("cntr_check"),v()):y.ajax({url:"https://api.sypexgeo.net/",method:"GET",dataType:"json",error:function(){s.flag&&(o.html('<span class="flag-us"></span>'),g.val("United States"))},success:function(a){d=a.country.iso.toLowerCase(),sessionStorage.setItem("iso",a.country.iso.toLowerCase()),h.addClass("changed"),r.addClass("cntr_check"),v()}}):(h.addClass("changed"),r.addClass("cntr_check"),v()),c.height()-r.offset().top<360&&281<c.height()-r.offset().top?u.parent().addClass("cntr-middle"):c.height()-r.offset().top<280&&u.parent().addClass("cntr-top")}}(jQuery);