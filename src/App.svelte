<script lang="ts">
  import {
    Code2,
    Smartphone,
    Brain,
    Blocks,
    Mail,
    ChevronDown,
    Sparkles,
    Zap,
    Shield,
    Rocket,
    CheckCircle2,
    ArrowUp
  } from '@lucide/svelte';
  import { onMount } from 'svelte';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Card, Badge, Footer, FooterCopyright } from 'flowbite-svelte';

  let isMenuOpen = false;
  let showScrollTop = false;

  onMount(() => {
    const handleScroll = () => {
      showScrollTop = window.scrollY > 500;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      isMenuOpen = false;
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
  <!-- Animated background -->
  <div class="fixed inset-0 overflow-hidden pointer-events-none">
    <div class="absolute w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse top-0 left-1/4"></div>
    <div class="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse bottom-0 right-1/4 animation-delay-2000"></div>
    <div class="absolute w-64 h-64 bg-cyan-600/15 rounded-full blur-3xl animate-pulse top-1/2 left-1/2 animation-delay-4000"></div>
  </div>

  <!-- Navigation -->
  <Navbar class="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20">
    <NavBrand>
      <Sparkles class="w-8 h-8 text-cyan-400" />
      <span class="ml-2 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Modern Wizard
      </span>
    </NavBrand>
    <NavHamburger />
    <NavUl class="text-gray-300">
      <NavLi on:click={() => scrollToSection('services')} class="cursor-pointer hover:text-cyan-400 transition-colors">服務項目</NavLi>
      <NavLi on:click={() => scrollToSection('tech')} class="cursor-pointer hover:text-cyan-400 transition-colors">技術堆疊</NavLi>
      <NavLi on:click={() => scrollToSection('process')} class="cursor-pointer hover:text-cyan-400 transition-colors">服務流程</NavLi>
      <NavLi on:click={() => scrollToSection('contact')} class="cursor-pointer hover:text-cyan-400 transition-colors">聯絡我們</NavLi>
    </NavUl>
  </Navbar>

  <!-- Hero Section -->
  <section class="relative min-h-screen flex items-center justify-center px-4 pt-16">
    <div class="max-w-5xl mx-auto text-center relative z-10">
      <div class="mb-8 animate-fade-in">
        <h1 class="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Modern Wizard
        </h1>
        <div class="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8"></div>
      </div>

      <p class="text-xl sm:text-2xl md:text-3xl text-cyan-200 mb-4 animate-fade-in-delay-1">
        專業軟體接案服務
      </p>

      <p class="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-delay-2">
        區塊鏈應用開發 • 前後端服務 • 跨平台 App • AI 智能解決方案
      </p>

      <Button
        on:click={() => scrollToSection('contact')}
        size="xl"
        class="bg-gradient-to-r from-cyan-600 to-blue-600 text-white animate-fade-in-delay-3"
      >
        開始您的專案
        <Zap class="inline-block w-5 h-5 ml-2" />
      </Button>

      <div class="mt-16 animate-bounce">
        <ChevronDown class="w-8 h-8 mx-auto text-cyan-400" />
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="relative py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        核心服務
      </h2>
      <p class="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
        提供全方位的軟體開發解決方案，從概念到部署一站式服務
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- AI Services -->
        <Card class="bg-slate-900/50 backdrop-blur-sm border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300">
          <div class="flex items-center mb-4">
            <Brain class="w-12 h-12 text-yellow-400" />
            <h3 class="text-2xl font-bold ml-4">AI 智能服務</h3>
          </div>
          <p class="text-gray-300 mb-4">
            運用最新 AI 技術，為您的業務注入智能化動力
          </p>
          <ul class="space-y-2 text-gray-400">
            <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-yellow-400" /> Google Gemini 整合</li>
            <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-yellow-400" /> Anthropic Claude 應用</li>
            <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-yellow-400" /> OpenAI GPT 整合</li>
            <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-yellow-400" /> RAG 檢索增強生成</li>
          </ul>
        </Card>

        <!-- Mobile App -->
        <Card class="bg-slate-900/50 backdrop-blur-sm border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300">
          <div class="flex items-center mb-4">
            <Smartphone class="w-12 h-12 text-pink-400" />
            <h3 class="text-2xl font-bold ml-4">跨平台 App 製作</h3>
          </div>
          <p class="text-gray-300 mb-4">
            跨平台與原生應用開發，提供最佳移動體驗
          </p>
          <ul class="space-y-2 text-gray-400">
            <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-pink-400" /> Flutter 跨平台開發</li>
            <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-pink-400" /> Kotlin Multiplatform</li>
            <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-pink-400" /> Swift / Kotlin 原生開發</li>
            <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-pink-400" /> App Store 上架協助</li>
          </ul>
        </Card>

        <!-- Full-stack -->
        <Card class="bg-slate-900/50 backdrop-blur-sm border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300">
          <div class="flex items-center mb-4">
            <Code2 class="w-12 h-12 text-cyan-400" />
            <h3 class="text-2xl font-bold ml-4">前後端服務</h3>
          </div>
          <p class="text-gray-300 mb-4">
            現代化的全端開發服務，打造高效能網路應用
          </p>
          <ul class="space-y-2 text-gray-400">
            <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-cyan-400" /> Vue.js / Svelte 前端開發</li>
            <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-cyan-400" /> .NET / Node.js 後端 API</li>
            <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-cyan-400" /> GCP / AWS 雲端部署</li>
            <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-cyan-400" /> 系統整合與優化</li>
          </ul>
        </Card>

        <!-- Blockchain -->
        <Card class="bg-slate-900/50 backdrop-blur-sm border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300">
          <div class="flex items-center mb-4">
            <Blocks class="w-12 h-12 text-blue-400" />
            <h3 class="text-2xl font-bold ml-4">區塊鏈應用開發</h3>
          </div>
          <p class="text-gray-300 mb-4">
            專精於 Ethereum 區塊鏈生態系統開發
          </p>
          <ul class="space-y-2 text-gray-400">
            <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-blue-400" /> 智能合約開發 (Solidity)</li>
            <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-blue-400" /> NFT 平台開發</li>
            <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-blue-400" /> Web3 整合服務</li>
            <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-blue-400" /> 區塊鏈應用開發</li>
          </ul>
        </Card>
      </div>
    </div>
  </section>

  <!-- Tech Stack Section -->
  <section id="tech" class="relative py-20 px-4 bg-slate-950/50">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        技術堆疊
      </h2>
      <p class="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
        掌握業界最新技術，提供最佳解決方案
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Blockchain Tech -->
        <Card class="bg-slate-900/30 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/50 transition-all">
          <h3 class="text-xl font-bold mb-6 text-blue-400">區塊鏈</h3>
          <div class="space-y-3">
            <Badge color="dark">Ethereum</Badge>
            <Badge color="dark">Flow</Badge>
            <Badge color="dark">Solidity</Badge>
            <Badge color="dark">Web3.js</Badge>
            <Badge color="dark">Ethers.js</Badge>
          </div>
        </Card>

        <!-- Frontend/Backend Tech -->
        <Card class="bg-slate-900/30 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/50 transition-all">
          <h3 class="text-xl font-bold mb-6 text-cyan-400">前後端</h3>
          <div class="space-y-3">
            <Badge color="dark">Vue.js</Badge>
            <Badge color="dark">Svelte</Badge>
            <Badge color="dark">TypeScript</Badge>
            <Badge color="dark">.NET</Badge>
            <Badge color="dark">Node.js</Badge>
            <Badge color="dark">GCP / AWS</Badge>
          </div>
        </Card>

        <!-- Mobile Tech -->
        <Card class="bg-slate-900/30 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/50 transition-all">
          <h3 class="text-xl font-bold mb-6 text-pink-400">移動開發</h3>
          <div class="space-y-3">
            <Badge color="dark">Flutter</Badge>
            <Badge color="dark">Kotlin Multiplatform</Badge>
            <Badge color="dark">Swift</Badge>
            <Badge color="dark">Kotlin</Badge>
          </div>
        </Card>

        <!-- AI Tech -->
        <Card class="bg-slate-900/30 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/50 transition-all">
          <h3 class="text-xl font-bold mb-6 text-yellow-400">AI / ML</h3>
          <div class="space-y-3">
            <Badge color="dark">Google Gemini</Badge>
            <Badge color="dark">Anthropic Claude</Badge>
            <Badge color="dark">OpenAI GPT</Badge>
            <Badge color="dark">RAG</Badge>
            <Badge color="dark">Vector DB</Badge>
          </div>
        </Card>
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section id="process" class="relative py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        服務流程
      </h2>
      <p class="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
        專業透明的合作流程，確保專案順利進行
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card class="bg-slate-900/40 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/50 transition-all">
          <div class="text-5xl font-bold text-cyan-400 mb-4">01</div>
          <h3 class="text-xl font-bold mb-2">需求諮詢</h3>
          <p class="text-gray-400">深入了解您的需求與目標，提供專業建議</p>
        </Card>

        <Card class="bg-slate-900/40 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/50 transition-all">
          <div class="text-5xl font-bold text-cyan-400 mb-4">02</div>
          <h3 class="text-xl font-bold mb-2">方案規劃</h3>
          <p class="text-gray-400">制定詳細開發計劃，確認技術架構與時程</p>
        </Card>

        <Card class="bg-slate-900/40 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/50 transition-all">
          <div class="text-5xl font-bold text-blue-400 mb-4">03</div>
          <h3 class="text-xl font-bold mb-2">開發執行</h3>
          <p class="text-gray-400">採用敏捷開發方法，定期同步專案進度</p>
        </Card>

        <Card class="bg-slate-900/40 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/50 transition-all">
          <div class="text-5xl font-bold text-blue-400 mb-4">04</div>
          <h3 class="text-xl font-bold mb-2">測試交付</h3>
          <p class="text-gray-400">完整測試與驗收，提供後續技術支援</p>
        </Card>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section class="relative py-20 px-4 bg-slate-950/50">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        為什麼選擇 ModernWizard
      </h2>
      <p class="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
        專業技術團隊，值得信賴的合作夥伴
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card class="bg-slate-900/30 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/50 transition-all text-center">
          <Rocket class="w-16 h-16 text-cyan-400 mb-4 mx-auto" />
          <h3 class="text-xl font-bold mb-3">快速交付</h3>
          <p class="text-gray-400">
            高效的開發流程，確保專案按時完成並超越期望
          </p>
        </Card>

        <Card class="bg-slate-900/30 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/50 transition-all text-center">
          <Shield class="w-16 h-16 text-cyan-400 mb-4 mx-auto" />
          <h3 class="text-xl font-bold mb-3">品質保證</h3>
          <p class="text-gray-400">
            嚴格的程式碼審查與測試，確保產品穩定可靠
          </p>
        </Card>

        <Card class="bg-slate-900/30 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/50 transition-all text-center">
          <Sparkles class="w-16 h-16 text-cyan-400 mb-4 mx-auto" />
          <h3 class="text-xl font-bold mb-3">創新技術</h3>
          <p class="text-gray-400">
            緊跟技術潮流，運用最新工具打造優質解決方案
          </p>
        </Card>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="relative py-20 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl sm:text-5xl font-bold mb-4 neon-text-small">
        開始您的專案
      </h2>
      <p class="text-xl text-gray-300 mb-12">
        讓我們一起將您的想法變為現實
      </p>

      <Card class="bg-slate-900/50 backdrop-blur-sm border-cyan-500/30 max-w-2xl mx-auto">
        <p class="text-lg mb-8 text-gray-300">
          無論您的專案大小，我們都樂意提供專業諮詢
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="mailto:contact@modernwizard.pro"
            color="alternative"
            class="border-cyan-500 text-cyan-300 hover:bg-cyan-500/20"
          >
            <Mail class="w-5 h-5 mr-2" />
            聯絡我們
          </Button>
        </div>
      </Card>
    </div>
  </section>

  <!-- Footer -->
  <Footer class="bg-slate-950/80 border-t border-cyan-500/20">
    <div class="w-full text-center">
      <div class="flex items-center justify-center space-x-2 mb-4">
        <Sparkles class="w-6 h-6 text-cyan-400" />
        <span class="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Modern Wizard
        </span>
      </div>
      <FooterCopyright by="Modern Wizard. 專業軟體接案服務" year={2024} />
    </div>
  </Footer>

  <!-- Scroll to Top Button -->
  {#if showScrollTop}
    <Button
      on:click={scrollToTop}
      class="fixed bottom-8 right-8 z-50 animate-fade-in bg-cyan-600 hover:bg-cyan-700"
      pill
      size="lg"
    >
      <ArrowUp class="w-6 h-6" />
    </Button>
  {/if}
</div>
