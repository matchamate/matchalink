'use client'
import { useEffect, useState } from "react";

export default function Register () {
  const [question, setQuestion] = useState([])
  const [showQuestion, setShowQuestion] = useState(false)
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
  const renderElement = (el, idx) => {
    if (el.isOpen) {
      return <p className="text-xs">{el.title}</p>
    } else {
      return <p className="text-5xl">{idx + 1}</p>
    }
  }
  const openQuestion = (idx) => {
    const a = [...question]
    a[idx].isOpen = true
    setActiveQuestionIndex(idx)
    setQuestion(a)
    localStorage.setItem('question-list', JSON.stringify(a))
    setShowQuestion(true)
  }
  const closeQuestion = () => {
    setShowQuestion(false)
  }
  const showQuestionModal = () => {
    if (showQuestion && question.length) {
      return <div className="fixed z-50 w-full h-full grid place-content-center p-5 bg-black bg-opacity-60">
        <div className="bg-main-color w-full max-w-xl h-96 p-5">
          <div className="bg-medium-color h-full flex flex-col justify-center items-center p-5">
            <p className="text-3xl text-center">{question[activeQuestionIndex].title}</p>
            <button onClick={closeQuestion} className="w-24 p-3 mt-5 bg-main-color text-white">Close</button>
          </div>
        </div>
      </div>
    }
  }
  useEffect(() => {
    const q = localStorage.getItem('question-list')
    if (q) {
      setQuestion(JSON.parse(q))
    } else {
      const questionList = [
        {
          type: 'image',
          isOpen: false,
          title: ''
        },
        {
          isOpen: false,
          title: 'Bagaimana perasaan kamu selama bekerja dengan tim developers di MCM?'
        },
        {
          isOpen: false,
          title: 'Bagaimana cara kamu mengatasi rasa jenuh ketika bekerja?'
        },
        {
          isOpen: false,
          title: 'Rekomendasi film yang menurut kamu wajib ditonton'
        },
        {
          isOpen: false,
          title: 'Kalau kamu bisa memilih pekerjaan tanpa mementingkan uang, pekerjaan apa yang akan kamu ambil dan kenapa memilih pekerjaan itu?'
        },
        {
          isOpen: false,
          title: 'Kalau bisa memilih kekuatan super mana yang akan kamu pilih: teleportasi atau bisa membaca pikiran orang lain? Apa alasannya?'
        },
        {
          isOpen: false,
          title: 'Jika kamu hanya bisa makan satu jenis makanan seumur hidupmu, makanan apa yang akan kamu pilih dan kenapa memilih makanan itu?'
        },
        {
          isOpen: false,
          title: 'Pilih mana: menguasai seluruh bahasa manusia (inggris, jepang, mandarin, etc) atau menguasai seluruh bahasa pemrograman di dunia? Apa alasannya?'
        },
        {
          title: 'Jika kamu bisa transmigrasi ke dunia fiksi (film, novel, komik, game, etc), kamu ingin transmigrasi kemana? Jelaskan alasannya!'
        }
      ]
      const a = questionList
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      localStorage.setItem('question-list', JSON.stringify(a))
      setQuestion(a)
    }
  }, [])
  return (
    <div className="w-screen min-h-screen grid grid-cols-1 md:grid-cols-3 text-black bg-super-light p-5 lg:p-10 gap-5 lg:gap-10 relative">
      {showQuestionModal()}
      {question.map((el, idx) => (
        <button onClick={() => openQuestion(idx)} key={idx} className="bg-main-color w-full p-5">
          <div className="bg-medium-color w-full h-60 flex items-center justify-center p-5">
            {renderElement(el, idx)}
          </div>
        </button>
      ))}
    </div>
  )
}