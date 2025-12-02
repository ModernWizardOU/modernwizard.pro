<script lang="ts">
  import {
    Code2,
    Smartphone,
    Brain,
    Blocks,
    Menu,
    X,
    Github,
    Linkedin,
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

<div class="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white relative overflow-hidden">
  <!-- Animated background -->
  <div class="fixed inset-0 overflow-hidden pointer-events-none">
    <div class="absolute w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse top-0 left-1/4"></div>
    <div class="absolute w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse bottom-0 right-1/4 animation-delay-2000"></div>
    <div class="absolute w-64 h-64 bg-cyan-600/20 rounded-full blur-3xl animate-pulse top-1/2 left-1/2 animation-delay-4000"></div>
  </div>

  <!-- Navigation -->
  <nav class="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center space-x-2">
          <Sparkles class="w-8 h-8 text-purple-400" />
          <span class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Modern Wizard
          </span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <button on:click={() => scrollToSection('services')} class="nav-link">服務項目</button>
          <button on:click={() => scrollToSection('tech')} class="nav-link">技術堆疊</button>
          <button on:click={() => scrollToSection('process')} class="nav-link">服務流程</button>
          <button on:click={() => scrollToSection('contact')} class="nav-link">聯絡我們</button>
        </div>

        <!-- Mobile menu button -->
        <button
          on:click={() => isMenuOpen = !isMenuOpen}
          class="md:hidden text-purple-400 hover:text-purple-300 transition-colors"
        >
          {#if isMenuOpen}
            <X class="w-6 h-6" />
          {:else}
            <Menu class="w-6 h-6" />
          {/if}
        </button>
      </div>

      <!-- Mobile Navigation -->
      {#if isMenuOpen}
        <div class="md:hidden py-4 space-y-2 border-t border-purple-500/20">
          <button on:click={() => scrollToSection('services')} class="block w-full text-left px-4 py-2 hover:bg-purple-500/10 rounded transition-colors">服務項目</button>
          <button on:click={() => scrollToSection('tech')} class="block w-full text-left px-4 py-2 hover:bg-purple-500/10 rounded transition-colors">技術堆疊</button>
          <button on:click={() => scrollToSection('process')} class="block w-full text-left px-4 py-2 hover:bg-purple-500/10 rounded transition-colors">服務流程</button>
          <button on:click={() => scrollToSection('contact')} class="block w-full text-left px-4 py-2 hover:bg-purple-500/10 rounded transition-colors">聯絡我們</button>
        </div>
      {/if}
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="relative min-h-screen flex items-center justify-center px-4 pt-16">
    <div class="max-w-5xl mx-auto text-center relative z-10">
      <div class="mb-8 animate-fade-in">
        <h1 class="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 neon-text">
          Modern Wizard
        </h1>
        <div class="h-1 w-32 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
      </div>

      <p class="text-xl sm:text-2xl md:text-3xl text-purple-200 mb-4 animate-fade-in-delay-1">
        專業軟體接案服務
      </p>

      <p class="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-delay-2">
        區塊鏈應用開發 • 前後端服務 • 跨平台 App • AI 智能解決方案
      </p>

      <button
        on:click={() => scrollToSection('contact')}
        class="neon-button text-lg px-8 py-4 rounded-full font-semibold animate-fade-in-delay-3"
      >
        開始您的專案
        <Zap class="inline-block w-5 h-5 ml-2" />
      </button>

      <div class="mt-16 animate-bounce">
        <ChevronDown class="w-8 h-8 mx-auto text-purple-400" />
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="relative py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl sm:text-5xl font-bold text-center mb-4 neon-text-small">
        核心服務
      </h2>
      <p class="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
        提供全方位的軟體開發解決方案，從概念到部署一站式服務
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- AI Services -->
        <div class="neon-card group">
          <div class="flex items-center mb-4">
            <Brain class="w-12 h-12 text-yellow-400 group-hover:text-pink-400 transition-colors" />
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
        </div>

        <!-- Mobile App -->
        <div class="neon-card group">
          <div class="flex items-center mb-4">
            <Smartphone class="w-12 h-12 text-pink-400 group-hover:text-yellow-400 transition-colors" />
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
        </div>

        <!-- Full-stack -->
        <div class="neon-card group">
          <div class="flex items-center mb-4">
            <Code2 class="w-12 h-12 text-cyan-400 group-hover:text-purple-400 transition-colors" />
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
        </div>

        <!-- Blockchain -->
        <div class="neon-card group">
          <div class="flex items-center mb-4">
            <Blocks class="w-12 h-12 text-purple-400 group-hover:text-cyan-400 transition-colors" />
            <h3 class="text-2xl font-bold ml-4">區塊鏈應用開發</h3>
          </div>
          <p class="text-gray-300 mb-4">
            專精於 Ethereum 區塊鏈生態系統開發
          </p>
          <ul class="space-y-2 text-gray-400">
            <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-purple-400" /> 智能合約開發 (Solidity)</li>
            <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-purple-400" /> NFT 平台開發</li>
            <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-purple-400" /> Web3 整合服務</li>
            <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-purple-400" /> 區塊鏈應用開發</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Tech Stack Section -->
  <section id="tech" class="relative py-20 px-4 bg-slate-950/50">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl sm:text-5xl font-bold text-center mb-4 neon-text-small">
        技術堆疊
      </h2>
      <p class="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
        掌握業界最新技術，提供最佳解決方案
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Blockchain Tech -->
        <div class="tech-card">
          <h3 class="text-xl font-bold mb-6 text-purple-400">區塊鏈</h3>
          <div class="space-y-3">
            <div class="tech-badge">Ethereum</div>
            <div class="tech-badge">Flow</div>
            <div class="tech-badge">Solidity</div>
            <div class="tech-badge">Web3.js</div>
            <div class="tech-badge">Ethers.js</div>
          </div>
        </div>

        <!-- Frontend/Backend Tech -->
        <div class="tech-card">
          <h3 class="text-xl font-bold mb-6 text-cyan-400">前後端</h3>
          <div class="space-y-3">
            <div class="tech-badge">Vue.js</div>
            <div class="tech-badge">Svelte</div>
            <div class="tech-badge">TypeScript</div>
            <div class="tech-badge">.NET</div>
            <div class="tech-badge">Node.js</div>
            <div class="tech-badge">GCP / AWS</div>
          </div>
        </div>

        <!-- Mobile Tech -->
        <div class="tech-card">
          <h3 class="text-xl font-bold mb-6 text-pink-400">移動開發</h3>
          <div class="space-y-3">
            <div class="tech-badge">Flutter</div>
            <div class="tech-badge">Kotlin Multiplatform</div>
            <div class="tech-badge">Swift</div>
            <div class="tech-badge">Kotlin</div>
          </div>
        </div>

        <!-- AI Tech -->
        <div class="tech-card">
          <h3 class="text-xl font-bold mb-6 text-yellow-400">AI / ML</h3>
          <div class="space-y-3">
            <div class="tech-badge">Google Gemini</div>
            <div class="tech-badge">Anthropic Claude</div>
            <div class="tech-badge">OpenAI GPT</div>
            <div class="tech-badge">RAG</div>
            <div class="tech-badge">Vector DB</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section id="process" class="relative py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl sm:text-5xl font-bold text-center mb-4 neon-text-small">
        服務流程
      </h2>
      <p class="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
        專業透明的合作流程，確保專案順利進行
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="process-card">
          <div class="text-5xl font-bold text-purple-400 mb-4">01</div>
          <h3 class="text-xl font-bold mb-2">需求諮詢</h3>
          <p class="text-gray-400">深入了解您的需求與目標，提供專業建議</p>
        </div>

        <div class="process-card">
          <div class="text-5xl font-bold text-cyan-400 mb-4">02</div>
          <h3 class="text-xl font-bold mb-2">方案規劃</h3>
          <p class="text-gray-400">制定詳細開發計劃，確認技術架構與時程</p>
        </div>

        <div class="process-card">
          <div class="text-5xl font-bold text-pink-400 mb-4">03</div>
          <h3 class="text-xl font-bold mb-2">開發執行</h3>
          <p class="text-gray-400">採用敏捷開發方法，定期同步專案進度</p>
        </div>

        <div class="process-card">
          <div class="text-5xl font-bold text-yellow-400 mb-4">04</div>
          <h3 class="text-xl font-bold mb-2">測試交付</h3>
          <p class="text-gray-400">完整測試與驗收，提供後續技術支援</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section class="relative py-20 px-4 bg-slate-950/50">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl sm:text-5xl font-bold text-center mb-4 neon-text-small">
        為什麼選擇 ModernWizard
      </h2>
      <p class="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
        專業技術團隊，值得信賴的合作夥伴
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="advantage-card">
          <Rocket class="w-16 h-16 text-purple-400 mb-4 mx-auto" />
          <h3 class="text-xl font-bold mb-3 text-center">快速交付</h3>
          <p class="text-gray-400 text-center">
            高效的開發流程，確保專案按時完成並超越期望
          </p>
        </div>

        <div class="advantage-card">
          <Shield class="w-16 h-16 text-cyan-400 mb-4 mx-auto" />
          <h3 class="text-xl font-bold mb-3 text-center">品質保證</h3>
          <p class="text-gray-400 text-center">
            嚴格的程式碼審查與測試，確保產品穩定可靠
          </p>
        </div>

        <div class="advantage-card">
          <Sparkles class="w-16 h-16 text-pink-400 mb-4 mx-auto" />
          <h3 class="text-xl font-bold mb-3 text-center">創新技術</h3>
          <p class="text-gray-400 text-center">
            緊跟技術潮流，運用最新工具打造優質解決方案
          </p>
        </div>
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

      <div class="neon-card max-w-2xl mx-auto">
        <p class="text-lg mb-8 text-gray-300">
          無論您的專案大小，我們都樂意提供專業諮詢
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@modernwizard.pro"
            class="neon-button-secondary flex items-center justify-center px-6 py-3 rounded-full"
          >
            <Mail class="w-5 h-5 mr-2" />
            聯絡我們
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="relative py-8 px-4 border-t border-purple-500/20 bg-slate-950/80">
    <div class="max-w-7xl mx-auto text-center">
      <div class="flex items-center justify-center space-x-2 mb-4">
        <Sparkles class="w-6 h-6 text-purple-400" />
        <span class="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Modern Wizard
        </span>
      </div>
      <p class="text-gray-400 text-sm">
        © 2024 Modern Wizard. 專業軟體接案服務
      </p>
    </div>
  </footer>

  <!-- Scroll to Top Button -->
  {#if showScrollTop}
    <button
      on:click={scrollToTop}
      class="fixed bottom-8 right-8 neon-button-secondary p-3 rounded-full z-50 animate-fade-in"
    >
      <ArrowUp class="w-6 h-6" />
    </button>
  {/if}
</div>
