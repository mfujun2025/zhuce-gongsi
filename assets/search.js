/* 注册公司.cn · 首页搜索与地区导航交互（仅首页加载） */
const DATA = [
  {p:"直辖市",s:null,c:[["北京","beijing"],["天津","tianjin"],["上海","shanghai"],["重庆","chongqing"]]},
  {p:"广东",s:"guangdong",c:[["广州","guangzhou"],["深圳","shenzhen"],["珠海","zhuhai"],["汕头","shantou"],["佛山","foshan"],["韶关","shaoguan"],["湛江","zhanjiang"],["肇庆","zhaoqing"],["江门","jiangmen"],["茂名","maoming"],["惠州","huizhou"],["梅州","meizhou"],["汕尾","shanwei"],["河源","heyuan"],["阳江","yangjiang"],["清远","qingyuan"],["东莞","dongguan"],["中山","zhongshan"],["潮州","chaozhou"],["揭阳","jieyang"],["云浮","yunfu"]]},
  {p:"江苏",s:"jiangsu",c:[["南京","nanjing"],["无锡","wuxi"],["徐州","xuzhou"],["常州","changzhou"],["苏州","suzhou"],["南通","nantong"],["连云港","lianyungang"],["淮安","huaian"],["盐城","yancheng"],["扬州","yangzhou"],["镇江","zhenjiang"],["泰州","taizhou"],["宿迁","suqian"]]},
  {p:"浙江",s:"zhejiang",c:[["杭州","hangzhou"],["宁波","ningbo"],["温州","wenzhou"],["嘉兴","jiaxing"],["湖州","huzhou"],["绍兴","shaoxing"],["金华","jinhua"],["衢州","quzhou"],["舟山","zhoushan"],["台州","taizhou"],["丽水","lishui"]]},
  {p:"山东",s:"shandong",c:[["济南","jinan"],["青岛","qingdao"],["淄博","zibo"],["枣庄","zaozhuang"],["东营","dongying"],["烟台","yantai"],["潍坊","weifang"],["济宁","jining"],["泰安","taian"],["威海","weihai"],["日照","rizhao"],["临沂","linyi"],["德州","dezhou"],["聊城","liaocheng"],["滨州","binzhou"],["菏泽","heze"]]},
  {p:"河南",s:"henan",c:[["郑州","zhengzhou"],["开封","kaifeng"],["洛阳","luoyang"],["平顶山","pingdingshan"],["安阳","anyang"],["鹤壁","hebi"],["新乡","xinxiang"],["焦作","jiaozuo"],["濮阳","puyang"],["许昌","xuchang"],["漯河","luohe"],["三门峡","sanmenxia"],["南阳","nanyang"],["商丘","shangqiu"],["信阳","xinyang"],["周口","zhoukou"],["驻马店","zhumadian"],["济源","jiyuan"]]},
  {p:"湖北",s:"hubei",c:[["武汉","wuhan"],["黄石","huangshi"],["十堰","shiyan"],["宜昌","yichang"],["襄阳","xiangyang"],["鄂州","ezhou"],["荆门","jingmen"],["孝感","xiaogan"],["荆州","jingzhou"],["黄冈","huanggang"],["咸宁","xianning"],["随州","suizhou"],["恩施","enshi"],["仙桃","xiantao"],["潜江","qianjiang"],["天门","tianmen"],["神农架","shennongjia"]]},
  {p:"湖南",s:"hunan",c:[["长沙","changsha"],["株洲","zhuzhou"],["湘潭","xiangtan"],["衡阳","hengyang"],["邵阳","shaoyang"],["岳阳","yueyang"],["常德","changde"],["张家界","zhangjiajie"],["益阳","yiyang"],["郴州","chenzhou"],["永州","yongzhou"],["怀化","huaihua"],["娄底","loudi"],["湘西","xiangxi"]]},
  {p:"四川",s:"sichuan",c:[["成都","chengdu"],["自贡","zigong"],["攀枝花","panzhihua"],["泸州","luzhou"],["德阳","deyang"],["绵阳","mianyang"],["广元","guangyuan"],["遂宁","suining"],["内江","neijiang"],["乐山","leshan"],["南充","nanchong"],["眉山","meishan"],["宜宾","yibin"],["广安","guangan"],["达州","dazhou"],["雅安","yaan"],["巴中","bazhong"],["资阳","ziyang"],["阿坝","aba"],["甘孜","ganzi"],["凉山","liangshan"]]},
  {p:"河北",s:"hebei",c:[["石家庄","shijiazhuang"],["唐山","tangshan"],["秦皇岛","qinhuangdao"],["邯郸","handan"],["邢台","xingtai"],["保定","baoding"],["张家口","zhangjiakou"],["承德","chengde"],["沧州","cangzhou"],["廊坊","langfang"],["衡水","hengshui"]]},
  {p:"山西",s:"shanxi",c:[["太原","taiyuan"],["大同","datong"],["阳泉","yangquan"],["长治","changzhi"],["晋城","jincheng"],["朔州","shuozhou"],["晋中","jinzhong"],["运城","yuncheng"],["忻州","xinzhou"],["临汾","linfen"],["吕梁","lvliang"]]},
  {p:"陕西",s:"shaanxi",c:[["西安","xian"],["铜川","tongchuan"],["宝鸡","baoji"],["咸阳","xianyang"],["渭南","weinan"],["延安","yanan"],["汉中","hanzhong"],["榆林","yulin"],["安康","ankang"],["商洛","shangluo"]]},
  {p:"辽宁",s:"liaoning",c:[["沈阳","shenyang"],["大连","dalian"],["鞍山","anshan"],["抚顺","fushun"],["本溪","benxi"],["丹东","dandong"],["锦州","jinzhou"],["营口","yingkou"],["阜新","fuxin"],["辽阳","liaoyang"],["盘锦","panjin"],["铁岭","tieling"],["朝阳","chaoyang"],["葫芦岛","huludao"]]},
  {p:"吉林",s:"jilin",c:[["长春","changchun"],["吉林","jilin"],["四平","siping"],["辽源","liaoyuan"],["通化","tonghua"],["白山","baishan"],["松原","songyuan"],["白城","baicheng"],["延边","yanbian"]]},
  {p:"黑龙江",s:"heilongjiang",c:[["哈尔滨","haerbin"],["齐齐哈尔","qiqihaer"],["鸡西","jixi"],["鹤岗","hegang"],["双鸭山","shuangyashan"],["大庆","daqing"],["伊春","yichun"],["佳木斯","jiamusi"],["七台河","qitaihe"],["牡丹江","mudanjiang"],["黑河","heihe"],["绥化","suihua"],["大兴安岭","daxinganling"]]},
  {p:"安徽",s:"anhui",c:[["合肥","hefei"],["芜湖","wuhu"],["蚌埠","bengbu"],["淮南","huainan"],["马鞍山","maanshan"],["淮北","huaibei"],["铜陵","tongling"],["安庆","anqing"],["黄山","huangshan"],["滁州","chuzhou"],["阜阳","fuyang"],["宿州","suzhou"],["六安","luan"],["亳州","bozhou"],["池州","chizhou"],["宣城","xuancheng"]]},
  {p:"福建",s:"fujian",c:[["福州","fuzhou"],["厦门","xiamen"],["莆田","putian"],["三明","sanming"],["泉州","quanzhou"],["漳州","zhangzhou"],["南平","nanping"],["龙岩","longyan"],["宁德","ningde"]]},
  {p:"江西",s:"jiangxi",c:[["南昌","nanchang"],["景德镇","jingdezhen"],["萍乡","pingxiang"],["九江","jiujiang"],["新余","xinyu"],["鹰潭","yingtan"],["赣州","ganzhou"],["吉安","jian"],["宜春","yichun"],["抚州","fuzhou"],["上饶","shangrao"]]},
  {p:"贵州",s:"guizhou",c:[["贵阳","guiyang"],["六盘水","liupanshui"],["遵义","zunyi"],["安顺","anshun"],["毕节","bijie"],["铜仁","tongren"],["黔西南","qianxinan"],["黔东南","qiandongnan"],["黔南","qiannan"]]},
  {p:"云南",s:"yunnan",c:[["昆明","kunming"],["曲靖","qujing"],["玉溪","yuxi"],["保山","baoshan"],["昭通","zhaotong"],["丽江","lijiang"],["普洱","puer"],["临沧","lincang"],["楚雄","chuxiong"],["红河","honghe"],["文山","wenshan"],["西双版纳","xishuangbanna"],["大理","dali"],["德宏","dehong"],["怒江","nujiang"],["迪庆","diqing"]]},
  {p:"海南",s:"hainan",c:[["海口","haikou"],["三亚","sanya"],["三沙","sansha"],["儋州","danzhou"],["五指山","wuzhishan"],["琼海","qionghai"],["文昌","wenchang"],["万宁","wanning"],["东方","dongfang"],["定安","dingan"],["屯昌","tunchang"],["澄迈","chengmai"],["临高","lingao"],["白沙","baisha"],["昌江","changjiang"],["乐东","ledong"],["陵水","lingshui"],["保亭","baoting"],["琼中","qiongzhong"]]},
  {p:"甘肃",s:"gansu",c:[["兰州","lanzhou"],["嘉峪关","jiayuguan"],["金昌","jinchang"],["白银","baiyin"],["天水","tianshui"],["武威","wuwei"],["张掖","zhangye"],["平凉","pingliang"],["酒泉","jiuquan"],["庆阳","qingyang"],["定西","dingxi"],["陇南","longnan"],["临夏","linxia"],["甘南","gannan"]]},
  {p:"青海",s:"qinghai",c:[["西宁","xining"],["海东","haidong"],["海北","haibei"],["黄南","huangnan"],["海南州","hainanzhou"],["果洛","guoluo"],["玉树","yushu"],["海西","haixi"]]},
  {p:"宁夏",s:"ningxia",c:[["银川","yinchuan"],["石嘴山","shizuishan"],["吴忠","wuzhong"],["固原","guyuan"],["中卫","zhongwei"]]},
  {p:"新疆",s:"xinjiang",c:[["乌鲁木齐","wulumuqi"],["克拉玛依","kelamayi"],["吐鲁番","tulufan"],["哈密","hami"],["昌吉","changji"],["博尔塔拉","boertala"],["巴音郭楞","bayinguoleng"],["阿克苏","akesu"],["克孜勒苏","kezilesu"],["喀什","kashi"],["和田","hetian"],["伊犁","yili"],["塔城","tacheng"],["阿勒泰","aletai"],["石河子","shihezi"],["阿拉尔","alaer"],["图木舒克","tumushuke"],["五家渠","wujiaqu"]]},
  {p:"内蒙古",s:"neimenggu",c:[["呼和浩特","huhehaote"],["包头","baotou"],["乌海","wuhai"],["赤峰","chifeng"],["通辽","tongliao"],["鄂尔多斯","eerduosi"],["呼伦贝尔","hulunbeier"],["巴彦淖尔","bayannaoer"],["乌兰察布","wulanchabu"],["兴安盟","xinganmeng"],["锡林郭勒","xilinguole"],["阿拉善","alashan"]]},
  {p:"西藏",s:"xizang",c:[["拉萨","lasa"],["日喀则","rikaze"],["昌都","changdu"],["林芝","linzhi"],["山南","shannan"],["那曲","naqu"],["阿里","ali"]]},
  {p:"广西",s:"guangxi",c:[["南宁","nanning"],["柳州","liuzhou"],["桂林","guilin"],["梧州","wuzhou"],["北海","beihai"],["防城港","fangchenggang"],["钦州","qinzhou"],["贵港","guigang"],["玉林","yulin"],["百色","baise"],["贺州","hezhou"],["河池","hechi"],["来宾","laibin"],["崇左","chongzuo"]]},
  {p:"港澳台",s:null,c:[["香港","xianggang"],["澳门","aomen"],["台湾","taiwan"]]}
];

