
import { useState, createContext } from "react"


export const SalasContext = createContext()

export default function SalasProvider({ children }) {
  const [salas, setSalas] = useState([
    {
      nome: 'Sala 1',
      capacidade: 30,
      acessibilidade: true,
      dias: {
        seg: 'Direito Constitucional',
        ter: 'pro',
        qua: '',
        qui: '',
        sex: 'Direito Penal',
      }
    },
    {
      nome: 'Sala 2',
      capacidade: 30,
      acessibilidade: true,
      dias: {
        seg: 'Direito Trabalhista',
        ter: 'Direito Constitucional',
        qua: '',
        qui: 'Legislação',
        sex: '',
      }
    },
    {
      nome: 'Sala 3',
      capacidade: 50,
      acessibilidade: true,
      dias: {
        seg: 'História',
        ter: 'Geografia',
        qua: 'Matemática',
        qui: 'Química',
        sex: 'Física',
      }
    },
    {
      nome: 'Sala 4',
      capacidade: 50,
      acessibilidade: true,
      dias: {
        seg: 'Ingles',
        ter: 'Espanhol',
        qua: '',
        qui: '',
        sex: '',
      }
    },
    {
      nome: 'Laboratório I',
      capacidade: 20,
      acessibilidade: false,
      dias: {
        seg: 'Informática Jurídica',
        ter: 'Programação Web II',
        qua: 'Programação Web I',
        qui: '',
        sex: '',
      }
    },
    {
      nome: 'Laboratório II',
      capacidade: 20,
      acessibilidade: false,
      dias: {
        seg: 'Estrutura de Dados I',
        ter: '',
        qua: '',
        qui: '',
        sex: 'Estrutura de Dados II',
      }
    },
    {
      nome: 'Laboratório III',
      capacidade: 20,
      acessibilidade: false,
      dias: {
        seg: 'Programação Oriendada a Objetos',
        ter: '',
        qua: '',
        qui: 'Lógica de Programação',
        sex: 'Algoritmos e Linguagem de Programação',
      }
    },
    {
      nome: 'Laboratório IV',
      capacidade: 40,
      acessibilidade: false,
      dias: {
        seg: 'Engenharia de Software',
        ter: '',
        qua: 'Arquitetura de Software',
        qui: '',
        sex: '',
      }
    },
  ])
  return (
    <SalasContext.Provider
      value={{ salas, setSalas }}
    >
      {children}
    </SalasContext.Provider>
  )
}

