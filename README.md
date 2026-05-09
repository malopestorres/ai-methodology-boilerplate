# AI-First Development Methodology Boilerplate

## Como Trabalhamos

Nosso time segue um ciclo de vida de software com IA, alinhado à norma **ISO/IEC/IEEE 12207**.

### Principios Fundamentais:

- **Especificação antes do código**: Toda implementação parte de um requisito rastreável, com critérios de aceite definidos.
- **IA com revisão humana**: Agentes de IA atuam em todas as etapas, e quem desenvolve revisa e testa cada trecho gerado.
- **Decisões registradas**: Escolhas de arquitetura ficam em registros de decisão (ADRs), com alternativas e trade-offs.
- **Qualidade verificável**: Integridade garantida no banco de dados, testes automatizados, revisão de código e CI/CD.

## Estrutura do Repositório

```
ai-methodology-boilerplate/
├── .github/                    # GitHub Actions e configurações
│   └── workflows/              # CI/CD pipelines
├── docs/                       # Documentação de ADRs e decisões
├── src/
│   ├── backend/                # Node.js APIs
│   └── frontend/               # React components
├── tests/                      # Test suites (unit, integration, evals)
├── infra/                      # Docker e configurações de infraestrutura
└── README.md                   # Este arquivo
```

## Metodologia AI-First

### 1. **AI-First Development Flow**
- Usar agentes de código (Claude Code, etc.) em todas as etapas
- Manter contexto: requisitos, critérios de aceite e padrões do time
- IA integra LLMs com saídas estruturadas validadas
- Function calling e controle de custo e latência
- Avaliações automatizadas (evals) protegidas contra prompt injection
- Conformidade LGPD garantida

### 2. **Backend (Node.js)**
- APIs REST documentadas em OpenAPI
- Integração com motores de cálculo da plataforma
- Rotinas de dados de engenharia
- Migrações versionadas de banco de dados SQL/NoSQL

### 3. **Frontend (React)**
- Componentes reutilizáveis
- Layout responsivo e acessibilidade
- Interfaces para projetos, cenários e estudos de engenharia

### 4. **Qualidade e Entrega**
- Testes automatizados (unit, integration, evals)
- Revisão de código com foco em saídas de IA
- Git (GitLab) e CI/CD
- Docker para containerização
- Documentação de APIs e decisões técnicas

### 5. **Gestão de Projeto**
- Sprints no Jira com refinamento e estimativas
- Registros de decisão (ADRs) para escolhas de arquitetura
- Orientação a estagiários e pessoas júniores

## Tecnologias Principais

- **Node.js** - APIs REST, endpoints de integração
- **React** - Interface de usuário, componentes
- **SQL/NoSQL** - Modelagem e migrações de banco de dados
- **OpenAPI** - Documentação de APIs
- **Docker** - Containerização
- **Git/GitLab** - Controle de versão e CI/CD