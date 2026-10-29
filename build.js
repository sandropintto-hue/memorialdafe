const fs = require('fs');
const path = require('path');

const html = `<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memorial da Fé | Central de Playbacks Sacros & Recursos</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        gold: {
                            300: '#f6e05e',
                            400: '#ecc94b',
                            500: '#d4af37',
                            600: '#b78727',
                            700: '#8c6517'
                        },
                        dark: {
                            900: '#07090e',
                            800: '#0d1117',
                            700: '#161b22',
                            600: '#21262d'
                        }
                    },
                    fontFamily: {
                        cinzel: ['Cinzel', 'serif'],
                        sans: ['"Plus Jakarta Sans"', 'sans-serif']
                    }
                }
            }
        }
    </script>
    <style>
        .gold-gradient-text {
            background: linear-gradient(135deg, #fff2b2 0%, #d4af37 50%, #aa7c11 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .gold-border-glow {
            border: 1px solid rgba(212, 175, 55, 0.3);
            box-shadow: 0 0 25px rgba(212, 175, 55, 0.08);
        }
    </style>
</head>
<body class="bg-dark-900 text-gray-200 font-sans antialiased selection:bg-gold-500 selection:text-black">

    <!-- Top Announcement Bar -->
    <div class="bg-gradient-to-r from-gold-700 via-gold-500 to-gold-700 text-dark-900 text-xs md:text-sm font-bold py-2 text-center px-4 tracking-wide shadow-md">
        <i class="fa-solid fa-crown mr-2"></i> Áudios Masterizados para Igrejas e Ministérios — Sem Anúncios, Sem Vinhetas e no Tom Certo!
    </div>

    <!-- Header / Navbar -->
    <header class="border-b border-dark-600/60 bg-dark-800/80 backdrop-blur-md sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-full border border-gold-500 flex items-center justify-center bg-dark-900 shadow-inner">
                    <i class="fa-solid fa-cross text-gold-500 text-lg"></i>
                </div>
                <div>
                    <h1 class="font-cinzel font-bold text-lg md:text-xl tracking-wider gold-gradient-text leading-tight">MEMORIAL DA FÉ</h1>
                    <p class="text-[10px] uppercase tracking-widest text-gray-400 font-medium">Acervo Sacro & Playbacks Oficiais</p>
                </div>
            </div>
            <nav class="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-300">
                <a href="#playbacks" class="hover:text-gold-400 transition">Playbacks & Tons</a>
                <a href="#ebook" class="hover:text-gold-400 transition">E-book Histórico</a>
                <a href="#outros-formatos" class="hover:text-gold-400 transition">Cifras & Encomendas</a>
            </nav>
            <a href="#playbacks" class="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-dark-900 font-bold px-4 py-2 rounded-lg text-xs md:text-sm transition shadow-lg flex items-center gap-2">
                <i class="fa-solid fa-music"></i> <span>Escolher Meu Tom</span>
            </a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="relative py-14 md:py-20 overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase tracking-widest font-semibold mb-4">
                <i class="fa-solid fa-volume-high"></i> Resolução Oficial de Áudio Studio Master (WAV / MP3)
            </span>
            <h2 class="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                Cante na sua Igreja no <span class="gold-gradient-text">Tom Perfeito</span> da Sua Voz
            </h2>
            <p class="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                Chega de playbacks baixos do YouTube, cortados por anúncios ou em tons desconfortáveis. Baixe o instrumental puro de estúdio com afinação personalizada instantânea para a sua voz.
            </p>
            <div class="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm text-gray-400">
                <div class="flex items-center gap-2 bg-dark-800 px-4 py-2 rounded-full border border-dark-600">
                    <i class="fa-solid fa-circle-check text-green-400"></i> Volume Masterizado (-14 LUFS)
                </div>
                <div class="flex items-center gap-2 bg-dark-800 px-4 py-2 rounded-full border border-dark-600">
                    <i class="fa-solid fa-sliders text-gold-400"></i> Tons para Homens e Mulheres
                </div>
                <div class="flex items-center gap-2 bg-dark-800 px-4 py-2 rounded-full border border-dark-600">
                    <i class="fa-brands fa-whatsapp text-green-500"></i> Envio Imediato no E-mail e WhatsApp
                </div>
            </div>
        </div>
    </section>

    <!-- Interactive Audio & Pitch Selector Section -->
    <section id="playbacks" class="py-12 bg-dark-800/60 border-y border-dark-600/40">
        <div class="max-w-5xl mx-auto px-4">
            
            <div class="text-center mb-10">
                <span class="text-gold-400 font-cinzel text-sm uppercase tracking-widest">Demonstrador Interativo</span>
                <h3 class="font-cinzel text-2xl md:text-4xl font-bold text-white mt-1">Selecione e Ouça o Tom Desejado</h3>
                <p class="text-gray-400 text-sm mt-2 max-w-xl mx-auto">Teste abaixo como o playback soa no tom original e nas afinações transpostas para homens e mulheres.</p>
            </div>

            <!-- Main Product Card -->
            <div class="bg-dark-900 rounded-2xl gold-border-glow p-6 md:p-8 max-w-3xl mx-auto relative overflow-hidden">
                <div class="flex flex-col sm:flex-row items-center gap-6 border-b border-dark-600/60 pb-6 mb-6">
                    <div class="w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-dark-800 border border-gold-500/40 overflow-hidden flex-shrink-0 relative group shadow-lg">
                        <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80" alt="Capa Hino" class="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-300">
                        <div class="absolute inset-0 bg-dark-900/40 flex items-center justify-center">
                            <i class="fa-solid fa-headphones text-gold-400 text-2xl"></i>
                        </div>
                    </div>
                    <div class="text-center sm:text-left flex-1">
                        <span class="bg-gold-500/20 text-gold-300 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-gold-500/30">Hino Histórico Destaque</span>
                        <h4 class="font-cinzel text-xl sm:text-2xl font-bold text-white mt-2">Jesus Nazareno (O Último Clamor)</h4>
                        <p class="text-gray-400 text-xs sm:text-sm mt-1">Versão orquestrada solene de época • Instrumental puro sem voz guia</p>
                        <div class="flex items-center justify-center sm:justify-start gap-3 mt-3 text-xs text-gray-300">
                            <span><i class="fa-solid fa-clock text-gold-500 mr-1"></i> 6m 34s</span>
                            <span>•</span>
                            <span><i class="fa-solid fa-file-audio text-gold-500 mr-1"></i> WAV Studio 24-bit + MP3 320kbps</span>
                        </div>
                    </div>
                </div>

                <!-- Pitch Selector Tabs -->
                <div class="mb-8">
                    <label class="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-3 flex items-center justify-between">
                        <span>1. Escolha a Altura da Voz:</span>
                        <span id="selected-key-tag" class="text-gold-400 font-normal">Tom Original (Voz Feminina Aguda)</span>
                    </label>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        <button onclick="setTone('minus2', '2 Tons Abaixo (Barítono / Masculino Grave)', 'R$ 9,90')" class="tone-btn text-left p-3 rounded-xl border border-dark-600 bg-dark-800 hover:border-gold-500/60 transition focus:outline-none">
                            <div class="text-xs font-bold text-white flex items-center justify-between">
                                <span>- 2 Tons</span>
                                <i class="fa-solid fa-mars text-blue-400"></i>
                            </div>
                            <p class="text-[11px] text-gray-400 mt-1">Homens / Grave</p>
                        </button>

                        <button onclick="setTone('minus1', '1 Tom Abaixo (Tenor / Contralto Médio)', 'R$ 9,90')" class="tone-btn text-left p-3 rounded-xl border border-dark-600 bg-dark-800 hover:border-gold-500/60 transition focus:outline-none">
                            <div class="text-xs font-bold text-white flex items-center justify-between">
                                <span>- 1 Tom</span>
                                <i class="fa-solid fa-user text-purple-400"></i>
                            </div>
                            <p class="text-[11px] text-gray-400 mt-1">Tenor / Médio</p>
                        </button>

                        <button onclick="setTone('original', 'Tom Original Oficial (Angel Lee / Soprano)', 'R$ 9,90')" class="tone-btn active-tone text-left p-3 rounded-xl border-2 border-gold-500 bg-dark-700/80 transition focus:outline-none">
                            <div class="text-xs font-bold text-gold-400 flex items-center justify-between">
                                <span>Original</span>
                                <i class="fa-solid fa-venus text-pink-400"></i>
                            </div>
                            <p class="text-[11px] text-gray-300 mt-1">Soprano / Agudo</p>
                        </button>

                        <button onclick="setTone('plus1', '1 Tom Acima (Soprano Muito Alto)', 'R$ 9,90')" class="tone-btn text-left p-3 rounded-xl border border-dark-600 bg-dark-800 hover:border-gold-500/60 transition focus:outline-none">
                            <div class="text-xs font-bold text-white flex items-center justify-between">
                                <span>+ 1 Tom</span>
                                <i class="fa-solid fa-bolt text-yellow-400"></i>
                            </div>
                            <p class="text-[11px] text-gray-400 mt-1">Mais Agudo</p>
                        </button>
                    </div>
                </div>

                <!-- Simulation Player Bar -->
                <div class="bg-dark-800/90 rounded-xl p-4 border border-dark-600/80 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div class="flex items-center gap-3 w-full sm:w-auto">
                        <button id="play-btn" onclick="togglePlay()" class="w-12 h-12 rounded-full bg-gold-500 hover:bg-gold-400 text-dark-900 flex items-center justify-center text-lg font-bold transition shadow-md flex-shrink-0">
                            <i id="play-icon" class="fa-solid fa-play ml-0.5"></i>
                        </button>
                        <div>
                            <p class="text-xs font-bold text-white" id="player-title">Ouvir Demonstração (Trecho de 30s)</p>
                            <p class="text-[11px] text-gold-400" id="player-tone-desc">Reproduzindo em: Tom Original</p>
                        </div>
                    </div>
                    <div class="text-right w-full sm:w-auto flex sm:flex-col items-center sm:items-end justify-between">
                        <span class="text-[10px] uppercase tracking-wider text-gray-400">Preço Acessível:</span>
                        <div class="flex items-baseline gap-1">
                            <span class="text-xs text-gray-400 line-through">R$ 29,90</span>
                            <span class="text-2xl font-black text-white font-cinzel">R$ 9,90</span>
                        </div>
                    </div>
                </div>

                <!-- CTA Button (Kiwify Checkout Link) -->
                <div class="space-y-3">
                    <a id="kiwify-checkout-btn" href="https://kiwify.com.br" target="_blank" class="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 rounded-xl text-center block text-sm sm:text-base transition shadow-lg shadow-green-900/30 uppercase tracking-wider flex items-center justify-center gap-2">
                        <i class="fa-solid fa-lock text-sm"></i>
                        <span id="buy-btn-text">Baixar Playback no Tom Escolhido — R$ 9,90</span>
                    </a>
                    <p class="text-[11px] text-center text-gray-400">
                        <i class="fa-solid fa-shield-halved text-green-400 mr-1"></i> Pagamento Seguro via Kiwify (Pix ou Cartão). Acesso imediato no seu e-mail e WhatsApp.
                    </p>
                </div>
            </div>

            <!-- Upsell Combo Banner -->
            <div class="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-gold-900/40 via-dark-800 to-dark-900 border border-gold-500/40 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center text-2xl flex-shrink-0 border border-gold-500/30">
                        <i class="fa-solid fa-layer-group"></i>
                    </div>
                    <div>
                        <span class="text-[10px] font-bold uppercase tracking-wider bg-gold-500/20 text-gold-300 px-2.5 py-0.5 rounded-full">Oferta do Cantor Completo</span>
                        <h5 class="font-cinzel text-lg font-bold text-white mt-1">Pacote 4 em 1: Leve Todos os Tons</h5>
                        <p class="text-xs text-gray-400">Original + 1 Tom Abaixo + 2 Tons Abaixo + 1 Tom Acima no mesmo download.</p>
                    </div>
                </div>
                <div class="text-center md:text-right flex-shrink-0">
                    <div class="text-xs text-gray-400 line-through">De R$ 39,60</div>
                    <div class="text-2xl font-black text-gold-400 font-cinzel">R$ 19,90</div>
                    <a href="https://kiwify.com.br" target="_blank" class="mt-2 inline-block bg-gold-500 hover:bg-gold-400 text-dark-900 font-bold px-4 py-2 rounded-lg text-xs transition uppercase tracking-wider">
                        Leve o Combo Completo
                    </a>
                </div>
            </div>

        </div>
    </section>

    <!-- Outros Formatos e Insumos (E-book + Partituras + Encomendas) -->
    <section id="outros-formatos" class="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
            <span class="text-gold-400 font-cinzel text-sm uppercase tracking-widest">Catálogo de Recursos Cristãos</span>
            <h3 class="font-cinzel text-2xl md:text-4xl font-bold text-white mt-1">Outros Insumos & Formatos Disponíveis</h3>
            <p class="text-gray-400 text-sm mt-2 max-w-xl mx-auto">Conheça os materiais desenvolvidos para enriquecer ministérios de louvor, pregadores e amantes dos hinos de época.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <!-- Card 1: E-book Historico (O produto existente na Kiwify) -->
            <div id="ebook" class="bg-dark-800 rounded-2xl p-6 border border-dark-600 hover:border-gold-500/50 transition duration-300 flex flex-col justify-between">
                <div>
                    <div class="h-44 rounded-xl bg-dark-700 border border-dark-600 overflow-hidden mb-4 relative">
                        <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80" alt="Ebook Hinos" class="w-full h-full object-cover">
                        <span class="absolute top-3 left-3 bg-dark-900/90 text-gold-400 text-[10px] font-bold px-2.5 py-1 rounded-md border border-gold-500/30">E-book Digital (PDF)</span>
                    </div>
                    <h4 class="font-cinzel font-bold text-lg text-white">As Histórias por Trás dos Hinos Sacros</h4>
                    <p class="text-xs text-gray-400 mt-2 leading-relaxed">
                        O produto oficial que você já tem na Kiwify: o relato tocante da dor, milagres e inspirações dos maiores hinos da história cristã. Excelente para ilustrações de sermões e devocionais.
                    </p>
                </div>
                <div class="mt-6 pt-4 border-t border-dark-600/80 flex items-center justify-between">
                    <div>
                        <span class="text-[10px] text-gray-400 block">Disponível na Kiwify:</span>
                        <span class="font-cinzel font-bold text-xl text-white">R$ 27,90</span>
                    </div>
                    <a href="https://kiwify.com.br" target="_blank" class="bg-dark-700 hover:bg-gold-500 hover:text-dark-900 text-gold-400 text-xs font-bold px-4 py-2.5 rounded-lg border border-gold-500/30 transition">
                        Adquirir Livro
                    </a>
                </div>
            </div>

            <!-- Card 2: Cifras e Partituras -->
            <div class="bg-dark-800 rounded-2xl p-6 border border-dark-600 hover:border-gold-500/50 transition duration-300 flex flex-col justify-between">
                <div>
                    <div class="h-44 rounded-xl bg-dark-700 border border-dark-600 overflow-hidden mb-4 relative">
                        <img src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=400&q=80" alt="Partituras" class="w-full h-full object-cover">
                        <span class="absolute top-3 left-3 bg-dark-900/90 text-gold-400 text-[10px] font-bold px-2.5 py-1 rounded-md border border-gold-500/30">PDF para Instrumentistas</span>
                    </div>
                    <h4 class="font-cinzel font-bold text-lg text-white">Cifras & Partituras Simplificadas</h4>
                    <p class="text-xs text-gray-400 mt-2 leading-relaxed">
                        Caderno de cifras harmônicas e partituras para teclado, piano e violão tocarem os hinos nas reuniões da igreja com total segurança e harmonia exata.
                    </p>
                </div>
                <div class="mt-6 pt-4 border-t border-dark-600/80 flex items-center justify-between">
                    <div>
                        <span class="text-[10px] text-gray-400 block">Investimento:</span>
                        <span class="font-cinzel font-bold text-xl text-white">R$ 14,90</span>
                    </div>
                    <a href="https://kiwify.com.br" target="_blank" class="bg-dark-700 hover:bg-gold-500 hover:text-dark-900 text-gold-400 text-xs font-bold px-4 py-2.5 rounded-lg border border-gold-500/30 transition">
                        Ver Cifras
                    </a>
                </div>
            </div>

            <!-- Card 3: Encomenda de Hinos Específicos -->
            <div class="bg-dark-800 rounded-2xl p-6 border border-dark-600 hover:border-gold-500/50 transition duration-300 flex flex-col justify-between">
                <div>
                    <div class="h-44 rounded-xl bg-dark-700 border border-dark-600 overflow-hidden mb-4 relative">
                        <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=400&q=80" alt="Estúdio Encomenda" class="w-full h-full object-cover">
                        <span class="absolute top-3 left-3 bg-dark-900/90 text-gold-400 text-[10px] font-bold px-2.5 py-1 rounded-md border border-gold-500/30">Serviço Sob Medida</span>
                    </div>
                    <h4 class="font-cinzel font-bold text-lg text-white">Encomenda de Hino Específico</h4>
                    <p class="text-xs text-gray-400 mt-2 leading-relaxed">
                        O cantor ou grupo envia o hino antigo que precisa cantar no congresso ou aniversário da igreja. Produzimos o playback personalizado em até 48 horas.
                    </p>
                </div>
                <div class="mt-6 pt-4 border-t border-dark-600/80 flex items-center justify-between">
                    <div>
                        <span class="text-[10px] text-gray-400 block">A partir de:</span>
                        <span class="font-cinzel font-bold text-xl text-white">R$ 47,00</span>
                    </div>
                    <a href="https://wa.me/" target="_blank" class="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-dark-900 text-xs font-bold px-4 py-2.5 rounded-lg transition flex items-center gap-1.5">
                        <i class="fa-brands fa-whatsapp"></i> Encomendar
                    </a>
                </div>
            </div>

        </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-dark-600 bg-dark-800 py-10 text-center text-xs text-gray-400">
        <div class="max-w-4xl mx-auto px-4">
            <h4 class="font-cinzel font-bold text-gold-400 tracking-wider text-base mb-2">MEMORIAL DA FÉ</h4>
            <p class="text-gray-400 text-xs max-w-md mx-auto mb-6">
                Preservando o legado sacro e equipando os cantores da igreja com excelência sonora e fidelidade bíblica.
            </p>
            <div class="flex items-center justify-center gap-6 text-gray-400 text-sm mb-6">
                <a href="#" class="hover:text-gold-400 transition">Termos de Uso</a>
                <a href="#" class="hover:text-gold-400 transition">Política de Privacidade</a>
                <a href="#" class="hover:text-gold-400 transition">Suporte no WhatsApp</a>
            </div>
            <p class="text-gray-400">© 2026 Memorial da Fé. Todos os direitos reservados. Processado com segurança pela Kiwify.</p>
        </div>
    </footer>

    <!-- Interactive Script -->
    <script>
        let currentTone = 'original';
        let isPlaying = false;

        function setTone(toneKey, description, price) {
            currentTone = toneKey;
            
            document.querySelectorAll('.tone-btn').forEach(b => {
                b.classList.remove('border-2', 'border-gold-500', 'bg-dark-700/80');
                b.classList.add('border', 'border-dark-600', 'bg-dark-800');
            });
            event.currentTarget.classList.add('border-2', 'border-gold-500', 'bg-dark-700/80');
            event.currentTarget.classList.remove('border-dark-600', 'bg-dark-800');

            document.getElementById('selected-key-tag').innerText = description;
            document.getElementById('player-tone-desc').innerText = 'Reproduzindo em: ' + description;
            document.getElementById('buy-btn-text').innerText = 'Baixar Playback no Tom Escolhido — ' + price;
        }

        function togglePlay() {
            isPlaying = !isPlaying;
            const icon = document.getElementById('play-icon');
            const playBtn = document.getElementById('play-btn');
            if (isPlaying) {
                icon.classList.remove('fa-play', 'ml-0.5');
                icon.classList.add('fa-pause');
                playBtn.classList.add('animate-pulse');
            } else {
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play', 'ml-0.5');
                playBtn.classList.remove('animate-pulse');
            }
        }
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'index.html'), html, 'utf8');
console.log('BUILD EXECUTADO: web_memorial_da_fe/index.html gerado com sucesso!');

