# VAJRA AI — Sovereign Enterprise AI Workbench

### Your AI Partner. On Your Infrastructure.

<p align="center">

**A privacy-first, on-premise Agentic AI Workbench powered by open-weight Large Language Models.**

Designed to bring intelligent automation, enterprise knowledge access, and AI-assisted workflows into secure organizational environments — without making cloud AI services a mandatory dependency.

</p>

---

## Overview

**VAJRA AI** is a sovereign, on-premise AI workbench designed to help organizations adopt advanced AI capabilities while maintaining control over their data, infrastructure, and access policies.

Traditional AI applications often require organizations to transmit sensitive information to external cloud services. This creates challenges for industries handling confidential engineering documents, operational reports, financial records, internal policies, and proprietary business information.

VAJRA approaches this problem differently.

It is designed around a locally deployable AI architecture that combines open-weight language models, intelligent model selection, enterprise knowledge processing, and a centralized web interface.

Rather than functioning as another conversational chatbot, VAJRA aims to become an intelligent enterprise workspace capable of understanding organizational knowledge, assisting employees with technical tasks, and supporting multi-step AI workflows.

**The central principle: Your organization's intelligence should remain under your organization's control.**

---

## Vision & Core Objectives

VAJRA is being developed around five fundamental principles:

- **Data Sovereignty:** Keep organizational information within infrastructure controlled by the organization.
- **Local Intelligence:** Run open-weight AI models through locally managed inference infrastructure.
- **Intelligent Model Routing:** Select suitable models according to the nature of incoming tasks.
- **Enterprise Awareness:** Build AI interactions around organizational knowledge, employee identity, and access policies.
- **Extensibility:** Establish a modular architecture that can support additional models, tools, integrations, and enterprise workflows.

---

## System Architecture

VAJRA follows a modular client-server architecture designed for centralized deployment.

```text
                 EMPLOYEE WORKSTATIONS
                          |
                    Web Browser
                          |
                          v
              +-----------------------+
              |    VAJRA FRONTEND     |
              |                       |
              |   Next.js + React     |
              |   TypeScript          |
              |   Tailwind CSS        |
              +-----------+-----------+
                          |
                       HTTP API
                          |
                          v
              +-----------------------+
              |    FASTAPI BACKEND    |
              |                       |
              |   Request Handling   |
              |   Chat Orchestration |
              |   Model Selection    |
              |   Knowledge Context  |
              +-----------+-----------+
                          |
                          v
              +-----------------------+
              |    MODEL ROUTER       |
              |                       |
              |  Task Classification |
              |  Model Selection     |
              +-----------+-----------+
                          |
                          v
              +-----------------------+
              |   LOCAL AI RUNTIME    |
              |                       |
              |       Ollama          |
              +-----------+-----------+
                          |
             +------------+------------+
             |            |             |
             v            v             v
          General       Coding       Reasoning
           Model        Model          Model
             |            |             |
             +------------+-------------+
                          |
                          v
                 VAJRA AI RESPONSE
```

The long-term enterprise architecture is designed to extend this foundation with authentication, a policy engine, authorized knowledge retrieval, agent orchestration, tool execution, and centralized audit logging.

---

## Technology Stack

| Layer | Technologies |
|---|---|
| Frontend | Next.js, React, TypeScript |
| Styling | Tailwind CSS, custom CSS |
| Icons | Lucide React |
| Backend | Python, FastAPI |
| API Communication | HTTP, REST-style endpoints, JSON |
| AI Runtime | Ollama |
| Language Models | Llama 3.2, Qwen 2.5 |
| Coding Model | Qwen 2.5 Coder |
| Document Processing | Python, pypdf (PDF text extraction prototype) |
| Development Environment | Visual Studio Code |
| Version Control | Git, GitHub |

### AI Models

VAJRA integrates locally hosted open-weight models through Ollama.

The current development configuration includes:

| Model | Intended Role |
|---|---|
| `llama3.2:1b` | General conversational assistance |
| `qwen2.5:1.5b` | Reasoning and technical assistance |
| `qwen2.5-coder:1.5b` | Programming and code-related tasks |

The model architecture is designed to remain extensible, allowing additional approved models to be integrated as hardware resources and project requirements evolve.

---

## Core Capabilities

### 1. Local AI Inference

VAJRA uses Ollama as its local model runtime to communicate with locally available language models.

This enables:

- Running AI models without mandatory external LLM API dependencies.
- Managing multiple locally available models.
- Keeping model inference within the configured infrastructure.
- Building a foundation for private AI deployments.
- Switching between models according to application requirements.

