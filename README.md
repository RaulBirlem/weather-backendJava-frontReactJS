# Clima — Backend (Java/Spring Boot) + Frontend (React/Vite)

Aplicação para consulta de dados meteorológicos em tempo real, consumindo a **WeatherAPI** e exibindo no frontend as principais informações de clima da cidade informada.

---

## Demonstração

<img width="825" height="523" alt="image" src="https://github.com/user-attachments/assets/fbe29ef1-8cb0-4ca8-a51d-db529c57b0e9" />


---

## Sobre o aprendizado em Java

Todo o desenvolvimento realizado em **Java** neste projeto (consumo de API, manipulação de dados, estruturação do backend e endpoint HTTP com Spring Boot) foi construído com base no conhecimento adquirido no curso:

- Curso: **Curso de Java para Iniciantes com Projetos (Udemy)**
- Link: www.udemy.com/course/curso-de-java-para-iniciantes-com-projetos/
 <img width="1600" height="1190" alt="image" src="https://github.com/user-attachments/assets/de925779-0aa0-4071-a597-08682f899e50" />



---

## Funcionalidades

- Buscar clima atual por cidade
- Exibir:
  - Cidade e país
  - Última atualização
  - Temperatura atual
  - Sensação térmica
  - Condição do tempo
  - Umidade
  - Velocidade do vento
  - Pressão atmosférica
- Tradução da condição do tempo no frontend via `condition.code` (pt-BR)

---

## Stack / Tecnologias

### Backend

- Java
- Spring Boot (API REST)
- Maven
- HttpClient (Java) para consumo da WeatherAPI

### Frontend

- React
- Vite
- Fetch API

## Requisitos

- Java 21+ (recomendado LTS)
- Maven 3.9+
- Node.js 18+ (recomendado)
- Conta/Key da WeatherAPI

---

## Configuração da chave (WeatherAPI)

Este projeto utiliza uma chave da WeatherAPI.

### Backend

Crie o arquivo:

`src/main/resources/apiKey.txt`

Conteúdo do arquivo (somente a chave, sem aspas):