const $ = s => document.querySelector(s);
const totalCities = document.querySelectorAll(".city").length;
$("#statCity").innerHTML = totalCities + "<i>城</i>";
$("#kickerCity").textContent = totalCities;

/* 省份快速跳转 */
document.querySelectorAll(".pjump").forEach(el =>
  el.addEventListener("click", () => {
    const block = document.getElementById("prov-" + el.dataset.i);
    if (!block) return;
    block.classList.remove("hide");
    block.scrollIntoView({ behavior: "smooth", block: "center" });
    block.classList.remove("flashbox"); void block.offsetWidth; block.classList.add("flashbox");
  })
);

/* 搜索过滤 */
const heroInput = $("#heroInput"), regionInput = $("#regionInput");
function applyFilter(q) {
  q = (q || "").trim();
  let hits = 0;
  document.querySelectorAll(".prov").forEach(p => {
    let vis = 0;
    p.querySelectorAll(".city").forEach(c => {
      const name = c.dataset.name, prov = c.dataset.prov;
      const match = !q || name.includes(q) || prov.includes(q) || (q.length > 1 && (name + prov).includes(q));
      c.classList.toggle("hide", q && !match);
      c.classList.toggle("hit", !!q && match);
      if (match) vis++;
    });
    p.classList.toggle("hide", q && vis === 0);
    hits += (q ? vis : 0);
  });
  const empty = q && hits === 0;
  $("#regionEmpty").classList.toggle("on", empty);
  $("#regionList").style.display = empty ? "none" : "";
  $("#resetBtn").classList.toggle("on", !!q);
  $("#regionInfo").innerHTML = q
    ? "关键词「<b>" + q + "</b>」匹配 <b>" + hits + "</b> 个城市"
    : "已收录 <b>" + DATA.length + "</b> 个省级行政区划分组 · <b>" + totalCities + "</b> 个城市，点击城市名进入注册公司.cn 对应频道";
}
function setFilter(v, scroll) {
  heroInput.value = v; regionInput.value = v;
  applyFilter(v);
  if (scroll) $("#region").scrollIntoView({ behavior: "smooth" });
}
regionInput.addEventListener("input", () => { heroInput.value = regionInput.value; applyFilter(regionInput.value); });
$("#resetBtn").onclick = () => setFilter("");

