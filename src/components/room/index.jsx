import styles from './styles.module.scss'

import React, { useState } from 'react'

export default function Room({ sala }) {

  const [disciplina, setDisciplina] = useState('')
  const [acessibilidade, setAcessibilidade] = useState('')
  const [disponibilidade, setDisponibilidade] = useState('')
  const [capacidade, setCapacidade] = useState('')
  const [seg, setSeg] = useState(false)
  const [ter, setTer] = useState(false)
  const [qua, setQua] = useState(false)
  const [qui, setQui] = useState(false)
  const [sex, setSex] = useState(false)

  function handleDias(dia) {
    if (dia == 'seg') {
      setSeg(true)
      setTer(false)
      setQua(false)
      setQui(false)
      setSex(false)
      setDisciplina(sala.dias.seg)
      setAcessibilidade(sala.acessibilidade)
      setCapacidade(sala.capacidade)
      if (sala.dias.seg == '') {
        setDisponibilidade('Disponível')
        setDisciplina('')
      }
      else {
        setDisciplina(sala.dias.seg)
        setDisponibilidade('Indisponível')
      }
    }
    if (dia == 'ter') {
      setSeg(false)
      setTer(true)
      setQua(false)
      setQui(false)
      setSex(false)
      setDisciplina(sala.dias.ter)
      setAcessibilidade(sala.acessibilidade)
      setCapacidade(sala.capacidade)
      if (sala.dias.ter == '') {
        setDisponibilidade('Disponível')
        setDisciplina('')
      }
      else {
        setDisciplina(sala.dias.ter)
        setDisponibilidade('Indisponível')
      }
    }
    if (dia == 'qua') {
      setSeg(false)
      setTer(false)
      setQua(true)
      setQui(false)
      setSex(false)
      setDisciplina(sala.dias.qua)
      setAcessibilidade(sala.acessibilidade)
      setCapacidade(sala.capacidade)
      if (sala.dias.qua == '') {
        setDisponibilidade('Disponível')
        setDisciplina('')
      }
      else {
        setDisciplina(sala.dias.qua)
        setDisponibilidade('Indisponível')
      }
    }
    if (dia == 'qui') {
      setSeg(false)
      setTer(false)
      setQua(false)
      setQui(true)
      setSex(false)
      setDisciplina(sala.dias.qui)
      setAcessibilidade(sala.acessibilidade)
      setCapacidade(sala.capacidade)
      if (sala.dias.qui == '') {
        setDisponibilidade('Disponível')
        setDisciplina('')
      }
      else {
        setDisciplina(sala.dias.qui)
        setDisponibilidade('Indisponível')
      }
    }
    if (dia == 'sex') {
      setSeg(false)
      setTer(false)
      setQua(false)
      setQui(false)
      setSex(true)
      setDisciplina(sala.dias.sex)
      setAcessibilidade(sala.acessibilidade)
      setCapacidade(sala.capacidade)
      if (sala.dias.sex == '') {
        setDisponibilidade('Disponível')
        setDisciplina('')
      }
      else {
        setDisciplina(sala.dias.sex)
        setDisponibilidade('Indisponível')
      }
    }
  }

  return (
    <div className={styles.div}>
      <div className={styles.diasDiv}>
        {/* <button>reservar sala</button> */}
        <div className={styles.dias}>
          <span onClick={() => handleDias('seg')}
            className={seg & styles.active}
            style={sala?.dias.seg == '' ? { borderColor: '#00B37E' } : { borderColor: '#F75A68' }}>seg</span>
        </div>
        <div className={styles.dias}>
          <span onClick={() => handleDias('ter')}
            className={ter && styles.active}
            style={sala?.dias.ter == '' ? { borderColor: '#00B37E' } : { borderColor: '#F75A68' }}>ter</span>
        </div>
        <div className={styles.dias}>
          <span onClick={() => handleDias('qua')}
            className={qua && styles.active}
            style={sala?.dias.qua == '' ? { borderColor: '#00B37E' } : { borderColor: '#F75A68' }}>qua</span>
        </div>
        <div className={styles.dias}>
          <span onClick={() => handleDias('qui')}
            className={qui && styles.active}
            style={sala?.dias.qui == '' ? { borderColor: '#00B37E' } : { borderColor: '#F75A68' }}>qui</span>
        </div>
        <div className={styles.dias}>
          <span onClick={() => handleDias('sex')}
            className={sex && styles.active}
            style={sala?.dias.sex == '' ? { borderColor: '#00B37E' } : { borderColor: '#F75A68' }}>sex</span>
        </div>
      </div>
      <div>
        <p>{sala?.nome}</p>
        <p>Disciplina: {disciplina}</p>
        <p>Capacidade: {capacidade}</p>
        <p>Diponibilidade: {disponibilidade}</p>

      </div>


    </div>
  )
}
