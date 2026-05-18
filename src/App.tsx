import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Phone, MessageCircle, Clock, ShieldCheck, Sparkles, CheckCircle2, AlertCircle, CalendarCheck } from 'lucide-react';

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.2 }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F5F2ED] font-sans selection:bg-[#C5A059] selection:text-black flex flex-col">
      {/* Header */}
      <header className="h-20 flex items-center justify-between px-6 lg:px-12 border-b border-[#2A2A2A] sticky top-0 bg-[#0F0F0F]/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-xl font-serif tracking-widest text-[#C5A059]">미담경희한의원</span>
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-60">Midam Kyunghee Clinic</span>
          </div>
        </div>
        <nav className="hidden lg:flex gap-8 text-xs uppercase tracking-[0.2em] opacity-80">
          <a href="#about" className="hover:text-[#C5A059] transition-colors">공진단 소개</a>
          <a href="#problem" className="hover:text-[#C5A059] transition-colors">체크리스트</a>
          <a href="#solution" className="hover:text-[#C5A059] transition-colors">조제 원칙</a>
          <a href="#cta" className="hover:text-[#C5A059] transition-colors">상담 예약</a>
        </nav>
        <button className="lg:hidden text-[#C5A059]">
          <MessageCircle className="w-6 h-6" />
        </button>
      </header>

      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero */}
        <section className="relative min-h-[90vh] flex flex-col lg:flex-row border-b border-[#2A2A2A] overflow-hidden">
          {/* Left Text */}
          <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center gap-8 z-10 bg-[#0F0F0F]">
            <motion.div {...fadeInUp} className="space-y-6">
              <span className="text-[#C5A059] text-sm tracking-[0.3em] font-medium uppercase border border-[#C5A059]/30 px-3 py-1 rounded-full inline-block">
                Premium Oriental Medicine
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif leading-[1.3] text-white break-keep">
                동의보감의 지혜와<br />
                현대 과학의 결정체,<br />
                <span className="italic text-[#C5A059]">특허받은 공진단</span>
              </h1>
              <p className="text-lg leading-relaxed opacity-70 max-w-md break-keep">
                진짜 사향의 효능을 극대화하는 특허 기술. 미담경희한의원만의 타협하지 않는 원칙으로 잃어버린 체력과 활력을 되찾아 드립니다.
              </p>
            </motion.div>
            <motion.div {...fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#cta" className="bg-[#C5A059] text-black px-10 py-4 text-sm font-bold uppercase tracking-widest text-center hover:bg-[#D4AF37] transition-colors flex items-center justify-center gap-2">
                맞춤 진료 예약하기 <ChevronRight className="w-4 h-4" />
              </a>
              <a href="https://naver.me/F6lT8ltP" target="_blank" rel="noopener noreferrer" className="border border-[#C5A059] text-[#C5A059] px-10 py-4 text-sm font-bold uppercase tracking-widest text-center hover:bg-[#C5A059]/10 transition-colors flex items-center justify-center gap-2">
                <CalendarCheck className="w-4 h-4" /> 네이버 예약
              </a>
            </motion.div>
          </div>

          {/* Right Visual from Theme */}
          <div className="w-full lg:w-1/2 relative bg-[#141414] flex flex-col justify-center items-center py-16 lg:py-0 border-l border-[#2A2A2A] overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              className="z-10 w-full max-w-sm lg:max-w-md p-6 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#C5A059]/30 group bg-[#1A1A1A]">
                <img 
                  src="/공진단%20첫화면.png" 
                  alt="미담경희한의원 공진단" 
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'absolute inset-0 flex items-center justify-center bg-[#1A1A1A] p-8 min-h-[400px]';
                    fallback.innerHTML = '<span class="text-[#C5A059] text-center">공진단 첫화면.png 이미지를 불러올 수 없습니다.</span>';
                    (e.target as HTMLImageElement).parentElement?.appendChild(fallback);
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: P (Problem) */}
        <section id="problem" className="py-24 px-6 lg:px-12 bg-[#0A0A0A] border-b border-[#2A2A2A] flex flex-col items-center">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mb-16">
            <h2 className="text-[#C5A059] font-serif tracking-widest text-sm mb-4">CHECKLIST</h2>
            <h3 className="text-3xl lg:text-5xl font-serif text-white mb-6 break-keep">만성 피로증후군,<br/>이런 증상 없으신가요?</h3>
            <p className="opacity-70 text-lg break-keep">휴식을 취해도 풀리지 않는 피로, 몸이 보내는 경고일 수 있습니다.</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
            {[
              "자고 일어나도 개운하지 않고 몸이 무겁다",
              "오후만 되면 집중력이 급격히 떨어진다",
              "최근 들어 체력이 예전 같지 않음을 느낀다",
              "스트레스로 인해 수면의 질이 좋지 않다"
            ].map((text, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-[#141414] border border-[#2A2A2A] p-8 hover:border-[#C5A059]/50 transition-colors flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#C5A059]/30 flex items-center justify-center bg-[#1A1A1A] text-[#C5A059]">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <p className="font-medium opacity-90 break-keep leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section 3: A (Amplify) */}
        <section className="py-32 px-6 lg:px-12 relative overflow-hidden flex justify-center border-b border-[#2A2A2A]">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          <motion.div {...fadeInUp} className="relative z-10 text-center max-w-4xl space-y-8">
            <h3 className="text-2xl lg:text-4xl font-serif font-light leading-relaxed break-keep">
              "피로회복제, 에너지 드링크...<br />
              <span className="font-bold text-[#C5A059]">언제까지 임시방편에 의존하시겠습니까?</span>"
            </h3>
            <div className="w-16 h-[1px] bg-[#C5A059] mx-auto opacity-50"></div>
            <p className="text-lg opacity-70 leading-relaxed break-keep font-light">
              근본적인 원인을 해결하지 않으면, 피로는 결국 더 큰 질병으로 다가옵니다.<br className="hidden lg:block"/>
              단기적인 각성이 아닌, 몸의 근본적인 에너지를 채워야 할 때입니다.
            </p>
          </motion.div>
        </section>

        {/* Section 3.1: Efficacy (info1) */}
        <section id="efficacy" className="py-24 px-6 lg:px-12 bg-[#0F0F0F] border-b border-[#2A2A2A] overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[#C5A059] font-serif tracking-widest text-sm mb-4">EFFICACY</h2>
              <h3 className="text-3xl lg:text-5xl font-serif text-white mb-6 break-keep">고갈된 에너지를 다시 채우다</h3>
              <p className="opacity-70 leading-relaxed font-light break-keep">
                사향, 녹용, 당귀, 산수유 등 과거 왕실에서만 허락되었던 진귀한 약재들을 엄선했습니다. <br className="hidden sm:block" />
                막힌 기혈을 시원하게 뚫어주고 신체의 근본적인 힘을 길러, 체력 회복과 뇌 기능 활성화에 깊은 도움을 줍니다.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
              <motion.div {...fadeInUp} className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-sm lg:max-w-md aspect-square rounded-2xl border border-[#C5A059]/30 flex items-center justify-center shadow-[0_0_50px_rgba(197,160,89,0.1)] bg-[#141414] overflow-hidden group">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0"></div>
                  <img src="/공진단 사진.png" alt="공진단" className="w-full h-full object-cover relative z-10 transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
              </motion.div>

              <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                {[
                  "항스트레스", "기억력 개선", "항산화작용", "피로회복", "항염증", "뇌신경재생"
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-full px-6 py-4 text-center hover:border-[#C5A059]/50 transition-colors">
                    <span className="text-[#C5A059] font-medium">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div {...fadeInUp} className="mt-16 bg-[#141414] border border-[#2A2A2A] rounded-2xl p-8 text-center text-sm md:text-base opacity-80 leading-relaxed font-light break-keep">
              <span className="text-[#C5A059] block mb-2 font-medium">다음과 같은 어려움을 겪는 분들께 특히 권해드립니다</span>
              과도한 업무와 스트레스로 지친 직장인 / 경기력 향상이 필요한 운동선수 / 기력이 약해지신 어르신 / 갱년기 증후군 완화 <br className="hidden md:block" />
              학업 스트레스가 심한 수험생 / 수면장애 / 기억력 및 인지 기능 저하가 우려될 때
            </motion.div>
          </div>
        </section>

        {/* Section 3.2: Ingredients Efficacy */}
        <section id="ingredients" className="py-24 px-6 lg:px-12 bg-[#0F0F0F] border-b border-[#2A2A2A] overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mb-16">
              <h2 className="text-[#C5A059] font-serif tracking-widest text-sm mb-4">KEY INGREDIENTS</h2>
              <h3 className="text-4xl lg:text-5xl font-serif text-white break-keep">공진단 주요약재 효능</h3>
              <p className="opacity-70 mt-4 font-light">엄선된 최고의 약재들이 조화롭게 작용합니다</p>
            </motion.div>
            
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full">
              {[
                { 
                  name: "녹용", 
                  title: "보신양 / 익정혈 / 강근골",
                  desc: "발육촉진 강장작용 노화방지\n조혈작용 강심작용 소화기계촉진\n신경계 근육계 기능개선 자궁수축",
                  image: "/nokyong.png"
                },
                { 
                  name: "당귀", 
                  title: "보혈조경 / 활혈지통 / 윤장",
                  desc: "자궁기능조절 뇌세포보호\n진통 진경 항염증 면역증강",
                  image: "/danggui.png"
                },
                { 
                  name: "산수유", 
                  title: "보익간신 / 수렴고삽",
                  desc: "자양 이뇨 혈압강하 혈당강하\n항알러지 중추억제 항진균",
                  image: "/sansuyu.png"
                },
                { 
                  name: "사향", 
                  subtitle: "(사향노루수컷의 사향선분비물)",
                  title: "개규성신 / 활혈소종 / 통경",
                  desc: "중추신경흥분작용 항염증작용\n자궁흥분작용 항균작용\n진통작용",
                  image: "/sahang.png"
                }

              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-[#141414] border border-[#2A2A2A] hover:border-[#C5A059]/40 transition-colors p-8 relative overflow-hidden flex flex-col text-center rounded-2xl group">
                  <div className="w-full aspect-square mx-auto mb-6 bg-white border border-[#C5A059]/20 flex items-center justify-center relative shadow-[0_0_30px_rgba(197,160,89,0.05)] overflow-hidden group-hover:scale-105 transition-transform duration-500 rounded-xl">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.className = 'absolute inset-0 flex items-center justify-center';
                        fallback.innerHTML = `<span class="font-serif text-[#C5A059] text-2xl font-bold">${item.name}</span>`;
                        (e.target as HTMLImageElement).parentElement?.appendChild(fallback);
                      }}
                    />
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
                  </div>
                  
                  <h4 className="text-2xl font-serif font-bold text-white mb-1">{item.name}</h4>
                  {item.subtitle && <span className="text-xs text-white/50 mb-4 block break-keep">{item.subtitle}</span>}
                  
                  <p className="text-[#C5A059] font-medium text-sm lg:text-base break-keep mb-6">
                    {item.title}
                  </p>
                  
                  <p className="opacity-70 text-sm break-keep leading-relaxed whitespace-pre-line text-white/80">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 3.3: Indications (info2) */}
        <section id="indications" className="py-24 px-6 lg:px-12 bg-[#0A0A0A] border-b border-[#2A2A2A] overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mb-16">
              <h2 className="text-[#C5A059] font-serif tracking-widest text-sm mb-4">INDICATIONS</h2>
              <h3 className="text-4xl lg:text-5xl font-serif text-white break-keep">공진단 적응증</h3>
              <p className="opacity-70 mt-4 font-light">다양한 상황에서 건강의 근본을 지켜줍니다</p>
            </motion.div>
            
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
              {[
                { title: "스테미너 하락", desc: "스테미너가 급격히 떨어진 경우" },
                { title: "만성 피로", desc: "잦은 야근에 스트레스로 심신이 피곤할 때" },
                { title: "중요한 시험", desc: "중요한 시험을 앞둔 수험생" },
                { title: "체력 소모", desc: "대회를 준비하는 운동선수" },
                { title: "기억력 저하", desc: "기억력 및 인지력 저하 예방" },
                { title: "해외 여행", desc: "멀리 여행을 떠나 체력이 필요할 경우" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-[#141414] border border-[#2A2A2A] hover:border-[#C5A059]/40 transition-colors p-8 relative overflow-hidden group flex flex-col items-center text-center">
                  <div className="absolute -top-10 -right-10 text-[100px] text-[#C5A059] opacity-[0.03] font-serif group-hover:scale-110 transition-transform duration-500">
                    {i+1}
                  </div>
                  <div className="w-12 h-12 mb-6 rounded-full bg-[#1A1A1A] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] font-serif text-xl">
                    {i+1}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                  <p className="opacity-70 text-sm break-keep leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div {...fadeInUp} className="text-xs opacity-50 font-light border border-[#2A2A2A] px-6 py-3 rounded-full">
              * 한의사의 진단에 따라 알맞은 상황과 체질에 맞게 처방 받으시길 바랍니다.
            </motion.div>
          </div>
        </section>

        {/* Section 4: S (Solution) */}
        <section id="solution" className="py-24 px-6 lg:px-12 bg-[#0F0F0F] border-b border-[#2A2A2A]">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
            <motion.div {...fadeInUp} className="w-full lg:w-1/3 space-y-6">
              <h2 className="text-[#C5A059] font-serif tracking-widest text-sm">OUR SOLUTION</h2>
              <h3 className="text-4xl lg:text-5xl font-serif leading-[1.2] text-white break-keep">원방 그대로,<br/>정성을 다한 처방</h3>
              <p className="opacity-70 leading-relaxed font-light mt-6">
                황제에게 진상되던 귀한 처방 공진단. 미담경희한의원은 타협하지 않는 원칙으로 최고의 약재만을 선별합니다.
              </p>
            </motion.div>
            
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "정식 수입 정품 사향", desc: "엄격한 관리와 인증을 통과한 식약처 인증 정품 사향만을 사용합니다.", icon: <ShieldCheck className="w-6 h-6 text-[#C5A059]"/> },
                { title: "최상급 미세 분골 녹용", desc: "녹용 중 가장 귀하고 효능이 뛰어난 분골 부위만을 아낌없이 담았습니다.", icon: <Sparkles className="w-6 h-6 text-[#C5A059]"/> },
                { title: "전통 방식 수작업 제환", desc: "약재의 손실을 방지하고 효과를 극대화하기 위해 한 알 한 알 정성껏 빚습니다.", icon: <CheckCircle2 className="w-6 h-6 text-[#C5A059]"/> },
                { title: "원장님 직접 조제 및 처방", desc: "공장형 대량 생산이 아닙니다. 진맥부터 조제까지 대표 원장님이 직접 관리합니다.", icon: <Clock className="w-6 h-6 text-[#C5A059]"/> }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-8 border border-[#2A2A2A] bg-[#141414] hover:border-[#C5A059]/40 transition-colors relative group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                    <span className="font-serif text-6xl text-[#C5A059]">0{i+1}</span>
                  </div>
                  <div className="mb-6">{item.icon}</div>
                  <h4 className="text-xl font-serif mb-3 text-white">{item.title}</h4>
                  <p className="opacity-60 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 5: O (Outcome) */}
        <section className="py-24 px-6 lg:px-12 bg-[#141414] relative overflow-hidden border-b border-[#2A2A2A]">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-[#C5A059] font-serif tracking-widest text-sm mb-4">REVIEWS</h2>
              <h3 className="text-3xl lg:text-5xl font-serif text-white break-keep">"아침에 눈 뜨는 것이 다릅니다"</h3>
            </motion.div>

            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="grid md:grid-cols-3 gap-6 w-full">
              {[
                { name: "김*진 님", age: "40대 직장인", text: "만성 피로로 항상 퇴근 후 무기력했는데, 복용 후 컨디션이 확연히 달라졌습니다. 업무 집중력도 높아졌어요." },
                { name: "이*헌 님", age: "50대 사업가", text: "스트레스가 많아 불면증도 있고 체력이 달렸는데, 공진단을 먹고 나서는 활력이 생겨 하루가 다릅니다." },
                { name: "박*연 님", age: "60대 주부", text: "갱년기 이후 기력이 많이 쇠했는데, 자녀들이 선물해줘서 먹고 몸이 한결 가볍고 따뜻해짐을 느낍니다." }
              ].map((review, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-[#0F0F0F] border border-[#2A2A2A] p-8 flex flex-col relative">
                  <div className="text-[#C5A059] text-4xl font-serif absolute top-4 left-4 opacity-20">"</div>
                  <p className="opacity-80 mt-4 mb-8 text-sm leading-relaxed italic z-10 break-keep">"{review.text}"</p>
                  <div className="mt-auto border-t border-[#2A2A2A] pt-4 flex justify-between items-center text-xs">
                    <span className="font-bold text-white">{review.name}</span>
                    <span className="text-[#C5A059]">{review.age}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 6: CTA */}
        <section id="cta" className="py-32 px-6 lg:px-12 bg-[#0F0F0F] relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-[100px]"></div>
          </div>
          <motion.div {...fadeInUp} className="relative z-10 max-w-3xl mx-auto text-center p-12 border border-[#C5A059]/30 bg-[#141414]/80 backdrop-blur-md">
            <h2 className="text-[#C5A059] font-serif tracking-widest text-sm mb-4">RESERVATION</h2>
            <h3 className="text-3xl lg:text-5xl font-serif text-white mb-6 break-keep">특별한 건강을 경험할 시간</h3>
            <p className="opacity-70 text-lg mb-12 break-keep">귀한 약재이기에, 한정된 수량만 조제 및 처방합니다.<br/>원장님과의 1:1 맞춤 진료를 통해 나에게 꼭 맞는 처방을 확인하세요.</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:02-3285-1075" className="bg-[#C5A059] text-black px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-colors flex justify-center items-center gap-3">
                <Phone className="w-5 h-5"/>
                전화 예약 상담
              </a>
              <a href="https://naver.me/F6lT8ltP" target="_blank" rel="noopener noreferrer" className="border border-[#C5A059] text-[#C5A059] bg-transparent px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-[#C5A059]/10 transition-colors flex justify-center items-center gap-3">
                <CalendarCheck className="w-5 h-5"/>
                네이버 예약
              </a>
            </div>
            <p className="text-xs opacity-50 mt-8 font-light">* 진찰 후 환자의 체질과 병증에 따라 처방이 달라질 수 있습니다.</p>
          </motion.div>
        </section>
      </main>

      {/* Footer from Theme */}
      <footer className="py-12 lg:h-40 bg-[#0A0A0A] px-6 lg:px-12 border-t border-[#2A2A2A] flex flex-col lg:flex-row items-center lg:justify-between gap-8 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="space-y-2">
            <span className="text-[10px] text-[#C5A059] uppercase tracking-widest block">Contact Us</span>
            <span className="text-sm font-medium tracking-wider">02-3285-1075</span>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] text-[#C5A059] uppercase tracking-widest block">Location & Parking</span>
            <span className="text-sm font-medium text-opacity-80 max-w-xs break-keep inline-block" style={{textAlign: "left"}}>
              서울시 관악구 신림로 350 서원프라자 4층<br/>
              <span className="text-xs text-[#C5A059] mt-1 block">신림역 7번출구 100m</span>
              <span className="text-[11px] opacity-70 mt-1 block">건물 뒤편 태영아파트 주차장에 무료 주차 가능</span>
            </span>
          </div>
           <div className="space-y-2">
            <span className="text-[10px] text-[#C5A059] uppercase tracking-widest block">Clinic Hours</span>
            <span className="text-sm font-medium text-opacity-80 break-keep inline-block" style={{textAlign: "left", display: "inline-block"}}>
              평일 10:00-20:00 (점심시간 13:00-14:00)<br/>
              토요일 10:00-15:00 (점심시간 없이 진료)<br/>
              <span className="text-xs opacity-70">주일/공휴일 휴진</span>
            </span>
          </div>
        </div>
        <div className="text-center lg:text-right space-y-2">
          <p className="text-[10px] opacity-40 uppercase tracking-tighter">© 2024 Midam Kyunghee Oriental Medicine Clinic. All rights reserved.</p>
          <p className="text-[9px] opacity-30 tracking-wide text-[#C5A059]">모든 처방은 한의사의 진단 후 복용해야 합니다.</p>
        </div>
      </footer>
    </div>
  );
}