/* 联想下拉 */
const sg = $("#suggest");
function showSuggest(q) {
  q = (q || "").trim();
  if (!q) { sg.classList.remove("on"); return; }
  const items = [];
  DATA.forEach(g => g.c.forEach(([n]) => {
    if (n.includes(q) || (q.length > 1 && (n + g.p).includes(q)))
      items.push({ n, p: g.p });
  }));
  if (!items.length) { sg.classList.remove("on"); return; }
  sg.innerHTML = items.slice(0, 10).map(it =>
    '<div class="suggest-item" data-city="' + it.n + '"><span>🔎 ' + it.n + '公司注册</span><small>' + it.p + '</small></div>'
  ).join("");
  sg.classList.add("on");
}
heroInput.addEventListener("input", () => showSuggest(heroInput.value));
heroInput.addEventListener("focus", () => showSuggest(heroInput.value));
heroInput.addEventListener("keydown", e => { if (e.key === "Enter") { sg.classList.remove("on"); setFilter(heroInput.value, true); } });
heroInput.addEventListener("blur", () => setTimeout(() => sg.classList.remove("on"), 180));
sg.addEventListener("mousedown", e => {
  const it = e.target.closest(".suggest-item");
  if (it) { setFilter(it.dataset.city, true); flashCity(it.dataset.city); }
});
$("#heroBtn").onclick = () => { sg.classList.remove("on"); setFilter(heroInput.value, true); };

/* 高亮闪烁目标城市 */
function flashCity(name) {
  const c = document.querySelector('.city[data-name="' + name + '"]');
  if (!c) return;
  c.scrollIntoView({ behavior: "smooth", block: "center" });
  c.classList.remove("flash"); void c.offsetWidth; c.classList.add("flash");
}

/* 热门城市 & 热词点击 */
document.querySelectorAll(".hotcity").forEach(el =>
  el.addEventListener("click", () => { setFilter(el.dataset.city, true); flashCity(el.dataset.city); })
);
document.querySelectorAll(".hot-tags button").forEach(el =>
  el.addEventListener("click", () => { setFilter(el.dataset.city, true); flashCity(el.dataset.city); })
);

/* 初始 */
applyFilter("");