### 2. Intelligent Model Selection

Different AI models have different strengths. VAJRA introduces a model-selection layer to route incoming requests to an appropriate local model.

Examples:

| User Request | Selected Model |
|---|---|
| General conversation | Llama 3.2 |
| Programming assistance | Qwen 2.5 Coder |
| Technical explanation | Qwen 2.5 |

The current implementation uses a prototype keyword-based routing mechanism. The architecture is intended to evolve towards capability-aware routing and more advanced task classification.

### 3. Enterprise Knowledge Integration

VAJRA is designed to work with organization-specific information rather than relying exclusively on general model knowledge.

The current prototype includes a PDF-based company knowledge-loading approach.

The intended knowledge architecture supports:

- Company information.
- Organizational structures.
- Internal policies.
- Standard Operating Procedures (SOPs).
- Technical reports.
- Engineering documentation.
- Operational records.

The next stage is a permission-aware Retrieval-Augmented Generation (RAG) pipeline, allowing relevant information to be retrieved before it is provided to the language model.

### 4. Centralized Web Workbench

VAJRA provides a browser-based interface through which employees can interact with the AI system.

The current interface includes:

- Secure-access-themed login interface.
- VAJRA AI workspace.
- Interactive conversational interface.
- Chat history.
- Quick-action prompts.
- Capability overview.
- Sidebar navigation.
- Profile menu and logout navigation.
- Local and private environment indicators.

The frontend communicates with the Python backend through HTTP requests.

### 5. Enterprise-Oriented Architecture

VAJRA is being designed with organizational deployment in mind.

The target deployment model consists of:

- One centrally managed VAJRA server.
- Browser-based access from employee workstations.
- Centralized AI inference.
- Organization-specific knowledge.
- Employee identity management.
- Role-based permissions.
- Administrative configuration.

This architecture aims to eliminate the need for individual AI installations on every employee workstation.

---

## Security & Sovereignty by Design

Security is a foundational architectural requirement, not an optional feature.

The planned enterprise security architecture separates authorization from language-model reasoning.

A language model must never be responsible for granting itself access to organizational information.

The intended authorization flow is:

```text
Employee Authentication
          |
          v
Employee Identity
          |
          v
Department & Role
          |
          v
Policy Evaluation
          |
          v
Document Classification
          |
          v
Action Authorization
          |
     +----+----+
     |         |
   ALLOW     DENY
     |         |
     v         v
 Authorized   Access
 Retrieval    Rejected
     |
     v
   AI Processing
```

Planned security capabilities include:

- Employee authentication.
- Role-Based Access Control (RBAC).
- Department-aware authorization.
- Document classification.
- Permission-aware knowledge retrieval.
- Access-decision logging.
- Audit trails.
- Human approval for sensitive operations.
- Controlled local tool execution.

**Important:** These are architectural goals and planned capabilities. The current prototype does not yet provide production-grade authentication or a complete permission-enforcement system.

---

## Deployment Vision — One Server, Multiple Workstations

VAJRA is intended to be distributed as a self-hosted enterprise software package.

The proposed deployment model:

```text
              ORGANIZATION'S NETWORK
       +----------------------------------+
       |                                  |
       |         VAJRA SERVER             |
       |                                  |
       |   Web Application                |
       |   Python Backend                 |
       |   AI Orchestration               |
       |   Model Router                   |
       |   Knowledge Processing           |
       |   Local AI Runtime               |
       |   Organizational Data            |
       |                                  |
       +----------------+-----------------+
                        |
              Internal Network
                        |
          +-------------+-------------+
          |             |             |
          v             v             v
       Employee      Employee      Employee
          PC            PC            PC
```

The organization's IT administrator would manage the central installation, configure employees and access policies, and upload approved organizational knowledge.

Employees would access VAJRA through an internal browser URL.

The long-term goal is to support private-network and air-gapped deployments, subject to the organization's infrastructure and deployment configuration.

---

## Project Structure

```text
VAJRA-AI/
│
├── app/
│   ├── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── home/
│   │   └── page.tsx
│   ├── globals.css
│   └── layout.tsx
│
├── components/
│
├── backend/
│   └── main.py
│
├── knowledge/
│   └── NREL_Company_Knowledge.pdf
│
├── models/
│
├── outputs/
│
├── package.json
│
└── README.md
```

The project is organized to keep the frontend, backend, organizational knowledge, and generated outputs logically separated.

---

## Development & Execution

### Prerequisites

- Node.js and npm
- Python 3
- Ollama
- Git
- Visual Studio Code

