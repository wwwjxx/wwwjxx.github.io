(()=>{
  const css=document.createElement('style');
  css.textContent='.detail-analysis{margin-top:14px;background:#30211e;color:#fff3e9;border-radius:14px;padding:15px;overflow:auto}.detail-analysis-title{font-size:11px;color:#e4b9a9;letter-spacing:.1em;margin-bottom:12px}.analysis-grid{display:flex;gap:7px;overflow-x:auto;padding-bottom:4px}.analysis-unit{min-width:88px;text-align:center;padding:8px 7px;background:#412d28;border-radius:10px}.analysis-unit b{display:block;font-size:16px;color:#fff}.analysis-unit span{display:block;margin-top:5px;font-size:12px;color:#ffe0d0;white-space:normal}.analysis-unit i{display:block;margin-top:6px;font-size:11px;color:#e4b9a9;font-style:normal;line-height:1.35}.analysis-summary{border-top:1px solid #ffffff33;margin-top:13px;padding-top:11px;font-size:13px;line-height:1.65;color:#ffe7d8}.analysis-summary strong{color:#f4bca8}.analysis-grammar{margin-top:8px;padding:10px 11px;background:#fff6f0;color:#593c34;border-left:3px solid #d98d78;border-radius:8px;font-size:13px;line-height:1.6}.analysis-grammar b{color:#a34d45}@media(max-width:760px){.analysis-unit{min-width:78px}.detail-analysis{padding:13px}}';
  document.head.appendChild(css);
  const lexicon={떠나가:'离开、远去',떠나가요:'离开了（敬语）',파도처럼:'像波涛一样',부서진:'破碎的',내맘:'我的心（口语）',바람처럼:'像风一样',흔들리는:'摇曳的、动摇的',연기처럼:'像烟一样',사라진:'消失的',내:'我的',사랑:'爱情',문신처럼:'像纹身一样',지워지지:'无法被抹去',않아:'不、没有',한숨만:'只有叹息',땅이:'大地（主语）',꺼지라:'仿佛要塌陷般',쉬죠:'叹息吧（带委婉语气）',가슴속에:'在心中',먼지만:'只有灰尘',쌓이죠:'堆积着（带共感语气）',그녀가:'她（主语）',나는:'我（主语）',아무것도:'什么都',할:'做（定语形）',수는:'能够……（强调范围）',없어요:'没有、不能（敬语）',사랑이:'爱情（主语）',바보처럼:'像傻瓜一样',멍하니:'呆呆地',서있네요:'站着呢（带感叹）',멀어지는:'渐行渐远的',뒷모습만을:'只有背影（宾语）',바라보다:'望着、凝望',작은:'小的',점이:'点（主语）',되어:'变成、成为',사라진다:'消失',시간이:'时间（主语）',지나면:'经过以后',옛:'往日的',생각이:'想法、回忆（主语）',니:'你（口语）',아직:'还、仍然',너무:'太、非常',늦지:'不迟',않았다면:'如果没有……',우리:'我们',다시:'再次、重新',돌아갈:'回去（定语形）',수는:'能够……（强调）',없을까:'难道不能……吗',너도:'你也',나와:'和我',같이:'一起、一样',힘들다면:'如果痛苦的话',조금:'一点、稍微',쉽게:'轻松地、容易地',갈:'去（定语形）',있을:'在、存在（定语形）',때:'时候',잘할:'做得好、好好珍惜',걸:'本来应该……的（后悔）',그랬어:'那样做了（后悔结尾）',그대는:'你（较抒情）',어떤가요:'怎么样呢',정말:'真的',아무렇지:'若无其事',않은:'不……的',건가요:'是……吗（确认）',이별이:'离别（主语）',지나봐요:'似乎经过了',그댈:'你（宾语缩略）',잊어야:'必须忘记',하지만:'但是',쉽지가:'并不容易',않네요:'并不是呢（感叹）',누군갈:'某个人（宾语缩略）',만나면:'如果遇见、交往的话',위로가:'安慰（主语）',될까:'会成为吗、能否',오늘같이:'像今天这样',가녀린:'纤细的、细弱的',비가:'雨（主语）',내리는:'下着的',날이면:'如果是这样的日子',너의:'你的',그림자가:'影子（主语）',떠오르고:'浮现并且',서랍:'抽屉',속에:'在里面',몰래:'偷偷地',넣어둔:'放进去保存着的',우리의:'我们的',추억을:'回忆（宾语）',꺼내:'取出',홀로:'独自',회상하고:'回想并且',헤어짐이란:'所谓分手',슬픔의:'悲伤的',무게를:'重量（宾语）',난:'我（主题缩略）',왜:'为什么',몰랐을까:'当时怎么会不知道呢',외톨이:'孤独者',센:'强硬的、逞强的',척하는:'假装……的',겁쟁이:'胆小鬼',못된:'坏的、恶劣的',양아치:'坏蛋、不良少年',거울:'镜子',속에:'在里面',넌:'你（主题缩略）',상처뿐인:'只有伤痕的',머저리:'笨蛋',더러운:'肮脏的',쓰레기:'垃圾',솔직히:'坦白地说',세상과:'和世界',어울린:'合得来过的',적:'经历',없어:'没有',홀로였던:'曾经孤独的',사랑따윈:'所谓爱情之类',벌써:'早就',잊혀진지:'被遗忘已经……',오래:'很久',저:'那、那个',시간속에:'在时间中',더이상은:'再也、进一步',못:'不能',듣겠어:'听得下去',희망찬:'充满希望的',사랑노래:'情歌',너나:'你也好我也好',나나:'我也好',그저:'只是、不过',길들여진:'被驯服、被设定的',대로:'按照……的样子',각본:'剧本',놀아나는:'被摆布、被戏弄的',슬픈:'悲伤的',삐에로:'小丑',난:'我（主题缩略）',멀리:'远处',와버렸어:'已经来到（带遗憾）',이제:'现在',돌아갈래:'我要回去',어릴:'年幼的',적:'时候',제자리로:'回到原位',언제부턴가:'不知从何时起',하늘보다:'比天空',땅을:'大地（宾语）',더:'更、更加',바라보게:'变得去看、开始看',돼:'变成、成为',숨쉬기조차:'连呼吸都',힘겨워:'很艰难',손을:'手（宾语）',뻗지만:'虽然伸出',그누구도:'任何人都',날:'我（宾语缩略）',잡아:'抓住',주질:'给、为我做（缩略）',않네:'没有呢（感叹）',반복되는:'反复发生的',여자들과의:'和女人们之间的',실수:'失误',하룻밤을:'一个晚上（宾语）',사랑하고:'爱过并且',해뜨면:'太阳升起的话',싫증:'厌烦',책임지지:'不负责',못할:'无法做到的',이기적인:'自私的',기쁨:'快乐',하나땜에:'只因为一个',모든것이:'一切事物（主语）',망가져버린:'彻底毁掉的',지금:'现在',멈출:'停止（定语形）',줄:'方法、道理',모르던:'曾不知道的',위험한:'危险的',질주:'疾走、狂奔',아무런:'任何的',감흥도:'兴趣也',재미도:'趣味也',없는:'没有的',기분:'心情',벼랑끝에:'在悬崖边',사람들의:'人们的',시선을:'视线（宾语）',두려워만:'只是害怕',해:'做、感到',우는:'哭的',것조차:'连……这件事都',지겨워:'厌烦',웃어보지만:'虽然试着笑',그아무도:'任何人都',알아주질:'理解、认可（缩略）',파란:'蔚蓝的',저하늘을:'那片天空（宾语）',원망하지:'埋怨、不埋怨',가끔:'有时',내려놓고:'放下并且',싶어져:'变得想要',이길의:'这条路的',끝에:'在尽头',방황이:'彷徨（主语）',끝나면:'结束的话',부디:'务必、恳请',후회없는:'没有遗憾的',채로:'保持……状态',두눈:'双眼',감을:'闭上（定语形）',있길:'希望能够'};
  function meaning(w){if(lexicon[w])return lexicon[w];try{if(meanings[w])return meanings[w]}catch(e){}if(w.endsWith('처럼'))return '像……一样';if(w.endsWith('잖아'))return '不是……吗（强调）';if(w.endsWith('기에'))return '因为……';if(w.endsWith('지만'))return '但是、虽然';if(w.endsWith('다면'))return '如果……的话';if(w.endsWith('지'))return '语气词/疑问';if(w.endsWith('고'))return '连接动作';if(w.endsWith('다'))return '句末陈述';return '词义：结合这句的动作或状态'}
  function hint(w,x){if(w.includes('처럼'))return '名词 + 처럼：比喻';if(w.includes('잖아'))return '-잖아：强调共知事实';if(w.includes('기에'))return '-기에：原因';if(w.includes('지만'))return '-지만：转折';if(w.includes('다면'))return '-다면：假设条件';if(w.includes('걸 그랬어'))return '걸 그랬어：后悔';if(w.includes('척'))return '척하다：假装';if(w.includes('수록'))return '-ㄹ수록：越……越……';if(w.includes('게 돼'))return '-게 되다：变得……';if(w.endsWith('을')||w.endsWith('를'))return '-을/를：宾语';if(w.endsWith('은')||w.endsWith('는'))return '-은/는：定语';return '本句核心成分：承接前后信息，具体作用结合整句理解。'}
  function explanation(x){if(x.ko.includes('하루하루'))return '重复的 하루하루（一天一天）形成时间推进感；무뎌져 가네 表示感情正在逐渐变麻木。';if(x.ko.includes('늦지 않았다면'))return '늦지 않다 是“不迟”，-다면 把愿望设成条件：“如果还不算太迟”。';if(x.ko.includes('외톨이'))return '외톨이 是“孤独者”，和 겁쟁이（胆小鬼）并列，构成对自己的连续定义。';if(x.ko.includes('거짓말'))return '거짓말 是“谎言”；다 거짓말 把整段感情概括为“一切都是谎言”。';if(x.ko.includes('떠나'))return '떠나다 是“离开”，떠나가다 强调离开并远去；歌词中反复出现，形成请求和告别。';return '本句先抓住主干，再看词尾如何补充时间、原因、条件或语气。'}
  window.strip=function(x){const words=x.ko.split(/\s+/).filter(Boolean);return `<div class="detail-analysis"><div class="detail-analysis-title">逐句精读 · 词语拆分 / 语法作用</div><div class="analysis-grid">${words.map(w=>`<div class="analysis-unit"><b>${w}</b><span>${meaning(w)}</span><i>${hint(w,x)}</i></div>`).join('')}</div><div class="analysis-summary"><strong>整句理解：</strong>${x.zh}<div class="analysis-grammar"><b>本句结构：</b>${explanation(x)}</div></div></div>`};
  function pronunciationUnits(p){const out=[],s=p.replace(/\s+/g,'');let latin='';for(const c of [...s]){if(/[A-Za-z0-9'’-]/.test(c)){latin+=c}else{if(latin){out.push(latin);latin=''}out.push(c)}}if(latin)out.push(latin);return out}
  function aligned(k,p){const a=[...k].filter(x=>x.trim()),b=pronunciationUnits(p);return '<div class="chars">'+a.map((x,i)=>'<span><b>'+x+'</b><i>'+(b[i]||'')+'</i></span>').join('')+'</div>'}
  window.strip=function(x){const ws=x.ko.split(/\s+/).filter(Boolean),ps=x.py.split(/\s*\/\s*|\s+/).filter(Boolean);return '<div class="strip"><div class="strip-title">逐词精读 · 韩文 / 谐音逐音节对齐</div><div class="ann">'+ws.map((w,i)=>'<div class="unit">'+aligned(w,ps[i]||w)+'<em>'+meaning(w)+'</em><div class="dot"></div><div class="grammar">'+hint(w,x)+'</div></div>').join('')+'</div><div class="under"><b>整句理解：</b>'+x.zh+'<br><span>'+explanation(x)+'</span></div></div>'};
  const detailedStrip=window.strip;
  window.strip=function(x){if(x.tag==='英文')return '<div class="reading"><div class="reading-title">英文歌词 · 保留原句，不做词汇和语法拆解</div></div>';return detailedStrip(x)};
  function specificHint(w,x){
    const line=x.ko, key=line+'|'+w;
    const exact={
      '우리 다시 돌아갈 수는 없을까|우리':'主语：我们',
      '우리 다시 돌아갈 수는 없을까|다시':'副词：重新',
      '우리 다시 돌아갈 수는 없을까|돌아갈':'定语形：修饰“可能”',
      '우리 다시 돌아갈 수는 없을까|수는':'可能性：能不能（强调）',
      '우리 다시 돌아갈 수는 없을까|없을까':'反问：难道不能回去吗',
      '우리 조금 쉽게 갈 수는 없을까|우리':'主语：我们',
      '우리 조금 쉽게 갈 수는 없을까|조금':'副词：稍微',
      '우리 조금 쉽게 갈 수는 없을까|쉽게':'副词：轻松地',
      '우리 조금 쉽게 갈 수는 없을까|갈':'定语形：修饰“可能”',
      '우리 조금 쉽게 갈 수는 없을까|없을까':'反问：难道不能吗',
      '아직 너무 늦지 않았다면|아직':'时间：还、仍然',
      '아직 너무 늦지 않았다면|너무':'程度：太、非常',
      '아직 너무 늦지 않았다면|늦지':'否定：不迟',
      '아직 너무 늦지 않았다면|않았다면':'假设：如果不……',
      '있을 때 잘할 걸 그랬어|있을':'定语形：在……时',
      '있을 때 잘할 걸 그랬어|때':'时间：……的时候',
      '있을 때 잘할 걸 그랬어|잘할':'定语形：本应好好做',
      '있을 때 잘할 걸 그랬어|걸':'名词化：本应做的事',
      '있을 때 잘할 걸 그랬어|그랬어':'后悔：当时该这样做',
      '또 나를 찾지 말고 살아가라|또':'副词：又、再',
      '또 나를 찾지 말고 살아가라|나를':'宾语：我',
      '또 나를 찾지 말고 살아가라|찾지':'찾다 + -지：不要找',
      '또 나를 찾지 말고 살아가라|말고':'-지 말고：不要……而要……',
      '또 나를 찾지 말고 살아가라|살아가라':'命令：继续生活吧',
      '돌아보지 말고 떠나가라|돌아보지':'돌아보다 + -지 말고：不要回头',
      '돌아보지 말고 떠나가라|말고':'-지 말고：不要……而要……',
      '돌아보지 말고 떠나가라|떠나가라':'命令：离开吧',
      '너를 사랑했기에 후회 없기에|너를':'宾语：你',
      '너를 사랑했기에 후회 없기에|사랑했기에':'过去 + -기에：因为爱过',
      '너를 사랑했기에 후회 없기에|후회':'后悔',
      '너를 사랑했기에 후회 없기에|없기에':'없다 + -기에：因为没有',
      '좋았던 기억만 가져가라|좋았던':'过去定语：曾经美好的',
      '좋았던 기억만 가져가라|기억만':'-만：只有回忆',
      '좋았던 기억만 가져가라|가져가라':'命令：带走吧',
      '그럴수록 행복해야돼|그럴수록':'越是那样',
      '그럴수록 행복해야돼|행복해야돼':'必须幸福',
      '네 옆에 있는 그 사람이 뭔지|네':'所属：你的',
      '네 옆에 있는 그 사람이 뭔지|옆에':'地点：在身边',
      '네 옆에 있는 그 사람이 뭔지|있는':'定语：存在于……的，修饰“那个人”',
      '네 옆에 있는 그 사람이 뭔지|그':'指示：那个',
      '네 옆에 있는 그 사람이 뭔지|사람이':'主语：那个人',
      '네 옆에 있는 그 사람이 뭔지|뭔지':'嵌入疑问：是什么'
    };
    if(exact[key])return exact[key];
    if(w==='수는'||w==='수')return '可能性：能不能（强调）';
    if(w.endsWith('을까')||w.endsWith('ㄹ까'))return '-(으)ㄹ까：疑问/自问';
    if(w.includes('처럼'))return '-처럼：像……一样';
    if(w.includes('잖아'))return '-잖아：强调已知事实';
    if(w.includes('기에'))return '-기에：因为……';
    if(w.includes('지만'))return '-지만：但是/虽然';
    if(w.includes('다면'))return '-다면：如果……';
    if(w.includes('걸 그랬어'))return '걸 그랬어：后悔';
    if(w.includes('척'))return '척하다：假装……';
    if(w.includes('수록'))return '-ㄹ수록：越……越……';
    if(w.includes('게 돼')||w.includes('게돼'))return '-게 되다：变得……';
    if(w.includes('아/어 주')||w.includes('어줘')||w.includes('아줘'))return '-아/어 주다：为对方做';
    if(w.includes('다고'))return '-다고：引用前面的话';
    if(w.includes('아서')||w.includes('어서')||w.includes('라서'))return '-아서/어서/라서：因为……';
    if(w.includes('같이'))return '副词：表示“像……一样/一起”，在本句中修饰后面的动作或状态。';
    if(w.endsWith('조차'))return '-조차：连……都';
    if(w.endsWith('만'))return '-만：只、仅仅';
    if(w.endsWith('도'))return '-도：也、即使';
    if(w.endsWith('에게'))return '-에게：对/给……';
    if(w.endsWith('에서'))return '-에서：在……做';
    if(w.endsWith('에'))return '-에：在/到……';
    if(w.endsWith('과')||w.endsWith('와'))return '-과/와：和……';
    if(w.endsWith('을')||w.endsWith('를'))return '-을/를：动作对象';
    if(w.endsWith('이')||w.endsWith('가'))return '-이/가：主语';
    if(w.endsWith('은')||w.endsWith('는'))return '-은/는：主题/对比';
    if(w.endsWith('고'))return '-고：并且/然后';
    if(w.endsWith('면'))return '-면：如果/当……';
    if(w.endsWith('까'))return '-까：疑问/自问';
    if(w.endsWith('죠'))return '-죠：确认语气';
    if(w.endsWith('네요'))return '-네요：感叹语气';
    if(w.endsWith('어요')||w.endsWith('아요'))return '-아요/어요：礼貌句尾';
    if(w.endsWith('지'))return '-지：确认/疑问';
    const words=line.split(/\s+/).filter(Boolean),i=words.indexOf(w),prev=i>0?words[i-1]:'';
    if(i===0)return '句首：先说明对象';
    if(i===words.length-1)return '句末：说明最后动作';
    return '本句词义：补充具体意思';
  }
  function specificMeaning(w,x){
    if(lexicon[w])return lexicon[w];
    try{if(meanings[w])return meanings[w]}catch(e){}
    const known={
      '하루하루':'一天一天（反复出现，表示时间持续推进）','그럭저럭':'勉强、马马虎虎','참아볼만해':'值得忍耐、还可以忍受','견뎌낼만해':'还撑得下去','그럴수록':'越是那样','행복해야돼':'必须幸福','무뎌져':'变得麻木','길을':'道路（行走的对象）','마주친다':'相遇','본척':'装作看见/假装面对','그대로':'照原样','자꾸만':'总是、不断地','옛 생각이':'往日的回忆','떠오르면':'如果浮现出来','갈지도 몰라':'也许会去','늘':'一直、总是','작은 미련도':'连一点留恋也','안 남게끔':'为了不留下','보란 듯이':'像是要证明给我看','하얗게':'变得洁白地','새파랗게':'鲜明地、充满活力地','웃어줘':'请保持笑容','없듯이':'像没有发生过一样','거짓말':'谎言','이야':'是……（口语判断）','몰랐어':'不知道了、当时没意识到','알았어':'知道了、终于明白','필요해':'需要、不能没有','잊어줄래':'愿意替我忘掉吗','아파할':'感到痛苦','수 있게':'为了能够……','무엇도':'任何事情也','다':'全部、都','모든게':'一切事情','꿈이길':'希望是梦','안되는':'不成样子的、无力做到的','나라서':'因为是我这样的……','못 잊어':'无法忘记','평생을':'一生、终生','가도':'即使走到/即使经过','죽어서까지도':'甚至到死后也','준 상처':'留下的伤痕','아물었는지':'是否已经愈合','미안해':'对不起、感到抱歉'
    };
    const exact={
      '네 옆에 있는 그 사람이 뭔지|네':'你的（所属）',
      '네 옆에 있는 그 사람이 뭔지|옆에':'在身边（地点）',
      '네 옆에 있는 그 사람이 뭔지|있는':'存在于……的',
      '네 옆에 있는 그 사람이 뭔지|그':'那个',
      '네 옆에 있는 그 사람이 뭔지|사람이':'那个人（主语）',
      '네 옆에 있는 그 사람이 뭔지|뭔지':'是什么（嵌入疑问）',
      '또 나를 찾지 말고 살아가라|또':'又、再一次',
      '또 나를 찾지 말고 살아가라|나를':'我（动作对象）',
      '또 나를 찾지 말고 살아가라|찾지':'不找、不要找',
      '또 나를 찾지 말고 살아가라|말고':'不要……而要……',
      '또 나를 찾지 말고 살아가라|살아가라':'继续生活吧',
      '돌아보지 말고 떠나가라|돌아보지':'不要回头',
      '돌아보지 말고 떠나가라|말고':'不要……而要……',
      '돌아보지 말고 떠나가라|떠나가라':'离开吧',
      '너를 사랑했기에 후회 없기에|너를':'你（动作对象）',
      '너를 사랑했기에 후회 없기에|사랑했기에':'因为爱过你',
      '너를 사랑했기에 후회 없기에|후회':'后悔',
      '너를 사랑했기에 후회 없기에|없기에':'因为没有',
      '좋았던 기억만 가져가라|좋았던':'曾经美好的',
      '좋았던 기억만 가져가라|기억만':'只有回忆',
      '좋았던 기억만 가져가라|가져가라':'带走吧',
      '그럴수록 행복해야돼|그럴수록':'越是那样',
      '그럴수록 행복해야돼|행복해야돼':'必须幸福'
    };
    const key=x.ko+'|'+w;if(exact[key])return exact[key];if(known[key])return known[key];if(known[w])return known[w];
    const words=x.ko.split(/\s+/).filter(Boolean),i=words.indexOf(w);
    if(i===0)return '句首词：说明对象';
    if(i===words.length-1)return '句末词：说明动作';
    return '本句词义：补充具体意思';
  }
  const detailedStrip2=window.strip;
  window.strip=function(x){
    if(x.tag==='英文')return '<div class="reading"><div class="reading-title">英文歌词 · 保留原句，不做词汇和语法拆解</div></div>';
    const ws=x.ko.split(/\s+/).filter(Boolean),ps=x.py.split(/\s*\/\s*|\s+/).filter(Boolean);
    return '<div class="strip"><div class="strip-title">逐词精读 · 韩文 / 谐音逐音节对齐</div><div class="ann">'+ws.map((w,i)=>'<div class="unit">'+aligned(w,ps[i]||w)+'<em>'+specificMeaning(w,x)+'</em><div class="dot"></div><div class="grammar">'+specificHint(w,x)+'</div></div>').join('')+'</div><div class="under"><b>整句理解：</b>'+x.zh+'<br><span>'+explanation(x)+'</span></div></div>';
  };
  if(typeof window.renderLyrics==='function')window.renderLyrics();
})();
