// ========================================
// クイズ機能
// ========================================

class Quiz {
    constructor(quizData, containerId) {
        this.quizData = quizData;
        this.container = document.getElementById(containerId);
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        this.init();
    }

    init() {
        if (!this.container) return;
        this.renderQuiz();
    }

    renderQuiz() {
        const question = this.quizData[this.currentQuestion];
        
        this.container.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-header">
                    <div class="quiz-progress">
                        <div class="quiz-progress-bar" style="width: ${(this.currentQuestion / this.quizData.length) * 100}%"></div>
                    </div>
                    <p class="quiz-counter">問題 ${this.currentQuestion + 1} / ${this.quizData.length}</p>
                </div>
                
                <div class="quiz-question">
                    <h3>${question.question}</h3>
                </div>
                
                <div class="quiz-options">
                    ${question.options.map((option, index) => `
                        <button class="quiz-option" data-index="${index}">
                            ${String.fromCharCode(65 + index)}. ${option}
                        </button>
                    `).join('')}
                </div>
                
                <div class="quiz-feedback" style="display: none;"></div>
                
                <div class="quiz-navigation">
                    <button class="quiz-next" style="display: none;">次の問題へ</button>
                </div>
            </div>
        `;

        this.attachEventListeners();
    }

    attachEventListeners() {
        const options = this.container.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.addEventListener('click', (e) => this.handleAnswer(e));
        });

        const nextBtn = this.container.querySelector('.quiz-next');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextQuestion());
        }
    }

    handleAnswer(e) {
        const selectedIndex = parseInt(e.target.dataset.index);
        const question = this.quizData[this.currentQuestion];
        const isCorrect = selectedIndex === question.correct;
        
        this.userAnswers.push(selectedIndex);
        
        // すべての選択肢を無効化
        const options = this.container.querySelectorAll('.quiz-option');
        options.forEach((option, index) => {
            option.disabled = true;
            if (index === question.correct) {
                option.classList.add('correct');
            }
            if (index === selectedIndex && !isCorrect) {
                option.classList.add('incorrect');
            }
        });

        // フィードバック表示
        const feedback = this.container.querySelector('.quiz-feedback');
        if (isCorrect) {
            this.score++;
            feedback.innerHTML = `
                <div class="feedback-correct">
                    <i class="fas fa-check-circle"></i>
                    <strong>正解！</strong>
                    <p>${question.explanation}</p>
                </div>
            `;
        } else {
            feedback.innerHTML = `
                <div class="feedback-incorrect">
                    <i class="fas fa-times-circle"></i>
                    <strong>不正解</strong>
                    <p>正解は <strong>${String.fromCharCode(65 + question.correct)}</strong> です。</p>
                    <p>${question.explanation}</p>
                </div>
            `;
        }
        feedback.style.display = 'block';

        // 次へボタンを表示
        const nextBtn = this.container.querySelector('.quiz-next');
        nextBtn.style.display = 'block';
    }

    nextQuestion() {
        this.currentQuestion++;
        if (this.currentQuestion < this.quizData.length) {
            this.renderQuiz();
        } else {
            this.showResults();
        }
    }

    showResults() {
        const percentage = Math.round((this.score / this.quizData.length) * 100);
        let message = '';
        let emoji = '';
        
        if (percentage >= 80) {
            message = '素晴らしい！よく理解できています。';
            emoji = '🎉';
        } else if (percentage >= 60) {
            message = '良い結果です。さらに理解を深めましょう。';
            emoji = '👍';
        } else {
            message = 'もう一度コンテンツを復習してみましょう。';
            emoji = '📚';
        }

        this.container.innerHTML = `
            <div class="quiz-results">
                <div class="results-emoji">${emoji}</div>
                <h2>クイズ結果</h2>
                <div class="results-score">
                    <div class="score-circle">
                        <span class="score-number">${this.score}</span>
                        <span class="score-total">/ ${this.quizData.length}</span>
                    </div>
                    <p class="score-percentage">${percentage}%</p>
                </div>
                <p class="results-message">${message}</p>
                
                <div class="results-details">
                    ${this.quizData.map((q, index) => `
                        <div class="result-item ${this.userAnswers[index] === q.correct ? 'correct' : 'incorrect'}">
                            <span class="result-number">問${index + 1}</span>
                            <span class="result-status">
                                ${this.userAnswers[index] === q.correct ? 
                                    '<i class="fas fa-check-circle"></i> 正解' : 
                                    '<i class="fas fa-times-circle"></i> 不正解'}
                            </span>
                        </div>
                    `).join('')}
                </div>
                
                <button class="quiz-retry" onclick="location.reload()">もう一度挑戦</button>
            </div>
        `;
        
        // ローカルストレージに結果を保存
        this.saveProgress(percentage);
    }

    saveProgress(percentage) {
        const pageId = window.location.pathname.split('/').pop().replace('.html', '');
        const progress = JSON.parse(localStorage.getItem('trainingProgress') || '{}');
        progress[pageId] = {
            score: this.score,
            total: this.quizData.length,
            percentage: percentage,
            date: new Date().toISOString()
        };
        localStorage.setItem('trainingProgress', JSON.stringify(progress));
    }
}

// ========================================
// 進捗トラッキング機能
// ========================================

class ProgressTracker {
    constructor() {
        this.pages = [
            { id: 'life100', name: '人生100年時代' },
            { id: 'basic-skills', name: '社会人基礎力' },
            { id: 'business-manner', name: 'ビジネスマナー' },
            { id: 'beginner-guide', name: '新入社員ガイド' },
            { id: 'business-writing', name: 'ビジネス文書' },
            { id: 'excel-powerpoint', name: 'Excel/PowerPoint' },
            { id: 'logical-thinking', name: 'ロジカルシンキング' },
            { id: 'presentation', name: 'プレゼンテーション' },
            { id: 'career-development', name: 'キャリア開発' }
        ];
    }

    getProgress() {
        return JSON.parse(localStorage.getItem('trainingProgress') || '{}');
    }

    calculateOverallProgress() {
        const progress = this.getProgress();
        const completedPages = Object.keys(progress).length;
        return Math.round((completedPages / this.pages.length) * 100);
    }

    renderProgressDashboard(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const progress = this.getProgress();
        const overallProgress = this.calculateOverallProgress();

        container.innerHTML = `
            <div class="progress-dashboard">
                <h2><i class="fas fa-chart-line"></i> 学習進捗</h2>
                
                <div class="overall-progress">
                    <div class="progress-circle">
                        <svg width="120" height="120">
                            <circle cx="60" cy="60" r="54" fill="none" stroke="#e0e0e0" stroke-width="8"/>
                            <circle cx="60" cy="60" r="54" fill="none" stroke="#3498db" stroke-width="8"
                                    stroke-dasharray="${2 * Math.PI * 54}"
                                    stroke-dashoffset="${2 * Math.PI * 54 * (1 - overallProgress / 100)}"
                                    transform="rotate(-90 60 60)"/>
                        </svg>
                        <div class="progress-text">
                            <span class="progress-number">${overallProgress}%</span>
                            <span class="progress-label">完了</span>
                        </div>
                    </div>
                    <p>${Object.keys(progress).length} / ${this.pages.length} ページ</p>
                </div>
                
                <div class="progress-list">
                    ${this.pages.map(page => {
                        const pageProgress = progress[page.id];
                        return `
                            <div class="progress-item ${pageProgress ? 'completed' : ''}">
                                <div class="progress-item-header">
                                    <span class="progress-item-name">${page.name}</span>
                                    ${pageProgress ? 
                                        `<span class="progress-item-score">
                                            <i class="fas fa-check-circle"></i> ${pageProgress.percentage}%
                                        </span>` : 
                                        `<span class="progress-item-pending">未完了</span>`
                                    }
                                </div>
                                ${pageProgress ? 
                                    `<div class="progress-item-date">
                                        ${new Date(pageProgress.date).toLocaleDateString('ja-JP')}
                                    </div>` : 
                                    ''
                                }
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <button class="progress-reset" onclick="if(confirm('進捗をリセットしますか？')) { localStorage.removeItem('trainingProgress'); location.reload(); }">
                    <i class="fas fa-redo"></i> 進捗をリセット
                </button>
            </div>
        `;
    }
}

// ページ読み込み後に初期化
document.addEventListener('DOMContentLoaded', function() {
    // 進捗トラッカーの初期化
    const progressTracker = new ProgressTracker();
    progressTracker.renderProgressDashboard('progress-tracker');
});