### 1. Clone the Repository

```bash
git clone https://github.com/bsaswinraj/vajra_ai.git
cd vajra_ai
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Python Dependencies

Create and activate a virtual environment:

```bash
python -m venv venv
```

Windows PowerShell:

```powershell
.\venv\Scripts\Activate.ps1
```

Install the backend packages:

```bash
python -m pip install fastapi uvicorn ollama pypdf
```

### 4. Download Local Models

```bash
ollama pull llama3.2:1b
ollama pull qwen2.5:1.5b
ollama pull qwen2.5-coder:1.5b
```

### 5. Configure Company Knowledge

Place the demonstration company PDF inside:

```text
knowledge/NREL_Company_Knowledge.pdf
```

The current PDF-based prototype uses this document as its company knowledge source.

### 6. Start the Backend

From the project root:

```bash
python -m uvicorn backend.main:app --reload --port 8000
```

### 7. Start the Frontend

Open another terminal:

```bash
npm run dev
```

### 8. Open VAJRA

```text
http://localhost:3000
```

The backend API is available at:

```text
http://localhost:8000
```

---

## Demonstration Environment

VAJRA currently uses a fictional enterprise scenario:

**Nexora Refining & Energy Ltd. (NREL)**

This reference environment models an industrial organization with multiple departments, employees, access tiers, internal policies, and classified information.

It provides a foundation for demonstrating how an enterprise AI workbench could interact with organization-specific knowledge.

The fictional scenario is intended for development and demonstration purposes, not as a representation of a real company.

---

## Development Roadmap

VAJRA is an evolving engineering project. Its roadmap is organized around the transition from a local AI prototype to a deployable enterprise platform.

| Module | Current Stage |
|---|---|
| Next.js web interface | Implemented prototype |
| FastAPI backend | Implemented prototype |
| Ollama integration | Implemented |
| Local language models | Integrated |
| Keyword-based model routing | Prototype implemented |
| PDF company knowledge loading | Prototype |
| Production authentication | Planned |
| Employee management | Planned |
| Role-Based Access Control | Planned |
| Permission-aware RAG | Planned |
| Multimodal document processing | Planned |
| Agentic workflow orchestration | Planned |
| Sandboxed code execution | Planned |
| Word, Excel and PDF generation | Planned |
| Centralized audit logging | Planned |
| Enterprise installer | Planned |
| Air-gapped deployment validation | Planned |

### Upcoming Milestones

**Phase 1 — Intelligent Knowledge Workbench**
- Local document ingestion.
- Retrieval-Augmented Generation.
- Source-grounded responses.
- Improved model selection.

**Phase 2 — Enterprise Security**
- Employee authentication.
- Role and department management.
- Document-level permissions.
- Policy enforcement.
- Audit logging.

**Phase 3 — Agentic Automation**
- Multi-step task planning.
- Local tool integration.
- Controlled code execution.
- Automated report generation.
- Human approval workflows.

**Phase 4 — Enterprise Deployment**
- Containerized installation.
- Centralized administration.
- Multi-user support.
- Model management.
- Offline deployment and update mechanisms.

---

## Why VAJRA?

The future of enterprise AI should not require organizations to compromise control over their most valuable information.

VAJRA explores a different approach: bringing capable AI models directly into the organization's infrastructure and combining them with enterprise-aware knowledge processing, intelligent orchestration, and controlled access.

It is an exploration of how open-weight AI, full-stack engineering, and secure system architecture can come together to build practical AI infrastructure for real-world organizations.

---

## Project Information

**Project:** VAJRA AI — Sovereign Enterprise AI Workbench  
**Category:** Artificial Intelligence | Agentic AI | Enterprise Software | Data Sovereignty  
**Architecture:** Client–Server | Local AI Inference  
**Development Status:** Active Development  
**Primary Languages:** TypeScript, Python  

**Developed as part of:** Smart India Hackathon (SIH) project development.

---

## Author

**B. S. Aswin Raj**

Computer Science and Engineering Undergraduate  
College of Engineering Perumon

Interested in Artificial Intelligence, Full-Stack Development, Enterprise Systems, and Building Scalable Software Solutions.

- GitHub: https://github.com/bsaswinraj
- Portfolio: https://bsaswinraj-portfolio.vercel.app/
- LinkedIn: www.linkedin.com/in/b-s-aswin-raj



---

<p align="center">

### VAJRA AI
**Your AI Partner. On Your Infrastructure.**

*Building the foundation for sovereign, intelligent, and privacy-first enterprise AI.*

</p>
