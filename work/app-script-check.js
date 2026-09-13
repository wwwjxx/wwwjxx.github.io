
    const lyrics = [
      {ko:'조그만 날갯짓 널 향한 이끌림', zh:'扇动小小的蝶翼；你对我的吸引力', py:'走可满 那给几 挠 hiang韩 一个林', tag:'心动', words:['날갯짓','이끌림']},
      {ko:'나에게 따라오라 손짓한 것 같아서', zh:'像是在招手，呼唤我跟你一起走', py:'那诶给 大啦哦啦 宋几摊 扣 卡他搜', tag:'推测', words:['따라오다','손짓하다','것 같다']},
      {ko:'애절한 눈빛과 무언의 이야기', zh:'哀切的眼神和无言的故事', py:'诶草蓝 努比刮 木翁内 一呀gi', tag:'描写', words:['애절하다','눈빛','무언']},
      {ko:'가슴에 회오리가 몰아치던 그날 밤', zh:'心中刮起旋风的那个晚上', py:'嘎森没 会哦里嘎 莫啦气东 可那 半', tag:'回忆', words:['가슴','회오리','몰아치다']},
      {ko:'오묘한 그대의 모습에 넋을 놓고', zh:'为你奇妙神秘的身影失了魂魄', py:'哦妙韩 可带诶 莫丝呗 闹给 喏够', tag:'-고', words:['오묘하다','모습','넋을 놓다']},
      {ko:'하나뿐인 영혼을 뺏기고', zh:'唯一的灵魂被夺走', py:'哈那本宁 泳红内 背gi够', tag:'被动感', words:['하나뿐인','영혼','뺏기다']},
      {ko:'그대의 몸짓에 완전히 취해서', zh:'完全沉醉于你的身影', py:'可带诶 蒙几塞 完从尼 催嘿搜', tag:'-아서', words:['몸짓','완전히','취하다']},
      {ko:'숨 쉬는 것조차 잊어버린 나인데', zh:'连呼吸都遗忘的我', py:'宋 嘘嫩 扣走恰 一走剖林 那因带', tag:'-조차', words:['숨 쉬다','것조차','잊어버리다']},
      {ko:'왈츠처럼 사뿐히 앉아', zh:'像华尔兹般轻盈地停驻', py:'挖此凑龙 撒本尼 安那', tag:'比喻', words:['처럼','사뿐히','앉다']},
      {ko:'눈을 뗄 수 없어', zh:'无法把视线从你身上移开', py:'努内 得 苏 欧扫', tag:'不能', words:['눈을 떼다','-(으)ㄹ 수 없다']},
      {ko:'시선이 자연스레 걸음마다 널 따라가잖아', zh:'视线不由自主，跟随你的每个足迹', py:'西宋尼 加严丝类 勾楞吗他 挠 大啦嘎赞那', tag:'-잖아', words:['시선','자연스레','걸음마다','따라가다']},
      {ko:'날 안내해줘', zh:'指引我吧 / 带我走吧', py:'那 安内嘿做', tag:'请求', words:['안내하다','-아/어 줘']},
      {ko:'그대가 살고 있는 곳에 나도 함께 데려가줘', zh:'请把我一起带到你生活的地方', py:'可带嘎 撒够 一嫩 够塞 那都 韩给 带撩嘎做', tag:'请求', words:['살고 있다','곳','함께','데려가다']},
      {ko:'세상의 끝이라도 뒤따라갈 테니', zh:'哪怕是世界尽头，我也会跟着你前进', py:'塞桑诶 哥起啦都 对大啦嘎 忒尼', tag:'-라도 / -테니', words:['세상','끝','뒤따라가다','-(으)ㄹ 테니']},
      {ko:'부디 내 시야에서 벗어나지 말아줘', zh:'千万不要脱离我的视野', py:'不地 内 西呀诶搜 波搜那几 马啦做', tag:'不要', words:['부디','시야','벗어나다','-지 말아 줘']},
      {ko:'아침이 와도 사라지지 말아줘', zh:'即使清晨来临，也不要消失', py:'啊亲迷 哇都 撒啦几几 马啦做', tag:'-아/어도', words:['아침','오다','사라지다','-아/어도']},
      {ko:'꿈을 꾸는 걸음 그댄 나만의 아름다운 나비', zh:'踏着梦想的步伐；你是只属于我的美丽蝴蝶', py:'古没 古嫩 勾楞 / 可但 那满内 啊楞他温 那比', tag:'副歌', words:['꿈을 꾸다','걸음','나만의','아름답다','나비']},
      {ko:'어디서 왔는지 어디로 가는지', zh:'不知从何而来、要往何处去', py:'哦地搜 哇嫩几 哦地咯 嘎嫩几', tag:'-는지', words:['어디서','오다','어디로','가다','-는지']},
      {ko:'친절히 여기까지 마중을 와준 너', zh:'贴心地到这里来迎接我的你', py:'亲草里 哟gi嘎几 吗中额 哇君 挠', tag:'-아/어 주다', words:['친절히','여기까지','마중','와주다']},
      {ko:'가파른 오르막 깎아진 절벽도', zh:'即便是崎岖险峻的悬崖峭壁', py:'嘎帕楞 哦了吗 嘎嘎进 草表都', tag:'场景', words:['가파르다','오르막','절벽']},
      {ko:'걱정마 무엇도 두려울 것이 없으니', zh:'别担心，什么可怕的事都不会发生', py:'勾从吗 木哦都 度撩乌 扣西 欧丝尼', tag:'-으니', words:['걱정하다','무엇도','두렵다','것이 없다']},
      {ko:'너는 뽐내 우아한 자태', zh:'你展示着独一无二的优雅姿态', py:'挠嫩 嘣内 乌啊韩 加忒', tag:'描写', words:['뽐내다','우아하다','자태']},
      {ko:'오 난 몇 번이고 반하고', zh:'不管多少次，我都会为你入迷', py:'哦 南 苗 嘣尼够 半那够', tag:'-고', words:['몇 번이고','반하다']},
      {ko:'사랑은 이렇게 나도 모르게 예고도 없이 불시에 찾아와', zh:'爱情就这样，在不知不觉间毫无征兆地突然降临', py:'撒朗恩 一漏给 那都 莫了给 / 耶够都 欧西 不西诶 恰加哇', tag:'叙述', words:['나도 모르게','예고','불시에','찾아오다']},
      {ko:'낯선 곳을 헤맨다 해도 길을 잃어버린대도', zh:'即使在陌生的地方徘徊，即使迷失方向', py:'那宋 够丝 嘿们他 嘿都 / gil了 一咯剖林带都', tag:'即使', words:['낯설다','헤매다','길을 잃다','-ㄴ대도']},
      {ko:'누구보다 솔직한 나의 맘을 따를 거야', zh:'也要跟随我那比谁都真挚的心', py:'努谷啵他 嗖几看 那诶 满没 大了勾呀', tag:'意志', words:['누구보다','솔직하다','마음','따르다','-(으)ㄹ 거야']},
      {ko:'조용히 눈에 띄는 몸짓 강하고 부드러운 눈빛', zh:'静静跃入视野的身影；强大又温柔的目光', py:'走用hi 努内 第嫩 蒙几 / 康哈够 不的漏温 努比', tag:'修饰', words:['조용히','눈에 띄다','강하다','부드럽다']},
      {ko:'거부할 수 없는 나니까', zh:'因为我根本无法拒绝', py:'勾不哈 苏 欧嫩 那尼嘎', tag:'不能', words:['거부하다','-(으)ㄹ 수 없다','-(이)니까']},
      {ko:'날 데려가줘', zh:'带我走吧', py:'那 带撩嘎做', tag:'请求', words:['데려가다','-아/어 줘']},
      {ko:'세상의 끝이라도 따라갈게', zh:'哪怕是世界尽头，我也会跟着去', py:'塞桑诶 哥起啦都 大啦嘎给', tag:'-ㄹ게', words:['따라가다','-(으)ㄹ게']},
      {ko:'조그마한 손짓 나의 가슴엔 회오리가 친다', zh:'一个小小的举动，在我心里刮起旋风', py:'走可吗韩 宋几 / 那诶 嘎森们 会哦里嘎 亲他', tag:'结尾', words:['조그마하다','손짓','가슴','회오리','치다']}
    ];
    const vocab = [
      ['나비','蝴蝶','名词','nabi','그댄 나만의 아름다운 나비'],['날갯짓','翅膀的扇动、振翅','名词','nal-gaet-jit','조그만 날갯짓'],['이끌림','吸引力、被吸引的感觉','名词','i-kkeul-lim','널 향한 이끌림'],['손짓하다','招手；用手势示意','动词','son-jit-ha-da','손짓한 것 같아서'],['애절하다','哀切、恳切','形容词','ae-jeol-ha-da','애절한 눈빛'],['눈빛','眼神、目光','名词','nun-bit','강하고 부드러운 눈빛'],['회오리','旋风、涡流','名词','hoe-o-ri','가슴에 회오리가'],['몰아치다','猛烈袭来；席卷','动词','mol-a-chi-da','회오리가 몰아치던'],['오묘하다','奇妙而神秘','形容词','o-myo-ha-da','오묘한 그대의 모습'],['넋을 놓다','失神、失魂落魄','惯用语','neok-seul noh-da','넋을 놓고'],['뺏기다','被夺走、被抢走','动词','ppaet-gi-da','영혼을 뺏기고'],['취하다','沉醉；陶醉','动词','chwi-ha-da','완전히 취해서'],['숨 쉬다','呼吸','动词','sum swi-da','숨 쉬는 것조차'],['사뿐히','轻盈地、轻轻地','副词','sa-ppun-hi','사뿐히 앉아'],['시선','视线、目光','名词','si-seon','시선이 자연스레'],['자연스레','自然地、不由自主地','副词','ja-yeon-seu-re','자연스레 따라가잖아'],['따라가다','跟随、跟着去','动词','tta-ra-ga-da','널 따라가잖아'],['안내하다','引导、指引','动词','an-nae-ha-da','날 안내해줘'],['데려가다','带某人一起去','动词','de-ryeo-ga-da','나도 함께 데려가줘'],['뒤따라가다','跟在后面走、跟随前进','动词','dwi-tta-ra-ga-da','뒤따라갈 테니'],['부디','务必、千万、请','副词','bu-di','부디 내 시야에서'],['벗어나다','脱离、离开、摆脱','动词','beot-eo-na-da','벗어나지 말아줘'],['사라지다','消失','动词','sa-ra-ji-da','사라지지 말아줘'],['낯설다','陌生、不熟悉','形容词','nat-seol-da','낯선 곳'],['헤매다','徘徊、迷路','动词','he-mae-da','낯선 곳을 헤맨다'],['솔직하다','坦率、真挚','形容词','sol-jik-ha-da','솔직한 나의 맘'],['거부하다','拒绝','动词','geo-bu-ha-da','거부할 수 없는'],['자태','姿态、风姿','名词','ja-tae','우아한 자태'],['반하다','迷上、为之倾倒','动词','ban-ha-da','몇 번이고 반하고'],['불시에','突然地、出其不意地','副词','bul-si-e','불시에 찾아와'],['마중','迎接、接人','名词','ma-jung','마중을 와준 너'],['눈에 띄다','显眼；映入眼帘','惯用语','nun-e ttwi-da','눈에 띄는 몸짓']
    ].map((x,i)=>({id:i,word:x[0],meaning:x[1],pos:x[2],roman:x[3],example:x[4]}));
    const grammar = [
      ['-ㄴ/은 것 같다','好像……；似乎……','손짓한 것 같아서','好像是在招手，所以……','过去式定语 + 것 같다；这里的 -아서 表示原因或前后连接。'],
      ['N을/를 향한','面向……、朝向……','널 향한 이끌림','朝向你的吸引力','향하다 是“朝向”，常用 향한 修饰后面的名词。'],
      ['N에 / N에서','在……；从……范围内','가슴에 / 내 시야에서','在心中 / 从我的视野里','에 常表示位置或落点，에서 可表示动作发生处或脱离的范围。'],
      ['-고','并且；然后；在……之后','넋을 놓고 / 뺏기고','失神，然后…… / 被夺走后……','歌词中常用来连接连续动作。'],
      ['-(으)ㄹ 수 없다','不能……；无法……','눈을 뗄 수 없어','无法移开视线','字面是“没有做……的可能/能力”。'],
      ['-잖아','你看……；不是……吗','널 따라가잖아','你看，我不就跟着你吗','用于提醒对方一个双方都知道、或说话人想强调的事实。'],
      ['-아/어 줘','请为我……；帮我……','날 안내해줘','请指引我','动词 + 주다 表示“为某人做”；歌词是亲近的请求语气。'],
      ['N이라도/라도','即使是……也；哪怕……','세상의 끝이라도','哪怕是世界尽头','名词末尾有收音用 이라도，无收音用 라도。'],
      ['-(으)ㄹ 테니','我会……，所以……；既然会……','뒤따라갈 테니','我会跟着你，所以……','带有说话人的意志或预想，常与后面的请求/建议连接。'],
      ['-지 말아 줘','请不要……','사라지지 말아줘','请不要消失','말다 的请求式；比单纯的 -지 마 更柔和。'],
      ['-아/어도','即使……也；就算……','아침이 와도','即使清晨到来','表示让步，“即使前项成立，后项仍然成立”。'],
      ['-는지','是否……；在哪里/去了哪里……','어디서 왔는지','从哪里来的','把疑问句嵌入更大的句子中。'],
      ['-ㄴ/는대도','即使说……；即使……','길을 잃어버린대도','即使迷路了','歌词里的口语化让步表达，可理解为“即使……也”。'],
      ['-(으)ㄹ게 / -(으)ㄹ 거야','我会……；打算……','따라갈게 / 따를 거야','我会跟着去 / 我会跟随','-ㄹ게 常带对听话人的承诺；-ㄹ 거야 更像计划或意志。']
    ].map((x,i)=>({id:i,pattern:x[0],name:x[1],example:x[2],translation:x[3],note:x[4]}));

    const storeKey='dont-go-korean-progress-v1';
    let state=JSON.parse(localStorage.getItem(storeKey)||'{"mastered":[],"last":""}');
    let vocabOnly=false, mode='flash', practiceIndex=0, answerShown=false;
    const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
    function save(){localStorage.setItem(storeKey,JSON.stringify(state)); updateStats()}
    function updateStats(){$('#masteredCount').textContent=state.mastered.length; $('#streakCount').textContent=state.last===new Date().toISOString().slice(0,10)?'✓':'1'}
    function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),1800)}
    function renderLyrics(){const q=$('#lyricSearch').value.trim().toLowerCase();const list=lyrics.filter(x=>(x.ko+x.zh+x.py+x.words.join(' ')).toLowerCase().includes(q));$('#lyricCount').textContent=`${list.length} / ${lyrics.length} 行`;$('#lyricsList').innerHTML=list.length?list.map((x,i)=>`<article class="lyric"><button class="lyric-main" data-lyric="${lyrics.indexOf(x)}"><span class="lyric-no">${String(lyrics.indexOf(x)+1).padStart(2,'0')}</span><span class="ko">${x.ko}</span><span class="lyric-tag">${x.tag}</span></button><div class="lyric-detail"><div class="translation">${x.zh}</div><div class="phonetic">${x.py}</div><div class="mini-words">${x.words.map(w=>`<button data-word="${w}">${w}</button>`).join('')}</div></div></article>`).join(''):'<div class="empty">没有找到匹配的歌词。试试搜索“시선”“心”“跟随”。</div>'}
    function renderVocab(){const q=$('#vocabSearch').value.trim().toLowerCase();let list=vocab.filter(x=>(x.word+x.meaning+x.roman+x.example).toLowerCase().includes(q));if(vocabOnly)list=list.filter(x=>!state.mastered.includes(x.id));$('#vocabCount').textContent=`${list.length} / ${vocab.length} 个词`;$('#vocabList').innerHTML=list.length?list.map(x=>`<article class="vocab-card ${state.mastered.includes(x.id)?'mastered':''}"><div class="word-row"><div class="word">${x.word}</div><span class="pos">${x.pos}</span></div><div class="meaning">${x.meaning}</div><div class="roman">${x.roman}</div><div class="example"><b>${x.example}</b><br><span>来自歌曲歌词</span></div><div class="vocab-actions"><button class="master-btn ${state.mastered.includes(x.id)?'done':''}" data-master="${x.id}">${state.mastered.includes(x.id)?'✓ 已掌握':'标记为已掌握'}</button><button class="soft-btn" data-practice="${x.id}">练这个词</button></div></article>`).join(''):'<div class="empty">这里暂时没有词汇。可以取消“只看未掌握”或清空搜索。</div>'}
    function renderGrammar(){$('#grammarList').innerHTML=grammar.map(x=>`<article class="grammar-card"><div class="grammar-top"><span class="grammar-pattern">${x.pattern}</span><span class="grammar-name">${x.name}</span></div><p>${x.note}</p><div class="grammar-example"><b>${x.example}</b><span>${x.translation}</span></div></article>`).join('')}
    function makeQuiz(){const item=vocab[practiceIndex%vocab.length];const others=vocab.filter(x=>x.id!==item.id).sort(()=>Math.random()-.5).slice(0,3);return {item, options:[item,...others].sort(()=>Math.random()-.5)}}
    let currentQuiz=makeQuiz();
    function renderPractice(){const item=vocab[practiceIndex%vocab.length];$('#practiceCount').textContent=`${(practiceIndex%vocab.length)+1} / ${vocab.length}`;const card=$('#practiceCard');if(mode==='flash'){card.innerHTML=`<div><div class="practice-kicker">Vocabulary flashcard</div><div class="practice-question">${item.word}</div><div class="practice-sub">${item.pos} · ${item.roman}</div><div class="answer ${answerShown?'show':''}" id="answer"><b>${item.meaning}</b><br><span>${item.example}</span></div></div><div class="practice-actions"><button class="primary-btn" id="showAnswer">${answerShown?'隐藏答案':'显示答案'}</button><button class="soft-btn" id="nextPractice">下一个</button><button class="soft-btn" id="markPractice">${state.mastered.includes(item.id)?'已掌握':'记住了'}</button></div>`}else{currentQuiz=makeQuiz();card.innerHTML=`<div><div class="practice-kicker">Meaning quiz</div><div class="practice-question">${currentQuiz.item.word}</div><div class="practice-sub">选择最合适的中文释义</div><div class="quiz-options">${currentQuiz.options.map(o=>`<button class="quiz-option" data-answer="${o.id}">${o.meaning}</button>`).join('')}</div></div><div class="practice-actions"><button class="soft-btn" id="nextPractice">换一道</button></div>`}}
    function showTab(tab){$$('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));$$('.section').forEach(s=>s.classList.toggle('active',s.id===tab+'Section'));if(tab==='practice')renderPractice()}
    document.addEventListener('click',e=>{const nav=e.target.closest('.nav-btn');if(nav)showTab(nav.dataset.tab);const line=e.target.closest('.lyric-main');if(line){line.parentElement.classList.toggle('open');return}const word=e.target.closest('[data-word]');if(word){$('#vocabSearch').value=word.dataset.word;showTab('vocab');renderVocab();return}const master=e.target.closest('[data-master]');if(master){const id=Number(master.dataset.master);state.mastered=state.mastered.includes(id)?state.mastered.filter(x=>x!==id):[...state.mastered,id];state.last=new Date().toISOString().slice(0,10);save();renderVocab();toast(state.mastered.includes(id)?'已加入掌握清单':'已移出掌握清单');return}const practice=e.target.closest('[data-practice]');if(practice){practiceIndex=Number(practice.dataset.practice);answerShown=false;showTab('practice');return}const modeBtn=e.target.closest('[data-mode]');if(modeBtn){mode=modeBtn.dataset.mode;answerShown=false;$$('[data-mode]').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));renderPractice();return}if(e.target.id==='showAnswer'){answerShown=!answerShown;renderPractice()}if(e.target.id==='nextPractice'){practiceIndex=(practiceIndex+1)%vocab.length;answerShown=false;renderPractice()}if(e.target.id==='markPractice'){const id=vocab[practiceIndex%vocab.length].id;if(!state.mastered.includes(id))state.mastered.push(id);state.last=new Date().toISOString().slice(0,10);save();renderPractice();toast('已记录为掌握')}});
    document.addEventListener('click',e=>{const opt=e.target.closest('.quiz-option');if(!opt)return;const ok=Number(opt.dataset.answer)===currentQuiz.item.id;$$('.quiz-option').forEach(b=>{b.disabled=true;if(Number(b.dataset.answer)===currentQuiz.item.id)b.classList.add('correct')});opt.classList.add(ok?'correct':'wrong');if(ok){state.mastered=state.mastered.includes(currentQuiz.item.id)?state.mastered:[...state.mastered,currentQuiz.item.id];state.last=new Date().toISOString().slice(0,10);save();toast('答对了，已计入掌握');}else toast('再看一下这张卡的词义');});
    $('#lyricSearch').addEventListener('input',renderLyrics);$('#vocabSearch').addEventListener('input',renderVocab);$('#showUnmastered').addEventListener('click',e=>{vocabOnly=!vocabOnly;e.target.textContent=vocabOnly?'显示全部':'只看未掌握';renderVocab()});$('#expandAll').addEventListener('click',e=>{$$('.lyric').forEach(x=>x.classList.add('open'));e.target.textContent='已全部展开';setTimeout(()=>e.target.textContent='全部展开',1200)});
    renderLyrics();renderVocab();renderGrammar();updateStats();
  
