const worldData = {
    "1年": ["约定俗成的耶稣基督诞生，基督教的起源。"],
    "2年": ["罗马皇帝奥古斯都统治罗马帝国，推广了平民政治权利和社会改革。"],
    "3年": ["印度的贵霜帝国建立，后来发展成为佛教艺术的中心。"],
    "4年": ["奥古斯都实行罗马帝国的普遍大赦。"],
    "5年": ["奥古斯都创建罗马帝国的粮食供应制度。"],
    "6年": ["犹太地区的犹太国被并入罗马帝国。"],
    "7年": ["南亚印度次大陆的孔雀王朝建立。"],
    "8年": ["罗马诗人奥维德完成《变形记》，是古罗马最重要的叙事体诗之一。"],
    "9年": ["条顿人在条顿堡森林战役中，击败罗马军队，使得罗马帝国放弃征服日耳曼地区。"],
    "10年": ["中国东汉朝廷设立西域都护府。"],
    "11年": ["提比略从罗马帝国的罗德岛回到罗马。"],
    "12年": ["提比略被任命为共和国元老院的元老。"],
    "13年": ["奥古斯都任命提比略为执政官，确立他为继任皇帝。"],
    "14年": ["罗马皇帝奥古斯都去世，提比留接任皇帝。"],
    "15年": ["提比略将罗马军队派往日耳曼地区进行报复性攻击。"],
    "16年": ["提比略继续加强罗马帝国在日耳曼地区的军事行动。"],
    "17年": ["中国东汉帝国收复西域。"],
    "18年": ["提比略任命日耳曼尼库斯为罗马帝国的执政官。"],
    "19年": ["日耳曼尼库斯在亚洲小陆死于一场意外。"],
    "20年": ["埃及亚历山大港的塞拉皮翁神庙落成。"],
    "21年": ["提比略任命德拉乌素为罗马帝国的执政官。"],
    "22年": ["提比略在罗马帝国设立了一所顶级法学院。"],
    "23年": ["提比略的长子德鲁苏斯去世。"],
    "24年": ["中国东汉的王莽篡位，建立新朝。"],
    "25年": ["中国东汉的光武帝刘秀建立东汉王朝，结束王莽的短暂统治。"],
    "26年": ["提比略将罗马帝国的首都迁至意大利的卡普里岛。"],
    "27年": ["提比略继续在卡普里岛上统治罗马帝国。"],
    "28年": ["提比略采取严格的审查制度，限制元老院的权力。"],
    "29年": ["提比略的母亲利维亚去世。"],
    "30年": ["耶稣基督被钉死在十字架上，基督教的形成。"],
    "31年": ["提比略派遣塞贾努斯镇压一场军事叛乱。"],
    "32年": ["提比略在卡普里岛继续加强对罗马帝国的统治。"],
    "33年": ["提比略任命纳耳瓦为罗马帝国的执政官。"],
    "34年": ["提比略在卡普里岛加强对罗马帝国的监控。"],
    "35年": ["提比略继续在卡普里岛上统治罗马帝国。"],
    "36年": ["提比略任命尼禄为罗马帝国的执政官。"],
    "37年": ["提比略去世，卡利古拉成为罗马皇帝。"],
    "38年": ["卡利古拉开始大量建设工程，包括扩建奥古斯都皇家宫殿。"],
    "39年": ["卡利古拉实行严格的财政政策，加强对罗马财政的控制。"],
    "40年": ["卡利古拉在高卢地区进行军事行动。"],
    "41年": ["卡利古拉遇刺身亡，克劳狄乌斯成为罗马皇帝。"],
    "42年": ["克劳狄乌斯在英吉利海峡建立了一座桥梁。"],
    "43年": ["克劳狄乌斯征服不列颠，将其纳入罗马帝国。"],
    "44年": ["克劳狄乌斯改革罗马税收制度。"],
    "45年": ["克劳狄乌斯实行土地改革，分配土地给罗马平民。"],
    "46年": ["克劳狄乌斯在罗马帝国的边境设立了军事要塞。"],
    "47年": ["克劳狄乌斯在高卢地区设立了罗马帝国的省份。"],
    "48年": ["克劳狄乌斯的妻子梅塞利纳因通奸被赐死。"],
    "49年": ["克劳狄乌斯与阿古丽皮娜结婚。"],
    "50年": ["中华地区的东汉王朝统治者光武帝刘秀将都城迁至洛阳。"],
    "51年": ["尼禄被任命为罗马帝国的执政官。"],
    "52年": ["克劳狄乌斯发起对亚美尼亚的军事行动。"],
    "53年": ["克劳狄乌斯建立罗马帝国在摩里塔尼亚的省份。"],
    "54年": ["克劳狄乌斯去世，尼禄继位成为罗马皇帝。"],
    "55年": ["尼禄下令杀害他的兄弟布里塔尼库斯，巩固自己的权力。"],
    "56年": ["尼禄开始大规模建设罗马城。"],
    "57年": ["罗马帝国征服亚美尼亚，将其变为附庸国。"],
    "58年": ["尼禄派遣军队攻击帕提亚帝国。"],
    "59年": ["尼禄下令杀害他的母亲阿古丽皮娜。"],
    "60年": ["不列颠的女王布迪卡领导起义反抗罗马帝国统治。"],
    "61年": ["布迪卡起义被罗马军队镇压。"],
    "62年": ["尼禄的妻子普珀亚去世。"],
    "63年": ["罗马帝国与帕提亚帝国达成和平协议。"],
    "64年": ["罗马大火，尼禄被指责纵火以便进行城市改造。"],
    "65年": ["尼禄开始迫害基督教徒。"],
    "66年": ["犹太战争爆发，犹太人反抗罗马统治。"],
    "67年": ["尼禄派遣维斯帕先到犹太平定叛乱。"],
    "68年": ["尼禄自杀，罗马帝国发生年度四皇帝事件。"],
    "69年": ["四皇帝之年，维特里乌斯、奥托、加尔巴和维斯帕先相继成为皇帝。维斯帕先最终胜出。"],
    "70年": ["维斯帕先征服耶路撒冷，犹太战争结束。"],
    "71年": ["维斯帕先开始建设罗马斗兽场。"],
    "72年": ["维斯帕先开始修建提庇略浴场。"],
    "73年": ["犹太战争最后一座堡垒玛撒达陷落。"],
    "74年": ["维斯帕先在班诺尼亚设立罗马帝国的新省份。"],
    "75年": ["维斯帕先改革罗马法律和税收制度。"],
    "76年": ["维斯帕先扩大罗马帝国的道路系统。"],
    "77年": ["维斯帕先去世，他的儿子提图斯继位。"],
    "78年":["提图斯开始对不列颠的征服，罗马军队进入现代英格兰和威尔士地区。"],
    "79年": ["庞贝古城被维苏威火山喷发所摧毁；提图斯去世，其弟弟多米itian继位。"],
    "80年": ["罗马斗兽场竣工。"],
    "81年": ["多米itian建立了市政府，重新规划罗马城市。"],
    "82年": ["多米itian在英格兰北部修建了哈德良长城的前身。"],
    "83年": ["多米itian扩大罗马帝国的边界，将阿尔卑斯山纳入罗马版图。"],
    "84年": ["多米itian在多瑙河边界设立罗马帝国的防线。"],
    "85年": ["多米itian进行货币改革，提高金币的纯度。"],
    "86年": ["多米itian重新征服达基亚。"],
    "87年": ["多米itian在埃及建立了一座新的城市，并命名为安提诺波里斯。"],
    "88年": ["多米itian派遣军队攻击马可马尼，失败后撤军。"],
    "89年": ["多米itian加强对德国边界的防御。"],
    "90年": ["多米itian在非洲建立了新的城市， 并加强对北非的控制。"],
    "91年": ["多米itian改革罗马教育制度，推动文化发展。"],
    "92年": ["多米itian镇压了一场由军事将领发起的叛乱。"],
    "93年": ["多米itian开始迫害基督教徒和犹太教徒。"],
    "94年": ["多米itian严格审查罗马元老院，削弱其权力。"],
    "95年": ["约翰福音和启示录作者约翰被流放到帕特摩斯岛。"],
    "96年": ["多米itian遇刺身亡，纳尔瓦继位。"],
    "97年": ["纳尔瓦实行温和政策，恢复罗马元老院的权力。"],
    "98年": ["纳尔瓦去世，图拉真继位。"],
    "99年": ["图拉真开始对达基亚的征服，扩大罗马帝国的疆域。"],
    "100年": ["罗马帝国修建图拉真柱，庆祝对达基亚的胜利。"],
    "101年": ["图拉真再次发动战争征服达基亚。"],
    "102年": ["罗马帝国与达基亚达成和平协议。"],
    "103年": ["图拉真开始对亚美尼亚的征服。"],
    "104年": ["图拉真将罗马帝国扩展至两河流域。"],
    "105年": ["图拉真在阿拉伯建立罗马帝国的省份。"],
    "106年": ["图拉真征服纳巴泰亚，将其并入罗马帝国。"],
    "107年": ["图拉真修建图拉真温泉。"],
    "108年": ["图拉真在罗马帝国设立法官制度。"],
    "109年": ["图拉真对罗马法律进行改革。"],
    "110年": ["图拉真在东部边境修建防御工事。"],
    "111年": ["图拉真在罗马帝国设立图书馆，推动文化发展。"],
    "112年": ["图拉真在罗马帝国实行税收改革。"],
    "113年": ["图拉真开始征服帕提亚。"],
    "114年": ["图拉真占领亚美尼亚和美索不达米亚。"],
    "115年": ["图拉真进攻帕提亚首都泰西封。"],
    "116年": ["图拉真攻占帕提亚首都，罗马帝国疆域达到最大范围。"],
    "117年": ["图拉真去世，哈德良继位。"],
    "118年": ["哈德良在罗马帝国实行宽政，撤军美索不达米亚。"],
    "119年": ["哈德良在罗马建立了哈德良神庙。"],
    "120年": ["哈德良开始对罗马帝国进行巡视。"],
    "121年": ["哈德良在不列颠修建哈德良长城。"],
    "122年": ["哈德良在埃及访问亚历山大大帝的墓。"],
    "123年": ["哈德良继续在罗马帝国进行巡视，改善基础设施。"],
    "124年": ["哈德良访问希腊，受到热烈欢迎。"],
    "125年": ["哈德良在雅典建立图书馆。"],
    "126年": ["哈德良回到罗马，修建哈德良别墅。"],
    "127年": ["哈德良对罗马法律进行改革。"],
    "128年": ["哈德良在罗马建立哈德良阿尔克。"],
    "129年": ["哈德良再次访问希腊。"],
    "130年": ["哈德良访问耶路撒冷，为犹太教徒兴建神殿。"],
    "131年": ["犹太教徒爆发巴尔科克巴起义。"],
    "132年": ["哈德良镇压巴尔科赫巴起义。"],
    "133年": ["哈德良将耶路撒冷改名为阿利亚卡皮托丽娜。"],
    "134年": ["哈德良对罗马帝国省份进行行政改革。"],
    "135年": ["巴尔科赫巴起义被彻底镇压，犹太教徒被流放。"],
    "136年": ["哈德良在罗马帝国推广地中海文化。"],
    "137年": ["哈德良任命安东尼乌斯·皮乌斯为罗马帝国共治皇帝。"],
    "138年": ["哈德良去世，安东尼乌斯·皮乌斯继位。"],
    "139年": ["皮乌斯将皇宫图书馆向公众开放。"],
    "140年": ["安东尼乌斯·皮乌斯开始修建安东尼神庙。"],
    "141年": ["罗马帝国进行税收改革。"],
    "142年": ["安东尼乌斯·皮乌斯开始修建阿格里帕纳神庙。"],
    "143年": ["罗马帝国进行军事改革。"],
    "144年": ["安东尼乌斯·皮乌斯加强对边境的防御。"],
    "145年": ["罗马帝国与帕提亚达成和平协议。"],
    "146年": ["安东尼乌斯·皮乌斯对罗马法律进行改革。"],
    "147年": ["罗马帝国进行行政改革。"],
    "148年": ["皮乌斯举行庆祝罗马建城900周年的盛大庆典。"],
    "149年": ["罗马帝国对西班牙和不列颠的土地进行开发。"],
    "150年": ["罗马帝国实行货币改革。"],
    "151年": ["皮乌斯在罗马帝国设立法官制度。"],
    "152年": ["罗马帝国对北非的土地进行开发。"],
    "153年": ["罗马帝国与亚美尼亚达成和平协议。"],
    "154年": ["安东尼乌斯·皮乌斯改革罗马教育制度。"],
    "155年": ["皮乌斯对罗马帝国进行基础设施改善。"],
    "156年": ["罗马帝国在尼罗河流域进行灌溉工程。"],
    "157年": ["安东尼乌斯·皮乌斯实行宽政，赦免犯人。"],
    "158年": ["罗马帝国进行农业改革。"],
    "159年": ["安东尼乌斯·皮乌斯加强对边境的防御。"],
    "160年": ["安东尼乌斯·皮乌斯任命马库斯·奥勒留为罗马帝国共治皇帝。"],
    "161年": ["安东尼乌斯·皮乌斯去世，马库斯·奥勒留继位。"],
    "162年": ["罗马帝国与帕提亚战争。"],
}

export default worldData