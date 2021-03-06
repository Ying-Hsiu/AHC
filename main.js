var AHC = /** @class */ (function () {
    function AHC() {
        this.setData();
        this.selectTpl =
            "\n        <div class=\"word\">\n            <select id=\"inputState\" class=\"form-control\">\n                <option value=\"name\"> \u4EBA\u540D</option>\n                <option value=\"location\"> \u5730\u9EDE</option>\n                <option value=\"action\"> \u52D5\u4F5C</option>\n                <option value=\"object\"> \u9053\u5177</option>\n            </select>\n        </div>\n        ";
    }
    AHC.prototype.init = function () {
        this.selectQuestionTpl = "";
        for (var i = 0; i < this.questions.length; i++) {
            this.selectQuestionTpl += "<option value=\"" + i + "\">" + this.questions[i].replace(/\$value/g, "____") + "</option>";
        }
        document.querySelector("#selectQuestion").innerHTML = this.selectQuestionTpl;
        this.getQuestion();
    };
    AHC.prototype.setQuestion = function () {
        var question = "";
        this.question = this.questions[$("#selectQuestion").val()];
        question = this.question.replace(/\$value/g, this.selectTpl);
        document.querySelector("#question").innerHTML = question;
    };
    AHC.prototype.getQuestion = function () {
        var question = "";
        this.question = this.questions[Math.random() * this.questions.length | 0];
        question = this.question.replace(/\$value/g, this.selectTpl);
        document.querySelector("#question").innerHTML = question;
    };
    AHC.prototype.getResult = function () {
        var tmpWord = "";
        var s_type;
        var type;
        var list = $(".word");
        this.result = this.question;
        for (var i = 0; i < list.length; i++) {
            type = $(list[i]).find("select").val();
            tmpWord = "<span>" + this.words[type][Math.random() * this.words[type].length | 0] + "</span>";
            this.result = this.result.replace(/\$value/i, tmpWord);
        }
        document.querySelector("#result").innerHTML = this.result;
    };
    AHC.prototype.setData = function () {
        this.questions =
            [
                "俏如來從懷中取出了$value。",
                "默蒼離：安靜，吾在$value。",
                "$value醒醒吧！你根本沒有$value。",
                "江湖在走，$value要有。",
                "在新一集的劇情裡，$value會發現$value其實一直是$value。",
                "$value對$value深情的說：「我們來一發吧。」",
                "默蒼離對$value說：「我想$value。」",
                "慕容寧在此宣布$value $value 。",
                "夢虯孫對$value說，「跨丟鬼，放下那個$value 。」",
                "缺舟站在$value吹笛，心裡想著：「$value。」",
                "$value只是跟$value在MOTEL 裡$value。",
                "$value一不小心滑進了$value。",
                "每個晚上，$value都是吃$value當晚餐。",
                "為了$value的和諧，$value從小就學習$value。",
                "$value 的靈魂深處就是一個$value。",
                "信$value，得永生。",
                "用$value發電。",
                "真正的性感的是$value。",
                "中原人喜歡$value。",
                "整個$value 都是我的$value。",
                "跟$value 出去，一定要準備好$value。",
                "$value今日活動: $value一日餵食秀。",
                "墨家人最厲害的就是$value。",
                "第三屆天下風雲碑將使用$value當武器。",
                "中苗大戰爆發是因為$value。",
                "世事無常，只求一點$value。",
                "不小心得罪$value，只好送$value去賠罪了。",
                "敬$value，乾杯！",
                "吾一向以$value待人。",
                "$value決定投入巨資研究$value。",
                "我喜歡$value的第一步。",
                "$value是個真正的$value。",
                "$value在看了$value之後，就解開了九界的秘密。",
                "人只要$value，就不怕沒機會。",
                "$value扮演著$value的角色。",
                "樓上的$value很喜歡$value，總是製造很大的聲音。",
                "經歷$value的日子，$value已經生活無法自理了 。",
                "地方的$value需要$value。",
                "戰爭的好處是可以消滅$value。",
                "$value歡樂送!這是您點的 $value。",
                "身為一個$value，隨身攜帶$value是很正常的。",
                "過了 50歲，$value開始相信$value。",
                "凰后的下一本同人誌主題是$value的$value。",
                "黑水城研究指出:交換禮物的最好選擇是$value 。",
                "$value紓壓的方法是$value。",
                "$value喜歡和$value一起$value。",
                "在充滿$value的世界，只有$value是我們唯一的安慰。",
                "少時不讀書，⾧大當$value!",
                "$value總是在我心情低落時，給我$value。",
                "蒼狼在$value發現$value在$value。",
                "天空黑暗到一定程度，$value就會$value。",
                "生活充滿了$value，而$value就是一切。",
                "一個$value勝過兩個$value。",
                "人生的意義就在於$value。",
                "$value= $value+$value。"
            ];
        this.words = {
            "name": [
                "俏如來",
                "黑白郎君",
                "千雪孤鳴",
                "玄之玄",
                "撼天闕",
                "廢蒼生",
                "宮本總司",
                "紅翎",
                "鬼夜丸",
                "鴆罌粟",
                "鐵驌求衣",
                "缺舟",
                "公子開明",
                "路人",
                "慕容煙雨",
                "靈尊",
                "梅若馨",
                "真神",
                "金剛尊",
                "默蒼離",
                "天兵君",
                "鳳蝶",
                "史豔文",
                "夙",
                "大匠師",
                "慕容府劍奴",
                "阿鼻尊",
                "北冥殤",
                "李劍詩",
                "風逍遙",
                "大智慧",
                "飛淵",
                "我",
                "慕容寧",
                "玲瓏雪霏",
                "諸葛窮",
                "腳仔王",
                "小玉",
                "杏花",
                "岳靈休",
                "元邪皇",
                "雁王",
                "鱗王",
                "劍無極",
                "櫻吹雪",
                "愛靈靈",
                "北冥縝",
                "別小樓",
                "天海光流",
                "念荼羅",
                "清伯",
                "豬隊友",
                "慕容勝雪",
                "無情葬月",
                "六隱神鏃",
                "燕駝龍",
                "硯寒清",
                "藏鏡人",
                "七巧",
                "銀燕",
                "欲星移",
                "赤羽信之介",
                "朧三郎",
                "戀紅梅",
                "北冥華",
                "蒼狼",
                "邪馬台笑",
                "一步禪空",
                "春桃",
                "九冥殺神",
                "梁皇無忌",
                "荻花題葉",
                "嘆悲歡",
                "玄狐",
                "落拓子",
                "神蠱溫皇",
                "凰后",
                "小空 (戮世魔羅)",
                "鍛神鋒",
                "中原群俠",
                "木魅",
                "月牙嵐",
                "北冥異",
                "競日孤鳴",
                "小七",
                "錦煙霞",
                "妖道角",
                "煞魔子",
                "莫前塵",
                "女暴君",
                "風間始",
                "常欣"
            ],
            "location": [
                "正氣山莊",
                "伏羲深淵",
                "苗疆王宮",
                "迴森崗",
                "龍涎口",
                "神蠱峰",
                "茅房",
                "魔門世家",
                "泣血邪魔洞",
                "殘忍聯盟",
                "天允山",
                "靈界",
                "萬里邊城",
                "苗王宮後花園",
                "奧莊頭",
                "鬼祭貪魔殿",
                "客棧",
                "暗幽林",
                "埋霜小樓",
                "背骨囡仔聯盟",
                "九脈峰",
                "血色琉璃樹",
                "天劍慕容府",
                "麒麟會",
                "凰后的化妝間",
                "鋒海",
                "月凝灣",
                "龍虎山",
                "試吃官小廚房",
                "魔世",
                "銀槐鬼市",
                "落花隨緣莊",
                "金雷村",
                "鱗王的房間",
                "梅香塢",
                "羽國",
                "天擎峽",
                "沐雪村",
                "道域",
                "尚賢宮",
                "不夜長河",
                "黑水城",
                "魍魎棧道",
                "烏龜教",
                "鐵軍衛",
                "沉淪海",
                "西劍流",
                "浪辰臺",
                "尚同會",
                "巧木宮",
                "佛國",
                "不悔峰",
                "還珠樓",
                "北競王府",
                "伏羲深淵",
                "東劍道"
            ],
            "action": [
                "烤蛤蜊",
                "鑄劍",
                "吃滷蛋",
                "睡覺",
                "拉贊助",
                "買兇",
                "卡哩卡扣扣",
                "擼貓",
                "想要靜靜(在隔壁棚)",
                "共撐一傘",
                "念經",
                "閃到腰",
                "翻桌",
                "播種",
                "思考人生",
                "失態",
                "剝香蕉",
                "兄弟鬩牆",
                "深蹲",
                "放高利貸",
                "練等",
                "滾床單",
                "刷副本",
                "開車",
                "地上打滾",
                "灑狗糧",
                "泡溫泉",
                "組樂團",
                "創業",
                "裝死",
                "做人失敗",
                "煮火鍋",
                "綁辮子",
                "拾金不昧",
                "蓋棉被聊天",
                "發紅包",
                "寫作業",
                "穿越到霹靂世界",
                "吹蔥",
                "和哥吉拉打架",
                "做死",
                "死線趕稿",
                "踩香蕉皮",
                "摸八圈",
                "洗澡",
                "取材",
                "打麻將",
                "借酒澆愁",
                "找WiFi",
                "決鬥",
                "收垃圾",
                "做全套護髮",
                "轉生成史萊姆",
                "看本本",
                "偷窺",
                "喝亡命水",
                "課金",
                "覺得無法呼吸",
                "跳艷舞",
                "寫本子",
                "覺得今天的自己還是一樣帥",
                "聚餐",
                "拉皮條",
                "放三途蠱",
                "資源回收",
                "在逍遙天賭一把",
                "召喚英靈",
                "做女紅",
                "放下屠刀",
                "參加布翁",
                "按摩",
                "週年慶採購",
                "取材",
                "跳廣場舞",
                "釣魚",
                "喝茶",
                "打太極",
                "開Patry",
                "爆衣",
                "澆灌幽熒",
                "開刀",
                "拉燈",
                "引體向上",
                "伏地挺身",
                "仰臥起坐",
                "泡茶",
                "阿彌陀佛",
                "破你西瓜",
                "追隨大智慧",
                "日你魄門",
                "齊天壽甲",
                "阿們",
                "這批有點純"
            ],
            "object": [
                "羽國志異",
                "紫金缽",
                "魔之甲",
                "桂花蜜",
                "蚌殼",
                "阿舟大禮包",
                "斷雲石",
                "廣澤寶塔",
                "凰后的馬甲",
                "大爺的公主頭",
                "寧叔的鐵扇",
                "女裝",
                "青椒",
                "俏哥的佛珠",
                "墨狂",
                "硯寒清的瀏海",
                "海王戟",
                "大白鵝",
                "風月無邊",
                "手指虎",
                "織命針",
                "蓮花跑車",
                "王座",
                "兔耳",
                "百里聞香",
                "iPad",
                "金湯匙",
                "幽靈馬車",
                "落拓子的帽子",
                "裸體圍裙",
                "亡命水",
                "閻王翎",
                "九龍天書",
                "正氣山莊地契",
                "藏仔的面具",
                "晶珠涼",
                "滄海珍瓏",
                "佛履",
                "輪椅",
                "藏仔的盾牌",
                "天魔真經",
                "澈魂精粹",
                "文殊",
                "狼王爪",
                "蜂蜜檸檬",
                "風雲碑",
                "夢幻泡影",
                "腦洞",
                "小夥伴",
                "無根水",
                "鬼市週年慶",
                "十年老福特",
                "單身咒",
                "那一場雨",
                "鼻孔大",
                "奶娃",
                "天運",
                "鉅子舌"
            ]
        };
    };
    Object.defineProperty(AHC.prototype, "questions", {
        get: function () {
            return this._questions;
        },
        set: function (questions) {
            this._questions = questions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AHC.prototype, "words", {
        get: function () {
            return this._words;
        },
        set: function (words) {
            this._words = words;
        },
        enumerable: true,
        configurable: true
    });
    return AHC;
}());
